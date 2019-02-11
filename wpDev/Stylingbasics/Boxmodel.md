---
layout: default
---
<div class="ui basic segment">
    <p class="firstp" style="text-align: justify;">
        CSS describes the rendering of documents on various media like screen, print etc. CSS models their layout as a collection of rectangular boxes containing words, lines, paragraphs, tables, etc., each with properties such as size, color and font.
    </p>
    Basic types of boxes - block, list item, inline, line box
    Box properties - margins, padding and width/height
    Types of layouts - flow, line, tables, absolute positioning, ruby annotations, grid layouts, columns and page boxes
    root element

    The document is modelled as a tree of elements where each element has an ordered list of zero or more child elements. Each child has one parent, except for the unique element that has no parent, which is called the root element. When the document is rendered to a media the element tree representing the document is transformmed to a set of boxes whose size, position, and stacking level on the canvas depend on their properties. An element generates one or more boxes.

    Line box may contain inline-boxes

    User agents will create anonymous boxes if neccessary in order to ensure the styling rules applied properly.

    Each box has content area (content box) 

    Normal flow & line layout are the two basic layout models
    Normal flow is to layout a sequence of boxes in a single column.
    Other complex layouts are build on the flow model by defining ways to split a document into more than one flow and positioning and aligning those flows in various ways.
    A flow is constructed starting from a box called the flow root.
    The initial flow is the flow that contains the root of the box tree.
    
     
</div>