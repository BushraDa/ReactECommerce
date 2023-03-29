
function AddProduct(props) {

  return (
    <form className="row" method="POST">
        <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input className="form-control"
            name="Name" onChange={props.handleForm}
            value={props.data.Name} />
        </div>
        <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
            <input className="form-control" type="number" min="0"
            name="Price" onChange={props.handleForm}
            value={props.data.Price} />
        </div>
        <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
            <input className="form-control"
            name="Description" onChange={props.handleForm}
            value={props.data.Description} />
        </div>
        <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
            <select className="form-select" value={props.data.CategoryId}
              name="CategoryId" onChange={props.handleForm}>
                  <option value="0">-- Select --</option>
                  {
                      props.categories.map(item => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                      ))
                  }
            </select>
        </div>
        <div className="mb-3 col-md-6">
            <label htmlFor="ddlType" className="form-label">Image</label>
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

export default AddProduct