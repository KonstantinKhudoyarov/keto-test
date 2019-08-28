import React from 'react';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { Testable } from '../Testable/Testable';

export class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <div className="container">
                    <div className="header__wrap">
                        <Logo
                            description="Бесплатный тест для эффективного и безопасного похудения"
                        />
                        <Testable
                            description="Сейчас тест проходят:"
                        />
                    </div>
                </div>
            </section>
        );
    }
}