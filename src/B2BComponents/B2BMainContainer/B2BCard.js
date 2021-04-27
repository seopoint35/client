import React from 'react';
import { Breadcrumbs, Button, Paper, Typography } from '@material-ui/core';
import '../../assets/css/B2B/B2BCards.css';
import b2bCardpic from '../../assets/images/b2bcard.jpg';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Rating } from '@material-ui/lab';
import { NavLink } from 'react-router-dom';


export default function B2BCard(props) {

  const { BusinessName, Category, SubCategory, state, city, Review } = props.element;
  return (
    <>
      <Paper className="B2BCards_mainContainer">

        <div className="B2BCardImage_Box">
          <img src={b2bCardpic} alt="B2B-card image" />
        </div>

        <div className="B2BCard_DetailsBox">
          {/* B2B Catogery Breadcrums start */}
          <div className="B2BCard_Breadcrums">
            <Breadcrumbs separator="›">
              <Typography variant="h6" color="textSecondary"  >{Category}</Typography>
              <Typography variant="h6">{SubCategory}</Typography>
            </Breadcrumbs>
          </div>
          {/* B2B Catogery Breadcrums End */}
          {/* B2B title start */}
          <div className="B2B_businesNameBox">
            <Typography variant="h4">{BusinessName}</Typography>
          </div>
          {/* B2B title start */}

          {/* B2B Location start */}
          <div className="B2B_LocationBox">
            <div className="B2B_LocationIcon">
              <LocationOnIcon />
            </div>

            <div>
              <Breadcrumbs separator="›">
                <Typography variant="h6" color="textSecondary"  >{state}</Typography>
                <Typography variant="h6">{city}</Typography>
              </Breadcrumbs>
            </div>
          </div>
          {/* B2B Location End */}

          {/* B2B Rating  start*/}
          <div className="B2B_RatingBox">
            <Rating size="large" name="read-only" value={4} readOnly />

          </div>

          {/* Get Full Details start */}
          <div>
            <NavLink to={`/`} > 
            <Button variant="contained" color="primary" fullWidth> 
               Get Full Details
              </Button>
              </NavLink>
          </div>
          {/* Get Full Details start */}
        </div>


      </Paper>
    </>
  )
}


{/* <p>Business Name <span>{BusinessName}</span></p>  
            <p>Catogery <span>{Category}</span>  </p>  
            <p>sub catogery <span>{SubCategory}</span></p>
            <p>State <span>{state}</span></p>  
            <p>City <span>{city}</span></p>  
            <p>Rating <span>{Review.rating}</span>  </p>  
            <p>Avrage <span>{Review.Avrage}</span></p> */}
