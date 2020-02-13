// Domain of Back-End (Java Spring)
// $_SERVER_DOMAIN = "http://localhost:8080/Sping_MVC_Project/",

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
