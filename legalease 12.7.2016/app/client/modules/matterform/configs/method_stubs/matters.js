export default function ({Meteor, Matters, Store}) {
	Meteor.methods({
		'matters.create'(data){
			Matters.insert(data);
		},
		'matters.update'(id, data){
			Matters.insert(id, {
				$set: data
			});
		}
	});
}