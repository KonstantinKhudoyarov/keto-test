import React from 'react';
import './ResultCalculation.scss';
import { ProgressCircle } from '../ProgressCircle/ProgressCircle';

export class ResultCalculation extends React.Component {
    render() {
        return (
            <section className="result-calculation">
                <ProgressCircle
                    delay={0} 
                    duration={2}
                    description="Анализ антропометрических данных"
                    modificator="progress-circle__circle_anthro"
                />
                <ProgressCircle
                    delay={2} 
                    duration={2}
                    description="Анализ питания и образа жизни"
                    modificator="progress-circle__circle_nutrition"
                />
                <ProgressCircle
                    delay={4} 
                    duration={4}
                    description="Подбор подходящего средства"
                    modificator="progress-circle__circle_total"
                />
            </section>
        );
    }
}