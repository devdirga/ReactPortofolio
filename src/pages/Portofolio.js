import React from 'react'
import { Images } from "./Utilities";
import { Portofolio, Resume } from "./Utilities";

export default () => (
  <div className="container marketing">

    <div className="resume-divider"></div>

    <Resume
      Title1="Let me introduce my portofolio. "
      Title2=""
      Description="Achievement so far is a struggle. Trying to give the best and try to be useful to others."
      Image={Images['home-three.552134ec.svg']} />
    <hr className="featurette-divider"></hr>

    <Portofolio
      Title1="User Auth,"
      Title2=" Codeigniter User Auth Example."
      Description="Template app for user auth ready development. Using Codeigniter Framework. Feature implemented : JWT authentication, Low-Overhead, ORM, Chace"
      Image={Images['github-two.affcaace.svg']}
      Linked="https://github.com/devdirga/UserAuthCodeig"
    />

    <Portofolio
      Title1="RESTFull Api."
      Title2=" Codeigniter Restfull implementation."
      Description="Api Template for user, menu and role management using JWT."
      Image={Images['github-two.affcaace.svg']}
      Linked="https://github.com/devdirga/Restfull" />

    <Portofolio
      Title1="Travel Api,"
      Title2=" Api Template With Phalcon Framework."
      Description="Api Template of travel agent (Flight, Train, Bus, etc) using Phalcon framework. Feature implemented : JWT authentication -Low-Overhead -ORM -Transactions -Cache."
      Image={Images['github-two.affcaace.svg']}
      Linked="https://github.com/devdirga/TravelApi" />

    <Portofolio
      Title1="Donations Midtrans Codeigniter, "
      Title2="Donation App Template."
      Description="Donation App Template (Insert, Update, Delete donate ) using Codeigniter framework. Feature implemented : JWT authentication -ORM -Etc."
      Image={Images['github-two.affcaace.svg']}
      Linked="https://github.com/devdirga/DonateMidCodeig" />

    <Portofolio
      Title1="Laravel Crud Template, "
      Title2="App Template For Crud user data Laravel Framework"
      Description="Api Template of Crud User (Insert, Update, Delete, etc) using Laravel framework. Feature implemented : -JWT authentication -ORM -Etc"
      Image={Images['github-two.affcaace.svg']}
      Linked="https://github.com/devdirga/LaravelSimpleCrud" />

    <Portofolio
      Title1="Golang Human Resouce Management, "
      Title2="App Template For HRM System With Golang knot Framework."
      Description="Api Template of HRM System (Leave, Remote, Emergency-Leave, Overtime, etc) using Golang framework. Feature implemented : -JWT authentication -ORM -Etc"
      Image={Images['github-two.affcaace.svg']}
      Linked="https://github.com/devdirga/GoHrm" />

  </div>


)
