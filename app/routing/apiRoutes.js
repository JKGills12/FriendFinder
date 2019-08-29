//Requires data from friends.js
const friendsArray = require("../data/friends.js");

//Routing
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsArray);
    });

    //post Request for when user submits survey
    app.post("/api/friends", function (req, res) {
        //friends.push(req.body);
        //res.json(friends);
        var friendScores = req.body.scores;
        console.log(friendScores);
        var scores = [];

        //looping over friends array data
        for (var i = 0; i < friendsArray.length; i++) {
            var minScoresDiff = 0;
            var maxScoresDiff = 40;
            //loop through new friends scores and adding to th min score the diffrerence which is zero. Adding the scores from within the individual friends minus the new friends scores.
            for(var min = 0; min < friendScores.length; min++) {
                minScoresDiff += (Math.abs(parseInt(friendsArray[i].scores[min]) - parseInt(friendScores[min])));
            }
            scores.push(minScoresDiff);
        }
        console.log(scores);
        var indexOfSmallestVal = indexOfSmallest(scores);
        var bestFriend = friendsArray[indexOfSmallestVal];
        console.log(indexOfSmallestVal);
        friendsArray.push(req.body);
        res.json(bestFriend);
    });
};

//fucntion to find the index of the smallest element from an array
function indexOfSmallest(num)
    { 
        return num.indexOf(Math.min.apply(Math, num));
    }
