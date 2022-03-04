import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';
import CardDetails from './AppDetails';

const Card = () => {
    return (
        <div className='card_container'>
            <h1 className='card_title'>Card</h1>
            <div className='placeholder'>Placeholder Image</div>
            <div className='accordion'>
                {accordionData.map(({title,content}) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    )
}

export default Card;