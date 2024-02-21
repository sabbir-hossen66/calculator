// create a main function of this calculator.

function getValueId(elementId) {
  const getValue = document.getElementById(elementId);
  const getValueSome = getValue.innerText;
  const getValueInt = parseInt(getValueSome);
  return getValueInt;
}
// const valueOne = getValueId('number-1')
// const valueTwo = getValueId('number-2')
// const valueThree = getValueId('number-3')
const valueFour = getValueId('number-4')
const valueFive = getValueId('number-five')
// const valueSix = getValueId('number-6')
// const valueSeven = getValueId('number-7')
// const valueEight = getValueId('number-8')
// const valueNine = getValueId('number-9')
// const valueZero = getValueId('number-0')
// console.log(value5);

console.log(valueFour);;