// src/WTCGL.ts or src/components/WTCGL.ts

export default class WTCGL {
  static TYPE_FLOAT = 'float';
  static TYPE_V2 = 'v2';
  static IMAGETYPE_TILE = 'tile';

  constructor(
    canvas: HTMLCanvasElement,
    vertexShader: string,
    fragmentShader: string,
    width: number,
    height: number,
    devicePixelRatio: number
  ) {
    // Initialize WebGL context and shaders
    // You'll need to implement this based on your specific WebGL setup
  }

  startTime: number = 0;

  resize(width: number, height: number) {
    // Implement resize logic
  }

  addUniform(name: string, type: string, value: any) {
    // Implement uniform addition logic
  }

  addTexture(name: string, type: string, image: HTMLImageElement) {
    // Implement texture addition logic
  }

  initTextures() {
    // Initialize textures
  }

  set running(value: boolean) {
    // Implement running setter
  }

  // Add any other methods used in your WebGLBackground component
}
