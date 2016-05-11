# [control.js](https://github.com/rhroyston/control-js)
## Synopsis

Add custom controls to Google Maps with ease.  

Custom copyrights and logos should be added to Google Maps via custom controls vs simple CSS positioning.

Control.js is an add-on JavaScript library of custom control methods with IDE intellisense/auto-complete showing control positioning to Google Maps via the Javascript API.

## Code Example
```
//Apply CSS Id's and Classes as normal
var html0 = '<a href="http://www.rack.pub"><img src="http://www.rack.pub/favicons/android-chrome-192x192.png" alt="logo" class="logo"></a>';
var html1 = '<a href="http://www.rack.pub" class="copyright">&#169; My Copyright</a>';

//Global method that is fired when the Google Maps API is loaded and ready
function initMap () {
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //intelliSense/Auto-complete works on IDE's
    control.topCenter.add(html0);
    control.bottomLeft.add(html1);
};
```
![My image](rhroyston.github.com/control-js/screenshot.jpg)
## Motivation

The Official Google Maps JavaScript API custom controls example example is not easy and the number of control positions are difficult to remember.  

The official examples use JavaScript to dynamically create HTML and CSS which are then passed to a constructor function.  This add-on makes adding custom controls easy. 

## Installation

Simply add the control.js file to your project and reference it using `<script>` tags or paste it in to your existing JavaScript.

## API Reference

Simply hand one of the methods a valid HTML string as an argument. CSS can be inline or referenced as usual.  Using intellesense in your IDE is recommended as it remonds you of the possible location options for your new custom control.

```
    control.topCenter.add.(html)
    control.topLeft.add.(html)
    control.topRight.add.(html)
    control.leftTop.add.(html)
    control.rightTop.add.(html)
    control.leftCenter.add.(html)
    control.rightCenter.add.(html)
    control.leftBottom.add.(html)
    control.rightBottom.add.(html)
    control.bottomCenter.add.(html)
    control.bottomLeft.add.(html)
    control.bottomRight.add.(html)
```
## Contributors

Ron Royston

## License

Ron Royston, www.rack.pub, MIT License