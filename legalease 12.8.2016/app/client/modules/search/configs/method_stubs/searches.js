export default function ({Meteor, Searches}) {
	Meteor.methods({
		'searches.create'(data){
			Searches.insert(data);
		}
	});
}