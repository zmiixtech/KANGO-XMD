require("./settings");
const makeWASocket = require("@whiskeysockets/baileys")["default"];
const {
  default: XploaderConnect,
  getAggregateVotesInPollMessage,
  delay,
  PHONENUMBER_MCC,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  Browsers
} = require("@whiskeysockets/baileys");
const {
  color
} = require("./lib/color");
const fs = require('fs');
const pino = require("pino");
const lolcatjs = require("lolcatjs");
const path = require("path");
const NodeCache = require("node-cache");
const fetch = require("node-fetch");
const FileType = require("file-type");
const _ = require("lodash");
const chalk = require("chalk");
const os = require('os');
const express = require("express");
const RateLimit = require("express-rate-limit");
const app = express();
const {
  File
} = require("megajs");
const PhoneNumber = require("awesome-phonenumber");
const readline = require("readline");
const {
  formatSize,
  runtime,
  sleep,
  serialize,
  smsg,
  getBuffer
} = require("./lib/myfunc");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./lib/exif");
const {
  toAudio,
  toPTT,
  toVideo
} = require("./lib/converter");
const store = makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
const low = require("./lib/lowdb");
const yargs = require("yargs/yargs");
const {
  Low,
  JSONFile
} = low;
const port = process.env.PORT || 3000;
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.db = new Low(new JSONFile("src/database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x2d741d => setInterval(function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x2d741d(global.db.data == null ? global.loadDatabase() : global.db.data);
      } else {
        null;
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    'users': {},
    'database': {},
    'chats': {},
    'game': {},
    'settings': {},
    'message': {},
    ...(global.db.data || {})
  };
  global.db.chain = _.chain(global.db.data);
};
loadDatabase();
if (global.db) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write();
    }
  }, 30000);
}
function createTmpFolder() {
  const _0x32408b = path.join(__dirname, "tmp");
  if (!fs.existsSync(_0x32408b)) {
    fs.mkdirSync(_0x32408b);
    lolcatjs.fromString("Folder 'tmp' successfully created.");
  } else {
    lolcatjs.fromString("Folder 'tmp' already available.");
  }
}
createTmpFolder();
const pairingCode = true || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const question = _0x5a2c19 => {
  const _0x5c0840 = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  return new Promise(_0x443d1b => {
    _0x5c0840.question(_0x5a2c19, _0x443d1b);
  });
};
const sessionDir = path.join(__dirname, "session");
const credsPath = path.join(sessionDir, "creds.json");
async function downloadSessionData() {
  try {
    await fs.promises.mkdir(sessionDir, {
      'recursive': true
    });
    if (!fs.existsSync(credsPath)) {
      if (!global.SESSION_ID) {
        return console.log(color("Session id not found at SESSION_ID!\nCreds.json not found at session folder!", "red"));
      }
      if (global.SESSION_ID && !global.SESSION_ID.startsWith("KANGOXMD~")) {
        throw new Error("Invalid session ID: " + global.SESSION_ID + ". Expected format: KANGOXMD~*");
      }
      const _0x5e697d = global.SESSION_ID.split("KANGOXMD~")[1];
      const _0x1813b4 = File.fromURL("https://mega.nz/file/" + _0x5e697d);
      _0x1813b4.download(async (_0xbc27b0, _0x429960) => {
        if (_0xbc27b0) {
          throw _0xbc27b0;
        }
        await fs.promises.writeFile(credsPath, _0x429960);
        console.log(color("Kango session successfully saved, please wait!!", "green"));
        await startXploader();
      });
    }
  } catch (_0x516647) {
    console.error("Error downloading session data:", _0x516647);
  }
}
async function startXploader() {
  const {
    state: _0x45a137,
    saveCreds: _0x535ae4
  } = await useMultiFileAuthState("./session");
  const _0x200296 = new NodeCache();
  const _0x5a3401 = makeWASocket({
    'logger': pino({
      'level': "silent"
    }),
    'printQRInTerminal': !pairingCode,
    'version': [2, 3000, 1017531287],
    'browser': Browsers.ubuntu("Edge"),
    'auth': {
      'creds': _0x45a137.creds,
      'keys': makeCacheableSignalKeyStore(_0x45a137.keys, pino({
        'level': "fatal"
      }).child({
        'level': "fatal"
      }))
    },
    'markOnlineOnConnect': true,
    'generateHighQualityLinkPreview': true,
    'getMessage': async _0x84fed4 => {
      let _0x4286cf = jidNormalizedUser(_0x84fed4.remoteJid);
      let _0x2af4f7 = await store.loadMessage(_0x4286cf, _0x84fed4.id);
      return _0x2af4f7?.["message"] || '';
    },
    'msgRetryCounterCache': _0x200296,
    'defaultQueryTimeoutMs': undefined
  });
  store.bind(_0x5a3401.ev);
  if (true && !_0x5a3401.authState.creds.registered) {
    if (useMobile) {
      throw new Error("Cannot use pairing code with mobile API");
    }
    let _0x36f8da;
    _0x36f8da = await question(chalk.bgBlack(chalk.greenBright("Number to be connected to JIN Bot?\nExample 263714757857:- ")));
    _0x36f8da = _0x36f8da.trim();
    setTimeout(async () => {
      const _0x304476 = await _0x5a3401.requestPairingCode(_0x36f8da);
      console.log(chalk.black(chalk.bgWhite("Jinwoo pair code:- " + _0x304476)));
    });
  }
  _0x5a3401.ev.on("connection.update", async _0x2736e5 => {
    const {
      connection: _0x49e42c,
      lastDisconnect: _0x295172
    } = _0x2736e5;
    const _0x3e1536 = os.cpus();
    const _0x3198eb = os.uptime();
    const _0x2f83b6 = Math.floor(_0x3198eb / 86400);
    const _0x2c11a2 = Math.floor(_0x3198eb % 86400 / 3600);
    const _0x5742c7 = Math.floor(_0x3198eb % 3600 / 60);
    const _0x34f82e = Math.floor(_0x3198eb % 60);
    const _0x2db28c = os.totalmem();
    const _0x343bee = os.freemem();
    const _0x8fbcc1 = _0x2db28c - _0x343bee;
    const _0x152ad6 = formatSize(_0x8fbcc1);
    const _0x3ae98 = formatSize(_0x2db28c);
    try {
      if (_0x49e42c === "close" && _0x295172 && _0x295172.error && _0x295172.error.output.statusCode != 401) {
        if (_0x295172.error.output.statusCode === DisconnectReason.loggedOut) {
          console.log("Logged out. Please link again.");
        }
        if (_0x295172.error.output.statusCode === DisconnectReason.badSession) {
          console.log("Bad session. Log out and link again.");
        }
        startXploader();
      }
      if (_0x2736e5.connection == "connecting" || _0x2736e5.receivedPendingNotifications == "false") {
        console.log(color("𝙆𝙖𝙣𝙜𝙤 𝙭𝙢𝙙 𝙗𝙤𝙩 𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙞𝙣𝙜...", "red"));
      }
      if (_0x2736e5.connection == "open" || _0x2736e5.receivedPendingNotifications == "true") {
        console.log(color(" ", "magenta"));
        console.log(color("𝙆𝙖𝙣𝙜𝙤 𝙭𝙢𝙙 𝙗𝙤𝙩 𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙 ✅", "green"));
        await delay(1999);
        lolcatjs.fromString("\nThis is:\n\n✴✶  🎀 KANGO XMD BOT 🎀  ✶✴\n\n✴✶  🎀 KANGO XMD 🎀  \n\n✶SOLO LEVELING ARISE✴");
        lolcatjs.fromString("───────────『 KANGO XMD BOT 』───────────\n│ » Owner id: " + _0x5a3401.user.id + "\n│ » Owner name: " + _0x5a3401.user.name + "\n│ » Platform: " + os.platform() + "\n│ » CPU Cores: " + _0x3e1536.length + "\n│ » CPU Model: " + _0x3e1536[0].model + "\n│ » Architecture: " + os.arch() + "\n│ » RAM: " + _0x152ad6 + " / " + _0x3ae98 + "\n│ » Host Uptime: " + _0x2f83b6 + "d " + _0x2c11a2 + "h " + _0x5742c7 + "m " + _0x34f82e + "s\n└───···");
        await sleep(2000);
        await _0x5a3401.groupAcceptInvite("IVVhfV9ULdW250HRqKpiNe");
        await _0x5a3401.sendMessage(_0x5a3401.user.id, {
          'text': "𝙆𝙖𝙣𝙜𝙤 𝙭𝙢𝙙 𝙗𝙤𝙩 𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 ✅"
        }, {
          'ephemeralExpiration': 0x14
        });
      }
    } catch (_0x1e9818) {
      console.log("Error in Connection.update " + _0x1e9818);
      startXploader();
    }
  });
  _0x5a3401.ev.on("creds.update", _0x535ae4);
  _0x5a3401.ev.on("messages.upsert", () => {});
  _0x5a3401.ev.on("messages.upsert", async _0x5bd3a9 => {
    try {
      const _0x59ffb7 = _0x5bd3a9.messages[0];
      const _0x3f4af2 = new Set();
      if (!_0x59ffb7.message) {
        return;
      }
      _0x59ffb7.message = Object.keys(_0x59ffb7.message)[0] === "ephemeralMessage" ? _0x59ffb7.message.ephemeralMessage.message : _0x59ffb7.message;
      if (_0x59ffb7.key && _0x59ffb7.key.remoteJid === "status@broadcast") {
        return;
      }
      if (!_0x5a3401["public"] && !_0x59ffb7.key.fromMe && _0x5bd3a9.type === "notify") {
        return;
      }
      if (_0x59ffb7.key.id.startsWith("Jinwoo") && _0x59ffb7.key.id.length === 16) {
        return;
      }
      if (_0x59ffb7.key.id.startsWith("BAE5")) {
        return;
      }
      const _0x9786e2 = _0x59ffb7.key.id;
      if (_0x3f4af2.has(_0x9786e2)) {
        return;
      }
      _0x3f4af2.add(_0x9786e2);
      const _0x5ee153 = smsg(_0x5a3401, _0x59ffb7, store);
      require("./Jinwoo")(_0x5a3401, _0x5ee153, _0x5bd3a9, store);
    } catch (_0x21affe) {
      console.log(_0x21affe);
    }
  });
  _0x5a3401.ev.on("messages.upsert", async _0x544b42 => {
    const _0x5dc9bc = _0x544b42.messages[0];
    if (_0x5dc9bc.key && _0x5dc9bc.key.remoteJid === "status@broadcast") {
      if (global.autoviewstatus === "true") {
        await _0x5a3401.readMessages([_0x5dc9bc.key]);
      }
    }
  });
  setInterval(() => {
    try {
      const _0x1d6adc = path.join(__dirname, "session");
      fs.readdir(_0x1d6adc, (_0x320b5c, _0x27adac) => {
        if (_0x320b5c) {
          console.error("Unable to scan directory:", _0x320b5c);
          return;
        }
        const _0x5a6979 = _0x27adac.filter(_0x1ab79a => _0x1ab79a.startsWith("pre-key") || _0x1ab79a.startsWith("sender-key") || _0x1ab79a.startsWith("session-") || _0x1ab79a.startsWith("app-state") && _0x1ab79a !== "creds.json");
        if (_0x5a6979.length > 0) {
          console.log("Found " + _0x5a6979.length + " junk session files.");
          console.log("Clearing " + _0x5a6979.length + " junk session files...");
          _0x5a6979.forEach(_0x194804 => {
            const _0x3de4e4 = path.join(_0x1d6adc, _0x194804);
            fs.unlinkSync(_0x3de4e4);
            console.log("Deleted: " + _0x194804);
          });
        } else {
          console.log("No junk session files found.");
        }
      });
    } catch (_0x386cd3) {
      console.error("Error clearing junk session files:", _0x386cd3);
    }
  }, 7200000);
  setInterval(() => {
    let _0x4a1471 = path.join();
    fs.readdir(_0x4a1471, async function (_0x95c7dc, _0x1c67f9) {
      var _0x3a8e0c = await _0x1c67f9.filter(_0x16af78 => _0x16af78.endsWith("gif") || _0x16af78.endsWith("png") || _0x16af78.endsWith("mp3") || _0x16af78.endsWith("mp4") || _0x16af78.endsWith("opus") || _0x16af78.endsWith("jpg") || _0x16af78.endsWith("webp") || _0x16af78.endsWith("webm") || _0x16af78.endsWith("zip"));
      if (_0x3a8e0c.length > 0) {
        let _0x4dc92b = "Detected " + _0x3a8e0c.length + " junk files,\nJunk files have been deleted🚮";
        _0x5a3401.sendMessage(_0x5a3401.user.id, {
          'text': _0x4dc92b
        });
        setInterval(() => {
          if (_0x3a8e0c.length == 0) {
            return console.log("Junk files cleared");
          }
          _0x3a8e0c.forEach(function (_0x55af92) {
            let _0xf41302 = fs.existsSync(_0x55af92);
            if (_0xf41302) {
              fs.unlinkSync(_0x55af92);
            }
          });
        }, 15000);
      }
    });
  }, 30000);
  _0x5a3401.decodeJid = _0x127658 => {
    if (!_0x127658) {
      return _0x127658;
    }
    if (/:\d+@/gi.test(_0x127658)) {
      let _0x5e9035 = jidDecode(_0x127658) || {};
      return _0x5e9035.user && _0x5e9035.server && _0x5e9035.user + '@' + _0x5e9035.server || _0x127658;
    } else {
      return _0x127658;
    }
  };
  _0x5a3401.ev.on("contacts.update", _0x4a441c => {
    for (let _0x1ff7ee of _0x4a441c) {
      let _0x2fd469 = _0x5a3401.decodeJid(_0x1ff7ee.id);
      if (store && store.contacts) {
        store.contacts[_0x2fd469] = {
          'id': _0x2fd469,
          'name': _0x1ff7ee.notify
        };
      }
    }
  });
  _0x5a3401.ev.on("group-participants.update", async ({
    id: _0x1b480a,
    participants: _0x4312f2,
    action: _0x339fd6
  }) => {
    if (global.welcome === "true") {
      try {
        const _0x34f0c7 = await _0x5a3401.groupMetadata(_0x1b480a);
        const _0x305b5a = _0x34f0c7.participants.length;
        const _0x5a8f46 = _0x34f0c7.subject;
        for (const _0x53f1bb of _0x4312f2) {
          const _0x3d871b = await _0x5d6e83(_0x53f1bb);
          if (_0x339fd6 === "add") {
            _0x32a7b1(_0x1b480a, _0x53f1bb, _0x5a8f46, _0x305b5a, _0x3d871b);
          } else if (_0x339fd6 === "remove") {
            _0x425098(_0x1b480a, _0x53f1bb, _0x5a8f46, _0x305b5a, _0x3d871b);
          }
        }
      } catch (_0x882ca5) {
        console.error(_0x882ca5);
      }
    }
  });
  async function _0x5d6e83(_0x100195) {
    try {
      return await _0x5a3401.profilePictureUrl(_0x100195, "image");
    } catch {
      return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
  }
  async function _0x32a7b1(_0x55937e, _0x54a42d, _0x56effb, _0xa74583, _0x25ab8e) {
    const _0x540e06 = "✨ *Welcome to " + _0x56effb + "!* ✨ @" + _0x54a42d.split('@')[0] + "\n\nYou're our " + _0xa74583 + "th member!\n\nJoin time: " + moment.tz('' + timezones).format("HH:mm:ss") + ",  " + moment.tz('' + timezones).format("DD/MM/YYYY") + "\n\nStay awesome!😊\n\n> 𝐉𝐢𝐧𝐰𝐨𝐨 𝐁𝐨𝐭";
    _0x5a3401.sendMessage(_0x55937e, {
      'text': _0x540e06,
      'contextInfo': {
        'mentionedJid': [_0x54a42d],
        'externalAdReply': {
          'title': global.botname,
          'body': ownername,
          'previewType': "PHOTO",
          'thumbnailUrl': '',
          'thumbnail': await getBuffer(_0x25ab8e),
          'sourceUrl': wagc
        }
      }
    });
  }
  async function _0x425098(_0x54f9e2, _0x16cc89, _0x45bb0f, _0x10b797, _0x671fb6) {
    const _0x259e72 = "✨ *Goodbye @" + _0x16cc89.split('@')[0] + "!* ✨\n\nYou'll be missed in " + _0x45bb0f + "!🥲\n\nWe're now " + _0x10b797 + " members.\n\nLeft at: " + moment.tz(timezones).format("HH:mm:ss") + ",  " + moment.tz(timezones).format("DD/MM/YYYY") + "\n\n> 𝐉𝐢𝐧𝐰𝐨𝐨 𝐁𝐨𝐭";
    _0x5a3401.sendMessage(_0x54f9e2, {
      'text': _0x259e72,
      'contextInfo': {
        'mentionedJid': [_0x16cc89],
        'externalAdReply': {
          'title': global.botname,
          'body': ownername,
          'previewType': "PHOTO",
          'thumbnailUrl': '',
          'thumbnail': await getBuffer(_0x671fb6),
          'sourceUrl': wagc
        }
      }
    });
  }
  _0x5a3401.ev.on("call", async _0x39446d => {
    let _0x42cbdb = global.anticall === "true";
    if (!_0x42cbdb) {
      return;
    }
    console.log(_0x39446d);
    for (let _0x2430da of _0x39446d) {
      if (_0x2430da.isGroup == false) {
        if (_0x2430da.status == "offer") {
          await sleep(8000);
          await _0x5a3401.updateBlockStatus(_0x2430da.from, "block");
        }
      }
    }
  });
  _0x5a3401["public"] = true;
  _0x5a3401.serializeM = _0x179e20 => smsg(_0x5a3401, _0x179e20, store);
  _0x5a3401.getName = (_0x51a9f9, _0x58d046 = false) => {
    id = _0x5a3401.decodeJid(_0x51a9f9);
    _0x58d046 = _0x5a3401.withoutContact || _0x58d046;
    let _0x55204b;
    if (id.endsWith("@g.us")) {
      return new Promise(async _0x58aea8 => {
        _0x55204b = store.contacts[id] || {};
        if (!(_0x55204b.name || _0x55204b.subject)) {
          _0x55204b = _0x5a3401.groupMetadata(id) || {};
        }
        _0x58aea8(_0x55204b.name || _0x55204b.subject || PhoneNumber('+' + id.replace("@s.whatsapp.net", '')).getNumber("international"));
      });
    } else {
      _0x55204b = id === "0@s.whatsapp.net" ? {
        'id': id,
        'name': "WhatsApp"
      } : id === _0x5a3401.decodeJid(_0x5a3401.user.id) ? _0x5a3401.user : store.contacts[id] || {};
    }
    return (_0x58d046 ? '' : _0x55204b.name) || _0x55204b.subject || _0x55204b.verifiedName || PhoneNumber('+' + _0x51a9f9.replace("@s.whatsapp.net", '')).getNumber("international");
  };
  _0x5a3401.getFile = async (_0x6f2c96, _0x1188e8) => {
    let _0x45f042;
    let _0x5aa80b;
    const _0x4f5d9f = Buffer.isBuffer(_0x6f2c96) ? _0x6f2c96 : /^data:.*?\/.*?;base64,/i.test(_0x6f2c96) ? Buffer.from(_0x6f2c96.split`,`[1], "base64") : /^https?:\/\//.test(_0x6f2c96) ? await (_0x45f042 = await fetch(_0x6f2c96)).buffer() : fs.existsSync(_0x6f2c96) ? (_0x5aa80b = _0x6f2c96, fs.readFileSync(_0x6f2c96)) : typeof _0x6f2c96 === "string" ? _0x6f2c96 : Buffer.alloc(0);
    if (!Buffer.isBuffer(_0x4f5d9f)) {
      throw new TypeError("Result is not a buffer");
    }
    const _0x310dbf = (await FileType.fromBuffer(_0x4f5d9f)) || {
      'mime': "application/octet-stream",
      'ext': ".bin"
    };
    if (_0x4f5d9f && _0x1188e8 && !_0x5aa80b) {
      _0x5aa80b = path.join(__dirname, "./tmp/" + new Date() * 1 + '.' + _0x310dbf.ext);
      await fs.promises.writeFile(_0x5aa80b, _0x4f5d9f);
    }
    return {
      'res': _0x45f042,
      'filename': _0x5aa80b,
      ..._0x310dbf,
      'data': _0x4f5d9f,
      'deleteFile'() {
        return _0x5aa80b && fs.promises.unlink(_0x5aa80b);
      }
    };
  };
  _0x5a3401.downloadMediaMessage = async _0x254b33 => {
    let _0x93d3b3 = (_0x254b33.msg || _0x254b33).mimetype || '';
    let _0x2015f8 = _0x254b33.mtype ? _0x254b33.mtype.replace(/Message/gi, '') : _0x93d3b3.split('/')[0];
    const _0xf54421 = await downloadContentFromMessage(_0x254b33, _0x2015f8);
    let _0x3084f8 = Buffer.from([]);
    for await (const _0x2f2ff1 of _0xf54421) {
      _0x3084f8 = Buffer.concat([_0x3084f8, _0x2f2ff1]);
    }
    return _0x3084f8;
  };
  _0x5a3401.sendFile = async (_0x2084a0, _0xe15f2, _0x55f55b = '', _0x921d64 = '', _0x22993d, _0x64d5bd = false, _0x3f0ef8 = {}) => {
    let _0x2bcc10 = await _0x5a3401.getFile(_0xe15f2, true);
    let {
      res: _0x1b8e87,
      data: _0x450d02,
      filename: _0x5a4b51
    } = _0x2bcc10;
    if (_0x1b8e87 && _0x1b8e87.status !== 200 || _0x450d02.length <= 65536) {
      try {
        throw {
          'json': JSON.parse(_0x450d02.toString())
        };
      } catch (_0x483105) {
        if (_0x483105.json) {
          throw _0x483105.json;
        }
      }
    }
    let _0x8fb9bd = {
      'filename': _0x55f55b
    };
    if (_0x22993d) {
      _0x8fb9bd.quoted = _0x22993d;
    }
    if (!_0x2bcc10) {
      _0x3f0ef8.asDocument = true;
    }
    let _0x33ce28 = '';
    let _0x515e6b = _0x2bcc10.mime;
    let _0xcdd705;
    if (/webp/.test(_0x2bcc10.mime) || /image/.test(_0x2bcc10.mime) && _0x3f0ef8.asSticker) {
      _0x33ce28 = "sticker";
    } else {
      if (/image/.test(_0x2bcc10.mime) || /webp/.test(_0x2bcc10.mime) && _0x3f0ef8.asImage) {
        _0x33ce28 = "image";
      } else {
        if (/video/.test(_0x2bcc10.mime)) {
          _0x33ce28 = "video";
        } else {
          if (/audio/.test(_0x2bcc10.mime)) {
            _0xcdd705 = await (_0x64d5bd ? toPTT : toAudio)(_0x450d02, _0x2bcc10.ext);
            _0x450d02 = _0xcdd705.data;
            _0x5a4b51 = _0xcdd705.filename;
            _0x33ce28 = "audio";
            _0x515e6b = "audio/ogg; codecs=opus";
          } else {
            _0x33ce28 = "document";
          }
        }
      }
    }
    if (_0x3f0ef8.asDocument) {
      _0x33ce28 = "document";
    }
    let _0x558372 = {
      ..._0x3f0ef8,
      'caption': _0x921d64,
      'ptt': _0x64d5bd,
      [_0x33ce28]: {
        'url': _0x5a4b51
      },
      'mimetype': _0x515e6b
    };
    let _0x3f16c4;
    try {
      _0x3f16c4 = await _0x5a3401.sendMessage(_0x2084a0, _0x558372, {
        ..._0x8fb9bd,
        ..._0x3f0ef8
      });
    } catch (_0x2bce5c) {
      console.error(_0x2bce5c);
      _0x3f16c4 = null;
    } finally {
      if (!_0x3f16c4) {
        _0x3f16c4 = await _0x5a3401.sendMessage(_0x2084a0, {
          ..._0x558372,
          [_0x33ce28]: _0x450d02
        }, {
          ..._0x8fb9bd,
          ..._0x3f0ef8
        });
      }
      return _0x3f16c4;
    }
  };
  _0x5a3401.sendTextWithMentions = async (_0x264cbd, _0x3c5adc, _0x5e7c71, _0x4b8daa = {}) => _0x5a3401.sendMessage(_0x264cbd, {
    'text': _0x3c5adc,
    'contextInfo': {
      'mentionedJid': [..._0x3c5adc.matchAll(/@(\d{0,16})/g)].map(_0x888f8a => _0x888f8a[1] + "@s.whatsapp.net")
    },
    ..._0x4b8daa
  }, {
    'quoted': _0x5e7c71
  });
  _0x5a3401.sendVideoAsSticker = async (_0x54c222, _0x5ef0ed, _0x461e4f, _0x112054 = {}) => {
    let _0x5a22cd = Buffer.isBuffer(_0x5ef0ed) ? _0x5ef0ed : /^data:.*?\/.*?;base64,/i.test(_0x5ef0ed) ? Buffer.from(_0x5ef0ed.split`,`[1], "base64") : /^https?:\/\//.test(_0x5ef0ed) ? await await getBuffer(_0x5ef0ed) : fs.existsSync(_0x5ef0ed) ? fs.readFileSync(_0x5ef0ed) : Buffer.alloc(0);
    let _0xff63eb;
    if (_0x112054 && (_0x112054.packname || _0x112054.author)) {
      _0xff63eb = await writeExifVid(_0x5a22cd, _0x112054);
    } else {
      _0xff63eb = await videoToWebp(_0x5a22cd);
    }
    await _0x5a3401.sendMessage(_0x54c222, {
      'sticker': {
        'url': _0xff63eb
      },
      ..._0x112054
    }, {
      'quoted': _0x461e4f
    });
    return _0xff63eb;
  };
  _0x5a3401.downloadAndSaveMediaMessage = async (_0x303222, _0x2fcf8d, _0x4e7da4 = true) => {
    let _0x5cc76a = _0x303222.msg ? _0x303222.msg : _0x303222;
    let _0x39ed37 = (_0x303222.msg || _0x303222).mimetype || '';
    let _0x28404c = _0x303222.mtype ? _0x303222.mtype.replace(/Message/gi, '') : _0x39ed37.split('/')[0];
    const _0x5c52c4 = await downloadContentFromMessage(_0x5cc76a, _0x28404c);
    let _0x1fa0c6 = Buffer.from([]);
    for await (const _0x345c74 of _0x5c52c4) {
      _0x1fa0c6 = Buffer.concat([_0x1fa0c6, _0x345c74]);
    }
    let _0x168745 = await FileType.fromBuffer(_0x1fa0c6);
    trueFileName = _0x4e7da4 ? _0x2fcf8d + '.' + _0x168745.ext : _0x2fcf8d;
    await fs.writeFileSync(trueFileName, _0x1fa0c6);
    return trueFileName;
  };
  _0x5a3401.downloadAndSaveMediaMessage = async (_0x34d21c, _0x32dfa7, _0x5498c9 = true) => {
    let _0x38b136 = _0x34d21c.msg ? _0x34d21c.msg : _0x34d21c;
    let _0xd6af24 = (_0x34d21c.msg || _0x34d21c).mimetype || '';
    let _0x3e53c5 = _0x34d21c.mtype ? _0x34d21c.mtype.replace(/Message/gi, '') : _0xd6af24.split('/')[0];
    const _0x2398ef = await downloadContentFromMessage(_0x38b136, _0x3e53c5);
    let _0x14c702 = Buffer.from([]);
    for await (const _0x3e1ded of _0x2398ef) {
      _0x14c702 = Buffer.concat([_0x14c702, _0x3e1ded]);
    }
    let _0x11a230 = await FileType.fromBuffer(_0x14c702);
    let _0x25b557 = _0x5498c9 ? _0x32dfa7 + '.' + _0x11a230.ext : _0x32dfa7;
    let _0x537943 = path.join(__dirname, "tmp", _0x25b557);
    await fs.writeFileSync(_0x537943, _0x14c702);
    return _0x537943;
  };
  _0x5a3401.sendImageAsSticker = async (_0x25bd55, _0x5a1040, _0xf24c83, _0xe0b83f = {}) => {
    let _0x2feef4 = Buffer.isBuffer(_0x5a1040) ? _0x5a1040 : /^data:.*?\/.*?;base64,/i.test(_0x5a1040) ? Buffer.from(_0x5a1040.split`,`[1], "base64") : /^https?:\/\//.test(_0x5a1040) ? await await getBuffer(_0x5a1040) : fs.existsSync(_0x5a1040) ? fs.readFileSync(_0x5a1040) : Buffer.alloc(0);
    let _0x3681b3;
    if (_0xe0b83f && (_0xe0b83f.packname || _0xe0b83f.author)) {
      _0x3681b3 = await writeExifImg(_0x2feef4, _0xe0b83f);
    } else {
      _0x3681b3 = await imageToWebp(_0x2feef4);
    }
    await _0x5a3401.sendMessage(_0x25bd55, {
      'sticker': {
        'url': _0x3681b3
      },
      ..._0xe0b83f
    }, {
      'quoted': _0xf24c83
    });
    return _0x3681b3;
  };
  _0x5a3401.sendText = (_0x1adc2c, _0x374617, _0x20f3a1 = '', _0x34201f) => _0x5a3401.sendMessage(_0x1adc2c, {
    'text': _0x374617,
    ..._0x34201f
  }, {
    'quoted': _0x20f3a1
  });
  _0x5a3401.sendTextWithMentions = async (_0x2e4920, _0x25d0c9, _0x29d09b, _0x28b159 = {}) => _0x5a3401.sendMessage(_0x2e4920, {
    'text': _0x25d0c9,
    'contextInfo': {
      'mentionedJid': [..._0x25d0c9.matchAll(/@(\d{0,16})/g)].map(_0x30d11f => _0x30d11f[1] + "@s.whatsapp.net")
    },
    ..._0x28b159
  }, {
    'quoted': _0x29d09b
  });
  return _0x5a3401;
}
async function tylor() {
  if (fs.existsSync(credsPath)) {
    console.log(color("Session file found, starting kango bot...", "yellow"));
    await startXploader();
  } else {
    const _0x23efd3 = await downloadSessionData();
    if (_0x23efd3) {
      console.log("Session downloaded, starting bot.");
      await startXploader();
    } else if (!fs.existsSync(credsPath)) {
      if (!global.SESSION_ID) {
        console.log(color("Please wait for a few seconds to enter your number!", "red"));
        await startXploader();
      }
    }
  }
}
const porDir = path.join(__dirname, "Media");
const porPath = path.join(porDir, "kango.html");
function getUptime() {
  return runtime(process.uptime());
}
const limiter = RateLimit({
  'windowMs': 900000,
  'max': 0x64
});
app.get('/', limiter, (_0x479039, _0x451254) => {
  _0x451254.sendFile(porPath);
});
app.get("/uptime", (_0x321360, _0x535072) => {
  _0x535072.json({
    'uptime': runtime(process.uptime())
  });
});
app.listen(port, _0x281c9e => {
  if (_0x281c9e) {
    console.error(color("Failed to start server on port: " + port, "red"));
  } else {
    console.log(color("Kangoxmd is running on port: " + port, "yellow"));
  }
});
tylor();
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Updated " + __filename);
  delete require.cache[file];
  require(file);
});
