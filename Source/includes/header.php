<!DOCTYPE html>
<html lang="vi">
<head>
	<link rel="SHORTCUT ICON" href="images/logo/proxima_favicon.ico"/> 
    <title>Image Archive System</title>
    <meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"/>
    <link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css"/> 
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <link rel="stylesheet" href="libs/font-awesome/css/fontawesome.min.css">
    <link href="libs/font-awesome/css/all.css" rel="stylesheet">
    <script src="libs/js/jquery.min.js"></script>
    <script src="libs/js/jquery_2_2_4.min.js"></script>
    <script src="libs/js/modernizr_2_8_3.js"></script>
	<script type="text/javascript">
		$(window).load(function() {
			$(".se-pre-con").fadeOut("slow");
		});
	</script>
    <style type="text/css">
	    .no-js #loader { 
	    	display: none;  
	    }
		.js #loader { 
			display: block; position: absolute; left: 100px; top: 0; 
		}
		.se-pre-con {
			position: fixed;
			left: 0px;
			top: 0px;
			width: 100%;
			height: 100%;
			z-index: 9999;
			background: url('images/loading/processing.gif') center no-repeat #fff;
		}
	</style>
</head>
<body>
<div class="se-pre-con"></div>