
const form = document.getElementById("contactForm");

//  form submit 
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Default reload behavior stop

  // Input fields 
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("Message").value;

  //  alert 
  alert(`Thank you ${name}! We have received your message`);

  form.reset();
});