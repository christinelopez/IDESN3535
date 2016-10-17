function myFunction()
{
    var a=document.getElementsByClassName("myText").value;

    if (textbox.value.length >= 2)
    {
        document.getElementById("name").innerText="Correct!";
    }
    else
    {
        document.getElementById("name").innerHTML="Oops!";
    }
}
//
//
// window.changeColour = function(value)
// {
//     alert(value);
//     var color = document.body.style.backgroundColor;
//     switch(value)
//     {
//         case 'b':
//             color = "#FF0000";
//             break;
//         case 'r':
//             color = "#0000FF";
//             break;
//         case 'p':
//             color = "#FF00FF";
//             break;
//     }
//     document.body.style.backgroundColor = color;
// }