import React from 'react';
import "./Prod.css"

 export const Prod = ({title, description, image}) => {
    return (
      <div
        className="prod"
      >
        <div className='prod-list-img'>
            <img src={image} alt="prod-img" />
        </div>
        <div className="prod-list-bg"></div>

        <div className="prod-list-desc">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    );
}