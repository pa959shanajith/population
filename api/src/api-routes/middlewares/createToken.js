const jwt = require('jsonwebtoken');

function createToken() {
    const token = jwt.sign(
        {
          _id: this._id,
          name: this.name
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      return token;
}

module.exports = createToken;