

function Cart(props) {

    console.log(props.data)
    const elements = props.data.map(item => {
        return (
                <div className="col-md-4" key={item.id}>
                    <div className="card">
                        <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">{item.name}</p>
                        </div>
                    </div>
                </div>
            )
    })
    return (
        <div className='mt-3 row'>
            {
                elements
            }
        </div>
    )
}

export default Cart