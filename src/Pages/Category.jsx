import AddCategory from '../Components/AddCategory'
import CategoryTable from '../Components/CategoryTable';
import { useState, useEffect } from 'react'
import { addCategory, updateCategory, getAllCategory, deleteCategory } from '../../public/js/API/Category';

function Category() {

  const [IFormData, setIFormData] = useState({
    Id:"",
    Name: "",
    State: "active",
    Image: "",
  });
  const [btnState, setBtnState] = useState("إضافة");
  const [AllData, setAllData] = useState([]);

  async function fillData() {
      const data = await getAllCategory()
    setAllData(data)
    setIFormData({
      Id:"",
      Name: "",
      State: "active",
      Image: "",
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
    }))
    setBtnState("تعديل")
  }
  async function handleDelete(id) {
    const res = await deleteCategory(id)
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
    let res = ""
    if (btnState == "إضافة")
      res = await addCategory(data)
    else 
      res = await updateCategory(data, IFormData.Id)
    if (res.status == 200)
      fillData()
    else console.log(await res.json())
  }
  return (
    <div className='mt-3'>
      <AddCategory handleForm={changeForm}
        handleSubmit={submitForm}
        btnText={btnState}
        data={IFormData}></AddCategory>
          
      <CategoryTable update={handleUpdate}
        delete={handleDelete}
        data={AllData}></CategoryTable>
    </div>
  )
}

export default Category
