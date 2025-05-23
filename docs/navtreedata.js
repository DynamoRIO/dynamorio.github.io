---
permalink: /navtreedata.js
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
    [ "Home", "index.html", {% include_relative index.js %} ],
    [ "Download", "page_download.html", {% include_relative page_download.js %} ],
    [ "Available Tools", "page_tool.html", {% include_relative page_tool.js %} ],
    [ "Build Your Own Tool", "page_user_docs.html", {% include_relative page_user_docs.js %} ],
    [ "Obtaining Help and Reporting Bugs", "page_help.html", {% include_relative page_help.js %} ],
    [ "Developer Documentation", "page_dev_docs.html", {% include_relative page_dev_docs.js %} ],
    [ "License", "page_license.html", [
      [ "Primary DynamoRIO License: BSD", "page_license.html#sec_bsd", null ],
      [ "libelftc License", "page_license.html#sec_libelftc", null ],
      [ "Certain Extensions: LGPL 2.1", "page_license.html#sec_lgpl_licenses", null ],
      [ "drsyms Extension use of elfutils: LGPL 3", "page_license.html#sec_lgpl3_licenses", null ],
      [ "Code Coverage genhtml: GPL 2", "page_license.html#sec_gpl_licenses", null ]
    ] ],
[ "API Reference", "files.html", [
    [ "Deprecated List", "deprecated.html", null ],
    [ "DynamoRIO Extension Details", "modules.html", {% include_relative modules.js %} ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", {% include_relative namespaces_dup.js %} ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", {% include_relative namespacemembers_dup.js %} ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", {% include_relative annotated_dup.js %} ],
      [ "Class Hierarchy", "hierarchy.html", {% include_relative hierarchy.js %} ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", {% include_relative functions_dup.js %} ],
        [ "Functions", "functions_func.html", {% include_relative functions_func.js %} ],
        [ "Variables", "functions_vars.html", {% include_relative functions_vars.js %} ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", {% include_relative files_dup.js %} ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", {% include_relative globals_dup.js %} ],
        [ "Functions", "globals_func.html", {% include_relative globals_func.js %} ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", {% include_relative globals_eval.js %} ],
        [ "Macros", "globals_defs.html", {% include_relative globals_defs.js %} ]
      ] ]
    ] ],  ] ]
];



var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';