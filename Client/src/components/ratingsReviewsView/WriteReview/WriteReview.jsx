import React, { useContext, useEffect, useState} from 'react';
import axios from 'axios';
import ProductIdContext from '../../../context/ProductIdContext.jsx';
import { Modal, Button, Form } from 'react-bootstrap';
import ReactStars from 'react-stars';

let emptyState = {
  // eslint-disable-next-line camelcase
  product_id: 0,
  rating: 0,
  summary: '',
  body: '',
  recommend: false,
  name: '',
  email: '',
  photos: ['text'],
  characteristics: {}
};

// eslint-disable-next-line camelcase
export default function WriteReview ({ postReview, handleCloseModal, showWriteReview, productInfo, product_id, productName, metaInfo }) {
  var {productId, updateProductId} = useContext(ProductIdContext);
  var [postFormData, setPostFormData] = useState(emptyState);
  var [ratingLabel, setRatingLabel] = useState('');
  var [valid, setValid] = useState(false);

  const revertState = (event) => {
    setPostFormData(emptyState);
    setRatingLabel('');
    setValid(false);
  };

  const handlePostReview = (event) => {
    event.preventDefault(event);
    handleId(productId);
    checkValid(charactersLeft, totalChars, postFormData.rating, postFormData.name, nameChars, postFormData.email, emailChars);
    if (valid) {
      postReview(postFormData, (err) => {
        if (err) {
          console.log('err in handlePostReview', err);
        }
        console.log('posted review', postFormData);
        revertState(event);
        handleCloseModal();
      });
    } else {

    }
  };

  const handleId = (productId) => {
    postFormData.product_id = productId;
    setPostFormData(postFormData);
  }

  const ratingChanged = (newRating) => {
    postFormData.rating = newRating;
    setPostFormData(postFormData);
  };

  const onRatingSelected = (rating) => {
    event.preventDefault(rating);
    rating === 1 ? setRatingLabel('Poor') : '';
    rating === 2 ? setRatingLabel('Fair') : '';
    rating === 3 ? setRatingLabel('Average') : '';
    rating === 4 ? setRatingLabel('Good') : '';
    rating === 5 ? setRatingLabel('Great') : '';
  };

  const handleRecommend = (event) => {
    postFormData.recommend = true;
    setPostFormData(postFormData);
  };

  const handleSummary = (event) => {
    setPostFormData({
      ...postFormData,
      [event.target.name]: event.target.value
    });
  };

  let totalChars;
  const checkSummary = (summary) => {
    totalChars = 60 - summary.length < 0 ?
    `Over character count: ${summary.length - 60}` : '';
  };
  checkSummary(postFormData.summary);

  const handleBody = (event) => {
    setPostFormData({
      ...postFormData,
      [event.target.name]: event.target.value
    });
  };

  let charactersLeft;
  const checkCharacters = (body) => {
    charactersLeft = 50 - body.length > 0 ?
      `Minimum required characters left: ${50 - body.length}` : 'Minimum reached';
  };
  checkCharacters(postFormData.body);

  const handleName = (event) => {
    setPostFormData({
      ...postFormData,
      [event.target.name]: event.target.value
    });
  }

  let nameChars;
  const checkName = (name) => {
    nameChars = 60 - name.length < 0 ?
    `Over character count: ${name.length - 60}` : '';
  }
  checkName(postFormData.name);

  const handleEmail = (event) => {
    setPostFormData({
      ...postFormData,
      [event.target.name]: event.target.value
    });
  }

  let emailChars;
  const checkEmail = (email) => {
    emailChars = 60 - email.length < 0 ?
    `Over character count: ${email.length - 60}` : '';
  };
  checkEmail(postFormData.email);

  const handleCharId = (name) => {
    if (name === 'Fit') {
      return 60618
    }
    if (name === 'Comfort') {
      return 60620
    }
    if (name === 'Length') {
      return 60619
    }
    if (name === 'Quality') {
      return 60621
    }
  }

  const handleCharacteristicChoice = (event, i) => {
    let value = i + 1;
    let id = handleCharId(event.target.name)
    setPostFormData({
      ...postFormData,
      characteristics: {
        ...postFormData.characteristics,
        [event.target.name]: {id, value}
      }
    });
  };

  const charOptions = {
    Fit: [
      'Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs long'
    ],
    Length: [
      'Runs Short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long'
    ],
    Comfort: [
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect'
    ],
    Quality: [
      'Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect'
    ]
  }


  const checkValid = (charactersLeft, totalChars, rating, name, nameChars, email, emailchars) => {
    if (charactersLeft === 'Minimum reached' && totalChars === '' && rating && name && nameChars === '' && email && emailChars === '') {
      setValid(valid = true);
    }
    if (charactersLeft !== 'Minimum reached') {
      alert('Body is too short');
    }
    if (totalChars !== '') {
      alert('Summary is too long');
    }
    if(!rating) {
      alert('You need to select an overall rating');
    }
    if (!name) {
      alert('You need to submit a nickname');
    }
    if (nameChars !== '') {
      alert('Your nickname is too long');
    }
    if (!email) {
      alert('You need to submit a email');
    }
    if (emailChars !== '') {
      alert('Your email is too long');
    }
  };
  return (
    <div>
      <Modal
        show={showWriteReview}
        onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Write Your Review</h3>
            <h5>About the {productName}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>
                Overall Rating
                </Form.Label>
                <ReactStars
                  count={5}
                  onChange={e => { ratingChanged(e); onRatingSelected(e); }}
                  size={24}
                  color2={'#ffd700'}
                  half={false}
                />
               <Form.Text classname="text-muted">{ratingLabel}</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Characteristics</Form.Label>
                {
                  Object.keys(metaInfo.characteristics).map(char => (
                    <div key={char}>
                      <label>{char}</label>
                    {
                      charOptions[char].map((option, i) => {
                        return(
                          <>
                          <Form.Check key={option}
                              type="radio"
                              label={option}
                              name={char}
                              onClick={e => handleCharacteristicChoice(e, i)}
                          />
                        </>
                        )
                      })
                    }
                    </div>
                  ))

                  }
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Do you recommend this product?
              </Form.Label>
              <Form.Check type="checkbox" label="recommend" onClick={e => handleRecommend(e)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Summary
                </Form.Label>
                <Form.Control
                  type="text"
                  name="summary"
                  value={postFormData.summary}
                  placeholder="Enter summary here, max character length is 60"
                  onChange={e => handleSummary(e)}
                />
                <Form.Text classname="text-muted">{totalChars}</Form.Text>
            </Form.Group>
            <Form.Group>
            <Form.Label>Body, must be between 50-1000 characters </Form.Label>
            <Form.Control
              type="text"
              name="body"
              placeholder="Why did you like the product or not?"
              onChange={event => handleBody(event)}
            />
            <Form.Text classname="text-muted">{charactersLeft}</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>What is your nickname</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Example: jackson11!"
                onChange={e => handleName(e)}
              />
              <Form.Text classname="text-muted">For privacy reasons, do not use your full name or email address</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>What is your email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Example: jackson11!@hotmail.com"
                onChange={e => handleEmail(e)}
              />
              <Form.Text classname="text-muted">For privacy reasons, do not use your full name or email address</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={e => handlePostReview(e)}>
            Submit Review
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
