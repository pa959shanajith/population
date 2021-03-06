const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    bcrypt = require("bcrypt"),
    SALT_WORK_FACTOR = 10;


let UserSchema = mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    createdAt: Date,
    updatedAt: Date
});

UserSchema.pre("save", function (next) {
	var registration = this;
	if (!registration.isModified("password")) return next();
	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(registration.password, salt, function (err, hash) {
			if (err) return next(err);
			registration.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

module.exports = mongoose.model("User", UserSchema);