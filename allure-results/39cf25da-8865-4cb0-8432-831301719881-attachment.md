# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User login test @master @sanity @regression
- Location: tests\Login.spec.ts:39:5

# Error details

```
Error: locator.fill: Unexpected token "" while parsing css selector "". Did you mean to CSS.escape it?
Call log:
  - waiting for

```

# Test source

```ts
  1  | import{ Locator, Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage
  4  | {
  5  |     private readonly page: Page;
  6  | 
  7  |     private readonly txtEmailAddress: Locator;
  8  |     private readonly txtPassword: Locator;
  9  |     private readonly btnLogin: Locator;
  10 |     private readonly txtErrorMessage: Locator;
  11 | 
  12 |     constructor(page:Page)
  13 |     {
  14 |         this.page = page;
  15 |         this.txtEmailAddress = page.locator('');
  16 |         this.txtPassword = page.locator('');
  17 |         this.btnLogin = page.locator('');
  18 |         this.txtErrorMessage = page.locator('');
  19 |     }
  20 | 
  21 |     /*
  22 |      * Sets the email address in the email field
  23 |      * @param email - Email address to enter
  24 |     */
  25 |     async setEmail(email: string){
> 26 |         await this.txtEmailAddress.fill(email);
     |                                    ^ Error: locator.fill: Unexpected token "" while parsing css selector "". Did you mean to CSS.escape it?
  27 |     }
  28 | 
  29 |     /*
  30 |      * Sets the password in the password field
  31 |      * @param pwd - Password to enter
  32 |     */
  33 |     async setPassword(pwd: string) {
  34 |         await this.txtPassword.fill(pwd);
  35 |     }
  36 | 
  37 |     /*
  38 |      * Clicks the login button
  39 |     */
  40 |     async clickLogin(){
  41 |         await this.btnLogin.click();
  42 |     }
  43 | 
  44 |     /*
  45 |      * Performs complete login action
  46 |      * @param email - Email address to enter
  47 |      * @param password - Password to enter
  48 |      */
  49 |     async login(email: string, password: string){
  50 |         await this.setEmail(email);
  51 |         await this.setPassword(password);
  52 |         await this.clickLogin();
  53 |     }
  54 | 
  55 |     async getloginErrorMessage():Promise<null | string>{
  56 |         return(this.txtErrorMessage.textContent());
  57 |     }
  58 | }
```