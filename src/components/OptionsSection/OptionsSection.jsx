import React from 'react';
import { IntroExplanation } from '../Intro/IntroExplanation';
import { Input } from '../Input/Input';

const inputSettigs = [
    {
        variant: 'height',
        placeholder: 'Рост, см'
    },
    {
        variant: 'weight',
        placeholder: 'Вес, кг'
    },
    {
        variant: 'age',
        placeholder: 'Возраст, лет'
    }
];

export class OptionsSection extends React.Component {

    render() {
        const { isVisible, onSaveOptions } = this.props;

        if (isVisible) {
            return (
                <>
                    <IntroExplanation description="Укажите ваши основные параметры" />
                    <section className="controls">
                        {inputSettigs.map((input, index) => {
                            return <Input variant={input.variant} placeholder={input.placeholder} key={index} onChange={onSaveOptions} />
                        })}
                    </section>
                </>
            );
        } else {
            return null
        }
    }
}