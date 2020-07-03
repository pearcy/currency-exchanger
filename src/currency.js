// Business Logic

export class DollarCurrency {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  async getRates() {
    try {
      // let process = "";
      // let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let response = await fetch(`https://open.exchangerate-api.com/v6/latest`);

      let jsonResponse;
      if (response.ok && response.status == 200) {
        jsonResponse = await response.json();
        
      } else {
        jsonResponse = false; 
      } 
      // return jsonifiedResponse;
      console.log(jsonResponse);
    } catch (error) {
        return false; 
      }
  }




}