
//By fixing the height of div we have solved the problem of 'shifting layout'

import React from 'react'

export default function Alert(props) {
  return (
  <div style={{height:'50px'}}>
   {props.Art && <div>
       <div className={`alert alert-${props.Art.type}`} role="alert">
        {props.Art.msg}
  </div>
    </div>}

    </div>
  )
}
