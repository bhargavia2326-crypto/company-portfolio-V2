import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { EditorialPhilosophy } from './components/EditorialPhilosophy';
import { BentoServices } from './components/BentoServices';
import { DarkAIFeature } from './components/DarkAIFeature';
import { CybersecuritySection } from './components/CybersecuritySection';
import { SoftwareSection } from './components/SoftwareSection';
import { AgriTechSection } from './components/AgriTechSection';
import { ProductStudio } from './components/ProductStudio';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { TechnologyCloud } from './components/TechnologyCloud';
import { FounderSection } from './components/FounderSection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

// Dedicated Subpages
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AgriTechPage } from './pages/AgriTechPage';
import { ProductStudioPage } from './pages/ProductStudioPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [initialContactType, setInitialContactType] = useState('Artificial Intelligence');
  const { isDark } = useTheme();

  // Handle URL hash changes for easy deep-linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home', 
        'services', 
        'solutions', 
        'ai-ml', 
        'software', 
        'cybersecurity', 
        'agritech', 
        'product-studio', 
        'products', 
        'projects', 
        'about', 
        'contact', 
        'privacy', 
        'terms'
      ];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (defaultType = 'Artificial Intelligence') => {
    setInitialContactType(defaultType);
    setIsContactModalOpen(true);
  };

  return (
    <div className={`min-h-screen ${
      isDark ? 'bg-[#090a10] text-[#f3f4f6]' : 'bg-[#f9f9f6] text-[#1b1c19]'
    } selection:bg-[#4e39e5] selection:text-white font-sans antialiased transition-colors duration-300`}>
      {/* Scroll Progress Indicator Bar */}
      <ScrollProgressBar currentRoute={currentRoute} />

      {/* Top Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Content Area */}
      <main>
        {currentRoute === 'home' && (
          <>
            <Hero
              onStartProject={() => handleOpenContact('Artificial Intelligence')}
              onExploreSolutions={() => navigateTo('solutions')}
            />
            <CapabilityStrip
              onSelectCapability={(title) => {
                if (title.toLowerCase().includes('cyber')) navigateTo('cybersecurity');
                else if (title.toLowerCase().includes('agri')) navigateTo('agritech');
                else navigateTo('solutions');
              }}
            />
            <EditorialPhilosophy />
            <BentoServices onNavigate={navigateTo} />
            <DarkAIFeature />
            <CybersecuritySection />
            <SoftwareSection />
            <AgriTechSection />
            <ProductStudio />
            <ProjectsSection
              onSelectProject={() => navigateTo('projects')}
              onViewAll={() => navigateTo('projects')}
            />
            <ProcessTimeline />
            <TechnologyCloud />
            <FounderSection />
            <FAQ />
            <FinalCTA
              onStartProject={() => handleOpenContact('Artificial Intelligence')}
              onScheduleConsultation={() => handleOpenContact('Custom Software Engineering')}
            />
          </>
        )}

        {currentRoute === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenContact={() => handleOpenContact()}
          />
        )}

        {(currentRoute === 'solutions' || currentRoute === 'ai-ml') && (
          <SolutionsPage
            onNavigate={navigateTo}
            onOpenContact={() => handleOpenContact('Artificial Intelligence & Machine Learning')}
          />
        )}

        {currentRoute === 'cybersecurity' && (
          <div className="pt-20">
            <CybersecuritySection />
            <div className="max-w-4xl mx-auto px-6 py-12 text-center">
              <button
                onClick={() => handleOpenContact('Zero-Trust Cybersecurity')}
                className="px-8 py-3.5 bg-[#4e39e5] hover:bg-[#3d29cf] text-white rounded-xl font-medium shadow-sm transition-colors cursor-pointer"
              >
                Inquire About Cybersecurity Architecture
              </button>
            </div>
          </div>
        )}

        {currentRoute === 'software' && (
          <div className="pt-20">
            <SoftwareSection />
            <div className="max-w-4xl mx-auto px-6 py-12 text-center">
              <button
                onClick={() => handleOpenContact('Custom Software Engineering')}
                className="px-8 py-3.5 bg-[#4e39e5] hover:bg-[#3d29cf] text-white rounded-xl font-medium shadow-sm transition-colors cursor-pointer"
              >
                Start a Software Engineering Project
              </button>
            </div>
          </div>
        )}

        {currentRoute === 'agritech' && (
          <AgriTechPage
            onNavigate={navigateTo}
            onOpenContact={() => handleOpenContact('AgriTech & Rural IoT')}
          />
        )}

        {(currentRoute === 'product-studio' || currentRoute === 'products') && (
          <ProductStudioPage
            onNavigate={navigateTo}
            onOpenContact={() => handleOpenContact('Product Studio Venture')}
          />
        )}

        {currentRoute === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenContact={() => handleOpenContact()}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenContact={() => handleOpenContact()}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'privacy' && (
          <LegalPage initialTab="privacy" onNavigate={navigateTo} />
        )}

        {currentRoute === 'terms' && (
          <LegalPage initialTab="terms" onNavigate={navigateTo} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Project Inquiry Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialProjectType={initialContactType}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

