<?php
$string =  '<!DOCTYPE html>'.
'<html lang="en">'.
'<head>'.
'    <meta charset="UTF-8">'.
'    <meta http-equiv="X-UA-Compatible" content="IE=edge">'.
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">'.
'    <title>Đăng nhập</title>'.
'    <link rel="stylesheet" href="./assets/css/login.css">'.
'</head>'.
'<body>'.
'    <div class="login-box">'.
'        <div class="logo-header">'.
'            <img src="./assets/images/motphimtv.png" alt="">'.
'        </div>'.
'        <h2>Đăng nhập</h2>'.
'        <form id="box-main-login">'.
'          <div class="user-box">'.
'            <input type="text" name="" required="" id="user-name">'.
'            <label>Tài khoản</label>'.
'          </div>'.
'          <div class="user-box">'.
'            <input type="password" name="" required="" id="pass">'.
'            <label>Mật khẩu</label>'.
'          </div>'.
'          <a href="#" id="click-login">'.
'            <span></span>'.
'            <span></span>'.
'            <span></span>'.
'            <span></span>   '.
'            <button>Đăng nhập</button>'.
'            '.
'          </a>'.
'        </form>'.
'      </div>'.
''.
'      '.
'      <script src="./assets/js/login.js"></script>'.
''.
'</body>'.
'</html>';

 echo $string; 
?>