import {protractor ,browser ,} from 'protractor';
// const log4js = require('../../logger/log4jsconfig').default;

export class Alert{
    static verifyAndCloseAlert=async (text:string)=>{
        let EC=protractor.ExpectedConditions;
        await browser.wait(EC.alertIsPresent(),5000,'Alert Not Found');
        let alert=browser.switchTo().alert();
        (await alert).accept();
        let alertText=await alert.getText();
    }
}