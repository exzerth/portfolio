import React from 'react'
import layerImage from '../images/hero.png'

const WorkCards = () => {
  return (
    <>
        <div className="work-layer">
            <div className="overlay">
                <div className="layer-content">
                    <img className='layer-img' src={layerImage} alt="" />
                    <div className="layer-text">
                        <h4>Estendo</h4>
                        <p>
                            A generator retail company for the most popular generator brands.
                        </p>
                        <p>React, Bootstrap</p>
                        <div className="links">
                            <a style={{backgroundColor: "purple"}} href="https://estendo.netlify.app" target="blank">Live</a>
                            <a style={{backgroundColor: "green"}} href="https://github.com/exzerth/Estendo" target="blank">Code</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default WorkCards