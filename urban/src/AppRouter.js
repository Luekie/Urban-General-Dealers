import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';
import FAQs from './pages/FAQs';
import Sustainability from './pages/Sustainability';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/blog" component={Blog} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/careers" component={Careers} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/sustainability" component={Sustainability} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
