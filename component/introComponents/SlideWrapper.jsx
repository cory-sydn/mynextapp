import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Slider.module.scss";
import CoverItem from "./CoverItem";
import getTouchEventData from "./getTouchEventData";
import SliderGuide from "./SliderGuide";
import { getRefValue, useStateRef } from "./useStateRef";

const SlideWrapper = () => {
	const [step, setStep] = useState(0);
	const currentOffsetXRef = useRef(0);
	const startXRef = useRef(0);
	const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
	const wrapperRef = useRef(null);
	const minOffsetXRef = useRef(0);
	const MIN_SWIPE_REQUIRED = 40;

	const covers = [
		"/images/1.png",
		"/images/2.png",
		"/images/3.png",
		"/images/4.png",
	];

	const handleGuideClick = (e) => {
		const guideIndex = Number(e.target.dataset.index);
		setStep(guideIndex);
		const wrapperWidth = getRefValue(wrapperRef).offsetWidth;
		console.log(wrapperWidth);
		setOffsetX( -wrapperWidth * (guideIndex ))
	};

	const handleOnTouchMove = (e) => {
		const currentX = getTouchEventData(e).clientX;  // cursor's new position
		const diff = getRefValue(startXRef) - currentX;  // differance from starting X to new X.
		let newOffsetX = getRefValue(currentOffsetXRef) - diff;  // find item's new position X, substract cursor X differance from item's starting point.

		// restrict slide movement from both sides.
		const maxOffsetX = 0;
		const minOffsetX = getRefValue(minOffsetXRef)

		if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }
		setOffsetX(newOffsetX);  // users can drag as they wish. handletouchend handles correct positioning.
	};

	const handleOnTouchEnd = () => {
		const currentOffsetX = getRefValue(currentOffsetXRef); // starting point
		const wrapperWidth = getRefValue(wrapperRef).offsetWidth;
		let newOffsetX = getRefValue(offsetXRef); // final point
		const diff = currentOffsetX - newOffsetX;

		if ( Math.abs(diff) > MIN_SWIPE_REQUIRED ) {
			if(diff > 0) {
				newOffsetX = Math.floor( newOffsetX / wrapperWidth ) * wrapperWidth;
			} else {
				newOffsetX = Math.ceil( newOffsetX / wrapperWidth ) * wrapperWidth;
			}
		} else {
			newOffsetX = Math.round( newOffsetX / wrapperWidth) * Math.abs(wrapperWidth)
		}

		console.log(Math.abs(newOffsetX / wrapperWidth	));
		setStep(Math.abs(newOffsetX / wrapperWidth	))
		setOffsetX(newOffsetX)
		window.removeEventListener("mousemove", handleOnTouchMove);
		window.removeEventListener("mouseup", handleOnTouchEnd);
		window.removeEventListener("touchmove", handleOnTouchMove);
		window.removeEventListener("touchend", handleOnTouchEnd);
	};


	const handleOnTouchStart = (e) => {
		currentOffsetXRef.current = getRefValue(offsetXRef);// save starting point X of the slide.
		startXRef.current = e.clientX;  // save starting position X of the cursor.
		const coversWrapperEl = getRefValue(wrapperRef);
		minOffsetXRef.current = coversWrapperEl.offsetWidth - coversWrapperEl.scrollWidth; // save end of the slide. -> remaining scroll length on the right after first item width.

		window.addEventListener("mousemove", handleOnTouchMove);
		window.addEventListener("mouseup", handleOnTouchEnd);
		window.addEventListener("touchmove", handleOnTouchMove);
		window.addEventListener("touchend", handleOnTouchEnd);
	};

	return (
		<div
			className={styles.container}
			onMouseDown={handleOnTouchStart}
			onTouchStart={handleOnTouchStart}
			>
			<ul
				className={styles.coversWrapper}
				style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
				ref={wrapperRef}
			>
				{covers.map((cover, index) => (
					<CoverItem  key={index * 5} cover={cover} />
				))}
			</ul>
			<div className={styles.SliderGuideWrapper}>
				{covers.map((cover, index) => (
					<SliderGuide
						key={cover}
						index={index}
						handleGuideClick={handleGuideClick}
						step={step}
					/>
				))}
			</div>
		</div>
	);
};

export default SlideWrapper;
