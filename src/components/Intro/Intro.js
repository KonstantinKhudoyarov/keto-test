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

export class Intro extends React.Component {
    render() {
        return (
            <section className="intro">
                {/* <IntroExplanation
                    description="Экспресс-тест от лучших диетологов"
                /> */}
                <section className="intro__main">
                    {/* <IntroTitle />
                    <IntroSubtitle /> */}
                    <ProgressBar />
                    <section className="controls">
                        <Checkbox
                            variant="Мясо"
                        />
                        {/* <Input
                            variant="height"
                            placeholder="Рост, см"
                        />
                        <Input
                            variant="weight"
                            placeholder="Вес, кг"
                        />
                        <Input
                            variant="age"
                            placeholder="Возраст, лет"
                        /> */}
                    </section>
                    <div className="intro__btn">
                        <Button />
                    </div>
                </section>
                <IntroFooter />
            </section>
        );
    }
}