"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: 
      Date:   

      Filename: js06a.js
 */

window.addEventListener("load", function() {
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;

      model.focus();
      calcOrder();
});


function calcOrder() {
      let mIndex = model.selectedIndex;
      let mValue = model.options[mIndex].value;

      let qIndex = orderForm.elements.qty.selectedIndex;
      let quantity = orderForm.elements.qty[qIndex].value;

      let modelCost = mValue * quantity;
      orderForm.elements.modelCost.value = modelCost;

      let planValue = document.querySelector('input[name="plan"]:checked').value;
      let planCost = planValue * quantity;
      orderForm.elements.planCost.value = planCost;


}