// Method Chaining:
// allows us to run multiple jQuery methods (on the same element) within a single statement.
// To chain an action, you simply append the action to the previous action. 

$(document).ready(function(){
    $("button").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#p1").css("color", "red")
        .slideUp(2000)
        .slideUp(2000);
    });
});
jQuery throws away extra whitespace and executes the lines above as one long line of code.