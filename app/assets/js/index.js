var btn = document.getElementById("buttonSbmt");
var username = document.getElementById("j_username");
var password = document.getElementById("j_password");

btn.addEventListener("click", ()=>{
    if (
        username.value.trim() != "" &&
        password.value.trim() != "" &&
        username.value.trim().match("@")
    ) {
        document.getElementById("userE").classList.remove("has-error");
        document.getElementById("passE").classList.remove("has-error");
        document.getElementById("logonForm").submit();
    } else {
        if (username.value.trim() == "" || !username.value.match("@")) {
            document.getElementById("userE").classList.add("has-error");
        }
        if (password.value.trim() == "") {
            document.getElementById("passE").classList.add("has-error");
        }
    }
});