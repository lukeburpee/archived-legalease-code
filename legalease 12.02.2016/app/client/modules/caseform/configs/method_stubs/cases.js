export default function ({Meteor, Cases}) {
	Meteor.methods({
		'cases.create'(data){
			Cases.insert(data);
		}
	});
}