<?php
	require_once 'core/init.php';
	// // unset($_SESSION['user_name']);
	$session->destroy();
	header("location:".$_DOMAIN);
?>
