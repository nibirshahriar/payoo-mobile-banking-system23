document.getElementById("btn-add-money").addEventListener("click", function () {
  // get bank account
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select Bank") {
    alert("Please Select A Bank");
    return;
  }
  // get bank acc number
  const accNumber = getValueFromInput("add-money-number");
  if (accNumber.length != 11 || isNaN(accNumber)) {
    alert("Invalid Account Number");
    return;
  }
  // add amount
  const addAmount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(addAmount);
  // pin check
  const pin = getValueFromInput("input-password");
  if (pin == "1234") {
    alert(
      `${addAmount} Tk Add Money Successfull
        from ${bankAccount} at ${new Date()}`,
    );
    setBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});

