function authUser(req, res, next) {
  const usernameSession = {
    id: req.session?.user_id,
    username: req.session?.username,
    email: req.session?.email,
  };
  res.locals.usernameSession = usernameSession;
  next();
}

module.exports = authUser;
