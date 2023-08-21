let text='', container1='', container2='', container3='', container4='';

function writes(){
    text=document.getElementById('text').value;
    if(text=='') alert('Enter the text you want to write');
    else alert('Choose where to write the text...');
}

function moveOne(){
    erase();
    container1=document.getElementById('content1');
    container1.innerHTML=text;
}

function moveTwo(){
    erase();
    container2=document.getElementById('content2');
    container2.innerHTML=text;
}

function moveThree(){
    erase();
    container3=document.getElementById('content3');
    container3.innerHTML=text;
}

function moveFour(){
    erase();
    container4=document.getElementById('content4');
    container4.innerHTML=text;
}

function erase(){
    container1.innerHTML="";
    container2.innerHTML="";
    container3.innerHTML="";
    container4.innerHTML="";
}