import React from 'react'
import { Images } from "./Utilities";
import { History, Resume } from "./Utilities";

export default () => (
    <div className="container marketing">
        <div className="resume-divider"></div>

        <Resume
            Title1="Let me introduce my experience. "
            Title2=""
            Description="Achievement so far is a struggle. Trying to give the best and try to be useful to others."
            Image={Images['home-two.fb0d4886.svg']} />
        <hr className="featurette-divider"></hr>

        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <ul className="timeline">
                        <li>
                            <a className="lead" target="_blank" href="https://www.eaciit.com/"><strong>Eaciit Ltd</strong></a>
                            <a href="#" className="float-right">2019</a>
                            <p className="lead"><strong>As a senior software engineer</strong>, my responsibility are build web base hrm system with php framework using microsoft dynamic ax2012 as backend and aif as web service.</p>
                            <p className="lead"><strong>Technology used :</strong> microsoft vscode, microsoft vs 2017, microsoft dynamic ax 2012, mongodb, golang,  nodejs and reactjs.</p>
                        </li>
                        <li>
                            <a className="lead" target="_blank" href="https://www.bm.co.id">PT Bimasakti Multi Sinergi</a>
                            <a className="lead" href="#" className="float-right">2018</a>
                            <p className="lead"><strong>As a software engineer</strong>, my responsibility here are build and maintenance system. I was develop web and mobile application. create new application from scratch, add some modul and fixing bugs. </p>
                            <p className="lead"><strong>Technology used :</strong> android, jdbc, tomcat,  json, php, codeIgniter, laravel, postgresql, mysql, aws, nodejs. </p>
                        </li>
                        <li>
                            <a className="lead" target="_blank" href="https://www.bm.co.id">PT Bimasakti Multi Sinergi</a>
                            <a className="lead" href="#" className="float-right">2017</a>
                            <p className="lead"><strong>As fastravel programmer</strong>, my jobs as fastravel programmer was as developer  on the fastravel business of bimasakti. on this year, bimasakti divided its business to three main businesses, including fastravel. </p>
                            <p className="lead"><strong>Technology used :</strong> jdbc, tomcat,  json, selenium, php, codeIgniter, postgresql, mysql, aws, memcache, nodejs. </p>
                        </li>
                        <li>
                            <a className="lead" target="_blank" href="https://www.bm.co.id">PT Bimasakti Multi Sinergi</a>
                            <a className="lead" href="#" className="float-right">2017</a>
                            <p className="lead"><strong>As a bussines application programmer </strong>, my job was developing and maintaining user applications and core system of bimasakti's products such as end user applications, api, core module, biller modules and supporting services. I have a lot of experiences on connecting bimasakti's internal system with partner system via various mechanism from web services, xml, json or another forms like wsdl etc on this job. </p>
                            <p className="lead">What i was developing and maintaining : Core and biller module, Airline parser, Flight system, Payment gateway system, Ibank parser</p>
                            <p className="lead"><strong>Technology used :</strong> java desktop (swing), Java servlet, Java socket, jdbc,tomcat, jaxb, gson, selenium, php, codeIgniter, Laravel, postgresql, mysql, aws,  memcache, nodejs, reactjs. </p>
                        </li>
                        <li>
                            <a className="lead" target="_blank" href="http://www.triklin-rekatama.co.id">PT Triklin rekatama</a>
                            <a className="lead" href="#" className="float-right">2011</a>
                            <p className="lead"><strong>As an application programmer</strong>, my job was developing and maintaining user application of PT Telkomvision ( building and maintenance provisioning system ) for new customer. </p>
                            <p className="lead"><strong>Technology used :</strong> oracle 11g ,php , codeigniter, apache web server</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
)
