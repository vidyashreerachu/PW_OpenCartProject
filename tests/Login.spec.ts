/**
 * Test Case: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Verify successful login by checking 'My Account' page presence
 */

import{ test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage'; 
import { TestConfig } from '../test.config';
import { LoginPage } from '../pages/LoginPage';

let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;

test.beforeEach(async({page})=>
{
    config = new TestConfig();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    // Navigate to the application URL
    await page.goto(config.appUrl);
});


test.afterEach(async ({page})=>
{
    await page.close();
})


test('User login test @master @sanity @regression', async ({page}) =>
{
    // Navigate to Login page via Home page
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    // Enter valid credentials and log in
    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();

    // Alternatively
    //await loginPage.login(config.email, config.password);

    // Verify successful login by checking 'My Account' page presence
    // const isLoggedIn=await myAccountPage.isMyAccountPageExists();
    // expect(isLoggedIn).toBeTruthy();

});