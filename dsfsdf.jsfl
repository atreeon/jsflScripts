fl.outputPanel.clear(); 
fl.trace('Start');
var XML = ""; 
var doc = fl.getDocumentDOM();
var baseName = doc.name;
var XML = doc.exportPublishProfileString();
var tl = doc.getTimeline();


//Change Publish Settings
XML = XML.replace(/<flash>.<\/flash>/,'<flash>0</flash>');
XML = XML.replace(/<swc>.<\/swc>/,'<swc>0</swc>');
XML = XML.replace(/<ExportSwc>.<\/ExportSwc>/,'<ExportSwc>0</ExportSwc>');
XML = XML.replace(/<gif>.<\/gif>/,'<gif>0</gif>');
XML = XML.replace(/<jpeg>.<\/jpeg>/,'<jpeg>0</jpeg>');
XML = XML.replace(/<png>.<\/png>/,'<png>0</png>');
XML = XML.replace(/>.<\/publishFormat>/,">1<\/publishFormat>");
XML = XML.replace('<Property name="default">true</Property>','<Property name="default">false</Property>');
XML = XML.replace('<Property name="includeHiddenLayers">true</Property>','<Property name="includeHiddenLayers">false</Property>');
XML = XML.replace('<Property name="copy">true</Property>','<Property name="copy">false</Property>');
fl.trace(XML);

function ZeroFormat(num,max){
	var tmp=""+num;
	while(tmp.length<max){
		tmp="0"+tmp;
	}
	return tmp;
};
function publishAllFrames(){
	for (var i = 0; i < (tl.frameCount); i ++){
		tl.currentFrame = i;
		var fileName = doc.name.slice(0,-4) + "_output_" + ZeroFormat(i,3) + ".svg";
		XML = XML.replace(/<Property ?name="filename">.*<\/Property>/,'<Property name="filename">' + fileName + '</Property>');
		doc.importPublishProfileString(XML);
		doc.publish();
	}
};
function publishKeyFrames(){
	var layers = tl.layers;
	var layNum = tl.getSelectedLayers();
	var srcLay = layers[layNum];

	if (srcLay.layerType === "folder"){
		for (var i = Number(layNum) + 1; i <= (tl.layerCount); i ++){
			srcLay = layers[i];
			if (srcLay.layerType !== "folder"){break;}
		}
	};

	var frames = srcLay.frames;
	var n = frames.length;
	var fNum = 0;
		
	for(var i = 0; i < n; i++){
		if(i == frames[i].startFrame){
			tl.currentFrame = i;
			var fileName = doc.name.slice(0,-4) + "_output_" + ZeroFormat(fNum,3) + ".svg";
			XML = XML.replace(/<Property ?name="filename">.*<\/Property>/,'<Property name="filename">' + fileName + '</Property>');
			doc.importPublishProfileString(XML);
			doc.publish();
			fNum ++;
		};
	};
};

//select exportFrames
var changeMode = prompt("01:All Frames / 02:Key Frames", "01");
if (changeMode === "01"){
	publishAllFrames();
}else if (changeMode === "02"){
	publishKeyFrames();	
}
