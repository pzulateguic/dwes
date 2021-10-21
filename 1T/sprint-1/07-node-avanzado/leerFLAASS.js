const fs = require('fs');
/*
try {
    const data = fs.readFileSync('./Ticket.txt', 'utf-8');
    console.log(data);
} catch(err) {
    console.error(err);
}
*/
fs.readFile('./Ticket.txt', 'utf-8', function (data, err) {
    if(data) {
        console.log(data);
    } else {
        console.error(err);
    }
});