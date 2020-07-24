import React from 'react';



function ImgComp({src, key}){
	return <img src={src} alt="slide-img" key={key}></img>;
}

export default ImgComp;