import mongoose from 'mongoose';

const CategorySchema = new Schema({
	title: {
        required: true,
		type: String
		
	}
})

module.exports = mongoose.model("Category", CategorySchema);
