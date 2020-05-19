import React from 'react'
import { CorporateList } from "./Utilities";
import Iconsocial from '../assets/img/Iconsocial.svg'

export default () => (
  <div className="container marketing">
    <hr className="featurette-divider"></hr>
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Please feel free to contact us. <span className="text-muted">It's great</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div className="col-md-5">
        <img width="500" height="500" src={Iconsocial} alt="icon" />
      </div>
    </div>
    <div className="container-lg p-responsive">
      <div className="text-center py-7 py-md-8 py-lg-9 ">
        <h3 className="h3-mktg text-normal text-gray-light mb-4 lh-condensed">
          More than 2.1 million businesses and organizations use GitHub
          </h3>

      </div>
    </div>
    <hr className="featurette-divider"></hr>
  </div>
)