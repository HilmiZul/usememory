gdjs.JudulCode = {};
gdjs.JudulCode.GDNewTiledSpriteObjects1= [];
gdjs.JudulCode.GDNewTiledSpriteObjects2= [];
gdjs.JudulCode.GDGreyButtonObjects1= [];
gdjs.JudulCode.GDGreyButtonObjects2= [];


gdjs.JudulCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.JudulCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JudulCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.JudulCode.GDGreyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.JudulCode.GDGreyButtonObjects1[k] = gdjs.JudulCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.JudulCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dialog", false);
}}

}


};

gdjs.JudulCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JudulCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.JudulCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.JudulCode.GDGreyButtonObjects1.length = 0;
gdjs.JudulCode.GDGreyButtonObjects2.length = 0;

gdjs.JudulCode.eventsList0(runtimeScene);

return;

}

gdjs['JudulCode'] = gdjs.JudulCode;
