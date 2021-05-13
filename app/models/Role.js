const mongoose = require('mongoose');

const schema = mongoose.Schema;

const RoleSchema = schema({
    name: String
});

module.exports = mongoose.model('Role', RoleSchema);