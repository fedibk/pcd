'use strict';

export default class AdminController {
  users: Object[];
  /*@ngInject*/
  constructor(User) {
    // Use the User $resource to fetch all users
    this.users = User.query();
  }
  changeRole(user){
    if(user.role === 'guest'){
      user.role = 'user';
      user.$update();
    }else{
      user.role = 'guest';
      user.$update();
    }
  }

  delete(user) {
    user.$delete();
    this.users.splice(this.users.indexOf(user), 1);
  }
}
