//create a login object
var login = {
    //login function
    login: function () {
        //get the username and password
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();

        //check if username and password and email are not empty
        if (username != '' && password != '' && email != '') {
            //call the login method of the user controller
            $.post('/user/login', { username: username, password: password, email: email }, function (data) {
                //check if the login was successful
                if (data.success) {
                    //redirect to the home page
                    window.location.href = '/home';
                } else {
                    //display the error message
                    $('#error').html(data.message);
                }
            });
        } else {
            //display the error message
            $('#error').html('Please enter a username, email, and password.');
        }
    }
};
