const
express = require('express'),
app     = express(),
PORT    = 3333,
routes  = require('./routes'),
cors    = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, ()=> console.log(`Servidor iniciado na porta ${PORT}`));