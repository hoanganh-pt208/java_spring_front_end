<?php
require_once 'classes/DB.php';
require_once 'classes/Session.php';

// Connect database
$db = new DB();
$db->connect();
$db->set_char('utf8');

// Connect session
$session = new Session();
$session->start();

$_DOMAIN = 'index.php';

// function login
// if(isset($_POST['login'])){
//     $user_name = trim(htmlspecialchars(addslashes($_POST['name'])));
//     $password = md5(trim(htmlspecialchars(addslashes($_POST['password']))));

//    	$sql_check_user_exist = "SELECT * FROM user_mng WHERE user_name = '$user_name' AND password = '$password'";
   	
//     $error = null;
//    	if ($db->num_rows($sql_check_user_exist)){
//    	    $session->send($user_name);
//         echo '<script>location.href="'.$_DOMAIN.'";</script>';
//    	    $db->close();
//    	    $error = null;
//    	}else{
//         $error = 1;
//     }
// }
 
// Check session
if ($session->get() != ''){
    $user = $session->get();
}else{
    $user = '';
}

// Nếu đăng nhập
// if ($user){
//     $db->connect();
//     // // Lấy dữ liệu tài khoản
//     // $sql_get_data_user = "SELECT * FROM user_mng WHERE user_name = '$user'";
//     // if ($db->num_rows($sql_get_data_user)){
//     //     $data_user = $db->fetch_assoc($sql_get_data_user, 1);
//     // }
//     $db->close();
// }
 
?>