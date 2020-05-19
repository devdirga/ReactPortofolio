import React from 'react'
import { Images } from "./Utilities";
import { History } from "./Utilities";

export default () => (
    <div className="container marketing">
        <hr className="featurette-divider"></hr>
        <History
            Title1="First featurette heading. "
            Title2="It’ll blow your mind."
            Description="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
            Image={Images['Iconsocial.d8e6023d.svg']} />
        <hr className="featurette-divider"></hr>
    </div>
)
