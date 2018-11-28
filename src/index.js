import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import ViewMain from './views/MainView'

import 'antd/dist/antd.css'

import GlobalStyle from './styles/globalStyle'

ReactDOM.render((
  <Fragment>
    <GlobalStyle />
    <ViewMain />
  </Fragment>
), document.getElementById('root'))
