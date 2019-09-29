export function setRenderer(renderer, render) {
    // set renderer
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.vr.enabled = true;
    document.body.appendChild(renderer.domElement);

    // init AR
    initAR(renderer);

    // set animation loop
    renderer.setAnimationLoop(render);
}

function initAR(renderer) {
    // init AR Button
    var xrButton = document.getElementById("startAR");
    if (!xrButton) {
        xrButton = document.createElement("button");
        xrButton.id = "startAR";
        xrButton.disabled = true;
        xrButton.innerHTML = "AR NOT FOUND";
        document.body.appendChild(xrButton);
    }

    function onRequestSession() {
        navigator.xr.requestSession('immersive-ar').then((session) => {
            onSessionStarted(session);
        });
    }

    function onSessionStarted(session) {
        renderer.vr.setSession(session);
    }

    if (navigator.xr) {
        navigator.xr.supportsSession('immersive-ar').then(() => {
            xrButton.disabled = false;
            xrButton.innerHTML = "Start AR"
            xrButton.addEventListener('click', () => onRequestSession());
        });
    }
};