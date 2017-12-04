/*
as the export isn't working, we could do the following
1. show open file dialog, user selects file
2. deletes the layer
3. save as fla with same name as import

a. then, the user can manually export, then run the command again for the next file
*/


fl.trace('-------RunAll.jsfl---------');

var folder = fl.browseForFolderURL("Choose a folder to publish:");
fl.trace(folder);
var files = FLfile.listFolder(folder + "/*.swf", "files");
fl.trace(files.length + '| files');

var commonFunctionsUri = "file:///C:/Users/atree/AppData/Local/Adobe/Animate%20CC%202018/en_US/Configuration/Commands/commonfunctions.jsfl";
var curFile;
var curFileSvg;

for (file in files) {
    try {
        curFile = folder + "/" + files[file];
        fl.trace(curFile);
        
        fl.runScript(commonFunctionsUri, "deleteLayer");
        fl.getDocumentDOM().importFile(curFile, false);
        fl.saveDocument(fl.documents[0], curFile.replace(/\.[^/.]+$/, "") + ".fla");

        curFileSvg = curFile.replace(/\.[^/.]+$/, "") + ".svg";
        fl.getDocumentDOM().exportSVG(curFileSvg, true, true);
        fl.trace(curFileSvg);
    } catch (err) {
        fl.trace('-------Error---------');
        fl.trace(curFile);
        fl.trace(er);
        fl.trace('----------------');
    }
}    
