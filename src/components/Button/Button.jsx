import React from 'react';
import './Button.scss';

export class Button extends React.Component {
    render() {
        const {image, value} = this.props;

        if(image) {
            return(
                <button className="button">
                <img src="images/page-1-icon.svg" alt="button-icon" className="button__img"/>
                Пройти тест
            </button>
            );
        }else {
            return(
                <button className="button">
                Ответить
            </button>
            );
        }
    }
}