import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Importing a star icon from react-icons
import './feedbackform.css'
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    overallSatisfaction: 0,
    coachingQuality: 0,
    communication: 0,
    facilities: 0,
    costs: {
      hiddenFees: false,
      extraCharges: {
        tournament: false,
        uniform: false,
        equipment: false,
      },
      hiddenFeeAmount: '',  // Store the amount for hidden fees
      feeFrequency: '',      // Store the frequency (month, quarter, year)
      extraChargesAmount: {
        tournament: '',
        uniform: '',
        equipment: '',
      },  // Store amounts for each extra charge
    },
    progress: '', // for Yes/No question (initially blank)
    safety: 0,
    feedback: '', // open-ended feedback
  });

  // Handle star rating changes
  const handleStarChange = (name, rating) => {
    setFormData({ ...formData, [name]: rating });
  };

  // Handle checkbox changes for costs (hidden fees and extra charges)
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'hiddenFees' || name === 'clearBreakdown') {
      setFormData({
        ...formData,
        costs: { ...formData.costs, [name]: checked },
      });
    } else {
      const category = e.target.name.split('-')[1]; // Extract category from name
      setFormData({
        ...formData,
        costs: {
          ...formData.costs,
          extraCharges: {
            ...formData.costs.extraCharges,
            [category]: checked,
          },
        },
      });
    }
  };

  // Handle changes in input fields for amounts and frequencies
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'hiddenFeeAmount' || name === 'feeFrequency') {
      setFormData({
        ...formData,
        costs: { ...formData.costs, [name]: value },
      });
    } else if (name.startsWith('extraChargesAmount')) {
      const category = name.split('-')[1];
      setFormData({
        ...formData,
        costs: {
          ...formData.costs,
          extraChargesAmount: {
            ...formData.costs.extraChargesAmount,
            [category]: value,
          },
        },
      });
    }
  };

  // Handle Yes/No question changes for improvements in skills
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle open-ended text changes
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  // Function to render stars for star ratings
  const renderStars = (name) => {
    const selectedRating = formData[name];

    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => {
          const starRating = index + 1;
          return (
            <FaStar
              key={starRating}
              className={starRating <= selectedRating ? 'filled' : 'empty'}
              onClick={() => handleStarChange(name, starRating)}
              style={{ cursor: 'pointer', color: starRating <= selectedRating ? '#FFD700' : '#ddd' }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <>
    <div className="feedback-form">
      <h2>Sport Program Feedback</h2>
      <form onSubmit={handleSubmit}>
        {/* Overall Satisfaction (Star Rating) */}
        <div className="form-group">
          <label>How satisfied are you with your child's overall experience?</label>
          {renderStars('overallSatisfaction')}
        </div>

        {/* Coaching Quality (Star Rating) */}
        <div className="form-group">
          <label>How would you rate the quality of coaching?</label>
          {renderStars('coachingQuality')}
        </div>

        {/* Communication (Star Rating) */}
        <div className="form-group">
          <label>How would you rate the communication from the program?</label>
          {renderStars('communication')}
        </div>

        {/* Facilities (Star Rating) */}
        <div className="form-group">
          <label>How satisfied are you with the facilities?</label>
          {renderStars('facilities')}
        </div>

        {/* Costs Section */}
        <div className="form-group">
          <label>Did you encounter any other fees or charges during the program? Please provide details below</label>
          <div className="checkbox-group">
           
            <label>
              <input
                type="checkbox"
                name="extraCharges-tournament"
                checked={formData.costs.extraCharges.tournament}
                onChange={handleCheckboxChange}
              />
              Tournament Fee
            </label>
            {formData.costs.extraCharges.tournament && (
              <div>
                <label>Enter the tournament fee amount:</label>
                <input
                  type="number"
                  name="extraChargesAmount-tournament"
                  value={formData.costs.extraChargesAmount.tournament}
                  onChange={handleInputChange}
                  placeholder="Amount"
                />
              </div>
            )}
            <label>
              <input
                type="checkbox"
                name="extraCharges-uniform"
                checked={formData.costs.extraCharges.uniform}
                onChange={handleCheckboxChange}
              />
              Uniform Fee
            </label>
            {formData.costs.extraCharges.uniform && (
              <div>
                <label>Enter the uniform fee amount:</label>
                <input
                  type="number"
                  name="extraChargesAmount-uniform"
                  value={formData.costs.extraChargesAmount.uniform}
                  onChange={handleInputChange}
                  placeholder="Amount"
                />
              </div>
            )}
            <label>
              <input
                type="checkbox"
                name="extraCharges-equipment"
                checked={formData.costs.extraCharges.equipment}
                onChange={handleCheckboxChange}
              />
              Equipment Fee
            </label>
            {formData.costs.extraCharges.equipment && (
              <div>
                <label>Enter the equipment fee amount:</label>
                <input
                  type="number"
                  name="extraChargesAmount-equipment"
                  value={formData.costs.extraChargesAmount.equipment}
                  onChange={handleInputChange}
                  placeholder="Amount"
                />
              </div>
            )}
             <label>
              <input
                type="checkbox"
                name="hiddenFees"
                checked={formData.costs.hiddenFees}
                onChange={handleCheckboxChange}
              />
              Other hidden Fees
            </label>
            {formData.costs.hiddenFees && (
              <>
                <div>
                  <label>How much are the other hidden fees?</label>
                  <input
                    type="number"
                    name="hiddenFeeAmount"
                    value={formData.costs.hiddenFeeAmount}
                    onChange={handleInputChange}
                    placeholder="Amount"
                  />
                </div>
                <div>
                  <label>How often are the hidden fees charged?</label>
                  <select
                    name="feeFrequency"
                    value={formData.costs.feeFrequency}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Frequency</option>
                    <option value="month">Per Month</option>
                    <option value="quarter">Per Quarter</option>
                    <option value="year">Per Year</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Did you notice improvements in your child's skills? (Yes/No Radio Buttons) */}
        <div className="form-group">
          <label>Did you notice improvements in your child's skills?</label>
          <div>
            <label  className='radio-btn'>
              <input
                type="radio"
                name="progress"
                value="Yes"
                checked={formData.progress === 'Yes'}
                onChange={handleRadioChange}
              />
              Yes
            </label>
            <label  className='radio-btn'>
              <input
                type="radio"
                name="progress"
                value="No"
                checked={formData.progress === 'No'}
                onChange={handleRadioChange}
              />
              No
            </label>
          </div>
        </div>

        {/* Safety (Star Rating) */}
        <div className="form-group">
          <label>How satisfied are you with the safety measures?</label>
          {renderStars('safety')}
        </div>

        {/* Open-ended Feedback */}
        <div className="form-group">
          <label>What improvements would you recommend for the program or facility?</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleTextChange}
            rows="4"
            placeholder="Share your thoughts..."
          />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit">Submit Feedback</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default FeedbackForm;
