import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import CareerPage from './pages/career/CareerPage'
import MentorPage from './pages/mentor/MentorPage'
import CoursePage from './pages/course/CoursePage'
import LocationPage from './pages/location/LocationPage'

const App = () => {
  return (
    <>
    <Header />
    <img src="./img2.webp" alt="" srcset="" height="auto" width="100%" />
    <CareerPage />
    <MentorPage />
    <LocationPage />
    <CoursePage />
    <Footer />
    </>

  )
}

export default App