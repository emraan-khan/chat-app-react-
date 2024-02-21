import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import sendImg from './right-arrow.png'
function MessageInput(props) {
  const { newMessageHandler } = props;
  const [message, setMessage] = useState("");
  useEffect(() => {
    // reset input value when contact component changes
    setMessage("");
  }, [setMessage, props]);
  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  let handleSubmit = () => {
    if (message) {
      newMessageHandler(message);
    } else {
      alert("Type some message text before submitting");
    }
    setMessage("");
    // scroll to the bottom
  };
  return (
    <>
      <Row className="message-input" style={{display:"flex",
                                              alignItems:"center",
                                              justifyContent:"center",}}>
        <Col xs={5} lg={7}>
          <input
            type="text"
            placeholder="Send message"
            value={message}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={3} lg={5} >
          {/* <button  > */}
          <img src={sendImg} style={{
            width:"50px",
            height:"35px",
            cursor:"pointer"
          }} className="send-button" onClick={handleSubmit}/>
          {/* <a href="https://www.flaticon.com/free-icons/send" title="send icons"></a> */}
          {/* </button> */}
        </Col>
      </Row>
    </>
  );
}

export default MessageInput;