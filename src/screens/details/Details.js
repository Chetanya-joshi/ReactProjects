import {useState} from 'react';
import Poster from '../../Poster.json';
import Header from '../../common/header/Header';
import {Link} from 'react-router-dom';
import './Details.css';
import ReactStars from 'react-rating-stars-component';
import {GridList , GridListTile, GridListTileBar} from '@material-ui/core';
import Navbar from '../Navbar';



import { useParams } from 'react-router-dom';
import React from 'react'

export default function Details() {

  const [movie , setMovie] = useState(Poster);
  const params = useParams();


  const movies = movie.filter((img) => img.id==params.id)

  return (
    <div>
      
      <Navbar />
        
      

      <Link to="/"><p> Back to Home</p></Link>
      
      {
      movies.map((images) =>{
        return (

    <div className="outer_div">

        <div className="poster">
          

          <img src={images.Poster_url} height="400px"></img>
        </div>

        <div className="poster_details">
          <h2>{images.title}</h2>
          <h4>Genre: {images.Genre}</h4>
          <h4>Duration: {images.Duration} </h4>
          <h4>Relase Date: {images.Release}</h4>
          <h4>Plot: {images.Description}</h4>

          <video width="100%" height="240" controls>
            <source src={images.Video}></source>

          </video>
        </div>

        <div className="poster_rating">
          <div className="rating_star">
            <h3>Rate this movie:</h3>
          <ReactStars activeColor="yellow" size="30" count="5"/>
          </div>
          <div>
            <h3>Artist:</h3>
          <GridList cellHeight={200} cols={2} style={{width : '200'}}>
          <GridListTile key={images.id}>
            <img src = {images.Character1} />
            <GridListTileBar
              title={images.title}
            >

            </GridListTileBar>
            </GridListTile>


            <GridListTile key={images.id}>
            <img src = {images.Character2} />
            <GridListTileBar
              title={images.title}
            >

            </GridListTileBar>
            </GridListTile>
          </GridList>
          </div>
        </div>

      </div>
        )
      })
    } 
      </div>
  )
}
