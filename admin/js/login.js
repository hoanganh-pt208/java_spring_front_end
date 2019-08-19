// Domain of Back-End (Java Spring)
$_SERVER_DOMAIN = "http://localhost:8080/Sping_MVC_Project/",

// Call function get cookie after render
getCookie();

// function Login
$("#formLogin").submit(function() {
  	$user_name = $('#formLogin #user_login').val();
    $password = $('#formLogin #pass_login').val();
    $remember_me = $("#remember_me").is(":checked");

    $.ajax({
        type: "POST",
        url: $_SERVER_DOMAIN + "login",
	    data : {
		    user_name : $user_name,
		    password : $password
		},
	    dataType : 'json',
        success: function (result) {
        	if(result.status == "success"){
        		if($remember_me == true){
			    	setCookie($user_name,$password,1,1);
			    }else{
			    	setCookie("","",0,1);
			    }
        		window.location = 'main.html';
        	}else{
        		$("#formLogin div.alert.alert-danger").removeClass('hidden');
        	}
	    }
    });
});

// Funtion set Cookie
function setCookie(user_name, password, remember_me ,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = "user_name =" + user_name + expires + "; path=/";
    document.cookie = "password =" + password + expires + "; path=/";
    document.cookie = "remember_me =" + remember_me + expires + "; path=/";
}

// Funtion Get Cookie
function getCookie() {
    var decodedCookie = decodeURIComponent(document.cookie);
    if(decodedCookie){
        var value = decodedCookie.split(';');
        $('#user_login').val(value[0].slice(10));
        $('#pass_login').val(value[1].slice(10));
        if(value[2].slice(13) == 1){
            document.getElementById("remember_me").checked = true;
        }else{
            document.getElementById("remember_me").checked = false;
        }
    }
}