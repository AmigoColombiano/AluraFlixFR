import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import NewVideo from './Pages/NewVideo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { VideoProvider } from './Contexts/VideoContext';

function App() {
  return (
    <VideoProvider>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-video" component={NewVideo} />
      </Switch>
      <Footer />
    </VideoProvider>
  );
}

export default App;