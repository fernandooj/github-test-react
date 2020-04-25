import React from "react"
import {GlobalStyle} from "./GlobalStyles"      /// Resetea los estilos de los navegadores
import {BrowserRouter} from 'react-router-dom';
import {Provider}      from 'react-redux';
import MainRoutes      from './routes/MainRoutes'
import store           from './redux/store.js'
import {getGits}       from './redux/actionCreator' 
import 'antd/dist/antd.css';

//////  llamo al store de los repos
store.dispatch(getGits()) /////////
//////////////////////////////////

const Home =()=>{
  return(
    <BrowserRouter>
      <Provider store={store}> 
        <MainRoutes  />
        <GlobalStyle />
      </Provider> 
    </BrowserRouter>
  )
}
export default Home

 