import React from 'react'
import './CSS/InputOption.css'

function InputOption({Icon, title, color}) {
  return (
    <div className='inputOption__option'>
      {/* We are not passing the path to the icon, we are passing the component which can be rendered, hence we are directly going to use icon as a component! */}
      <Icon className="inputOption__icon" style={{'color':color}}/>
      {/* CSS me jab props pass karna ho to we don't use curley braces⚠ */}
      <h4 className="inputOption__title">
        {title}
      </h4>
    </div>
  )
}

export default InputOption