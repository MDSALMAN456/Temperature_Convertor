const calculateTemp=()=>{

    const numberTemp=document.getElementById("temp").value;
    const tempSelected=document.getElementById("temp_diff");
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;


    let celToFah=(numberTemp)=>{
        let Fahrenhite=((numberTemp * 9/5) + 32);
        var num = Fahrenhite.toFixed(2);
        return num;

    }
    let fahToCel=(numberTemp)=>{
        let Celsius=((numberTemp-32) * 5/9);
        var num2 = Celsius.toFixed(2);
        return num2;
    

    }


    let result;
    if(valueTemp=="Cel"){
        result=celToFah(numberTemp);
        document.getElementById("result_container").innerHTML=`= ${result} °Fahrenheit`;
    }
    else{
        result=fahToCel(numberTemp);
        document.getElementById("result_container").innerHTML=`= ${result} °Celsius`;
    }
}