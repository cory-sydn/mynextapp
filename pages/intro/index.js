import React, { useCallback, useEffect, useState } from "react";
import Logo from "../../component/Logo";
//import Image from "next/image";
//import cover from "../../public/images/cover.svg";
import styles from "../../styles/Intro.module.scss";
import { useRouter } from "next/router";
import SlideWrapper from "../../component/introComponents/SlideWrapper";

const Intro = () => {
	const [state, setState] = useState(true);
	const router = useRouter();

	const handleStart = useCallback(() => {
		sessionStorage.setItem("pageView", "started");
		setState(false);
		router.push("/home", "/home", undefined);
	}, [router]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const status = sessionStorage.getItem("pageView");
			if (status === "started") setState(false);
		}
	}, []);

	return (
		<div
			className={styles.container}
			style={{ display: state ? "flex" : "none" }}
		>
			<div className={styles.header}>
				<Logo type="head" />
				<div className={styles.headerDesc}>“Pixel Perfect”</div>
			</div>
			{/* <div className={styles.cover}>
				<Image
					src={cover}
					className={styles.coverImg}
					placeholder="blur"
					blurDataURL="../../public/images/cover.webp"
					height="auto"
					width="auto"
					priority="false"
					alt="cover"
				/>
			</div> */}
			<SlideWrapper />
			<div className={styles.box}>
				<div className={styles.boxHeader}>
					<div className={styles.boxTitle}>Wellcome to the TestCase App </div>
					<div className={styles.boxDesc}>
						We created this exercise to gain insights about your development
						skills.{" "}
					</div>
				</div>
				<button onClick={handleStart}>Start</button>
			</div>
		</div>
	);
};

export default Intro;
