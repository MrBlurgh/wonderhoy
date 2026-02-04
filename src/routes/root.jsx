import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export default function Root() {
    const navigate = useNavigate();
    const windowloc = useLocation();
    return (
        <>
            <div id="biggerDiv">
                <div id="allKnowingDiv">
                    <Outlet />
                    <div id="pages">
                        <button type="button" onClick={() => { if(windowloc.pathname !== "/home") { window.scrollTo({ top: 0, left: 0, behavior: "instant"}); navigate("/home") } }}>Home</button> <button type="button" onClick={() => { if(windowloc.pathname !== "/social") { window.scrollTo({ top: 0, left: 0, behavior: "instant"}); navigate("/social") } }}>Socials</button> <button type="button" onClick={() => { if(windowloc.pathname !== "/art") { window.scrollTo({ top: 0, left: 0, behavior: "instant"}); navigate("/art") } }}>Art / Music</button>
                    </div>
                </div>
            </div>
        </>
    );
}