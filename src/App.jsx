import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
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
import BankAccountDetails from './screens/DisclaimerPages/BankAccountDetails'
import RegisteredResearchAnalyst from './screens/DisclaimerPages/RegisteredResearchAnalyst'
import CodeOfConduct from './screens/DisclaimerPages/CodeOfConduct'
import ComplaintsData from './screens/DisclaimerPages/ComplaintsData'
import EscalationMatrix from './screens/DisclaimerPages/EscalationMatrix'
import GeneralDisclaimer from './screens/DisclaimerPages/GeneralDisclaimer'
import GrievanceRedressal from './screens/DisclaimerPages/GrievanceRedressal'
import InvestorCharter from './screens/DisclaimerPages/InvestorCharter'
import PrivacyPolicy from './screens/DisclaimerPages/PrivacyPolicy'
import StandardDisclosures from './screens/DisclaimerPages/StandardDisclosures'
import TermsOfUse from './screens/DisclaimerPages/TermsOfUse'
import Refund from './screens/DisclaimerPages/Refund'
import MITC from './screens/DisclaimerPages/MITC'
import PANVerification from './screens/PanVerification'
import './App.css'

import WhyUs from './screens/WhyUs'

function RootLayout() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function HomeContent() {
  return (
    <>
      <Home />
      <KnowYourRA />
      <WhyUs />
      <PricingSection />
      <FAQSection />
      <TestimonialsPage />
      <ContactSection />
    </>
  )
}

import { requestForToken, onMessageListener } from './firebase';
import { ToastProvider, useToast } from './components/ToastContext';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const { showToast } = useToast();

  React.useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
    requestForToken();
    onMessageListener()
      .then((payload) => {
        showToast(`${payload.notification.title}: ${payload.notification.body}`);
      })
      .catch((err) => console.log('failed: ', err));
  }, [showToast]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomeContent />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/bank-account-details" element={<BankAccountDetails />} />
          <Route path="/registered-research-analyst" element={<RegisteredResearchAnalyst />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/complaints-data" element={<ComplaintsData />} />
          <Route path="/escalation-matrix" element={<EscalationMatrix />} />
          <Route path="/general-disclaimer" element={<GeneralDisclaimer />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
          <Route path="/investor-charter" element={<InvestorCharter />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/standard-disclosures" element={<StandardDisclosures />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/mitc" element={<MITC />} />
          <Route path="/pan-verification" element={<PANVerification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App
