import React from 'react'
import Header from '../components/Header'
import Skip from '../components/Skip'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Site from '../components/Site'
import Port from '../components/Port'
import Footer from '../components/Footer'
import Main from "../components/Main"
import Contact from '../components/Contact'


const HomeView = () => {
  return (
    <>
        <Skip /> Skip
        <Header /> Header
        <Main /> Main 
          <Intro /> Intro
          <Skill /> Skill
          <Site /> Site
          <Port /> Port
          <Contact /> Contact
        <Footer /> Footer
       
        
    </>
    
  )
}

export default HomeView
