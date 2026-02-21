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
  const pin = getValueFromInput("input-password-addmoney");
  if (pin == "1234") {
    alert(
      `${addAmount} Tk Add Money Successfull
        from ${bankAccount} at ${new Date()}`,
    );
    setBalance(newBalance);

    // 1.history-container k dhorbo
    const history = document.getElementById("history-container");
    // 2.new div create korbo
    const newHistory = document.createElement("div");
    // 3.new div e innerHTML create korbo
    newHistory.innerHTML = `
 <div class="transactions-card p-5 bg-base-300">
 Add Money Successfull from ${bankAccount}, acc-no ${accNumber} at ${new Date()}
</div>
`;
    // 4.history-container e new div append korbo
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
