import React from 'react';
import pi from '../assets/art/playingimmortal.png'
import sanson from '../assets/art/sanson.png'
import sb from '../assets/art/spaceboyfriend.png'
import staticart from '../assets/art/static.png'

export default function Art() {
    return (
        <>
        <div id="otherTopDiv">
            <h1 id="socialsTitle">Art</h1>
        </div>
        <div id="artTextDiv">
            <p id="homeText">Awww look it's the uhh ummm Miku from that one PinocchioP song</p>
            <img id="artImg" src={pi} alt="That Miku from Playing Immortal"></img>
            <p id="homeText">This is my beautiful ship between my Japanese friend Sanson and his coworker Kaoru</p>
            <img id="artImg" src={sanson} alt="Freaky ahh Japanese man"></img>
            <p id="homeText">This is my OMORI goat, Space Boyfriend. Aww.</p>
            <img id="artImg" src={sb} alt="Space Boyfriend yum"></img>
            <p id="homeText">Static Miku... aww I feel so bad she just wants to be loved :(</p>
            <img id="artImg" src={staticart} alt="That Miku from Static"></img>
        </div>
        </>
    )
}