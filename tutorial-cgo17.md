---
layout: default
---

# CGO 2017 Tutorial:<br> Building Dynamic Tools with DynamoRIO on x86 and ARMv8


Sunday morning, February 5, 2017 at
the [2017 International Symposium on Code
Generation and Optimization](http://cgo.org/cgo2017/).


## Audience

Researchers and professionals interested in building dynamic program
analysis tools.


## Abstract


  This tutorial will present the DynamoRIO tool platform and describe how
  to use its API to build custom tools that utilize dynamic code
  manipulation for instrumentation, profiling, analysis, optimization,
  introspection, security, and more.  The DynamoRIO tool platform has been
  used by many researchers to develop systems ranging from taint tracking
  to prefetch optimization.  DynamoRIO is publicly available in open source
  form and targets Windows, Linux, Mac, and Android on IA-32, AMD64, ARM,
  and AArch64 platforms.


## Topics

The tutorial will cover the following topics:

*  DynamoRIO API: an overview of the full range of DynamoRIO's powerful
    API, which abstracts away the details of the underlying infrastructure
    and allows the tool builder to concentrate on analyzing or modifying
    the application's runtime code stream.  It includes both high-level
    features for quick prototyping and low-level features for full control
    over instrumentation performance.
*  DynamoRIO system overview: a brief description of how DynamoRIO works
    under the covers.
*  Description of tools provided with the DynamoRIO package, including
    the Dr. Memory memory debugging tool, the Dr. CacheSim memory tracing
    and cache simulation tool, the DrCov code coverage tool, the Dr. CPUSim
    legacy CPU tool, and the DrStrace Windows system call tracing tool.
*  Sample tool starting points for building new tools.
*  Advanced topics when building sophisticated tools.



## Slides


The slides are now available
in [PDF](https://github.com/DynamoRIO/dynamorio/releases/download/release_7_0_0_rc1/DynamoRIO-tutorial-feb2017.pdf), [PPSX](https://github.com/DynamoRIO/dynamorio/releases/download/release_7_0_0_rc1/DynamoRIO-tutorial-feb2017.ppsx),
and [PDF
with embedded fonts](https://github.com/DynamoRIO/dynamorio/releases/download/release_7_0_0_rc1/DynamoRIO-tutorial-feb2017-embedded-fonts.pdf) formats (the embedded font version contains some
artifacts from conversion from Powerpoint that are not present in the
non-embedded file).


## Organizers


* Derek Bruening (Google)
* Chris Adeniyi-Jones (ARM)
* Edmund Grimley-Evans (ARM)
* Kevin Zhou (U. of Cambridge)


## Questions

Questions about the tutorial can be sent to the
[DynamoRIO-Users](http://groups.google.com/group/DynamoRIO-Users)
mailing list.


## References


* [DynamoRIO home](http://dynamorio.org/)
* [DynamoRIO API documentation](http://dynamorio.org/docs/)
* [DynamoRIO code repository](https://github.com/DynamoRIO/dynamorio)


