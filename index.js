let nums = document.getElementById("length");
let count = document.getElementById("count");
let buttonFlag=false;
let passwordFlag=false;
let length;
//console.log("counter");
nums.addEventListener("input",function(){
    length = this.value;
    //nums.innerHTML = length;
    count.value = length;
    console.log(length);

});

function passwordGenerator(){
    if(!length){
        alert("Please give length");
        return;
    }
    let password="";
    let i=0;
    let flag=false;
    let selectAll=document.getElementById("togBtnAll").checked;
    let upperCase=document.getElementById("togBtn1").checked;
    let lowerCase=document.getElementById("togBtn2").checked;
    let numbers=document.getElementById("togBtn3").checked;
    let symbols=document.getElementById("togBtn4").checked;
    if(selectAll==true){
         flag = true;
         checkAll();
        
    }else{
         flag = checkConditons(upperCase,lowerCase,numbers,symbols);
    }
    const UC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LC="abcdefghijklmnopqrstuvxyz";
    const number="0123456789";
    const symb="~`! @#$%^&*()_-+={[}]|\:;'<,>.?/"
    while(i<length){
        if(i<length){
        if(upperCase==true || flag == true){
            let index= (parseInt)(UC.length*Math.random());
            console.log(index, flag, upperCase);
            password=password+UC.charAt(index);
            i++;
        }}
        if(i<length){
        if(lowerCase==true || flag == true ){
            let index= (parseInt)(LC.length*Math.random());
            console.log(index);
            password=password+LC.charAt(index);
            i++;
        }}
        if(i<length){
        if(numbers==true || flag == true){
            let index= (parseInt)(number.length*Math.random());
            console.log(index);
            password=password+number.charAt(index);
            i++;
        }}
        if(i<length){
        if(symbols==true || flag == true){
            let index= (parseInt)(symb.length*Math.random());
            console.log(index);
            password=password+symb.charAt(index);
            i++;
        }}
        
    }
    console.log(password);
    display(password);
}
function checkConditons(upperCase,lowerCase,numbers,symbols){
        if(upperCase === false && lowerCase == false && numbers == false && symbols == false){
            alert("No choice made!!(All choices will be selected)");
            return true;
        }
}
function display(password){
    var disp = document.getElementById("result");
    if(passwordFlag==false){
    disp.innerText=password;
    passwordFlag=true;
}
    else{
        alert("Please give the values again!");
    }
    console.log(disp);
    var div = document.createElement("div");
    div.id="container2"
    var div1= document.createElement("div");
    div1.innerHTML = password;
    var btn1 = document.createElement("button");
    btn1.id="btn1";
    btn1.innerHTML="Copy to Clipboard";
    btn1.addEventListener("click",function(){
        navigator.clipboard.writeText(password);
        alert("Password has been Copied to clipboard!!")
    })
    var btn2 = document.createElement("button");
    btn2.id="btn2";
    btn2.innerHTML="Reset";
    btn2.addEventListener("click",function(){
        window.location.reload()})
    //div.appendChild(div1);
    //div.appendChild(btn1);
    //div.appendChild(btn2);
    //document.getElementById("body").appendChild(display);
    if(buttonFlag==false){
    document.getElementById("cc").appendChild(btn1);
    document.getElementById("cc").appendChild(btn2);
    buttonFlag=true;
}
}
function checkAll(){
    const upperC=document.getElementById("togBtn1");
    upperC.checked=true;
    const lowerC=document.getElementById("togBtn2");
    lowerC.checked=true;
    const number=document.getElementById("togBtn3");
    number.checked=true;
    const symbol=document.getElementById("togBtn4");
    symbol.checked=true;
         
        
}
