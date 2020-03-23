import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../assets/styles/views/Login.scss'


const Login = ({ api }) => {

    const [form, setValues] = useState({
        username: '',
    })

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(form)
    }

    return (
        <div className='loginview__container'>
            <div className="login__container">
                <div className="welcome__container">
                    <h1 className='welcome__text'>Bienvenidos</h1>
                </div>
                <div className="form__container">
                    <form action="" className='login__form'>
                        <h1 className='login__title'>Iniciar Sesión</h1>
                        <input 
                            name='username'
                            type='text' 
                            className='input user__input' 
                            id='user__input' 
                            placeholder='Usuario' 
                            onChange={handleInput}
                            />
                        <input 
                            name='password'
                            type="password" 
                            className='input password__input'
                            id='password__input'
                            placeholder='Contraseña'
                            onChange={handleInput}
                            />
                        <button 
                            type='submit'
                            className='submit__button'
                            onClick={handleSubmit}
                            >
                                Ingresar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    api: state.api
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)