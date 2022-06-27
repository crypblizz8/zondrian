import React, { useState } from 'react'
import BaseSketch from 'react-p5'

const windowWidth = 500
const windowHeight = 500
const Sketch = ({ zorbs, zoraEvents = { length: 500 } }) => {
	const [t, setT] = useState(0)
	const [zorbArray, setZorbArray] = useState([])


    let circles = [];

    const MondColorsHex = [
    "#ff0000",
    "#000000",
    "#0000FF",
    "#FFFF00",
    "#FFFFFF"
    ]; // red, black, blue, yellow, white
    
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
        p5.createCanvas(500, 500).parent(canvasParentRef)
        p5.background(255);
        p5.stroke(0);
        p5.strokeWeight(1);
        p5.rect(0, 0, windowWidth, windowHeight);

        p5.rect(50, 50, 10, 10, 3);

	}

    const draw = p5 => {
        console.log('test the draw')
          // Lets make sure we don't get stuck in infinite loop
        let protection = 0;

        // Try to get to 500
        while (circles.length < 10) {
                var circle = {
                    x: p5.random(0,500),
                    y: p5.random(0,500),
                    w: p5.random(0, 500),
                    h: p5.random(0, 500),
                }

            // Does it overlap any previous circles?
            var overlapping = false;
            for (var j = 0; j < circles.length; j++) {
            var other = circles[j];
            // var d = dist(circle.x, circle.y, other.x, other.y);
            var xCheck = circle.x < other.x + other.w && other.x < circle.x + circle.w;
            var yCheck = circle.y < other.y + other.h && other.y < circle.y + circle.h;
            if (xCheck && yCheck) {
                overlapping = true;
            }
            }
            // x1 < x2+w2 AND x2 < x1+w1
            
            // If not keep it!
            if (!overlapping) {
            circles.push(circle);
            }

            // Are we stuck?
            protection++;
            if (protection > 10000) {
            break;
            }
        }

        // Draw all the circles
        for (var i = 0; i < circles.length; i++) {
            // let j = p5.round(p5.random(4));
            // p5.fill(MondColorsHex[j]);
            // I think its drwaing 500 times +
            p5.fill(41)
            p5.stroke(45);
            p5.strokeWeight(2);
            p5.rect(circles[i].x + 2, circles[i].y + 2, circles[i].w + 2 , circles[i].h + 2);
        }
		
    }



	return <BaseSketch setup={setup} draw={draw} />
}


export default Sketch