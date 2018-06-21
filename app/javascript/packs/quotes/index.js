import React from 'react'
import ReactDOM from 'react-dom'
import Quotes from '../../components/Quotes'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('quotes');
  const data = JSON.parse(node.getAttribute('data'));

  const element = <Quotes quotes={data} />;

  ReactDOM.render(
    element,
    node
  )
})
