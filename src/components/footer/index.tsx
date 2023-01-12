import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-dark pt-1 mt-5 text-muted position-relative">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Stack Overflow</h6>
                        <p>Stack Overflow helps people find the answers they need, when they need them.
                            We're best known for our public Q&A platform that over 100 million people visit
                            every month to ask questions, learn, and share technical knowledge.</p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Channels</h6>
                        <p><Link to="" className="text-reset">Angular</Link></p>
                        <p><Link to="" className="text-reset">React</Link></p>
                        <p><Link to="" className="text-reset">Vue</Link></p>
                        <p><Link to="" className="text-reset">Laravel</Link></p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Product</h6>
                        <p><Link to="" className="text-reset">Teams</Link></p>
                        <p><Link to="" className="text-reset">Adverting</Link></p>
                        <p><Link to="" className="text-reset">Collectives</Link></p>
                        <p><Link to="" className="text-reset">Talent</Link></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Polices</h6>
                        <p><Link to="" className="text-reset">Legals</Link></p>
                        <p><Link to="" className="text-reset">Privacy</Link></p>
                        <p><Link to="" className="text-reset">Cookie settings</Link></p>
                        <p><Link to="" className="text-reset">Cookie policy</Link></p>
                    </div>
                </div>
            </div>
            <div className="text-center p-4">
                © 2023 Stack Exchange Inc
            </div>
        </footer>
    )
}

export default Footer
