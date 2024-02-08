const express = require('express')
const router = express.Router();
const model = require('../Model/model')

router.post("/userData", async (req, res) => {
    const { Name, Email, Mobile, Subject, Message } = req.body;

    try {
        const data = new model({
            Name, Email, Mobile, Subject, Message
        });

        await data.save();
        res.json({ message: "Data saved successfully", status: "success" });
    } catch (err) {
        console.error("Error while saving data:", err);
        res.status(500).json({ message: "Failed to save data", status: "error" });
    }
})

module.exports = router;

