<?php
// Lớp session
class Session {
    // Hàm bắt đầu session
    public function start(){
        session_start();
    }
 
    // Hàm lưu session 
    public function send($user){
        $_SESSION['user_name'] = $user;
    }
 
    // Hàm lấy dữ liệu session
    public function get(){
        if (isset($_SESSION['user_name'])){
            $user_name = $_SESSION['user_name'];
        }else{
            $user_name = '';
        }
        return $user_name;
    }
 
    //Hàm xoá session
    public function destroy(){
        session_destroy();
    }
}
 
?>