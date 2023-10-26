function log(target, level, message) {
  const now = new Date();
  console.log(`[${now.getHours()}:${now.getMinutes()}] [${target}] [${level}] ${message}`);
}
log("console", "DEBUG", "debug message...");
log("console", "DEBUG", "debug message2...");
log("console", "ERROR", "some error...");

// 이렇게 여러개롤 쪼개면 함수의 재활용성이 높아짐
var logger = _.curry(log);
logger("console")("DEBUG")("hello");

var myLog = logger("network");
myLog.debug = myLog("DEBUG");
myLog.info = myLog("INFO");

myLog.info("server started on port 1234");
myLog.debug("server test ... OK");
