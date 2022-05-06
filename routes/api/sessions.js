const router = require('express').Router();
let Session = require('../../models/Session');

router.route('/add').post((req, res) => {
  const date = req.body.date;
  const lengt = req.body.lengt;

  const newSession = new Session({
    date,
    lengt
  });

  newSession.save()
  .then(() => res.json('Session added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Session.findById(req.params.id)
  .then(session => res.json(session))
  .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
  Session.findByIdAndDelete(req.params.id)
  .then(() => res.json('Session deleted'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  Session.find()
  .then(session => res.json(session))
  .catch(error => res.status(400).json('Error: ' + err));
});

module.exports = router;