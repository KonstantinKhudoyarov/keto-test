import React from 'react';
import './Input.scss';

export class Input extends React.Component {
    render() {
        const { variant, placeholder, onChange } = this.props;

        return (
            <label className="input">
                <input className={`input__control input__control_${variant}`} type="text" placeholder={placeholder} onInput={onChange} data-variant={variant} />
            </label>
        );
    }
}