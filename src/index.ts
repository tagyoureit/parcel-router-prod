/*  nodejs-poolController.  An application to control pool equipment.
 *  Copyright (C) 2016, 2017.  Russell Goldin, tagyoureit.  russ.goldin@gmail.com
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/* istanbul ignore file */
( function ()
{
    'use strict';
    // this function is strict...
}() );
console.log( '\x1Bc' );

// add source map support for .js to .ts files
require( 'source-map-support' ).install();

import * as http from 'http';
import express = require( 'express' )
var path = require( 'path' ).posix;
// import * as Bundler from 'parcel-bundler';
import Bundler = require( 'parcel-bundler' );


let parcel;
let app: express.Application = express()

const dev = process.env.NODE_ENV !== 'production'


if ( dev )
{
    // Parcel: absolute path to entry point
    const file = path.join( process.cwd(), '/www/index.html' )
    console.log( `Parcel serving files from: ${ file }` )
    // Parcel: set options
    const options = {
        outDir: './dist/dev'
    };
    // Parcel: Initialize a new bundler
    parcel = new Bundler( file, options )
    //app.use( express.static( path.join( process.cwd(), '/www' ) ) );
    app.use( parcel.middleware() )
}
else
{
    app.use( express.static( path.join( process.cwd(), '/dist/www' ), { maxAge: '14d' } ) );
}
http.createServer( app ).listen( 3000, () =>
{
    console.log(`http server started on port 3000`)
})

