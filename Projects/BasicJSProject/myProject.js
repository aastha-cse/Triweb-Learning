let text='', container1='', container2='', container3='', container4='';

function write(){
    console.log('works');
    text=document.getElementById('text').value;
    alert('Choose where to write the text...');
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
    alert('working');
    container1.innerHTML="";
    container2.innerHTML="";
    container3.innerHTML="";
    container4.innerHTML="";
}