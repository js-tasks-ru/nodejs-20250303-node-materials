export function logger(order) {
  return (req, res, next) => {
    res.set('my-custom-header', 'my-value');

    console.log(
      `functional middleware number ${order}`,
      req.headers['user-agent'],
    );
    next();
  };
}
