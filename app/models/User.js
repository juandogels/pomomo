const mongoose = require('mongoose');
const schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcrypt-nodejs');
const UserSchema = new schema({
    local: {
        email: String,
        password: String,
    }
});
UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// UserSchema.methods.validPassword = (password) => {
//     return bcrypt.compareSync(password, this.local.password);
// };

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
