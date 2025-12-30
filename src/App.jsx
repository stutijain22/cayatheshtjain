import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './screens/Header'
import Home from './screens/Home'
import KnowYourRA from './screens/KnowYourRA'
import TestimonialsPage from './screens/TestimonialsPage'
import FAQSection from './screens/FAQSection'
import PricingSection from './screens/PricingSection'
import ContactSection from './screens/ContactSection'
import Footer from './screens/Footer'
import LoginPage from './screens/LoginPage'
import SignupPage from './screens/SignupPage'
import ForgotPasswordPage from './screens/ForgotPasswordPage'
import './App.css'

import WhyUs from './screens/WhyUs'

function MainPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Home />
        <KnowYourRA />
        <WhyUs />
        <PricingSection />
        <FAQSection />
        <TestimonialsPage />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
