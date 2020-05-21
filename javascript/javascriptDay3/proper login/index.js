const checklogin  = () => {
    const password = document.querySelector ('#password');
    const passValue = password.value;
    if (Number(passValue) === 123) {
        console.log('welcome');
    } else {
        console.log('fuck off');
    }
    const label = document.querySelector ('.label');
label.textContent = 'pass';
}

