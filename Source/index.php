<?php
require_once 'core/init.php';
require_once 'includes/header.php';

if ($user){
	require_once 'templates/main.php';
}else{
    require_once 'templates/auth/login.php';
}

require_once 'includes/footer.php';
?>