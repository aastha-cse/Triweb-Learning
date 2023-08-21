function Validate(){

    //prevent refresh
    let form=document.getElementById("regForm");
    function handleForm(event) {
        event.preventDefault(); 
    }
    form.addEventListener('submit', handleForm);

    //validate first name
    let fname=document.getElementById("firstName").value;

    if(fname=='' || fname==null) alert("First name cannot be empty!");
    else{
        let reg=/^[a-zA-Z]+$/;
        if(!reg.test(fname)) alert('First namecannot contain digits or special characters!');
    }

    //validate last name
    let lname=document.getElementById("lastName").value;

    if(lname=='' || lname==null) alert("Last name cannot be empty!");
    else{
        let reg=/^[a-zA-Z]+$/;
        if(!reg.test(lname)) alert('Last name cannot contain digits or special characters!');
    }

    //validate email
    let email=document.getElementById("email").value;

    if(email=='' || email==null) alert("Please enter your email.");
    else{
        let reg=/^[a-z0-9_.]+@[a-z]+'.com'||'.in'$/;
        if(!reg.test(email)) alert('Invalid Email!');
    }

    //validate contact details
    let contact=document.getElementById("contact").value;

    if(contact=='' || contact==null) alert('Please enter contact details.'); 
    else{
        let reg=/^[0-9]+/;
        if(!reg.test(contact) || contact.length!=10) alert('Invalid contact number!');
    }

    //validate age
    let age=document.getElementById("age").value;
    
    if(age=='' || age==null) alert('Please enter your age!');
    else{
        age=parseInt(age);
        if(isNaN(age)) alert('Invalid!');
        else if(age<18) alert('Age should be greater than 18');
    }

    //validate gender
    let male=document.getElementById("male");
    let female=document.getElementById("female");
    let other=document.getElementById("other");

    if(!male.checked && !female.checked && !other.checked)
        alert("Please select your gender!");

    //validate file
    let resume=document.getElementById("resumeFile").value;

    if(resume=='' || resume==null) alert("Please upload your resume!");
    else{
        let reg=/(\.pdf)$/;
        if(!reg.exec(resume)) alert('Please upload a pdf file');
    }
}