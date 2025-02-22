import React, {useState} from 'react'

export default function TextFrom(props) {
    const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    }
    const handleLoClick = ()=>{
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }
    const handleClearClick = ()=>{
      console.log(" clear text clicked" + text);
      let newText = '';
      setText(newText)
    }
    const handleCopy = ()=>{
      console.log("text copied");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here2');
  return (
    <>
  <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-4" onClick={handleCopy}>Copy text</button>

  </div>

<div className="container">
  <h1>your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <h2>preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
