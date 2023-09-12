import { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import Backdrop from "./components/Backdrop";

function App() {
  const [modalOpen, setModalOpen]=useState(false);
  const modalCloseHandler=()=>{
    setModalOpen(false);
  }

  const modalOpenHandler=()=>{
    setModalOpen(true);
  }
  return(
    <div>
      <h1>hiiii</h1>
      {modalOpen?<FirstComponent owner='Aastha' reason='demo' closeModal={modalCloseHandler}/>:null}
      {modalOpen?<Backdrop/>:null}
      <button onClick={modalOpenHandler}>Open</button>
      
    </div>
  );
}

export default App;
