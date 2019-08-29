import React from 'react';
import './Input.scss';

export class Input extends React.Component {
    render() {
        const { variant, placeholder } = this.props;

        return (
            <label className="input">
                <input className={`input__control input__control_${variant}`} type="text" placeholder={placeholder} />
            </label>
        );
    }
}