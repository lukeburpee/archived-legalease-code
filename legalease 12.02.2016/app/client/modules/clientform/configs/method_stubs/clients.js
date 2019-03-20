export default function ({Meteor, Clients}) {
	Meteor.methods({
		'clients.create'(data){
			Clients.insert(data);
		}
	});
}