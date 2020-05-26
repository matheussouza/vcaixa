class ErrorBuilder {

  normalizarErroSequelize(err) {
    const errors = {};

    err.forEach(e => {
      if (!errors[e.path]) errors[e.path] = [];
      errors[e.path].push(e.message);
    })

    return errors;
  }

}

module.exports = new ErrorBuilder();
