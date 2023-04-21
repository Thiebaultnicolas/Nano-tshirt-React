import React from 'react'
import Landing from '../components/Landing'
import Commerce from '../components/Commerce'
import Header from '../components/Header'


const Home = () => {
    return (
        <>
        <header>
        <div className='first-screen'>
            <Header/>
            <Landing/>
        </div>
        </header>
       
        <div id="scroll" className='second-screen'>
             <Commerce/>
        </div>
        </>
    )
}

export default Home
