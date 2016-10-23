$(document).ready(function(){
    $("#password,#firstname,#email,#passwordverification").mouseover(function(){
        $("#password,#firstname,#email,#passwordverification").css("background-color", "grey");
    });
    $("#password,#firstname,#email,#passwordverification").mouseout(function(){
        $("#password,#firstname,#email,#passwordverification").css("background-color", "white");
    });






    $(".buttons").click(function(){

    function checkLength() {
        if (el.value.length != 6) {
            $("#firstname").addClass(".correct");

        }
        else $("#firstname").addClass(".error");
    }
    });
});


