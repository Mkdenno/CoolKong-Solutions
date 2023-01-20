import React, {useState} from 'react';
import "./BriefItem.css"

export const  BriefItem = ({title, description}) =>{


    return (
      <div className="brief-item">
        <div className="vertical-section"></div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
}