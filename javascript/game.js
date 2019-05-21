var crystal = {
    purple:
    {
    name: 'purple',
    value:0
    },
    red:
    {
    name: 'red',
    value:0
    },
    yellow:
    {
    name: 'yellow',
    value:0
    },
    blue:
    {
    name: 'blue',
    value:0
    },

};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {

    var currentScore = 0;

    targetScore = getRandom(19, 120);

    crystal.purple.value    = getRandom(1, 12);
    crystal.red.value       = getRandom(1, 12);
    crystal.yellow.value    = getRandom(1, 12);
    crystal.blue.value      = getRandom(1, 12);


    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    console.log("---------------------------------");
    console.log("target Score:" + targetScore);
    console.log("blue " + crystal.blue.value + '| red: ' + crystal.red.value + '| yellow: ' + crystal.yellow.value + 'purple: ' + crystal.purple.value);
    console.log("----------------------------------");

}
var addValues = function(crystal){
    currentScore = currentScore + crystal.value;

    console.log('your score:' + currentScore);
}



startGame();

$('#purple').click(function(){
    addValues(crystal.purple);
})
$('#red').click(function(){
    addValues(crystal.red);
})
$('#yellow').click(function(){
    addValues(crystal.yellow);
})
$('#blue').click(function(){
    addValues(crystal.blue);
})
