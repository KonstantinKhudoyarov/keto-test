import React from 'react';
import './Intro.scss';
import { IntroExplanation } from './IntroExplanation';
import { IntroTitle } from './IntroTitle';
import { IntroSubtitle } from './IntroSubtitle';
import { Button } from '../Button/Button';
import { IntroFooter } from './IntroFooter';

export class Intro extends React.Component {
    render() {
        return (
            <section className="intro">
                <IntroExplanation />
                <section className="intro__main">
                    <IntroTitle />
                    <IntroSubtitle />
                    <div className="intro__btn">
                        <Button />
                    </div>
                </section>
                <IntroFooter />
            </section>
        );
    }
}