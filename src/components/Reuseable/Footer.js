import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-block"> </div>
                    <div className="container-fluid"> 
                        <div className="row">
                            <div className="col-12 pt-2 mx-auto text-center bg-dark text-light">
                                <h6>Awesome copyright foooter &copy; 2020</h6>
                            </div>
                        </div>
                    </div>
            </footer>
        )
    }
}
