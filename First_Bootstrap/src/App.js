import { useState, useEffect, useReducer } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card"
import UploadForm from "./components/UploadForm";
import "./App.css";

// const photos = [
//   'https://picsum.photos/id/1001/200/200',
//   'https://picsum.photos/id/1002/200/200',
//   'https://picsum.photos/id/1003/200/200',
//   'https://picsum.photos/id/1004/200/200',
//   'https://picsum.photos/id/1005/200/200',
//   'https://picsum.photos/id/1006/200/200',
//   'https://picsum.photos/id/1008/200/200'
// ]

/*useReducer*/
const photos = []

const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  //isCollapse a visibility-ért felelős
  isCollapsed: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'setItem':
      return {
        ...state,
        items: [action.payload.path, ...state.items]
      }
    default: return state
  }
}
/*useReducer*/


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [count, setCount] = useState()
  const [inputs, setInputs] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);
  const toggle = () => {
    collapse(!isCollapsed);
  }
  const handleOnChange = (e) => {
    if (e.target.name === 'file') {
      setInputs({ ...inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) })
    } else {
      setInputs({ ...inputs, title: e.target.value })
    }

  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    //eredetileg ezzel állítjuk be a képfeltöltést de a useReduce után át kell írni
    // setItems([inputs.path, ...items])
    //useReducer utáni átírt rész:
    dispatch({ type: 'setItem', payload: { path: inputs } })
    //kiürítjük az input mezőket
    setInputs({ title: null, file: null, path: null })
    // becsukjuk a képhozzáadó menüt
    collapse(false)
  }

  /*useReducer state-jét tesszük bele*/
  useEffect(() => {
  }, [state.items])

  useEffect(() => {
    // ha egynél több kép van akkor többesszámba teszi a söveget
    setCount(`you have ${items.length} image${items.length > 1 ? 's' : ''}`)
  }, [items])

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        {/* // float-olhatjuk a gombot jobbra */}
        {/* // ez volt az eredeti de jó lenne ha kicserélődne a szöveg
        <button className="btn btn-success float-end" onClick={toggle}>+Add</button> */}
        <button className="btn btn-success float-end" onClick={toggle}>{isCollapsed ? 'Close' : '+Add'}</button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          inputs={inputs} //kell propsnak a useMemo-hoz
          isVisible={isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
        <h1>Gallery</h1>
        <div className="row">
          {/* //a useReducer után át kell írni az items.map-et state.items-ra, az src-t is*/}
          {/* {items.map((photo, index) => <Card key={index} src={photo} />)} */}
          {state.items.map((photo, index) => <Card key={index} src={photo.path} />)}
        </div>
      </div>
    </>
  );
}

export default App;
