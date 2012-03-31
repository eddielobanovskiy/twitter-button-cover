Twitter Button Cover
====================

Get your [Twitter Share Link](https://twitter.com/about/resources/buttons#tweet)

Download [Edwin Martin's Shadow animation jQuery plugin](http://www.bitstorm.org/jquery/shadow-animation/).


### HTML

    <div class="btn-indent">
      <div class="btn-mask">
        <div class="btn">
          <div class="btn-widget">
            <!-- paste Twitter embed code here -->
            
          </div>
        </div>
        <div class="btn-cover">
          <span class="i-twitter"></span>
        </div>
      </div>
    </div>
    
### CSS 

### JavaScript

    // cache elements;
    var $btnIndent = $('.btn-indent'),
        $btn = $('.btn', $btnIndent),
        $btnCover = $('.btn-cover', $btnIndent);
    
    $(document).ready(function() {
    
      $btnIndent.hover(function() {
        // animate cover's shadow for added depth and animate cover out;
        $(this).find($btnCover).stop().animate({
          boxShadow: '90px 0px 30px 0px rgba(22, 89, 114, 1)'
        }, {duration: 300, queue: false}).animate({
          left: '-140px'
        }, 500);
        // reset cover's width for snapping;
        $btnCover.width(118);
      }, function() {
        // reset cover's shadow and cover button;
        $(this).find('.btn-cover').stop().animate({
          left: '0',
          boxShadow: '0 0px 0 0px rgba(22, 89, 114, 0)'
        }, function() {
          // on complete, snap button in;
          $('.btn-cover').animate({width: '121px'}, 200)
        });
      });
    
    });

## Thanks
[Alex Cican](http://dribbble.com/sican) for recommending image-less solution