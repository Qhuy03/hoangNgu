<?php
$string =  '<!DOCTYPE html>'.
'<html lang="en">'.
'<head>'.
'    <meta charset="UTF-8">'.
'    <meta http-equiv="X-UA-Compatible" content="IE=edge">'.
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">'.
'    <title>Đăng ký</title>'.
'    <link rel="stylesheet" href="./assets/css/register.css">'.
'</head>'.
'<body>'.
'    <div class="login-box">'.
'        <div class="logo-header">'.
'            <img src="./assets/images/motphimtv.png" alt="">'.
'        </div>'.
'        <h2>Đăng ký</h2>'.
'        <form id="box-main">'.
'          <div class="user-box">'.
'            <input type="text" name="" required="" id="user-name">'.
'            <label>Tên đăng nhập</label>'.
'          </div>'.
'          <div class="user-box">'.
'            <input type="password" name="" required="" id="pass">'.
'            <label>Mật khẩu</label>'.
'          </div>'.
'          <div class="user-box">'.
'            <input type="password" name="" required="" id="end-pass">'.
'            <label>Nhập lại mật khẩu</label>'.
'          </div>'.
'          <a href="#" id="click-register">'.
'            <span></span>'.
'            <span></span>'.
'            <span></span>'.
'            <span></span>   '.
'            <button > Đăng ký</button>'.
'            '.
'          </a>'.
'        </form>'.
'      </div>'.
''.
'      <script src="./assets/js/login.js"></script>'.
'</body>'.
'</html>';

 echo $string; 
?>