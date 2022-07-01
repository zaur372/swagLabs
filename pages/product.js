const { I } = inject();

module.exports = {
  addToCart:{
    add : '.btn.btn-success',
  },
  async goAdd() {
    I.click(this.addToCart.add);
  },

  // insert your locators and methods here
}
