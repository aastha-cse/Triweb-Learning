var text=document.getElementById('h1');
var btn1=document.getElementById('toggle');
var btn2=document.getElementById('addName');
var btn3=document.getElementById('imgChange');

btn1.onclick= function(){
    var content=text.textContent;
    if(content=="I'm a Web Developer")
    {
        text.textContent= "I'm a Frontend Developer";
    }
    else{
        text.textContent= "I'm a Web Developer";
    }
}

// to add your name to text using prompt
var display= document.getElementById('displayName');

btn2.onclick= function(){
    var name= prompt('What is your name?');
    if(name!=null && name.length!=0)
    {
        display.textContent='My name is '+name;
    }
    else alert("Please enter name");
}

//to change image

var myImage= document.getElementById('image');

btn3.onclick=function(){
    var picture=myImage.getAttribute('src');
    if(picture==='work.png')
    {
        myImage.setAttribute('src','quote.png');
    }
    else{
        myImage.setAttribute('src','work.png');
    }
}