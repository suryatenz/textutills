import React,{useState} from 'react'

const Textform = (props) => {
    const[text,Settext]=useState('');
    const handleUpclick = ()=>{
        let tt = text.toUpperCase();
        Settext(tt);
    } 
    const clearText = ()=>{
        Settext('');
    }
    const handlelowclick = ()=>{
        let ee = text.toLowerCase();
        Settext(ee);
    }
    
    const captialletter = () => {
        let ab = text.split(/\s+/);
        let mywor = '';
        for (let i = 0; i < ab.length; i++) {
          if (ab[i].length > 0) {
            let an = ab[i].charAt(0).toUpperCase();
            ab[i] = an + ab[i].substring(1);
            mywor = mywor + ' ' + ab[i];
          }
        }
        Settext(mywor.trim());
      };

    const clearSpaces = () => {
        let newtext = text.split(/\s+/);
        Settext(newtext.join(' '));
      };
    const copyToClipboard = ()=>{
        let text = document.getElementById("textid");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const onchange = (event)=>{
          Settext(event.target.value);
    }
    let words = text.split(/\s+/); 
    let wordCount = words.length;

  return (
    <>
    <div className="kk">
            <div className="container">
                <br/>
                <h1 className='flex ml-14 text-white text-3xl font-bold mt-6'>{props.heading}</h1>
                <div className="surya mb-3">
                    <textarea className="form-control mt-4" value={text} onChange={onchange} style={{backgroundColor :'#042743',color :'white'}} id="textid" rows={5} cols={5}></textarea>
                </div>
                <div className="ml-2">
                <button className="btn btn-primary my-2 mx-2" onClick={handleUpclick} >Convert to upper</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handlelowclick} >Convert To lower</button>
                <button className="btn btn-primary my-2 mx-2" onClick={captialletter} >First letter captial</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearSpaces} >Remover EmptySpace</button>
                <button className="btn btn-primary my-2 mx-2" onClick={copyToClipboard} >Copy to clipbord</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearText} >Clear text</button>
                </div>
            </div>
            <div className="container text-white mt-3 ml-5 text-lg">
                <h1>Your Text summary</h1>
                <p>{`words - ${wordCount}, length - ${text.length}`}</p>
            </div>
            <div className="container text-white mt-3 ml-5 text-lg">
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter in the text Box to Preview"}</p>
            </div>
            </div>
    </>
  )
}

export default Textform
