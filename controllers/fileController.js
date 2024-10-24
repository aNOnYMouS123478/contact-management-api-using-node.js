const fs = require('fs');
const csv = require('csv-parser');
const Contact = require('../models/Contact');

// Parse CSV file and create contacts
exports.uploadContacts = async (req, res) => {
    const file = req.file;
    const contacts = [];

    // Check if a file was uploaded
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        // Stream and parse the CSV file
        fs.createReadStream(file.path)
            .pipe(csv())
            .on('data', (row) => {
                contacts.push(row);
            })
            .on('end', async () => {
                try {
                    await Contact.bulkCreate(contacts); // Bulk create contacts
                    // Clean up the uploaded file
                    fs.unlinkSync(file.path); // Remove the file after processing
                    res.json({ message: 'Contacts uploaded successfully' });
                } catch (bulkCreateError) {
                    res.status(500).json({ error: 'Error saving contacts: ' + bulkCreateError.message });
                }
            })
            .on('error', (error) => {
                // Clean up the uploaded file if an error occurs
                if (fs.existsSync(file.path)) {
                    fs.unlinkSync(file.path);
                }
                res.status(500).json({ error: 'Error processing file: ' + error.message });
            });
    } catch (error) {
        // Clean up the uploaded file if an error occurs
        if (fs.existsSync(file.path)) {
            fs.unlinkSync(file.path);
        }
        res.status(500).json({ error: 'Error processing file: ' + error.message });
    }
};

// Function to download contacts (to be implemented)
exports.downloadContacts = (req, res) => {
    // Logic for downloading contacts can be added here
    res.send('Download contacts functionality not implemented yet.');
};
