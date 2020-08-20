import { Config, browser, protractor } from "protractor";
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

export let config: Config = {
    directConnect: true,
    framework: "jasmine2",
    allScriptsTimeout: 100000,
    // *************Run in Chrome************
    capabilities: {
        'browserName': 'chrome',
        'goog:chromeOptions': {
            'args': [
                '--no-sandbox',
                '--disable-infobars',
                '--start-maximized',
                '--disable-dev-shm-usage',
                // "--incognito",
                // '--headless',
                // '--window-size=1920,1080',
                // '--disable-web-security',
            ],
        },
    },
    // *************Run in Firefox************
    // capabilities: {
    //     'browserName':'firefox',
    //     'marionette':true,
    //     'acceptSslCerts':true,
    // },
    specs: [
        './test/specs/bankTest.js'
    ],
    // suites:{
    //     functional: ['./test/specs/*.js'],
    //     smoke: [],
    //     sanity: [],
    //     regression: []
    // },


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 2500000,
        isVerbose: true,
        realtimeFailure: true,
        includeStackTrace: true,
    },

    onPrepare: () => {
        
        (global as any).isAngularSite=(flag:boolean)=>{
            browser.ignoreSynchronization=!flag;
        };

        // protractor.basePath=__dirname;


        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);

        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
        }));
    }
}