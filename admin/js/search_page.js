// JS set height for left menu in Search Page after render
setTimeout(function () {
  	document.getElementById('search_left_menu').style.height = ($(window).height() - (55+30+6+3)).toString()+'px';
  	var search_left_menu_height = $(window).height() - (55+30+6+3);

  	var search_left_menu_top_height = search_left_menu_height * 6/10;
  	document.getElementById('search_left_menu_top_bottom').style.height= (search_left_menu_top_height - 33).toString()+'px';

  	var search_left_menu_bottom_height = search_left_menu_height * 4/10;
	document.getElementById('search_left_menu_bottom_bottom').style.height= (search_left_menu_bottom_height - 33).toString()+'px';
}, 1);

// JS set height for left menu in Search Page when window change size
window.addEventListener('resize', function(event){
	document.getElementById('search_left_menu').style.height = ($(window).height() - (55+30+6+3)).toString()+'px';
	var search_left_menu_height = $(window).height() - (55+30+6+3);

	var search_left_menu_top_height = search_left_menu_height * 6/10;
  	document.getElementById('search_left_menu_top_bottom').style.height= (search_left_menu_top_height - 33).toString()+'px';

  	var search_left_menu_bottom_height = search_left_menu_height * 4/10;
	document.getElementById('search_left_menu_bottom_bottom').style.height= (search_left_menu_bottom_height - 33).toString()+'px';
})
// JS set height for Right menu in Search Page after render
setTimeout(function () {
  	document.getElementById('search_right_menu').style.height = ($(window).height() - (139)).toString()+'px';
}, 1);

// JS set height for Right menu in Search Page when window change size
window.addEventListener('resize', function(event){
	document.getElementById('search_right_menu').style.height = ($(window).height() - (139)).toString()+'px';
})

// Call funtion draw Tag list
fn_draw_tag_list();

// Call funtion draw Tree Category
fn_draw_category_tree();

// function draw list Tag list
function fn_draw_tag_list(){
    $.ajax({
        type: "GET",
        url: $_SERVER_DOMAIN + "tag/getTagList",
        dataType : 'json',
        success: function(result){
            if(result.length > 0){
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
            }else{
                console.log("Error: No data for Tag List");
            }
        }
    });
}

// funtion draw Tree Category
function fn_draw_category_tree(){
    $.ajax({
        type: "GET",
        url: $_SERVER_DOMAIN + "category/getListCategory",
        dataType : 'json',
        success: function(result){
            if(result.length > 0){
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
            }else{
                console.log("Error: No data for Category");
            }
        }
    });
}

// funtion render html for tree menu
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

// funtion check has children
function has_children(result,id) {
    var flag = false;
    for(var i = 0; i < result.length; i ++){ 
        if(result[i]["parent_id"] == id){
            flag = true;
        }
    }
    return flag;
}

// function search accept only Number and Letter
function isInputNumberLetter(evt){
    var ch = String.fromCharCode(evt.which);
    if(!(/[a-zA-Z0-9]/.test(ch))){
        evt.preventDefault();
    }
}

// add class active for type view
$( "#tab_bar a" ).click(function() {
	$( "#tab_bar a" ).removeClass('active');
	$(this).addClass('active');
	if(this.id == "content_by_thumb_view"){
		$( "#tab_image_content div.image_list" ).addClass('hidden');
		$( "#tab_image_content div.image_thumb" ).removeClass('hidden');

		$( "#tab_video_content div#video_list" ).addClass('hidden');
		$( "#tab_video_content div.video_thumb" ).removeClass('hidden');
		
	}
	if(this.id == "content_by_list_view"){
		$( "#tab_image_content div.image_list" ).removeClass('hidden');
		$( "#tab_image_content div.image_thumb" ).addClass('hidden');

		$( "#tab_video_content div#video_list" ).removeClass('hidden');
		$( "#tab_video_content div.video_thumb" ).addClass('hidden');
	}
});
