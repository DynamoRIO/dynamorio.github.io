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
[
  [ "The DynamoRIO API", "index.html", {% include_relative docs/index.js %} ],
  [ "DynamoRIO Extensions", "page_ext.html", {% include_relative docs/page_ext.js %} ],
  [ "DynamoRIO-Based Tools", "page_tool.html", {% include_relative docs/page_tool.js %} ],
  [ "Deprecated List", "deprecated.html", null ],
  [ "DynamoRIO Extension Details", "modules.html", {% include_relative docs/modules.js %} ],
  [ "Data Structures", "annotated.html", [
    [ "Data Structures", "annotated.html", {% include_relative docs/annotated_dup.js %} ],
    [ "Class Hierarchy", "hierarchy.html", {% include_relative docs/hierarchy.js %} ],
    [ "Data Fields", "functions.html", [
      [ "All", "functions.html", {% include_relative docs/functions_dup.js %} ],
      [ "Functions", "functions_func.html", null ],
      [ "Variables", "functions_vars.html", {% include_relative docs/functions_vars.js %} ]
    ] ]
  ] ],
  [ "Files", "files.html", [
    [ "File List", "files.html", {% include_relative docs/files_dup.js %} ],
    [ "Globals", "globals.html", [
      [ "All", "globals.html", {% include_relative docs/globals_dup.js %} ],
      [ "Functions", "globals_func.html", {% include_relative docs/globals_func.js %} ],
      [ "Variables", "globals_vars.html", null ],
      [ "Typedefs", "globals_type.html", null ],
      [ "Enumerations", "globals_enum.html", null ],
      [ "Enumerator", "globals_eval.html", {% include_relative docs/globals_eval.js %} ],
      [ "Macros", "globals_defs.html", {% include_relative docs/globals_defs.js %} ]
    ] ]
  ] ],
],
