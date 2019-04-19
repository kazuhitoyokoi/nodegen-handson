// name: image segmenter
// outputs: 1
var imageSegmenter = global.get('imageSegmenter');
imageSegmenter.predict(msg.payload).then(function (response) {
    msg.payload = response.objectsDetected;
    node.send(msg);
});