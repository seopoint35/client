import React, { useEffect, useState } from 'react';
import '../../assets/css/B2B/B2BRegistration.css';
import { useDispatch, useSelector } from 'react-redux';
import { B2BProfile } from '../../Store/B2BActions/B2BAction'
import { Backdrop, CircularProgress, IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function B2BRegistration() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { B2BCategory, B2BSubCatogery , loading, postmsg } = useSelector((state) => {
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
    console.log('submit')
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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
};

// Error 
useEffect(() => {

    if (postmsg) {
        setOpen(true);
    } else {
        setOpen(false);
    }


}, [postmsg])



  const { BusinessName, Category, SubCategory, Building, Street, Landmark, Area, state, city, pin, BusinessImage } = B2BRegistration;

  return (
    <>

      <Backdrop className={classes.backdrop} open={loading} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        message={postmsg}

        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }

      />

      <div className="B2BRegister_MainContainer">

        <div className="w-100">
          <form encType="multipart/form-data">

            <div className="form-group ">
              <label htmlFor="BusinessName">Business Name</label>
              <input type="text" className="form-control" id="BusinessName" aria-describedby="emailHelp" placeholder="Business Name" name="BusinessName" value={BusinessName} onChange={ChangeHandler} />
            </div>


            <div className="form-group ">
              <label htmlFor="Category">Business Category</label>
              <select className="form-control" id="Category" name="Category" value={Category} onChange={ChangeCatogeryHandler} >
                {B2BCategory.map((options, k) => (

                  <option key={k} value={options.CategoryName}>{options.CategoryName}</option>
                ))}


              </select>
            </div>


            <div className="form-group ">
              <label htmlFor="SubCategory">Business sub Category</label>
              <select className="form-control" id="SubCategory" name="SubCategory" value={SubCategory} onChange={ChangeHandler}>
                {NewsubcatList.map((options, k) => (
                  <option key={k} value={options.SubCategoryName}>{options.SubCategoryName}</option>
                ))}
                <option value="other">---select-sub- catohery</option>

              </select>
            </div>


            <div className="form-group ">
              <label htmlFor="Building">Building</label>
              <input type="text" className="form-control" id="Building" aria-describedby="emailHelp" placeholder="Enter text " name="Building" value={Building} onChange={ChangeHandler} />

            </div>


            <div className="form-group ">
              <label htmlFor="Street">Street</label>
              <input type="text" className="form-control" id="Street" aria-describedby="emailHelp" placeholder="Street" name="Street" value={Street} onChange={ChangeHandler} />

            </div>


            <div className="form-group ">
              <label htmlFor="Landmark">Landmark</label>
              <input type="text" className="form-control" id="Landmark" aria-describedby="emailHelp" placeholder="Landmark" name="Landmark" value={Landmark} onChange={ChangeHandler} />

            </div>

            <div className="form-group ">
              <label htmlFor="Area">Area</label>
              <input type="text" className="form-control" id="Area" aria-describedby="emailHelp" placeholder="Area" name="Area" value={Area} onChange={ChangeHandler} />

            </div>


            <div className="form-group ">
              <label htmlFor="state">State</label>
              <select className="form-control" id="state" name="state" value={state} onChange={ChangeHandler}>
                <option>Harryana</option>
                <option>Up</option>
                <option>Rajastahan</option>
                <option>maharastra</option>
                <option>Assam</option>
              </select>
            </div>

            <div className="form-group ">
              <label htmlFor="city">city</label>
              <select className="form-control" value={city} id="city" name="city" onChange={ChangeHandler}>
                <option>gurgaon</option>
                <option>delhi</option>
                <option>Noida</option>
                <option>jaipur</option>
                <option>Patna</option>
              </select>
            </div>

            <div className="form-group ">
              <label htmlFor="pin">pin</label>
              <input type="text" className="form-control" id="pin" aria-describedby="emailHelp" placeholder="pin" name="pin" value={pin} onChange={ChangeHandler} />

            </div>

            <div className="form-group">
              <label htmlFor="BusinessImage">Business Photo</label>
              <input type="file" className="form-control-file" id="BusinessImage" name="BusinessImage" onChange={ImageChangeHandler} />
            </div>

          </form>

          <button className="btn btn-primary btn-block btn-lg" onClick={submitHandler}>Submit</button>
        </div>
      </div>

    </>
  )
}
