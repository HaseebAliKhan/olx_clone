import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { colors } from '@material-ui/core';
import UpAds from "./UpAds";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from 'react-bootstrap/ModalHeader';
import firebase from "./firebase";






const useStyles = makeStyles({
    s00: {
        fontSize: "40px",
        fontWeight: "bolder",
        cursor: "pointer",
        border: "0px"
    },
    arro: {
        border: 0,
        flex: 1,
        padding: '10px',
        border: "0px",
        background: "#fff"
    },

    s01: {
        fontSize: "27px",
        fontWeight: "bolder"
    },

    go: {
        flex: 1,
        padding: '7px',
        border: '0px',
        background: '#002f34',
        maxWidth: '50px',
        color: "#ffffff",
        cursor: "pointer",
        fontSize: "45px",
        fontWeight: "bolder"

    },
    go1: {
        fontSize: "45px",
        padding: '7px',
    }
});
function SignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
let SignOut = () => {
    firebase.auth().signOut();
  }
function Header() {

    const nav = [
        { ID: 1, label: "Mobile Phones" },
        { ID: 1, label: "cars" },
        { ID: 1, label: "Motorcycle" },
        { ID: 1, label: "Houses" },
        { ID: 1, label: "TV-VIDEO-AUDIO" },
        { ID: 1, label: "Tablets" },
        { ID: 1, label: "Land & Plots" }
    ];
    const classes = useStyles();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <React.Fragment>
            
            <div LOG IN>
                {/* <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button> */}

                <Modal show={show} onHide={handleClose}>
                    {/* <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" className="but0" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer> */}
              
                    <div>
                        <div className="log log1">
                            <div className="log2">
                            <Modal.Header className="logspn leftPath" closeButton/>
                                {/* <span className="logspn" data-aut-id="btnClose">
                                    <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd">
                                        < path className="leftPath" d="M878.336 85.333l-366.336 366.315-366.336-366.315h-60.331v60.331l366.336 366.336-366.336 366.336v60.331h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-366.315-366.336 366.315-366.336v-60.331z"  closeButton/>
                                    </svg>
                                </span> */}
                                    
                                <div data-aut-id="loginModal">
                                    <div className="logMod">
                                        <div className="logSlid logSlid-Hi lodSlid-initialized" dir="ltr">
                                            <div className="logSlid1">
                                                <div className="logSlid2" style={{ width: '2576px', opacity: 1, transform: 'translate3d(-368px, 0px, 0px)' }}>
                                                    <div data-index={-1} tabIndex={-1} className="logSlid-slide logSlid-cloned" aria-hidden="true" style={{ width: '368px' }} />
                                                    <div data-index={0} className="logSlid-slide logSlid-active logSlid-current" tabIndex={-1} aria-hidden="false" style={{ outline: 'none', width: '368px' }}>
                                                        <div><div className="logSlid-pic" tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                                                            <div className="logSlid-pic1">
                                                                <picture>
                                                                    <source type="image/webp" srcSet="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp" />
                                                                    <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png" className alt="" />
                                                                </picture>
                                                            </div>
                                                            <h3 className="logSlid-pic1Line">
                                                                <span>Help make OLX safer place to buy and sell</span>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div data-index={1} tabIndex={-1} className="logSlid-slide logSlid-cloned" aria-hidden="true" style={{ width: '368px' }}>
                                                        <div>
                                                            <div className="logSlid-pic" tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                                                                <div className="logSlid-pic1">
                                                                    <picture>
                                                                        <source type="image/webp" srcSet="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp" />
                                                                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png" className alt="" />
                                                                    </picture>
                                                                </div>
                                                                <h3 className="logSlid-pic1Line">
                                                                    <span>Contact and close deals faster</span>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <div data-index={2} tabIndex={-1} className="logSlid-slide logSlid-cloned" aria-hidden="true" style={{ width: '368px' }}>
                                                        <div>
                                                            <div className="logSlid-pic" tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                                                                <div className="logSlid-pic1">
                                                                    <picture>
                                                                        <source type="image/webp" srcSet="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp" />
                                                                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.png" className alt="" />
                                                                    </picture>
                                                                </div>
                                                                <h3 className="logSlid-pic1Line">
                                                                    <span>Save all your favorite items in one place</span>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="logSlidDot" style={{ display: 'block' }}>
                                                <li className="logSlid-active">
                                                    <button>1</button>
                                                </li>
                                                <li className>
                                                    <button>2</button>
                                                </li>
                                                <li className>
                                                    <button>3</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <span className="sliderLeft sliderLeft-1" data-aut-id="prevSlide">
                                                <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd">
                                                    <path className="leftPath" d="M684.685 85.333l-407.352 396.501v60.331l407.352 396.501h61.982v-60.331l-376.339-366.336 376.339-366.336v-60.331z" />
                                                </svg>
                                            </span>
                                            <span className="sliderRight sliderRight-1" data-aut-id="nextSlide">
                                                <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd">
                                                    <path className="leftPath" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div data-aut-id="facebookLogin" style={{ transition: 'opacity 0.5s ease 0s', width: '100%' }}>
                                            <button type="button" data-aut-id className="face faceA faceB faceC faceD" >
                                                <div className="facePath">
                                                    <svg width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd">
                                                        <path className="facePath1 facePath2" d="M512 85.325c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.605c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM616.789 301.133v57.6h-61.312c-15.403 0-28.8 14.848-28.8 31.616v0 63.147h90.069v53.845h-90.069v215.509h-67.115v-215.509h-78.592v-53.845h78.592v-74.325c0-42.752 34.517-78.037 76.672-78.037v0h80.555z" />
                                                    </svg>
                                                </div>
                                                <span>Continue with Facebook</span>
                                            </button>
                                        </div>
                                    </div>
                                    <button type="button" data-aut-id className="face faceA faceB faceC faceD" >
                                        <div className="facePath">
                                            <svg width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd">
                                                <path className="facePath1 facePath2" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM515.772 325.594c47.061-2.176 91.221 17.92 127.189 45.995-15.403 17.109-31.275 33.621-48.341 49.024-43.221-29.312-104.747-37.717-147.968-3.797-61.867 41.899-64.768 140.971-5.205 186.155 57.856 51.541 167.296 25.941 183.381-52.864-36.309-0.555-72.661 0-108.885-1.152-0.171-21.291-0.213-42.453-0.171-63.659 60.587-0.213 121.259-0.299 181.973 0.171 3.627 49.92-3.157 102.955-34.347 144.256-47.317 65.28-142.379 84.352-216.576 56.32-74.411-27.691-127.232-104.789-120.917-183.424 1.664-96.128 91.861-180.309 189.867-177.024z" />
                                            </svg>
                                        </div>
                                        <span>Continue with Google</span>
                                    </button>
                                    <div className="Line">
                                        <span>We won't share your personal details with anyone</span>
                                    </div>
                                    <p className="Line2">
                                        <span>If you continue, you are accepting </span>
                                        <a href="https://help.olx.com.pk/hc/en-us" target="_blank" rel="noopener noreferrer" className="_24rr9" data-aut-id>
                                            <span>OLX Terms and Conditions and Privacy Policy</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className="header fixed flex aic">
                <Link to="/">
                    <div className="logo">
                        <img src={require("../UI/olx-logo-vector.png")} alt="" />
                    </div>
                </Link>
                <div className="location rel flex aic">
                    <SearchOutlinedIcon className={classes.go1} />
                    <input className="label a15 font " placeholder="Your Location" value="pakistan" />
                    <KeyboardArrowDownSharpIcon className={classes.s00} />
                </div>
                <div className="search flex aic">
                    <input type="text" placeholder="Find Cars, Moblie Phone and more..." className="Vi query font s15" />
                    <SearchOutlinedIcon className={classes.go} />
                </div>
                <div className="actions flex aic">
                    <Link className="fontb s18 noulh noul" onClick={handleShow}>Login</Link>
                    <Button className="sell bor flex aic color" onClick={handleShow} >
                        <div className=" ico s22" />
                        <AddRoundedIcon className={classes.s01} />
                        <h2 className="b s15 ico font">SELL</h2>
                    </Button>
                </div>
            </div>
            <div className="hnav  flex aic view-cates color">

                <h2 className="s15 b  font">ALL CATEGORIES</h2>
                <KeyboardArrowDownSharpIcon className={classes.s00} />

                {
                    nav.map(item => {
                        return (
                            <Link to={"/browser/" + item.ID} className="neon noulh  color font s15" y >{item.label}</Link>
                        )
                    })
                }
            </div>
            <div className="hclr" />
        </React.Fragment>
    )
}


export default Header;

