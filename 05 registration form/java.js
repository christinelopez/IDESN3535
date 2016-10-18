function validateForm()
{
    var firstname=document.getElementById("firstname");

    checklength(firstname,2);

    var email=document.getElementById("email");

    checklength(email,5);

    var password=document.getElementById("password");

    checklength(password,10);

    password.value.search(/(0-9)+/);

    var passwordverification=document.getElementById("passwordverification");

    checkEqual(password,passwordverification);
}
function checklength(wordtocheck, minimumlength)  {

    if (wordtocheck.value.length>minimumlength){
        // The first name is more than 2 characters
        console.log( wordtocheck.value+" is more than "+minimumlength+" characters");



    // check to see if object has assaighn to it, if it does remove it



    }
    else{
        // the first name is less than 2 characters
        console.log( wordtocheck.value+" is less than "+minimumlength+" characters");

        wordtocheck.className = "error";
    }
}
