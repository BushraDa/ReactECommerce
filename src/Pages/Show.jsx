import { useEffect, useState } from "react"
import { getAllCategory } from "../../public/js/API/Category"
import { getProductById } from "../../public/js/API/Product"

function Show(props) {

    const [AllCategories, setAllCategories] = useState([])
    const [AllProducts, setAllProducts] = useState([])
    const [level, setLevel] = useState("category");

    async function getCategoryData(){
        const data = await getAllCategory()
        setAllCategories(data)
    }
    async function getProductData(id){
        const data = await getProductById(id)
        setAllProducts(data)
    }
    useEffect(() => {
        getCategoryData()
    }, [])


    function moveToProducts(id) {
        setLevel("product")
        getProductData(id)
    }

    const data = level == "category" ? AllCategories : AllProducts
    const elements = data.map(item => {
        return (
                <div className="col-md-4" key={item.id}>
                    <div className="card">
                        <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">{item.name}</p>
                        {level == "category" && <button className="btn btn-primary"
                            onClick={() => moveToProducts(item.id)}
                            type="button">See Products</button>}
                        {level == "product" && <button className="btn btn-primary"
                            onClick={() => props.addCart(item, props.checkItem(item.id)? "delete" : "add")}
                            type="button">{props.checkItem(item.id) ? "Remove from Cart": "Add to Cart"}</button>}
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

export default Show