gdjs.DialogCode = {};
gdjs.DialogCode.GDorg1Objects1= [];
gdjs.DialogCode.GDorg1Objects2= [];
gdjs.DialogCode.GDorg1Objects3= [];
gdjs.DialogCode.GDorg2Objects1= [];
gdjs.DialogCode.GDorg2Objects2= [];
gdjs.DialogCode.GDorg2Objects3= [];
gdjs.DialogCode.GDNewTextObjects1= [];
gdjs.DialogCode.GDNewTextObjects2= [];
gdjs.DialogCode.GDNewTextObjects3= [];
gdjs.DialogCode.GDNameTextObjects1= [];
gdjs.DialogCode.GDNameTextObjects2= [];
gdjs.DialogCode.GDNameTextObjects3= [];
gdjs.DialogCode.GDBluePanelObjects1= [];
gdjs.DialogCode.GDBluePanelObjects2= [];
gdjs.DialogCode.GDBluePanelObjects3= [];
gdjs.DialogCode.GDPercakapanTextObjects1= [];
gdjs.DialogCode.GDPercakapanTextObjects2= [];
gdjs.DialogCode.GDPercakapanTextObjects3= [];
gdjs.DialogCode.GDButtonNextObjects1= [];
gdjs.DialogCode.GDButtonNextObjects2= [];
gdjs.DialogCode.GDButtonNextObjects3= [];
gdjs.DialogCode.GDNewTiledSpriteObjects1= [];
gdjs.DialogCode.GDNewTiledSpriteObjects2= [];
gdjs.DialogCode.GDNewTiledSpriteObjects3= [];


gdjs.DialogCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "jam") >= 0.05;
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "jam");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


};gdjs.DialogCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "New dialogue tree");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "jam");
}{gdjs.dialogueTree.startFrom("Start");
}{gdjs.evtTools.sound.playSound(runtimeScene, "11 - Judging.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PercakapanText"), gdjs.DialogCode.GDPercakapanTextObjects1);
{for(var i = 0, len = gdjs.DialogCode.GDPercakapanTextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDPercakapanTextObjects1[i].setBBText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.DialogCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Hiiragi");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameText"), gdjs.DialogCode.GDNameTextObjects1);
{for(var i = 0, len = gdjs.DialogCode.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDNameTextObjects1[i].setBBText("Hiiragi");
}
}{for(var i = 0, len = gdjs.DialogCode.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDNameTextObjects1[i].setX(188);
}
}{for(var i = 0, len = gdjs.DialogCode.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDNameTextObjects1[i].setY(424);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Kagami");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameText"), gdjs.DialogCode.GDNameTextObjects1);
{for(var i = 0, len = gdjs.DialogCode.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDNameTextObjects1[i].setBBText("Kagami");
}
}{for(var i = 0, len = gdjs.DialogCode.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDNameTextObjects1[i].setX(520);
}
}{for(var i = 0, len = gdjs.DialogCode.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDNameTextObjects1[i].setY(424);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Stop");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.DialogCode.GDButtonNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NameText"), gdjs.DialogCode.GDNameTextObjects1);
{for(var i = 0, len = gdjs.DialogCode.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDNameTextObjects1[i].setBBText(" ");
}
}{for(var i = 0, len = gdjs.DialogCode.GDButtonNextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDButtonNextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.DialogCode.GDButtonNextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDButtonNextObjects1[i].getBehavior("Tween").addObjectPositionYTween2("ButtonNext", 26, "easeInOutQuad", 1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.DialogCode.GDButtonNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DialogCode.GDButtonNextObjects1.length;i<l;++i) {
    if ( gdjs.DialogCode.GDButtonNextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DialogCode.GDButtonNextObjects1[k] = gdjs.DialogCode.GDButtonNextObjects1[i];
        ++k;
    }
}
gdjs.DialogCode.GDButtonNextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};

gdjs.DialogCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DialogCode.GDorg1Objects1.length = 0;
gdjs.DialogCode.GDorg1Objects2.length = 0;
gdjs.DialogCode.GDorg1Objects3.length = 0;
gdjs.DialogCode.GDorg2Objects1.length = 0;
gdjs.DialogCode.GDorg2Objects2.length = 0;
gdjs.DialogCode.GDorg2Objects3.length = 0;
gdjs.DialogCode.GDNewTextObjects1.length = 0;
gdjs.DialogCode.GDNewTextObjects2.length = 0;
gdjs.DialogCode.GDNewTextObjects3.length = 0;
gdjs.DialogCode.GDNameTextObjects1.length = 0;
gdjs.DialogCode.GDNameTextObjects2.length = 0;
gdjs.DialogCode.GDNameTextObjects3.length = 0;
gdjs.DialogCode.GDBluePanelObjects1.length = 0;
gdjs.DialogCode.GDBluePanelObjects2.length = 0;
gdjs.DialogCode.GDBluePanelObjects3.length = 0;
gdjs.DialogCode.GDPercakapanTextObjects1.length = 0;
gdjs.DialogCode.GDPercakapanTextObjects2.length = 0;
gdjs.DialogCode.GDPercakapanTextObjects3.length = 0;
gdjs.DialogCode.GDButtonNextObjects1.length = 0;
gdjs.DialogCode.GDButtonNextObjects2.length = 0;
gdjs.DialogCode.GDButtonNextObjects3.length = 0;
gdjs.DialogCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.DialogCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.DialogCode.GDNewTiledSpriteObjects3.length = 0;

gdjs.DialogCode.eventsList1(runtimeScene);

return;

}

gdjs['DialogCode'] = gdjs.DialogCode;
