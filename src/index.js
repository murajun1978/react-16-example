import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
)
