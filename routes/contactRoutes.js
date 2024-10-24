const express = require('express');
const { 
    addContact, 
    getContacts, 
    getContact, 
    updateContact, 
    deleteContact, 
    batchProcessContacts, 
    getContactsByDateRange 
} = require('../controllers/contactController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

// Contact management routes
router.post('/', authenticate, addContact);
router.get('/', authenticate, getContacts); // Ensure this route is defined
router.get('/:id', authenticate, getContact); // Ensure this route is defined
router.put('/:id', authenticate, updateContact);
router.delete('/:id', authenticate, deleteContact);
router.post('/batch', authenticate, batchProcessContacts);
router.get('/date-range', authenticate, getContactsByDateRange);

module.exports = router;
