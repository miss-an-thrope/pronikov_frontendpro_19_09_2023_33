// React tools
import React from 'react';

//Scss
import '../assets/scss/components/App.scss';

//Blocks imports
import Header from './blocks/Header';
import Aside from './blocks/Aside';
import Main from './blocks/Main';
import Footer from './blocks/Footer';

class App extends React.Component {
    constructor () {
      super();
    }

    render() {

      return (
        <>
          <div className='container'>
            <Header></Header>
            <Aside></Aside>
            <Main></Main>
            <Footer></Footer>
          </div>
        </>
      );
    }

  }

export default App
