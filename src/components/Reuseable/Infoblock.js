import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"
 
export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="row">
                        <div className="col-10 col-sm-8 mx-auto text-center">
                            <p className="lead text-white mb-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <Link to="/about/">
                                <button className="btn btn-warnin btn-lg">{heading}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>           
    )
}

