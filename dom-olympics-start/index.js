let form = document.message
console.log(form)
let input = document.getElementById("input")
console.log(input) 
let messages = document.getElementsByClassName("messages")
console.log(messages)
form.addEventListener("submit", function (e) {
    e.preventDefault() 
    // console.log("form was submitted")
    console.log(input.value)
    let text = document.createElement("div")
    text.textContent= input.value
    console.log(text)
    messages[0].appendChild(text)
    form.reset();
});


    
    let header = document.getElementById("header");
header.innerText = 'JavaScript Made This!! ';
header.style.textAlign = 'center';
header.style.fontSize = '50px';
header.style.margin = '40px';

    let spanName = document.createElement('span');
header.appendChild(spanName);
spanName.classList.add('name');
spanName.innerText = '\r\n George ';
spanName.style.fontSize = '25px';
spanName.style.textAlign = 'center';

    let spanName2 = document.createElement('span');
header.appendChild(spanName2);
spanName2.innerText = ' wrote the Javascript \n';
spanName2.style.fontSize = '25px';
spanName2.style.textAlign = 'center';

    let list = document.getElementsByClassName('message');
list[0].innerText = "Hey! how are you?!"
list[1].innerText = "Good! Just trying to learn Javascript"
list[2].innerText = "How's that going?"
list[3].innerText = "It's tough but definatly gonna be great once i get it more";

    let clear = document.getElementById('clear-button')
clear.onclick = function(){cleartext()};
function cleartext(){

    let messages = document.getElementsByClassName('messages');
messages[0].innerText = ""
messages[1].innerText = ""
messages[2].innerText = ""
messages[3].innerText = "";
}

