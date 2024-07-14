// password validation
function submitForm(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById('errorName').innerText = '';
    document.getElementById('suEmail').style.border = "1px solid #c9c9c9";
    document.getElementById('errorEmail').innerText = '';
    document.getElementById('suName').style.border = "1px solid #c9c9c9";
    document.getElementById('suPassword').style.border = "1px solid #c9c9c9";

    let isValid = true;
    //password valiadtion
    let pass = document.getElementById('suPassword').value;
    if (!pass.match(/[0-9]/)) isValid = false;
    if (!pass.match(/[A-Z]/)) isValid = false;
    if (!pass.match(/[a-z]/)) isValid = false;
    if (pass.length <= 8) isValid = false;
    if (!pass.match(/[!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\;\:\'\"\,\<\.\>\/\?]/)) isValid = false;
    if (isValid==false) {
        document.getElementById('suPassword').style.border = "1px solid red";
    }
    // Validate name
    const name = document.getElementById('suName').value.trim();
    if (name === '') {
        document.getElementById('errorName').innerText = 'Name is required';
        document.getElementById('suName').style.border = "1px solid red";
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('errorName').innerText = 'Name is too short';
        document.getElementById('suName').style.border = "1px solid red";
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('suEmail').value;
    if (email.trim() === '') {
        document.getElementById('errorEmail').innerText = 'Email is required';
        document.getElementById('suEmail').style.border = "1px solid red";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('errorEmail').innerText = 'Invalid email format';
        document.getElementById('suEmail').style.border = "1px solid red";
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Proceed with form submission or further processing
    }
}

// check name
function name_check(){
    let check_name = document.getElementById('suName');
    
    if(check_name.value.length<3) {
        document.getElementById('suName').style.border = "1px solid red";
    }else{
        document.getElementById('suName').style.border = "1px solid green";
    }
}
// email validation
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// show password
var hide_show_pass;
function pass(){
   
    if (hide_show_pass===1) {
        document.getElementById('suPassword').type='password';
        document.getElementById('pass-icon').src='./assets/images/icons/pass-hide.png';
        document.getElementById('hide-show').innerText = 'Hide';
        hide_show_pass=0;        
    }
    else{
        document.getElementById('suPassword').type='text';
        document.getElementById('pass-icon').src='./assets/images/icons/pass-show.png';
        document.getElementById('hide-show').innerText = 'Show';
        hide_show_pass=1;   
    }


}

// password Rules
function pass_rule(){
    let pass = document.getElementById('suPassword');
    let len = document.getElementById('more-char');
    let sp_char = document.getElementById('OS-char');
    let up_char = document.getElementById('OU-char');
    let lo_char = document.getElementById('OL-char');
    let num = document.getElementById('O-num');
    

if(pass.value.match(/[0-9]/)) {
    num.style.color= 'green'
}else{
    num.style.color= 'red'
}
// uppercase
if(pass.value.match(/[A-Z]/)) {
    up_char.style.color= 'green'
}else{
    up_char.style.color= 'red'
}
// lowercase
if(pass.value.match(/[a-z]/)) {
    lo_char.style.color= 'green'
}else{
    lo_char.style.color= 'red'
}
// length
if(pass.value.length>8) {
    len.style.color= 'green'
}else{
    len.style.color= 'red'
}
// special character
if(pass.value.match(/[!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\;\:\'\"\,\<\.\>\/\?]/)) {
    sp_char.style.color= 'green'
}else{
    sp_char.style.color= 'red'
}

}
