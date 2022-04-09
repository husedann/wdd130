const fs = require('fs');

function getVal() {
    const familymember = document.querySelector('#familymember').value;
    const event = document.querySelector('#event').value;
    const place = document.querySelector('#place').value;
    const when = document.querySelector('#when').value.toString();
    const details = document.querySelector('#details').value;
const datafile = familymember + ',' + event + ',' + place + ',' + when + ',' + details;
fs.writeFile("mymemorydata.txt", datafile);
console.log(familymember);
  }

   