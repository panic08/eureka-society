import React, {useEffect, useRef} from 'react';

import './index.scss'

import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import main from "./components/UI/App.module.scss";
import {type} from "os";

function App() {


  return (
          <div className="App">
              <header style={{padding: "50px 0", margin: "-30px 0"}}>

                  <div  className={main.wrapper}>
                    <div className={main.container}>

                        <div className={main.image}>
                        <img src={require("./components/UI/img/img_4.png")}/>
                        </div>


                        <div className={main.input}>
                            <input placeholder="Поиск"/>
                        </div>

                        <div className={main.bell}>
                        <img src={require("./components/UI/img/bell.png")}/>
                        </div>
                        <div className={main.info}>
                        <img src={require("./components/UI/img/default_ava.jpg")}/>
                        </div>
                        <div className={main.arrowDown}>
                            <img src={require("./components/UI/img/down.png")}/>
                        </div>
                    </div>
                  </div>

              </header>


              <main>
              <Routes>
                  <Route path={"/"} element={<Home/>}/>
              </Routes>
              </main>

          </div>
  );
}

export default App;
