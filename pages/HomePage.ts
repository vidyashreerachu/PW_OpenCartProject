import { Locator, Page } from '@playwright/test';

export class HomePage
{
    private readonly page:Page;

    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly linkLogin: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.lnkMyAccount = page.locator('a[title="My Account"]');
        this.lnkRegister = page.locator("a:has-text('Register')");
        this.linkLogin = page.locator("a:has-text('Login')");
        this.txtSearchbox = page.locator('input[name="search"]');
        this.btnSearch = page.locator('.btn.btn-default');
    }

    
    // Check if HomePage exists
    async isHomePageExists(): Promise<boolean>
    {
        const title = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

    // Click "My Account" link
    async clickMyAccount(): Promise<void>
    {
        try{
            await this.lnkMyAccount.click();
        }
        catch(error){
            console.log(`Exception occurred while clicking 'My Account': ${error}`);
            throw(error);
        }
    }

    // Click "Register" link
    async clickRegister(): Promise<void>
    {
        try{
            await this.lnkRegister.click();
        }
        catch(error){
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw(error);
        }
    }

    // Click "Login" link
    async clickLogin(): Promise<void>
    {
        try{
            await this.linkLogin.click();
        }
        catch(error){
            console.log(`Exception occurred while clicking 'Login': ${error}`);
            throw(error);
        }
    }

    // Enter product name in the search box
    async enterProductName(pName: string): Promise<void>
    {
        try{
            await this.txtSearchbox.fill(pName);
        }
        catch(error){
            console.log(`Exception occurred while entering product name : ${error}`);
            throw(error);
        }
    }

    // Click the search button
    async clickSearch(): Promise<void>
    {
        try{
            await this.btnSearch.click();
        }
        catch(error){
            console.log(`Exception occurred while clicking 'Search' button: ${error}`);
            throw(error);
        }
    }
}