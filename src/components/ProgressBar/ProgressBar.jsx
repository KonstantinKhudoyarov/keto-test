import React from 'react';
import './ProgressBar.scss';
import { ProgressBarTitle } from './ProgressBarTitle';
import { ProgressBarPage } from './ProgressBarPage';
import { ProgressBarLine } from './ProgressBarLine';

export class ProgressBar extends React.Component {

    render() {
        const { isQuiz, currentQuestionIndex } = this.props;
        return (
            <section className="progress-bar">
                <div className="progress-bar__circle">
                    <img src="images/page-1-icon.svg" className="progress-bar__circle-img" />
                </div>
                <div className="progress-bar__header">
                    <ProgressBarTitle
                        title="Процесс выполнения"
                    />
                    <ProgressBarPage
                        isQuiz={isQuiz}
                        currentQuestionIndex={currentQuestionIndex}
                    />
                </div>
                <ProgressBarLine
                    isQuiz={isQuiz}
                    currentQuestionIndex={currentQuestionIndex}
                />
            </section>
        );
    }
}