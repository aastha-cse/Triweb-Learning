let num1,num2,calc,res;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter 1st number: ",(input1)=>{
    num1 = parseFloat(input1);
    rl.question("Enter 2nd number: ", (input2) => {
        num2 = parseFloat(input2);
        rl.question("Enter a number | 1->add 2->sub 3->mul 4->div: ", (inputCalc) => {
            calc = parseInt(inputCalc);


            if(calc==1){
                res=num1+num2;
            }else if(calc==2){
                res=num1-num2;
            }else if(calc==3){
                res=num1*num2;
            }else if(calc==4){
                if(num2!=0){
                    res=num1/num2;
                }else{
                    throw new Error("Divide by zero not allowed!");
                }
            }
            
            console.log("Result = ",res);

            rl.close();
        });
    });
});

