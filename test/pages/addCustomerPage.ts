import { element, by } from "protractor";
import { Alert } from '../../utils/alert';
import { Wait } from '../../utils/waiters';
import {FakeData} from '../../utils/fakedata';
// const log4js = require('../../logger/log4jsconfig').default;

export class AddCustomerPagePO {
    fisrtName = element(by.model('fName'));
    lastName = element(by.model('lName'));
    postalCode = element(by.model('postCd'));
    btnAddCustomer = element(by.xpath("//button[@class='btn btn-default']"));

    addCustomer=async ()=> {
        Wait.waitForElementToBeVisible(this.fisrtName);
        await this.fisrtName.sendKeys(FakeData.FirstName);
        Wait.waitForElementToBeVisible(this.lastName);
        await this.lastName.sendKeys(FakeData.LastName);
        Wait.waitForElementToBeVisible(this.postalCode);
        await this.postalCode.sendKeys(FakeData.ZipCode);
        await this.btnAddCustomer.click();
        await Alert.verifyAndCloseAlert("Customer Added");
    }

    // clickOnAddCustomerButton() {
    //     this.btnAddCustomer.click();
    // }
}