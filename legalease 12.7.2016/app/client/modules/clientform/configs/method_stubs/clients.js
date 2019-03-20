export default function ({Clients}) {
	Meteor.methods({
		'clients.create'(data){
				Clients.insert(data);
			}
	});
}