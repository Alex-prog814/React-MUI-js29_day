import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PostsList from './components/PostsList/PostsList';
import PostContextProvider from './postContext';

const App = () => {
  return (
    <>
      <PostContextProvider>
        <Navbar />
        <PostsList />
        <Footer />
      </PostContextProvider>
    </>
  )
}

export default App