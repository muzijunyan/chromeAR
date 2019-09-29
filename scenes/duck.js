function createDuck() {
    let duck = new THREE.Object3D();
    let r = Math.random;

    let redCover = new THREE.MeshBasicMaterial({
        color: new THREE.Color(1, r() * 0.5, r() * 0.5) //"red"
    })
    let yelloCover = new THREE.MeshBasicMaterial({
        color: new THREE.Color(1, 1, r() * 0.5) // "yellow"
    })

    let boxSliceWidth = 0.15 //0.25;
    let boxDepth = 0.25 //0.50;
    let plateHeight = 0.06 //0.10;
    let boxHeight = 0.18 //0.30;

    let plate = new THREE.BoxGeometry(boxSliceWidth * 3, plateHeight, boxDepth); // width, height, depth
    let boxForm1 = new THREE.BoxGeometry(boxSliceWidth * 2, boxHeight, boxDepth);
    let boxForm2 = new THREE.BoxGeometry(boxSliceWidth * 4, boxHeight, boxDepth);
    let boxForm3 = new THREE.BoxGeometry(boxSliceWidth, boxHeight, boxDepth);

    let feet = new THREE.Mesh(plate, redCover);
    feet.position.y = plateHeight / 2;
    duck.add(feet);

    let leg = new THREE.Mesh(boxForm1, yelloCover);
    leg.position.y = boxHeight / 2 + plateHeight;
    leg.position.x = -boxSliceWidth / 2;
    duck.add(leg);

    let body = new THREE.Mesh(boxForm2, yelloCover.clone());
    body.position.y = boxHeight + boxHeight / 2 + plateHeight;
    body.position.x = -boxSliceWidth / 2;
    duck.add(body);

    let neck = new THREE.Mesh(boxForm3, yelloCover.clone());
    neck.position.y = boxHeight * 2 + boxHeight / 2 + plateHeight;
    neck.position.x = boxSliceWidth;
    duck.add(neck);

    let mouth = new THREE.Mesh(plate, redCover.clone());
    mouth.position.y = boxHeight * 3 + plateHeight + plateHeight / 2;
    mouth.position.x = boxSliceWidth * 2;
    duck.add(mouth);

    let head = new THREE.Mesh(boxForm1, yelloCover.clone());
    head.position.y = boxHeight * 3 + boxHeight / 2 + plateHeight * 2;
    head.position.x = boxSliceWidth * 3 / 2;

    let circleGeometry = new THREE.CircleGeometry(0.05, 53);
    let eye1 = new THREE.Mesh(circleGeometry, new THREE.MeshBasicMaterial({
        color: 0x000000
    }));
    let eye2 = new THREE.Mesh(circleGeometry, new THREE.MeshBasicMaterial({
        color: 0x000000,
        side: THREE.BackSide
    }));
    eye1.position.set(0.05, 0, boxDepth / 2 + 0.01);
    eye2.position.set(0.05, 0, -(boxDepth / 2 + 0.01));
    head.add(eye1);
    head.add(eye2);
    duck.add(head);

    duck.position.set(0, 0, -2);
    scene.add(duck);

    return duck;
}