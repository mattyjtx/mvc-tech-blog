async function signupFormHandler(event) {
    event.preventDefault();
    const name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch("/api/users", {
          method: "post",
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        });

        if(response.ok) {
            document.location.replace('/');
        } else { alert('Failed to sign up!')}
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupForm);