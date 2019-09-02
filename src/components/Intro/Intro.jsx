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

export class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isIntro: true
        }
    }

    render() {

        return (
            <div>
                <IntroPage isVisible={this.state.isIntro}/>
                <section className="intro">
                    <section className="intro__main">
                        <ProgressBar />
                        {/* <section className="controls"> */}
                            {/* <Checkbox
                                variant="Мясо"
                            /> */}
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
                        {/* </section> */}
                        <ResultCalculation/>
                        <div className="intro__btn">
                            <Button
                                image={this.state.isIntro}
                            />
                        </div>
                    </section>
                    <IntroFooter />
                </section>
            </div>
        );
    }
}