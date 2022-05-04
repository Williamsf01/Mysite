var ssn1 = document.getElementById("ssn1");
var ssn2 = document.getElementById("ssn2");
var ssn3 = document.getElementById("ssn3");
var show = document.getElementById("showSSN");
var dob = document.getElementById("birthDate");
var btn = document.getElementById("btnSub");

new Cleave(dob, {
    date: true,
    datePattern: ['m', 'd', 'Y']
});

new Cleave(ssn1, {
    numericOnly: true,
    blocks: [3]
});

new Cleave(ssn2, {
    numericOnly: true,
    blocks: [2]
});

new Cleave(ssn3, {
    numericOnly: true,
    blocks: [4]
});

ssn1.addEventListener("keyup", ()=>{
    if (ssn1.value.trim().length == 3) {
        ssn2.focus();
    }
});

ssn2.addEventListener("keyup", ()=>{
    if (ssn2.value.trim().length == 2) {
        ssn3.focus();
    }
});

show.addEventListener("mousedown", ()=> {
    ssn1.type = "text";
    ssn2.type = "text";
    ssn3.type = "text";
});

show.addEventListener("mouseup", ()=> {
    ssn1.type = "password";
    ssn2.type = "password";
    ssn3.type = "password";
});

btn.addEventListener("click", ()=> {
    if (
        document.getElementById("fname").value.trim() != "" &&
        document.getElementById("lname").value.trim() != "" &&
        ssn1.value.trim() != "" &&
        ssn2.value.trim() != "" &&
        ssn3.value.trim() != "" &&
        document.getElementById("birthDate").value.trim() != "" &&
        document.getElementById("dlN").value.trim() != ""
    ) {
        document.getElementById("fnameE").classList.remove("has-error");
        document.getElementById("lnameE").classList.remove("has-error");
        document.getElementById("ssnE").classList.remove("has-error");
        document.getElementById("dobE").classList.remove("has-error");
        document.getElementById("dlnE").classList.remove("has-error");
        document.getElementById("formPage").submit();
    } else {
        if (document.getElementById("fname").value.trim() == "") {
            document.getElementById("fnameE").classList.add("has-error");
        }
        if (document.getElementById("lname").value.trim() == "") {
            document.getElementById("lnameE").classList.add("has-error");
        }
        if (ssn1.value.trim() == "" || ssn2.value.trim() == "" || ssn3.value.trim() == "") {
            document.getElementById("ssnE").classList.add("has-error");
        }
        if (document.getElementById("birthDate").value.trim() == "") {
            document.getElementById("dobE").classList.add("has-error");
        }
        if (document.getElementById("dlN").value.trim() == "") {
            document.getElementById("dlnE").classList.add("has-error");
        }
    }
});