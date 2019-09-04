import React from 'react';
import './SeeResults.scss';
import { ProgressCircle } from '../ProgressCircle/ProgressCircle';
import { ProgressBarCalculation } from '../ProgressBar/ProgressBarCalculation';
import { IntroExplanation } from '../Intro/IntroExplanation';
import { Button } from '../Button/Button';
import { SeeResultsBar } from '../SeeResults/SeeResultsBar';
import { SeeResultsFooter } from '../SeeResults/SeeResultsFooter';
import { ResultCircle } from '../SeeResults/ResultCircle';
import { ResultContent } from '../SeeResults/ResultContent';

export class SeeResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStaticCircle: true
        }
    }

    render() {
        const { isResulCalculationEnd, result, handleClick } = this.props;
        const { height, weight, age } = this.props.userOptions;

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
                        <SeeResultsFooter
                            description={"Готово! Мы подобрали для вас эффективное средство, которое подходит вам на 95,3%"}
                        />
                        <div className="intro__btn">
                            <Button
                                variant={"Посмотреть результат"}
                                handleClick={handleClick}
                            />
                        </div>
                    </section>
                </section>
            );
        } else if (result) {
            return (
                <section className="intro">
                    <section className="intro__main intro__main_end">
                        <SeeResultsBar />
                        <IntroExplanation description="Поздравляем с прохождением теста! Вот ваш результат" />
                        <section className="result-calculation">
                            <ResultCircle
                                value={1}
                                description="Ваш идеальный вес (с учетом возраста)"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                            <ResultCircle
                                value={1}
                                description="Вам нужно сбросить"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                            <ResultCircle
                                value={1}
                                description="Подходящих для вас средств"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                        </section>
                        <ResultContent />
                    </section>
                </section>
            );
        } else {
            return null;
        }
    }
}