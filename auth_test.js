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
});
Scenario('Проверить переход на следующую страницу товаров', async({ I, mainPage }) => {
    await mainPage.goNext();
});
Scenario('Просмотреть корзину', async({ I, mainPage }) => {
    await mainPage.goCart();
});
Scenario('Добавить товар в корзину', async({ I, mainPage, productPage, cartPage }) => {
    await mainPage.goProduct()
    await productPage.goAdd();
    await mainPage.goCart()
    const total = await cartPage.getTotal();
    assert.deepStrictEqual(total, '790', 'Цена телефона не равна 790');
});
