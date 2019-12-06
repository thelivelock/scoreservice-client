'use strict'

const subButton = document.getElementById("subButton");

const validateEmail = (email) => {
  // RFC 2822 / https://stackoverflow.com/a/1373724/3429290
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return regex.test(String(email).toLowerCase());
};

subButton.onclick = () => { 
  const email = $('.form-control').val();
  const isEmailValid = validateEmail(email);

  if (isEmailValid) {
    $('#emailInputComponent').hide();
    $('#invalidEmailMessage').css('display', 'none');
    $('#postSubscribeMessage').css('display', 'block');
  } else {
    $('#invalidEmailMessage').css('display', 'block');
    $('#invalidEmailMessage').css('color', 'red');
  }
};
