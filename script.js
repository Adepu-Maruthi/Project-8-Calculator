//accessing the input values from the HTML 
let inputValue = document.getElementById('input_value')
let BtnEle=document.querySelectorAll('button')

//adding the functionality to the buttons
let Text=''
BtnEle.forEach((buttons)=>{
    // debugger;
    console.log(buttons)
    buttons.addEventListener('click',(e)=>{
        //e======>event object getting the functionality while clicking
        e.target.innerText
        console.log(e.target.innerText)
        if(e.target.innerText==='='){
            console.log(eval(Text))
            Text=eval(Text)
            inputValue.value=Text;
        }
        else if(e.target.innerText==='AC'){
            Text='';
            inputValue.value=Text;
        }
        else if(e.target.innerText==='DEL'){
            Text = Text.subString(0, Text.length-1);
            inputValue.value=Text;
        }
        else{
            Text+=e.target.innerText;
            inputValue.value=Text;
            console.log(inputValue)
        }
    })
})