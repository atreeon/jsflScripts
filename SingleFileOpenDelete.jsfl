/*
as the export isn't working, we could do the following
1. show open file dialog, user selects file
2. deletes the layer
3. save as fla with same name as import

a. then, the user can manually export, then run the command again for the next file
*/

fl.trace('-------SingleFileOpenDelete.jsfl---------');

var fileDescription = "";
var fileFilter = "";
var uri = fl.browseForFileURL("open", "Select a FLA or AS file", fileDescription, fileFilter);

fl.trace(uri);

//C:\Users\atree\AppData\Local\Adobe\Animate CC 2018\en_US\Configuration\Commands
var commonFunctionsUri = "file:///C|/Users/atree/AppData/Local/Adobe/Animate%20CC%202018/en_US/Configuration/Commands/commonfunctions.jsfl";
try {
    //Start of new code

    // var doc = fl.getDocumentDOM(); 
    // var resultsArray = fl.findObjectInDocByType("shape", doc); 
    // fl.trace(resultsArray.length);

    // for (var i = 0; i < resultsArray.length; i++) {
    //     fl.trace(resultsArray[i].width);
    // }
    
    // var layers = fl.getDocumentDOM().getTimeline().layers;
    // for (var i = 0; i < layers.length; i++) {
    //     fl.trace(layers[i].height);
    //     fl.trace(layers[i].width);
    // }

    //End of new code
    fl.runScript(commonFunctionsUri, "deleteLayer");
    fl.runScript(commonFunctionsUri, "importNextFile", uri);


    fl.saveDocument(fl.documents[0], uri.replace(/\.[^/.]+$/, "") + ".fla");
} catch (er) {
    fl.trace('-------Error---------');
    fl.trace(uri);
    fl.trace(er);
    fl.trace('----------------');
}