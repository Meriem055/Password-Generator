
        var button = document.querySelector("#Mybutton");

        function userselections(event) {
        var picknumber = prompt("What's the lenght of your password? (8-128)");
        var picklowercase = confirm("Do you want to include lowercase characters?")
        var pickuppercase = confirm("Do you want to include Uppercase characters?");
        var picknumeric = confirm("Do you want to include numeric characters?");
        var pickspecial = confirm("Do you want to include special characters?");

        var yourpassword = ""

        var lowercaselist = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
        var uppercaselist = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"];
        var numericlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var speciallist = ["?","!","<","@",">","$","%","(",")"];


        if (picklowercase)  {
            yourpassword += lowercaselist[Math.floor(Math.random() * lowercaselist.length)];
            console.log(yourpassword.length);
        }

        if (pickuppercase)  {
            yourpassword += uppercaselist[Math.floor(Math.random() * uppercaselist.length)];
            console.log(yourpassword.length);
        }

        if (picknumeric)  {
            yourpassword += numericlist[Math.floor(Math.random() * numericlist.length)];
            console.log(yourpassword.length);
        }

        if (pickspecial)  {
            yourpassword += speciallist[Math.floor(Math.random() * speciallist.length)];
            console.log(yourpassword.length);
        }
        
        var i ;
        
        if (picknumber<= 0 || picknumber >= 128) {
            alert("please pick a valid number")
            return;
        }
        else
        for (i = 0; i = (picknumber - yourpassword.length); i++) {
            yourpassword += numericlist[Math.floor(Math.random() * numericlist.length)];
            console.log(yourpassword.length);
        }
        
        document.getElementById("mypass").innerHTML = yourpassword;
        alert ("your password is " + yourpassword);

          }
        
        
        button.addEventListener("click", userselections);

    