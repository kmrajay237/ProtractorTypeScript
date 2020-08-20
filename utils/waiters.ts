import { protractor, browser } from "protractor";
let EC=protractor.ExpectedConditions;
export class Wait{
    static waitForElementToBeVisible=async (element:any)=>{
        await browser.wait(EC.visibilityOf(element),5000,'Element Not Visible');
    }

    static waitForElementToBeClickable=async (element:any)=>{
        await browser.wait(EC.elementToBeClickable(element),5000,'Element Not Clickable');
    }

    static waitForElementToBePresent=async (element:any)=>{
        await browser.wait(EC.presenceOf(element),5000,'Element Not Present');
    }
}