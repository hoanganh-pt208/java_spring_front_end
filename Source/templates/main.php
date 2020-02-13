<?php
	// if(isset($_SESSION['lang'])){
	// 	include "lang/".$_SESSION['lang'].".php";
	// }else{
	// 	include 'lang/eng.php';
	// }
?>

<div class="container-fluid" style="margin: 0px;">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding: 0px;margin: 0px;position: fixed;height: 55px;top: 0;z-index: 10000;">
			<nav class="navbar navbar-inverse" style="border-radius: 0px !important; border: 1px solid #1F1F23;">
			  	<div class="container-fluid" style="background-color: #1F1F23 !important;">
				    <div class="navbar-header">
				      	<img src="images/logo/logo_archive.png" style="height: 50px; padding-top : 11px; padding-right : 50px;">
				    </div>
				    <ul class="nav navbar-nav cls_top_menu">
				    	<li style="padding-right: 25px;" class="<?php if($_GET['page'] == "home"){ echo "active";}?>"><a href="?page=home"><span class="glyphicon glyphicon-home" style="top: 1px; font-size: 16px; padding-right: 5px;"></span> <span style="font-size: 20px;"><?php echo txt_home_menu; ?></span></a></li>
				      	<li class="<?php if($_GET['page'] != "home"){ echo "active";}?>"><a href="index.php"><span class="glyphicon glyphicon-search cls_icon_top_menu" style="top: 1px; font-size: 16px; padding-right: 5px;"></span> <span style="font-size: 20px;"><?php echo txt_search_menu; ?></span></a></li>
				    </ul>
				    <ul class="nav navbar-nav navbar-right" style="padding-right: 40px;padding-top: 3px;">
				      	<li>
				      		<a href="?page=home" data-toggle="tooltip" data-placement="bottom" title="<?php if($data_user['is_admin'] == 1){ echo txt_admin;}else{echo txt_user;}?>" style="color: white;padding-right: 5px;float: left;padding-top: 14px;font-weight: bold;"><?php if($data_user['is_admin'] == 1){ echo txt_admin;}else{echo txt_user;}?></a>
				      		<a href="signout.php" data-toggle="tooltip" data-placement="bottom" style="color: white; float: right;" title="<?php echo txt_logout; ?>"> <span class="log_out glyphicon glyphicon-off"></span></a>
				      	</li>
				    </ul>
			  </div>
			</nav>
			<!-- <div class="header">
				<a href="#default" class="logo">CompanyLogo</a>
				<div class="header-right">
					<a class="active" href="#home">Home</a>
					<a href="#contact">Contact</a>
					<a href="#about">About</a>
				</div>
			</div> -->
		</div>
		<?php
			if(isset($_GET['page']) && $_GET['page'] == "home"){
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