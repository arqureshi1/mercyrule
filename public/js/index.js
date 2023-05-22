console.log('hello')

const userForm = document.getElementById('userForm')

const formsubmission = (e) => {
    e.preventDefault();
    
    const userValue = document.getElementById('usernameInput').value;
    console.log(userValue);
    const emailValue = document.getElementById('emailInput').value;
    console.log(emailValue);
    const passwordValue= document.getElementById('passwordInput').value;
    console.log(passwordValue);


    const postValue = await fetch('/users/sign-up', {
        method: "POST"
        body: JSON.stringify ({
            username: userValue,
            password: passwordValue,
            email: emailValue,
        })
        headers: { 'Content-type': 'application/json' },
    })

    if(postValue.ok) {
        alert("you signed up!")
    } else {
        alert('Go fix your code')
    }

}


userForm.addEventListener('Sumbit', formsubmission)