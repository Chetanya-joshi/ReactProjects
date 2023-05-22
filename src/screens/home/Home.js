import React , {useState} from 'react'
import Header from '../../common/header/Header.js';
import Poster from '../../Poster.json';
import './Home.css';
import {Link} from 'react-router-dom';


import {GridList , GridListTile, GridListTileBar , Card , TextField , FormControlLabel , Checkbox , MenuItem } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';

import { Menu } from '@material-ui/core';

export default function Home(props) {
   

  

  const [image , setImage] = useState(Poster);




  return (
    <div>
        <Header baseUrl={props.baseUrl} />

        <div className="title">
          <span>Upcoming Movies</span>
        </div>

        <div className="upcoming_movies">
          <GridList cellHeight={400} cols={7} style={{width:2000}} >
           
        {
          image.map((image)=>{
           
            return (
              <GridListTile key={image.id}>
            <img src = {image.Poster_url} />
            <GridListTileBar
              title={image.title}
            >

            </GridListTileBar>
            </GridListTile>
            )
          })
        }

          
       </GridList>
        </div>

        <div className="relesed_movie_session">

        <div className="relesed_movie">
        <GridList cellHeight={350} cols={4} className="hello" >
           
           {
             image.map((image)=>{
              
               return (
                 <GridListTile key={image.id}>
              <Link to={`/movie/${image.id}`}> <img src = {image.Poster_url} style={{cursor:'pointer'}} height='350px' width='273px' /></Link>
               <GridListTileBar
                 title={image.title}
               >
   
               </GridListTileBar>
               </GridListTile>
               )
             })
           }
   
             
          </GridList>
        </div>




        <div className="movie_filter">

        <Card style={{minWidth:240 , maxWidth:240 , height:400}}>
            <ValidatorForm className="form">
             
            <label><h3>Find Movies By:</h3></label>

            <TextField id="standard-basic" label="Standard" variant="standard" />
             
            <TextField
          id="standard-select-currency"
          select
          label="Genre"
          defaultValue="EUR"
          helperText=""
          variant="standard"
        >

          <MenuItem>
          <FormControlLabel label="Action" control={<Checkbox/>}></FormControlLabel>
          </MenuItem>


          <MenuItem>
          <FormControlLabel label="Scifi" control={<Checkbox/>}></FormControlLabel>
          </MenuItem>


          <MenuItem>
          <FormControlLabel label="Drama" control={<Checkbox/>}></FormControlLabel>
          </MenuItem>

          </TextField>



          <TextField
          
          select
          label="Artist"
          
          helperText=""
          variant="standard"
        >

           {
            image.map((image)=>{
              return(
                <MenuItem key={image.id}>
                <FormControlLabel label={image.Artist} control={<Checkbox/>}></FormControlLabel>
                </MenuItem>)
            })
           }

           


          </TextField>


            </ValidatorForm>
        </Card>

        </div>
          
        </div>



       
    </div>
  )
}


