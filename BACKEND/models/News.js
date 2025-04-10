const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const News = sequelize.define('News', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING, allowNull: false }
});

module.exports = News;
