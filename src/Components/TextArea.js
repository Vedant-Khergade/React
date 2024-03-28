
//import { useState } from "react"; can use this sytax also
import React,{useState} from 'react';



export default function TextArea(props) {
   

   

    // setText('The updated text'); This is the function to update the text and this is the correct way for updation.

    const [text,setText] = useState('');//State variable 
    const click=()=>{

      
        let newText=text.toUpperCase();
        setText(newText);

        if(text.length===0){

          props.getArt("Enter the text first","warning");

        setTimeout(() => {
          
          props.getArt(null);
        }, 1500);
        }

        else{
          props.getArt("Changed to Upper case success","primary");

        setTimeout(() => {
          
          props.getArt(null);
        }, 1500);
        }

        
    }

    const clickLC= ()=>{

        let newText2=text.toLowerCase();

        setText(newText2);


        if(text.length===0){

          props.getArt("Enter the text first","warning");

        setTimeout(() => {
          
          props.getArt(null);
        }, 1500);
        }

        else{
          props.getArt("Changed to Lower case success","primary");

        setTimeout(() => {
          
          props.getArt(null);
        }, 1500);
        }
    }

    // const speak = () => {
    //   let msg = new SpeechSynthesisUtterance();

     const reverseT=()=>{
 

      let arr=text.split("");
      arr=arr.reverse();

      let newText3=arr.join("");

      setText(newText3);


      props.getArt("Clicked Reverse case success","warning");
        
      setTimeout(() => {
        
        props.getArt(null);
      }, 1500);



     }
    

    


    const change=(event)=>{

        setText(event.target.value);
        


    }


    


  return (
    <>
    <div> 
        <h3 className='container my-4' style={{color:props.mode2==='light'?'black':'white'}}>{props.Heading2}</h3>
     
     <div className='container my-1' style={{color:props.mode2==='light'?'black':'white'}}>
  <textarea className="form-control" value={text} onChange={change} style={{backgroundColor : props.mode2==='light'?'white':'rgb(183, 178, 178)'}} id="floatingTextarea" rows="10"></textarea>
  </div>

       <div className="container">
     <button disabled={text.length===0} className='btn btn-primary   mx-1 my-2' onClick={click}>Change to UpperCase</button>
     <button  disabled={text.length===0} className='btn btn-primary  mx-1 my-2' onClick={clickLC}>Change to LowerCase</button>
     {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}
     <button disabled={text.length===0} className='btn btn-primary  mx-1 my-2' onClick={reverseT}>Reverse text</button>
     </div>
   
     </div>

    <div className="container" style={{color:props.mode2==='light'?'black':'white'}}>

      <h3 >Count</h3>

       <p>count of characters is {text.length} and count of words is {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>


       <h3>Preview</h3>
      
       <p>{text.length===0?'see preview here':text}</p>

     
       

    </div>

    </>
  )
}
