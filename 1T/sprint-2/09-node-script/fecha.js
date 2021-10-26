const today = new Date();


const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();


const actualDate = `Hoy es ${day}/${month}/${year} a las ${hours}:${minutes}:${seconds}`;

console.log(actualDate);