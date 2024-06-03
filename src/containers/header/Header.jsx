import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Revolutionize Your World with GPT-3 by OpenAI</h1>
      <p>Experience the future of AI with our powerful GPT-3 platform. Whether you're exploring chatbots, knowledge bases, or educational tools, our resources will transform your projects with cutting-edge technology. Join thousands of others who have already taken the leap into the future.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='People'/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt='AI'/>
    </div>
  </div>
);

export default Header;