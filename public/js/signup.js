const signupFormHandler = async function (event) {
  event.preventDefault();

  console.log("sign up form was called");

  const usernameEl = document
    // for="username-input-signup" is equal to #username-input-signup
    .querySelector("#username-input-signup")
    .value.trim();
  const passwordEl = document
    .querySelector("#password-input-signup")
    .value.trim();
  // Value.trim() removes whitespace from both sides of a string. This is usefull when dealing with passwords and usernames.
  if (usernameEl && passwordEl) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl,
        password: passwordEl,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      console.log("Failed to signup");
    }
  }
};

document
  // use # to select by id and . to select by class
  .querySelector("#signup-btn")
  .addEventListener("click", signupFormHandler);
