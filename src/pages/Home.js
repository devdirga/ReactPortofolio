import React from 'react'
import { Carousel, History, Images } from "./Utilities";

export default () => (
  <div>
    <div id="carouselio" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselio" data-slide-to="0" className="active"></li>
      </ol>
      <div className="carousel-inner">
        <Carousel
          ClassName="carousel-item active"
          SlideSource={Images['Table.4c54df5b.svg']}
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
        Title1="Who am I?"
        Title2=" Personality."
        Description="I am responsible for several projects, where I am on the program development and implementation team. The team can make deliveries on time for software products. I was very motivated by the challenge of completing the project earlier than the tempo given and managing the team to reach the target."
        Image={Images['home-one.721e2ae2.svg']} />

      

      <hr className="featurette-divider"></hr>

      <History
        Alignment="imageLeft"
        Title1="How was my work experience?"
        Title2=""
        Description="I graduated from brawijaya university majoring in computer science. Then I went straight to work in 2011 at PT Triklin-Rekatama, Jakarta, an information technology consulting company. I also worked at PT Bimasakti Surabaya in a payment gateway company. Many important things I learned there. It was an amazing experience. And finally I worked in an international company Eaciit Ltd until now."
        Image={Images['home-two.fb0d4886.svg']} />
      <hr className="featurette-divider"></hr>

      <History
        Alignment="imageRight"
        Title1="Portfolio."
        Title2=""
        Description="This boostrap theme was forked from my personal website. I added more features and decided to release it as an open source project. Check it out on GitHub or check out the screencast I did. "
        Image={Images['home-three.552134ec.svg']} />
      <hr className="featurette-divider"></hr>

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