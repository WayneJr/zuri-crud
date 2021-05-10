const express          = require('express'),
      app              = express(),
      mongoose         = require('mongoose'),
      { port, dbUrl }  = require('./config/config'),
      indexRoutes      = require('./api/routes/index');


mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('db connected succesfully'))
.catch(err => console.log('Error connecting to database: ' + err));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(indexRoutes);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
