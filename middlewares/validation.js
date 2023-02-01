const validation = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      console.error(error.message);
    }
    next();
  };
  return func;
};

module.exports = validation;
