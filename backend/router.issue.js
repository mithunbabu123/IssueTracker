const router = require("express").Router();

let userModel = require("./model.task");

router.route('/').get((req, res) => {
    userModel.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error:' + err));
      
});

router.route("/add").post((req, res) => {
    const username = req.body.name;
    const description = req.body.description;
    const severity = req.body.severity;
   // const date = Date.parse(req.body.date);
    const date = req.body.date;


    const newIssue = new userModel({username,description,severity,date});

    newIssue.save()
       .then(() => res.json('issue added'))
       .catch(err => res.status(400).json('Error:' + err));

})

router.route('/:id').get((req, res) => {
    userModel.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error:' + err));
      
});

router.route('/:id').delete((req, res) => {
    userModel.findByIdAndDelete(req.params.id)
      .then(user => res.json('issue delected'))
      .catch(err => res.status(400).json('Error:' + err));
      
});

router.route('/update/:id').post((req, res) => {
    userModel.findById(req.params.id)
      .then(user => {
          user.username = req.body.username;
          user.description = req.body.description;
          user.severity = req.body.severity;
          user.date = Date.parse(req.body.date);

          user.save()
          .then(() => res.json('issue updated'))
          .catch(err => res.status(400).json('Error:' + err));
          
      })
      .catch(err => res.status(400).json('Error:' + err));
      
});


module.exports = router;