[
    [ "Basic Block Duplicator", "page_drbbdup.html", [
      [ "Setup", "page_drbbdup.html#sec_drbbdup_init", null ],
      [ "Duplication", "page_drbbdup.html#sec_drbbdup_bb", null ],
      [ "Case Analysis", "page_drbbdup.html#sec_drbbdup_analysis", null ],
      [ "Encoder", "page_drbbdup.html#sec_drbbdup_encoder", null ],
      [ "Case Instrumentation", "page_drbbdup.html#sec_drbbdup_instrum", null ]
    ] ],
    [ "Callstack Walking", "page_drcallstack.html", [
      [ "Setup", "page_drcallstack.html#sec_drcallstack_setup", null ],
      [ "Usage", "page_drcallstack.html#sec_drcallstack_usage", null ],
      [ "Limitations", "page_drcallstack.html#sec_drcallstack_limits", null ]
    ] ],
    [ "Container Data Structures", "page_drcontainers.html", [
      [ "Setup", "page_drcontainers.html#sec_drcontainers_setup", null ],
      [ "Hashtable", "page_drcontainers.html#sec_drcontainers_hashtable", null ],
      [ "DrVector", "page_drcontainers.html#sec_drcontainers_vector", null ],
      [ "DrTable", "page_drcontainers.html#sec_drcontainers_table", null ]
    ] ],
    [ "Code Coverage Library", "page_drcovlib.html", [
      [ "The Code Coverage Interface", "page_drcovlib.html#sec_drcovlib", null ],
      [ "Elision Not Supported", "page_drcovlib.html#sec_elision", null ],
      [ "Post-Processing", "page_drcovlib.html#sec_postproc", null ],
      [ "Module Tracking Feature", "page_drcovlib.html#sec_modtrack", null ]
    ] ],
    [ "Graphical Application Framework", "page_drgui.html", [
      [ "Setup", "page_drgui.html#sec_drgui_setup", null ],
      [ "Plugin Layout", "page_drgui.html#sec_drgui_plugin_layout", null ],
      [ "Distribution", "page_drgui.html#sec_drgui_distribution", [
        [ "Plugins", "page_drgui.html#sec_drgui_dist_plugins", null ],
        [ "Libraries", "page_drgui.html#sec_drgui_dist_libraries", null ]
      ] ]
    ] ],
    [ "Multi-Instrumentation Manager", "page_drmgr.html", [
      [ "Setup", "page_drmgr.html#sec_drmgr_setup", null ],
      [ "Event Replacement", "page_drmgr.html#sec_drmgr_events", null ],
      [ "Instrumentation Stages", "page_drmgr.html#sec_drmgr_stages", [
        [ "Emulation-Aware Instrumentation", "page_drmgr.html#sec_drmgr_emulation", null ],
        [ "Ordering", "page_drmgr.html#sec_drmgr_ordering", null ],
        [ "Traces", "page_drmgr.html#sec_drmgr_traces", null ],
        [ "IT Blocks", "page_drmgr.html#sec_drmgr_itblocks", null ],
        [ "Auto Predication", "page_drmgr.html#sec_drmgr_autopred", null ]
      ] ],
      [ "Thread-Local and Callback-Local Storage", "page_drmgr.html#sec_drmgr_tls", [
        [ "Callback-local Storage", "page_drmgr.html#sec_drmgr_cls", null ]
      ] ],
      [ "Instruction Note Fields", "page_drmgr.html#sec_drmgr_notes", null ]
    ] ],
    [ "DynamoRIO Option Parser", "page_droption.html", [
      [ "Setup", "page_droption.html#sec_droption_setup", null ],
      [ "Usage", "page_droption.html#sec_droption_usage", null ],
      [ "Supported Types", "page_droption.html#sec_droption_types", null ],
      [ "Automated HTML", "page_droption.html#sec_droption_html", null ],
      [ "Aliases", "page_droption.html#sec_droption_aliases", null ],
      [ "Clearing Accumulated Values on Re-attach", "page_droption.html#sec_droption_reattach", null ]
    ] ],
    [ "Intel PT Tracing", "page_drpttracer.html", [
      [ "Setup", "page_drpttracer.html#sec_drpttracer_setup", null ],
      [ "Usage", "page_drpttracer.html#sec_drpttracer_usage", null ],
      [ "Tracing Mode", "page_drpttracer.html#sec_drpttracer_tracing_mode", null ],
      [ "Unit Tests", "page_drpttracer.html#sec_unit_tests", null ]
    ] ],
    [ "Register Management", "page_drreg.html", [
      [ "Setup", "page_drreg.html#sec_drreg_setup", null ],
      [ "Usage", "page_drreg.html#sec_drreg_usage", null ],
      [ "Application Values", "page_drreg.html#sec_drreg_app_values", null ],
      [ "Linear Control Flow", "page_drreg.html#sec_drreg_linear", null ]
    ] ],
    [ "Machine State Comparison Library", "page_drstatecmp.html", [
      [ "Setup", "page_drstatecmp.html#sec_drstatecmp_init", null ],
      [ "Checks", "page_drstatecmp.html#sec_drstatecmp_checks", [
        [ "Side-effect-free Basic Blocks", "page_drstatecmp.html#sec_drstatecmp_checks_side_effects_free", null ],
        [ "Basic Blocks with Side Effects", "page_drstatecmp.html#sec_drstatecmp_checks_side_effects", null ]
      ] ],
      [ "Machine States Saved", "page_drstatecmp.html#sec_drstatecmp_machine_state_saved", null ],
      [ "Comparison with DrBBDup", "page_drstatecmp.html#sec_drstatecmp_vs_drbbdup", null ]
    ] ],
    [ "Symbol Access Library", "page_drsyms.html", [
      [ "Setup", "page_drsyms.html#sec_drsyms_setup", null ],
      [ "Search Paths", "page_drsyms.html#sec_drsyms_paths", null ],
      [ "Exported Functions", "page_drsyms.html#sec_drsyms_exports", null ],
      [ "API", "page_drsyms.html#sec_drsyms_api", [
        [ "Memory Usage", "page_drsyms.html#sec_drsyms_mem", null ],
        [ "Module Bases", "page_drsyms.html#sec_drsyms_modbase", null ]
      ] ]
    ] ],
    [ "Dr. Syscall: System Call Monitoring Extension", "page_drsyscall.html", [
      [ "Setup", "page_drsyscall.html#sec_drsyscall_setup", null ],
      [ "Event Replacement", "page_drsyscall.html#sec_drsyscall_events", null ],
      [ "Dr. Syscall API", "page_drsyscall.html#sec_drsyscall_API", null ],
      [ "System Call Numbers", "page_drsyscall.html#sec_drsyscall_nums", null ],
      [ "CI Test Coverage", "page_drsyscall.html#sec_ci_test_coverage", null ]
    ] ],
    [ "Instrumentation Utilities", "page_drutil.html", [
      [ "Setup", "page_drutil.html#sec_drutil_setup", null ],
      [ "API", "page_drutil.html#sec_drutil_api", null ],
      [ "LGPL 2.1 License", "page_drutil.html#sec_drutil_license", null ]
    ] ],
    [ "Function Wrapping and Replacing Extension", "page_drwrap.html", [
      [ "Setup", "page_drwrap.html#sec_drwrap_setup", null ],
      [ "Event Replacement", "page_drwrap.html#sec_drwrap_events", null ],
      [ "API", "page_drwrap.html#sec_drwrap_api", null ],
      [ "Performance", "page_drwrap.html#sec_drwrap_perf", null ],
      [ "LGPL 2.1 License", "page_drwrap.html#sec_drwrap_license", null ]
    ] ],
    [ "DynamoRIO eXtension utilities", "page_drx.html", [
      [ "Setup", "page_drx.html#sec_drx_setup", null ],
      [ "Soft Kills", "page_drx.html#sec_drx_soft_kills", null ],
      [ "Buffer Filling API", "page_drx.html#sec_drx_buf", null ],
      [ "Trace Buffer", "page_drx.html#sec_drx_buf_trace", null ],
      [ "Circular Buffer", "page_drx.html#sec_drx_buf_circular", null ],
      [ "Fast Circular Buffer", "page_drx.html#sec_drx_buf_circular_fast", null ],
      [ "Using the Buffer API", "page_drx.html#sec_drx_buf_api", null ],
      [ "Manually Modifying the Buffer", "page_drx.html#sec_drx_buf_no_api", null ]
    ] ],
    [ "Umbra: Shadow Memory Extension", "page_drmf_umbra.html", null ],
    [ "System Call Monitoring Extension", "page_drmf_drsyscall.html", null ],
    [ "Symbol Lookup Cache Extension", "page_drmf_drsymcache.html", null ]
],