// Function login
// function fn_login(){

// 	// var client_id = "crmClient1";
// 	// var client_secret = "crmSuperSecret";

// 	// var str = client_id + ":" + client_secret;
// 	// var enc = window.btoa(str);
// 	// var cred = "grant_type=password&username=admin&password=12345";
// 	// $.ajax({
// 	//         type: "POST",
// 	//         url: "http://localhost:8080/Sping_MVC_Project/oauth/token",
// 	//         headers:{
// 	//             'Authorization':'Basic '+enc,
// 	//             'Content-Type': 'application/x-www-form-urlencoded'
// 	//         },
// 	//         processData: false,
// 	//         data : cred,
// 	//         success: function (data) {
// 	//             console.log('data ...' + data);
// 	//         }
// 	//     }
// 	// );

// 	$.ajax({
//         url: "http://localhost:8080/Sping_MVC_Project/oauth/token",
//         method: "POST",
//         // username: "crmClient1",
//         // password: "crmSuperSecret",
//         contentType: "application/www-x-form-urlencoded",
//         crossDomain: true,
//         async: false,
//         cache: false,
//         headers: {
// 		    "Authorization": "Basic " + btoa("crmClient1" + ":" + "crmSuperSecret"),
// 		    "Access-Control-Allow-Origin": "* ",
// 		    "Access-Control-Allow-Methods": "GET,POST",
// 		    "Access-Control-Allow-Headers": "x-requested-with"
// 		},
//         data: {
//             "grant_type": "password",
//             "username": "admin",
//             "password": "12345"
//         },
//         success: function (data) {
//             console.log(data);
//             retrieveCases();
//         },
//         error: function () {
//             console.log("authorization failed");
//         }
//     });
// 	// alert('test');
// 	// $.ajax({
//  //        type: 'POST',
//  //        url: 'upload_image.php',
//  //        success: function(result, response){
//  //        	console.log('result');
//  //        	console.log(result);
//  //        	console.log('response');
//  //        	console.log(response);
//  //            // if(response == 'success'){
//  //            //     $tag_id = $(".tag_list div.active_tag>div").attr('class');
//  //            //     $search_text = $("input#search_text").val();

//  //            //     var new_current_page = $(".image_paging").find('input#current_image_page').val();

//  //            //     if(!$search_text && !$tag_id){
//  //            //         fn_get_total_image();
//  //            //         fn_draw_image_content_list($search_text = null,$tag_id = null,$current_page = new_current_page,$limit = 10);
//  //            //     }
//  //            //     else if(!$search_text && $tag_id){
//  //            //         $tag_id = $tag_id.slice(7);
//  //            //         fn_draw_image_content_list($search_text = null,$tag_id = $tag_id,$current_page = new_current_page,$limit = 10);
//  //            //     }
//  //            //     else if($search_text && !$tag_id){
//  //            //         fn_getTotalImageBySearchText($search_text);
//  //            //         fn_draw_image_content_list($search_text,$tag_id = null,$current_page = new_current_page,$limit = 10);
//  //            //     }

//  //            //     document.getElementById('image-file').value = "";
//  //            //     resetForm();
//  //            //     document.cookie = "category_id = ''";
//  //            //     $('#myModal').modal('hide');
//  //            // }
//  //        }
//  //    });
// 	// $.ajax({
// 		// type: "POST",
// 	 //    url: "http://localhost:8080/Sping_MVC_Project/oauth/token?grant_type=password&username=admin&password=12345",
// 	 //    headers: {
// 		//     "Authorization": "Basic " + btoa("crmClient1" + ":" + "crmSuperSecret"),
// 		//     "Access-Control-Allow-Origin": "* ",
// 		//     "Access-Control-Allow-Methods": "GET,POST",
// 		//     "Access-Control-Allow-Headers": "x-requested-with"
// 		// },
// 	 //    dataType: "json",
// 	 //    success: function(response) {
// 	 //        console.log('response');
//   //       	console.log(response);
// 	 //    },
// 	 //    error: function(errorThrown) {
// 	 //        alert(errorThrown.error);
// 	 //    }
// 	//  		type : 'POST',
//  //            url : 'http://localhost:8080/Sping_MVC_Project/oauth/token',
//  //            data : {
//  //                'client_id' : 'crmClient1',
//  //                'client_secret' : 'crmSuperSecret',
//  //                'grant_type' : 'password',
//  //                'username' :"admin",
//  //                'password' : "12345",
//  //                'scope' : 'read write'
//  //            },
//  //             beforeSend: function(xhr) {
//  //                 xhr.setRequestHeader("Authorization", "Basic " + btoa("crmClient1" + ':' + "crmSuperSecret") )
//  //               },
//  //            success : function(response) {
//  //                 console.log('response');
//  //  //       	console.log(response);
//  //            }
// 	// });


// 	// $.ajax({
// 	// 	url: "http://localhost:8080/Sping_MVC_Project/oauth/token?grant_type=password&username=admin&password=12345",
// 	// 	type: "POST",
// 	// 	// beforeSend: function(xhr) {
// 	// 	// 	xhr.setRequestHeader("Authorization", "Negotiate");
// 	// 	// 	xhr.setRequestHeader("grant_type", "password");
// 	// 	// 	xhr.setRequestHeader("client_id", "crmClient1");
// 	// 	// 	xhr.setRequestHeader("client_secret", "crmSuperSecret");
// 	// 	// 	xhr.setRequestHeader("Content-Type", "application/json");
// 	// 	// 	xhr.setRequestHeader("Accept", "application/json");
// 	// 	// },
// 	//  //    async: true,

// 	// 	// dataType: "json",
// 	// 	// type: "GET",
// 	// 	// url: "http://localhost:8080/Sping_MVC_Project/tag/getTagList",

// 	// 	success: function(response) {
// 	// 		console.log('response');
// 	// 		console.log(response);
// 	// 	},
// 	// 	error: function(errorThrown) {
// 	// 		// console.log('errorThrown');
// 	// 		// console.log(errorThrown);
// 	// 	}
// 	// });
	
// }

// function Login
$("#formLogin").submit(function() {
  	$user_name = $('#formLogin #user_login').val();
    $password = $('#formLogin #pass_login').val();
    // $remember_me = $("#remember_me").is(":checked");

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/Sping_MVC_Project/login",
	    data : {
		    user_name : $user_name,
		    password : $password
		},
	    dataType : 'json',
        success: function (result) {
        	if(result.status == "success"){
        		window.location = 'main.html';
        	}else{
        		// $("#formLogin div.alert.alert-danger").removeClass('hidden');
        	}
	    }
    });
});
