import React from 'react';

export default function Social() {
    return (
        <>
            <div id="otherTopDiv">
                <h1 id="socialsTitle">Socials</h1>
            </div>
            <div id="socialTextDiv">
                <button id="socialLinkButton" onClick={() => window.open('https://www.instagram.com/mrblurgh/') }>Instagram</button>
                <br/>
                <button id="socialLinkButton" class="sc" onClick={() => window.open('https://www.soundcloud.com/mrblurgh/') }>Soundcloud (Most of my music)</button>
                <br/>
                <button id="socialLinkButton" onClick={() => window.open('https://open.spotify.com/artist/3PPEBThHYvhVRq3wmipjcl?si=hF3maKbHQ86A3ZLiOssVOA') }>Spotify</button>
            </div>
        </>
    )
}