import React from 'react';
import './Intro.scss';
import { ResultCalculation } from '../ResultCalculation/ResultCalculation';
import { IntroPage } from './IntroPage';
import { QuizPage } from '../QuizPage/QuizPage';
import { SeeResults } from '../SeeResults/SeeResults';

export class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userOptions: {},
            isIntro: true,
            isQuiz: false,
            isResulCalculate: false,
            isResulCalculationEnd: false,
            result: false,
            isQuizChecked: false
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

    onResulCalculationEnd = () => {
        this.setState({
            isResulCalculate: false,
            isResulCalculationEnd: true
        });
        console.log('end calculation');
    }

    showResult = () => {
        this.setState({
            isResulCalculationEnd: false,
            result: true
        });
    }

    activateQuizCheckbox = (e) => {
        this.setState({
            isQuizChecked: true
        });
    }

    deactivateQuizCheckbox = () => {
        this.setState({
            isQuizChecked: false
        });
    }

    validateUserOptions = () => {
        const { height, weight, age } = this.state.userOptions;
        let isError = false;

        if (height === undefined || height < 140 || height > 200) {
            isError = true;
        }

        if (weight === undefined || weight < 55 || weight > 140) {
            isError = true;
        }

        if (age === undefined || age < 18 || age > 80) {
            isError = true;
        }

        return isError;
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
                    validateUserOptions={this.validateUserOptions}
                    activateQuizCheckbox={this.activateQuizCheckbox}
                    isQuizChecked={this.state.isQuizChecked}
                    deactivateQuizCheckbox={this.deactivateQuizCheckbox}
                />
                <ResultCalculation
                    isQuiz={this.state.isQuiz}
                    isResulCalculate={this.state.isResulCalculate}
                    onResulCalculationEnd={this.onResulCalculationEnd}
                />
                <SeeResults
                    isResulCalculationEnd={this.state.isResulCalculationEnd}
                    result={this.state.result}
                    userOptions={this.state.userOptions}
                    handleClick={this.showResult}
                />
            </>
        );
    }
}