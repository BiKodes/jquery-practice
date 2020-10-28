// slide methods slide elements up and down.
// slideDown() Method:

// used to slide down an element.
$(document).ready(function(){
    $("flip").click(function(){
        $("panel").slideDown()
    })
})

// slideUp() Method:
// method is used to slide up an element.

$(document).ready(function(){
    $("button").click(function(){
        $("#panel").slideup();
    });
});


// slideToggle() Method:
// method toggles between the slideDown() and slideUp() methods.
// If the elements have been slid down, slideToggle() will slide them up.

// If the elements have been slid up, slideToggle() will slide them down. 

$(document).ready(function(){
    $("button").click(function(){
        $("#panel").slideToggle();
    });
});
