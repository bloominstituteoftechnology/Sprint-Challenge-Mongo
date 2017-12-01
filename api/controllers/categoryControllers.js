import Category from '../models/category.js';

export const getCategories = (req, res) => {
	Category.find((err, docs) => {
		if(err) {
			res.status(422).json({'something went wrong': err});
			return;
		}
		res.status(200).json(docs);
	});
}

export const addCategory = (req, res) => {
	const title = req.body.title;
	const category = new Category({ title });
	category.save((err, cat) => {
		if(err) {
			res.status(422).json({'something went wrong': err});
			return;
		}
		res.status(200).json(cat);
	})
}
