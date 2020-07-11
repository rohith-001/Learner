import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby';

export default function DualInfoBlock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, deserunt. Reiciendis fugiat at quasi maiores eligendi libero blanditiis rem itaque, fugit obcaecati et nihil quibusdam, quas repudiandae animi id dolorum mollitia! Accusamus eaque quibusdam natus illo voluptas voluptate voluptatibus, corrupti odio quidem ipsa pariatur voluptates porro ipsum repellendus! Ratione, vel. Eius dolorum impedit fugiat repudiandae rerum accusamus itaque, et consequatur nihil quisquam. Dolores rerum a nobis aperiam blanditiis doloribus non nulla odio amet! Repellendus earum ipsam, accusantium possimus atque magnam iste pariatur maxime nisi odit excepturi similique error, molestiae culpa nostrum perferendis alias quasi aspernatur. Quam maiores dicta nam in.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam quam recusandae dolores minima fuga similique ullam repudiandae ex facere iure vel quos, voluptatem doloremque explicabo cum eum doloribus dolorum accusamus? Fugiat similique eaque, consequatur placeat voluptatibus incidunt corrupti sit, facilis, repudiandae a architecto dolores! Sequi magni repellendus consectetur voluptate.
                        </p>
                    </div>
                    <div className="col-4">
                    <div className="card bg-dark" style={{width: "18rem"}}>
                        <img src="https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261__340.jpg" className="card-img-top" alt="imag goes here"/>
                        <div className="card-body">
                            <h5 className="card-title text-white">Just click photos</h5>
                            <p className="card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem veritatis aut accusamus ab quo ipsam molestiae dolorem nobis sunt enim recusandae.</p>
                         <Link to="/"><button className="btn btn-warning btn-block">{heading}</button></Link>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
