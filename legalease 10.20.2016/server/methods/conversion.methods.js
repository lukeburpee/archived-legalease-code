import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'doc.convert': function(inputFile){
		HTTP.call('POST', 'http://localhost:32768/unoconv/pdf', 
		{file: inputFile}, 
			function(error, response){
				if (error){
					console.log(error);
				} else {
					return response;
				}
			}
		);
	}
})