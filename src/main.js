import { Triangle } from "./project.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function () {
  $("#form-group").submit(function (event) {
    event.preventDefault();
    let side1 = parseInt($("#side1").val());
    let side2 = parseInt($("#side2").val());
    let side3 = parseInt($("#side3").val());

    let userTriangle = new Triangle(side1, side2, side3);
    // console.log(userTriangle);
    $("#answer").empty().append(userTriangle.checkType());
    $("#answer-box").show();


  });
});