function nameFunc(){
    let inName = document.getElementById("name").value;

    if(!((inName[0]>="A") && (inName[0]<="Z")) || ((inName[0]>="a") && (inName[0]<="z")))
        {
            document.getElementById("name1").innerHTML = "Invalid name.";
            return false;
        }
    else
        {
            document.getElementById("name2").innerHTML = "Valid name.";
            return true;
        }

}


function passFunc(){
    let inPass = document.getElementById("password").value;

    if(inPass.length < 5)
        {
            document.getElementById("pass1").innerHTML = "Password character is less than 5."
        }
    else
        {
            let alp = 0;
            let num = 0;

            for(let i = 0; i < inPass.length; i++)
                {
                    if((inPass[i]>="a") && (inPass[i]<="z"))
                        {
                            alp = 1;
                        }
                    else if((inPass[i]>="0") && (inPass[i]<="9"))
                        {
                            num = 1;
                        }
                }
            if(!alp || !num)
                {
                    document.getElementById("pass2").innerHTML = "Password must contain character and number.";
                    return false;
                }
            else if(alp && num)
                {
                    document.getElementById("pass3").innerHTML = "Strong Password";
                    return true;
                }
        }
}





function showPass(){
    let pass = document.getElementById("password");

    if(pass.type === "password")
        {
            pass.type = "text";
            return true;
        }
    else
        {
            pass.type = "password";
            return true;
        }
}











