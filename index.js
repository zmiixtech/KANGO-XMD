const {
  spawn
} = require("child_process");
const path = require("path");
function start() {
  let _0x53bfac = [path.join(__dirname, "core.js"), ...process.argv.slice(2)];
  console.log([process.argv[0], ..._0x53bfac].join("\n"));
  let _0x51098c = spawn(process.argv[0], _0x53bfac, {
    'stdio': ["inherit", "inherit", "inherit", "ipc"]
  }).on("message", _0x36e936 => {
    if (_0x36e936 == "reset") {
      console.log("Restarting Bot...");
      _0x51098c.kill();
      start();
      delete _0x51098c;
    }
  }).on("exit", _0x4993c4 => {
    console.error("Exited with code:", _0x4993c4);
    if (_0x4993c4 == 0 || _0x4993c4 == 1 || _0x4993c4 == 401) {
      start();
    }
  });
}
start();