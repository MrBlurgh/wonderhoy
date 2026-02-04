import React from 'react';

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="errorPage">
            <h1>You done fucked it up :(</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}