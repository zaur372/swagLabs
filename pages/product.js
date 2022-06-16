const { I } = inject();

module.exports = {
  addToCart:{
    add : '.btn.btn-success',
  },
  async goAdd() {
    I.click(this.addToCart.add);
    I.waitForElement(this.Total.total, 5);
  },

  // insert your locators and methods here
}
