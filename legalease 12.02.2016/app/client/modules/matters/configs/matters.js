export default function ({Meteor, Matters}) {
	Meteor.methods({
		'matters.create'(data){
			Matters.insert(data);
		}
	});
}