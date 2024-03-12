import React from "react";

const Avatar = ({src,width,height,children}) => {
    console.log(children);
	return (
		<>
			<img src={src} width={width} height={height} alt="img" />
            {children}
		</>
	);
};

export default Avatar;
