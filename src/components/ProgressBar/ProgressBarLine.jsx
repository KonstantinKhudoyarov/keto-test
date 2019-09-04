import React from 'react';
import './ProgressBar.scss';

// const NUMBER_OF_QUESTIONS = 10;

export class ProgressBarLine extends React.Component {
    constructor(props) {
        super(props);
        this.NUMBER_OF_QUESTIONS = 10;
    }

    render() {
        let { isQuiz, currentQuestionIndex } = this.props;
        const lineFilling = {
            width: `${(100 / this.NUMBER_OF_QUESTIONS) * (isQuiz ? ++currentQuestionIndex : currentQuestionIndex)}%`
        }

        return (
            <section className="progress-bar__line">
                <div className="progress-bar__line-full" style={lineFilling}>

                </div>
            </section>
        );
    }
}