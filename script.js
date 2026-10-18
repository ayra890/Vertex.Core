// Apna Web App URL yahan daalein
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwr4fcFgo0zGrXKMieDi_IwY1GJf2WwSAybxpQKLNtOdcKj4j5URoVOOuMy_a2h73LI5w/exec";

// Jab user "Place Order" button par click kare
document.getElementById("placeOrderBtn").addEventListener("click", function(e) {
  e.preventDefault();

  const orderData = {
    customer_name: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
    customer_email: document.getElementById("email").value,
    customer_phone: document.getElementById("phone").value,
    customer_address: document.getElementById("address").value,
    customer_city: document.getElementById("city").value,
    customer_postal: document.getElementById("postal").value,
    invoice_id: "INV-" + Math.floor(1000 + Math.random() * 9000), // Random Invoice Number
    plan_name: document.getElementById("planSelect").value,
    server_location: document.getElementById("locationSelect").value,
    quantity: document.getElementById("qtyValue").innerText,
    total_price: document.getElementById("summaryTotal").innerText,
    payment_method: document.querySelector('input[name="payment"]:checked') ? document.querySelector('input[name="payment"]:checked').value : "Bank Transfer"
  };

  // Google Apps Script par data bhejna
  fetch(WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(orderData)
  })
  .then(res => res.json())
  .then(data => {
    if(data.success) {
      alert("Order successfully placed! Check your email.");
    } else {
      alert("Error: " + data.message);
    }
  })
  .catch(err => console.error("Error:", err));
});
