import React from 'react'
import { NavLink } from 'react-router-dom'

const Description = props => <p>{props.message}</p>

/*
Carousel,
Class to arrange div in classic ways
*/
export class Carousel extends React.Component {
    render() {
        return (
            <div className={this.props.ClassName}>
                {/* <img src={this.props.SlideSource} alt="icon" /> */}
                <img src={require("../assets/img/background.svg")} height="200px" alt="background"/>
                <div className="container">
                    <div className="carousel-caption text-top" style={{ bottom: '8rem !important' }}>
                        <h1>{this.props.SlideTitle}</h1>
                        {Description({ message: this.props.SlideDescription })}
                        <p><NavLink className="btn btn-lg btn-primary" to='/resume'>Resume</NavLink></p>

                    </div>
                </div>
            </div>
        )
    }
}

/*
History,
Class to arrange div in classic ways
*/
export class History extends React.Component {
    render() {
        if (this.props.Alignment === 'imageRight') {
            return (
                <div className="row featurette adjustment-marg-bot-50">
                    <div className="col-md-7">
                        <h2 className="featurette-heading adjustment">{this.props.Title1}<span className="text-muted">{this.props.Title2}</span></h2>
                        <p className="lead">{this.props.Description}</p>
                    </div>
                    <div className="col-md-5">
                        <img src={this.props.Image} alt="icon" width="300px" />
                        {/* <img src={require("../assets/img/tools.svg")} width="300px" alt="history" /> */}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row featurette adjustment-marg-bot-50">
                    <div className="col-md-5">
                        <img src={this.props.Image} alt="icon" width="300px" />
                    </div>
                    <div className="col-md-7">
                        <h2 className="featurette-heading adjustment">{this.props.Title1}<span className="text-muted">{this.props.Title2}</span></h2>
                        <p className="lead">{this.props.Description}</p>
                    </div>

                </div>
            )
        }

    }
}

/*
Feature,
Class to arrange div in classic ways
*/
export class Feature extends React.Component {
    render() {
        return (
            <div className="col-lg-4">
                <img width="140" height="140" src={this.props.Icon} alt="icon" />
                <h2>{Description({ message: this.props.Title })}</h2>
                {Description({ message: this.props.Description })}
                <p><a className="btn btn-secondary" href="/#" role="button">View details &raquo;</a></p>
            </div>
        )
    }
}

export class Resume extends React.Component {
    render() {
        if (this.props.Alignment === 'imageRight') {
            return (
                <div className="row featurette adjustment-marg-bot-50">
                    <div className="col-md-7">
                        <h2 className="featurette-heading adjustment">{this.props.Title1}<span className="text-muted">{this.props.Title2}</span></h2>
                        <p className="lead">{this.props.Description}</p>
                    </div>
                    <div className="col-md-5">
                        <img src={this.props.Image} alt="icon" width="200px" />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row featurette adjustment-marg-bot-50">
                    <div className="col-md-3">
                        <img src={this.props.Image} alt="icon" width="200px" />
                    </div>
                    <div className="col-md-9">
                        <h2 className="featurette-heading adjustment">{this.props.Title1}<span className="text-muted">{this.props.Title2}</span></h2>
                        <p className="lead">{this.props.Description}</p>
                    </div>

                </div>
            )
        }

    }
}

export class Portofolio extends React.Component {
    render() {
        if (this.props.Alignment === 'imageRight') {
            return (
                <div className="row featurette adjustment-marg-bot-50">
                    <div className="col-md-7">
                        <h2 className="featurette-heading adjustment">{this.props.Title1}<span className="text-muted">{this.props.Title2}</span></h2>
                        <p className="lead">{this.props.Description}</p>
                    </div>
                    <div className="col-md-5">
                        {/* <img src={this.props.Image} alt="icon" width="100px" /> */}
                        <img src={require("../assets/img/github-logo.svg")} width="100px" alt="history" />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row featurette adjustment-marg-bot-50">
                    <div className="col-md-3">
                        {/* <img src={this.props.Image} alt="icon" width="100px" /> */}
                        <img src={require("../assets/img/github-logo.svg")} width="100px" alt="history" />
                    </div>
                    <div className="col-md-9">
                        <h4 className="adjustment">{this.props.Title1}<span className="text-muted">{this.props.Title2}</span></h4>
                        <p className="lead">{this.props.Description}</p>
                        <a href={this.props.Linked}>Linked</a>
                    </div>

                </div>
            )
        }

    }
}

/*
CorporateList ,
class to arrange image in classic ways
*/
export class CorporateList extends React.Component {
    render() {
        return (
            <img alt={this.props.Alt} className="logo-img-sm px-2 px-sm-4 px-md-5 my-md-3" src={this.props.Source} />
        )
    }
}

/*
Function get all image assets
param(require.context)
*/
function getAssetsImage(r) {
    console.log(r.keys().map(r))
    return [...(r.keys().map(r)).values()].reduce((obj, item) => {
        obj[item.replace('/static/media/', '')] = item
        return obj
    }, {})
}

/*
Images from getAssetsImage with path parameter
param(require.context, source)
*/
export const Images = getAssetsImage(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/))