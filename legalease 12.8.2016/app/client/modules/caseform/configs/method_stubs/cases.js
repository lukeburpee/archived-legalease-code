export default function ({Meteor, Cases, Store}) {
	Meteor.methods({
		'cases.create'(data){
			const state = Store.getState();
			Cases.insert(data);
		}
	});
}