function getInputValue(inputValue) {
  const number = document.getElementById(inputValue);
  const getNumberString = number.value;
  const getNumber = parseFloat(getNumberString);

  number.value = "";

  return getNumber;
}

function getText(id) {
  const cuponCode = document.getElementById(id);
  const cuponText = cuponCode.value;
  cuponCode.value = "";
  return cuponText;
}

function getElement(idName, amount) {
  const displayAmount = document.getElementById(idName);
  displayAmount.innerText = amount;
}

document.getElementById("cupon-code").addEventListener("click", function () {
  const percentage = document.getElementById("percentage");
  percentage.setAttribute("disabled", true);
});

document.getElementById("apply").addEventListener("click", function () {
  const amount = getInputValue("amount");
  const percentage = getInputValue("percentage");
  const cuponText = getText("cupon-code");

  if (cuponText === "ragibmim45") {
    const cuponPercentage = amount * (45 / 100);
    getElement("display-amount", cuponPercentage);
  } else {
    const percentageAmount = amount * (percentage / 100);
    getElement("display-amount", percentageAmount);
  }
});
