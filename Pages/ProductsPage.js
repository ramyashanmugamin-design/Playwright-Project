const {expect} =require('@playwright/test');

class ProductsPage
{
    constructor(page)
    {
        this.page=page;
        this.heading=page.getByText("Products");
        this.productlocator=page.locator('.inventory_item');
        this.carticon=page.locator('.shopping_cart_link');
        this.cartbadge=page.locator('.shopping_cart_badge');
    }

    async additem(productname)
    {
        await expect(this.heading).toBeVisible();

        await expect(this.carticon).toBeVisible();

        const specificProduct = this.productlocator.filter({ hasText: productname });

        await expect(specificProduct).toBeVisible();

        await specificProduct.getByRole('button', { name: 'Add to cart' }).click();

        await expect(specificProduct.getByRole('button', { name: 'Remove' })).toBeVisible(); 

        await expect(this.cartbadge).toBeVisible();

    }

    async gotocart()
    {
        await this.carticon.click();
    }
}

module.exports= ProductsPage;