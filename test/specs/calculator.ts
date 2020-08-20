import { browser, element, by } from "protractor";
const log4js = require('../../logger/log4jsconfig').default;
const cred=require('../../staticTestData/credentials');

describe('Super Calculator Test', () => {
    beforeEach(async () => {
        await browser.get(cred.siteURL);
        await (global as any).isAngularSite(false);
    });
    it('Launch URL Check', async () => {
        expect(browser.getTitle()).toContain('Super');
        // console.log('App Title: '+await browser.getTitle());
        await log4js.debug('App Title: ' + await browser.getTitle());
    });
    it('Add 2 Numbers', async () => {
        await element(by.model('first')).sendKeys("6");
        await element(by.model('second')).sendKeys("7");
        await element(by.id('gobutton')).click();
        expect<any>(element(by.xpath("//table/tbody/tr[1]/td[3]")).getText()).toEqual("13");
    });
});