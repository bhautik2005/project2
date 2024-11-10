    
 const  textbox= document.getElementById("textbox");
 const  tof= document.getElementById("tof");
 const  toc = document.getElementById("toc");
 const   reslt= document.getElementById("reslt");
  let temp;

function  convert(){
 
    if(tof.checked){
      temp =Number(textbox.value);
      temp=temp * 9/5 +32;
      reslt.textContent = temp.toFixed(2)+"F";
    }
  else if(toc.checked){
   temp =Number(textbox.value);
   temp=(temp-32)*(5/9) ;
   reslt.textContent = temp.toFixed(2)+"C";
  }
  else{
   reslt.textContent = "you not selected any unit";
  }

}
 
