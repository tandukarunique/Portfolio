const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.valur === "" || name.value == null) {
    messages.push("Name is required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(",");
  }
});
