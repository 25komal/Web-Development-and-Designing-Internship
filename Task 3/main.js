const myFun =()=>{
    const ipt = document.getElementById("temp").value;
    const outto = document.getElementById("outto");
    const output = document.getElementById("output");
    const fahr = document.getElementById("flexRadioDefault1").checked;
    const cel = document.getElementById("flexRadioDefault2").checked;
    if (ipt.length==0)
    {
        alert("Must input Number");
        return false;
    }
    if (isNaN(ipt))
    {
        alert("Must input Number");
        return false;
    }
    var inResult;
    var result;
    if(fahr)
    {
        //input in cel
        inResult = `${ipt} Celcius converted to Fahrenheit `
        result = (ipt*9/5)+32;
    }
    if(cel)
    {
        //input in fahr
        inResult = `${ipt} Fahrenheit converted to Celcius `
        result = (ipt-32)*(5/9);
    }
    outto.innerHTML = inResult;
    output.innerHTML = result;

    
}
const btn = document.getElementById("btn");
btn.addEventListener("click",myFun);

