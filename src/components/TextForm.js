import React from 'react'
import { useState } from 'react'

export default function TextForm({ heading, mystyle ,showalert}) {
    const [text, settext] = useState("")
 

    return (

        <>
            <div className="my-5" style={mystyle}>

                <div className="mb-3">

                    <h1>  {heading}</h1>
                    <textarea className="form-control" style={mystyle} value={text} onChange={(e) => { settext(e.target.value) }} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>


                <button className="btn btn-primary mx-1" onClick={() => {
                    let Newtext = text.toUpperCase();
                    settext(Newtext);
                    showalert("text successfully coverted to uppercase","primary");


                }} > Convert to upper case</button>


                <button className="btn btn-success mx-1" onClick={() => {
                    let Newtext = text.toLowerCase();
                    settext(Newtext);
                    showalert("text successfully coverted to lowercase","success")

                }} > Convert to lower case</button>


                <button className="btn btn-warning mx-1" onClick={() => {
                     
                            navigator.clipboard.writeText(text);
                            // alert("Copied the text: " + text)
                            showalert("text successfully  copied ","warning") 
                        
                    

                }} >  copy to clip bord </button>

                <button className="btn btn-danger mx-1" onClick={() => {

                    settext(" ");

                }} >  reset </button>


            </div>

            <nav className="container" style={mystyle}>
                <h2>Your text summary </h2>
                <p>   words :  {text!==""?text.split(" ").length:0} and  characters : {text.length} </p>


                <h5 className="">time to read {0.08 * text.split(" ").length}</h5>
                <h1>preview</h1>
                <p>{text}</p>
            </nav>

        </>

    )
}
