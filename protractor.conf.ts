import { Config, browser, protractor } from "protractor";
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
// import {cucumber,cucumberOpts} from 'protractor-cucumber-framework';

export let config: Config = {
    directConnect: true,
    framework: "jasmine2",
    // framework:"custom",
    // frameworkPath:require.resolve("protractor-cucumber-framework"),
    // SELENIUM_PROMISE_MANAGER:false,
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
    // specs: [
    //     './test/features/Sample.feature'
    // ],
    suites:{
        functional: ['./test/specs/*.js'],
        // smoke: [],
        // sanity: [],
        // regression: []
    },

    // cucumberOpts:{
    //     require:[
    //         '../outputjs/stepDefs/*.js',
    //         // '../outputjs/confi/*.js'
    //     ]
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