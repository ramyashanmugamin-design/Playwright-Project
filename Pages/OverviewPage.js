const {expect} =require('@playwright/test');

class OverviewPage
{
    constructor(page)
    {
        this.page=page;
        this.heading=page.getByText("Checkout: Overview");
        this.productlocator=page.locator('.inventory_item_name');
        this.paymentInfo =page.getByText("Payment Information:");
        this.shippingInfo = page.getByText("Shipping Information:");
        this.total =page.getByText("Total");
        this.finishbutton=page.getByRole('button',{name:'Finish'});

    }

    async completeCheckout(productname)
    {
        await expect(this.heading).toBeVisible();

        await expect(productname).toBeTruthy();

        await expect(this.paymentInfo).toBeVisible();

        await expect(this.shippingInfo).toBeVisible();

        const allTotal = await this.total.all();

        for await (const tot of allTotal)
        {
        await expect(tot).toBeVisible();
        }

        await this.finishbutton.click();

    }

}

module.exports= OverviewPage;