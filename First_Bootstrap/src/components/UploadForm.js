import { useMemo, useContext } from "react"
import { Context } from "../context";

const Preview = ({ path }) => {
  return (
    path && <div
      className="rounded p-1 m-5"
      style={{
        width: "30vw",
        height: "300px",
        backgroundImage: `url(${path}`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

const UploadForm = () => {
  const { dispatch, state } = useContext(Context)
  const handleOnChange = (e) => dispatch({ type: 'setInputs', payload: { value: e } })
  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'setItem' })
    dispatch({ type: "collapse", payload: { bool: false } })
  }
  const isDisabled = useMemo(() => {
    return !!Object.values(state.inputs).some(input => !input)
  }, [state.inputs])
  return (
    state.isCollapsed && <>
      <p className="display-6 text-center mb-3">Upload Stock Image</p>
      <div className="mb-5 d-flex align-items-center justify-content-center">
        {/* // a form nyitó tagjéhez kell az onSubmitot tenni */}
        <form className="mb-2" style={{ textAlign: "left" }} onSubmit={handleOnSubmit}>
          <Preview {...state.inputs} />
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="title"
              aria-describedby="text"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={handleOnChange}
            />
          </div>
          <button
            // a button-nak submitnek kell lennie!!!
            type="submit"
            className="btn btn-success float-end"
            disabled={isDisabled} // useMomo-hoz kell
          >
            Save changes
          </button>
        </form>
      </div>
    </>
  );
};
export default UploadForm;  