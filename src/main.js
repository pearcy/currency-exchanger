// UI Logic

import { DollarCurrency } from "./../src/currency.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";


$(document).ready(function() {
  $("#currency-form").submit(function(event) {
    event.preventDefault();

    let amount = parseInt($("#amount-input").val());
    let currency = $("#currency-input").val();
      console.log(currency, amount);

      (async () => {
        let newDollar = new DollarCurrency(amount, currency);
        let response = await newDollar.getRates();
        console.log(response);
        
  
        getElements(response);
      })();

      function getElements(response) {
        if (response) {
          $('.showCurrency').text(`The Currency for ${currency} is  ${response.rates[currency]}`);
          // console.log(currency);
          // console.log(response.conversion_rates[currency]);

        } else {
          $('.showCurrency').text(`There was a ${response} type error`);
          console.log("error:" + response);
        }
      }

  
  });
});

