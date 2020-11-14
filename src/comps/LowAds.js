import React from 'react'

function LowAds() {
    return (
        <div className="home-page ">
            
            <div className="app-ribbon flex aic">
            <div className="img">
                <img className="bl"src="//statics.olx.com.pk/external/base/img/phone-app.png" alt=""/>
            </div>
            <div className="meta">
                <h2 className="title fontb s30 color">TRY THE OLX APP</h2>
                <h2 className="slogan font s18 color">Buy, sell and find just about anything using the app on your mobile.</h2>
            </div>
            <div className="line">
                <div className="line1"></div>
            </div>
            <div className="links">
                <h2 className="title fontb s15 color">GET YOUR APP TODAY</h2>
                <div className="as flex">
                    <a href="#" className="noul bl" ><img src="//statics.olx.com.pk/external/base/img/appstore_2x.png" alt=""/></a>
                    <a href="#" className="noul bl" ><img src="//statics.olx.com.pk/external/base/img/playstore_2x.png" alt=""/></a>
                </div>           
            </div>
            </div>
        </div>
    )
}

export default LowAds
