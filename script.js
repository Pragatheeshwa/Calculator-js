let Button = document.getElementById("btn")
let outputscreen = document.getElementById("output-screen")

function display(num){
    outputscreen.value=outputscreen.value+num;
}
function clearvalue(){
    outputscreen.value="";
}
function Delete(){
    outputscreen.value=outputscreen.value.slice(0,-1)
}
function calc(){
    try{
        
        outputscreen.value=eval(outputscreen.value)
    }
    catch(err)
    {
        outputscreen.value="Error"
    }
}