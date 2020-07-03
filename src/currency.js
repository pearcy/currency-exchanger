// Business Logic

export class DollarCurrency {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  async getRates() {
    try {
     
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}`);
    
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