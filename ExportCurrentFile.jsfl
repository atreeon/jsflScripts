// (function () {
//     fl.trace('1');
//     var dom = fl.getDocumentDOM();
//     fl.trace('blah');
//     var uri = "file:///C|/temp/200wad/1Pictures_just_swfs/attenzione ,exc.svg";
//     fl.trace(uri);
//     dom.exportSVG(uri, true, true);
// })();

var exportFileName = 'file:///C:/temp/a.svg';
fl.getDocumentDOM().exportSVG(exportFileName, true, true);

