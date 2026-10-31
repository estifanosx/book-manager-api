const Joi = require("joi");
const userschema = Joi.object({
  title: Joi.string().trim().min(1).required(),
  author: Joi.string().trim().min(1).required(),
});

const validateBook = (req, res, next) => {
  const { error, value } = userschema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  req.body = value
  next()
};

module.exports = validateBook
