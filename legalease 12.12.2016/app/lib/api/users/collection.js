import userSchema from './schema';

const Users = Meteor.users;
Users.attachSchema(userSchema);
export default Users;