// stop() Method:
// stop() method is used to stop animations or effects before it is finished.
// It works for all jQuery effect functions, including sliding, fading and custom animations.
// $(selector).stop(stopAll,goToEnd);
// stopAll parameter specifies whether also the animation queue should be cleared or not.
// Default is false, which means that only the active animation will be stopped,allowing any queued animations to be performed afterwards.
// goToEnd parameter specifies whether or not to complete the current animation immediately. Default is false.
// by default, the stop() method kills the current animation being performed on the selected element.


$(document).ready(function(){
    $("#stop").click(function(){
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    })
})