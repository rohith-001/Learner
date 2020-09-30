import React from 'react'
import Heading from './Heading'

export default function DualInfoBlock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-12 mb-4 col-md-4">
                    <div className="card bg-dark shadow-lg border-0">
                        <img src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_960_720.jpg" className="card-img-top" alt="imag goes here"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title text-dark">Ux Team</h5>
                            <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem veritatis aut accusamus ab quo ipsam molestiae dolorem nobis sunt enim recusandae.</p>
                         </div>
                        </div>
                    </div>
                    <div className="col-12 mb-4 col-md-4">
                    <div className="card bg-dark shadow-lg border-0">
                        <img src="https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_960_720.jpg" className="card-img-top" alt="imag goes here"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title text-dark">Ui Team</h5>
                            <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem veritatis aut accusamus ab quo ipsam molestiae dolorem nobis sunt enim recusandae.</p>
                         </div>
                        </div>
                    </div>
                    <div className="col-12 mb-4 col-md-4">
                    <div className="card bg-dark shadow-lg border-0">
                        <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg" className="card-img-top" alt="imag goes here"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title text-dark">Dev Team</h5>
                            <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem veritatis aut accusamus ab quo ipsam molestiae dolorem nobis sunt enim recusandae.</p>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
