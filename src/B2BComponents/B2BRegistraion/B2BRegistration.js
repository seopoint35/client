import React, { useState } from 'react'
import '../../assets/css/B2B/B2BRegistration.css';
import { useDispatch, useSelector } from 'react-redux';
import {B2BProfile} from '../../Store/B2BActions/B2BAction'


export default function B2BRegistration() {
  const dispatch = useDispatch();

  const { B2BCategory, B2BSubCatogery } = useSelector((state) => {
    return state.B2BReducer
  })

  const [B2BRegistration, setB2BRegistration] = useState({
    BusinessName: "",
    Category: "",
    SubCategory: "",
    Building: "",
    Street: "",
    Landmark: "",
    Area: "",
    state: "",
    city: "",
    pin: "",
    BusinessImage: ""
  });

  const [NewsubcatList, setNewsubcatList] = useState([])

  // input value changeHandler
  const ChangeHandler = (e) => {
    setB2BRegistration({
      ...B2BRegistration,
      [e.target.name]: e.target.value
    })
    console.log(B2BRegistration)
  }

  // Image handler
  const ImageChangeHandler = (e) => {
    setB2BRegistration({
      ...B2BRegistration,
      BusinessImage: e.target.files[0]
    })

 

  }


    // ChangeCatogeryHandler
    const ChangeCatogeryHandler = (e) => {
      setB2BRegistration({
        ...B2BRegistration,
        Category: e.target.value
      })
      createNewSubList(e.target.value)
    }
    //  set New List Of Sub Catogery
    const createNewSubList = (selectedcatogery) => {
      console.log(selectedcatogery);
      let subCat = B2BSubCatogery.filter((element) => {
        if (element.CategoryName === selectedcatogery) {
          return element;
        }
      })
      setNewsubcatList(subCat)
    }

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const { BusinessName, Category, SubCategory, Building, Street, Landmark, Area, state, city, pin, BusinessImage } = B2BRegistration;

    const formData = new FormData();
    formData.append('BusinessName', BusinessName);
    formData.append('Category', Category);
    formData.append('SubCategory', SubCategory);
    formData.append('Building', Building);
    formData.append('Street', Street);
    formData.append('Landmark', Landmark);
    formData.append('BusinessName', BusinessName);
    formData.append('Area', Area);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('pin', pin);
    formData.append('BusinessImage', BusinessImage);
   


   dispatch(B2BProfile(formData))

  }



  const { BusinessName, Category, SubCategory, Building, Street, Landmark, Area, state, city, pin, BusinessImage } = B2BRegistration;

  return (
    <>
      <div className="B2BRegister_MainContainer">
         
         <div className="w-100">  
        <form  encType="multipart/form-data">

          <div className="form-group ">
            <label for="BusinessName">Business Name</label>
            <input type="text" className="form-control" id="BusinessName" aria-describedby="emailHelp" placeholder="Business Name" name="BusinessName" value={BusinessName} onChange={ChangeHandler} />
          </div>


          <div className="form-group ">
            <label for="Category">Business Category</label>
            <select class="form-control" id="Category" name="Category" value={Category} onChange={ChangeCatogeryHandler} >
              {B2BCategory.map((options) => (

                <option value={options.CategoryName}>{options.CategoryName}</option>
              ))}


            </select>
          </div>


          <div className="form-group ">
            <label for="SubCategory">Business sub Category</label>
            <select class="form-control" id="SubCategory" name="SubCategory" value={SubCategory} onChange={ChangeHandler}>
              {NewsubcatList.map((options) => (
                <option value={options.SubCategoryName}>{options.SubCategoryName}</option>
              ))}
              <option value="other">---select-sub- catohery</option>

            </select>
          </div>


          <div className="form-group ">
            <label for="Building">Building</label>
            <input type="text" className="form-control" id="Building" aria-describedby="emailHelp" placeholder="Enter text " name="Building" value={Building} onChange={ChangeHandler} />

          </div>


          <div className="form-group ">
            <label for="Street">Street</label>
            <input type="text" className="form-control" id="Street" aria-describedby="emailHelp" placeholder="Street" name="Street" value={Street} onChange={ChangeHandler} />

          </div>


          <div className="form-group ">
            <label for="Landmark">Landmark</label>
            <input type="text" className="form-control" id="Landmark" aria-describedby="emailHelp" placeholder="Landmark" name="Landmark" value={Landmark} onChange={ChangeHandler} />

          </div>

          <div className="form-group ">
            <label for="Area">Area</label>
            <input type="text" className="form-control" id="Area" aria-describedby="emailHelp" placeholder="Area" name="Area" value={Area} onChange={ChangeHandler} />

          </div>


          <div className="form-group ">
            <label for="state">State</label>
            <select class="form-control" id="state" name="state" value={state} onChange={ChangeHandler}>
              <option>Harryana</option>
              <option>Up</option>
              <option>Rajastahan</option>
              <option>maharastra</option>
              <option>Assam</option>
            </select>
          </div>

          <div className="form-group ">
            <label for="city">city</label>
            <select class="form-control" value={city} id="city" name="city" onChange={ChangeHandler}>
              <option>gurgaon</option>
              <option>delhi</option>
              <option>Noida</option>
              <option>jaipur</option>
              <option>Patna</option>
            </select>
          </div>

          <div className="form-group ">
            <label for="pin">pin</label>
            <input type="text" className="form-control" id="pin" aria-describedby="emailHelp" placeholder="pin" name="pin" value={pin} onChange={ChangeHandler} />

          </div>

          <div class="form-group">
            <label for="BusinessImage">Business Photo</label>
            <input type="file" class="form-control-file" id="BusinessImage" name="BusinessImage" onChange={ImageChangeHandler} />
          </div>

        </form>

      <button  class="btn btn-primary btn-block btn-lg" onClick={submitHandler}>Submit</button>
      </div>
      </div>

    </>
  )
}
