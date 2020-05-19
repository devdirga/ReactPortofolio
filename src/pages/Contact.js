import React from 'react'
import { CorporateList } from "./Utilities";
import Iconsocial from '../assets/img/Iconsocial.svg'

export default () => (
  <div className="container marketing">
    <hr className="featurette-divider"></hr>
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Please feel free to contact us. <span className="text-muted">It’ll blow your mind.</span></h2>
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
        <ul className="d-flex flex-justify-center flex-items-center flex-wrap list-style-none mt-2 mt-md-3 grayscale">
          <li><CorporateList Alt="Airbnb" Source="https://github.githubassets.com/images/modules/site/logos/airbnb-logo.png" /> </li>
          <li><CorporateList Alt="SAP" Source="https://github.githubassets.com/images/modules/site/logos/ibm-logo.png" /></li>
          <li><CorporateList Alt="IBM" Source="https://github.githubassets.com/images/modules/site/logos/google-logo.png" /></li>
          <li><CorporateList Alt="Google" Source="https://github.githubassets.com/images/modules/site/logos/paypal-logo.png" /></li>
          <li><CorporateList Alt="PayPal" Source="https://github.githubassets.com/images/modules/site/logos/nasa-logo.png" /></li>
          <li><CorporateList Alt="Walmart" Source="https://github.githubassets.com/images/modules/site/logos/walmart-logo.png" /></li>
          <li><CorporateList Alt="Bloomberg" Source="https://github.githubassets.com/images/modules/site/logos/bloomberg-logo.png" /></li>
          <li><CorporateList Alt="Spotify" Source="https://github.githubassets.com/images/modules/site/logos/spotify-logo.png" /></li>
          <li><CorporateList Alt="Swift" Source="https://github.githubassets.com/images/modules/site/logos/swift-logo.png" /></li>
          <li><CorporateList Alt="Facebook" Source="https://github.githubassets.com/images/modules/site/logos/facebook-logo.png" /></li>
          <li><CorporateList Alt="NASA" Source="https://github.githubassets.com/images/modules/site/logos/nasa-logo.png" /></li>
        </ul>
      </div>
    </div>
    <hr className="featurette-divider"></hr>
  </div>
)