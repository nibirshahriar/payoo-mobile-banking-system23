//  machine input nibe id----> output dibe input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}

// machine------>balance
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}

// machine value----->set balance(new)
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// machine id nibe--->hide all---->show jei id pass hoise
function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cashout");
  // sobai k hide korbe
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  // id wala element k show kora
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
