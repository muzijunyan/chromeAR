# chromeAR

Experiments about AR scenerios in the Android Chrome Browser. 
## Prerequisite

You need to have:

1. an AR supported [Android device](https://developers.google.com/ar/discover/supported-devices);
2. Chrome browser from version 76;
3. the XR capability enabled:
    - type <b>"chrome://flags"</b> in the browser address line;
    - search "XR" related flags:
        - ensure <b>WebXR Device API</b> is enabled;
        - ensure <b>WebXR Hit Test</b> is enabled;
    - <i>You will be prompt to <b>relaunch</b> chrome after the settings are updated for the first time. </i>


## Samples

1. A simple 3D Sphere:

    This [sample](Shpere/index.html)  demonstrates a 3D sphere in the XR compatible Android Chrome Browser ([live example](https://muzijunyan.github.io/chromeAR/Sphere/index.html)). The 3D sphere is modeled in the glTF format.

    The sample is adapted from https://immersive-web.github.io/webxr-samples/proposals/phone-ar.html

2. A simple 3D Sphere with [three.js](https://threejs.org/):

    This [sample](Shpere/index3.html) demonstrates a 3D sphere in the XR compatible Android Chrome Browser ([live example](https://muzijunyan.github.io/chromeAR/Sphere/index3.html)). The 3D sphere is created with three.js framework.

    After you confirm to start the AR scene and go around with your device, you could see a red 3D sphere placed in your environment.

3. Hit the 3D Sphere (ray casting) with [three.js](https://threejs.org/):

    This [sample](Shpere/index3_hit_ball.html) demonstrates how you can use ray casting to hit the 3D sphere in the AR with your device ([live example](https://muzijunyan.github.io/chromeAR/Sphere/index3_hit_ball.html)). 
    
    You can go around with your device, with the help of the crosshair shown on your device screen, to aim the sphere to see the hit effect.

4. other samples:

    <i>...coming soon...<i>


