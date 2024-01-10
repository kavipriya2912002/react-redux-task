import React, {useState} from 'react'
import CartPage from './components/CartPage'
import ContextComponents from './utils/ContextComponents'

function App() {

  return <>
    <div className="container my-5">
      <ContextComponents>
        <CartPage/>
      </ContextComponents>
    </div>
  </>
}

export default App