/*
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */

import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { HomePage } from '../pages/HomePage';
import { faker } from '@faker-js/faker';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let config: TestConfig;
let homePage: HomePage;
let registrationPage: RegistrationPage;

test.beforeEach(async ({page}) =>
{
    config = new TestConfig();
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);

    // Navigate to application URL
    await page.goto(config.appUrl);
});


test.afterEach(async({page})=>
{
    await page.close();
})


test('User registration test @master @sanity @regression', async () =>
{
    // Go to 'My Account' and click 'Register'
    await homePage.clickMyAccount();
    await homePage.clickRegister();

    // Fill in registration details with random data
    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getLastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    // Agree to Privacy Policy and submit the form
    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    // Validate the confirmation message
    const confirmationMsg = await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!');

})
