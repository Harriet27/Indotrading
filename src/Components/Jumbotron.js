import React from "react";
import { delivery } from '../Assets';
import './Jumbotron.css';

const Jumbotron = () => {
  return (
    <div class="banner">
        <img class="thumbnail" src={delivery} alt="thumbnail" />
        <div class="details">
            <div class="title">
                <p>$0 delivery for 30 days!</p>
                <img src="https://img.icons8.com/color/96/000000/confetti.png" alt="confetti" />
            </div>
          <p class="desc">$0 delivery fee for orders over $10 for 30 days</p>
        </div>
        <p class="link">Learn More</p>
    </div>
  );
};

export default Jumbotron;
