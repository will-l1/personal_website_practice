function notification(){
    alert("thank you!");
    document.getElementById('text').disabled=true;
}
function colorWhite(){
    document.getElementById('body').setAttribute("class","white");
}
function colorGreen(){
    document.getElementById('body').setAttribute("class","green");
}
function colorGrey(){
    document.getElementById('body').setAttribute("class","");
}
function output(){
    let theRate = document.getElementById('rate').value;
    document.getElementById("result-message").innerHTML= "you rated "+theRate+" stars for the website";
    document.getElementById('rate').disabled=true;
}
window.onload = function conditional(){
    const date = new Date();
    if(date.getDay()>4){
        document.getElementById('week').innerHTML="hello today is weekend";
    }
    else{
        document.getElementById('week').innerHTML="hello today is week day";
    }

}

const submitButton = document.getElementById('submit_button');
const whiteColor = document.getElementById('white');
const greenColor = document.getElementById('green');
const greyColor = document.getElementById('grey');
const rating = document.getElementById('replay');

submitButton.addEventListener("click",notification);
whiteColor.addEventListener("click",colorWhite);
greenColor.addEventListener("click",colorGreen);
greyColor.addEventListener("click",colorGrey);
rating.addEventListener("click",output);