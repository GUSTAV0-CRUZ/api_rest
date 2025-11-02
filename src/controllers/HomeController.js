class HomeControllers {
  index(req, res) {
    res.json('Home');
  }
}

export default new HomeControllers();
