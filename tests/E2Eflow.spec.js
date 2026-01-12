const {test} = require('@playwright/test');

const LoginPage = require("../Pages/LoginPage");
const ProductsPage = require("../Pages/ProductsPage");
const CartPage =require("../Pages/CartPage");
const CheckoutInfoPage =require("../Pages/CheckoutInfoPage");
const OverviewPage =require("../Pages/OverviewPage");
const OrderCompletionPage = require("../Pages/OrderCompletionPage")

const loginData= JSON.parse(JSON.stringify(require("../TestData/LoginInfo.json")));
const productData= JSON.parse(JSON.stringify(require("../TestData/ProductsInfo.json")));
const checkoutData= JSON.parse(JSON.stringify(require("../TestData/CheckoutInfo.json")));

    test("E2Eflow: Product Checkout", async ({page})=>{

    //Login Application

    const loginpage=new LoginPage(page);

    await loginpage.navigate();

    await loginpage.checklogo();

    await loginpage.login(loginData.UserName,loginData.Password);

    //Adding Product to cart

    const products=new ProductsPage(page);

    await products.additem(productData.ProductName);

    await products.gotocart();

    // Verifying Cart
    
    const cart=new CartPage(page);

    await cart.checkout(productData.ProductName);

    // Entering Checkout Information

    const infoPage = new CheckoutInfoPage(page);

    await infoPage.entercheckoutinfo(checkoutData.FirstName,checkoutData.LastName,checkoutData.ZipCode);

    // Verifying and finishing checkoutprocess

    const overview = new OverviewPage(page);

    await overview.completeCheckout(productData.ProductName);

    //  Order completion

    const orderpage =new OrderCompletionPage(page);

    await orderpage.verifyOrdercompletion();

    });



