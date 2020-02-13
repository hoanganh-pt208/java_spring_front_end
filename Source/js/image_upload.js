// Function remove selected content when select upload
function remove_selected_item(){
	var arr_remove_item = [];
	$( "#selectedFiles>div.selected_item_image_uploaded" ).each(function( i ) {
        arr_remove_item.push(this.id);
        $(this).addClass('hidden');
	});
	return arr_remove_item;
}

// Function Drag Drop Image
function upload_file(e) {
    e.preventDefault();

    $("#myModal").modal("show");
    var data = new FormData();
    
    fn_draw_category_tree("tree_node_upload");
    
    var arr_img = e.dataTransfer.files;
    var files = arr_img;
    fn_draw_selected_content(files);

    // Add file for input file when Drop file 
    $("#myModal input[type='file']")[0].files = files;
}

// Function upload image by Ajax
// $('#image_upload').click(function() {
// 	var data = new FormData();
// 	var arr_img = $("#myModal input[type='file']")[0].files;

//     var newFileList = Array.from(arr_img);
	
// 	var arr_remove_item = remove_selected_item();

// 	for (var i = arr_remove_item.length - 1; i >= 0 ; i--) {
// 		newFileList.splice(arr_remove_item[i],1);
// 	}

// 	var category_id = document.getElementById("selected_category_id_upload").value;
// 	document.cookie = "category_id =" + category_id;

// 	var ins = newFileList.length;
// 	for (var x = 0; x < ins; x++) {
// 	    data.append("myFile[]", newFileList[x]);
// 	}
// 	fn_upload_image(data);
// });

// function upload image
// function fn_upload_image(data){
//     $.ajax({
//         type: 'POST',
//         url: 'upload_image.php',
//         cache: false,
//         contentType: false,
//         processData: false,
//         data : data,
//         success: function(result, response){
//             if(response == 'success'){
//                 $tag_id = $(".tag_list div.active_tag>div").attr('class');
//                 $search_text = $("input#search_text").val();

//                 var new_current_page = $(".image_paging").find('input#current_image_page').val();

//                 if(!$search_text && !$tag_id){
//                     fn_get_total_image();
//                     fn_draw_image_content_list($search_text = null,$tag_id = null,$current_page = new_current_page,$limit = 10);
//                 }
//                 else if(!$search_text && $tag_id){
//                     $tag_id = $tag_id.slice(7);
//                     fn_draw_image_content_list($search_text = null,$tag_id = $tag_id,$current_page = new_current_page,$limit = 10);
//                 }
//                 else if($search_text && !$tag_id){
//                     fn_getTotalImageBySearchText($search_text);
//                     fn_draw_image_content_list($search_text,$tag_id = null,$current_page = new_current_page,$limit = 10);
//                 }

//                 document.getElementById('image-file').value = "";
//                 resetForm();
//                 document.cookie = "category_id = ''";
//                 $('#myModal').modal('hide');
//             }
//         }
//     });
// }

// End function remove file when click CLOSE	

var selDiv = "";
document.addEventListener("DOMContentLoaded", init, false);
function init() {
	document.querySelector('#image-file').addEventListener('change', handleFileSelect, false);
	selDiv = document.querySelector("#selectedFiles");
}
	
function handleFileSelect(e) {
	if(!e.target.files) return;
	selDiv.innerHTML = "";
	var files = e.target.files;
    fn_draw_selected_content(files);
}

// Function draw list selected content
function fn_draw_selected_content(files) {
    for(var i=0; i<files.length; i++) {
        var f = files[i];
        var size = bytesToSize(files[i]['size']);
        selDiv.innerHTML += "<div id='"+i+"' style='padding-top: 2px; padding-bottom: 2px; cursor: pointer;'><div class='' style='float: left;width: 50%;padding-left: 5px;'>"+f.name+"</div><span>"+size+"</span></div>";
        // Funtion add active file upload
        $('#selectedFiles>div').click(function() {
            if($(this).hasClass('selected_item_image_uploaded')){
                $(this).removeClass('selected_item_image_uploaded');
            }else{
                $(this).addClass('selected_item_image_uploaded');
            }
        });
    }
}

// Function auto conver bytes
function bytesToSize(bytes) {
	var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	if (bytes == 0) return '0 Byte';
	var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function resetForm(){
	selDiv.innerHTML = "";
}

// Start function remove file when click CLOSE  
$( "#close_file_upload" ).click(function() {
    document.getElementById('image-file').value = "";
    resetForm();
});
$( "#myModal button.close" ).click(function() {
    document.getElementById('image-file').value = "";
    resetForm();
});
