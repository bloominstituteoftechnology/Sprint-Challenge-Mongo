const Budget = require('../models/budget');

const budgetCreate = (req, res) => {
  const { title, budgetAmount } =  req.body;
  const newBudget = new Budget({ title, budgetAmount });
  newBudget.save(newBudget, (err, savedbudget) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(savedbudget);
  })
};


// const postsGetAll = (req, res) => {
//   Post.find({})
//     .then(posts => {
//       if (posts.length === 0) throw new Error();
//       res.json(posts)
//     })
//       .catch(err => res.status(422).json(err));
// };
// const postGetById = (req, res) => {
//   const { id } = req.params;
//   Post.findById(id)
//     .populate('author comments.author', 'username')
//     .exec()
//       .then((singlePost) => {
//         if (singlePost === null) throw new Error();
//         res.json(singlePost);
//       })
//         .catch(err => res.status(422).json(err));
// };
// const postCommentAdd = (req, res) => {
//   const { id } = req.params;
//   const { author, text } = req.body;
//   const comment = { author, text };
// 	// find a single post
// 	// grab comments array, add our comment to it.
// 	// save post
//   Post.findById(id)
//     .then(post => {
//       if (post === null) throw new Error();
//       const comments = post.comments;
//       comments.push(comment);
//       post
//         .save()
//         .then(newPost => {
//           Post.findById(newPost._id)
//           .populate('comments.author', 'username')
//           .exec((badError, savedpost) => {
//             if (badError) {
//               throw new Error()
//             }
//             res.json(savedpost);
//           });
//         })
//           .catch(err => {throw new Error()});
//     })
//       .catch(err => res.status(422).json({ error: 'No Post!' }));
// };

module.exports = {
  budgetCreate,
};