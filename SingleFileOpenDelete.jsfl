/*
as the export isn't working, we could do the following
1. show open file dialog, user selects file
2. deletes the layer
3. save as fla with same name as import

a. then, the user can manually export, then run the command again for the next file
*/


fl.trace('-------RunAll.jsfl---------');

var fileDescription = "swf (*.swf)";
var fileFilter = "swf";
var uri = fl.browseForFileURL("open", "Select a FLA or AS file", fileDescription, fileFilter);

fl.trace(uri);

var commonFunctionsUri = "file:///C|/Users/atree/OneDrive/200WordsADay/jsflScripts/commonfunctions.jsfl";
try {
    fl.runScript(commonFunctionsUri, "deleteLayer");
    fl.runScript(commonFunctionsUri, "importNextFile", uri);
} catch (err) {
    fl.trace('-------Error---------');
    fl.trace(curFile);
    fl.trace(er);
    fl.trace('----------------');
}