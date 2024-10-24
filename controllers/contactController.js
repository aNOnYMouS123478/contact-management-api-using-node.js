const { Op } = require('sequelize'); // Import Op for querying
const Contact = require('../models/Contact');

// Add a new contact
exports.addContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all contacts
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a contact by ID
exports.getContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a contact by ID
exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        const updatedContact = await contact.update(req.body);
        res.json(updatedContact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a contact by ID
exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        await contact.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Batch process contacts (for example, bulk creation)
exports.batchProcessContacts = async (req, res) => {
    try {
        const contacts = await Contact.bulkCreate(req.body);
        res.status(201).json(contacts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get contacts by date range
exports.getContactsByDateRange = async (req, res) => {
    const { startDate, endDate } = req.query;
    try {
        const contacts = await Contact.findAll({
            where: {
                createdAt: {
                    [Op.between]: [new Date(startDate), new Date(endDate)],
                },
            },
        });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
