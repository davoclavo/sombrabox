function sombrabox(){
    this.appendToSelector = 'body'
    this.triggerSelector = 'img'
    this.id = 'sombrabox'
    this.tag = '<div id="%s"></div>'
    this.css = {
        'display': 'none',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'position' : 'fixed',
        'background': 'rgba(0,0,0,0.8)',
        'z-index' : '2000',
    },
    this.innercss = {
        'position':'absolute',
        'top': '50%',
        'left': '50%',
        'max-width': '100%',
        'max-height': '100%',
        'border': '3px rgba(255,255,255,0.6) solid',
        'border-radius': '3px',
    },
    this.time = 100;
}

sombrabox.prototype = {
    init: function(options){
        var self = this;
        for(var option in options){
            if(options.hasOwnProperty(option))
                self[option] = options[option]
        }
        if($('#'+self.id).length == 0)
            $(self.appendToSelector).append(self.tag.replace('%s',self.id));
        var sombraboxTag = $('#'+self.id).css(self.css);
        $(self.triggerSelector).unbind('click.sombrabox').bind('click.sombrabox',function(){
            sombraboxTag.html(this.outerHTML).fadeIn(self.time);
            var innerElement = sombraboxTag.children(self.triggerSelector)
            innerElement.css(self.innercss).css('margin','-'+innerElement.height()/2+'px -'+innerElement.width()/2+'px')
        })
        sombraboxTag.click(function(){
            $(this).html('').fadeOut(self.time);
        })
        return this
    },
}