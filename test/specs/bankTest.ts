import { browser } from "protractor";
import { AddCustomerPagePO } from "../pages/addCustomerPage";
import { ManagerPagePO } from "../pages/managerPage";
import { LoginPagePO } from "../pages/loginPage";
// const log4js = require('../../logger/log4jsconfig').default;
const cred=require('../../staticTestData/credentials');


let login=new LoginPagePO();
let manager=new ManagerPagePO();
let addCus=new AddCustomerPagePO();

describe('XYZ Bank Test', async () => {
    beforeEach(async () => {
        await browser.get(cred.siteURL);
        await (global as any).isAngularSite(false);
        await browser.sleep(3000);
    });
    it('Create User in XYZ Bank', async () => {
        await login.clickOnBankManagerLoginButton();
        await browser.sleep(3000);
        await manager.clickOnAddCustomerButton();
        await browser.sleep(3000);
        await addCus.addCustomer();
        await browser.sleep(3000);
    });
});