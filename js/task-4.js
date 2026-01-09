
const formEl = document.querySelector(".login-form");
// formEl.setAttribute("name", "login-form");

const handleFormSubmit = (event) => {

    event.preventDefault();

    const formEl = event.target;
        const formData = {
            email: formEl.elements.email.value,
            password: formEl.elements.password.value
        };
    if (formData.email === "" || formData.password === "") {
        alert('All form fields must be filled in');
        return
    }

    else if (formData.email.includes("@") === false) {
        alert('incorrect email');
        return
    }
    else {
        console.log(formData);
    
        formEl.reset()
    };
};
    
formEl.addEventListener("submit", handleFormSubmit);





