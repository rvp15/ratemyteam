import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const ReviewForm = ({ team }) => {
  const [reviewFormData, setReviewFormData] = useState({
    teamName: team,
    rating: 0,
    review: "",
  });
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
      <h2 className="review-heading"> Submit Your review for Team: {team}</h2>
      <form className="form-rating" onSubmit={handleSubmit}>
        <div className="start-rating">
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
    </div>
  );
};

export default ReviewForm;
