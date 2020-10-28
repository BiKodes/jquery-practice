// The element Selector:
// You can select all <p> elements on a page like this:
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

// The #id Selector:
// To find an element with a specific id, write a hash character.
$(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
});

// The .class Selector:
// To find elements with a specific class, write a period character.

$(document).ready(function() {
    $("button").click(function(){
        $(".test").hide();
    });
});

// Selects all elements:
$("*")

$(document).ready(function(){
    $("button").click(function(){
        $("*").ready();
    });
});

// Selects the current HTML element:
$(this)

$(document).ready(function(){
    $("button").click(function(){
        $(this).hide();
    });
});

// Selects all <p> elements with class="intro":
$("p.intro")

$(document).ready(function(){
    $("button").click(function(){
        $("p.intro").hide();
    });
});


// Selects the first <p> element:
$("p:first")

$(document).ready(function(){
    $("button").click(function(){
        $("p:first").hide();
    });
});

// Selects the first <li> element of the first <ul>:
$("ul li:first")

$(document).ready(function(){
    $("button").click(function(){
        $("ul li:first").hide();
    });
});

// Selects the first <li> element of every <ul>:
$("ul li:first-child")

$(document).ready(function(){
    $("button").click(function(){
        $("ul li:first-child").hide();
    });
});


// Selects all elements with an href attribute:

$("[href]")

$(document).ready(function(){
    $("button").click(function(){
        $("[href]").hide();
    });
});


// Selects all <a> elements with a target attribute value equal to "_blank":

$("a[target = '_blank']")

$(document).ready(function(){
    $("button").click(function(){
        $("a[target = '_blank]").hide();
    });
});

// Selects all <a> elements with a target attribute value NOT equal to "_blank":

$("a[target != '_blank]'")

$(document).ready(function(){
    $("button").click(function(){
        $("a[target != '_blank']").hide();
    });
});

// Selects all <button> elements and <input> elements of type="button" 	:
$(":button")

$(document).ready(function(){
    $("button").click(function(){
        $(":button").hide();
    });
});

// Selects all even <tr> elements:
$("tr:even")

$(document).ready(function(){
    $("button").click(function(){
        $("tr:even").hide();
    });
});

// Selects all odd <tr> elements:

$("tr:odd")

$(document).ready(function(){
    $("button").click(function(){
        $("tr:odd").hide();
    })
})


// https://www.w3schools.com/jquery/jquery_ref_selectors.asp










