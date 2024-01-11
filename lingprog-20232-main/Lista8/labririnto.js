function changeBrightness(factor, sprite) {
    let virtCanvas = document.createElement('canvas');
    virtCanvas.width = 500;
    virtCanvas.height = 500;
    let context = virtCanvas.getContext('2d');
    context.drawImage(sprite, 0, 0, 500, 500);

    let imgData = context.getImageData(0, 0, 500, 500);

    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += factor;
        imgData.data[i + 1] += factor;
        imgData.data[i + 2] += factor;
    }
    context.putImageData(imgData, 0, 0);

    let spriteOutput = new Image();
    spriteOutput.src = virtCanvas.toDataURL();
    virtCanvas.remove();
    return spriteOutput;
}

function toggleVisablity(id) {
    if (document.getElementById(id).style.visibility == 'visible') {
        document.getElementById(id).style.visibility = 'hidden';
    } else {
        document.getElementById(id).style.visibility = 'visible';
    }
}