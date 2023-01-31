/** @format */

/* Inputs */

let custom_input = document.querySelector('#custom_tip');
let bill_input = document.querySelector('#bill_input');
let people_input = document.querySelector('#people_input');
let bill_error_text = document.querySelector('#bill_error_text_number');
let bill_error_text_zero = document.querySelector('#bill_error_text_zero');
let people_error_text = document.querySelector('#people_error_text_number');
let people_error_text_zero = document.querySelector('#people_error_text_zero');

/* Outputs */
let tip_amount_output = document.querySelector('#tip_amount_output');
let total_amount_output = document.querySelector('#total_amount_output');

/* % buttons */
let five_percent_button = document.querySelector('#five_percent_button');
let ten_percent_button = document.querySelector('#ten_percent_button');
let fifteen_percent_button = document.querySelector('#fifteen_percent_button');
let twentyfive_percent_button = document.querySelector('#twentyfive_percent_button');
let fifty_percent_button = document.querySelector('#fifty_percent_button');
let reset_button_inactive = document.querySelector('#reset_button_inactive');
let reset_button_active = document.querySelector('#reset_button_active');

/* ===== Calculations ===== */

const calculationAmounts = (tipParam) => {
  const bill_input_value = document.querySelector('#bill_input').value;
  const people_input_value = document.querySelector('#people_input').value;
  let tipOutput, totalOutput;
  bill_input.value === ''
    ? bill_input.classList.add('input_active_error')(bill_error_text.classList.add('active_text_error'))
    : bill_input_value != Number(bill_input_value)
    ? bill_input.classList.add('input_active_error')(bill_error_text.classList.add('active_text_error'))
    : bill_input_value === '0'
    ? bill_input.classList.add('input_active_error')(bill_error_text_zero.classList.add('active_text_error'))
    : (tipOutput = (bill_input_value * (tipParam / 100)) / people_input_value);
  people_input.value === ''
    ? people_input.classList.add('input_active_error')(people_error_text.classList.add('active_text_error'))
    : people_input_value != Number(people_input_value)
    ? people_input.classList.add('input_active_error')(people_error_text.classList.add('active_text_error'))
    : people_input_value === '0'
    ? people_input.classList.add('input_active_error')(people_error_text_zero.classList.add('active_text_error'))
    : (totalOutput = (bill_input_value * (tipParam / 100 + 1)) / people_input_value);
  let tip_output_var = '$' + Number.parseFloat(tipOutput).toFixed(2);
  let total_output_var = '$' + Number.parseFloat(totalOutput).toFixed(2);
  tip_amount_output.textContent = tip_output_var;
  total_amount_output.textContent = total_output_var;
  bill_input.classList.remove('input_active_error');
  bill_input.classList.remove('active_text_error');
  people_input.classList.remove('input_active_error');
  people_input.classList.remove('active_text_error');
  bill_error_text.classList.remove('active_text_error');
  bill_error_text_zero.classList.remove('active_text_error');
  people_error_text.classList.remove('active_text_error');
  people_error_text_zero.classList.remove('active_text_error');
  reset_button_inactive.classList.add('reset_inactive');
  reset_button_active.classList.remove('reset_inactive');
};

/* ===== Button effects ===== */

/* Tip % */
const tipHighlight = (highlightParam) => {
  five_percent_button.classList.remove('tip_percentage_selection_active'),
    ten_percent_button.classList.remove('tip_percentage_selection_active'),
    fifteen_percent_button.classList.remove('tip_percentage_selection_active'),
    twentyfive_percent_button.classList.remove('tip_percentage_selection_active'),
    fifty_percent_button.classList.remove('tip_percentage_selection_active'),
    custom_input.classList.remove('custom_tip_style_active'),
    highlightParam === custom_input
      ? highlightParam.classList.add('custom_tip_style_active')
      : highlightParam !== custom_input
      ? highlightParam.classList.add('tip_percentage_selection_active')
      : alert('How did you break it?!');
};

/* ===== Click events ===== */
const outputClick = (highlight, calculation) => {
  tipHighlight(highlight);
  calculationAmounts(calculation);
  highlight !== custom_input ? (custom_input.value = '') : highlight === highlight;
};

/* Reset */
const reset_activator = () => (bill_input.value = '')((custom_input.value = ''))((people_input.value = ''))(tipHighlight());
