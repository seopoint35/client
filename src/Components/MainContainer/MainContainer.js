import React, { useEffect, useState } from 'react';
import '../../assets/css/mainContainer.css';
import CenterPart from './CenterPart';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_DRAWER } from '../../Store/Types/UtilesType';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


export default function MainContainer() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { loading, postMsg } = useSelector((state) => {
    return state.PostReducer
  })


  const habndelCloseDrawer = () => {
    dispatch({ type: CLOSE_DRAWER })
  }

  // Error 
  useEffect(() => {

    if (postMsg) {
      setOpen(true);
    } else {
      setOpen(false);
    }


  }, [postMsg])


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        message={postMsg}

        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }

      >
      </Snackbar>


      <div className="Main-Conatiner"  >


        <div className="Left-part">
          <LeftPart />
        </div>

        <div className="center-part" onClick={habndelCloseDrawer}>
          <CenterPart />
        </div>

        <div className="Right-part">
          <RightPart />
        </div>
      </div>

    </>
  )
}
