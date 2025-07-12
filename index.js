const express = require("express");
const app = express();
const PORT = 8001;
const path = require('path');
const URL = require('./models/url');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const { connectToMongoDB } = require('./connects');
require('dotenv').config();

connectToMongoDB(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/test', async (req,res)=>{
//     const allUrls=await URL.find({});
//     return res.render('home',{
//         urls:allUrls,
//     })
// });

//Router

app.use("/url", urlRoute);
app.use('/', staticRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: { timestamp: Date.now(), }
        },
    });
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT} `));
