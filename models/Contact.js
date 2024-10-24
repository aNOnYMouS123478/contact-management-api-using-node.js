const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Contact = db.define('Contact', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  phone: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  timezone: { type: DataTypes.STRING },
});

module.exports = Contact;
