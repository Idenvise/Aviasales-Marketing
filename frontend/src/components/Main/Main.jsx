import './Main.css'
import icon from '../../images/logo.svg'
import React from 'react';

export default function Main() {

    const [email, setEmail] = React.useState('');

    function checkEmail(e) {
        setEmail(e.target.value);
    }

    return(
        <main className='main'>
            <section className='promo'>
                <div className='promo__wrapper'>
                    <img className='promo__image' src={icon} alt='промо иконка'/> 
                    <h1 className='promo__title'>авиасейлс</h1>
                </div>
                <h2 className='promo__heading40'>ВСЕ КРУТО! ТЕПЕРЬ</h2>
                <h2 className='promo__heading40 promo__heading40grad'>ВЫИГРЫВАЙ ПУТЕШЕСТВИЕ</h2>
                <p className='promo__offer'>Чтобы участвовать в розыгрыше путешествия, оставь актуальную почту и поделись с друзьями</p>
                <div className='promo__forms-wrapper'>
                    <form className={`promo__form-email ${email !== '' ? 'green-border' : ''}`} noValidate>
                        <div className='promo__step-title-wrapper'>
                            <p className={`promo__step ${email !== '' ? 'green-background' : ''}`}>1</p>
                            <p className='promo__form-title'>Оставь актуальный email</p>
                        </div>
                        <input className={`promo__email-input ${email !== '' ? 'green-border' : ''}`} placeholder='Ввести email' type='email' onChange={checkEmail} ></input>
                        <span className='promo__email-validation'>Неверный формат почты</span>
                        <button className='promo__button button' type='submit'>Я оставил</button>
                    </form>
                    <form className='promo__form-social'>

                    </form>
                </div>
            </section>
        </main>
    )
}