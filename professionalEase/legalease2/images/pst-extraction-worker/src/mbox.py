#! /usr/bin/env python2.7
# -*- coding: utf-8 -*-

import argparse
import sys
import os

import itertools
import collections

import datetime
import email_extract_json_unicode
import mailbox
import uuid
import traceback
import json

sys.path.append("./utils")

from utils.file import spit, slurp, mkdirp

def timeNow():
    return datetime.datetime.now().strftime('%H:%M:%S')

def prn(msg):
    print "[{}] {}".format(timeNow(), msg)

def skip(iterable, at_start=0, at_end=0):
    it = iter(iterable)
    for x in itertools.islice(it, at_start):
        pass
    queue = collections.deque(itertools.islice(it, at_end))
    for x in it:
        queue.append(x)
        yield queue.popleft()

def mbox_files(dir_):
    for root, _, files in os.walk(dir_):
        for f in files:
            if f.endswith("mbox"):
                yield os.path.abspath("{}/{}".format(root, f))
            else:
                print "{} is not an .mbox file -- If you think it should be indexed pleases rename".format(f)

if __name__ == "__main__":

    desc = '''
examples:
    ./pst/mbox.py {pst_mbox_directory} output_path
    '''

    parser = argparse.ArgumentParser(
        description=" ... ", 
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=desc)
    #parser.add_argument("-a","--header", action='store_true', help="add header to output")
    #parser.add_argument("-s","--start", type=int, default=0, help="start at line #")
    #parser.add_argument("-l", "--limit", type=int, default=0, help="end at line #")

    parser.add_argument("mbox_path", help="mbox file path")
    parser.add_argument("out_dir", help="ouput directory")
    parser.add_argument("-p", "--preserve_attachments", type=bool, default=False, help="Should inlined attachments be preserved as files or omitted from the results?")

    parser.add_argument("-i", "--ingest_id", required=True, help="ingest id, usually the name of the email account, or the ingest process")
    parser.add_argument("-c", "--case_id", required=True, help="case id used to track and search accross multiple cases")
    parser.add_argument("-a", "--alt_ref_id", required=True, help="an alternate id used to corelate to external datasource")
    parser.add_argument("-b", "--label", required=True, help="user defined label for the dateset")

    #parser.add_argument("infile", nargs='?', type=argparse.FileType('r'), default=sys.stdin, help="Input File")
    args = parser.parse_args()

    lex_date = datetime.datetime.utcnow().strftime('%Y%m%d%H%M%S')
    mbox_path = os.path.abspath(args.mbox_path)
    for i, mbox_file in enumerate(mbox_files(mbox_path)):
        count_failures = 0
        outfile = "{}/output_part_{:06d}".format(args.out_dir, i)
        print mbox_file
        
        for j, message in enumerate(mailbox.mbox(mbox_file)):
            guid = str(uuid.uuid1())
            try:
                categories = email_extract_json_unicode.categoryList(os.path.split(mbox_file)[0].replace(mbox_path, "", 1))
                row = email_extract_json_unicode.extract(guid, message, categories, preserve_attachments=args.preserve_attachments)
                row["ingest_id"] = args.ingest_id
                row["case_id"] = args.case_id
                row["alt_ref_id"] = args.alt_ref_id
                row["label"] = args.label
                row["original_artifact"] = {"filename" : os.path.basename(mbox_file), "type" : "mbox"}

                spit(outfile, json.dumps(row)+ u"\n")
            except UnicodeDecodeError as e:
                try:
                    _,name = os.path.split(mbox_file)
                    _dir = "{}/{}_{}".format("tmp/failed", name, lex_date)
                    mkdirp(_dir)
                    spit("{}/{}.eml".format(_dir, guid), str(message))
                except:
                    print "Failed to log broken file!  Check dataset for Errors!"

                # print "-------------------------------"
                # traceback.print_exc()
                # traceback./
                # print "+++++++++++++++++++++++++++++++"

                count_failures += 1
                print "FAILED to process mbox message part for {} --  Exception line: {} | {} .".format(guid, j, e)

            if j % 100 == 0:
                prn("completed line: {}".format(j)) 

        print "Completed processing mbox file {}. Total messages={} Failures={}".format(mbox_file, j, count_failures)
    print "Completed processing all mbox files.  Check for failures above."