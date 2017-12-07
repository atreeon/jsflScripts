function deleteLayer() {
    // variables
    var timeline = fl.getDocumentDOM().getTimeline();
    var layers = timeline.layers;

    // loop over layers
    for (var i = layers.length - 1; i >= 0; i--) {
        timeline.deleteLayer(i);
    }
}

function importNextFile (uri) {
    fl.getDocumentDOM().importFile(uri, false);
}

function exportAsSvg(uri) {
}