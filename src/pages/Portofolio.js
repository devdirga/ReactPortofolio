import React from 'react';
import Imgdiff from '../assets/img/img-diff.svg'
import Imghistory from '../assets/img/img-history.svg'
import Imgblame from '../assets/img/img-blame.svg'

import Iconsocial from '../assets/img/Iconsocial.svg' 
import Iconskill from '../assets/img/Iconskill.svg' 

import SlideTable from '../assets/img/Table.svg'

export default () => (
  <div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={SlideTable} alt="icon" />
          <div className="container">
            <div className="carousel-caption text-top" style={{ bottom: '8rem !important' }}>
            <h1>Choose only two. Cheap, stable, fast.</h1>
              <p>Get your information technology journey with AlgoExpert. Get all you need  </p>
              <p><a className="btn btn-lg btn-primary" href="/#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={SlideTable} alt="icon" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="/#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={SlideTable} alt="icon" />
          <div className="container">
            <div className="carousel-caption text-right">
              <h1>Choose only two. Cheap, stable, fast.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="/#" role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
          <img width="140" height="140" src={Iconsocial} alt="icon" />
          <h2>Heading</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a className="btn btn-secondary" href="/#" role="button">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4">
          <img width="140" height="140" src={Iconskill} alt="icon" />
          <h2>Heading</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p><a className="btn btn-secondary" href="/#" role="button">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4">
          <img width="140" height="140" src={Iconsocial} alt="icon" />
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a className="btn btn-secondary" href="/#" role="button">View details &raquo;</a></p>
        </div>
      </div>

      <hr className="featurette-divider"></hr>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img width="400" height="400" src={Imgdiff} alt="icon" />
        </div>
      </div>
      <hr className="featurette-divider"></hr>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img width="400" height="400" src={Imghistory} alt="icon" />
        </div>
      </div>

      <hr className="featurette-divider"></hr>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img width="400" height="400" src={Imgblame} alt="icon" />
        </div>
      </div>

      <hr className="featurette-divider"></hr>

    </div>
  </div>
)