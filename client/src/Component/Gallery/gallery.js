import "./gallery.css"
import allin from "../Images/allin.png"
import beach3 from "../Images/beach3.jpg"
import blkdog from "../Images/blkDog.png"
import brownbear from "../Images/brownbear.jpg"
import chef from "../Images/chef.jpg"
import girl_mountain from "../Images/girl_mountain.jpg"
import img_forest from "../Images/img_forest.jpg"
import man_bench from "../Images/man_bench.jpg"
import newYork from "../Images/newYork.png"
import ocean from "../Images/ocean.jpg"
import people3 from "../Images/people3.jpg"
import photo from "../Images/photo.png"
import Rodeo_6 from "../Images/Rodeo_6.png"
import sealions from "../Images/sealions.jpg"
import streetart from "../Images/streetart.jpg"
import team3 from "../Images/team3.jpg"
import tech_camera from "../Images/tech_camera.jpg"
import truck from "../Images/truck.jpg"
import vans from "../Images/vans.png"
import wedding_location from "../Images/wedding_location.jpg"
import wedding from "../Images/wedding.jpg"
import pineapple2 from "../Images/picsPineapple.jpg"

import field from "../Images/field.png"
import backPack from "../Images/backPacking.png"
import beauty from "../Images/beauty.png"
import bwCar from "../Images/bNwCar.png"
import eyes from "../Images/eyes.png"
import foggySea from "../Images/foggySea.png"
import guitar from "../Images/guitar.png"
import hotAir from "../Images/hotAir.png"
import lookingGlass from "../Images/lookingThruGlass.png"
import mountain from "../Images/mountain.png"
import mountains from "../Images/mountains.png"
import northernLights from "../Images/northLights.png"
import paris from "../Images/paris.png"
import sunrise from "../Images/sunrise.png"
import surfer from "../Images/surfer.png"
import whiteHat from "../Images/whiteHat.png"
import underWater from "../Images/underWater.png"
import tunnel from "../Images/tunnel.png"
import smokyGirl from "../Images/smokyGirl.png"
import gallery from "../Images/gallery.jpg"
import gallery2 from "../Images/gallery2.jpg"
import heart from "../Images/heart.png"
import camera from "../Images/camera.jpg"

import graffiti from "../Images/graffiti.jpg"
import graffiti1 from "../Images/graffiti1.jpg"
import graffiti2 from "../Images/graffiti2.webp"
import graffiti3 from "../Images/graffiti3.webp"
import graffiti5 from "../Images/graffiti5.jpg"
import graffiti6 from "../Images/graffiti6.jpg"
import graffiti7 from "../Images/graffiti7.jpg"
import profcam from "../Images/profCam.jpg"
import profile from "../Images/profile.jpg"
import profile2 from "../Images/profile2.jpg"

import { useState, useEffect, useRef } from "react"

// This is an array of all pics that are in our gallery
const slidePictures = [
    graffiti3, beach3, gallery2, blkdog, chef, graffiti, girl_mountain, img_forest, heart, man_bench, newYork, profile, ocean, graffiti2, people3, photo, gallery, Rodeo_6, graffiti1, sealions, allin, streetart, team3, tech_camera, truck, profile2, vans, wedding_location, wedding, backPack, beauty, bwCar, eyes, foggySea, guitar, hotAir, lookingGlass, profcam, field, mountain, mountains, graffiti5, northernLights, paris, brownbear, pineapple2, sunrise, surfer, graffiti6, whiteHat, underWater, tunnel, smokyGirl, graffiti7, camera
];

// This is a variable that houses how fast our gallery moves slides
const delay = 4000

// This is the functionality of our slide show
const Gallery = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === slidePictures.length - 1 ? 0 : prevIndex + 1), delay);
        return () => { resetTimeout() };
    }, [index]);

    return (
        <div className="galleryPage">
            <div className="slideshow">
                <div className="slideshowSlider " style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, transition: "ease" }}>
                    {slidePictures.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={image} className="slide " alt={index} style={{ width: "100%" }} />
                        </div>
                    ))}
                </div>
            </div>
            {/* this is the div that houses the thumbnails */}
            <div className="row">
                <div className="thumbnails">
                    {/* this is the functionality of our thumbnails */}
                    {slidePictures.map((image, idx) => (
                        <div key={idx} className={`thumbnail${index === idx ? " active" : ""}`} onClick={() => { setIndex(idx) }}>
                            <img src={image} className="demo cursor" alt={index} style={{ width: "100%" }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery

