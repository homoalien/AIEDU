document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (username === 'admin' && password === '123456') {
        window.location.href = 'eduplatform.html'; // 如果用户名和密码正确，跳转到 eduplatform.html
    } else {
        alert('用户名或密码错误'); // 如果不正确，显示错误信息
    }
});