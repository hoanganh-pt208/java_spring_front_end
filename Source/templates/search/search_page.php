<!--Left panel Start -->
<div id="left_content" style="width: 252px; background-color: #1F1F23; color: white; padding: 0px;margin: 0px; margin-top: 53px; position: absolute;border-right: 2px solid #080808;">
	<div id="search_left_menu" style="background-color: #2D2D33; height: 100%; border: 1px solid #2D2D33;">
		<div id="search_left_category" style="background-color: yellow; height: 70%;">
			<div id ="search_left_menu_title" style="background-color: #2D2D33; padding: 1px;height: 33px;">
				<span style="float: left; font-size: 15px; top: 9px; left: 10px; color: #00A7DC!important;" class="glyphicon glyphicon-th-list">
				</span>
				<h5 style="margin-left: 31px; font-size: 16px; font-weight: bold; letter-spacing: 1px;margin-top: 7px;">Category</h5>
			</div>
			<div id ="search_left_category_content" style="background-color: #26262B ; overflow: auto; overflow-x: hidden;">
				<ul class = "tree_node" style="margin-left: -16px; margin-top: 0px; ">
					<!-- Start Tree Category for Image	 -->
					<!-- End   Tree Category for Image   -->
				</ul>
			</div>
		</div>
		<div id="search_left_tag_color" style="height: 30%;">
			<div id ="search_left_tag_color_title" style="background-color: #2D2D33; padding: 1px; height: 33px;">
				<span style="float: left; font-size: 15px; top: 9px; left: 10px; color: #00A7DC!important;" class="glyphicon glyphicon-tags">
				</span>
				<h5 style="margin-left: 31px; font-size: 16px; font-weight: bold; letter-spacing: 1px;margin-top: 7px;">Tag
					<span style="font-size: 15px; left: 10px;" class="glyphicon glyphicon-cog"></span>
				</h5>
			</div>
			<div id ="search_left_tag_color_content" style="background-color: #26262B; overflow: auto; overflow-x: hidden;" class="tag_list" id="tag_list">
				<!-- Start Tag List	-->
				
				<!-- End Tag List -->
			</div>
		</div>
	</div>
	<div class="free_disk" style="margin-top: 9px;padding-left: 50px;height: 32px;">
		<span class="glyphicon glyphicon-user" style="color: #00A7DC; padding-right: 6px; margin-left: -41px;"></span> 
		<span>Hoàng Anh</span>			
	</div>
</div>
<!-- Left panel End -->

<!-- Right panel Start -->
<div ondrop="upload_file(event)" id="right_content" ondragover="return false" style="border-top: 2px solid black; background-color: #1F1F23;padding: 0px; margin-left: 252px; ">
	<!-- <div style="height: 45px; margin-top: 51px; background-color: #333337; " id='tab_bar'>	
	  	<nav class="navbar navbar-inverse" style="border: none; border-radius: 0px; background-color: #333337; height: 43px; min-height: 43px;">
	      	<form class="navbar-form" action="" style=" margin-top: 5px; width: 100%;" onsubmit="return false;">
	      		<div id="category_link" style="cursor: pointer; color: #FFFFFF; float: left; margin-top: 7px; margin-left: -20px;"><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(0)"><a class="item_open"></a>IMAGE</div><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(2)"><i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 4px;margin-right: 3px; padding-right: 10px;"></i> Year 2019 </div><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(6)"><i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 4px;margin-right: 3px; padding-right: 10px;"></i> May </div><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(14)"><i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 4px;margin-right: 3px; padding-right: 10px;"></i> Monday </div><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(15)"><i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 4px;margin-right: 3px; padding-right: 10px;"></i> Sunday </div><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(17)"><i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 4px;margin-right: 3px; padding-right: 10px;"></i> Year 2016 </div></div>
	      		<button value="upload" data-toggle="modal" data-target="#myModal" type="button" class="glyphicon glyphicon-open" style="outline:none; margin-left: 5px;border-radius: 3px; height: 26px; border: none; background-color: #B0B0B0; top: 3px; float: right;" data-toggle="tooltip" data-placement="bottom" title="<?php echo txt_file_upload ?>"></button>    
				<button value="search" type="" class="glyphicon glyphicon-search" style="outline:none; margin-left: 5px;border-radius: 3px; height: 26px; border: none; background-color: #B0B0B0; top: 3px; float: right;" data-toggle="tooltip" data-placement="bottom" title="<?php echo txt_search_menu ?>"></button>
		        <div class="form-group" style=" float: right; margin-top: 3px;">
		          	<input autocomplete="off" type="text" onkeypress="isInputNumberLetter(event)" id="search_text" style="color: white; border-radius: unset; background-color: #1F1F1F; height: 27px; width: 376px; border: 1px solid black;" class="form-control" placeholder="<?php echo txt_input_search_text?>" name="search">
		        </div>
		    </form>
	  	</nav>
	</div> -->
	<div style="height: 45px; margin-top: 51px; background-color: #333337; min-width: 700px;" id='tab_bar'>	
	  	<div id="category_link" style="cursor: pointer; color: #FFFFFF; float: left; margin-top: 12px;"><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(0)"><a class="item_open"></a>IMAGE</div><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(2)"><i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 4px;margin-right: 3px; padding-right: 10px;"></i> Year 2019 </div><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(6)"><i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 4px;margin-right: 3px; padding-right: 10px;"></i> May </div><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(14)"><i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 4px;margin-right: 3px; padding-right: 10px;"></i> Monday </div><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(15)"><i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 4px;margin-right: 3px; padding-right: 10px;"></i> Sunday </div><div style="float: left; padding-left: 10px;" onclick="fn_get_all_parent_category_by_id(17)"><i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 4px;margin-right: 3px; padding-right: 10px;"></i> Year 2016 </div></div>
	    <a id="content_by_list_view" class="view glyphicon glyphicon-th-list" style="cursor: pointer; text-decoration: none; outline:none; float: right; border: none; top: 12px; background-color: transparent; font-size: 15px; padding-left: 12px; padding-right: 25px;" data-toggle="tooltip" data-placement="bottom" title="List View"></a>
		<a id="content_by_thumb_view" class="view glyphicon glyphicon-th-large active" style="cursor: pointer; text-decoration: none; outline:none; float: right; border: none; top: 12px; background-color: transparent; font-size: 16px;" data-toggle="tooltip" data-placement="bottom" title="Thumb View"></a>
	</div>
	<div style="height: 45px; background-color: #333337; border-top: 2px solid #080808; min-width: 700px ;" id='tab_bar_1'>	
	  	<button value="upload" data-toggle="modal" data-target="#myModal" type="button" class="glyphicon glyphicon-open" style="outline:none; margin-left: 5px;border-radius: 3px; height: 26px; border: none; background-color: #B0B0B0; top: 3px; float: right;" data-toggle="tooltip" data-placement="bottom" title="<?php echo txt_file_upload ?>"></button>    
		<button value="search" type="" class="glyphicon glyphicon-search" style="outline:none; margin-left: 5px;border-radius: 3px; height: 26px; border: none; background-color: #B0B0B0; top: 3px; float: right;" data-toggle="tooltip" data-placement="bottom" title="<?php echo txt_search_menu ?>"></button>
        <div class="form-group" style=" float: right; margin-top: 3px;">
          	<input autocomplete="off" type="text" onkeypress="isInputNumberLetter(event)" id="search_text" style="color: white; border-radius: unset; background-color: #1F1F1F; height: 27px; width: 376px; border: 1px solid black;" class="form-control" placeholder="<?php echo txt_input_search_text?>" name="search">
        </div>
	</div>

	<!-- Modal Upload Image Start-->
	<div id="myModal" class="modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog" style="padding-top: 15%;">
			<div class="modal-content">
				<div class="modal-header" style="padding: 1px; padding-right: 5px; padding-left: 5px; border: none;">
			        <button type="button" class="close" data-dismiss="modal" style="outline: none; opacity: 2; color: black;">&times;</button>
			        <h5 class="modal-title">File Upload</h5>
		      	</div>
		      	<div id="main_content_upload" class="main_content_upload" style="height: 270px; border: 2px solid #D0D0D0; margin: 5px;">
		      		<div class="selectedFiles" id="selectedFiles" style="background-color: white; position: absolute; overflow: auto; width: 50%; float: left; height: 78%; border-right: 1px solid #D0D0D0;">
		      		</div>
		      		<div class="upload_metadata" style=" overflow: auto; width: 50%; float: right; height: 100%; border-left: 1px solid #D0D0D0;">
		      			<h5 style="padding-left: 10px; font-weight: bold;">Category</h5>
		      			<ul class = "tree_node_upload" style="margin-left: -16px; margin-top: 0px; ">
							<!-- Start Tree Category		 -->
							<!-- End   Tree Category		 -->
						</ul>
		      		</div>
		      	</div>
				<div class="modal-body" style="padding: 6px;">
					<form id="upload_image_form" action="" method="POST" enctype="multipart/form-data" onsubmit="return false;">
						<input type="file" id="image-file" accept=".png, .jpg" style="display: inline;" multiple="true" name="myFile[]">
						<button class="btn btn-default" type="reset" onclick="return resetForm();">Clear</button>
						<button class="btn btn-default" onclick="return remove_selected_item();">Remove Selected Item</button>
						<button id="close_file_upload" type="button" class="btn btn-default" data-dismiss="modal" style="float: right;">Close</button>		
						<button id="image_upload" type="button" class="btn btn-default" style="float: right; margin-right: 10px;">Upload</button>
						<input type="input" style=" width: 26px; " id="selected_category_id_upload" name="selected_category_id_upload" value="0">
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- Modal Upload Image End-->

	<!-- Modal Change Tag Color Start-->
	<!-- Modal Change Tag Color End-->

	<div id="search_right_menu" style="background-color: #2D2D33; border: 1px solid red;">
		<!-- Tab Menu Start-->
		<!-- Tab Menu End-->

		<!-- Tab Menu Content Start-->
		<!-- Tag Menu Content End-->
	</div>
  	
	<div class="free_disk" style="margin-top: 9px;padding-left: 50px;height: 32px;">
		<span class="glyphicon glyphicon-user" style="color: #00A7DC; padding-right: 6px; margin-left: -41px;"></span> 
		<span>Hoàng Anh</span>			
	</div>
</div>
<!-- Right panel End-->

<!-- <script src="js/search_page.js"></script> 