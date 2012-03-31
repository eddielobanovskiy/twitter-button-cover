Twitter Button Cover
====================
Demo: http://www.v5ds.com/twitter-button/


### Preparation
* Get your [Twitter Share Link](https://twitter.com/about/resources/buttons#tweet).
* Download [Edwin Martin's Shadow animation jQuery plugin](http://www.bitstorm.org/jquery/shadow-animation/).


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
Grab it from here [here](https://github.com/v5design/twitter-button-cover/blob/master/assets/css/twitter-button.css).

or have a looksie at the Compass SCSS ;)

### Compass SCSS
    @import "bourbon/bourbon";
    
    /* ==|== twitter button cover ==================================================
       Vision Five Design Studio - http://www.v5ds.com
       UX/ UI Designer: Eddie Lobanovskiy - @v5design
       Front-end Dev: Anton Korzhuk - @osurain
       ========================================================================== */
    
    .btn-indent {
      height: 60px;
      width: 141px;
      position: relative; 
      z-index: 1;
    
      @include linear-gradient(top, #858585 0%, #a5a5a5 17%, #ffffff 100%);
      border-top: 1px solid #717171;
      @include border-radius(10px);
    
      cursor: pointer;
    }
    
    .btn-mask {
      height: 42px;
      width: 124px;
      position: relative;
      left: 10px;
      top: 10px;
      overflow: hidden;
    }
    
    .btn {
      height: 42px;
      width: 115px;
      position: absolute;
      left: 3px;
    
      @include linear-gradient(top, #1e1e1e 0%, #3e3e3e 100%);
      @include border-radius(5px);
    
      text-align: center;
    }
    
    .btn:before {
      content: "";
      display: block;
      height: 41px;
      width: 10px;
      position: absolute;
      top: 0;
      left: -3px;
      z-index: -999;
      
      @include linear-gradient(bottom, #ffffff 0%, #898989 8%, #a4a4a4 20%, #a4a4a4 45%, #3e3e3e 100%);
      border-top: 1px solid #1f1f1f;
      border-bottom: 1px solid #ffffff;
      @include border-left-radius(5px); 
    }
    
    .btn:after {
      content: "";
      display: block;
      height: 41px;
      width: 10px;
      position: absolute;
      top: 0;
      right: -3px;
      z-index: -999;
      
      @include linear-gradient(bottom, #ffffff 0%, #898989 8%, #a4a4a4 20%, #a4a4a4 45%, #3e3e3e 100%);
      border-top: 1px solid #1f1f1f;
      border-bottom: 1px solid #ffffff;
      @include border-right-radius(5px); 
    }
    
    .btn-cover {
      height: 41px;
      width: 121px;
      position: absolute;
      top: 0;
      left: 0;
    
      @include linear-gradient(bottom, #003650 0%, #0b648d 5%, #3dc6e3 100%);
      border-top: 1px solid #a5efff;
      @include border-radius(5px);
      @include box-shadow(inset 0 0 0 0 rgba(0, 0, 0, 0));
    
    }
    
    .btn-widget {
      height: 20px;
      position: relative;
      top: 11px;
      left: 6px;
    }
    
    .i-twitter {
      display: block;
      height: 41px;
      width: 121px;
      position: absolute;
      top: 0;
    
      background: url(../img/i-twitter.png) no-repeat center top;
    }



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
[Alex Cican](http://dribbble.com/sican) for recommending image-less solution for [twitter icon](http://www.justbenicestudio.com/studio/websymbols/), maybe in next version I'll include it ;)




