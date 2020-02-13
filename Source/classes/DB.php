<?php
// Lớp database
class DB{
    private $hostname = 'localhost',
            $username = 'root',
            $password = '',
            $dbname = 'demo_project_java_db';
 
    // Biến lưu trữ kết nối
    public $conn = NULL;
 
    // Hàm kết nối
    public function connect(){
        $this->conn = mysqli_connect($this->hostname, $this->username, $this->password, $this->dbname);
    }
 
    // Hàm ngắt kết nối
    public function close(){
        if ($this->conn){
            mysqli_close($this->conn);
        }
    }
 
    // Hàm truy vấn
    public function query($sql = null){       
        if ($this->conn){
            mysqli_query($this->conn, $sql);
        }
    }

    // Hàm đếm số hàng
    public function num_rows($sql = null){
        if ($this->conn){
            $query = mysqli_query($this->conn, $sql);
            if ($query){
                $row = mysqli_num_rows($query);
                return $row;
            }   
        }       
    }

    // Hàm charset cho database
    public function set_char($uni){
        if ($this->conn){
            mysqli_set_charset($this->conn, $uni);
        }
    }

    // Hàm lấy dữ liệu
    public function fetch_assoc($sql, $type)
    {
        if ($this->conn){
            $query = mysqli_query($this->conn, $sql);
            if ($query)
            {
                if ($type == 0)
                {
                    // Lấy nhiều dữ liệu gán vào mảng
                    while ($row = mysqli_fetch_assoc($query))
                    {
                        $data[] = $row;
                    }
                    return $data;
                }
                else if ($type == 1)
                {
                    // Lấy một hàng dữ liệu gán vào biến
                    $data = mysqli_fetch_assoc($query);
                    return $data;
                }
            }       
        }
    }
}
 
?>