function InputCheck(input)
{
    let val = input.value;
    let red = "#e66c5c"
    let green = "#63e65c"

    if (input.classList.contains("MinMaxChar"))
    {
        let l = val.length;
        if (l < 2){
            input.style.backgroundColor = red;
            document.getElementById(input.id + "Error").innerHTML = "Minimaal 2 karakters nodig";
        }
        else
        {
            if(l > 10){
                input.style.backgroundColor = red;
                document.getElementById(input.id+"Error").innerHTML = "Maximaal 10 tekens";   
            }
            else{
                input.style.backgroundColor = green;
                document.getElementById(input.id+"Error").innerHTML = "";
            }
        }
    }
    else if (input.classList.contains("postcode"))
    {
            let regex = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;
            let postcode = document.getElementById(input.id).value;
            if(regex.test(postcode))
            {
                input.style.backgroundColor = green;
                document.getElementById(input.id+"Error").innerHTML = "";
            }
            else
            {
                input.style.backgroundColor = red;
                document.getElementById(input.id+"Error").innerHTML = "Vul een geldige postcode in.";
            }

    }
    else if (input.classList.contains("email"))
    {
        let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        let email = document.getElementById(input.id).value;
        if(regex.test(email))
        {
            input.style.backgroundColor = green;
            document.getElementById(input.id+"Error").innerHTML = "";
        }
        else
        {
            input.style.backgroundColor = red;
            document.getElementById(input.id+"Error").innerHTML = "Vul een geldige E-Mail in.";
        }
    }
    else if (input.classList.contains("geboortedatum"))
    {
        let regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/i;
        let geboortedatum = document.getElementById(input.id).value;
        if(regex.test(geboortedatum))
        {
            input.style.backgroundColor = green;
            document.getElementById(input.id+"Error").innerHTML = "";
        }
        else
        {
            input.style.backgroundColor = red;
            document.getElementById(input.id+"Error").innerHTML = "Vul een geldige datum in.";
        }
    }
}
function IfEmpty()
{
    let red = "#e66c5c"
   const allChecks = document.getElementsByClassName("check");
    for (let item of allChecks) {
        if (item.value.length == 0) {
            item.style.backgroundColor = red;
        }
    }
}