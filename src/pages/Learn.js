import React, { useState } from 'react'
import Iconsocial from '../assets/img/Iconsocial.svg'

function Example(props) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={() => setCount(count + 1)}>
                You click this {props.name} <span className="badge badge-light">{count}</span> times
            </button>
        </div>
    )
}


export default () => (
    <div className="container marketing">
        <hr></hr>
        <div className="row featurette">
            <div className="col-md-4">
                <Example name="buttonOne" />
            </div>
            <div className="col-md-4">
                <Example name="buttonTwo" />
            </div>
            <div className="col-md-4">
                <Example name="buttonThree" />
            </div>
        </div>
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading">Choose only two. Cheap, stable, fast. <span className="text-muted">It’ll blow your mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                <p className="lead"> GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 40 million developers</p>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                <p className="lead"> GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 40 million developers</p>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                <p className="lead"> GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 40 million developers</p>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                <p className="lead"> GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 40 million developers</p>
                <hr className="featurette-divider"></hr>
            </div>
            <div className="col-md-5">
                <img width="500" height="500" src={Iconsocial} alt="icon" />
            </div>
        </div>
        <hr className="featurette-divider"></hr>
    </div>
)