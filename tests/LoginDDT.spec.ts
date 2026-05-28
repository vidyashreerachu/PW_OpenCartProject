import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { DataProvider } from '../utils/dataProvider';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MyAccountPage } from '../pages/MyAccountPage';


//Load JSON test data logindata.json
const jsonFilePath = "testdata/logindata.json";
const loginJsonData = DataProvider.getTestDataFromJson(jsonFilePath);

for(const data of loginJsonData)
{
    test(`Login Test with JSON Data: ${data.testName} @datadriven`, async ({page}) =>
    {
        const config = new TestConfig();
        await page.goto(config.appUrl);

        const homePage = new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page);
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase() === 'success')
        {
            const myAccountPage = new MyAccountPage(page);
            const isLoggedIn = await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy(); 
        }
        else
        {
            const errorMsg = loginPage.getloginErrorMessage();
            expect(errorMsg).toContain('Warning: No match for E-Mail Address and/or Password.');
        }
    });
}


const csvFilePath = 'testdata/logindata.csv';
const loginCSVData = DataProvider.getTestDataFromCsv(csvFilePath);

for(const data of loginCSVData)
{
    test(`Login Test with CSV Data: ${data.testName} @datadriven`, async ({page}) =>
    {
        const config = new TestConfig();
        await page.goto(config.appUrl);

        const homePage = new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page);
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase() === 'success')
        {
            const myAccountPage = new MyAccountPage(page);
            const isLoggedIn = await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy(); 
        }
        else
        {
            const errorMsg = loginPage.getloginErrorMessage();
            expect(errorMsg).toContain('Warning: No match for E-Mail Address and/or Password.');
        }
    });
}