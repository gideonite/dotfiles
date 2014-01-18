
// Monitors
var leftMonitor = "0";
var rightMonitor = "1";

// Operations

// full screen of left monitor
var leftMonitorFull = S.op("move", {
  "screen" : leftMonitor,
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});
// left half of left monitor
var leftMonitorLeft = leftMonitorFull.dup({ "width" : "screenSizeX/2" });
// right half of left monitor
var leftMonitorRight = leftMonitorLeft.dup({ "x" : "screenOriginX+(screenSizeX/2)" });
// left, top quarter of left monitor
var leftMonitorLeftTop = leftMonitorLeft.dup({ "height" : "screenSizeY/2" });
// left, bottom quarter of left monitor
var leftMonitorLeftBottom = leftMonitorLeftTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
// right, top quarter of left monitor
var leftMonitorRightTop = leftMonitorRight.dup({ "height" : "screenSizeY/2" });
// right, bottom quarter of left monitor
var leftMonitorRightBottom = leftMonitorRightTop.dup({ "y" : "screenOriginY+screenSizeY/2" });

// full screen of right monitor
var rightMonitorFull = S.op("move", {
  "screen" : rightMonitor,
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});
// left half of right monitor
var rightMonitorLeft = rightMonitorFull.dup({ "width" : "screenSizeX/2" });
// right half of right monitor
var rightMonitorRight = rightMonitorLeft.dup({ "x" : "screenOriginX+(screenSizeX/2)" });
// left, top quarter of right monitor
var rightMonitorLeftTop = rightMonitorLeft.dup({ "height" : "screenSizeY/2" });
// left, bottom quarter of right monitor
var rightMonitorLeftBottom = rightMonitorLeftTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
// right, top quarter of right monitor
var rightMonitorRightTop = rightMonitorRight.dup({ "height" : "screenSizeY/2" });
// right, bottom quarter of right monitor
var rightMonitorRightBottom = rightMonitorRightTop.dup({ "y" : "screenOriginY+screenSizeY/2" });

// Location Bindings
S.bnda({
  // Left screen locations
  "pad0:ctrl" : leftMonitorFull,
  "pad1:ctrl" : leftMonitorLeft,
  "pad2:ctrl" : leftMonitorRight,
  "pad7:ctrl" : leftMonitorLeftTop,
  "pad8:ctrl" : leftMonitorRightTop,
  "pad4:ctrl" : leftMonitorLeftBottom,
  "pad5:ctrl" : leftMonitorRightBottom,
  // Right screen locations
  "pad0:cmd" : rightMonitorFull,
  "pad1:cmd" : rightMonitorLeft,
  "pad2:cmd" : rightMonitorRight,
  "pad7:cmd" : rightMonitorLeftTop,
  "pad8:cmd" : rightMonitorRightTop,
  "pad4:cmd" : rightMonitorLeftBottom,
  "pad5:cmd" : rightMonitorRightBottom,
});