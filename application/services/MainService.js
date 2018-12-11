var MainService = {
  helloWorld: function(req,res){
    res.send({msg:"hello World"})
  },
  getAllUsers: function(req, res){
    domain.User.find(function(err,results){
      console.log("the results is ",results);
      res.send({msg:results})
    });
  },
  addUser: function(req, res){
    var user = new domain.User(req.body.user)
    user.save((err,results)=>{
      console.log("the user is added ",results);
      res.send({msg:"Successfully added the user",results:results})
    })
  }
}

module.exports = MainService
