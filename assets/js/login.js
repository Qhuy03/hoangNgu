
const $clickLogin = document.getElementById('click-login');
const $clickRegister = document.getElementById('click-register');
const $boxMain = document.getElementById('box-main');
const $boxMainLogin = document.getElementById('box-main-login');

let users = []
//if
if(localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users'))
} 

const handleRegister = (e) => {
    e.preventDefault();
    const $userName = document.getElementById('user-name').value;
    const $pass = document.getElementById('pass').value;
    const $endPass = document.getElementById('end-pass').value;
    
     let passcheck = checkPasswordStrength($pass);
     if(!passcheck.success ){
      alert(passcheck.message)
      return result;
     }

    if($pass != $endPass){
        alert('mật khẩu không trùng khớp');
    } else{
        const user = {
            id: Date.now(),
            username: $userName,
            pass: $pass
        }
        console.log(users);
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'http://localhost/WebFilm/index.php';
        localStorage.setItem('user_login', user.username );
    }
}

const handleLogin = (e) => {
    e.preventDefault();
    const $userName = document.getElementById('user-name').value;
    const $pass = document.getElementById('pass').value;
    const users = JSON.parse(localStorage.getItem('users'));
    for(let user of users){
        if($userName == user.username && $pass == user.pass){
            window.location.href = 'http://localhost/WebFilm/index.php';
            localStorage.setItem('user_login', user.username );
            // const user = localStorage.getItem('user')
    
        }
        
    }
 
    
}



$boxMain?.addEventListener('submit', handleRegister);
$boxMainLogin.addEventListener('submit', handleLogin);



function checkPasswordStrength(value) {
  const result = {
    success: true,
    message: ''
  }
  // Initialize variables
  var strength = 0;
  var tips = "";

  // Check password length
  if (value.length < 6) {
    tips += "Làm cho mật khẩu dài hơn. ";
  } else {
    strength += 1;
  }

  // Check for mixed case
  if (value.match(/[a-z]/) && value.match(/[A-Z]/)) {
    strength += 1;
  } else {
    tips += "Sử dụng cả chữ thường và chữ in hoa. ";
  }

  // Check for numbers
  if (value.match(/\d/)) {
    strength += 1;
  } else {
    tips += "Bao gồm ít nhất một số. ";
  }

  // Check for special characters
  if (value.match(/[^a-zA-Z\d]/)) {
    strength += 1;
  } else {
    tips += "Bao gồm ít nhất một ký tự đặc biệt. ";
  }

  result.message = tips;
  result.success = strength>=3;
  return result;

  // // Return results
  // if (strength < 2) {
  //   return "Dễ đoán. " + tips;
  // } else if (strength === 2) {
  //   return "Độ khó trung bình. " + tips;
  // } else if (strength === 3) {
  //   return "Khó đoán " + tips;
  // } else {
  //   return "Cực kỳ khó khăn. " + tips;
  // }
}