const fun1 = () =>{
    console.log("Good Morning");
}

const callFunctionAfterGreat = (thefunction) =>{
    console.log("Great");
    thefunction();
}           

callFunctionAfterGreat(fun1);   
