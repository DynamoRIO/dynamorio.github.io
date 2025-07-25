[
    [ "Tutorials", "page_tutorials.html", {% include_relative page_tutorials.js %} ],
    [ "Sample Tools", "API_samples.html", [
      [ "List of Samples", "API_samples.html#sample_list", null ],
      [ "Discussion of Selected Samples", "API_samples.html#bt_examples", [
        [ "Instruction Counting", "API_samples.html#sec_ex1", null ],
        [ "Instruction Profiling", "API_samples.html#sec_ex2", null ],
        [ "Modifying Existing Instrumentation", "API_samples.html#sec_ex3", null ],
        [ "Optimization", "API_samples.html#sec_ex4", null ],
        [ "Custom Tracing", "API_samples.html#sec_ex5", null ],
        [ "Use of x87 Floating Point Operation in a Client", "API_samples.html#sec_ex6", null ],
        [ "Use of Custom Client Statistics with the Windows GUI", "API_samples.html#sec_drstats", null ],
        [ "Use of Standalone API", "API_samples.html#sec_ex8", null ]
      ] ]
    ] ],
    [ "How to Build a Tool", "page_build_client.html", null ],
    [ "How to Run", "page_deploy.html", [
      [ "Windows Deployment", "page_deploy.html#win_deploy", null ],
      [ "Linux Deployment", "page_deploy.html#lin_deploy", null ],
      [ "Android Deployment", "page_deploy.html#android_deploy", null ],
      [ "Running Under QEMU", "page_deploy.html#qemu_deploy", null ],
      [ "Passing Options to Clients", "page_deploy.html#client_ops", null ],
      [ "Multiple Clients", "page_deploy.html#multi_client", null ],
      [ "End-User Tools", "page_deploy.html#tool_frontend", null ],
      [ "Running a Subset of an Application", "page_deploy.html#sec_startstop", null ],
      [ "Statically Linking DynamoRIO", "page_deploy.html#sec_static_DR", null ],
      [ "DynamoRIO Runtime Options", "page_deploy.html#sec_options", null ]
    ] ],
    [ "Tool Event Model and API", "using.html", [
      [ "Common Events", "using.html#sec_events", null ],
      [ "Common Utilities", "using.html#sec_utils", null ],
      [ "64-Bit Reachability", "using.html#sec_64bit_reach", null ],
      [ "String Encoding", "using.html#sec_utf8", null ],
      [ "DynamoRIO Extension Libraries", "using.html#sec_extensions", null ],
      [ "Using External Libraries", "using.html#sec_extlibs", [
        [ "Avoid Alertable System Calls", "using.html#sec_alertable", null ],
        [ "DynamoRIO Library Search Paths", "using.html#sec_rpath", null ],
        [ "Deliberately Invoking Application Routines", "using.html#subsec_avoid_redir", null ],
        [ "When Private Loader is Disabled", "using.html#subsec_no_loader", null ],
        [ "C++ Clients", "using.html#subsec_cpp", null ]
      ] ],
      [ "Communication", "using.html#sec_comm", null ],
      [ "Annotations", "using.html#sec_annotations", [
        [ "Annotating an Application", "using.html#subsec_annotate_app", null ],
        [ "Instrumenting Annotations", "using.html#subsec_instr_annotations", null ],
        [ "Creating Custom Annotations", "using.html#subsec_create_annotations", null ]
      ] ]
    ] ],
    [ "Code Manipulation API", "API_BT.html", [
      [ "Instruction Representation", "API_BT.html#sec_IR", [
        [ "AArch64 IR Variations", "API_BT.html#sec_IR_AArch64", null ]
      ] ],
      [ "Events", "API_BT.html#sec_events_bt", [
        [ "Transformation Versus Execution Time", "API_BT.html#sec_control_points", null ],
        [ "Basic Block Creation", "API_BT.html#sec_events_bb", null ],
        [ "Application Versus Meta Instructions", "API_BT.html#sec_Meta", null ],
        [ "Trace Creation", "API_BT.html#sec_events_trace", null ],
        [ "State Restoration", "API_BT.html#sec_events_translation", null ],
        [ "Basic Block and Trace Deletion", "API_BT.html#sec_events_del", null ],
        [ "Special System Calls", "API_BT.html#sec_events_wow64", null ]
      ] ],
      [ "Decoding and Encoding", "API_BT.html#sec_decode", [
        [ "Decoding", "API_BT.html#sec_Decoding", null ],
        [ "Instruction Generation", "API_BT.html#sec_InstrGen", null ],
        [ "Encoding", "API_BT.html#sec_Encoding", null ],
        [ "Disassembly", "API_BT.html#sec_disasm", null ],
        [ "Instruction Heap Allocation", "API_BT.html#sec_IR_heap", null ]
      ] ],
      [ "Instruction Set Modes", "API_BT.html#sec_isa", [
        [ "64-bit Versus 32-bit Instructions", "API_BT.html#sec_64bit", null ],
        [ "Thumb Mode Addresses", "API_BT.html#sec_thumb", null ]
      ] ],
      [ "Utilities", "API_BT.html#sec_IR_utils", [
        [ "Clean Calls", "API_BT.html#sec_clean_call", null ],
        [ "State Preservation", "API_BT.html#sec_state", null ],
        [ "Branch Instrumentation", "API_BT.html#sec_branch_instru", null ],
        [ "Dynamic Instrumentation", "API_BT.html#sec_adaptive", null ],
        [ "Custom Traces", "API_BT.html#sec_custom_traces", null ]
      ] ],
      [ "Register Stolen by DynamoRIO", "API_BT.html#sec_reg_stolen", null ],
      [ "State Translation", "API_BT.html#sec_translation", null ],
      [ "Conditionally Executed Instructions", "API_BT.html#sec_predication", [
        [ "IT Blocks", "API_BT.html#sec_it_blocks", null ]
      ] ],
      [ "Exclusive Monitor Instrumentation", "API_BT.html#sec_ldrex", null ],
      [ "Restartable Sequence Instrumentation Constraints", "API_BT.html#sec_rseq", null ],
      [ "Persisting Code", "API_BT.html#sec_pcache", null ]
    ] ],
    [ "Extension API", "page_ext.html", {% include_relative page_ext.js %} ],
    [ "Disassembly Library", "page_standalone.html", [
      [ "Using DynamoRIO as a Standalone Library", "page_standalone.html#sec_standalone", null ],
      [ "DynamoRIO Shared Library Issues", "page_standalone.html#sec_standalone_shared", null ]
    ] ],
    [ "DynamoRIO System Overview", "overview.html", {% include_relative overview.js %} ],
    [ "Release Notes for Version 11.90.20294", "release_notes.html", [
      [ "Distribution Contents", "release_notes.html#sec_package", null ],
      [ "Changes Since Prior Releases", "release_notes.html#sec_changes", null ],
      [ "Limitations", "release_notes.html#sec_limits", [
        [ "Client Limitations", "release_notes.html#sec_limit_clients", null ],
        [ "Platform Limitations", "release_notes.html#sec_limit_platforms", null ],
        [ "Performance Limitations", "release_notes.html#sec_limit_perf", null ],
        [ "Deployment Limitations", "release_notes.html#sec_limit_deploy", null ]
      ] ],
      [ "Plans for Future Releases", "release_notes.html#sec_future", null ]
    ] ]
],