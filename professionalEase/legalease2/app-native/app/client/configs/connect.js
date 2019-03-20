import Meteor from 'react-native-meteor';

Meteor.connect('ws://localhost:3000/websocket', {
	autoConnect:true,
	autoReconnect:true,
	reconnectInterval:10000
});
Meteor.ddp.on('connected', (error)=> {
	if (error){
		console.log('error connecting to LegalEase network: ', error);
	} else {
		console.log('connected to LegalEase network');
	}
});
