import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Modal from 'react-modal';

const Formating = (props) => {
  const [text, setText] = useState('');
  const [formattedCode, setFormattedCode] = useState('');
  const [showInstructionsModal, setShowInstructionsModal] = useState(true);

  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = showInstructionsModal ? 'hidden' : 'auto';
  }, [showInstructionsModal]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedCode);
  };

  const clearText = () => {
    setText('');
    setFormattedCode('');
  };

  const convertToMarkdown = () => {
    setFormattedCode(text);
  };

  const closeInstructionsModal = () => {
    setShowInstructionsModal(false);
  };

  return (
    <>
      <div className="kk">
        <div className="container">
          <br />
          <h1 className="flex ml-14 text-white text-3xl font-bold mt-3">{props.heading}</h1>
          <div className="surya mb-3">
            <textarea
              className="form-control mt-4"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ backgroundColor: '#042743', color: 'white' }}
              id="textid"
              rows={5}
              cols={5}
              placeholder="Enter Text here..."
            ></textarea>
          </div>
          <div className="ml-2">
          <button className="btn btn-primary my-2 mx-2" onClick={convertToMarkdown}>
              Convert to Markdown
            </button>
            <button className="btn btn-primary my-2 mx-2" onClick={copyToClipboard}>
              Copy to Clipboard
            </button>
            <button className="btn btn-primary my-2 mx-2" onClick={clearText}>
              Clear Text
            </button>
          </div>
        </div>
        <div className="container text-white mt-3 ml-5 text-lg">
          <h2>Preview</h2>
          {formattedCode ? (
            <div>
              <ReactMarkdown>{formattedCode}</ReactMarkdown>
              <button className="btn btn-primary my-2" onClick={copyToClipboard}>
                Copy to Clipboard
              </button>
            </div>
          ) : (
            <p>{text.length > 0 ? text : 'Enter in the text Box to Preview'}</p>
          )}
        </div>
      </div>

      <Modal
        isOpen={showInstructionsModal}
        onRequestClose={closeInstructionsModal}
        contentLabel="Markdown Instructions Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className='ml-8 mt-8 text-white font-bold'>
          <h2 className='font-bold mb-2'>Markdown Instructions :</h2>
          <p className=''>
            Welcome to the Markdown Formatting Tool! Here are some instructions on how to use Markdown:
          </p>
          <div className="flex mt-2">
            <p>1. Start a line with one or more hash symbols (`#`) for headings. <br />2. And we need to end with the symbol which we have started It will be apllicable for every symbol. <br/>
            3. Use asterisks (`*`) or underscores (`_`) for emphasis.<br/>
            4. Create lists using hyphens (`-`) or numbers with dots (`1.`).</p>
            </div>
          <button className='justify-center text-white outline-none rounded-lg bg-blue-600 px-2 py-1 mt-3 ml-56' onClick={closeInstructionsModal}>Got It!</button>
        </div>
      </Modal>
    </>
  );
};

export default Formating;
