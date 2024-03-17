import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

import { titaniumImg, yellowImg } from '../utils';
import { models, sizes } from '../constants';
import ModelView from './model-view';
import { animateWithGsapTimeline } from '../utils/animations';
import WebGLNotSupported from './webGL-not-supported';

const Model = () => {
  const [webGLSupported, setWebGLSupported] = useState(false);
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPear 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
    placeholderImage: titaniumImg,
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    // Define a simple regex to test for mobile and tablet user agents
    const mobileAndTabletRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    const isMobileOrTablet = mobileAndTabletRegex.test(navigator.userAgent);

    // You can adjust this width based on your needs or testing
    const MOBILE_MAX_WIDTH = 768; // Typical screen width to consider as mobile/tablet

    const screenWidth = window.innerWidth;

    // Use both screen width and userAgent to determine if WebGL should be supported
    if (isMobileOrTablet || screenWidth <= MOBILE_MAX_WIDTH) {
      setWebGLSupported(false);
    } else {
      setWebGLSupported(true);
    }
  }, []);

  useEffect(() => {
    if (size === 'large') {
      animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2,
      });
    }

    if (size === 'small') {
      animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 });
  }, []);

  if (!webGLSupported) {
    return (
      <section className='common-padding'>
        <div className='screen-max-width'>
          <h1
            id='heading'
            className='section-heading'
          >
            Take a closer look.
          </h1>

          <WebGLNotSupported
            model={model}
            setModel={setModel}
            models={models}
          />
        </div>
      </section>
    );
  }

  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <h1
          id='heading'
          className='section-heading'
        >
          Take a closer look.
        </h1>

        <div className='flex flex-col items-center mt-5'>
          <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
            <ModelView
              index={1}
              groupRef={small}
              gsapType='view1'
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType='view2'
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className='w-full h-full'
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden',
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className='mx-auto w-full'>
            <p className='text-sm font-light text-center mb-5'>{model.title}</p>

            <div className='flex-center'>
              <ul className='color-container'>
                {models.map((item, i) => (
                  <li
                    key={i}
                    className='w-6 h-6 rounded-full mx-2 cursor-pointer'
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <button className='size-btn-container'>
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className='size-btn'
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white',
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
