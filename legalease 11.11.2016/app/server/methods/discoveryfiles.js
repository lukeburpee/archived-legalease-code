import { Meteor } from 'meteor/meteor';
import { DiscoveryFiles } from './../../lib/collections';

export default function (){
	Meteor.methods({
		'discoveryfiles.default.add'(files){
			let file;
			let output = [];
			for (let i=0; i<files.length;i++){
				file = DiscoveryFiles.insert({
					file: files[i],
					streams: 'dynamic',
					chunkSize: 'dynamic',
					allowWebWorkers: true
				}, false);
				output.append(file);
			}
			return output;
		}
	});
	Meteor.methods({
		'discoveryfiles.default.startAll'(files){
			for (let i; i<files.length;i++){
				files[i].init();
			}
		}
	});
}