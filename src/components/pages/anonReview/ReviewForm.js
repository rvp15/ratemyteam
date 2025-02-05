import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ReviewForm = ({ team }) => {
  const [reviewFormData, setReviewFormData] = useState({
    teamName: team,
    rating: 0,
    review: "",
  });
  const [isSubmitted,setIsSubmitted] = useState(false)

  const handleRatingChange = (newrating) => {
    setReviewFormData((prevData) => ({
      ...prevData,
      rating: newrating,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true)
    console.log("FormDate:", reviewFormData);
    //reset form
    setReviewFormData({
      teamName: "",
      rating: 0,
      review: "",
    });
  };

  return (
    <div className="form">
     
       {
            isSubmitted ? <div className="sucess-submit"><IoIosCheckmarkCircleOutline className="check-mark"/><p>Sucessfully Submitted  </p></div>:  <form className="form-rating" onSubmit={handleSubmit}>
        <div className="start-rating">
          <h2 className="review-heading"> Submit Your review for Team: {team}</h2>
          <label>Rating</label>
          <StarRatings
            rating={reviewFormData.rating}
            starRatedColor="gold"
            starHoverColor="gold" 
            changeRating={handleRatingChange}
            numberOfStars={5}
            name="rating"
            starDimension="30px" // Stars will be 40px by 40px

          />
        </div>
        <div>
          <label>Your Review</label>
          <textarea
            name="review"
            value={reviewFormData.review}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
          }
     
    </div>
  );
};

export default ReviewForm;
