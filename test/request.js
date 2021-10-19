/* global fetch*/
// send POST request

let data = {"user": 'example', "director": 'groot'};

fetch('http://34.64.104.38:8080/movies/', {
  method: 'POST', // or 'PUT', or 'PATCH', ...
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: {
    "Content-Type": "application/json",
  },
}).then(res => res.text())
.then(response => console.log('Success:', (response)))
.catch(error => console.error('Error:', error));