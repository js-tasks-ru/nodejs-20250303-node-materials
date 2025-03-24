export default class MyError extends Error {
  now = new Date();

  constructor() {
    super();
  }
}
