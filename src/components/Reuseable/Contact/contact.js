import React from 'react'
import Heading from "../Heading"

export default function contact() {
    return (
        <section className="py-3">
            <Heading title="Contact us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/mwkrwvvq" method="post">
                    <div className="form-group">
                        <input type="text" name="name" id="name" className="form-control" placeholder="Your Name"/><br/>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Your email"/><br/>
                        <input type="text" name="mobile" id="mobile" className="form-control" placeholder="Your phone number"/><br/>
                        <input type="text" name="description" id="description" className="form-control" placeholder="Your message"/><br/>
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>
            </div>
        </section>
    )
}