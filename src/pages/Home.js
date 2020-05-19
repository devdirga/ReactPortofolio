import React from 'react'
import { Carousel, History, Feature, Images } from "./Utilities";

export default () => (
  <div>
    <div id="carouselio" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselio" data-slide-to="0" className="active"></li>
      </ol>
      <div className="carousel-inner">
        <Carousel
          ClassName="carousel-item active"
          SlideSource={Images['Table.fcc80ff3.svg']}
          SlideTitle="Hi there, I'm Software Engineer based on Surabaya, Indonesia" SlideDescription="Choose only two. Cheap, stable, fast." />
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
        Title1="Portfolio Starter. "
        Title2="Powered by React & Bootstrap. "
        Description="This boostrap theme was forked from my personal website. I added more features and decided to release it as an open source project. Check it out on GitHub or check out the screencast I did. 
        This boostrap theme was forked from my personal website. I added more features and decided to release it as an open source project. Check it out on GitHub or check out the screencast I did. "
        Image={Images['home-one.721e2ae2.svg']} />

      <History
        Alignment="imageLeft"
        Title1="Oh yeah, it's that good. "
        Title2="See for yourself."
        Description="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
        Image={Images['home-two.fb0d4886.svg']} />
      {/* <hr className="featurette-divider"></hr> */}

      <History
        Alignment="imageRight"
        Title1="Portfolio Starter. "
        Title2="Powered by React & Bootstrap. "
        Description="This boostrap theme was forked from my personal website. I added more features and decided to release it as an open source project. Check it out on GitHub or check out the screencast I did. 
        This boostrap theme was forked from my personal website. I added more features and decided to release it as an open source project. Check it out on GitHub or check out the screencast I did. "
        Image={Images['home-three.552134ec.svg']} />

      {/*       
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
 */}

    </div>
  </div>
)