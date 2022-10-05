import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  // потом про props
  // допустим получили инфу с сервера
  let data = 'это информация с сервера'; 
  
  return (
    // рассказать про компонентный подход

    // про jsx (и что у него под капотом)
    // на самом деле JSX это

    // <MyButton color="blue"
    //   Нажми меня
    // </MyButton>

    // React.createElement(
    //   MyButton,
    //   {color: 'blue'},
    //   'Нажми меня'
    // )

    // про то что можно вернуть только один элемент а в нем может быть много
    // про react fragment <> </>

    <div className="app">
      <Header />
      <Main serverData={data}/>
      <Footer color={'green'}/>
    </div>
  );
}

export default App;

