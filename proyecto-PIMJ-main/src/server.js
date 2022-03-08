const CONFIG = require('./config/config');
const Database = require('./config/database');
const app = require('./index');

Database.connect();

app.listen(CONFIG.PORT, err => {
    if (err) return console.log(err)
    console.log(`Servidor corriendo en el puerto: ${CONFIG.PORT}`);
})