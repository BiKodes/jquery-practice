    // text() - Sets or returns the text content of selected elements
    // html() - Sets or returns the content of selected elements (including HTML markup)
    // val() - Sets or returns the value of form fields

// This is how to get content with the jQuery text() and html() methods:

$(document).ready(function(){
  $("#btn1").click(function() {
    alert("Text: " + $("#test").text());
  });

  $("#btn2").click(function() {
    alert("HTML: " + $("#test").html());
  });
});

// This is how to get the value of an input field with the jQuery val() method:

$(document).ready(function() {
  $("#btn1").click(function() {
    alert("Value: " + $("#test").val());
  });
});
