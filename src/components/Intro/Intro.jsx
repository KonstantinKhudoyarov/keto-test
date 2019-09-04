import React from 'react';
import './Intro.scss';
import { ResultCalculation } from '../ResultCalculation/ResultCalculation';
import { IntroPage } from './IntroPage';
import { QuizPage } from '../QuizPage/QuizPage';

export class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userOptions: {},
            isIntro: true,
            isQuiz: false,
            isResulCalculate: false
        }
    }

    passTheTest = () => {
        this.setState({
            isIntro: false,
            isQuiz: true
        });
    }

    onSaveUserOptions = (e) => {
        this.setState({
            userOptions: { ...this.state.userOptions, [e.target.dataset.variant]: e.target.value }
        });
    }

    calculateResult = () => {
        this.setState({
            isQuiz: false,
            isResulCalculate: true
        });
    }

    render() {

        return (
            <>
                <IntroPage
                    isVisible={this.state.isIntro}
                    passTheTest={this.passTheTest}
                />
                <QuizPage
                    isIntro={this.state.isIntro}
                    isVisible={this.state.isQuiz}
                    onSaveUserOptions={this.onSaveUserOptions}
                    calculateResult={this.calculateResult}
                />
                <ResultCalculation
                    isVisible={this.state.isResulCalculate}
                />
            </>
        );
    }
}