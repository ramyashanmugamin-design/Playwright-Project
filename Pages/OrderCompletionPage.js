const {expect} =require('@playwright/test');

class OrderCompletionPage
{
    constructor(page)
    {
        this.page=page;
        this.heading=page.getByText("Checkout: Complete!");
        this.msg =page.getByText("Thank you for your order!");
        this.backbutton=page.getByRole('button',{name:'Back Home'});

    }

    async verifyOrdercompletion()
    {
        await expect(this.heading).toBeVisible();

        await expect(this.msg).toBeVisible();

        await expect(this.backbutton).toBeVisible();

    }

}

module.exports= OrderCompletionPage;