import React from "react";

function CreateArea(props) {
  const [content, setContent] = React.useState({
    title: "",
    content: ""
  });

  function addContent(event) {
    const { name, value } = event.target;
    setContent((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submiteNote(event) {
    props.sumbitContents(content);
    setContent({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={addContent}
          value={content.title}
        />
        <textarea
          name="content"
          value={content.content}
          placeholder="Take a note..."
          rows="3"
          onChange={addContent}
        />
        <button onClick={submiteNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
