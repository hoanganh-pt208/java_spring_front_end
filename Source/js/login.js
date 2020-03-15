// Function login
function fn_login(){
	// $.ajax({
	// 	type: "POST",
	//     url: "http://localhost:8080/Sping_MVC_Project/oauth/token?grant_type=password&username=admin&password=12345",
	//     headers: {
	// 	    "Authorization": "Basic " + btoa("crmClient1" + ":" + "crmSuperSecret"),
	// 	    "Access-Control-Allow-Origin": "* ",
	// 	    "Access-Control-Allow-Methods": "GET,POST",
	// 	    "Access-Control-Allow-Headers": "x-requested-with"
	// 	},
	//     dataType: "json",
	//     success: function(response) {
	//         console.log('response');
 //        	console.log(response);
	//     },
	//     error: function(errorThrown) {
	//         alert(errorThrown.error);
	//     }
	// });

	$.ajax({
		url: "http://localhost:8080/Sping_MVC_Project/oauth/token",
		beforeSend: function(xhr) {
			xhr.setRequestHeader("grant_type", "password");
			// xhr.setRequestHeader("client_id", "crmClient1");
			// xhr.setRequestHeader("client_secret", "crmSuperSecret");
			xhr.setRequestHeader("client_id", "admin");
			xhr.setRequestHeader("client_secret", 12345);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
		},
		dataType: "json",
		type: "POST",
		success: function(response) {
			token = response.access_token;
			expiresIn = response.expires_in;
		},
		error: function(errorThrown) {
			alert(errorThrown.error);
		}
	});
	
}

// function Login
// $("#formLogin").submit(function() {
//    alert('a');
//    // return;
//   	$user_name = $('#formLogin #user_login').val();
//     $password = $('#formLogin #pass_login').val();
//     $remember_me = $("#remember_me").is(":checked");

//     $.ajax({
//         type: "POST",
//         url: "http://localhost:8080/Sping_MVC_Project/login",
// 	    data : {
// 		    user_name : $user_name,
// 		    password : $password
// 		},
// 	    dataType : 'json',
//         success: function (result) {
//         	if(result.status == "success"){
//                 console.log('success');
//                 return;
//        //  		if($remember_me == true){
// 			    // 	setCookie($user_name,$password,1,1);
// 			    // }else{
// 			    // 	setCookie("","",0,1);
// 			    // }
//        //  		window.location = 'main.html';
//         	}else{
//         		// $("#formLogin div.alert.alert-danger").removeClass('hidden');
//         	}
// 	    }
//     });
// });
