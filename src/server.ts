import express from "express";


const app = express();

app.get("/teste", (req, res) => {
    return res.send("Olá NLW!")
});

app.post("/teste-post", (req, res) => {
    return res.send("Olá NLW método POST.")
});

app.listen(3000, () => console.log("Server is running on port 3000."));