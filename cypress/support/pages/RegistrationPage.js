import BasePage from "./BasePage";
class RegistrationPage extends BasePage {
// personal info
    visit() {
        cy.log('Open authorization form');
        cy.visit('/index.php?rt=account/create');
    }

    getFirstNameField() {
        return cy.get('#AccountFrm_firstname');
    }

    getLastNameField() {
        return cy.get('#AccountFrm_lastname');
    }

    getEmailField() {
        return cy.get('#AccountFrm_email');
    }

    getTelephoneField() {
        return cy.get('#AccountFrm_telephone');
    }

    getFaxField() {
        return cy.get('#AccountFrm_fax');
    }

    ///address


    getCompanyField() {
        return cy.get('#AccountFrm_company');
    }

    getAddressOneField() {
        return cy.get('#AccountFrm_address_1');
    }

    getAddressTwoField() {
        return cy.get('#AccountFrm_address_2');
    }

    getCityField() {
        return cy.get('#AccountFrm_city');
    }

    getPostcodeField() {
        return cy.get('#AccountFrm_postcode');
    }

    getCountryField() {
        return cy.get('#AccountFrm_country_id');
    }

    getZoneField() {
        return cy.get('#AccountFrm_zone_id');
    }
    //// login details

    getAccountLoginField() {
        return cy.get('##AccountFrm_loginname');
    }

    getAccountPasswordField() {
        return cy.get('#AccountFrm_password');
    }

    getAccountPasswordConfirmField() {
        return cy.get('#AccountFrm_confirm');
    }


    //// news letter
    getNewsLetterCheckbox() {
        return cy.get('#AccountFrm_newsletter0');
    }

    getAgreeCheckbox() {
        return cy.get('#AccountFrm_agree');
    }

    //submit form

    getContinueButton() {
        return cy.get('[title=Continue]');
    }

}

export default new RegistrationPage()