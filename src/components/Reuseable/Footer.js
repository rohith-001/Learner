import React, { Component } from 'react'
import uxunicorn from '../../images/uxunicorn.png'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-block bg-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 mt-1 text-right">
                                <h6>Devloped by </h6>
                            </div>
                            <div className="col-6">
                                <img src={uxunicorn} className="img-fluid" alt="uxunicorn" width="100px" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
