const {expect}=require('@playwright/test');

class CheckoutInfoPage
{
   constructor(page)
   {
    this.page = this.page;
    this.heading = page.getByText("Checkout: Your Information");
    this.firstname = page.getByRole('textbox',{name : 'First Name'});
    this.lastname = page.getByRole('textbox',{name : 'Last Name'});
    this.zipcode = page.getByRole('textbox',{name : 'Zip/Postal Code'});
    this.continuebutton = page.getByRole('button',{name : 'Continue'});
   }

   async entercheckoutinfo(fname,lname,zip)
   {
    
    await expect(this.heading).toBeVisible();

    await this.firstname.fill(fname);
    await this.lastname.fill(lname);
    await this.zipcode.fill(zip);
    await this.continuebutton.click();
   }
}

module.exports = CheckoutInfoPage;