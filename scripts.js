const sub=document.querySelector(".submit");
const nam=document.querySelector(".name");

sub.addEventListener("click", subi)
function subi(e){
    
    var txt1=document.getElementById('name').value;
    var txt2=document.getElementById('email').value;
    var valid=/@/;
    
    var pass=document.getElementById('pass').value;
    
    var num=document.getElementById('num').value;
    
    var cpass=document.getElementById('cpass').value;
    
    if(txt1.length>=5)
    {
if(txt2.match(valid))
{
if(num!='123456789' && num.length===10 && num!='')
{
if(pass!=txt1 && pass.length>=8 && pass===cpass && pass!='password' && pass!='' && cpass!='')
{
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('num').value='';
    document.getElementById('pass').value='';
    document.getElementById('cpass').value='';
    document.getElementById('error').innerText='';
    document.getElementById('demo').innerText="Validated!!";
}
else if(pass===txt1)
document.getElementById('error').innerText="Password cannot be same as name";
else if(pass.length<8)
document.getElementById('error').innerText="Password not strong!!";
else if(pass==='password')
document.getElementById('error').innerText="Password cannot be password";
else if(pass!==cpass)
document.getElementById('error').innerText="Password not matched with confirm password";
else if(pass==='' || cpass==='')
document.getElementById('error').innerText="Field cannot be empty";

}
else if(num==='123456789')
document.getElementById('error').innerText=" Number cannot be 123456789";
else if(num.length<10 || num.length>10)
document.getElementById('error').innerText=" Number must be 10 digits";
else if(num==='')
document.getElementById('error').innerText=" Field cannot be empty";

}
else if(txt2==='')
{
    document.getElementById('error').innerText="Field cannot be empty";
}
else{
    document.getElementById('error').innerText="Enter a valid email";
}
    }
    else if(txt1.length<5)
    document.getElementById('error').innerText="Name must be atleast 5 letters";
    else if(txt1==='')
    document.getElementById('error').innerText="Field cannot be empty";
}

    
