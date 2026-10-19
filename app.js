// handling the slider logic
let slider = document.getElementById("lengthSlider");
let sliderValueText = document.getElementById("lengthValue");
slider.addEventListener("input", ()=>{
    let sliderValue = slider.value;
    sliderValueText.textContent = sliderValue;


})



function generatePassword(){
    let charset = "";
    if(document.getElementById("inclUppercase").checked==true){
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }if(document.getElementById("inclLowercase").checked==true){
        charset += "abcdefghijklmnopqrstuvwxyz";
    } if(document.getElementById("inclNumbers").checked==true){
        charset += "0123456789";
    }if(document.getElementById("inclSymbols").checked==true){
        charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    return charset;
}

let generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", ()=>{
   let password = createRandomPassword(slider.value, generatePassword());
    let passwordDisplay = document.getElementById("passwordOutput");
    passwordDisplay.textContent = password;
    updateStrength();

})


//creating a random passowrd based on length

function createRandomPassword(length, charset) {
    let password = "";
    for(let i=0; i<length; i++){
        let randomIndex =(Math.floor(Math.random()* charset.length));
        password += charset[randomIndex];
    }
    return password;
}


//copy to the clipboard
let copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", ()=>{
    let passwordDisplay = document.getElementById("passwordOutput");
    let password = passwordDisplay.textContent;
    if(password.length > 0){
        navigator.clipboard.writeText(password).then(()=>{
            alert("Password copied to clipboard!");
        }).catch((err)=>{
            alert("Failed to copy password: ", err);
        })}
})


function updateStrength(){
    let score = 0;
    let label = "";
let width = "";
let levelClass = "";
    let password = document.getElementById("passwordOutput").textContent;
    if(password.length >= 8) score++;
    if(password.length >= 12) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[a-z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[^A-Za-z0-9]/.test(password)) score++;


    if(score <= 2) { label = "weak";  width = "25%";  levelClass = "weak"; }
    else if(score <= 4) { label = "fair"; width = "50%"; levelClass = "fair" }
    else if(score <= 5) { label = "good"; width = "75%"; levelClass = "good" }
    else if (score >= 6) { label = "strong"; width = "100%"; levelClass = "strong" }

    strengthLabel.textContent = label;
strengthFill.style.width = width;
strengthFill.className = "strength-fill " + levelClass;
}
