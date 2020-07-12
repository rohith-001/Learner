import React, { Component } from 'react'
import Heading from "../Heading"
import Img from "gatsby-image"

export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses: props.courses.edges,
            mycourses: props.courses.edges,
        }
    }
    render() {
        //console.log(this.state.courses)
        return (
            <section className="py-5">
                <div className="container">
                    <Heading title="Courses"/>
                    <div className="row">
                        {
                            this.state.mycourses.map(({node}) => {
                                return (
                                    <div
                                        key={node.id}
                                        className="c0-11 col-md-6 d-flex mx-auto my-3">
                                        <Img fixed={node.image.fixed}/>
                                        <div className="flex-grow-1 px-3 bg-card">
                                            <div className="d-flex justify-content-between ">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="mb-0 text-sucess">${node.price}</h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>{node.description.description}</small>
                                            </p>
                                            <button className="btn btn-warning snipcart-add-item"
                                              data-item-id={node.id}
                                              data-item-name={node.title}
                                              data-item-price={node.price}
                                              data-item-url="https://ecomy.netlify.app/"
                                              data-item-image={node.image.fixed.src}
                                            >Join now</button>
                                        </div>
                                    </div>
                                )
                                
                            })
                            
                        }
                    </div>
                </div>
            </section>
        )
    }
}
