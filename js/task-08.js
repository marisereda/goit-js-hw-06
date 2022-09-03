const formEl = document.querySelector(".login-form");
const dataForm = {};

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  dataForm.email = email.value;
  dataForm.password = password.value;
  console.log(dataForm);
  formEl.reset();
}
