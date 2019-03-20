'use strict';

var express = require('express');
var pkgcloud = require('pkgcloud-bluemix-objectstorage');

var services = process.env.VCAP_SERVICES;
var OS_config = {};

if (services) {
	var env = JSON.parse(services);
	if (env['Object-Storage']) {
		console.log('object storage initiating...');
		var OS_credentials = env['Object-Storage'][0]['credentials'];
		OS_config.provider = 'openstack';
		OS_config.authUrl = OS_credentials['authUrl'];
		OS_config.region = OS_credentials['region'];
		OS_config.useServiceCatalog = true;
		OS_config.useInternal = true;
		OS_config.tenantId = OS_credentials['projectId'];
		OS_config.userId = OS_credentials['userId'];
		OS_config.username = OS_credentials['username'];
		OS_config.password = OS_credentials['password'];
		OS_config.auth = {
			forceUri : 'https://identity.open.softlayer.com/v3/auth/tokens',
			interfaceName : 'public',
			'identity' : {
				'methods' : [
				'password'
				],
				'password' : {
					'user' : {
						'id' : OS_credentials['userId'],
						'password' : OS_credentials['password']
					}
				}
			},
			'scope' : {
				'project' : {
					'id' : OS_credentials['projectId']
				}
			}
		}
	}
} else {
	OS_config.provider = 'openstack';
	OS_config.userId = '60ae8d6df87e4a13a82846da54630fb6';
	OS_config.username = 'Admin_7bf52b263a32c896667111de8139b9686fea5d40';
	OS_config.password = 'gIxLT?oUmh.oo2B4';
	OS_config.useServiceCatalog = true;
	OS_config.useInternal = false;
	OS_config.region = 'dallas';
	OS_config.tenantId = 'e543cf5eebc84c0aa84c577c4db38d2b';
	OS_config.authURL = 'identity.open.softlayer/';
	OS_config.auth = {
		forceUri : 'https://identity.open.softlayer.com/v3/auth/tokens',
		interfaceName : 'public',
		'identity' : {
			'methods' : [
			'password'
			],
			'password' : {
				'user' : {
					'id' : '60ae8d6df87e4a13a82846da54630fb6',
					'password' : 'gIxLT?oUmh.oo2B4'
				}
			}
		},
		'scope' : {
			'project' : {
				'id' : 'e543cf5eebc84c0aa84c577c4db38d2b'
			}
		}
	}
};

var storageClient = pkgcloud.storage.createClient(OS_config);

storageClient.auth(function (error) {
	if (error) {
		console.error('storageClient.auth() : error creating storage client: ', error);
	} else {
		console.log('storageClient.auth() : storage client created');
	};
});

module.exports = storageClient;
