const express = require("express");

const app = express();

app.get("/health", (req, res) => {
    res.status(300).json({
        success: true,
    });
});

module.exports = app;
