import { useState, useEffect } from "react";
import AddProduct from "../Components/AddProduct";
import ProductTable from "../Components/ProductTable";
import { getAllCategory } from "../../public/js/API/Category";
import { getAllProduct, addProduct, updateProduct, deleteProduct } from "../../public/js/API/Product";

function Products() {

  const [IFormData, setIFormData] = useState({
    Id:"",
    Name: "",
    State: "active",
    Image: "",
    Price: 0,
    Description: "",
    CategoryId: 0
  });
  const [btnState, setBtnState] = useState("إضافة");
  const [AllData, setAllData] = useState([]);
  const [AllCategory, setAllCategory] = useState([]);

  async function fillData() {
    const data = await getAllCategory()
    const data2 = await getAllProduct()
    setAllCategory(data)
    setAllData(data2)
    setIFormData({
      Id:"",
      Name: "",
      State: "active",
      Image: "",
      Price: 0,
      Description: "",
      CategoryId: 0
    })
    setBtnState("إضافة")
  }
  
  useEffect(() => {
    fillData()
  }, [])
  
  function changeForm(event) {
    const {name, value, files, type} = event.target
    console.log(IFormData)
    setIFormData(prevIFormData => ({
      ...prevIFormData,
      [name]: type == "file" ? files[0] : value
    }))
  }
  function handleUpdate(id) {
    var item = AllData.find(item => item.id == id)
    console.log(item)
    setIFormData(prevData => ({
      ...prevData,
      Id: item.id,
      Name: item.name,
      Price: item.price,
      Description: item.description == null ? "" : item.description,
      CategoryId: item.categoryId
    }))
    setBtnState("تعديل")
  }
  async function handleDelete(id) {
    const res = await deleteProduct(id)
    if (res.status == 200)
      fillData()
    else console.log(await res.json())
  }
  async function submitForm(event) {
    event.preventDefault()
    let data = new FormData()
    for (let key in IFormData) {
      let value = IFormData[key];
      data.append(key, value)
    }
    console.log(data)
    let res = ""
    if (btnState == "إضافة")
      res = await addProduct(data)
    else 
      res = await updateProduct(data, IFormData.Id)
    if (res.status == 200)
      fillData()
    else console.log(await res.json())
  }
  return (
    <div className='mt-3'>
      <AddProduct handleForm={changeForm}
        handleSubmit={submitForm}
        btnText={btnState}
        categories={AllCategory}
        data={IFormData}></AddProduct>
      <ProductTable update={handleUpdate}
        delete={handleDelete}
        data={AllData}></ProductTable>
    </div>
  )
}

export default Products
