import React from 'react'
import Home from './Home '


const Preview = ({aiResponse}) => {
  return (
    <div className='container'>

      <div className="left">

        <div className="upperLeft">
            <Home />
        </div>
        <div className="lowerLeft">
            description
        </div>

      </div>

      <div className="right">

        <div className="header">👁️</div>
        <div className="code"> ${aiResponse}</div>

      </div>

    </div>
  )
}

export default Preview
