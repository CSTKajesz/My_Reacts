import { useContext, useReducer, useMemo } from "react";
import Card from "./components/Card";
import Layout from "./components/Layout";
import "./App.css";
import { Context } from "./context";

function App() {
  const { state } = useContext(Context);
  const count = useMemo(() => {
    return `you have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`
  }, [state.items])

  return (
    <>
      {/*
      ==============
      kiszervezzük a Layout componensbe, majd azt hívjuk be
      ==============
      <Navbar />
      <div className="container text-center mt-5">
      <button className="btn btn-success float-end" onClick={() => toggle(!state.isCollapsed)}>{state.isCollapsed ? 'Close' : '+ Add'}</button>
      <div className="clearfix mb-4"></div>
      <UploadForm 
      inputs={state.inputs}
      isVisible={state.isCollapsed}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
        /> */}

      < Layout >
        <h1 className="text-center">Gallery</h1>
        {count}
        <div className="row">
          {state.items.map((item, index) => <Card key={index} {...item} />)}
        </div>
      </Layout >
    </>
  );

}
export default App;
