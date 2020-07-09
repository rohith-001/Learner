import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({img, title, subtitle, heroclass}) {
    return (
        <div>
            <BackgroundImage 
            className={heroclass}
            fluid={img}>

            <h1 className="text-white text-uppercase text-center display-4">{title}</h1>
            <div>
                <h4 className="text-white">{subtitle}</h4>
            </div>
            
            </BackgroundImage>
        </div>
    )
}
