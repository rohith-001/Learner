import React from 'react'
import Heading from "../Heading"

export default function contact() {
    return (
        <section className="my-5 py-5">
            <Heading title="CONTACT US"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/mwkrwvvq" method="post">
                    <div className="form-group">
                        <input type="text" name="name" id="name" className="shadow form-control" placeholder="Your Name"/><br/>
                        <input type="email" name="email" id="email" className="shadow form-control" placeholder="Your email"/><br/>
                        <input type="text" name="mobile" id="mobile" className="shadow form-control" placeholder="Your phone number"/><br/>
                        <textarea class="shadow form-control" placeholder="Your message" rows="3"></textarea>                    
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}