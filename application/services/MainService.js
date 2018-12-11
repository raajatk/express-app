var MainService = {
  helloWorld: function(req,res){
    domain.User.find(function(err,results){
      console.log("the results is ",results);
      res.send({msg:results})
    });

  }
}

module.exports = MainService
