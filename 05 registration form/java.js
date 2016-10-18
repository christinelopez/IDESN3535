function validateForm()
{
    var firstname=document.getElementById("firstname");

    checklength(firstname,2);

    var email=document.getElementById("email");

    checklength(email,5);

    var password=document.getElementById("password");

    checknumberandlength(password,10);

    password.value.search(/(0-9)+/);

    var passwordverification=document.getElementById("passwordverification");

    checkEqual(password,passwordverification);

    var blueButton=document.getElementById("bluef");

    var redButton=document.getElementById("red");

    var yellowButton=document.getElementById("yellow");

    var orangeButton=document.getElementById("orange");

}
function checklength(wordtocheck, minimumlength)  {

    if (wordtocheck.value.length>minimumlength){
        // The first name is more than 2 characters
        console.log( wordtocheck.value+" is more than "+minimumlength+" characters");

        wordtocheck.className="correct";


    // check to see if object has assaighn to it, if it does remove it

    }
    else{
        // the first name is less than 2 characters
        console.log( wordtocheck.value+" is less than "+minimumlength+" characters");

        wordtocheck.className = "error";
    }
}
function checknumberandlength(wordtocheck, minimumlength) {
    if ( /\d/.test(wordtocheck.value) && (wordtocheck.value.length>minimumlength)){
        // The first name is more than 2 characters
        console.log( wordtocheck.value+" contains number ");
        wordtocheck.className = "correct";
        // check to see if object has assaighn to it, if it does remove it
    }
    else{
        // the first name is less than 2 charactrs
        console.log( wordtocheck.value+" does not contain number ");
        wordtocheck.className = "error";
    }
}
function checkEqual(wordtocheck, wordtocheck2) {
    if (wordtocheck.value==wordtocheck2.value){
        // THe first name is more than 2 characters
        console.log( wordtocheck.value+" equals "+wordtocheck2.value);
        wordtocheck.className = "correct";
        // check to see if object has assaighn to it, if it does remove it
    }
    else{
        // the first name is less than 2 charactrs
        console.log( wordtocheck.value+" does not equal "+wordtocheck2.value);
        wordtocheck.className = "error";
    }
}
