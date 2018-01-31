angular.module('myApp').component('menuComponent', {
  templateUrl: 'MenuComponent/MenuComponent.html',
  controller: function() {
    this.pages = [
      {
        sref: 'list',
        name: 'Список'
      },
      {
        sref: 'createNewPokemon',
        name: 'Добавить нового'
      },
      {
        sref: 'account',
        name: 'Регистрация'
      }
    ];
  }
});