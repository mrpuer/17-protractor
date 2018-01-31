'use strict';
const expect = require('chai').expect;
/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', () => {

  describe('Main menu', () => {
    let listMenuAll;
    before(() => {
      browser.get('/#!/list');
      listMenuAll = element.all(by.repeater('page in $ctrl.pages'));
    });

    it('HAS a active menu element highligth', () => {
      const listMenuFirst = listMenuAll.first().getAttribute('class');
      expect(listMenuFirst).eventually.to.include('active');
    });
    it('HAS NOT inactive menu element highligth', () => {
      const listMenuFirst = listMenuAll.last().getAttribute('class');
      expect(listMenuFirst).eventually.to.not.include('active');
    });
  });

  describe('/myaccount', () => {
    before(() => {
      browser.get('/#!/myaccount');
    });

    it('Form is exist and visible', () => {
      const userInput = element(by.model('$ctrl.newUser.name'));
      expect(userInput.isDisplayed()).eventually.to.be.true;
    });

    describe('Check for required fields', () => {
      let formButton;
      beforeEach(() => {
        formButton = element(by.id('formButton'));
      });
      it('inactive button if no input text', () => {
        expect(formButton.isEnabled()).eventually.to.be.false;
      });
      it('inactive button if the form is fillet not correctly', () => {
        element(by.model('$ctrl.newUser.name')).sendKeys('b');
        element(by.model('$ctrl.newUser.email')).sendKeys('a@a');
        element(by.model('$ctrl.newUser.phone')).sendKeys('+799');
        expect(formButton.isEnabled()).eventually.to.be.false;
      });
      it('active button if form fields is submitted', () => {
        element(by.model('$ctrl.newUser.name')).sendKeys('vova');
        element(by.model('$ctrl.newUser.email')).sendKeys('a@a.ru');
        element(by.model('$ctrl.newUser.phone')).sendKeys('+79991112233');
        expect(formButton.isEnabled()).eventually.to.be.true;
      });
    });
  });
});
