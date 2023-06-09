import { useMemo } from "react"

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

const UploadForm = ({ inputs, isVisible, onChange, onSubmit }) => {
  const isDisabled = useMemo(() => {
    return !!Object.values(inputs).some(input => !input)
  }, [inputs])

  return (
    isVisible && <>
      <p className="display-6 text-center mb-3">Upload Stock Image</p>
      <div className="mb-5 d-flex align-items-center justify-content-center">
        {/* // a form nyitó tagjéhez kell az onSubmitot tenni */}
        <form className="mb-2" style={{ textAlign: "left" }} onSubmit={onSubmit}>
          <Preview {...inputs} />
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="title"
              aria-describedby="text"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={onChange}
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