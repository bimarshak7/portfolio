import React from 'react';
import styled from 'styled-components';

const Style=styled.div`
	.modal {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width:100%;
	  height: 100%;
	  background: rgba(0, 0, 0, 0.6);
	}
	.modal-main {
	  	position: fixed;
	    z-index: 500;
	    background-color: darkgreen;
	    width: 40%;
	    border: 1px solid #ccc;
	    box-shadow: 1px 1px 1px black;
	    padding: 16px;
	    left: 25%;
	    top: 30%;
	    box-sizing: border-box;
	    transition: all 0.3s ease-out;
	}

	.display-block {
	  display: block;
	}

	.display-none {
	  display: none;
	}

	.btn {
  outline: none;
  padding: 10px 20px;
  margin: 4px;
  background: #0089ce;
  border: 1px solid #dedede;
  color: #fff;
  transition: all .2s;
  justify-content:center;
}

.btn:hover {
  background: #084c7f;
}

.btn-container {
  text-align: center;
}

	
`

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
  	<Style>
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className='btn' onClick={handleClose}>Play Again</button>
      </section>
    </div>
    </Style>
  );
};

export default Modal;
