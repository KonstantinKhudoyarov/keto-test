import React from 'react';
import './Button.scss';

export class Button extends React.Component {
    render() {
        const {image, variant, handleClick} = this.props;

        if(image) {
            return(
                <button className="button" onClick={handleClick}>
                    <img src="images/page-1-icon.svg" alt="button-icon" className="button__img"/>
                    {variant}
                </button>
            );
        }else {
            return(
                <button className="button" onClick={handleClick}>
                    {variant}
                </button>
            );
        }
    }
}