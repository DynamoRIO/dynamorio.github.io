---
permalink: /navtreedata.js
---
var NAVTREE =
[
    [ "Home", "index.html", {% include_relative index.js %} ],
    [ "Download", "page_download.html", {% include_relative page_download.js %} ],
    [ "Available Tools", "page_tool.html", {% include_relative page_tool.js %} ],
    [ "User Documentation", "page_user_docs.html", {% include_relative page_user_docs.js %} ],
    [ "Obtaining Help and Reporting Bugs", "page_help.html", [
      [ "Discussion Forum", "page_help.html#sec_emaillist", null ],
      [ "Reporting Problems", "page_help.html#sec_reporting", null ],
      [ "Troubleshooting", "page_help.html#sec_diagnosing", null ],
      [ "Using Debuggers", "page_help.html#sec_debugging", null ]
    ] ],
    [ "Developer Documentation", "page_dev_docs.html", {% include_relative page_dev_docs.js %} ],
[ "API Reference", "files.html", [
    [ "Deprecated List", "deprecated.html", null ],
    [ "DynamoRIO Extension Details", "modules.html", {% include_relative modules.js %} ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", {% include_relative annotated_dup.js %} ],
      [ "Class Hierarchy", "hierarchy.html", {% include_relative hierarchy.js %} ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", {% include_relative functions_dup.js %} ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", {% include_relative functions_vars.js %} ]
      ] ]
    ] ],
    [ "Files", null, [
      [ "File List", "files.html", {% include_relative files.js %} ],
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