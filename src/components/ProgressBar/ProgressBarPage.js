import React from 'react';
import './ProgressBar.scss';

export class ProgressBarPage extends React.Component {
    render() {

        return (
            <span className="page-counter">
                <span className="page-counter__current">1</span>
                <span className="page-counter__divider">/</span>
                <span className="page-counter__all">10</span>
            </span>
        );
    }
}