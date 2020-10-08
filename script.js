
        // When button is clicked 
        var button = document.querySelector("#Mybutton");

        
        // Get User inputs collection
        function userselections(event) {
        var picknumber = prompt("What's the lenght of your password? (8-128)");
        var picklowercase = confirm("Do you want to include lowercase characters?")
        var pickuppercase = confirm("Do you want to include Uppercase characters?");
        var picknumeric = confirm("Do you want to include numeric characters?");
        var pickspecial = confirm("Do you want to include special characters?");

        // Define Password variable to be generated
        var yourpassword = ""

        // Arrays of options to be leveraged to generate password
        var lowercaselist = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
        var uppercaselist = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"];
        var numericlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var speciallist = ["?","!","<","@",">","$","%","(",")"];


        // Conditions set to build password based on user inputs
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
        
        // Alert user if lenght is not correct (outside 8 - 128 range )
        var i ;
        
        if (picknumber<= 8 || picknumber >= 128) {
            alert("Please select a valid lenght number")
            return;
        }
        else

        // Loop to add numbers to password to match total lenght selected by user
        for (i = 0; i = (picknumber - yourpassword.length); i++) {
            yourpassword += numericlist[Math.floor(Math.random() * numericlist.length)];
            console.log(yourpassword.length);
        }
        
        // Display of password in the form
        var name_element = document.getElementById("mypass"); 
        name_element.value = yourpassword;

        // Alert user with generated password

        alert ("your password is " + yourpassword);

          }
        
        button.addEventListener("click", userselections);

    