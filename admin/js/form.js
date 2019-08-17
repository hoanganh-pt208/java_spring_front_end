$_SERVER_DOMAIN = "http://localhost:8080/Sping_MVC_Project/",
// $_UI_DOMAIN = "http://localhost/Study_Again/java/Demo_project_java_UI/admin/",

// function login
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
        	if(result.Code == 200){
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

// funtion Set Cookie
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

// funtion Get Cookie
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

// Start set active for top Menu
$("#top_menu li.cls_home_menu").click(function() {
    $("#top_menu li.cls_search_menu").removeClass('active');
    $(this).addClass('active');
    $("#content>div#home_content").removeClass('hidden');
    $("#content>div#search_content").addClass('hidden');
});

$("#top_menu li.cls_search_menu").click(function() {
    $("#top_menu li.cls_home_menu").removeClass('active');
    $(this).addClass('active');
    $("#content>div#home_content").addClass('hidden');
    $("#content>div#search_content").removeClass('hidden');
});
// End set active for top Menu

// function draw list tag for search
function fn_draw_tag_list(){
    $.ajax({
        type: "GET",
        url: $_SERVER_DOMAIN + "tag/getTagList",
        dataType : 'json',
        success: function(result){
            var html = '';
            $.each (result, function (key, row){
                html += '<div class="padding-top: 2px; padding-bottom: 2px; cursor: pointer;">';
                    html += '<div class="' + row["id"] + '" style="float: left; background-color: '+row["color"]+';  width: 17px; height: 17px; border-radius: 25px; margin-right: 10px; margin-top: 2px; margin-left: 20px;">';
                    html += '</div>';
                    html += '<span>' + row["title"] + '</span>';
                html += '</div>';
            });

            $('div.tag_list').html(html);

            $( ".tag_list div" ).click(function() {
                if($(this).hasClass("active_tag")){
                    $(this).removeClass('active_tag');
                }else{
                    $('.tag_list div').removeClass('active_tag');
                    $(this).addClass('active_tag');
                }

                $tag_id = $(".tag_list div.active_tag>div").attr('class');

                if($tag_id){
                    $tag_id = $tag_id.slice(7);
                    $search_text = $("input#search_text").val();
                    // fn_draw_image_content_list($search_text,$tag_id);
                }else{
                    $tag_id = null;
                    $search_text = $("input#search_text").val();
                    // fn_draw_image_content_list($search_text,$tag_id);
                }
            });
        }
    });
}

// Start function draw tree category
function fn_draw_category_tree(){
    $.ajax({
        type: "GET",
        url: $_SERVER_DOMAIN + "category/getListCategory",
        dataType : 'json',
        success: function(result){
            var html = '';
            html += '<li><div class="item_open cls_child_node cls_active_item" style="cursor: pointer;"><a class="item_open" id='+result[0]["id"]+'></a><span id='+result[0]["id"]+'>'+result[0]["name"]+'</span></div>';
                html += '<ul style="margin-left: -19px;">';
                    html += build_menu(result, parent = '0');
                html += "</ul>";
            html += '</li>';

            $('ul.tree_node').html(html);

            $('ul.tree_node li a').click(function() {
                var item_id = this.id;
                if($(this).hasClass("item_open")){
                    $(this).removeClass('item_open');
                    $(this).addClass('item_close');
                    $(this).parent().removeClass('item_open');
                    $(this).parent().addClass('item_close');
                }
                else{
                    $(this).removeClass('item_close');
                    $(this).addClass('item_open');
                    $(this).parent().removeClass('item_close');
                    $(this).parent().addClass('item_open');
                }
                $('ul.tree_node div.cls_active_item').removeClass('cls_active_item');
                $(this).parent().addClass('cls_active_item');
            });
        }
    });
}

function build_menu(result, parent){
    var html = '';
    $.each (result, function (key, row){
        if (row['parent_id'] == parent){
            html += '<li><div class="item_close cls_child_node" style="cursor: pointer;"><a class="item_close" id='+row["id"]+'></a><span id='+row["id"]+'>'+row["name"]+'</span></div>';
                html += '<ul style="margin-left: -19px;">';
                if (has_children(result,row['id'])){
                    html += build_menu(result,row['id']);
                }
                html += "</ul>";
            html += '</li>';
        }
    });
    return html;
}

function has_children(result,id) {
    var flag = false;
    for(var i = 0; i < result.length; i ++){ 
        if(result[i]["parent_id"] == id){
            flag = true;
        }
    }
    return flag;
}
// End function draw tree category

// Funtion Upload content
$("#btnSubmit").click(function (event) {

    // alert("btnSubmit form js");
    //stop submit the form, we will post it manually.
    event.preventDefault();

    // Get form
    var form = $('#fileUploadForm')[0];
    // console.log('form');
    // console.log(form);
    var name = $('input[type=file]').val();
    console.log('name');
    console.log(name);
    // Create an FormData object 
    var data = new FormData(form);
    // console.log('data');
    // console.log(data);

})