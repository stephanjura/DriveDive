import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { auth } from './firebase/firebaseConfig';
import Loader from './component/loader';
import LogoWhite from './assets/images/logo-white.png';


// All Headers
const Header1 = React.lazy(() => import('./layouts/header/Header1'));

// All Footers
const FooterNew01 = React.lazy(() => import('./layouts/footer/footer-new-01'));
const FooterStyle01 = React.lazy(() => import('./layouts/footer/footer-style-01'));

// Back to Top
const BackTop = React.lazy(() => import('./component/back-top'));

// Home
const HomeIndex = React.lazy(() => import('./pages/modern-home1/index'));

// Car Pages
const CarGrid = React.lazy(() => import('./pages/car/car-grid'));
const CarListing = React.lazy(() => import('./pages/car/car-list'));
const CarDetails = React.lazy(() => import('./pages/car/car-details'));
const CarDetailsTwo = React.lazy(() => import('./pages/car/car-details-02'));



// Error Page
const Error404 = React.lazy(() => import('./pages/error404/error404'));

// Other Pages
const ModernAbout = React.lazy(() => import('./pages/modern-about'));
const PageLeftSideBar = React.lazy(() => import('./pages/page-sidebar/page-left-sidebar'));
const PageRightSideBar = React.lazy(() => import('./pages/page-sidebar/page-right-sidebar'));
const PageBothSideBar = React.lazy(() => import('./pages/page-sidebar/page-both-sidebar'));
const AddCar = React.lazy(() => import('./pages/add-car'));

// Elements
const ElementsActionBox = React.lazy(() => import('./elements/action-box'));
const ElementsAccordion = React.lazy(() => import('./elements/accordion'));
const ElementsButton = React.lazy(() => import('./elements/button'));
const ElementsBlog = React.lazy(() => import('./elements/blog'));
const ElementsClientLogo = React.lazy(() => import('./elements/client-logo'));
const ElementsContentBox = React.lazy(() => import('./elements/content-box'));
const ElementsCountdown = React.lazy(() => import('./elements/countdown'));
const ElementsCounter = React.lazy(() => import('./elements/counter'));
const ElementsRangeSlider = React.lazy(() => import('./elements/rangeslider'));
const ElementsTestimonial = React.lazy(() => import('./elements/testimonial'));
const ElementsVehicleShowcase = React.lazy(() => import('./elements/vehicle-showcase'));
const ElementsTabs = React.lazy(() => import('./elements/tabs'));
const ElementsForm = React.lazy(() => import('./elements/form'));
const ElementsSocialIcon = React.lazy(() => import('./elements/social-icon'));
const ElementsImageGallery = React.lazy(() => import('./elements/image-gallery'));
const ResponsiveMenu = React.lazy(() => import('./elements/menu'));
const ElementsFeatureInfo = React.lazy(() => import('./elements/feature-info'));
const ElementsInfoBox = React.lazy(() => import('./elements/infobox'));
const ElementsList = React.lazy(() => import('./elements/list'));
const ElementsVehiclesType = React.lazy(() => import('./elements/vehicles-type'));
const ElementsVehiclesSearch = React.lazy(() => import('./elements/vehicles-search'));
const ElementsVideo = React.lazy(() => import('./elements/video'));

// Login Page
const Login = React.lazy(() => import('./pages/login/login')); 

function App() {
  const location = useLocation();
  const hideFooter = location.pathname !== '';

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      const provider = new auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="main-wrapper">
        
        <Routes>
          <Route path="/" element={<Header1 className="header-transprent" siteLogo={LogoWhite} />}>
            {/* Home */}
            <Route index element={<HomeIndex />} />
            {/* Login */}
            <Route path="/login" element={<Login />} />
           
            {/* Car Pages */}
            <Route path="/car-grid" element={<CarGrid />} />
            <Route path="/car-list" element={<CarListing />} />
            <Route path="/car-details/:id" element={<CarDetails />} />
            <Route path="/car-details-02/:id" element={<CarDetailsTwo />} />
            {/* Error Page */}
            <Route path="/*" element={<Error404 />} />
            {/* Other Pages */}
            <Route path="/page-left-sidebar" element={<PageLeftSideBar />} />
            <Route path="/page-right-sidebar" element={<PageRightSideBar />} />
            <Route path="/page-both-sidebar" element={<PageBothSideBar />} />
            <Route path="/about-modern" element={<ModernAbout />} />
            <Route path="/add-car" element={<AddCar />} />
            {/* Elements */}
            <Route path="/elements-action-box" element={<ElementsActionBox />} />
            <Route path="/elements-accordion" element={<ElementsAccordion />} />
            <Route path="/elements-button" element={<ElementsButton />} />
            <Route path="/elements-blog" element={<ElementsBlog />} />
            <Route path="/elements-client-logo" element={<ElementsClientLogo />} />
            <Route path="/elements-content-box" element={<ElementsContentBox />} />
            <Route path="/elements-counter" element={<ElementsCounter />} />
            <Route path="/elements-countdown" element={<ElementsCountdown />} />
            <Route path="/elements-range-slider" element={<ElementsRangeSlider />} />
            <Route path="/elements-testimonial" element={<ElementsTestimonial />} />
            <Route path="/elements-vehicle-showcase" element={<ElementsVehicleShowcase />} />
            <Route path="/elements-tab" element={<ElementsTabs />} />
            <Route path="/elements-socialicon" element={<ElementsSocialIcon />} />
            <Route path="/elements-form" element={<ElementsForm />} />
            <Route path="/elements-image-gallery" element={<ElementsImageGallery />} />
            <Route path="/elements-list" element={<ElementsList />} />
            <Route path="/elements-menu" element={<ResponsiveMenu />} />
            <Route path="/elements-feature-info" element={<ElementsFeatureInfo />} />
            <Route path="/elements-infobox" element={<ElementsInfoBox />} />
            <Route path="/elements-vehicles-type" element={<ElementsVehiclesType />} />
            <Route path="/elements-vehicles-search" element={<ElementsVehiclesSearch />} />
            <Route path="/elements-video" element={<ElementsVideo />} />
          </Route>
        </Routes>

        {/* All Footer */}
        {hideFooter && (
          <Routes>
            {/* Footer Default */}
            <Route path="/*" element={<FooterNew01 />} />
            {/* Footer Style 01 */}
            <Route path="/modern-home2" element={<FooterStyle01 />} />
          </Routes>
        )}

        {/* Back to Top */}
        <BackTop />
      </div>
    </Suspense>
  );
}

export default App;
