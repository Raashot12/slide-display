import React, {useState} from 'react';
import './App.css'
import ImgComp from './ImgComp.js';
import i1 from "./pics/1.jpg";
import i2 from "./pics/2.jpg";
import i3 from "./pics/3.jpg";
import i4 from "./pics/4.jpg";
import i5 from "./pics/5.jpg";
const images = [ i1, i2, i3, i4, i5 ];
function Slider() {
	const [x, setX] = useState(0);
	const sliderArr = images.map((item,index) => <ImgComp src={item} key={index}/>);
	const goLeft =()=> {
		x=== 0 ? setX(- 100 * (sliderArr.length - 1)) : setX(x + 100);
	};
	const goRight =()=>{
		x=== -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
	};
	return(
		<div className="slider">
			{sliderArr.map((item,index)=>{
				return(
						<div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
							{item}
						</div>
			    );
			})}
			<button id="goLeft" onClick={goLeft}>Click Left  <i class="fa fa-backward"></i></button>
			
			<button id="goRight" onClick={goRight}>Click Right <i class="fa fa-forward"></i></button>
		</div>
	)
}

export default Slider;