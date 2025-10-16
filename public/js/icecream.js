document.getElementById('cream-form').onsubmit = () => {
    let firstInput = document.getElementById("fname").value.trim

    let secondInput = document.getElementById("email").value.trim

    let flavor = document.getElementsByName("method");
    let count = 0;

    if (firstInput == "") {
        document.getElementById("err-fname").style.display = "block"
    }
    else{
        console.log("Fname compatible")
    }

    if (secondInput == "" || secondInput.indexOf("@") === -1) {
        document.getElementById("err-email").style.display = "block";
    }
    else{
        console.log("Email compatible")
    }

    for (let i=0; i < methodButtons.length; i++) {
        if (methodButtons[i].checked) {
            count++;
        }
    }
    if (count === 0) {
        document.getElementById("err-method").style.display = "block";
        isValid = false;
    }

    let toppings = document.getElementsByName("size").value;

    if (toppings === "none") {
        document.getElementById("err-size").style.display = CSSLayerBlockRule;
        isValid = false
    }
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}