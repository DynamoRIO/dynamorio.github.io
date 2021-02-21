---
---
/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Home", "/index.html", null ],
  [ "Download", "https://github.com/DynamoRIO/dynamorio/wiki/Downloads", null ],
  [ "Source Code", "https://github.com/DynamoRIO/dynamorio", null ],
  [ "Documentation", "index.html", {% include_relative docs/navtreedata.js %} ],
  [ "Tutorials", "/tutorials/index.html", [
    [ "CGO 2017", "/tutorials/tutorial-cgo17.html", null ],
    [ "SecDev 16", "/tutorials/tutorial-secdev16.html", null ],
    [ "CGO 2016", "/tutorials/tutorial-cgo16.html", null ],
  ] ],
  [ "Debugging", "/wiki/Debugging.html", {% include_relative wiki/Debugging.js %} ],
  [ "Discussion List", "https://groups.google.com/group/DynamoRIO-Users", null ],
  [ "Wiki", "https://github.com/DynamoRIO/dynamorio/wiki", null ],
  [ "Reporting Bugs", "/issues.html", null ],
  [ "Publications", "/pubs.html", null ],
  [ "History", "/history.html", null ],
  [ "Dr. Memory", "http://www.drmemory.org/", null ],
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
