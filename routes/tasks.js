var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:123456@ds135069.mlab.com:35069/appbase_db',['tasks'])

// Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            console.log(err);
        }
        res.json(tasks);
    });
});

router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, task){
        if(err){
            console.log(err);
        }
        res.json(task);
    });
});

router.get('/finishedTasks', function(req, res, next)
{
    db.tasks.find({isDone:true}, function(err,doneTasks)
    {
        if(err)
        {
            res.send(err);
        }
        res.json(doneTasks);
    })
})
//Save task
router.post('/task', function(req,res,next)
{
    var task = req.body;
    if(!task.title || task.isDone)
    {
        res.status(400);
        res.json({error : 'Bad Data'});
    }
    else
    {
        db.tasks.save(task, function(err,task)
        {
            if(err)
            {
                res.send(err);
            }
            res.json(task);
        })    
    }

})
module.exports = router;