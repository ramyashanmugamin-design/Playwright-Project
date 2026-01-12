const {expect}=require('@playwright/test');

class CartPage
{
   constructor(page)
   {
    this.page = this.page;
    this.cartHeading = page.getByText("Your Cart");
    this.checkoutbutton = page.getByRole('button',{name : 'Checkout'});
   }

   async checkout(productname)
   {
    
    await expect(productname).toBeTruthy();
    await this.checkoutbutton.click();
   }
}

module.exports = CartPage;