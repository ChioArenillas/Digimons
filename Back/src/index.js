const express = require('express')
const cors = require('cors');
const mongoose = require("mongoose");
const digimonsRouter = require('./routes/digimonsRoutes');
const app = express()
const port = 9000

const url_mongo = 'mongodb+srv://timiotull_db_user:I05XLEIv2PetwjSn@cluster0.uh5ltif.mongodb.net/?appName=Cluster0'

mongoose.connect(url_mongo);

// aquí hacemos la conexión con mongoose
const db = mongoose.connection;

// esto siguiente es para saber si ha habido algún error al conectarse a mongo
db.on("error", (error) => {
  console.log(`Error al conectar con mongo ${error}`);
});
// y esto es para saber si se ha conectado correctamente
db.on("connected", () => {
  console.log(`Succecss connect`);
});
 
db.on("disconected", () => {
  console.log(`Mongo is disconected`);
});

app.use(express.json())
app.use(cors());

app.use('/digimons', digimonsRouter);

app._router.stack.forEach(r => {
  if (r.route && r.route.path) {
    console.log(r.route.path, Object.keys(r.route.methods));
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
