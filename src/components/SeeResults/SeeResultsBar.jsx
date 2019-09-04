import React from 'react';
import '../ProgressBar/ProgressBar.scss';
import { ProgressBarTitle } from '../ProgressBar/ProgressBarTitle';
import { ProgressBarPage } from '../ProgressBar/ProgressBarPage';
import { SeeResultsLine } from '../SeeResults/SeeResultsLine';
import { SeeResultsIcon } from '../SeeResults/SeeResultsIcon';

export class SeeResultsBar extends React.Component {

    render() {
        const { isOptions, isQuiz, currentQuestionIndex } = this.props;

        return (
            <section className="progress-bar">
                <SeeResultsIcon />
                <div className="progress-bar__header">
                    <ProgressBarTitle
                        title="Готово"
                    />
                </div>
                <SeeResultsLine />
            </section>
        );
    }
}