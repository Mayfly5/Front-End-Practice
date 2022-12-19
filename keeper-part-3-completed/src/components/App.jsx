import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [contentitmes, setcontentitmes] = React.useState([]);

  function getContens(newContent) {
    setcontentitmes((prevValue) => {
      return [...prevValue, newContent];
    });
  }


  function deleteItem(itemId) {
    setcontentitmes((prevValue) => {
      return prevValue.filter((eachitemnots, index) => {
        return index !== itemId;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea sumbitContents={getContens} />
      {contentitmes.map((eachItem, index) => {
        return (
          <Note
            title={eachItem.title}
            content={eachItem.content}
            key={index}
            id={index}
            clickDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
