document.getElementById("btn-login").addEventListener("click", function () {
  //   s-1:get number
  const contactNumber = document.getElementById("input-number").value;

  // s-2:get password
  const getPassword = document.getElementById("input-password").value;

  // s-3:match number and password
  if (contactNumber === "01234567890" && getPassword === "1234") {
    alert("Login Sucessfull");
    window.location.assign("/home.html");
  } else {
    alert("Login failed");
    return;
  }
  // s-4:if match--->4.1-> true:::home--->4.2->false;;;return
});
