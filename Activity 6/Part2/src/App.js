import React from 'react';
import ContactUs from './Contact';
import AboutSite from './AboutSite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/about" component = {AboutSite} />
            <Route path="/contact" component = {ContactUs} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
