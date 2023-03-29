
function ProductTable(props) {

    const elements = props.data.map(element => {
                        return (
                            <tr key={element.id}>
                                <th scope="row" >{element.id}</th>
                                <td>{element.name}</td>
                                <td>{element.price}</td>
                                <td>{element.description}</td>
                                <td>{element.categoryId}</td>
                                <td><img src={element.image}/></td>
                                <td><button className="btn btn-warning"
                                    onClick={() => props.update(element.id)}>تعديل</button></td>
                                <td><button className="btn btn-danger"
                                    onClick={() => props.delete(element.id)}>حذف</button></td>
                            </tr>
                        )
                    })
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Image</th>
                    <th scope="col">#</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </table>
    )
}

export default ProductTable