
const express = require('express');
const authRouter = require('./routers/authRouter'); // Adjust the path accordingly
const itemRouter = require('./routers/itemRouter');
const catRouter = require('./routers/categoryRouter');
const eventRouter = require('./routers/eventRouter');
const rentRouter = require('./routers/rentRouter');
const deliveryRouter = require('./routers/deliveryRouter');
const pickupLocationRouter = require('./routers/pickupLocationRouter'); 

const incomeRouter = require('./routers/incomeRouter');
const expertRouter = require('./routers/expertRouter');
const inspectionRouter = require('./routers/InspectionRouter');
const reviewRouter = require('./routers/reviewRouter');

const cookieParser = require('cookie-parser');
const {inspection} = require("./models/inspection");

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cookieParser());


app.use('/', authRouter); // Use the auth router

app.use('/delivery', deliveryRouter);
app.use('/api', pickupLocationRouter);

app.use('/item', itemRouter);
app.use('/category', catRouter);
app.use('/event', eventRouter);
app.use('/rent', rentRouter);
app.use('/income/report',incomeRouter);
app.use('/expert',expertRouter);
app.use('/inspection',inspectionRouter);
app.use('/review',reviewRouter);



app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});

