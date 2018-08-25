


// user name class = name_aa
//user phone number class = phone_aa
//user email class = email_aa
// user id class = id_aa
// button class = test  

function userInput () {
    var name = $('.name_aa').val();
    var phone = $('.phone_aa').val();
    var email = $('.email_aa').val();
    var id = $('.id_aa').val();

    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(id);

}

$(".test").on("click", userInput)
