### PST Extraction

place pst files in `pst-extract/pst/`

1. `bin/explode_psts.sh`  - runs readpst to convert pst to mbox
1. `bin/normalize_mbox.sh` - mbox files to json
1. `bin/run_spark_tika.sh` - tika extract text of attachments
1. `bin/run_tika_content_join.sh` - join attachment text with email json
1. `bin/run_spark_content_split.sh` - removes base64 encoded attachment from emails json and puts the json in to a separate directory 
1. `bin/run_spark_emailaddr.sh` - email address extraction and community assignment
1. `bin/run_spark_email_community_assign.sh` - assign communities to email json objects 
1. `bin/run_spark_topic_clustering.sh` - assign topic clustering to email json objects output by community assign 
1. `bin/run_spark_mitie.sh` - Run MITIE to generate entities for email and add to email json generated by topic clustering
1. `bin/run_spark_es_ingest_emailaddr.sh` - ingest emailaddrs to ES index 
1. `bin/run_spark_es_ingest_attachments.sh` - ingest attachments to ES index 
1. `bin/run_spark_es_ingest_emails.sh` - ingest emails with entities to ES index 


### Extras 

** Location Extraction **

__Locations extracted from text__<br/>
1. `bin/build_clavin_index.sh` setup location index (only needs to be
run once)<br />
2. `bin/run_location_extract.sh` extracts locations from text body
uses input from `bin/run_spark_content_split` task

__Locations extracted by IP__<br/>
1. `bin/setup_geo2ip.sh` setup geoip index <br />
2. `bin/run_spark_originating_location.sh` extracts location from ip address

<br /><br />

![Workflow](etc/workflow.png?raw=true "extraction workflow")


<br /> <br />

This product includes GeoLite2 data created by MaxMind, available from [http://www.maxmind.com](http://www.maxmind.com).