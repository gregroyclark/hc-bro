const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});