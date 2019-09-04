import React from 'react';
import './SeeResults.scss';
import { ProgressCircle } from '../ProgressCircle/ProgressCircle';
import { ProgressBarCalculation } from '../ProgressBar/ProgressBarCalculation';
import { IntroExplanation } from '../Intro/IntroExplanation';
import { Button } from '../Button/Button';
import { SeeResultsBar } from '../SeeResults/SeeResultsBar';
import { SeeResultsFooter } from '../SeeResults/SeeResultsFooter';

export class SeeResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStaticCircle: true
        }
    }

    render() {
        const { isResulCalculationEnd } = this.props;
        if (isResulCalculationEnd) {
            return (
                <section className="intro">
                    <section className="intro__main intro__main_result">
                        <SeeResultsBar />
                        <IntroExplanation description="Ожидайте, мы рассчитываем результаты теста" />
                        <section className="result-calculation">
                            <ProgressCircle
                                delay={0}
                                duration={2}
                                description="Анализ антропометрических данных"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                            <ProgressCircle
                                delay={2}
                                duration={2}
                                description="Анализ питания и образа жизни"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                            <ProgressCircle
                                delay={4}
                                duration={4}
                                description="Подбор подходящего средства"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                        </section>
                        <SeeResultsFooter />
                        <div className="intro__btn">
                            <Button
                                variant={"Посмотреть результат"}
                            />
                        </div>
                    </section>
                </section>
            );
        } else {
            return null;
        }
    }
}