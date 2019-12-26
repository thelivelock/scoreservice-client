'use strict'

// real url is intentionally hidden 
const url = 'http://127.0.0.1:3000/subscribe';

const sendData = (data) => {
  jQuery.ajax({
    type: "POST",
    url: url,
    dataType: "json",
    data: JSON.stringify(data)
  })
};
