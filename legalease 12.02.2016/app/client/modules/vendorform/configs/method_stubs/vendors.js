export default function ({Meteor, Vendors}) {
	Meteor.methods({
		'vendors.create'(data){
			Vendors.insert(data);
		}
	});
}