//const { Builder, By, Key, until } = require('selenium-webdriver');
//const assert = require("assert")
import { expect } from 'chai';
import {Builder, By, Key, until} from 'selenium-webdriver';

describe('Webshop Tests', function(){
    this.timeout(30000); // Increase timeout if necessary
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    describe('User Test', function(){
        it('should perform user actions and validate homepage URL', async function() {
            await driver.get('http://localhost:5173/');

        await driver.findElement(By.id('login')).click();
        await driver.sleep(1000) //We only use sleep to demonstrate, it's otherwise not ideal because it slows down the tests

        await driver.wait(until.urlIs('http://localhost:5173/login'), 10000);

        await driver.findElement(By.id('username')).sendKeys('user');
        await driver.sleep(1000)

        await driver.findElement(By.id('password')).sendKeys('user');
        await driver.sleep(1000)

        await driver.findElement(By.id('loginbutton')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('Electronics')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('PC')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('addToCart')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('cart')).click();
        await driver.sleep(1000)
        
        await driver.findElement(By.id('PCCart')).findElement(By.id('removeInCart')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('closeCart')).click();
        await driver.sleep(1000)
        
        await driver.findElement(By.id('logout')).click();
        await driver.sleep(2000)

        const homepageURL = await driver.getCurrentUrl();
        expect(homepageURL).to.equal('http://localhost:5173/');
        });
    });
    describe('Admin Add Product Test', function(){
        it('should add a product as an admin', async function() {
            await driver.get('http://localhost:5173/');

        await driver.findElement(By.id('login')).click();
        await driver.sleep(1000)

        await driver.wait(until.urlIs('http://localhost:5173/login'), 10000);

        await driver.findElement(By.id('username')).sendKeys('admin');
        await driver.sleep(1000)

        await driver.findElement(By.id('password')).sendKeys('admin');
        await driver.sleep(1000)

        await driver.findElement(By.id('loginbutton')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('adminPanel')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('nameNewProduct')).sendKeys('Selenium PC');
        await driver.sleep(1000)

        await driver.findElement(By.id('descriptionNewProduct')).sendKeys('Newest Selenium');
        await driver.sleep(1000)

        await driver.findElement(By.id('imgNewProduct')).sendKeys('imgURL');
        await driver.sleep(1000)

        await driver.findElement(By.id('priceNewProduct')).clear;
        await driver.findElement(By.id('priceNewProduct')).sendKeys(Key.BACK_SPACE,'249');
        await driver.sleep(1000)

        await driver.findElement(By.id('stockNewProduct')).sendKeys(Key.BACK_SPACE,'3');
        await driver.sleep(1000)

        await driver.findElement(By.id('categoriesNewProduct')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('Electronics')).click();
        await driver.sleep(1000)
        
        await driver.findElement(By.id('addNewProduct')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('home')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('Electronics')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('Selenium PC')).click();
        await driver.sleep(1000)

        let productName = await driver.findElement(By.id('productName')).getText()
        expect(productName).to.equal('Selenium PC');
        await driver.sleep(1000)
        
        await driver.findElement(By.id('logout')).click();
        await driver.sleep(2000)
        });
    })
    describe('Admin Update Product Test', function(){
        it('should update a product and verify the price', async function() {
            let js = driver;
            await driver.get('http://localhost:5173/');
        
        await driver.findElement(By.id('login')).click();
        await driver.sleep(1000)

        await driver.wait(until.urlIs('http://localhost:5173/login'), 10000);

        await driver.findElement(By.id('username')).sendKeys('admin');
        await driver.sleep(1000)

        await driver.findElement(By.id('password')).sendKeys('admin');
        await driver.sleep(1000)

        await driver.findElement(By.id('loginbutton')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('adminPanel')).click();
        await driver.sleep(1000)

        let productelement = await driver.findElement(By.id('update-PC'));
        await js.executeScript("arguments[0].scrollIntoView(true);", productelement);
        await driver.sleep(1000)

        await driver.findElement(By.id('update-PC')).click();
        await driver.sleep(1000)

        await js.executeScript("window.scrollBy(0,5000)");
        await driver.sleep(1000)

        let priceInputField = await driver.findElement(By.id('priceUpdate'));
        await priceInputField.clear();
        await driver.findElement(By.id('priceUpdate')).sendKeys(Key.BACK_SPACE,'7499');
        await driver.sleep(1000)

        let stockInputField = await driver.findElement(By.id('stockUpdate'));
        await stockInputField.clear();
        await driver.findElement(By.id('stockUpdate')).sendKeys(Key.BACK_SPACE,'90');
        await driver.sleep(1000)

        await driver.findElement(By.id('updateProduct')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('home')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('Electronics')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('PC')).click();
        await driver.sleep(1000)

        let productPrice = await driver.findElement(By.id('productPrice')).getText();
        expect(productPrice).to.equal('7.499,00 kr.');
        });
    })
})



// async function UserTest() {
//     let driver = await new Builder().forBrowser('chrome').build();
    
//     try {

//         await driver.get('http://localhost:5173/');

//         await driver.findElement(By.id('login')).click();
//         await driver.sleep(1000) //We only use sleep to demonstrate, it's otherwise not ideal because it slows down the tests

//         await driver.wait(until.urlIs('http://localhost:5173/login'), 10000);

//         await driver.findElement(By.id('username')).sendKeys('user');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('password')).sendKeys('user');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('loginbutton')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('Electronics')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('PC')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('addToCart')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('cart')).click();
//         await driver.sleep(1000)
        
//         await driver.findElement(By.id('PCCart')).findElement(By.id('removeInCart')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('closeCart')).click();
//         await driver.sleep(1000)
        
//         await driver.findElement(By.id('logout')).click();
//         await driver.sleep(2000)

//         const homepageURL = await driver.getCurrentUrl()
//         assert.strictEqual(homepageURL, 'http://localhost:5173/')

//     } finally {
//         await driver.quit();
//     }
// }
// async function AdminAddProductTest() {
//     let driver = await new Builder().forBrowser('chrome').build();
//     try {

//         await driver.get('http://localhost:5173/');

//         await driver.findElement(By.id('login')).click();
//         await driver.sleep(1000)

//         await driver.wait(until.urlIs('http://localhost:5173/login'), 10000);

//         await driver.findElement(By.id('username')).sendKeys('admin');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('password')).sendKeys('admin');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('loginbutton')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('adminPanel')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('nameNewProduct')).sendKeys('Selenium PC');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('descriptionNewProduct')).sendKeys('Newest Selenium');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('imgNewProduct')).sendKeys('imgURL');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('priceNewProduct')).clear;
//         await driver.findElement(By.id('priceNewProduct')).sendKeys(Key.BACK_SPACE,'249');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('stockNewProduct')).sendKeys(Key.BACK_SPACE,'3');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('categoriesNewProduct')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('Electronics')).click();
//         await driver.sleep(1000)
        
//         await driver.findElement(By.id('addNewProduct')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('home')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('Electronics')).click();
//         await driver.sleep(1000)
        
//         await driver.findElement(By.id('logout')).click();
//         await driver.sleep(2000)

//     } finally {
//         await driver.quit();
//     }
// }
// async function AdminUpdateProductTest() {
//     let driver = await new Builder().forBrowser('chrome').build();
//     try {
//         let js = driver;
//         await driver.get('http://localhost:5173/');

//         await driver.findElement(By.id('login')).click();
//         await driver.sleep(1000)

//         await driver.wait(until.urlIs('http://localhost:5173/login'), 10000);

//         await driver.findElement(By.id('username')).sendKeys('admin');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('password')).sendKeys('admin');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('loginbutton')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('adminPanel')).click();
//         await driver.sleep(1000)

//         let productelement = await driver.findElement(By.id('update-PC'));
//         await js.executeScript("arguments[0].scrollIntoView(true);", productelement);
//         await driver.sleep(1000)

//         await driver.findElement(By.id('update-PC')).click();
//         await driver.sleep(1000)

//         await js.executeScript("window.scrollBy(0,5000)");
//         await driver.sleep(1000)

//         let priceInputField = await driver.findElement(By.id('priceUpdate'));
//         await priceInputField.clear();
//         await driver.findElement(By.id('priceUpdate')).sendKeys(Key.BACK_SPACE,'7499');
//         await driver.sleep(1000)

//         let stockInputField = await driver.findElement(By.id('stockUpdate'));
//         await stockInputField.clear();
//         await driver.findElement(By.id('stockUpdate')).sendKeys(Key.BACK_SPACE,'90');
//         await driver.sleep(1000)

//         await driver.findElement(By.id('updateProduct')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('home')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('Electronics')).click();
//         await driver.sleep(1000)

//         await driver.findElement(By.id('PC')).click();
//         await driver.sleep(1000)

//         let productPrice = await driver.findElement(By.id('productPrice')).getText();
//         assert.strictEqual(productPrice, '7.499,00 kr.')
        
//         await driver.findElement(By.id('logout')).click();
//         await driver.sleep(2000)

//     } finally {
//         await driver.quit();
//     }
// }

//UserTest();
//AdminAddProductTest();
//AdminUpdateProductTest();