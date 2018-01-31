angular.module('myApp').component('accountComponent', {
  templateUrl: 'Account/AccountComponent.html',
  controller: function(AccountService) {
    this.userInfoShow = AccountService.getStatus();
    this.userInfo = AccountService.getData();

    this.addUser = function(newUser) {
      AccountService.addUser(newUser);
      this.userInfo = AccountService.getData();
      this.userInfoShow = AccountService.getStatus();
    };

    this.removeUser = function() {
      AccountService.removeUser();
      this.userInfo = AccountService.getData();
      this.userInfoShow = AccountService.getStatus();
    };
  }
});