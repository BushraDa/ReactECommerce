
function AddCategory(props) {

  return (
    <form className="row" method="POST">
      <div className="mb-3 col-md-6">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input className="form-control" id="catName"
          name="Name" onChange={props.handleForm}
          value={props.data.Name} />
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="ddlType" className="form-label">Type</label>
        <input className="form-control" type="file"
          id="catImage" name="Image" 
          onChange={props.handleForm} />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={props.handleSubmit}>{props.btnText}</button>
      </div>
    </form>
  )
}

export default AddCategory