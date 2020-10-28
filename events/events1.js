// event.currentTarget Property:
// is the current DOM element within the event bubbling phase.
// event 	Required. The event parameter comes from the event binding function

$("h1, h2, p"),click(function(event){
    alert(event.currentTarget === this);
});

