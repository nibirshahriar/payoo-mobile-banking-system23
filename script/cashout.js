// Using machine--->
document.getElementById("btn-cashout").addEventListener("click", function () {
  // 1.get the agent number & validity
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11 || isNaN(cashoutNumber)) {
    alert("Invalid Agent Number");
    return;
  }
  // 2.get the amount,validity and convert to number
  const cashoutAmount = Number(getValueFromInput("cashout-amount"));

  // amount validation
  if (cashoutAmount <= 0 || isNaN(cashoutAmount)) {
    alert("Invalid Amount");
    return;
  }

  // 3..get the current amount,validity and convert to number
  const currentBalance = getBalance();

  //  4.calculate the new Balance
  const newBalance = currentBalance - cashoutAmount;
  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }
  // 5.get th pin and verify:
  const passwordCashout = getValueFromInput("input-password-cashout");
  if (passwordCashout === "1234") {
    // 5.1: true:::show an alert >>>> set Balance
    alert("Cashout Successfull");

    setBalance(newBalance);

    // 1.history-container k dhorbo
    const history = document.getElementById("history-container");
    // 2.new div create korbo
    const newHistory = document.createElement("div");
    // 3.new div e innerHTML create korbo
    newHistory.innerHTML = `
 <div class="transactions-card p-5 bg-base-300">
 Cashout ${cashoutAmount} Tk Success to ${cashoutNumber} at ${new Date()}
</div>
`;
    // 4.history-container e new div append korbo
    history.append(newHistory);
    // input clear
    document.getElementById("cashout-number").value = "";
    document.getElementById("cashout-amount").value = "";
  } else {
    // 5.2: false:::show an error and return
    alert("Invalid Password");
    return;
  }
});

// without machine

// document.getElementById("btn-cashout").addEventListener("click", function () {
//   // 1.get the agent number & validity
//   const cashoutNumberElement = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberElement.value;
//   if (cashoutNumber.length != 11 || isNaN(cashoutNumber)) {
//     alert("Invalid Agent Number");
//     return;
//   }

//   // 2.get the amount,validity and convert to number
//   const cashoutAmountElement = document.getElementById("cashout-amount");
//   const cashoutAmount = Number(cashoutAmountElement.value);

//   // 3.get the current amount,validity and convert to number
//   const balanceElement = document.getElementById("balance");
//   const currentBalance = Number(balanceElement.innerText);

//   // 4.calculate the new Balance
//   const newBalance = currentBalance - cashoutAmount;
//   if (newBalance < 0) {
//     alert("Insufficient Balance");
//     return;
//   }
//   // 5.get th pin and verify:
//   const passwordCashout = document.getElementById("input-password").value;
//   if (passwordCashout === "1234") {
//     // 5.1: true:::show an alert >>>> set Balance
//     alert("Cashout Successfull");
//     balanceElement.innerText = newBalance;
//     // input clear
//     cashoutNumberElement.value = "";
//     cashoutAmountElement.value = "";
//   } else {
//     // 5.2: false:::show an error and return
//     alert("Invalid Password");
//     return;
//   }
// });
