// START funtion set heigh for search menu after render and window change size
setTimeout(function () {
    document.getElementById('search_left_menu').style.height = ($(window).height() - (94)).toString()+'px';
    var search_left_menu_height = $(window).height() - (94);
    //Category height 70%
    var search_left_menu_top_height = search_left_menu_height * 7/10;
    document.getElementById('search_left_category_content').style.height= (search_left_menu_top_height - 33).toString()+'px';
    //Tag height 30%
    var search_left_menu_bottom_height = search_left_menu_height * 3/10;
    document.getElementById('search_left_tag_color_content').style.height= (search_left_menu_bottom_height - 34).toString()+'px';
}, 1);

window.addEventListener('resize', function(event){
    document.getElementById('search_left_menu').style.height = ($(window).height() - (94)).toString()+'px';
    var search_left_menu_height = $(window).height() - (94);
    //Category height 70%
    var search_left_menu_top_height = search_left_menu_height * 7/10;
    document.getElementById('search_left_category_content').style.height= (search_left_menu_top_height - 33).toString()+'px';
    //Tag height 30%
    var search_left_menu_bottom_height = search_left_menu_height * 3/10;
    document.getElementById('search_left_tag_color_content').style.height= (search_left_menu_bottom_height - 34).toString()+'px';
})
// END funtion set heigh for search menu after render and window change size

// JS set height for Right menu in Search Page after render
setTimeout(function () {
    document.getElementById('search_right_menu').style.height = ($(window).height() - (184)).toString()+'px';
}, 1);

// // JS set height for Right menu in Search Page when window change size
window.addEventListener('resize', function(event){
    document.getElementById('search_right_menu').style.height = ($(window).height() - (184)).toString()+'px';
})

$_SERVER_DOMAIN = "http://localhost:8080/Sping_MVC_Project/",

// Funtion draw Tree Category
fn_draw_category_tree("tree_node");

// funtion draw Tree Category
function fn_draw_category_tree(position){
    $.ajax({
        type: "GET",
        url: $_SERVER_DOMAIN + "category/getListCategory",
        dataType : 'json',
        success: function(result){
            var result = result.data;
            if(result.length > 0){
                var html = '';
                html += '<li><div class="item_open cls_child_node cls_active_item" style="cursor: pointer;"><a class="item_open" id="'+position+'_'+result[0]["id"]+'"></a><span class="'+position+'_'+result[0]["id"]+'">'+result[0]["name"]+'</span></div>';
                    html += '<ul style="margin-left: -19px;">';
                        html += build_menu(result, parent = '0', position);
                    html += "</ul>";
                html += '</li>';

                $('ul.'+position).html(html);

                $('ul.'+position+' li a').click(function() {
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
                    $('ul.'+position+' div.cls_active_item').removeClass('cls_active_item');
                    $(this).parent().addClass('cls_active_item');
                });

                $('.tree_node div.cls_child_node').click(function() {
                    $('.tree_node div.cls_child_node').removeClass('cls_active_item');
                    $(this).addClass('cls_active_item');
                });
                $('.tree_node_upload div.cls_child_node').click(function() {
                    $('.tree_node_upload div.cls_child_node').removeClass('cls_active_item');
                    $(this).addClass('cls_active_item');
                    var index = ($('ul.tree_node_upload  div.cls_child_node.cls_active_item>a').attr('id')).lastIndexOf("_");
                    var id = ($('ul.tree_node_upload  div.cls_child_node.cls_active_item>a').attr('id')).substring(index+1);
                    document.getElementById('selected_category_id_upload').value = id;
                });

            }else{
                console.log("Error: No data for Category");
            }
        }
    });
}

// funtion render html for tree menu
function build_menu(result, parent, position){
    var html = '';
    $.each (result, function (key, row){
        if (row['parent_id'] == parent){
            html += '<li><div class="item_close cls_child_node" style="cursor: pointer;"><a class="item_close" id="'+position+'_'+row["id"]+'"></a><span class="'+position+'_'+row["id"]+'"">'+row["name"]+'</span></div>';
                html += '<ul style="margin-left: -19px;">';
                if (has_children(result,row['id'])){
                    html += build_menu(result,row['id'], position);
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

// Funtion draw Tag list
fn_draw_tag_list();

// Funtion draw Tag list
function fn_draw_tag_list(){
    $.ajax({
        type: "GET",
        url: $_SERVER_DOMAIN + "tag/getTagList",
        dataType : 'json',
        success: function(result){
            var result = result.data;
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


// Event click upload to make tree menu
$( ".glyphicon.glyphicon-open" ).click(function() {
    fn_draw_category_tree("tree_node_upload");
    document.getElementById('selected_category_id_upload').value = "0";
});