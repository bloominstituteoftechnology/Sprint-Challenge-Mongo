const mongoose =  required('mongoose');

const CategorySchema = new mongoose.Schema({
	index: true,
	title: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Category', CategorySchema);