import React from 'react';
import './ProgressBar.scss';

export class ProgressBarCircle extends React.Component {

    render() {
        let { isOptions, isQuiz, currentQuestionIndex, isResulCalculate } = this.props;
        let image;
        if (isQuiz || isOptions) {
            image = <img src={`images/page-${isQuiz ? ++currentQuestionIndex : currentQuestionIndex}-icon.svg`} className="progress-bar__circle-img" />
        }
        if (isResulCalculate) {
            image = <img src={`images/percent.png`} className="progress-bar__circle-img" />
        }

        return (
            <div className="progress-bar__circle">
                {image}
            </div>
        );
    }
}