// UI Logic

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { DollarCurrency } from "./../src/currency.js";


$(document).ready(function() {
  $("#currency-form").submit(function(event) {
    event.preventDefault();

    let amount = parseInt($("#amount-input").val());
    let currency = $("#currency-input").val();
      // console.log(currency, amount);

      (async () => {
        let newDollar = new DollarCurrency(amount, currency);
        let response = await newDollar.getRates();
        
  
        getElements(response);
      })();

      function getElements(response) {
        if (response) {
          $('.showCurrency').text(`The Currency for ${currency} is  ${response.conversion_rates}`);
        }
      }

  
  });
});

