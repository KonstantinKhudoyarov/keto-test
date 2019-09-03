import React from 'react';
import { IntroExplanation } from '../Intro/IntroExplanation';
import { IntroTitle } from '../Intro/IntroTitle';
import { IntroSubtitle } from '../Intro/IntroSubtitle';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';

let Index = 0;

export class QuizSection extends React.Component {

    render() {
        const { isVisible, description, checkBoxSettings } = this.props;

        if (isVisible) {
            return (
                <>
                    <IntroExplanation description={description} />
                    <section className="controls">
                        {checkBoxSettings.map((item, index) => {
                            return <Checkbox key={++Index} variant={item} />
                        })}
                    </section>
                </>
            );
        } else {
            return null
        }
    }
}