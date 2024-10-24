const express = require('express');
const { uploadContacts, downloadContacts } = require('../controllers/fileController');
const { authenticate } = require('../middlewares/authMiddleware');
const multer = require('multer');
const router = express.Router();

// Set up multer for file upload
const upload = multer({ dest: 'uploads/' });

// File handling routes
router.post('/upload', authenticate, upload.single('file'), uploadContacts);
router.get('/download', authenticate, downloadContacts);

module.exports = router;
