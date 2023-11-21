"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "@/components/Loader";
import Island from "@/models/Island";
import { Sky } from "@/models/Sky";
export default function Home() {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  // const adjustBiplaneForScreenSize = () => {
  //   let screenScale, screenPosition;
  //   if (window)
  //     if (window?.innerWidth < 768) {
  //       // If screen width is less than 768px, adjust the scale and position
  //       screenScale = [1.5, 1.5, 1.5];
  //       screenPosition = [0, -1.5, 0];
  //     } else {
  //       screenScale = [3, 3, 3];
  //       screenPosition = [0, -4, -4];
  //     }

  //   return [screenScale, screenPosition];
  // };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    console.log(window?.innerWidth);
    if (typeof window !== "undefined" && window?.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  // const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <>
      <section className="w-full h-screen relative">
        <Canvas
          className="w-full h-screen bg-transparent"
          camera={{ near: 0.01, far: 100000 }}
        >
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight groundColor="#000000" intensity={1} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.3, 4.7077, 0]}
            scale={islandScale}
          />
          <Sky isRotating={false} />
          <Suspense fallback={<Loader />}></Suspense>
        </Canvas>
      </section>
    </>
  );
}
