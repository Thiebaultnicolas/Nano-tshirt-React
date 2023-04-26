import React from 'react'
import Landing from '../components/Landing'
import Commerce from '../components/Commerce'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Global.css'

const Home = () => {
    return (
        <>
        <div>
        <div className='first-screen'>
            <Header/>
            <Landing/>
        </div>
        </div>
       
        <div id="scroll" className='second-screen'>
             <Commerce/>
        </div>

        <div className='Footer-nano'>
            <Footer/>
        </div>
        </>
    )
}

export default Home
