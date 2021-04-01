---
title: "Home on Hold Comic"
layout: default-es
---
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script type="text/javascript">
var main = function() {

var paused = false

$('.arrowR').click(function() {
  paused = true;
  console.log("ook!");
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
  return false;
});
  
$('.arrowL').click(function() {
  paused = true;
  $('#slideshow > div:last')
  .fadeIn(1000)
  .prependTo('#slideshow')
  .next()
  .fadeOut(1000)
  .end();
  return false;
});
 

};

$(document).ready(main);
</script>

<section class="introduction introduction--donate">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="introduction__text">
          <h1>Home on Hold Comic</h1>
        </div>
        <div class="introduction__link">
          <a class="button" href="home-on-hold.html.en">Read in english</a>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="heading heading--disclaimer">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="heading__subheadline">
          <h2>Home on Hold</h2>
          <div class="horizontal-line">
          </div>
        </div>
        <div class="heading__text">
          <p>
            Lorem ipsum solor dut amet.
          </p>
        </div>
      </div>
      <div class="col-md-12 align-middle">
        <div id="home-on-hold-slideshow" class="container">
          <a href="#" class="arrowL">&lt;</a>
          <div id="slideshow">
            <div><img src="http://unsplash.it/620/450?image=401"/></div>
            <div class="hidden"><img src="http://unsplash.it/620/450?image=368"/></div>
            <div class="hidden"><img src="http://unsplash.it/620/450?image=266"/></div>
          </div>
          <a href="#" class="arrowR">&gt;</a>
        </div>
      </div>
    </div>
  </div>
</section>