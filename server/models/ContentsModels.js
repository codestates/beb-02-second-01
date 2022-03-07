const mongoose = require('mongoose');

const contentsTemplate = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	content: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('contents', contentsTemplate);
