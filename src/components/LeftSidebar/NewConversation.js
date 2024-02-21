import React from "react";

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo" onClick={handleClick}>
      <p>New Conversation</p>
      <span >
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
}

export default NewConversation;