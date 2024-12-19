const express = require("express");

const app = express();

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
