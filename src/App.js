import './App.css';
import React from 'react';

const PricingCard = ({ plan, price, features }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title flex-center">{plan}</h5>
      <h6 className="card-subtitle mb-2 flex-center">{price}</h6>
      <hr />
      <ul className="list-group">
        {features.map((feature, index) => (
          <li key={index} className={`list flex-start ${feature.icon === 'xmark' ? 'unavailable' : ''}`}>
            <i className={`fas fa-${feature.icon} mr-2 p-2`}></i> {feature.text}
          </li>
        ))}
      </ul>
      <div className='flex-center'>
        <a href="#" className="btn btn-primary mt-3">      
        Button
      </a>
      </div>
    </div>
  </div>
);

const App = () => {const plans = [
  {
    plan: 'Free',
    price: '$0/month',
    features: [
      { text: 'single user', icon: 'check' },
      { text: '50GB storage', icon: 'check' },
      { text: 'unlimited public projects', icon: 'check' },
      { text: 'community access', icon: 'check' },
      { text: 'unlimited private projects', icon: 'xmark' },
      { text: 'dedicated phone support', icon: 'xmark' },
      { text: 'free subdomain', icon: 'xmark' },
      { text: 'multi status reports', icon: 'xmark' },
    ],
  },
  {
    plan: 'Plus',
    price: '$9/month',
    features: [
      { text: '5 user', icon: 'check' },
      { text: '50GB storage', icon: 'check' },
      { text: 'unlimited public projects', icon: 'check' },
      { text: 'community access', icon: 'check' },
      { text: 'unlimited private projects', icon: 'check' },
      { text: 'dedicated phone support', icon: 'check' },
      { text: 'free subdomain', icon: 'check' },
      { text: 'multi status reports', icon: 'xmark' },
    ],
  },
  {
    plan: 'Pro',
    price: '$49/month',
    features: [
      { text: 'unlimited user', icon: 'check' },
      { text: '50GB storage', icon: 'check' },
      { text: 'unlimited public projects', icon: 'check' },
      { text: 'community access', icon: 'check' },
      { text: 'unlimited private projects', icon: 'check' },
      { text: 'dedicated phone support', icon: 'check' },
      { text: 'free subdomain', icon: 'check' },
      { text: 'multi status reports', icon: 'check' },
    ],
  },
];

  return (
    <div className="container pt-5">
      <div className="row">
        {plans.map((plan, index) => (
          <div key={index} className="col-lg-4 col-md-6 pb-2">
            <PricingCard {...plan}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

