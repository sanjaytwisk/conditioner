!function(e){"use strict";var t=function(t){var n=e.innerHeight,i=t.getBoundingClientRect();return i.top>0&&i.top<n||i.bottom>0&&i.bottom<n},n=function(e){return parseInt(e,10)},i={trigger:{resize:e,scroll:e},test:{visible:function(e){return e.seen=t(e.element),e.seen&&e.expected},"min-width":function(e){return n(e.expected)<=e.element.offsetWidth},"max-width":function(e){return n(e.expected)>=e.element.offsetWidth},"min-height":function(e){return n(e.expected)<=e.element.offsetHeight},"max-height":function(e){return n(e.expected)>=e.element.offsetHeight}}};"undefined"!=typeof module&&module.exports?module.exports=i:"function"==typeof define&&define.amd&&define(function(){return i})}(window);