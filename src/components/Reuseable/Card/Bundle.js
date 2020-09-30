import React from 'react'
import Heading from "../Heading"
import Img from "gatsby-image"

export default function Bundle({bundle}) {
    return (<div className="container mt-5 mb-5">
            <Heading title="Bundles"/>
             <div className="row">
                        {bundle.edges.map(({node}) => {
                                return (
                                    <div
                                        key={node.id}
                                        className="col-11 col-md-5 shadow-lg bg-light d-flex mx-auto my-3 p-0">
                                        <Img fixed={node.image.fixed}/>
                                        <div className="flex-grow-1 px-3 pt-2">
                                            <div className="d-flex mb-3 justify-content-between ">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="mb-0">${node.price}</h6>
                                            </div>
                                            <button className="btn btn-primary mt-4 snipcart-add-item"
                                              data-item-id={node.id}
                                              data-item-name={node.title}
                                              data-item-price={node.price}
                                              data-item-url="https://minimalism-opc.netlify.app/"
                                              data-item-image={node.image.fixed.src}
                                            >Join now</button>
                                        </div>
                                    </div>
                                )})}
                </div>
            </div>
    )
}




