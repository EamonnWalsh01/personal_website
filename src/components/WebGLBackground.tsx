import React, { useEffect, useRef } from 'react';
import WTCGL from './WTCGL'; // You'll need to create this file

const vertexShaderSource = `
  attribute vec4 a_position;
  
  uniform mat4 u_modelViewMatrix;
  uniform mat4 u_projectionMatrix;
  
  void main() {
    gl_Position = a_position;
  }
`;

const fragmentShaderSource = `
  precision highp float;
  
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;
  uniform sampler2D u_noise;
  
  uniform float u_xscale;
  vec2 diagonalhash2(vec2 p)
  {
    return fract(vec2(sin((p.x + p.y) * 15.543) * 73964.686, sin((p.x + p.y) * 55.8543)*28560.986));
  }
  
  vec3 getColour(float d) {
    vec3 c = vec3(0.15);
    if( d <= .25 ) {
      // #F44336
      c = vec3(0.9568627450980393, 0.2627450980392157, 0.21176470588235294);
    } else if( d <= .5 ) {
      // #1E88E5
      c = vec3(0.11764705882352941, 0.5333333333333333, 0.8980392156862745);
    } else if( d <= .75 ) {
      // #FDD835
      c = vec3(0.9921568627450981, 0.8470588235294118, 0.20784313725490197);
    }
    
    return c;
  }
  
  vec3 pattern(vec2 uv, vec2 m) {
    
    vec2 grid = floor(uv);
    vec2 subuv = fract(uv);
    
    vec2 rand = diagonalhash2(grid);
    vec2 rand2 = diagonalhash2(grid + 100.);
    float shade = 0.;
    float df;
    
    if( rand.x <= .25 ) {
      df = subuv.x - subuv.y; // tl
    } else if( rand.x <= .5 ) {
      df = 1. - subuv.y - subuv.x;
    } else if( rand.x <= .75 ) {
      df = subuv.y - subuv.x;
    } else if( rand.x <= 1. ) {
      df = subuv.y - 1. + subuv.x;
    }
    
    shade = sin(df * floor(20. * rand.x * rand.y));
    shade += sin(df * rand.x * rand.y);
    float aa = rand.x * rand.y * .001;
    shade = smoothstep(.0, aa, shade);
    
    float mouseMask = smoothstep(.3, .31, length(m));
    vec3 c1 = mix(getColour(rand.x), getColour(rand2.x), mouseMask);
    vec3 c2 = mix(getColour(rand.y), getColour(rand2.y), mouseMask);
    
    return mix(c1, c2, shade );
  }
  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
    
    gl_FragColor = texture2D(u_noise, uv + diagonalhash2(uv + u_time)) * .2;
    
    vec2 m = u_mouse - uv;
    
    uv.y += sin(u_time) * .2;
    uv.x += u_time * .5;
    
    uv *= 6.;
    
    vec3 colour = pattern(uv, m);
    gl_FragColor += vec4(colour,1.0);
  }
`;

const WebGLBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const twodWebGL = new WTCGL(
      canvasRef.current,
      vertexShaderSource,
      fragmentShaderSource,
      window.innerWidth,
      window.innerHeight,
      window.devicePixelRatio
    );

    twodWebGL.startTime = -10000 + Math.random() * 5000;

    const handleResize = () => {
      twodWebGL.resize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let mousepos = [0, 0];
    const u_mousepos = twodWebGL.addUniform('mouse', WTCGL.TYPE_V2, mousepos);

    const handlePointerMove = (e: PointerEvent) => {
      let ratio = window.innerHeight / window.innerWidth;
      if (window.innerHeight > window.innerWidth) {
        mousepos[0] = (e.pageX - window.innerWidth / 2) / window.innerWidth;
        mousepos[1] = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1 * ratio;
      } else {
        mousepos[0] = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
        mousepos[1] = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1;
      }
      twodWebGL.addUniform('mouse', WTCGL.TYPE_V2, mousepos);
    };

    window.addEventListener('pointermove', handlePointerMove);

    const textures = [
      {
        name: 'noise',
        url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',
        type: WTCGL.IMAGETYPE_TILE,
        img: null
      }
    ];

    const loadImage = (imageObject: any) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          imageObject.img = img;
          resolve(imageObject);
        };
        img.onerror = reject;
        img.src = imageObject.url;
      });
    };

    const loadTextures = async (textures: any[]) => {
      for (let texture of textures) {
        try {
          const result = await loadImage(texture);
          twodWebGL.addTexture(result.name, result.type, result.img);
        } catch (error) {
          console.log('error', error);
        }
      }
      twodWebGL.initTextures();
      twodWebGL.running = true;
    };

    loadTextures(textures);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      // Clean up WebGL context if necessary
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default WebGLBackground;
