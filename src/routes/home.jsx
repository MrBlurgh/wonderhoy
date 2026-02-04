import React from 'react';
import meImg from '../assets/me.jpg';

export default function Home() {
    return (
        <>
            <div id="homeTopDiv">
                <img id="me" src={meImg} alt="The funny guy from the book" />
                <h1>Welcome to my awesome website!!!!!</h1>
            </div>
            <div id="homeTextDiv">
                <p id="homeText">General Info</p>
                    <ul id="info">
                        <li>MrBlurgh</li>
                        <li>17 years old (MINOR)</li>
                        <li>#1 Chud</li>
                    </ul>
                <p id="homeText">I worked really hard to make this website! Yes, I know the formatting is awful but that sucks for you man. Not my issue. Here are some things I like to do!</p>
                <ul>
                    <li>Play video games</li>
                    <li>Study language (Currently self-studying Japanese.)</li>
                    <li>Read manga / Watch anime</li>
                    <li>Draw sometimes maybe!</li>
                    <li>Program also sometimes maybe!</li>
                    <li>Make music</li>
                </ul>
                <p id="homeText">While I'm at it, here's some specific things I like in particular! These may or may not be related to my previously states hobbies.</p>
                <ul>
                    <li>Favorite games include Project Sekai, the Persona games, OMORI, Project Diva, and Team Fortress 2</li>
                    <li>Oyasumi Punpun (duh), Bungou Stray Dogs, JoJo</li>
                    <li>No Longer Human and The Setting Sun by Osamu Dazai</li>
                    <li>Vocaloid... KAITO my goat...</li>
                    <li>Music in general</li>
                </ul>
                <p id="homeText">Anyways, I'm not sure what else to put here so... I'll leave you to the other pages.</p>            </div>
        </>
    )
}