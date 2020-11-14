import React from 'react'
import {Link} from "react-router-dom"
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
    s:{
      border:"1px",
      borderRadius:"4px"
    },
});


function Footer() {
    const classes = useStyles();
    return (
        <>
        <div className="footer flex">
            <div className="block  flex flex-col">
                <h2 className="title s14 fontb color">POPULAR CATEGORIES</h2>
                <Link to="/" className="noul1 font s12 color">Car</Link>
                <Link to="/" className="noul1 font s12 color">Flat for rent</Link>
                <Link to="/" className="noul1 font s12 color">Jobs</Link>
                <Link to="/" className="noul1 font s12 color">Mobile Phones</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="title s14 fontb color">TRENFING SEARCHES</h2>
                <Link to="/" className="noul1 font s12 color">Bikes</Link>
                <Link to="/" className="noul1 font s12 color">Watches</Link>
                <Link to="/" className="noul1 font s12 color">Books</Link>
                <Link to="/" className="noul1 font s12 color">Dogs</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="title s14 fontb color">ABOUT US</h2>
                <Link to="/" className="noul1 font s12 color">About OLX Group</Link>
                <Link to="/" className="noul1 font s12 color">OLX Blog</Link>
                <Link to="/" className="noul1 font s12 color">Contact Us</Link>
                <Link to="/" className="noul1 font s12 color">OLX for Businesses</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="title s14 fontb color">OLX</h2>
                <Link to="/" className="noul1 font s12 color">Help</Link>
                <Link to="/" className="noul1  font s12 color">Sitemap</Link>
                <Link to="/" className="noul1 font s12 color">Legal & Privacy information</Link>
            </div>
            <div className="fw-block block flex flex-col">
                <h2 className=" s14 fontb color">FOLLOW US</h2>
                <div className="social-icon ">
                    <FacebookIcon className={classes.s}/>
                    <TwitterIcon/>
                    <PlayCircleOutlineIcon/>
                    <InstagramIcon/>
                </div>
                <div className="app-ad flex">
                    <a href="#" className="noul bl" ><img src="//statics.olx.com.pk/external/base/img/appstore_2x.png" alt=""/></a>
                    <a href="#" className="noul bl" ><img src="//statics.olx.com.pk/external/base/img/playstore_2x.png" alt=""/></a>
                </div>
            </div>
        </div>
        <div className="footerb flex">
            <h2 className="cfff font b s12">Other Countries <span className="sp">India - South Africa - Indonesia</span> </h2>
            <h2 className="r font b s12 ">Free Classifieds in Pakistan. <span className="sp">© 2006-2020 OLX</span> </h2>
        </div>
        </>
    )
}

export default Footer;
