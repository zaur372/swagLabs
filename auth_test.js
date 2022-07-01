const assert = require ('assert');
Feature('auth');
Before (({I}) => {
    I.amOnPage('/');
});
Scenario('Авторизоваться демо пользователем', async({ I, mainPage }) => {
    await mainPage.login('demo', 'demo');
    const name = await mainPage.getwelcome();
    assert.deepStrictEqual(name, 'Log out', 'Отстутствует кнопка Log out');
});
Scenario('Проверить переход на домашнюю страницу', async({ I, mainPage }) => {
    await mainPage.goProduct();
    await mainPage.goHome();
    const home = await mainPage.goHomePrev();
    assert.deepStrictEqual(home, 'Previous', 'Переход на домашнюю страницу не выполнен');
});
Scenario('Проверить переход на следующую страницу товаров', async({ I, mainPage }) => {
    await mainPage.goNext();
    const macBook = await mainPage.goHomePrev();
    assert.deepStrictEqual(macBook, 'Previous', 'Переход на следующую страницу не выполнен');
});
Scenario('Просмотреть корзину', async({ I, mainPage, cartPage }) => {
    await mainPage.goCart();
    const placeOrderText = await cartPage.getPlaceOrder();
    assert.deepStrictEqual(placeOrderText, 'Place Order', 'Переход на вкладку корзина не выполнен');
});
Scenario('Добавить товар в корзину', async({ I, mainPage, productPage, cartPage }) => {
    await mainPage.goProduct()
    await productPage.goAdd();
    await mainPage.goCart()
    const placeOrderText = await cartPage.getPlaceOrder();
    assert.deepStrictEqual(placeOrderText, 'Place Order', 'Переход на вкладку корзина не выполнен'); 
});
