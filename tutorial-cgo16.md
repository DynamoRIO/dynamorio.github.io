<h1>CGO 2016 Tutorial:<br> Building Dynamic Tools with DynamoRIO on x86 and ARM</h1>

<p>
[9:00am-12:30pm
on Sunday March 13, 2016](http://cgo.org/cgo2016/event/building-dynamic-tools-with-dynamorio-on-x86-and-arm-dynamorio/?instance_id=14) at the [2016
International Symposium on Code Generation and Optimization](http://cgo.org/cgo2016/).
</p>

<h2>Audience</h2>

<p>Researchers and professionals interested in building dynamic program
analysis tools.
</p>

<h2>Abstract</h2>

<p>
  This tutorial will present the DynamoRIO tool platform and describe how
  to use its API to build custom tools that utilize dynamic code
  manipulation for instrumentation, profiling, analysis, optimization,
  introspection, security, and more.  The DynamoRIO tool platform was first
  released to the public in June 2002 and has since been used by many
  researchers to develop systems ranging from taint tracking to prefetch
  optimization.  DynamoRIO is publicly available in open source form and
  targets Windows, Linux, Mac, and Android on IA-32, AMD64, and ARM.
</p>

<h2>Topics</h2>

The tutorial will cover the following topics:
<ul>
  <li> DynamoRIO API: an overview of the full range of DynamoRIO's powerful
    API, which abstracts away the details of the underlying infrastructure
    and allows the tool builder to concentrate on analyzing or modifying
    the application's runtime code stream.  It includes both high-level
    features for quick prototyping and low-level features for full control
    over instrumentation.
  <li> DynamoRIO system overview: a brief description of how DynamoRIO works
    under the covers
  <li> Description of tools provided with the DynamoRIO package, including
    the Dr. Memory memory debugging tool, the DrCov code coverage tool,
    and the DrStrace Windows system call tracing tool.
  <li> Sample tool starting points for building new tools
  <li> Advanced topics when building sophisticated tools
</ul>
</p>

<h2>Slides</h2>

<p>
The slides are now available
in [PDF](https://github.com/DynamoRIO/dynamorio/releases/download/release_6_1_0/DynamoRIO-tutorial-mar2016.pdf)
and [PPSX](https://github.com/DynamoRIO/dynamorio/releases/download/release_6_1_0/DynamoRIO-tutorial-mar2016.ppsx)
formats.
</p>

<h2>Organizers</h2>

<p>
<strong>Derek Bruening</strong> is the primary author of the DynamoRIO tool platform.  
  Derek is currently a Software Engineer at Google.
  Previously he built DynamoRIO-based tools at VMware and co-founded
  Determina, whose Memory Firewall security technology was based on
  DynamoRIO.  Derek holds a PhD and MEng from MIT.
</p><p>
<strong>Qin Zhao</strong> is a Software Engineer at Google. He holds a
PhD from NUS (National University of Singapore).  He has built several
large tools and frameworks with DynamoRIO, including the debugging
framework EDDI and parallel memory profiler and analyzer PiPA.
</p>

<p>
The organizers both work on the Dr. Memory memory debugging tool,
which is a powerful tool built on top of DynamoRIO.
</p>

<h2>Questions</h2>
<p>
Questions about the tutorial can be sent to the
[DynamoRIO-Users](http://groups.google.com/group/DynamoRIO-Users)
mailing list.
</p>

<h2>References</h2>

<ul>
<li>[DynamoRIO home](http://dynamorio.org/)
<li>[DynamoRIO API documentation](http://dynamorio.org/docs/)
<li>[DynamoRIO code repository](https://github.com/DynamoRIO/dynamorio)
</ul>

