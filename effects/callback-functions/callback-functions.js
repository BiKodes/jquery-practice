// Callback Functions:
// Is executed after the current effect is 100% finished.
// Is executed after the current effect is finished.

// callback parameter that is a function that will be executed after the hide effect is completed:

$(document).ready(function(){
    $("button").click(function(){
        $("p").hide("slow", function(){
            alert("The paragraph is now hidden")
        });
    });
})

// has no callback parameter, and the alert box will be displayed before the hide effect is completed:

$(document).ready(function(){
    $("button").click(function(){
        $("p").hide(1000);
        alert("The paragraph is now hidden")
    })
})