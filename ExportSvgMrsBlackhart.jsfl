var folder = fl.browseForFolderURL("Choose a folder to publish:");
var files = FLfile.listFolder(folder + "/*.fla", "files");

for (file in files) {
    var curFile = files[file];

    try {
        fl.openDocument(folder + "/" + curFile);
        var exportFileName = folder + '/../output/' + fl.getDocumentDOM().name.replace('.fla','.svg');
        fl.getDocumentDOM().exportSVG(exportFileName, true, true);
        fl.closeDocument(fl.getDocumentDOM());
    } catch (er) {
        fl.trace(curFile);
        fl.trace(er);
        fl.trace('----------------');
    }
}