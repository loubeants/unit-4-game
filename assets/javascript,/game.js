
var random_result;
var lost=0;
var win=0;
var previous = 0;

var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
                'https://channelingerik.com/wp-content/uploads/2015/12/Crystal-Fantasy-Wallpaper-Desktop.jpg',
                'https://www.crashmania.net/images/encyclopedia/objects/crystals/description.jpg',
                'https://i.pinimg.com/736x/8e/e6/a9/8ee6a9bbfc5bc2581ce5148476a6e06a.jpg',
                'https://www.bing.com/th?id=OIP.CQ-t3Dwtmt3NTt7K2Gw6MwHaJe&pid=Api&rs=1&p=0'
            ];

    random_result =math.floor(math.random() * 19 ) + 101;

    $("#result").html('random Result: ' + random_result);

    for(var i = 0; i < 4; i++){

        var random = math.floor(math.random() * 12) + 1;

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            crystal.css({
                "background-image":"url('" + (images[i]) + "')",
                "background-size":"cover"
            });
        $(".crystals").append(crystal);
    }
    $("#previous").html("Total score: "+ previous);
}

resetAndStart();

$(document).on('click', ".crystal", function () { 

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total score: " + previous);

    console.log(previous);

    if(previous > random_result){

        lost++;

        $("#lost").html("you lost: " + lost);

        previous = 0;

        resetAndStart();
    }
    else if(previous === random_result){
        
        win++;

        $("#win").html("you win: " + win);

        previous = 0;

        resetAndStart();
    }
   
});

