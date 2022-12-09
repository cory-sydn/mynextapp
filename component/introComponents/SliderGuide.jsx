import React from "react";
import styles from "../../styles/Slider.module.scss";

const SliderGuide = ({ handleGuideClick, step, index }) => {
	return (
		<div
			onClick={handleGuideClick}
			data-index={index}
			className={step === index ? styles.SliderGuide_active : styles.SliderGuide}
		></div>
	);
};

export default SliderGuide;
