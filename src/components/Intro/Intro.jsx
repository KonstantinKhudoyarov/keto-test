import React from 'react';
import './Intro.scss';
import { IntroExplanation } from './IntroExplanation';
import { IntroTitle } from './IntroTitle';
import { IntroSubtitle } from './IntroSubtitle';
import { Button } from '../Button/Button';
import { IntroFooter } from './IntroFooter';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
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