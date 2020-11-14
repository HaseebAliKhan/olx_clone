import React, {useEffect, useState} from 'react';
import AdItem from "./AdItem"
import Adcard from "./Adcard"
import {Link} from "react-router-dom"
function HomePage() {


    let interval;
    let data = 20
    const _list = [];
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false)



    const more = (old) => {
        data = data + 4
        for(let i = 0; i < data; i++){
            _list.push(<Adcard cardss={true}/>);
        }
        
        setList(_list)
        
        
    
    }
    useEffect(()=>{
        if(loading){
            interval = setInterval(() => {
                for(let i = 0; i < data; i++){
                    _list.push(<AdItem placeholder={true}/>);
                }
                setList(_list);
            }, 1000);
          clearInterval(interval)
            
        }else{
            for(let i = 0; i < data; i++){
                _list.push(<Adcard cardss={true}/>);
            }
            setList(_list);
        }
    }, list);

    

    return (
        <>
        <div className="home-page ">
            <Link to={"Details"} className="neon noulh"><div className="ad-list flex">
               {list}
            </div></Link>
            { data < 24 &&
            <button onClick={more} className="load-more fontb c333 s16 anim">
                Load More
            </button>
            }   
        </div>
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
        </>
    )
}


export default HomePage;

