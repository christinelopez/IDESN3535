$(document).ready(function(){
    $("#password,#firstname,#email,#passwordverification").mouseover(function(){
        $("#password,#firstname,#email,#passwordverification").css("background-color", "grey");
    });
    $("#password,#firstname,#email,#passwordverification").mouseout(function(){
        $("#password,#firstname,#email,#passwordverification").css("background-color", "white");
    });

    $(".buttons").click(function(){

console.log("user has submited log")

        $("#firstname").ready(function() {
            if ($("#firstname").val().length<2) {
                $("#firstname").addClass("error")

                console.log("name criteria met")
            }
            else $("#firstname").addClass("correct")

            $("#fname").addClass("errormessages")


            console.log("name must contain minimum of 2 characters")
        });

        $("#email").ready(function() {
            if ($("#email").val().length<10) {
                $("#email").addClass("error")

             console.log("email, matches criteria")

            }
            else $("#email").addClass("correct")

            $("#mail").addClass("errormessages")

            console.log("user has submited invalid email, must contain 10 characters")

        });


        passfield("passwordContent",[0-9]);


        $("#password").ready(function(passfield) {
            if ($("#password").val(passfield)) {

                $("#password").addClass("correct")

                 console.log("password criteria met")

            }
            else{

                $("#password").addClass("correct")

                    $("#pass").addClass("errormessages")

                    console.log("password must contain a number")
            }
        });


        // checkLength("firstname",2);
        //     checkLength("email",10);
        //
        //
        // function checkLength(firstname, minimumlength) {
        //     console.log("firstname; "+chicken)
        //     console.log("firstname length; "+chicken.length)
        //     console.log("minimumlength; "+minimumlength)
        //
        //     if (chicken.length > minimumlength) {
        //         $("#firstname").addClass(".correct");
        //
        //     }
        //     else $("#firstname").addClass(".error");
        // }




        // $("#password").ready(function() {
        //     if ($("#password").val().length<10) {
        //         $("#password").addClass("error")
        //
        //     console.log("password criteria met")
        //
        //     }
        //     else $("#password").addClass("correct")
        //
        //     $("#pass").addClass("errormessages")
        //
        //     console.log("password must contain a number")
        //
        // });


        $("#passwordverification").ready(function () {

            if ($("#password") == $("#passwordverification")) {
            $("#passwordverification").addClass("correct")

                console.log("password verification entered and matches criteria")
            }
             else{   $("#passwordverification").addClass("error")

                $("#passv").addClass("errormessages")

                console.log("password does not match")

            }

        });

        $("#blue,#red,#yellow,#orange").ready(function() {

            if ($("#password") == $("#passwordverification"))
            if ($("#password").val(passfield))
            if ($("#email").val().length<10)
            if ($("#firstname").val().length<2){



            }


        });

    });
});


