import React from 'react'
import { CorporateList } from "./Utilities";
import Iconsocial from '../assets/img/Iconsocial.svg'
import { Images } from "./Utilities";
import { Portofolio, Resume } from "./Utilities";

export default () => (
  <div className="container marketing">

    <div className="resume-divider"></div>

    <Resume
      Title1="Have any questions? "
      Title2="Contact Us"
      Description="We are happy can help you"
      Image={Images['home-three.552134ec.svg']} />
    <hr className="featurette-divider"></hr>

  </div>
)