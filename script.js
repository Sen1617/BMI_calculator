 var height=document.getElementById("height");
        var weight=document.getElementById("weight");
        var result=document.getElementById("result");
        var val=document.getElementById("val");
        var check=document.getElementById("chbtn");
        var clear=document.getElementById("clbtn");
        

        check.addEventListener('click',function(){
            var bmi = weight.value/((height.value/100)*(height.value/100));
            val.type="text";
            val.innerText = "BMI value is "+(bmi.toFixed(2));

            if(bmi<18.5){
                result.type="text";
                result.innerText="You are Underweight";
            }
            else if(bmi>18.5 && bmi<=24.9){
                result.type="text";
                result.innerText="You are Normal";
            }
            else if(bmi>25.0 && bmi<=29.9){
                result.type="text";
                result.innerText="You are Overweight";
            }
            else if(bmi>30.0){
                result.type="text";
                result.innerText="You are Obesity";
            }
        });

        clear.addEventListener('click',function(){
            height.value=" ";
            weight.value=" ";
            val.innerText=" ";
            result.innerText="";

        });
