const { I } = inject();

module.exports = {
  loginButton:{
    logIn: '[onclick="logIn()"]',
  },
  fields :{
    username: '#loginusername',
    password: '#loginpassword',
  },
  authButton: {
    login: '#login2',
  },
  logoutButton:{
    logOut : '#logout2',
  },
  signupButton:{
    signUp : '#signin2',
  },
  productIphone:{
    iphone : ".card >[href='prod.html?idp_=5']",
  },
  homeButton:{
    home : "#nava",
  },
  nextPageButton:{
    next : '.pagination li:nth-child(2)',
  },
  previousPageButton:{
    previous : '#prev2',
  },
  addToCart:{
    add : '.btn.btn-success',
  },
  Cart:{
    cart : '#cartur',
  },
  placeOrder:{
    place : "[data-target='#orderModal']",
  },
  Total:{
    total : '#totalp',
  },
  Mac:{
    mac : '[href="prod.html?idp_=11"]',
  },
  async login (username, password) {
    I.click(this.authButton.login);
    I.click(this.fields.username);
    I.fillField(this.fields.username, username);
    I.click(this.fields.password);
    I.fillField(this.fields.password, password);
    I.click(this.loginButton.logIn);
  },
  async getwelcome () {
    const text = await I.grabTextFrom(this.logoutButton.logOut);
    return text; 
  },
  async goProduct() {
    I.waitForElement(this.productIphone.iphone, 5);
    I.click(this.productIphone.iphone);
    I.waitForElement(this.addToCart.add, 5);
  },
  async goHome() { 
    I.click(this.homeButton.home);
    I.waitForElement(this.productIphone.iphone, 5);
  },
  async goNext() { 
    I.click(this.nextPageButton.next);
    I.waitForElement(this.previousPageButton.previous, 5);
  },
  async goCart() { 
    I.click(this.Cart.cart);
    I.waitForElement(this.Total.total, 5);
  },
  async goHomePrev() { 
    const text = await I.grabTextFrom(this.previousPageButton.previous);
    return text;
  },

  // insert your locators and methods here
}
