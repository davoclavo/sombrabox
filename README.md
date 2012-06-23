sombrabox.js
======

shadowbox's younger (and thinner, and dumber) brother

    sombrabox = new sombrabox()
    sombrabox.init([options])

Options
------------
    Default values
**appendToSelector** - jQuery selector to append the main element

    'body'

**triggerSelector** - jQuery selector to set the click handler

    'img'

**tag** - Full tag with replacer for id

    '&lt;div id="%s"&gt;&lt;/div&gt;'

**id** - For main element

    'sombrabox'

**css** - CSS for the main element

    {
      'display': 'none',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%',
      'position' : 'fixed',
      'background': 'rgba(0,0,0,0.8)',
      'z-index' : '2000',
    }

**inrcss** - CSS for the inner element

    {
     'position':'absolute',
     'top': '50%',
     'left': '50%',
     'max-width': '100%',
     'max-height': '100%',
     'border': '3px rgba(255,255,255,0.6) solid',
     'border-radius': '3px',
    }

**time** - FadeIn and FadeOut time [ms]

    100
