            var animatePoints = function() {
 
                 var points = document.getElementsByClassName('point');
 
                 var revealPoint = function(points) {
                     points.style.opacity = 1;
                     points.style.transform = "scaleX(1) translateY(0)";
                     points.style.msTransform = "scaleX(1) translateY(0)";
                     points.style.WebkitTransform = "scaleX(1) translateY(0)";
                 };
 
       
                 
 
                    for (var i = 0; i <= points.length; i++){
                        
                        
                        revealPoint(points[i]);
                        
                        
                    }
 
             };