[
    [ "Contributing to DynamoRIO", "page_contributing.html", {% include_relative page_contributing.js %} ],
    [ "Building from Source", "page_building.html", [
      [ "Quick Start", "page_building.html#sec_build_quick", [
        [ "Linux", "page_building.html#sec_build_quick_linux", null ],
        [ "Windows", "page_building.html#sec_build_quick_windows", null ]
      ] ],
      [ "Install and Build Outputs", "page_building.html#sec_build_install", [
        [ "Build and Install Layout Conventions", "page_building.html#sec_build_layout", null ],
        [ "Platform and Architecture Support", "page_building.html#sec_build_platforms", null ],
        [ "Build Artifacts and Expectations", "page_building.html#sec_build_outputs", null ]
      ] ],
      [ "Advanced Build Scenarios", "page_building.html#sec_build_advanced", [
        [ "Windows Build Variants", "page_building.html#sec_build_windows_variants", [
          [ "Debug Build", "page_building.html#sec_cmake_debug", null ]
        ] ],
        [ "Cross-Compiling for 64-bit ARM (AArch64) on Linux", "page_building.html#sec_build_cross_aarch64", null ],
        [ "Cross-Compiling for 32-bit ARM (AArch32) on Linux", "page_building.html#sec_build_cross_aarch32", null ],
        [ "Cross-Compiling for 64-bit RISC-V (RISCV64) on Linux", "page_building.html#sec_build_cross_riscv64", null ],
        [ "Cross-Compiling for ARM Android", "page_building.html#sec_build_cross_android", null ],
        [ "Building AArchXX Tooling to Execute on x86", "page_building.html#sec_build_aarch_on_x86", null ]
      ] ],
      [ "Details for Building on Linux", "page_building.html#sec_build_linux", [
        [ "Setup for Simultaneous 64-bit and 32-bit Building", "page_building.html#sec_build_linux_multiarch", null ],
        [ "Building 32-bit DynamoRIO on 64-bit Linux", "page_building.html#sec_build_linux_32on64", null ],
        [ "Useful Configuration Options", "page_building.html#sec_build_linux_config", null ]
      ] ],
      [ "Details for Building on Windows", "page_building.html#sec_build_windows", [
        [ "Compiler", "page_building.html#sec_build_windows_compiler", null ],
        [ "CMake", "page_building.html#sec_build_windows_cmake", null ],
        [ "Other Tools", "page_building.html#sec_build_windows_other_tools", null ],
        [ "Using Cygwin", "page_building.html#sec_build_windows_cygwin", null ],
        [ "Details of Building with CMake", "page_building.html#sec_cmake", null ],
        [ "Components", "page_building.html#autotoc_md78", null ],
        [ "Configuring Your Build", "page_building.html#autotoc_md79", null ],
        [ "Building", "page_building.html#autotoc_md80", null ],
        [ "An Example of Building DynamoRIO in Windows-XP 64bit in cmd", "page_building.html#autotoc_md81", null ],
        [ "Configuring in Batch Mode", "page_building.html#autotoc_md82", null ],
        [ "Re-Configuring", "page_building.html#autotoc_md83", null ],
        [ "Building a Distributable Package", "page_building.html#autotoc_md84", null ],
        [ "Details of CMake Visual Studio Generators", "page_building.html#autotoc_md85", null ],
        [ "Using Ninja For Better Error Messages, Faster Builds, and Proper Incremental Builds", "page_building.html#sec_ninja", [
          [ "Using Ninja With Pre-7.0 SDK", "page_building.html#autotoc_md86", null ]
        ] ],
        [ "Using MSBuild For Slightly Better Error Messages And Faster Builds", "page_building.html#autotoc_md87", null ],
        [ "Using Unix Makefiles On Windows For Parallel Builds", "page_building.html#autotoc_md88", null ],
        [ "Building the Qt DrGUI extension", "page_building.html#sec_drgui", null ]
      ] ]
    ] ],
    [ "Testing", "page_test_suite.html", [
      [ "Automated Test Machines", "page_test_suite.html#autotoc_md279", [
        [ "Continuous Integration (CI) via Github Actions", "page_test_suite.html#autotoc_md280", null ],
        [ "CI Job Auto-Cancellation", "page_test_suite.html#autotoc_md281", null ],
        [ "CI for AArch64 & AArch32", "page_test_suite.html#autotoc_md282", null ],
        [ "CI Tree Closures", "page_test_suite.html#autotoc_md283", null ],
        [ "Trybots", "page_test_suite.html#autotoc_md284", null ],
        [ "Debugging Tests on Github Actions Runner", "page_test_suite.html#autotoc_md285", null ]
      ] ],
      [ "Regression Test Suite", "page_test_suite.html#autotoc_md286", [
        [ "Test Organization", "page_test_suite.html#autotoc_md287", null ],
        [ "Building and Running Tests", "page_test_suite.html#autotoc_md288", null ],
        [ "Testing AArchXX", "page_test_suite.html#autotoc_md289", null ],
        [ "Test Output", "page_test_suite.html#autotoc_md290", null ],
        [ "Pre-Commit Test Suite", "page_test_suite.html#autotoc_md291", null ],
        [ "Cross-Compilation and Android Testing", "page_test_suite.html#autotoc_md292", null ],
        [ "Pre-Commit Test Suite Over Ssh", "page_test_suite.html#autotoc_md293", null ],
        [ "Test Failures", "page_test_suite.html#autotoc_md294", null ],
        [ "Missing Tests", "page_test_suite.html#autotoc_md295", null ]
      ] ],
      [ "Adding New Tests", "page_test_suite.html#autotoc_md296", null ]
    ] ],
    [ "Profiling DynamoRIO and Clients", "page_profiling.html", [
      [ "Linux", "page_profiling.html#autotoc_md224", [
        [ "DynamoRIO PC self-sampling", "page_profiling.html#autotoc_md225", null ],
        [ "External sampling tools", "page_profiling.html#autotoc_md226", [
          [ "oprofile", "page_profiling.html#autotoc_md227", null ],
          [ "perf", "page_profiling.html#autotoc_md228", null ]
        ] ]
      ] ],
      [ "Windows", "page_profiling.html#autotoc_md229", null ],
      [ "Cross-platform -prof_pcs", "page_profiling.html#autotoc_md230", null ]
    ] ],
    [ "Academic Publications", "page_publications.html", null ],
    [ "Design Documents", "page_design_docs.html", {% include_relative page_design_docs.js %} ]
],