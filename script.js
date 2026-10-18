const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwr4fcFgo0zGrXKMieDi_IwY1GJf2WwSAybxpQKLNtOdcKj4j5URoVOOuMy_a2h73LI5w/exec";
// Jab customer Contact Form submit kare
fetch("https://script.google.com/macros/s/AKfycbwr4fcFgo0zGrXKMieDi_IwY1GJf2WwSAybxpQKLNtOdcKj4j5URoVOOuMy_a2h73LI5w/exec", {
  method: "POST",
  headers: { "Content-Type": "text/plain;charset=utf-8" },
  body: JSON.stringify({
    action_type: "contact_form",
    customer_name: "Ali Raza",
    customer_email: "ali@gmail.com",
    message: "Mujhe aap ki services ke baare mein poochna hai."
  })
})
.then(res => res.json())
.then(data => alert("Aap ka message bhej diya gaya hai!"));
// Jab customer Place Order par click kare
fetch("https://script.google.com/macros/s/AKfycbwr4fcFgo0zGrXKMieDi_IwY1GJf2WwSAybxpQKLNtOdcKj4j5URoVOOuMy_a2h73LI5w/exec", {
  method: "POST",
  headers: { "Content-Type": "text/plain;charset=utf-8" },
  body: JSON.stringify({
    customer_name: "Usman Khan",
    customer_email: "usman@gmail.com",
    invoice_id: "INV-101",
    plan_name: "VPS Starter",
    total_price: "$20",
    payment_method: "Bank Transfer"
  })
})
.then(res => res.json())
.then(data => alert("Order successfully placed!"));
