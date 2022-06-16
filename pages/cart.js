const { I } = inject();

module.exports = {
  Total:{
    total : '#totalp',
  },
  async getTotal () {
    const text = await I.grabTextFrom(this.Total.total);
    return text; 
  },

  // insert your locators and methods here
}
