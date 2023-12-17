const { Builder, By, Key, until, Select } = require('selenium-webdriver');

async function UserTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

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

        await driver.findElement(By.id('Computer')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('addToCart')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('cart')).click();
        await driver.sleep(1000)
        
        await driver.findElement(By.id('ComputerCart')).findElement(By.id('removeInCart')).click();
        await driver.sleep(1000)

        await driver.findElement(By.id('closeCart')).click();
        await driver.sleep(1000)
        
        await driver.findElement(By.id('logout')).click();
        await driver.sleep(2000)

    } finally {
        await driver.quit();
    }
}
async function AdminAddProductTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.get('http://localhost:5173/');

        await driver.findElement(By.id('login')).click();
        await driver.sleep(1000) //We only use sleep to demonstrate, it's otherwise not ideal because it slows down the tests

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
        
        await driver.findElement(By.id('logout')).click();
        await driver.sleep(2000)

    } finally {
        await driver.quit();
    }
}

UserTest();
AdminAddProductTest();