const {expect} =require('@playwright/test');

class LoginPage
{
  constructor(page)
  {
    this.page = page;
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginbutton = page.getByRole('button',{name: 'Login'});
    this.logo =page.getByText("Swag Labs");
}
 async navigate()
 {
    await this.page.goto("https://www.saucedemo.com/");
 }

async login(UserName,Password)
{
  
        await this.username.fill(UserName);
        await this.password.fill(Password); 
        await this.loginbutton.click();
}

async checklogo()
{
  await expect(this.logo).toBeVisible();
}

}

module.exports=LoginPage;