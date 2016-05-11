/*
control.js v0.1 - Add custom controls to Google Maps with ease
Created by Ron Royston, www.rack.pub
https://github.com/rhroyston/control
License: MIT

control.topCenter.add.(html)
*/

//Revealing Module Pattern (Public & Private) w getAA namespace
var control = (function() {
    
    // Public
    var pub = {};
    pub.topCenter = new Control('TOP_CENTER');
    pub.topLeft = new Control('TOP_LEFT');
    pub.topRight = new Control('TOP_RIGHT');
    pub.leftTop = new Control('LEFT_TOP');
    pub.rightTop = new Control('RIGHT_TOP');
    pub.leftCenter = new Control('LEFT_CENTER');
    pub.rightCenter = new Control('RIGHT_CENTER');
    pub.leftBottom = new Control('LEFT_BOTTOM');
    pub.rightBottom = new Control('RIGHT_BOTTOM');
    pub.bottomCenter = new Control('BOTTOM_CENTER');
    pub.bottomLeft = new Control('BOTTOM_LEFT');
    pub.bottomRight = new Control('BOTTOM_RIGHT'); 
    //Return just the public parts
    return pub;
    
    //Private Constructor
    function Control (cnst) {
        this.add = function(txt) {
            var elem = document.createElement('div');
            elem.innerHTML = txt;
            if(cnst){
                switch (cnst) {
                    case 'TOP_CENTER':
                        map.controls[google.maps.ControlPosition.TOP_CENTER].push(elem);
                        break;
                    case 'TOP_LEFT':  
                        map.controls[google.maps.ControlPosition.TOP_LEFT].push(elem);
                        break;
                    case 'TOP_RIGHT':
                        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(elem);
                        break;
                    case 'LEFT_TOP':  
                        map.controls[google.maps.ControlPosition.LEFT_TOP].push(elem);
                        break;
                    case 'RIGHT_TOP':
                        map.controls[google.maps.ControlPosition.RIGHT_TOP].push(elem);
                        break;
                    case 'LEFT_CENTER':  
                        map.controls[google.maps.ControlPosition.LEFT_CENTER].push(elem);
                        break;
                    case 'RIGHT_CENTER':
                        map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(elem);
                        break;
                    case 'LEFT_BOTTOM':  
                        map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(elem);
                        break;
                    case 'RIGHT_BOTTOM':
                        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(elem);
                        break;
                    case 'BOTTOM_CENTER':  
                        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(elem);
                        break;
                    case 'BOTTOM_LEFT':
                        map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(elem);
                        break;
                    case 'BOTTOM_RIGHT':
                        map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(elem);
                        break;
                }
            } else {
                console.log('err');
            }
        };
    } // end of Control Constructor
}());

