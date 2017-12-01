/*
as the export isn't working, we could do the following
1. show open file dialog, user selects file
2. deletes the layer
3. save as fla with same name as import

a. then, the user can manually export, then run the command again for the next file
*/

fl.trace('-------RunAll.jsfl---------');

var fileDescription = "";
var fileFilter = "";
var uri = fl.browseForFileURL("open", "Select a FLA or AS file", fileDescription, fileFilter);

fl.trace(uri);

//C:\Users\atree\AppData\Local\Adobe\Animate CC 2018\en_US\Configuration\Commands
var commonFunctionsUri = "file:///C|/Users/atree/AppData/Local/Adobe/Animate%20CC%202018/en_US/Configuration/Commands/commonfunctions.jsfl";
try {
    fl.runScript(commonFunctionsUri, "deleteLayer");
    fl.runScript(commonFunctionsUri, "importNextFile", uri);
    fl.saveDocument(fl.documents[0], uri.replace(/\.[^/.]+$/, "") + ".fla");
} catch (er) {
    fl.trace('-------Error---------');
    fl.trace(uri);
    fl.trace(er);
    fl.trace('----------------');
}