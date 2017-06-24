var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var appConfiguration = require("../appConfigurations.json");

var db = mongojs(appConfiguration.dbConnectionString,['tasks'])
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
});

//Save task
router.post('/task', function(req,res,next)
{
    var task = req.body;
    if(!task.title || task.isDone)
    {
        console.log("err");
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

});

router.delete('/task/:id',function(req, res, next)
{
    db.tasks.remove({_id : mongojs.ObjectId(req.params.id)}, function(err,task)
    {
        if(err)
        {
            res.send(err);
        }
        res.json(task);
    });
});

module.exports = router;