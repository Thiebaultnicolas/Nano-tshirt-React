import React from 'react'
/*import Landing from '../components/Landing'*/
import Header from '../components/Header'
import '../styles/Landing.css'

const Home = () => {
    return (
        <>
        <header>
        <div className='first-screen'>
            <h1>Nano Shirt</h1>
            <h2>Habillez-vous avec style sans vous ruiner !</h2>
            <br/>
            <a class="button-line" href="#scroll">ICI</a> 
        </div>
        </header>

        <div id="scroll" className='second-screen'>
             <Header/>
        </div>
        </>
    )
}

export default Home
