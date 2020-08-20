import { element, by } from "protractor";
// const log4js = require('../../logger/log4jsconfig').default;
import { Wait } from '../../utils/waiters';

export class LoginPagePO{
    btnBankManagerLogin=element(by.partialButtonText('Bank Manager Login'));
    btnCustomerLogin=element(by.partialButtonText('Customer Login'));

    clickOnBankManagerLoginButton=async ()=>{
        Wait.waitForElementToBeVisible(this.btnBankManagerLogin);
        await this.btnBankManagerLogin.click();
    }

    clickOnCustomerLoginButton=async ()=>{
        Wait.waitForElementToBeVisible(this.btnCustomerLogin);
        await this.btnCustomerLogin.click();
    }
}