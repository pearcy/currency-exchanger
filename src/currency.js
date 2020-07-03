// Business Logic

export class DollarCurrency {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  async getRates() {
    try {
     
      let response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/v6${process.env.API_KEY}/latest/USD`);
      
      let jsonResponse;
      if (response.ok && response.status == 200) {
        jsonResponse = await response.json();
        
      } else {
        jsonResponse = false; 
      } 
      console.log(jsonResponse);
    } catch (error) {
        return false; 
      }
  }




}