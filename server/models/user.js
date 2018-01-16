var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    true: true
  }
});

// var newUser = new User({
//   name: 'Bobby Bouchet',
//   email: 'thunderchops@spam.com'
// });

// newUser.save().then(
//   doc => {
//     console.log('Saved user', doc);
//   },
//   e => {
//     console.log('Unable to save user', e);
//   }
// );

module.exports = { User };
