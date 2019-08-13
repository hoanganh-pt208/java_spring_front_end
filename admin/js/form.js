$_DOMAIN = "http://localhost:8080/Sping_MVC_Project/",

$("#formLogin").submit(function() {

  	$user_name = $('#formLogin #user_login').val();
    $password = $('#formLogin #pass_login').val();

    $.ajax({
        type: "POST",
        url: $_DOMAIN + "login",
	    data : {
		    user_name : $user_name,
		    password : $password
		},
	    dataType : 'json',
        success: function (result) {
        	console.log(result);
        	if(result.Code == 200){
        		window.location = 'main.html';
        	}else{
        		$("#formLogin div.alert.alert-danger").removeClass('hidden');
        	}
	    }
    });

});
