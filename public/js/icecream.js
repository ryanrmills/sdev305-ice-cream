document.getElementById('cream-form').onsubmit = () => {
    let firstInput = document.getElementById("fname").value.trim();

    let secondInput = document.getElementById("email").value.trim();

    let flavorButtons = document.getElementsByName("method");

    let flavorDropdownValue = document.getElementById('flavor-dropdown').value;

    let count = 0;

    if (firstInput === "") {
        document.getElementById("err-fname").style.display = "block"
    }

    if (secondInput === "" || secondInput.indexOf("@") === -1) {
        document.getElementById("err-email").style.display = "block";
    }

    if (flavorDropdownValue === ''){
        document.getElementById('err-flavor').style.display = "block";
    }

    for (let i = 0; i < flavorButtons.length; i++) {
        if (flavorButtons[i].checked) {
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