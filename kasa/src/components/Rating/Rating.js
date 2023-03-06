import React, { useState } from 'react'
import './Rating.css'

const Rating = ({active, children}) => {
  return (
    //! rating dynamique a mettre en place //!
    <div>
      <StarRating size={30} num={5} rating={3}/>
    </div>
  )
}

const StarRating = ({size = 30, num = 5, rating = 0}) => {
  const [starRating, setStarRating] = useState(rating);
  const removeStar = order => {
    setStarRating(order);
  }
  const addStar = order => {
    setStarRating(starRating + order);
  }
  return (
    <div className="star-rating">
      {[...Array(starRating).keys()].map(key => <Star key={key} size={size} place={key + 1} removeStar={removeStar}/>)}
      {[...Array(num - starRating).keys()].map((key, i) => <Dot size={size} key={key} place={key + 1} addStar={addStar}/>)}
     </div>
  )
}

const Star = ({size = 30, removeStar, place}) => {
    return (
      <span className="sr-star">
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
      </span>
    )
  }
const Dot = ({size = 30, addStar, place}) => {
  return (
    <div className="sr-star" style={{height: `${size}px`, width: `${size}px`}}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="Grey" className="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
    </div>
  )
}

export default Rating
