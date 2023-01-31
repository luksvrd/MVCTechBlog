const loginFormHandler = async function (event) {
  event.preventDefault();

  // Collect values from the login form
  const usernameEl = document
    .querySelector("#username-input-login")
    .value.trim();
  const passwordEl = document
    .querySelector("#password-input-login")
    .value.trim();
  console.log(usernameEl, passwordEl);
  // Send a POST request to the API endpoint
  if (usernameEl && passwordEl) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl,
        password: passwordEl,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/dashboard");
    } else {
      alert("Failed to login");
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
