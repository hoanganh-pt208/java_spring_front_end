<?php
	// if(isset($_SESSION['lang'])){
	// 	include "lang/".$_SESSION['lang'].".php";
	// }else{
	// 	include 'lang/eng.php';
	// }
?>

<div class="container-fluid" style="margin: 0px;">
	<div class="row">
		<header class="header_big_mode">
	        <div class="logo_box">
	            <img src="images/logo/logo_archive.png" style="height: 50px; padding-top : 11px; padding-right : 50px; padding-left : 25px;">
	        </div>
	        <ul>
	            <li class="" onclick="TopMenuFunc('TopImage-home')">
	            	<i class="fa fa-home" style="font-size: 26px; left:45px; position: absolute; top: -20px;"></i>
            		<strong class="fa-text">Home</strong>
	            </li>
	            <li class="active_top_menu" onclick="TopMenuFunc('TopImage-search')">
	            	<i class="fa fa-search" style="font-size: 26px; left:45px; position: absolute; top: -20px;"></i>
            		<strong class="fa-text">Search</strong>
	            </li>
	            <li class="" onclick="TopMenuFunc('TopImage-system')">
	            	<i class="fa fa-cogs" style="font-size: 26px; left:45px; position: absolute; top: -20px;"></i>
            		<strong class="fa-text">System</strong>
	            </li>
	        </ul>        
	        <div class="logout">
	            <div onclick="show_user_modifiy_information('admin')" title="Administrator" style="float:left; margin-top:0px;padding: 0px 10px 0px 0px;border-right: 1px solid;"><b>Administrator</b></div>
	        	<a href="signout.php" data-toggle="tooltip" data-placement="bottom" style="color: white; float: right;" title="<?php echo txt_logout; ?>"> <span class="log_out glyphicon glyphicon-off" style=" top: 3px; left: 10px; "></span></a>
	        </div>
	    </header>
		<?php
			if(isset($_GET['page']) && $_GET['page'] == "home"){
				require_once 'home/home_page.php';
			}elseif (isset($_GET['page']) && $_GET['page'] == "config") {
				require_once 'home/home_page.php';
			}else{
				echo '<div id="container_content" class="" style="background-color: black;">';
					require_once 'search/search_page.php';
				echo '</div>';
			}
		?>
  	</div>
</div>
<!-- <script src="js/main.js"></script> -->
<script src="js/search_page.js"></script>
<script src="js/image_upload.js"></script>