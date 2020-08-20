import { element, by } from "protractor";
// const log4js = require('../../logger/log4jsconfig').default;
import { Wait } from '../../utils/waiters';

export class ManagerPagePO{
    btnAddCustomer=element(by.partialButtonText('Add Customer'));
    btnOpenAccount=element(by.partialButtonText('Open Account'));
    btnCustomers=element(by.partialButtonText('Customers'));

    clickOnAddCustomerButton=async ()=>{
        Wait.waitForElementToBeVisible(this.btnAddCustomer);
        await this.btnAddCustomer.click();
    }

    clickOnOpenAccountButton=async ()=>{
        Wait.waitForElementToBeVisible(this.btnOpenAccount);
        await this.btnOpenAccount.click();
    }

    clickOnCustomersButton(){
        Wait.waitForElementToBeVisible(this.btnCustomers);
        this.btnCustomers.click();
    }
}