export default function ({Meteor, Firms}) {
	Meteor.methods({
		'firms.create'(data){
			Firms.insert(data);
		}
	});
}