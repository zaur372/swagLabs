const { I } = inject();

module.exports = {
  PlaceOrder:{
    placeOrder: '[data-target="#orderModal"]',
  },
  Total:{
    total : '#totalp',
  },
  async getTotal () {
    const text = await I.grabTextFrom(this.Total.total);
    return text; 
  },
  async getPlaceOrder() { 
    const text = await I.grabTextFrom(this.PlaceOrder.placeOrder);
    return text;
  },

  // insert your locators and methods here
}
