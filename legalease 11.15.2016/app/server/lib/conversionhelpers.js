import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

var fs = require('fs');
var request = require('request');
var mime = require('mime');

export function documentConvertAPI(inputType, outputType, data, callback){
		var options = {
			url: Meteor.settings.UNOCONV_SERVER,
			headers: {
				'Content-Type': inputType,
				Accept: outputType
			}
		};
		var isBuffer = data instanceof Buffer;
		if (typeof data === 'object' && !isBuffer) data = JSON.stringify(data);
		if (data){
			options.body = data;
		}
		if (isBuffer || !data) {
			options.encoding = null;
		}
		if (callback){
			request.post(options, function(err, response){
				if (err){ return callback(err); }
				if (response.statusCode !== 200){
					err = new Error(response.body);
					err.code = response.statusCode;
					return callback(err);
				}
				var result =response.body;
				if (isBuffer){
					return result;
				}
				callback(null, result);
			});
		} else {
			return request.post(options);
		}
};
export function documentExtractTextAPI(data, inputType, callback){
		var options = {
			url: Meteor.settings.TIKA_SERVER + '/tika',
			headers: {
				'Content-Type': inputType
			}
		};
		var isBuffer = data instanceof Buffer;
		if (typeof data === 'object' && !isBuffer) data = JSON.stringify(data);

		if (data){
			options.body = data;
		}
		if (isBuffer || !data) {
			options.encoding = null;
		}
		if (callback){
			request.post(options, function(err, response){
				if (err){ return callback(err); }
				if (response.statusCode !== 200){
					err = new Error(response.body);
					err.code = response.statusCode;
					return callback(err);
				}
				var result =response.body;
				if (isBuffer){
					return result;
				}
				callback(null, result);
			});
		} else {
			return request.post(options);
		}
};
export function documentExtractMetaAPI(data, inputType, callback){
		var options = {
			url: Meteor.settings.TIKA_SERVER + '/rmeta',
			headers: {
				'Content-Type': inputType
			}
		};
		var isBuffer = data instanceof Buffer;
		if (typeof data === 'object' && !isBuffer) data = JSON.stringify(data);

		if (data){
			options.body = data;
		}
		if (isBuffer || !data) {
			options.encoding = null;
		}
		if (callback){
			request.post(options, function(err, response){
				if (err){ return callback(err); }
				if (response.statusCode !== 200){
					err = new Error(response.body);
					err.code = response.statusCode;
					return callback(err);
				}
				var result =response.body;
				if (isBuffer){
					return result;
				}
				callback(null, result);
			});
		} else {
			return request.post(options);
		}
};
export function	documentZipAPI(data, inputType, callback){
		var options = {
			url: Meteor.settings.TIKA_SERVER + '/unpack',
			headers: {
				'Content-Type': inputType
			}
		};
		var isBuffer = data instanceof Buffer;
		if (typeof data === 'object' && !isBuffer) data = JSON.stringify(data);

		if (data){
			options.body = data;
		}
		if (isBuffer || !data) {
			options.encoding = null;
		}
		if (callback){
			request.post(options, function(err, response){
				if (err){ return callback(err); }
				if (response.statusCode !== 200){
					err = new Error(response.body);
					err.code = response.statusCode;
					return callback(err);
				}
				var result =response.body;
				if (isBuffer){
					return result;
				}
				callback(null, result);
			});
		} else {
			return request.post(options);
		}
};
export function	documentUnZipAPI(data, inputType, callback){
		var options = {
			url: Meteor.settings.TIKA_SERVER + '/unpack',
			headers: {
				'Content-Type': inputType
			}
		};
		var isBuffer = data instanceof Buffer;
		if (typeof data === 'object' && !isBuffer) data = JSON.stringify(data);

		if (data){
			options.body = data;
		}
		if (isBuffer || !data) {
			options.encoding = null;
		}
		if (callback){
			request.post(options, function(err, response){
				if (err){ return callback(err); }
				if (response.statusCode !== 200){
					err = new Error(response.body);
					err.code = response.statusCode;
					return callback(err);
				}
				var result =response.body;
				if (isBuffer){
					return result;
				}
				callback(null, result);
			});
		} else {
			return request.post(options);
		}
};