import React from 'react'
import { Carousel, History, Feature, Images } from "./Utilities";

export default () => (
  <div>
    <div id="carouselio" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselio" data-slide-to="0" className="active"></li>
        <li data-target="#carouselio" data-slide-to="1"></li>
        <li data-target="#carouselio" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <Carousel
          ClassName="carousel-item active"
          SlideSource={Images['Table.4c54df5b.svg']}
          SlideTitle="Choose only two. Cheap, stable, fast." SlideDescription="Get your information technology journey with AlgoExpert. Get all you need" />
        <Carousel
          ClassName="carousel-item"
          SlideSource={Images['Table.4c54df5b.svg']}
          SlideTitle="Choose only two. Cheap, stable, fast a." SlideDescription="Get your information technology journey with AlgoExpert. Get all you need" />
        <Carousel
          ClassName="carousel-item"
          SlideSource={Images['Table.4c54df5b.svg']}
          SlideTitle="Choose only two. Cheap, stable, fast." SlideDescription="Get your information technology journey with AlgoExpert. Get all you need" />
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
      <History
        Alignment="imageRight"
        Title1="First featurette heading. "
        Title2="It’ll blow your mind."
        Description="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
        Image={Images['img-history.5ce04363.svg']} />
      {/* <hr className="featurette-divider"></hr> */}
      <History
        Alignment="imageLeft"
        Title1="Oh yeah, it's that good. "
        Title2="See for yourself."
        Description="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
        Image={Images['img-history.5ce04363.svg']} />
      {/* <hr className="featurette-divider"></hr> */}
      <History
        Alignment="imageRight"
        Title1="Oh yeah, it's that good. "
        Title2="See for yourself."
        Description="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
        Image={Images['img-history.5ce04363.svg']} />
      {/* <hr className="featurette-divider"></hr> */}
      <div className="row">
        <Feature
          Icon={Images['Iconsocial.d8e6023d.svg']}
          Title="Heading"
          Description="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna." />
        <Feature
          Icon={Images['Iconsocial.d8e6023d.svg']}
          Title="Heading"
          Description="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna." />
        <Feature
          Icon={Images['Iconsocial.d8e6023d.svg']}
          Title="Integrated"
          Description="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna." />
      </div>
    </div>
  </div>
)