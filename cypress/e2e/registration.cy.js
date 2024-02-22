import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker'
import registrationPage from "../support/pages/RegistrationPage";
import loginPage from "../support/pages/LoginPage";

user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'some.fakeMail.qa', allowSpecialCharacters: false });
user.loginname = faker.internet.userName();

describe('register with valid data', () => {
  it('Registration', () => {
    cy.log('Open registration form');
    registrationPage.visit();

    cy.log('Fill in the fields Personal Details fields');
    registrationPage.getFirstNameField().type(user.firstname).should('have.prop', 'value', user.firstname);
    registrationPage.getLastNameField().type(user.lastname).should('have.prop', 'value', user.lastname);
    registrationPage.getEmailField().type(user.email).should('have.prop', 'value', user.email);
    registrationPage.getTelephoneField().type(user.telephone).should('have.prop', 'value', user.telephone);
    registrationPage.getFaxField().type(user.fax).should('have.prop', 'value', user.fax);
///
    cy.log('Fill in the Your Address fields');
    registrationPage.getCompanyField().type(user.company).should('have.prop', 'value', user.company);
    registrationPage.getAddressOneField().type(user.address_1).should('have.prop', 'value', user.address_1);
    registrationPage.getAddressTwoField().type(user.address_2).should('have.prop', 'value', user.address_2);
    registrationPage.getCityField().type(user.city).should('have.prop', 'value', user.city);
    registrationPage.getPostcodeField().type(user.postcode).should('have.prop', 'value', user.postcode);
    registrationPage.getCountryField().select(user.country).should('have.prop', 'value', user.country_id);
    registrationPage.getZoneField().select(user.zone_name).should('have.prop', 'value', user.zone_id);

    cy.log('Fill in the Login Details fields');
    registrationPage.getAccountLoginField().type(user.loginname).should('have.prop', 'value', user.loginname);
    registrationPage.getAccountPasswordField().type(user.password).should('have.prop', 'value', user.password);
    registrationPage.getAccountPasswordConfirmField().type(user.password).should('have.prop', 'value', user.password);

    cy.log('Fill in the Newsletter');
    registrationPage.getNewsLetterCheckbox().click().should('be.checked');
    registrationPage.getAgreeCheckbox().check().should('be.checked');

    cy.log('Submit form and check results');
    registrationPage.getContinueButton().click().should('have.prop', 'textContent', ' Your Account Has Been Created!');
  })

  it('Authorization', ()=>{

    cy.log('Open authorization form');
    loginPage.visit();

    cy.log('Fill in authorization fields');
    loginPage.getLoginNameField().type(user.loginname);
    loginPage.getPasswordField().type(user.password);
    loginPage.getSubmitButton().click();

    cy.log('User first name should display on page');
    loginPage.getErrorMessageText().should('contain', user.firstname)
  })
})
