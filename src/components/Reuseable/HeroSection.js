import React from 'react'
import illus from "../../images/illustration.png"

export default function HeroSection({title, subtitle}) {
    return (
        <div className="row mt-5 align-items-center mx-0 p-0">
            <div className="col-12 mt-5 col-md-5 col-lg-6 order-md-2 mx-0 p-0">
             <img src={illus} alt="illustration" className="img-fluid mt-md-5"/>
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1 mt-md-0 mt-4">
                <h1 className="text-uppercase text-center Primary__font">{title}</h1>
                <h4 className="text-center">{subtitle}</h4>
            </div>
        </div>
    )
}
