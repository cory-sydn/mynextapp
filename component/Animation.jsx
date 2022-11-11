import React, { useEffect, useState } from 'react'
import { useLottie } from "lottie-react";
import axios from 'axios';

const Animation = () => {
	const [animationData, setAnimationData] = useState(undefined);

  useEffect(() => {
    const fetcAnimation = async() => {
      const res = await axios("https://assets4.lottiefiles.com/datafiles/U1I3rWEyksM9cCH/data.json")
      setAnimationData(res.data)
    }
    fetcAnimation()
  }, [])

  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Animation