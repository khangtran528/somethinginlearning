import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended:true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/post", (req, res) => {
    const content = req.body["say something"]
    res.render("index.ejs", {userContent: content});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
} )