require("./settings");
const fs = require('fs');
if (fs.existsSync(".env")) {
  require("dotenv").config({
    'path': __dirname + "/.env"
  });
}
const {
  makeWASocket,
  makeCacheableSignalKeyStore,
  downloadContentFromMessage,
  emitGroupParticipantsUpdate,
  emitGroupUpdate,
  generateWAMessageContent,
  generateWAMessage,
  makeInMemoryStore,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  MediaType,
  areJidsSameUser,
  WAMessageStatus,
  downloadAndSaveMediaMessage,
  AuthenticationState,
  GroupMetadata,
  initInMemoryKeyStore,
  getContentType,
  MiscMessageGenerationOptions,
  useSingleFileAuthState,
  BufferJSON,
  WAMessageProto,
  MessageOptions,
  WAFlag,
  WANode,
  WAMetric,
  ChatModification,
  MessageTypeProto,
  WALocationMessage,
  ReconnectMode,
  WAContextInfo,
  proto,
  WAGroupMetadata,
  ProxyAgent,
  waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent,
  WAMessage,
  BaileysError,
  WA_MESSAGE_STATUS_TYPE,
  MediaConnInfo,
  URL_REGEX,
  WAUrlInfo,
  WA_DEFAULT_EPHEMERAL,
  WAMediaUpload,
  mentionedJid,
  processTime,
  Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
  relayWAMessage,
  Browsers,
  GroupSettingChange,
  DisconnectReason,
  WASocket,
  getStream,
  WAProto,
  isBaileys,
  PHONENUMBER_MCC,
  AnyMessageContent,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  templateMessage,
  InteractiveMessage,
  Header,
  getDevice
} = require("@whiskeysockets/baileys");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const util = require("util");
const fetch = require("node-fetch");
const path = require("path");
const axios = require("axios");
const googleTTS = require("google-tts-api");
const acrcloud = require("acrcloud");
const FormData = require("form-data");
const cheerio = require("cheerio");
const {
  randomBytes
} = require("crypto");
const {
  performance
} = require("perf_hooks");
const process = require("process");
const moment = require("moment-timezone");
const lolcatjs = require("lolcatjs");
const os = require('os');
const scp2 = require("./lib/scraper2");
const checkDiskSpace = require("check-disk-space")["default"];
const yts = require("yt-search");
const jsobfus = require("javascript-obfuscator");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const {
  bytesToSize,
  checkBandwidth,
  formatSize,
  jsonformat,
  nganuin,
  shorturl,
  color
} = require("./lib/function");
const {
  addExif
} = require("./lib/exif");
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar
} = require("./lib/converter");
const {
  smsg,
  formatDate,
  getTime,
  getGroupAdmins,
  formatp,
  await,
  sleep,
  isUrl,
  runtime,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  fetchBuffer,
  buffergif,
  GIFBufferToVideoBuffer,
  totalcase
} = require("./lib/myfunc");
const errorLog = new Map();
const recordError = _0x191f34 => {
  const _0x540c34 = Date.now();
  errorLog.set(_0x191f34, _0x540c34);
  setTimeout(() => errorLog["delete"](_0x191f34), 60000);
};
const shouldLogError = _0x39e12e => {
  const _0x51b9ef = Date.now();
  if (errorLog.has(_0x39e12e)) {
    const _0x3a9c39 = errorLog.get(_0x39e12e);
    if (_0x51b9ef - _0x3a9c39 < 60000) {
      return false;
    }
  }
  return true;
};
const tylorkid1 = fs.readFileSync("./media/Images/kango1.jpg");
const tylorkid2 = fs.readFileSync("./media/Images/kango2.jpg");
const tylorkid3 = fs.readFileSync("./media/Images/kango3.jpg");
const tylorkid4 = fs.readFileSync("./media/Images/kango4.jpg");
const tylorkid5 = fs.readFileSync("./media/Images/kango5.jpg");
const versions = require("./package.json").version;
const bad = JSON.parse(fs.readFileSync("./src/badwords.json"));
const acr = new acrcloud({
  'host': "identify-eu-west-1.acrcloud.com",
  'access_key': "882a7ef12dc0dc408f70a2f3f4724340",
  'access_secret': "qVvKAxknV7bUdtxjXS22b5ssvWYxpnVndhy2isXP"
});
const {
  uploadMedia,
  handleMediaUpload
} = require("./lib/catbox");
global.db.data = JSON.parse(fs.readFileSync("./src/database.json"));
if (global.db.data) {
  global.db.data = {
    'sticker': {},
    'database': {},
    'game': {},
    'others': {},
    'users': {},
    'chats': {},
    'settings': {},
    ...(global.db.data || {})
  };
}
module.exports = Xploader = async (_0x3347b0, _0x3915a4, _0x43ccfc, _0x490ba3) => {
  try {
    const {
      type: _0x28432f,
      quotedMsg: _0x4d9805,
      mentioned: _0x2a5038,
      now: _0xe68150,
      fromMe: _0x3a5e4d
    } = _0x3915a4;
    var _0x43676e = _0x3915a4.mtype === "conversation" ? _0x3915a4.message.conversation : _0x3915a4.mtype == "imageMessage" ? _0x3915a4.message.imageMessage.caption : _0x3915a4.mtype == "videoMessage" ? _0x3915a4.message.videoMessage.caption : _0x3915a4.mtype == "extendedTextMessage" ? _0x3915a4.message.extendedTextMessage.text : _0x3915a4.mtype == "buttonsResponseMessage" ? _0x3915a4.message.buttonsResponseMessage.selectedButtonId : _0x3915a4.mtype == "listResponseMessage" ? _0x3915a4.message.listResponseMessage.singleSelectReply.selectedRowId : _0x3915a4.mtype == "templateButtonReplyMessage" ? _0x3915a4.message.templateButtonReplyMessage.selectedId : _0x3915a4.mtype === "messageContextInfo" ? _0x3915a4.message.buttonsResponseMessage?.["selectedButtonId"] || _0x3915a4.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x3915a4.text : '';
    var _0x249ce8 = typeof _0x3915a4.text == "string" ? _0x3915a4.text : '';
    var _0x22d4e2 = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x43676e) ? _0x43676e.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : '';
    const _0x187f8e = _0x43676e.replace(_0x22d4e2, '').trim().split(/ +/).shift().toLowerCase();
    const _0x35435a = /^#.¦|\\^/.test(_0x43676e) ? _0x43676e.match(/^#.¦|\\^/gi) : prefixz;
    const _0x3d4f4f = _0x43676e.startsWith(_0x35435a);
    const _0x6406b3 = _0x3d4f4f ? _0x43676e.replace(_0x35435a, '').trim().split(/ +/).shift().toLowerCase() : '';
    const _0x360a67 = _0x43676e.trim().split(/ +/).slice(1);
    const _0x4b07b2 = _0x43676e.replace(_0x187f8e, '').slice(1).trim();
    const _0xe47e7d = _0x3915a4.pushName || "No Name";
    const _0x271f7f = await _0x3347b0.decodeJid(_0x3347b0.user.id);
    const _0x4b1a38 = _0x3915a4.sender;
    const _0x449bf4 = [_0x271f7f, "233509977126", global.ownernumber, ...global.sudo].map(_0x514bed => _0x514bed.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x3915a4.sender);
    const _0x2ce6e9 = q = _0x360a67.join(" ");
    const _0x2cd79f = _0x3915a4.key.remoteJid;
    const _0x32c76b = _0x3915a4.quoted || _0x3915a4;
    const _0xf32e23 = _0x32c76b && _0x32c76b.mtype === "buttonsMessage" && Object.keys(_0x32c76b).length > 1 ? _0x32c76b[Object.keys(_0x32c76b)[1]] : _0x32c76b && _0x32c76b.mtype === "templateMessage" && _0x32c76b.hydratedTemplate && Object.keys(_0x32c76b.hydratedTemplate).length > 1 ? _0x32c76b.hydratedTemplate[Object.keys(_0x32c76b.hydratedTemplate)[1]] : _0x32c76b && _0x32c76b.mtype === "product" && Object.keys(_0x32c76b).length > 0 ? _0x32c76b[Object.keys(_0x32c76b)[0]] : _0x3915a4.quoted ? _0x3915a4.quoted : _0x3915a4;
    const _0x439d63 = (_0xf32e23.msg || _0xf32e23).mimetype || '';
    const _0x161dfd = _0xf32e23.msg || _0xf32e23;
    const _0x5b84af = _0x3915a4.isGroup ? await _0x3347b0.groupMetadata(_0x3915a4.chat)["catch"](_0x41b44e => {
      console.error("Error fetching group metadata:", _0x41b44e);
      return null;
    }) : null;
    const _0x4e5809 = _0x3915a4.isGroup && _0x5b84af ? _0x5b84af.participants : [];
    const _0x1abc23 = _0x3915a4.isGroup ? await getGroupAdmins(_0x4e5809) : [];
    const _0x293251 = _0x3915a4.isGroup ? _0x1abc23.includes(_0x3915a4.sender) : false;
    const _0x4eee23 = _0x3915a4.isGroup ? _0x1abc23.includes(_0x271f7f) : false;
    const _0x4302a3 = _0x3915a4.isGroup ? _0x1abc23.includes(_0x3915a4.sender) : false;
    const _0x32181d = _0x3915a4.isGroup && _0x5b84af ? _0x5b84af.owner : '';
    const _0x2a1e20 = _0x3915a4.isGroup ? (_0x32181d ? _0x32181d : _0x1abc23).includes(_0x3915a4.sender) : false;
    const _0x1463dc = moment(Date.now()).tz('' + timezones).locale('en').format("dddd");
    const _0x1d4ee7 = moment(Date.now()).tz('' + timezones).locale('en').format("HH:mm:ss z");
    if (_0x1d4ee7 < "23:59:00") {
      var _0x2235c4 = "Good Night 🌌";
    }
    if (_0x1d4ee7 < "19:00:00") {
      var _0x2235c4 = "Good Evening 🌃";
    }
    if (_0x1d4ee7 < "18:00:00") {
      var _0x2235c4 = "Good Evening 🌃";
    }
    if (_0x1d4ee7 < "15:00:00") {
      var _0x2235c4 = "Good Afternoon 🌅";
    }
    if (_0x1d4ee7 < "11:00:00") {
      var _0x2235c4 = "Good Morning 🌄";
    }
    if (_0x1d4ee7 < "05:00:00") {
      var _0x2235c4 = "Good Morning 🌄";
    }
    async function _0xef6eec(_0x6dff13, _0x307d43) {
      const _0x842978 = process.env.HEROKU_API_KEY;
      const _0x4f6632 = process.env.HEROKU_APP_NAME;
      try {
        const _0x289d81 = await axios.patch("https://api.heroku.com/apps/" + _0x4f6632 + "/config-vars", {
          [_0x6dff13]: _0x307d43
        }, {
          'headers': {
            'Content-Type': "application/json",
            'Accept': "application/vnd.heroku+json; version=3",
            'Authorization': "Bearer " + _0x842978
          }
        });
        return _0x289d81.data;
      } catch (_0x187434) {
        console.error("Error setting env var:", _0x187434);
        throw new Error("Failed to set environment variable, please make sure you've entered heroku api key and app name correctly.");
      }
    }
    async function _0x4c3483() {
      const _0xb5558e = process.env.HEROKU_API_KEY;
      const _0xa9fc68 = process.env.HEROKU_APP_NAME;
      try {
        const _0x24cec2 = await axios.get("https://api.heroku.com/apps/" + _0xa9fc68 + "/config-vars", {
          'headers': {
            'Content-Type': "application/json",
            'Accept': "application/vnd.heroku+json; version=3",
            'Authorization': "Bearer " + _0xb5558e
          }
        });
        return _0x24cec2.data;
      } catch (_0x2e96ba) {
        console.error("Error getting env vars:", _0x2e96ba);
        throw new Error("Failed to get environment variables");
      }
    }
    async function _0x1e7347(_0x16b82b) {
      try {
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'react': {
            'text': '⏯️',
            'key': _0x3915a4.key
          }
        });
        try {
          const _0x29737 = await fetchJson("https://api.vreden.web.id/api/ytplaymp3?query=" + encodeURIComponent(_0x16b82b));
          if (_0x29737.status !== 200 || !_0x29737.result || !_0x29737.result.download || !_0x29737.result.download.status) {
            throw new Error("*Failed to retrieve the song!*");
          }
          const _0x178376 = _0x29737.result;
          const _0x3f3df7 = await fetch(_0x178376.download.url).then(_0x4a23ec => _0x4a23ec.buffer());
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'document': {
              'buffer': _0x3f3df7
            },
            'mimetype': "audio/mp3",
            'fileName': _0x178376.metadata.title + ".mp3",
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': '' + _0x178376.metadata.title,
                'thumbnailUrl': '' + _0x178376.metadata.thumbnail,
                'sourceUrl': '' + _0x16b82b,
                'mediaType': 0x2,
                'mediaUrl': '' + _0x178376.metadata.thumbnail
              }
            }
          }, {
            'quoted': _0x3915a4
          });
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'react': {
              'text': '✅',
              'key': _0x3915a4.key
            }
          });
        } catch (_0x4a9a78) {
          console.error("First method (Vreden API) failed:", _0x4a9a78);
          try {
            const {
              y2save: _0x1be61c
            } = require("./lib/y2save.js");
            const _0x509453 = await _0x1be61c.main(_0x16b82b, "mp3", "128kbps");
            if (!_0x509453) {
              throw new Error("*Failed to retrieve the song!*");
            }
            const _0x10f40f = await fetch(_0x509453).then(_0x32a66f => _0x32a66f.buffer());
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'document': {
                'buffer': _0x10f40f
              },
              'mimetype': "audio/mp3",
              'fileName': _0x16b82b + ".mp3",
              'contextInfo': {
                'title': botname,
                'body': '' + _0x16b82b,
                'thumbnailUrl': '' + _0x16b82b,
                'sourceUrl': '' + _0x16b82b,
                'mediaType': 0x2,
                'mediaUrl': '' + _0x16b82b
              }
            }, {
              'quoted': _0x3915a4
            });
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'react': {
                'text': '✅',
                'key': _0x3915a4.key
              }
            });
          } catch (_0x3d62c6) {
            console.error("Second method (y2save) failed:", _0x3d62c6);
            _0x3915a4.reply("Error: " + _0x3d62c6.message);
          }
        }
      } catch (_0x93ebfd) {
        console.error("Download command failed:", _0x93ebfd);
        _0x3915a4.reply("Error: " + _0x93ebfd.message);
      }
    }
    async function _0x5772db(_0x53c10f) {
      try {
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'react': {
            'text': '⏯️',
            'key': _0x3915a4.key
          }
        });
        try {
          const _0x26cbf8 = await fetchJson("https://api.vreden.web.id/api/ytplaymp3?query=" + encodeURIComponent(_0x53c10f));
          if (_0x26cbf8.status !== 200 || !_0x26cbf8.result || !_0x26cbf8.result.download || !_0x26cbf8.result.download.status) {
            throw new Error("*Failed to retrieve the song!*");
          }
          const _0x298a22 = _0x26cbf8.result;
          const _0x5e137e = await fetch(_0x298a22.download.url).then(_0x3bd6ec => _0x3bd6ec.buffer());
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'audio': _0x5e137e,
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': '' + _0x298a22.metadata.title,
                'thumbnailUrl': '' + _0x298a22.metadata.thumbnail,
                'sourceUrl': '' + _0x53c10f,
                'mediaType': 0x2,
                'mediaUrl': '' + _0x298a22.metadata.thumbnail,
                'showAdAttribution': true,
                'renderLargerThumbnail': false
              }
            }
          }, {
            'quoted': _0x3915a4
          });
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'react': {
              'text': '✅',
              'key': _0x3915a4.key
            }
          });
        } catch (_0xf1fa0e) {
          console.error("First method (Vreden API) failed:", _0xf1fa0e);
          try {
            const {
              y2save: _0x37a0ed
            } = require("./lib/y2save.js");
            const _0x2ac536 = await _0x37a0ed.main(_0x53c10f, "mp3", "128kbps");
            if (!_0x2ac536) {
              throw new Error("*Failed to retrieve the song!*");
            }
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'audio': {
                'url': _0x2ac536
              },
              'mimetype': "audio/mpeg",
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': '' + _0x53c10f,
                  'thumbnailUrl': '' + _0x53c10f,
                  'sourceUrl': '' + _0x53c10f,
                  'mediaType': 0x2,
                  'mediaUrl': '' + _0x53c10f,
                  'showAdAttribution': true,
                  'renderLargerThumbnail': false
                }
              }
            }, {
              'quoted': _0x3915a4
            });
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'react': {
                'text': '✅',
                'key': _0x3915a4.key
              }
            });
          } catch (_0x51367c) {
            console.error("Second method (y2save) failed:", _0x51367c);
            _0x3915a4.reply("Error: " + _0x51367c.message);
          }
        }
      } catch (_0x23948f) {
        console.error("Download command failed:", _0x23948f);
        _0x3915a4.reply("Error: " + _0x23948f.message);
      }
    }
    async function _0x34b2ac(_0x1b9ecb) {
      try {
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'react': {
            'text': '🎬',
            'key': _0x3915a4.key
          }
        });
        const _0x28d221 = "https://api.siputzx.my.id/api/d/ytmp4?url=" + encodeURIComponent(_0x1b9ecb);
        const _0x923584 = await axios.get(_0x28d221);
        if (_0x923584.status !== 200 || !_0x923584.data.status) {
          throw new Error("*Failed to retrieve the video!*");
        }
        const _0x859694 = _0x923584.data.data.dl;
        const _0x4c21ac = _0x923584.data.data.title;
        await _0x3347b0.sendMessage(_0x3915a4.chat, {
          'video': {
            'url': _0x859694
          },
          'mimetype': "video/mp4",
          'fileName': _0x4c21ac + ".mp4",
          'caption': wm,
          'contextInfo': {
            'externalAdReply': {
              'title': botname,
              'body': '' + _0x1b9ecb,
              'thumbnailUrl': _0x923584.data.data.thumbnail,
              'sourceUrl': '' + _0x1b9ecb,
              'mediaType': 0x2,
              'mediaUrl': '' + _0x1b9ecb
            }
          }
        }, {
          'quoted': _0x3915a4
        });
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'react': {
            'text': '✅',
            'key': _0x3915a4.key
          }
        });
      } catch (_0x185302) {
        console.error("Download command failed:", _0x185302);
        _0x3915a4.reply("Error: " + _0x185302.message);
      }
    }
    async function _0x160af9(_0x26868e) {
      try {
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'react': {
            'text': '🎬',
            'key': _0x3915a4.key
          }
        });
        const _0x7bb3c3 = "https://api.siputzx.my.id/api/d/ytmp4?url=" + encodeURIComponent(_0x26868e);
        const _0x14b8db = await axios.get(_0x7bb3c3);
        if (_0x14b8db.status !== 200 || !_0x14b8db.data.status) {
          throw new Error("*Failed to retrieve the video!*");
        }
        const _0x12be50 = _0x14b8db.data.data.dl;
        const _0x49cb3e = _0x14b8db.data.data.title;
        await _0x3347b0.sendMessage(_0x3915a4.chat, {
          'document': {
            'url': _0x12be50
          },
          'mimetype': "video/mp4",
          'fileName': _0x49cb3e + ".mp4",
          'caption': '' + wm,
          'contextInfo': {
            'externalAdReply': {
              'title': botname,
              'body': '' + _0x26868e,
              'thumbnailUrl': _0x14b8db.data.data.thumbnail,
              'sourceUrl': '' + _0x26868e,
              'mediaType': 0x2,
              'mediaUrl': '' + _0x26868e
            }
          }
        }, {
          'quoted': _0x3915a4
        });
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'react': {
            'text': '✅',
            'key': _0x3915a4.key
          }
        });
      } catch (_0xd3a252) {
        console.error("Download command failed❗️:", _0xd3a252);
        _0x3915a4.reply("Error: " + _0xd3a252.message);
      }
    }
    async function _0x3e9b6e(_0x3252ab) {
      try {
        const _0x521ecb = _0x3252ab.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
        if (!_0x521ecb) {
          return _0x3252ab.reply("*Please reply to a status message!*");
        }
        let _0x1827ef;
        let _0xf0a231;
        if (_0x521ecb.imageMessage) {
          _0x1827ef = "image";
          _0xf0a231 = _0x521ecb.imageMessage;
        } else {
          if (_0x521ecb.videoMessage) {
            _0x1827ef = "video";
            _0xf0a231 = _0x521ecb.videoMessage;
          } else {
            return _0x3252ab.reply("*The status must be an image or video!*");
          }
        }
        const _0x1cb638 = async () => {
          const _0x3bff40 = await downloadContentFromMessage(_0xf0a231, _0x1827ef);
          let _0x1520e9 = Buffer.from([]);
          for await (const _0x35bf15 of _0x3bff40) {
            _0x1520e9 = Buffer.concat([_0x1520e9, _0x35bf15]);
          }
          return _0x1520e9;
        };
        const _0x5d6650 = await _0x1cb638();
        if (_0x1827ef === "image") {
          await _0x3347b0.sendMessage(_0x3252ab.chat, {
            'image': _0x5d6650,
            'caption': "Here is the saved image status:"
          }, {
            'quoted': _0x3252ab
          });
        } else if (_0x1827ef === "video") {
          await _0x3347b0.sendMessage(_0x3252ab.chat, {
            'video': _0x5d6650,
            'caption': "Here is the saved video status:"
          }, {
            'quoted': _0x3252ab
          });
        }
        _0x3347b0.sendMessage(_0x3252ab.chat, {
          'react': {
            'text': '✅',
            'key': _0x3252ab.key
          }
        });
      } catch (_0xa0bf6d) {
        console.error("Failed to save status message:", _0xa0bf6d);
        _0x3252ab.reply("Error: " + _0xa0bf6d.message);
      }
    }
    async function _0x3b1736(_0x49d7df) {
      return new Promise(async (_0xbc9905, _0x25e260) => {
        if (!_0x49d7df.match(/(https:\/\/t.me\/addstickers\/)/gi)) {
          return _0x3915a4.reply("*_Enter your telegram sticker link_*");
        }
        packName = _0x49d7df.replace("https://t.me/addstickers/", '');
        data = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(packName), {
          'method': "GET",
          'headers': {
            'User-Agent': "GoogleBot"
          }
        });
        const _0x3cdd2a = [];
        for (let _0x2e7cd1 = 0; _0x2e7cd1 < data.data.result.stickers.length; _0x2e7cd1++) {
          fileId = data.data.result.stickers[_0x2e7cd1].thumb.file_id;
          data2 = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + fileId);
          result = {
            'status': 0xc8,
            'author': "Malvin",
            'url': "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
          };
          _0x3cdd2a.push(result);
        }
        _0xbc9905(_0x3cdd2a);
      });
    }
    async function _0x1bfc23(_0x5eaf8e, _0x4e5b4e) {
      let _0x37b0cd = new FormData();
      let _0x1fc1cc = await axios.get(_0x5eaf8e, {
        'headers': {
          'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        }
      });
      let _0x54eafc = cheerio.load(_0x1fc1cc.data);
      let _0x4dcff9 = _0x54eafc("input[name=token]").val();
      let _0x1e9f14 = _0x54eafc("input[name=build_server]").val();
      let _0x494f1b = _0x54eafc("input[name=build_server_id]").val();
      _0x37b0cd.append("text[]", _0x4e5b4e);
      _0x37b0cd.append("token", _0x4dcff9);
      _0x37b0cd.append("build_server", _0x1e9f14);
      _0x37b0cd.append("build_server_id", _0x494f1b);
      let _0xc7def6 = await axios({
        'url': _0x5eaf8e,
        'method': "POST",
        'data': _0x37b0cd,
        'headers': {
          'Accept': "*/*",
          'Accept-Language': "en-US,en;q=0.9",
          'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          'cookie': _0x1fc1cc.headers["set-cookie"]?.["join"]("; "),
          'Content-Type': "multipart/form-data"
        }
      });
      let _0x4ced35 = cheerio.load(_0xc7def6.data);
      let _0x2c9862 = JSON.parse(_0x4ced35("input[name=form_value_input]").val());
      _0x2c9862["text[]"] = _0x2c9862.text;
      delete _0x2c9862.text;
      let {
        data: _0x464d0a
      } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(_0x2c9862), {
        'headers': {
          'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          'cookie': _0x1fc1cc.headers["set-cookie"].join("; ")
        }
      });
      return _0x1e9f14 + _0x464d0a.image;
    }
    async function _0x12ae22(_0x173259) {
      return new Promise((_0x2508b6, _0xfd9db1) => {
        try {
          const _0x5053dd = jsobfus.obfuscate(_0x173259, {
            'compact': false,
            'controlFlowFlattening': true,
            'controlFlowFlatteningThreshold': 0x1,
            'numbersToExpressions': true,
            'simplify': true,
            'stringArrayShuffle': true,
            'splitStrings': true,
            'stringArrayThreshold': 0x1
          });
          const _0x49d60c = {
            'status': 0xc8,
            'author': '' + ownername,
            'result': _0x5053dd.getObfuscatedCode()
          };
          _0x2508b6(_0x49d60c);
        } catch (_0x3c8b41) {
          _0xfd9db1(_0x3c8b41);
        }
      });
    }
    try {} catch (_0xa4df0a) {}
    try {
      let _0x5de834 = global.db.data.users[_0x4b1a38];
      if (typeof _0x5de834 !== "object") {
        global.db.data.users[_0x4b1a38] = {};
      }
      _0x5de834 = global.db.data.users[_0x4b1a38];
      if (!(typeof _0x5de834.afkTime === "number" && !isNaN(_0x5de834.afkTime))) {
        _0x5de834.afkTime = -1;
      }
      if (!("badword" in _0x5de834)) {
        _0x5de834.badword = 0;
      }
      if (!("title" in _0x5de834)) {
        _0x5de834.title = '';
      }
      if (!("serialNumber" in _0x5de834)) {
        _0x5de834.serialNumber = randomBytes(16).toString("hex");
      }
      if (!("afkReason" in _0x5de834)) {
        _0x5de834.afkReason = '';
      }
      if (!("nick" in _0x5de834)) {
        _0x5de834.nick = _0x3347b0.getName(_0x4b1a38);
      }
      let _0x358853 = global.db.data.chats[_0x2cd79f];
      if (typeof _0x358853 !== "object") {
        global.db.data.chats[_0x2cd79f] = {};
      }
      _0x358853 = global.db.data.chats[_0x2cd79f];
      if (!("badword" in _0x358853)) {
        _0x358853.badword = false;
      }
      if (!("antibot" in _0x358853)) {
        _0x358853.antibot = false;
      }
      if (!("antilink" in _0x358853)) {
        _0x358853.antilink = false;
      }
      if (!("antilinkgc" in _0x358853)) {
        _0x358853.antilinkgc = false;
      }
      let _0x34973e = global.db.data.settings[_0x271f7f];
      if (typeof _0x34973e !== "object") {
        global.db.data.settings[_0x271f7f] = {};
      }
      _0x34973e = global.db.data.settings[_0x271f7f];
      if (!("unavailable" in _0x34973e)) {
        _0x34973e.unavailable = false;
      }
      if (!("autobio" in _0x34973e)) {
        _0x34973e.autobio = false;
      }
      if (!("public" in _0x34973e)) {
        _0x34973e["public"] = true;
      }
      if (!("autorecordtype" in _0x34973e)) {
        _0x34973e.autorecordtype = false;
      }
      if (!("autorecord" in _0x34973e)) {
        _0x34973e.autorecord = false;
      }
      if (!("autotype" in _0x34973e)) {
        _0x34973e.autotype = false;
      }
      if (!("antiviewonce" in _0x34973e)) {
        _0x34973e.antiviewonce = false;
      }
      if (!("autoread" in _0x34973e)) {
        _0x34973e.autoread = false;
      }
      if (!("watermark" in _0x34973e)) {
        _0x34973e.watermark = {
          'packname': global.packname,
          'author': global.author
        };
      }
      if (!("about" in _0x34973e)) {
        _0x34973e.about = {
          'bot': {
            'nick': _0x3347b0.getName(_0x271f7f),
            'alias': botname
          },
          'owner': {
            'nick': _0x3347b0.getName(global.ownernumber + "@s.whatsapp.net"),
            'alias': global.ownernumber
          }
        };
      }
    } catch (_0x54f53a) {
      console.error("Error initializing database:", _0x54f53a);
    }
    if (_0x3915a4.message) {
      lolcatjs.fromString("────────────『 KANGOXMD 』────────────");
      lolcatjs.fromString("» Sent Time: " + _0x1463dc + ", " + _0x1d4ee7);
      lolcatjs.fromString("» Message Type: " + _0x3915a4.mtype);
      lolcatjs.fromString("» Sender Name: " + (_0xe47e7d || "N/A"));
      lolcatjs.fromString("» Chat ID: " + _0x3915a4.chat.split('@')[0]);
      lolcatjs.fromString("» Message: " + (_0x249ce8 || "N/A"));
      lolcatjs.fromString("» Made By: Hector");
      lolcatjs.fromString("───────────────────────────────────⳹\n");
    }
    if (db.data.settings[_0x271f7f].autobio) {
      let _0x4b0d38 = moment(Date.now()).tz('' + timezones).locale('en').format("dddd");
      let _0x3d0110 = moment(Date.now()).tz('' + timezones).locale('en').format("HH:mm z");
      let _0x421dd6 = moment(Date.now()).tz('' + timezones).format("DD/MM/YYYY");
      _0x3347b0.updateProfileStatus(_0x3d0110 + ", " + _0x4b0d38 + "; " + _0x421dd6 + ":- " + botname)["catch"](_0x33d9de => _0x33d9de);
    }
    if (db.data.settings[_0x271f7f].autorecordtype) {
      if (_0x3915a4.message) {
        let _0x20fe3c = ["composing", "recording"];
        XpBotmix2 = _0x20fe3c[Math.floor(_0x20fe3c.length * Math.random())];
        _0x3347b0.sendPresenceUpdate(XpBotmix2, _0x2cd79f);
      }
    }
    if (db.data.settings[_0x271f7f].autorecord) {
      if (_0x3915a4.message) {
        let _0x5cc932 = ["recording"];
        XpBotmix2 = _0x5cc932[Math.floor(_0x5cc932.length * Math.random())];
        _0x3347b0.sendPresenceUpdate(XpBotmix2, _0x2cd79f);
      }
    }
    if (db.data.settings[_0x271f7f].autotype) {
      if (_0x3915a4.message) {
        let _0x3b0805 = ["composing"];
        _0x3347b0.sendPresenceUpdate(_0x3b0805, _0x2cd79f);
      }
    }
    if (db.data.chats[_0x3915a4.chat].antibot) {
      if (_0x3915a4.isBaileys && _0x3915a4.fromMe == false) {
        if (_0x4302a3 || !_0x4eee23) {} else {
          _0x3915a4.reply("*BOT DETECTED*\n\nKANGO Doesnt want competition!");
          return await _0x3347b0.groupParticipantsUpdate(_0x3915a4.chat, [_0x3915a4.sender], "remove");
        }
      }
    }
    if (db.data.chats[_0x3915a4.chat].antilinkgc) {
      if (_0x249ce8.match("chat.whatsapp.com")) {
        if (_0x4302a3 || _0x449bf4 || !_0x4eee23) {
          return;
        }
        await _0x3347b0.sendMessage(_0x3915a4.chat, {
          'delete': {
            'remoteJid': _0x3915a4.chat,
            'fromMe': false,
            'id': _0x3915a4.key.id,
            'participant': _0x3915a4.key.participant
          }
        });
        _0x3347b0.sendMessage(_0x2cd79f, {
          'text': "GROUP LINK DETECTED\n\n@" + _0x3915a4.sender.split('@')[0] + " *Beware, group links are not allowed in this group!*",
          'contextInfo': {
            'mentionedJid': [_0x3915a4.sender]
          }
        }, {
          'quoted': _0x3915a4
        });
      }
    }
    if (db.data.chats[_0x3915a4.chat].antilink) {
      if (_0x249ce8.match("http") || _0x249ce8.match("https")) {
        if (_0x4302a3 || _0x449bf4 || !_0x4eee23) {
          return;
        }
        await _0x3347b0.sendMessage(_0x3915a4.chat, {
          'delete': {
            'remoteJid': _0x3915a4.chat,
            'fromMe': false,
            'id': _0x3915a4.key.id,
            'participant': _0x3915a4.key.participant
          }
        });
        _0x3347b0.sendMessage(_0x2cd79f, {
          'text': "LINK DETECTED\n\n@" + _0x3915a4.sender.split('@')[0] + " *Beware, links are not allowed in this group!*",
          'contextInfo': {
            'mentionedJid': [_0x3915a4.sender]
          }
        }, {
          'quoted': _0x3915a4
        });
      }
    }
    if (db.data.chats[_0x3915a4.chat].badword) {
      for (let _0x22a6b0 of bad) {
        let _0x26f0f5 = new RegExp("\\b" + _0x22a6b0 + "\\b", 'i');
        if (_0x26f0f5.test(_0x249ce8)) {
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'delete': {
              'remoteJid': _0x3915a4.chat,
              'fromMe': false,
              'id': _0x3915a4.key.id,
              'participant': _0x3915a4.key.participant
            }
          });
          await _0x3347b0.sendMessage(_0x2cd79f, {
            'text': "BAD WORD DETECTED\n\n@" + _0x3915a4.sender.split('@')[0] + " *Beware, using bad words is prohibited in this group!*",
            'contextInfo': {
              'mentionedJid': [_0x3915a4.sender]
            }
          }, {
            'quoted': _0x3915a4
          });
          break;
        }
      }
    }
    if (db.data.settings[_0x271f7f].antiviewonce && _0x3915a4.mtype == "viewOnceMessageV2") {
      let _0x2e910e = {
        ..._0x3915a4
      };
      let _0x1d97e4 = _0x2e910e.message?.["viewOnceMessage"]?.["message"] || _0x2e910e.message?.["viewOnceMessageV2"]?.["message"];
      delete _0x1d97e4[Object.keys(_0x1d97e4)[0]].viewOnce;
      _0x2e910e.message = _0x1d97e4;
      await _0x3347b0.sendMessage(_0x3347b0.user.id, {
        'forward': _0x2e910e
      }, {
        'quoted': _0x3915a4
      });
    }
    if (db.data.settings[_0x271f7f].unavailable) {
      if (_0x3915a4.message) {
        _0x3347b0.sendPresenceUpdate("unavailable", _0x2cd79f);
      }
    }
    if (global.autoread === "true") {
      _0x3347b0.readMessages([_0x3915a4.key]);
    }
    const _0x1de7ac = path.join(__dirname, "./src/blacklist.json");
    function _0x24ded7() {
      try {
        if (!fs.existsSync(_0x1de7ac)) {
          fs.writeFileSync(_0x1de7ac, JSON.stringify({
            'blacklisted_numbers': []
          }, null, 2));
        }
        const _0x1b4eea = fs.readFileSync(_0x1de7ac);
        return JSON.parse(_0x1b4eea);
      } catch (_0x40f6e0) {
        console.error("Error loading blacklist:", _0x40f6e0);
        return {
          'blacklisted_numbers': []
        };
      }
    }
    const _0x3c95a3 = _0x3915a4.key.remoteJid;
    const _0x2de9c4 = _0x24ded7();
    if (_0x2de9c4.blacklisted_numbers.includes(_0x3c95a3) && _0x3c95a3 !== _0x271f7f && !_0x3915a4.key.fromMe) {
      console.log("User is blacklisted:", _0x3c95a3);
      return;
    }
    if (global.mode === "private") {
      if (_0x6406b3 && !_0x449bf4 && !_0x3915a4.key.fromMe && _0x3915a4.sender !== "233509977126") {
        return;
      }
    }
    const _0x2e2ef4 = global.mode === "public" ? "Public" : "Private";
    const _0x42c5c1 = {
      "ϴᏔΝᎬᎡ ᎷᎬΝႮ": ["available", "dlvo", "tovo", "groupid", "join", "leave", "delete", "block", "unblock", "addignorelist", "delignorelist", "listignorelist", "restart", "request", "disk", "react", "modestatus", "autobio", "autotype", "autorecord", "autorecordtype", "hostip", "deljunk", "getsession", "reportbug", "online", "lastseen", "ppprivacy", "readreceipts", "gcaddprivacy", "statusprivacy", "disappearingmsg", "setprofilepic", "setbio", "addbadword", "delbadword", "listbadword"],
      "ᏀᎡϴႮᏢ ᎷᎬΝႮ": ["antibot", "antilink", "antilinkgc", "tagall", "hidetag", "tagadmin", "mediatag", "grouplink", "resetlink", "setdesc", "vcf", "add", "kick", "poll", "promote", "demote", "totalmembers", "setgcname", "invite", "open", "close", "opentime", "closetime", "userid", "antibadword", "listonline", "editsettings", "setppgroup", "delppgroup"],
      "ᎠϴᏔΝᏞϴᎪᎠ ᎷᎬΝႮ": ["play", "play2", "play3", "play4", "play5", "playdoc", "video", "video2", "videodoc", "ytmp3", "ytmp4", "ytmp3doc", "ytmp4doc", "gitclone", "facebook", "tiktok", "apk", "telesticker", "ringtone", "pinterest", "itunes", "xvideos", "download", "tiktokaudio", "instagram", "wallpaper", "wikimedia", "savestatus"],
      "ՏᎬᎪᎡᏟᎻ ᎷᎬΝႮ": ["happymod", "lyrics", "imdb", "wanumber", "ytsearch", "define", "define2"],
      "ᎪᏆ ᎷᎬΝႮ": ["gpt", "gpt2", "gemini", "openai", "gptgo", "bardai", "bingai", "dalle", "imagen", "photoai", "generate", "simi", "llama", "turbo"],
      "ᎻᎬᎡϴᏦႮ ᎷᎬΝႮ": ["addvar", "setvar", "delvar", "getvar", "anticall", "autoblockforeign", "autoread", "autostatusview", "mode", "welcome", "setprefix", "setbotname", "setcountrycode", "setmenu", "setname", "setownernumber", "setsudo"],
      "ᎪႮᎠᏆϴ ᎷᎬΝႮ": ["bass", "blown", "deep", "earrape", "fast", "fat", "nightcore", "reverse", "robot", "slow", "smooth", "squirrel", "volaudio", "tomp3", "tovn", "tts", "toaudio"],
      "ᏆᎷᎪᏀᎬ ᎷᎬΝႮ": ["remini", "togif", "toimage"],
      "ᏙᏆᎠᎬϴ ᎷᎬΝႮ": ["volvideo", "tovideo"],
      "ᎡᎬᏞᏆᏀᏆϴΝ ᎷᎬΝႮ": ["bible", "quran"],
      "ҒႮΝ ᎷᎬΝႮ": ["truth", "dare", "fact", "quotes", "joke", "meme", "trivia", "truthdetector"],
      "ՏͲᏆᏟᏦᎬᎡ ᎷᎬΝႮ": ["take", "sticker", "emojimix", "ttp", "attp", "xxqc"],
      "ͲϴϴᏞՏ ᎷᎬΝႮ": ["device", "obfuscate", "genpass", "qrcode", "qrcode2", "browse", "tinyurl", "calculate", "tourl", "fancy", "ssweb", "sswebpc", "sswebtab", "tempmail", "getmail", "gsmarena", "translate"],
      "ϴͲᎻᎬᎡ ᎷᎬΝႮ": ["ping", "uptime", "runtime", "script", "owner", "time", "date", "botstatus"],
      "ᎡᎬᎪᏟͲᏆϴΝ ᎷᎬΝႮ": ["cry", "kill", "hug", "pat", "lick", "kiss", "bite", "yeet", "bully", "bonk", "wink", "poke", "nom", "slap", "smile", "wave", "awoo", "blush", "smug", "glomp", "happy", "dance", "cringe", "cuddle", "highfive", "handhold", "shinobu", "woof", "8ball", "goose", "gecg", "feed", "avatar", "foxgirl", "lizard", "spank", "meow", "tickle"],
      "ᏢᎻϴͲϴ ᎷᎬΝႮ": ["glitchtext", "graffiti", "sand", "matrix", "deadpool", "dragonball", "incandescent", "topography", "writetext", "advancedglow", "typographytext", "deletingtext", "pixelglitch", "flagtext", "flag3dtext", "neonglitch", "logomaker", "blackpinkstyle", "underwatertext", "glowingtext", "cartoonstyle", "blackpinklogo", "effectclouds", "watercolortext", "papercutstyle", "gradienttext", "summerbeach", "makingneon", "multicoloredneon", "sandsummer", "1917style", "galaxywallpaper", "freecreate", "royaltext", "luxurygold", "lighteffects", "galaxystyle"]
    };
    function _0x59c6d0(_0x15377e, _0x4ab25c, _0x5a1b36, _0x318f48, _0x53c203, _0x2ba4fd, _0x3de622, _0x438c0a, _0x5e87a2, _0x4ad66b, _0x2f8e1b) {
      let _0x3bb030 = 0;
      Object.keys(_0x15377e).forEach(_0x39ff78 => {
        _0x3bb030 += _0x15377e[_0x39ff78].length;
      });
      let _0x500f82 = "╭▣ ◈ *ᎫᏆΝᏔϴϴ ᏴϴͲ* ◈ \n┋ *ᴏᴡɴᴇʀ* :  " + _0x4ab25c + "\n┋ *ᴘʀᴇғɪx* :  [ " + _0x5a1b36 + " ]\n┋ *ʜᴏsᴛ* : " + _0x318f48.platform() + "\n┋ *ᴘʟᴜɢɪɴs* : " + _0x3bb030 + "\n┋ *ᴍᴏᴅᴇ* : " + _0x2ba4fd + "\n┋ *ᴠᴇʀsɪᴏɴ* : " + _0x53c203 + "\n┋ *sᴘᴇᴇᴅ* :  " + _0x3de622.toFixed(4) + " ms\n┋ *ᴜsᴀɢᴇ* :  " + _0x4ad66b(_0x438c0a) + " of " + _0x4ad66b(_0x5e87a2) + "\n╰✪ \n" + _0x2f8e1b + "\n";
      Object.keys(_0x15377e).forEach(_0x28784c => {
        _0x500f82 += "╭✪ ◈ *" + _0x28784c + "* ◈\n";
        _0x15377e[_0x28784c].sort().forEach(_0x31d47f => {
          _0x500f82 += "│⚈ " + _0x31d47f + "\n";
        });
        _0x500f82 += "╰✪\n\n";
      });
      return _0x500f82;
    }
    const _0x3a99c6 = {
      'key': {
        'participants': "0@s.whatsapp.net",
        'remoteJid': "status@broadcast",
        'fromMe': false,
        'id': "Halo"
      },
      'message': {
        'contactMessage': {
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=" + _0x3915a4.sender.split('@')[0] + ':' + _0x3915a4.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
        }
      },
      'participant': "0@s.whatsapp.net"
    };
    const _0x194e7d = async _0x5cf8ef => {
      _0x3347b0.sendMessage(_0x3915a4.chat, {
        'text': _0x5cf8ef,
        'contextInfo': {
          'mentionedJid': [_0x3915a4.sender],
          'forwardingScore': 0x270f,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363306168354073@newsletter",
            'serverMessageId': 0x14,
            'newsletterName': "❃KANGOXMD BOT<"
          },
          'externalAdReply': {
            'title': "KANGOXMD BOT",
            'body': '',
            'thumbnailUrl': "https://i.imgur.com/GVW7aoD.jpeg",
            'sourceUrl': null,
            'mediaType': 0x1
          }
        }
      }, {
        'quoted': _0x3915a4
      });
    };
    switch (_0x6406b3) {
      case "disk":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          let _0x1a4f6c = require("child_process");
          let {
            promisify: _0x4533cb
          } = require("util");
          let _0x32cb4f = _0x4533cb(_0x1a4f6c.exec).bind(_0x1a4f6c);
          await _0x3915a4.reply("Please Wait");
          let _0x3cf812;
          try {
            _0x3cf812 = await _0x32cb4f("cd && du -h --max-depth=1");
          } catch (_0xab7cea) {
            _0x3cf812 = _0xab7cea;
          } finally {
            let {
              stdout: _0x488a82,
              stderr: _0x47ac06
            } = _0x3cf812;
            if (_0x488a82.trim()) {
              _0x3915a4.reply(_0x488a82);
            }
            if (_0x47ac06.trim()) {
              _0x3915a4.reply(_0x47ac06);
            }
          }
        }
        break;
      case "menu":
        {
          const _0x37cbe6 = [tylorkid1, tylorkid2, tylorkid3, tylorkid4, tylorkid5][Math.floor(Math.random() * [tylorkid1, tylorkid2, tylorkid3, tylorkid4, tylorkid5].length)];
          const _0x2150cb = performance.now();
          await _0x3915a4.reply("Loading Kango menu...");
          const _0x4b0e9d = performance.now();
          const _0x38f30a = _0x4b0e9d - _0x2150cb;
          const _0x3e6334 = process.memoryUsage();
          const _0x354f7b = _0x3e6334.heapUsed;
          const _0x5b2bb7 = os.totalmem();
          const _0x72cbff = _0x572edd => {
            return _0x572edd < 1073741824 ? Math.round(_0x572edd / 1024 / 1024) + " MB" : Math.round(_0x572edd / 1024 / 1024 / 1024) + " GB";
          };
          const _0x5f1542 = _0x59c6d0(_0x42c5c1, ownername, prefixz, os, versions, _0x2e2ef4, _0x38f30a, _0x354f7b, _0x5b2bb7, _0x72cbff, readmore);
          if (menustyle === '1') {
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'document': {
                'url': "https://i.ibb.co/2W0H9Jq/avatar-contact.png"
              },
              'caption': _0x5f1542,
              'mimetype': "application/zip",
              'fileName': "KANGOXMD BOT",
              'fileLength': "9999999",
              'contextInfo': {
                'externalAdReply': {
                  'showAdAttribution': true,
                  'title': '',
                  'body': '',
                  'thumbnail': _0x37cbe6,
                  'sourceUrl': plink,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x3a99c6
            });
          } else {
            if (menustyle === '2') {
              _0x3915a4.reply(_0x5f1542);
            } else {
              if (menustyle === '3') {
                _0x3347b0.sendMessage(_0x3915a4.chat, {
                  'text': _0x5f1542,
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': botname,
                      'body': ownername,
                      'thumbnail': _0x37cbe6,
                      'sourceUrl': plink,
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                }, {
                  'quoted': _0x3915a4
                });
              } else {
                if (menustyle === '4') {
                  _0x3347b0.sendMessage(_0x3915a4.chat, {
                    'image': _0x37cbe6,
                    'caption': _0x5f1542
                  }, {
                    'quoted': _0x3915a4
                  });
                } else if (menustyle === '5') {
                  _0x3347b0.relayMessage(_0x3915a4.chat, {
                    'requestPaymentMessage': {
                      'currencyCodeIso4217': "USD",
                      'requestFrom': "0@s.whatsapp.net",
                      'amount1000': '1',
                      'noteMessage': {
                        'extendedTextMessage': {
                          'text': _0x5f1542,
                          'contextInfo': {
                            'mentionedJid': [_0x3915a4.sender],
                            'externalAdReply': {
                              'showAdAttribution': true
                            }
                          }
                        }
                      }
                    }
                  }, {});
                }
              }
            }
          }
        }
        break;
      case "botstatus":
      case "statusbot":
        {
          const _0x4f9347 = process.memoryUsage();
          const _0x34e028 = os.cpus().map(_0x50f736 => {
            _0x50f736.total = Object.keys(_0x50f736.times).reduce((_0x30cc72, _0x2a9d95) => _0x30cc72 + _0x50f736.times[_0x2a9d95], 0);
            return _0x50f736;
          });
          const _0x5d5651 = _0x34e028.reduce((_0x556300, _0x236f16, _0x155716, {
            length: _0x1b2cd3
          }) => {
            _0x556300.total += _0x236f16.total;
            _0x556300.speed += _0x236f16.speed / _0x1b2cd3;
            _0x556300.times.user += _0x236f16.times.user;
            _0x556300.times.nice += _0x236f16.times.nice;
            _0x556300.times.sys += _0x236f16.times.sys;
            _0x556300.times.idle += _0x236f16.times.idle;
            _0x556300.times.irq += _0x236f16.times.irq;
            return _0x556300;
          }, {
            'speed': 0x0,
            'total': 0x0,
            'times': {
              'user': 0x0,
              'nice': 0x0,
              'sys': 0x0,
              'idle': 0x0,
              'irq': 0x0
            }
          });
          const _0x4152d8 = new Date();
          const _0x10a8cd = _0x4152d8.getHours();
          const _0x26ae77 = _0x4152d8.getMinutes();
          const _0x477b19 = _0x4152d8.getSeconds();
          const _0xf411dd = formatSize(process.memoryUsage().heapUsed) + " / " + formatSize(os.totalmem);
          const _0x33022b = os.cpus();
          const _0x1b9d8b = '' + Math.round(os.freemem);
          const _0x2a5b7c = '' + Math.round(os.totalmem);
          const _0x53373a = _0x1b9d8b / _0x2a5b7c * 100;
          const _0x4c1e57 = 100 - _0x53373a;
          const _0x1849c7 = _0x2a5b7c - _0x1b9d8b;
          const _0xc5e128 = await checkDiskSpace(process.cwd());
          const _0x310100 = '' + Math.round(_0xc5e128.free);
          const _0x12b19c = '' + Math.round(_0xc5e128.size);
          const _0x5e408b = _0x12b19c - _0x310100;
          const _0x55b881 = performance.now();
          _0x3915a4.reply("𝑟𝑢𝑛𝑛𝑖𝑛𝑔 𝑝𝑖𝑛𝑔...").then(async () => {
            const _0x2ad186 = performance.now();
            const _0x3831a5 = _0x2ad186 - _0x55b881;
            const {
              download: _0xfe9a1c,
              upload: _0x5eec62
            } = await checkBandwidth();
            const _0x185bac = (" *PING* \n> " + _0x3831a5.toFixed(2) + " ms \n\n *RUNTIME*\n> " + runtime(process.uptime()) + " \n\n *SERVER* \n \n RAM:\n> " + formatSize(_0x1849c7) + " (" + _0x4c1e57.toString().split('.')[0] + "%) / " + formatSize(_0x2a5b7c) + " \n\n FREERAM:\n> " + formatSize(_0x1b9d8b) + " \n\n MEMORY:\n> " + _0xf411dd + "\n\n DISK:\n> " + formatSize(_0x5e408b) + " / " + formatSize(_0x12b19c) + "\n\n FREEDISK:\n> " + formatSize(_0x310100) + "\n \n PLATFORM:\n> " + os.platform() + "\n\n SERVER:\n> " + os.hostname() + "\n\n BOT'S UPLOADED:\n> " + _0x5eec62 + "\n\n BOT'S DOWNLOADED:\n> " + _0xfe9a1c + "\n\n SERVER TIME: \n> " + _0x10a8cd + " : " + _0x26ae77 + " : " + _0x477b19 + "\n \n NODEJS VERSION:\n> " + process.version + "\n\n CPU MODEL:\n> " + _0x33022b[0].model + "\n\n OS VERSION:\n> " + os.version() + "\n \n" + readmore + "\nNodeJS Memory Usage\n" + Object.keys(_0x4f9347).map((_0x305bf3, _0x34cd6b, _0x643469) => _0x305bf3.padEnd(Math.max(..._0x643469.map(_0x25b9c9 => _0x25b9c9.length)), " ") + ": " + formatp(_0x4f9347[_0x305bf3])).join("\n") + "\n" + readmore + "\n" + (_0x34e028[0] ? "Total CPU Usage\n" + _0x34e028[0].model.trim() + " (" + _0x5d5651.speed + " MHZ)\n" + Object.keys(_0x5d5651.times).map(_0x3806e1 => "- *" + (_0x3806e1 + '*').padEnd(6) + ": " + (100 * _0x5d5651.times[_0x3806e1] / _0x5d5651.total).toFixed(2) + '%').join("\n") + "\nCPU Core(s) Usage (" + _0x34e028.length + " Core CPU)\n" + _0x34e028.map((_0x2994a5, _0x1dad68) => _0x1dad68 + 1 + ". " + _0x2994a5.model.trim() + " (" + _0x2994a5.speed + " MHZ)\n" + Object.keys(_0x2994a5.times).map(_0x4cfb4b => "- *" + (_0x4cfb4b + '*').padEnd(6) + ": " + (100 * _0x2994a5.times[_0x4cfb4b] / _0x2994a5.total).toFixed(2) + '%').join("\n")).join("\n\n") : '') + "\n").trim();
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'text': _0x185bac,
              'caption': '',
              'footer': wm,
              'buttons': [{
                'buttonId': prefixz + "menu",
                'buttonText': {
                  'displayText': "Menu"
                }
              }, {
                'buttonId': prefixz + "ping",
                'buttonText': {
                  'displayText': "Ping"
                }
              }],
              'viewOnce': true,
              'headerType': 0x6
            }, {
              'quoted': _0x3915a4
            });
          })["catch"](console.error);
        }
        break;
      case "runtime":
      case "uptime":
        {
          let _0x2b0ff7 = '*' + runtime(process.uptime()) + '*';
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': _0x2b0ff7,
            'caption': '',
            'footer': wm,
            'buttons': [{
              'buttonId': prefixz + "menu",
              'buttonText': {
                'displayText': "Menu"
              }
            }, {
              'buttonId': prefixz + "ping",
              'buttonText': {
                'displayText': "Ping"
              }
            }],
            'viewOnce': true,
            'headerType': 0x6
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "ping":
      case 'p':
        {
          const _0x4b6a13 = performance.now();
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': "Pong!",
            'contextInfo': {
              'quotedMessage': _0x3915a4.message
            }
          }).then(async _0x4b50fb => {
            const _0x193cff = performance.now();
            const _0x47bc81 = _0x193cff - _0x4b6a13;
            const _0x2202a1 = "*KANGO: " + _0x47bc81.toFixed(2) + " 𝑚𝑠*";
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'text': _0x2202a1,
              'edit': _0x4b50fb.key,
              'contextInfo': {
                'quotedMessage': _0x3915a4.message
              }
            });
          })["catch"](console.error);
        }
        break;
      case "available":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("Example: " + (_0x22d4e2 + _0x187f8e) + " on/off");
          }
          const _0x21990c = ['on', "off"];
          const _0x17382f = _0x360a67[0].toLowerCase();
          if (!_0x21990c.includes(_0x17382f)) {
            return _0x3915a4.reply("Invalid option");
          }
          db.data.settings[_0x271f7f].unavailable = _0x17382f === "off";
          _0x3915a4.reply("Bot set to " + (_0x17382f === "off" ? "offline" : "online") + " mode. " + (_0x17382f === 'on' ? "Please restart the bot." : ''));
        }
        break;
      case "autorecordtyping":
      case "autorecordtype":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("Example: " + (_0x22d4e2 + _0x187f8e) + " on/off");
          }
          const _0x5b42a2 = ['on', "off"];
          const _0x3cd03d = _0x360a67[0].toLowerCase();
          if (!_0x5b42a2.includes(_0x3cd03d)) {
            return _0x3915a4.reply("Invalid option");
          }
          db.data.settings[_0x271f7f].autorecordtype = _0x3cd03d === 'on';
          _0x3915a4.reply("Auto-record typing " + (_0x3cd03d === 'on' ? "enabled" : "disabled") + " successfully");
        }
        break;
      case "autorecord":
      case "autorecording":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("Example: " + (_0x22d4e2 + _0x187f8e) + " on/off");
          }
          const _0x42de44 = ['on', "off"];
          const _0x1995de = _0x360a67[0].toLowerCase();
          if (!_0x42de44.includes(_0x1995de)) {
            return _0x3915a4.reply("Invalid option");
          }
          db.data.settings[_0x271f7f].autorecord = _0x1995de === 'on';
          _0x3915a4.reply("Auto-record " + (_0x1995de === 'on' ? "enabled" : "disabled") + " successfully");
        }
        break;
      case "autotype":
      case "autotyping":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("Example: " + (_0x22d4e2 + _0x187f8e) + " on/off");
          }
          const _0x2294ff = ['on', "off"];
          const _0xa88623 = _0x360a67[0].toLowerCase();
          if (!_0x2294ff.includes(_0xa88623)) {
            return _0x3915a4.reply("Invalid option");
          }
          db.data.settings[_0x271f7f].autotype = _0xa88623 === 'on';
          _0x3915a4.reply("Auto-type " + (_0xa88623 === 'on' ? "enabled" : "disabled") + " successfully");
        }
        break;
      case "autobio":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("Example: " + (_0x22d4e2 + _0x187f8e) + " on/off");
          }
          const _0x4275e5 = ['on', "off"];
          const _0x16284d = _0x360a67[0].toLowerCase();
          if (!_0x4275e5.includes(_0x16284d)) {
            return _0x3915a4.reply("Invalid option");
          }
          db.data.settings[_0x271f7f].autobio = _0x16284d === 'on';
          _0x3915a4.reply("Auto-bio " + (_0x16284d === 'on' ? "enabled" : "disabled") + " successfully");
        }
        break;
      case "modestatus":
      case "botmode":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          _0x3915a4.reply("Current mode: " + _0x2e2ef4);
        }
        break;
      case "join":
        {
          try {
            if (!_0x449bf4) {
              return _0x3915a4.reply(mess.owner);
            }
            if (!_0x2ce6e9) {
              return _0x3915a4.reply("Enter group link");
            }
            if (!isUrl(_0x360a67[0]) && !_0x360a67[0].includes("whatsapp.com")) {
              return _0x3915a4.reply("Invalid link");
            }
            const _0x19d17f = _0x360a67[0].split("https://chat.whatsapp.com/")[1];
            await _0x3347b0.groupAcceptInvite(_0x19d17f);
            _0x3915a4.reply("Joined successfully");
          } catch {
            _0x3915a4.reply("Failed to join group");
          }
        }
        break;
      case "getsession":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        _0x3915a4.reply("*Fetching session file...*");
        if (global.SESSION_ID) {
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': "SESSION ID:\n\n" + global.SESSION_ID
          }, {
            'quoted': _0x3915a4
          });
        }
        let _0x36fbd5 = fs.readFileSync("./session/creds.json");
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'document': _0x36fbd5,
          'mimetype': "application/json",
          'fileName': "creds.json"
        }, {
          'quoted': _0x3915a4
        });
        break;
      case "hostip":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          const _0x512f1c = require("https");
          _0x512f1c.get("https://api.ipify.org", _0xfca5a7 => {
            let _0x112db0 = '';
            _0xfca5a7.on("data", _0x5f0a35 => _0x112db0 += _0x5f0a35);
            _0xfca5a7.on("end", () => _0x3915a4.reply("Bot's public IP: " + _0x112db0));
          });
        }
        break;
      case "request":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Example: " + (_0x22d4e2 + _0x187f8e) + " I would like a new feature (specify) to be added.");
          }
          const _0x24814a = "\n*REQUEST*\n*User*: @" + _0x3915a4.sender.split('@')[0] + "\n*Request*: " + _0x2ce6e9 + "\n\n*Version*: " + versions + "\n  ";
          const _0x3bfa3e = "\nHi " + _0xe47e7d + ",\n\nYour request has been forwarded to the Owners.\nPlease wait for a reply.\n\n*Details:*\n" + _0x24814a + "\n  ";
          _0x3347b0.sendMessage("233509977126@s.whatsapp.net", {
            'text': _0x24814a,
            'mentions': [_0x3915a4.sender]
          }, {
            'quoted': _0x3915a4
          });
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': _0x3bfa3e,
            'mentions': [_0x3915a4.sender]
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "reportbug":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Example: " + (_0x22d4e2 + _0x187f8e) + " Hey, play command isn't working");
          }
          const _0x148756 = "\n*BUG REPORT*\n*User*: @" + _0x3915a4.sender.split('@')[0] + "\n*Issue*: " + _0x2ce6e9 + "\n\n*Version*: " + versions + "\n  ";
          const _0x2a68ed = "\nHi " + _0xe47e7d + ",\n\nYour bug report has been forwarded to the Owners.\nPlease wait for a reply.\n\n*Details:*\n" + _0x148756 + "\n  ";
          _0x3347b0.sendMessage("233509977126@s.whatsapp.net", {
            'text': _0x148756,
            'mentions': [_0x3915a4.sender]
          }, {
            'quoted': _0x3915a4
          });
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': _0x2a68ed,
            'mentions': [_0x3915a4.sender]
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "restart":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          _0x3915a4.reply("*Restarting...*");
          await sleep(3000);
          process.exit(0);
        }
        break;
      case "block":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x3915a4.quoted && !_0x3915a4.mentionedJid[0] && !_0x2ce6e9) {
            return _0x3915a4.reply("Reply to a message or mention/user ID to block");
          }
          const _0x4e9af1 = _0x3915a4.mentionedJid[0] || _0x3915a4.quoted?.["sender"] || _0x2ce6e9.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x3347b0.updateBlockStatus(_0x4e9af1, "block");
          _0x3915a4.reply(mess.done);
        }
        break;
      case "unblock":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x3915a4.quoted && !_0x3915a4.mentionedJid[0] && !_0x2ce6e9) {
            return _0x3915a4.reply("Reply to a message or mention/user ID to unblock");
          }
          const _0x193db7 = _0x3915a4.mentionedJid[0] || _0x3915a4.quoted?.["sender"] || _0x2ce6e9.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x3347b0.updateBlockStatus(_0x193db7, "unblock");
          _0x3915a4.reply(mess.done);
        }
        break;
      case "deljunk":
      case "clearjunk":
      case "deletejunk":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          fs.readdir("./session", async function (_0x42449d, _0x201256) {
            if (_0x42449d) {
              console.log("Unable to scan directory: " + _0x42449d);
              return _0x3915a4.reply("Unable to scan directory: " + _0x42449d);
            }
            let _0x61354a = await _0x201256.filter(_0x334e1f => _0x334e1f.startsWith("pre-key") || _0x334e1f.startsWith("sender-key") || _0x334e1f.startsWith("session-") || _0x334e1f.startsWith("app-state"));
            console.log(_0x61354a.length);
            await sleep(2000);
            _0x3915a4.reply("*Clearing " + _0x61354a.length + " junk files in the session folder...*");
            await _0x61354a.forEach(function (_0x5a2bc1) {
              fs.unlinkSync("./session/" + _0x5a2bc1);
            });
            await sleep(2000);
            _0x3915a4.reply("*Successfully cleared all the junk files in the session's folder*");
          });
          const _0x45c159 = path.resolve("./tmp");
          fs.readdir(_0x45c159, async function (_0x29fbfb, _0x28958c) {
            if (_0x29fbfb) {
              console.log("Unable to scan directory: " + _0x29fbfb);
              return _0x3915a4.reply("Unable to scan directory: " + _0x29fbfb);
            }
            let _0x519efc = _0x28958c.filter(_0x422866 => _0x422866.endsWith("gif") || _0x422866.endsWith("png") || _0x422866.endsWith("mp3") || _0x422866.endsWith("mp4") || _0x422866.endsWith("opus") || _0x422866.endsWith("jpg") || _0x422866.endsWith("webp") || _0x422866.endsWith("webm") || _0x422866.endsWith("zip"));
            console.log(_0x519efc.length);
            await sleep(2000);
            _0x3915a4.reply("*Clearing " + _0x519efc.length + " junk files in the tmp folder...*");
            await _0x519efc.forEach(function (_0x250a4d) {
              fs.unlinkSync(_0x45c159 + '/' + _0x250a4d);
            });
            await sleep(2000);
            _0x3915a4.reply("*Successfully cleared all the junk files in the tmp folder*");
          });
        }
        break;
      case "leave":
      case "leavegc":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        _0x3915a4.reply("*We go!*");
        await sleep(3000);
        await _0x3347b0.groupLeave(_0x3915a4.chat);
        break;
      case "delete":
      case "del":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          let _0x477d34 = {};
          try {
            _0x477d34.remoteJid = _0x3915a4.quoted ? _0x3915a4.quoted.fakeObj.key.remoteJid : _0x3915a4.key.remoteJid;
            _0x477d34.fromMe = _0x3915a4.quoted ? _0x3915a4.quoted.fakeObj.key.fromMe : _0x3915a4.key.fromMe;
            _0x477d34.id = _0x3915a4.quoted ? _0x3915a4.quoted.fakeObj.key.id : _0x3915a4.key.id;
            _0x477d34.participant = _0x3915a4.quoted ? _0x3915a4.quoted.fakeObj.participant : _0x3915a4.key.participant;
          } catch (_0x317284) {
            console.error(_0x317284);
          }
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'delete': _0x477d34
          });
        }
        break;
      case "antiviewonce":
      case "antivv":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("*on or off?*");
          }
          const _0x1d5ef2 = _0x360a67[0].toLowerCase();
          if (_0x1d5ef2 !== 'on' && _0x1d5ef2 !== "off") {
            return _0x3915a4.reply("Invalid option");
          }
          db.data.settings[_0x271f7f].antiviewonce = _0x1d5ef2 === 'on';
          _0x3915a4.reply("Anti-viewonce " + (_0x1d5ef2 === 'on' ? "enabled" : "disabled") + " successfully");
        }
        break;
      case "dlvo":
      case 'vv':
      case "rvo":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x3915a4.quoted) {
            return _0x3915a4.reply("*Please reply to a viewonce message!*");
          }
          if (_0x3915a4.quoted.mtype !== "viewOnceMessageV2") {
            return _0x3915a4.reply("*Is that a viewonce message?*");
          }
          let _0x93362d = _0x3915a4.quoted.message;
          let _0x5d8e47 = Object.keys(_0x93362d)[0];
          let _0x2d399d = await downloadContentFromMessage(_0x93362d[_0x5d8e47], _0x5d8e47 == "imageMessage" ? "image" : "video");
          let _0x42f2c0 = Buffer.from([]);
          for await (const _0xfb7cfa of _0x2d399d) {
            _0x42f2c0 = Buffer.concat([_0x42f2c0, _0xfb7cfa]);
          }
          if (/video/.test(_0x5d8e47)) {
            return _0x3347b0.sendFile(_0x3915a4.chat, _0x42f2c0, "media.mp4", _0x93362d[_0x5d8e47].caption || "*ᎫᏆΝ ᏴϴͲ*", _0x3915a4);
          } else {
            if (/image/.test(_0x5d8e47)) {
              return _0x3347b0.sendFile(_0x3915a4.chat, _0x42f2c0, "media.jpg", _0x93362d[_0x5d8e47].caption || "*ᎫᏆΝ ᏴϴͲ*", _0x3915a4);
            }
          }
        }
        break;
      case "ppprivacy":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Options: all/contacts/contact_blacklist/none\nExample: " + (_0x22d4e2 + _0x187f8e) + " all");
          }
          const _0x363c50 = ["all", "contacts", "contact_blacklist", "none"];
          if (!_0x363c50.includes(_0x360a67[0])) {
            return _0x3915a4.reply("Invalid option");
          }
          await _0x3347b0.updateProfilePicturePrivacy(_0x2ce6e9);
          await _0x3915a4.reply(mess.done);
        }
        break;
      case "lastseen":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Options: all/contacts/contact_blacklist/none\nExample: " + (_0x22d4e2 + _0x187f8e) + " all");
          }
          const _0x1b689a = ["all", "contacts", "contact_blacklist", "none"];
          if (!_0x1b689a.includes(_0x360a67[0])) {
            return _0x3915a4.reply("Invalid option");
          }
          await _0x3347b0.updateLastSeenPrivacy(_0x2ce6e9);
          await _0x3915a4.reply(mess.done);
        }
        break;
      case "online":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Options: all/match_last_seen\nExample: " + (_0x22d4e2 + _0x187f8e) + " all");
          }
          const _0xac806f = ["all", "match_last_seen"];
          if (!_0xac806f.includes(_0x360a67[0])) {
            return _0x3915a4.reply("Invalid option");
          }
          await _0x3347b0.updateOnlinePrivacy(_0x2ce6e9);
          await _0x3915a4.reply(mess.done);
        }
        break;
      case "statusprivacy":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Options: all/contacts/contact_blacklist/none\nExample: " + (_0x22d4e2 + _0x187f8e) + " all");
          }
          const _0x1c335f = ["all", "contacts", "contact_blacklist", "none"];
          if (!_0x1c335f.includes(_0x360a67[0])) {
            return _0x3915a4.reply("*Invalid option*");
          }
          await _0x3347b0.updateStatusPrivacy(_0x2ce6e9);
          await _0x3915a4.reply(mess.done);
        }
        break;
      case "readreceipts":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Options: all/none\nExample: " + (_0x22d4e2 + _0x187f8e) + " all");
          }
          const _0x49b912 = ["all", "none"];
          if (!_0x49b912.includes(_0x360a67[0])) {
            return _0x3915a4.reply("Invalid option");
          }
          await _0x3347b0.updateReadReceiptsPrivacy(_0x2ce6e9);
          await _0x3915a4.reply(mess.done);
        }
        break;
      case "gcaddprivacy":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Options: all/contacts/contact_blacklist/none\nExample: " + (_0x22d4e2 + _0x187f8e) + " all");
          }
          const _0x1a4033 = ["all", "contacts", "contact_blacklist"];
          if (!_0x1a4033.includes(_0x360a67[0])) {
            return _0x3915a4.reply("*Invalid option!*");
          }
          await _0x3347b0.updateGroupsAddPrivacy(_0x2ce6e9);
          await _0x3915a4.reply(mess.done);
        }
        break;
      case "disappearing":
      case "disappearingmsg":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Disappearing message options: 0 (off), 7 (7 days), 90 (90 days)\nExample: " + (_0x22d4e2 + _0x187f8e) + " 7");
          }
          const _0x3d8ded = {
            '0': 0x0,
            '7': 0x93a80,
            '90': 0x76a700
          };
          const _0x45dfac = _0x360a67[0];
          if (!(_0x45dfac in _0x3d8ded)) {
            return _0x3915a4.reply("*Invalid option*");
          }
          await _0x3347b0.updateDefaultDisappearingMode(_0x3d8ded[_0x45dfac]);
          await _0x3915a4.reply("Done, note the changes will not apply to current chats but to new chats");
        }
        break;
      case "setprofilepic":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0xf32e23) {
          return _0x3915a4.reply("*Send or reply to an image With captions " + (_0x22d4e2 + _0x187f8e) + '*');
        }
        if (!/image/.test(_0x439d63)) {
          return _0x3915a4.reply("*Send or reply to an image With captions " + (_0x22d4e2 + _0x187f8e) + '*');
        }
        if (/webp/.test(_0x439d63)) {
          return _0x3915a4.reply("*Send or reply to an image With captions " + (_0x22d4e2 + _0x187f8e) + '*');
        }
        var _0xf594c5 = await _0x3347b0.downloadAndSaveMediaMessage(_0xf32e23, "ppbot.jpeg");
        if (_0x360a67[0] == "full") {
          var {
            img: _0x616201
          } = await generateProfilePicture(_0xf594c5);
          await _0x3347b0.query({
            'tag': 'iq',
            'attrs': {
              'to': _0x271f7f,
              'type': "set",
              'xmlns': "w:profile:picture"
            },
            'content': [{
              'tag': "picture",
              'attrs': {
                'type': "image"
              },
              'content': _0x616201
            }]
          });
          fs.unlinkSync(_0xf594c5);
          _0x194e7d(mess.done);
        } else {
          var _0x28ecc9 = await _0x3347b0.updateProfilePicture(_0x271f7f, {
            'url': _0xf594c5
          });
          fs.unlinkSync(_0xf594c5);
          _0x194e7d(mess.done);
        }
        break;
      case "setbio":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Text needed*\nExample: " + (_0x22d4e2 + _0x187f8e) + " " + botname);
          }
          await _0x3347b0.updateProfileStatus(_0x2ce6e9);
          _0x3915a4.reply("*Successfully updated bio to \"" + _0x2ce6e9 + "\"*");
        }
        break;
      case "react":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x360a67) {
            return _0x3915a4.reply("Please enter an emoji to react, E.g " + prefixz + "react 💔");
          }
          reactionMessage = {
            'react': {
              'text': _0x360a67[0],
              'key': {
                'remoteJid': _0x3915a4.chat,
                'fromMe': true,
                'id': _0xf32e23.id
              }
            }
          };
          _0x3347b0.sendMessage(_0x3915a4.chat, reactionMessage);
        }
        break;
      case "antibot":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          if (!_0x4302a3 && !_0x449bf4) {
            return _0x3915a4.reply(mess.notadmin);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("*on or off?*");
          }
          if (_0x360a67[0] === 'on') {
            db.data.chats[_0x2cd79f].antibot = true;
            _0x3915a4.reply("*Successfully enabled " + _0x187f8e + '*');
          } else if (_0x360a67[0] === "off") {
            db.data.chats[_0x2cd79f].antibot = false;
            _0x3915a4.reply("*Successfully disabled " + _0x187f8e + '*');
          }
        }
        break;
      case "antilink":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          if (!_0x4302a3 && !_0x449bf4) {
            return _0x3915a4.reply(mess.notadmin);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("*on or off?*");
          }
          if (_0x360a67[0] === 'on') {
            db.data.chats[_0x2cd79f].antilink = true;
            _0x3915a4.reply("*Successfully enabled " + _0x187f8e + '*');
          } else if (_0x360a67[0] === "off") {
            db.data.chats[_0x2cd79f].antilink = false;
            _0x3915a4.reply("*Successfully disabled " + _0x187f8e + '*');
          }
        }
        break;
      case "antilinkgc":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          if (!_0x4302a3 && !_0x449bf4) {
            return _0x3915a4.reply(mess.notadmin);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("*on or off?*");
          }
          if (_0x360a67[0] === 'on') {
            db.data.chats[_0x2cd79f].antilinkgc = true;
            _0x3915a4.reply("*Successfully enabled " + _0x187f8e + '*');
          } else if (_0x360a67[0] === "off") {
            db.data.chats[_0x2cd79f].antilinkgc = false;
            _0x3915a4.reply("*Successfully disabled " + _0x187f8e + '*');
          }
        }
        break;
      case "tagall":
      case "tag":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        let _0x53c8eb = _0x3915a4.sender;
        let _0x2779ab = "*TAGGED BY:*  @" + _0x53c8eb.split('@')[0] + "\n\n*MESSAGE:* " + (q ? q : "No message") + "\n\n";
        for (let _0x874312 of _0x4e5809) {
          _0x2779ab += '@' + _0x874312.id.split('@')[0] + "\n";
        }
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'text': _0x2779ab,
          'mentions': _0x4e5809.map(_0x2fd34e => _0x2fd34e.id)
        }, {
          'quoted': _0x3915a4
        });
        break;
      case "hidetag":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'text': q ? q : '',
          'mentions': _0x4e5809.map(_0x1b6842 => _0x1b6842.id)
        }, {
          'quoted': _0x3915a4
        });
        break;
      case "mediatag":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x4302a3) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x3915a4.quoted) {
          return _0x3915a4.reply("Reply to any media with caption " + (_0x22d4e2 + _0x187f8e));
        }
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'forward': _0x3915a4.quoted.fakeObj,
          'mentions': _0x4e5809.map(_0xfef442 => _0xfef442.id)
        });
        break;
      case "link":
      case "linkgc":
      case "gclink":
      case "grouplink":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        let _0x35f2fd = await _0x3347b0.groupInviteCode(_0x3915a4.chat);
        _0x3347b0.sendText(_0x3915a4.chat, "*GROUP LINK*\n\n*NAME:* " + _0x5b84af.subject + "\n\n*OWNER:* " + (_0x5b84af.owner !== undefined ? '+' + _0x5b84af.owner.split`@`[0] : "Unknown") + "\n\n*ID:* " + _0x5b84af.id + "\n\n*LINK:* https://chat.whatsapp.com/" + _0x35f2fd + "\n\n*MEMBERS:* " + _0x5b84af.participants.length, _0x3915a4, {
          'detectLink': true
        });
        break;
      case "resetlink":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        await _0x3347b0.groupRevokeInvite(_0x3915a4.chat).then(_0x1d8b2b => {
          _0x3915a4.reply(mess.done);
        });
        break;
      case "tagadmin":
      case "listadmin":
      case "admin":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          const _0x1e271f = _0x4e5809.filter(_0x339ab7 => _0x339ab7.admin);
          const _0x6a06b8 = _0x1e271f.map((_0x2ed772, _0x3ee09a) => _0x3ee09a + 1 + ". @" + _0x2ed772.id.split('@')[0]).join("\n");
          const _0x481209 = _0x5b84af.owner || _0x1e271f.find(_0x651b51 => _0x651b51.admin === "superadmin")?.['id'] || _0x3915a4.chat.split`-`[0] + "@s.whatsapp.net";
          let _0x32668b = ("   \n*Group Admins Here:*\n" + _0x6a06b8 + "\n").trim();
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': _0x32668b,
            'mentions': [..._0x1e271f.map(_0x30d164 => _0x30d164.id), _0x481209]
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "setdesc":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.notadmin);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please enter a text*");
        }
        await _0x3347b0.groupUpdateDescription(_0x3915a4.chat, _0x2ce6e9);
        _0x3915a4.reply(mess.done);
        break;
      case "poll":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          let [_0x5a78da, _0x586f7c] = _0x2ce6e9.split('|');
          if (_0x2ce6e9.split('|') < 2) {
            return await _0x3915a4.reply("Enter a question and atleast 2 options\nExample: " + _0x22d4e2 + "poll Who is best player?|Messi,Ronaldo,None...");
          }
          let _0x4f0bae = [];
          for (let _0x4c35b2 of _0x586f7c.split(',')) {
            _0x4f0bae.push(_0x4c35b2);
          }
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'poll': {
              'name': _0x5a78da,
              'values': _0x4f0bae
            }
          });
        }
        break;
      case "add":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        let _0x5bd77d = _0x3915a4.quoted ? _0x3915a4.quoted.sender : _0x2ce6e9.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x3347b0.groupParticipantsUpdate(_0x3915a4.chat, [_0x5bd77d], "add");
        _0x3915a4.reply(mess.done);
        break;
      case "promote":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        let _0x33e759 = _0x3915a4.mentionedJid[0] ? _0x3915a4.mentionedJid[0] : _0x3915a4.quoted ? _0x3915a4.quoted.sender : _0x2ce6e9.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x3347b0.groupParticipantsUpdate(_0x3915a4.chat, [_0x33e759], "promote");
        _0x3915a4.reply(mess.done);
        break;
      case "demote":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        let _0x5370d2 = _0x3915a4.mentionedJid[0] ? _0x3915a4.mentionedJid[0] : _0x3915a4.quoted ? _0x3915a4.quoted.sender : _0x2ce6e9.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x3347b0.groupParticipantsUpdate(_0x3915a4.chat, [_0x5370d2], "demote");
        _0x3915a4.reply(mess.done);
        break;
      case "setgroupname":
      case "setgcname":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Desired groupname?*");
        }
        await _0x3347b0.groupUpdateSubject(_0x3915a4.chat, _0x2ce6e9);
        _0x3915a4.reply(mess.done);
        break;
      case "kick":
      case "remove":
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        let _0x4ddd9c = _0x3915a4.mentionedJid[0] ? _0x3915a4.mentionedJid[0] : _0x3915a4.quoted ? _0x3915a4.quoted.sender : _0x2ce6e9.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x3347b0.groupParticipantsUpdate(_0x3915a4.chat, [_0x4ddd9c], "remove");
        _0x3915a4.reply(mess.done);
        break;
      case "invite":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Enter the number you want to invite to this group*\n\nExample :\n" + (_0x22d4e2 + _0x187f8e) + " 263714757857");
          }
          if (_0x2ce6e9.includes('+')) {
            return _0x3915a4.reply("*Enter the number together without* *+*");
          }
          if (isNaN(_0x2ce6e9)) {
            return _0x3915a4.reply("*Enter only the numbers with your country code without spaces*");
          }
          let _0x35850d = _0x3915a4.chat;
          let _0x134675 = "https://chat.whatsapp.com/" + (await _0x3347b0.groupInviteCode(_0x35850d));
          await _0x3347b0.sendMessage(_0x2ce6e9 + "@s.whatsapp.net", {
            'text': "*GROUP INVITATION*\n\nSomeone invites you to join this group: \n\n" + _0x134675,
            'mentions': [_0x3915a4.sender]
          });
          _0x3915a4.reply("*Successfully sent invite link*");
        }
        break;
      case "closetime":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4302a3 && !_0x449bf4) {
            return _0x3915a4.reply(mess.notadmin);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          const _0x33aa72 = _0x360a67[0];
          const _0x4d9ca1 = _0x360a67[1].toLowerCase();
          let _0xc6c426;
          switch (_0x4d9ca1) {
            case "seconds":
              _0xc6c426 = _0x33aa72 * 1000;
              break;
            case "minutes":
              _0xc6c426 = _0x33aa72 * 60000;
              break;
            case "hours":
              _0xc6c426 = _0x33aa72 * 3600000;
              break;
            case "days":
              _0xc6c426 = _0x33aa72 * 86400000;
              break;
            default:
              return _0x3915a4.reply("*Select unit:*\nseconds\nminutes\nhours\ndays\n\n*Example:*\n10 seconds");
          }
          _0x3915a4.reply("*Closing group after " + _0x33aa72 + " " + _0x4d9ca1 + '*');
          setTimeout(() => {
            _0x3347b0.groupSettingUpdate(_0x3915a4.chat, "announcement");
            _0x3915a4.reply("Group closed by admin. Only admins can send messages.");
          }, _0xc6c426);
        }
        break;
      case "opentime":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4302a3 && !_0x449bf4) {
            return _0x3915a4.reply(mess.notadmin);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          const _0xcc313d = _0x360a67[0];
          const _0x2a91fe = _0x360a67[1].toLowerCase();
          let _0x174bf8;
          switch (_0x2a91fe) {
            case "seconds":
              _0x174bf8 = _0xcc313d * 1000;
              break;
            case "minutes":
              _0x174bf8 = _0xcc313d * 60000;
              break;
            case "hours":
              _0x174bf8 = _0xcc313d * 3600000;
              break;
            case "days":
              _0x174bf8 = _0xcc313d * 86400000;
              break;
            default:
              return _0x3915a4.reply("*Select unit:*\nseconds\nminutes\nhours\ndays\n\n*Example:*\n10 seconds");
          }
          _0x3915a4.reply("*Opening group after " + _0xcc313d + " " + _0x2a91fe + '*');
          setTimeout(() => {
            _0x3347b0.groupSettingUpdate(_0x3915a4.chat, "not_announcement");
            _0x3915a4.reply("Group opened by admin. Members can now send messages.");
          }, _0x174bf8);
        }
        break;
      case "vcf":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!(_0x293251 || _0x449bf4)) {
            return _0x3915a4.reply(mess.admin);
          }
          let _0x3a0c97 = await _0x3347b0.groupMetadata(_0x3915a4.chat);
          vcard = '';
          noPort = 0;
          for (let _0x27f00f of _0x3a0c97.participants) {
            vcard += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + noPort++ + "] +" + _0x27f00f.id.split('@')[0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x27f00f.id.split('@')[0] + ':+' + _0x27f00f.id.split('@')[0] + "\nEND:VCARD\n";
          }
          _0x3915a4.reply("\nPlease wait, saving " + _0x3a0c97.participants.length + " contacts");
          require('fs').writeFileSync("./contacts.vcf", vcard.trim());
          await sleep(2000);
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'document': require('fs').readFileSync("./contacts.vcf"),
            'mimetype': "text/vcard",
            'fileName': "Contact.vcf",
            'caption': "Successful\n\nGroup: *" + _0x3a0c97.subject + "*\nContacts: *" + _0x3a0c97.participants.length + '*'
          }, {
            'ephemeralExpiration': 0x15180,
            'quoted': _0x3915a4
          });
          require('fs').unlinkSync("./contacts.vcf");
        }
        break;
      case "totalmembers":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!(_0x293251 || _0x449bf4)) {
            return _0x3915a4.reply(mess.admin);
          }
          XpBotbigpp = await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': "*GROUP*: " + _0x5b84af.subject + "\n*MEMBERS*: " + _0x4e5809.length
          }, {
            'quoted': _0x3915a4,
            'ephemeralExpiration': 0x15180
          });
        }
        break;
      case "sticker":
      case 's':
        if (!_0xf32e23) {
          return _0x3915a4.reply("Send or reply to images, videos, or gifs with captions " + (_0x22d4e2 + _0x187f8e));
        }
        if (/image/.test(_0x439d63)) {} else {
          if (/video/.test(_0x439d63)) {
            if ((_0xf32e23.msg || _0xf32e23).seconds > 10) {
              return _0x3915a4.reply("The video length must be 10 seconds or less. Please try again.");
            }
          } else {
            return _0x3915a4.reply("Send or reply to images, videos, or gifs with captions " + (_0x22d4e2 + _0x187f8e));
          }
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(_0x439d63)) {
            return _0x3915a4.reply("*Reply sticker with caption " + (_0x22d4e2 + _0x187f8e) + '*');
          }
          let _0x4c9c10 = await _0x3347b0.downloadAndSaveMediaMessage(_0x161dfd);
          let _0x3e260a = await getRandom(".png");
          exec("ffmpeg -i " + _0x4c9c10 + " " + _0x3e260a, _0x337d19 => {
            fs.unlinkSync(_0x4c9c10);
            if (_0x337d19) {
              return _0x337d19;
            }
            let _0x264811 = fs.readFileSync(_0x3e260a);
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'image': _0x264811
            }, {
              'quoted': _0x3915a4
            });
            fs.unlinkSync(_0x3e260a);
          });
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(_0x439d63)) {
            return _0x3915a4.reply("*Reply sticker with caption " + (_0x22d4e2 + _0x187f8e) + '*');
          }
          let _0x5a0ba2 = await _0x3347b0.downloadAndSaveMediaMessage(_0x161dfd);
          let _0x19cf68 = await webp2mp4File(_0x5a0ba2);
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'video': {
              'url': _0x19cf68.result,
              'caption': "ᎫᏆΝᏔϴϴ"
            }
          }, {
            'quoted': _0x3915a4
          });
          await fs.unlinkSync(_0x5a0ba2);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(_0x439d63) && !/audio/.test(_0x439d63)) {
            return _0x3915a4.reply("Send or reply to a video to be converted to audio with captions " + (_0x22d4e2 + _0x187f8e));
          }
          let _0x6fa371 = await _0x3347b0.downloadMediaMessage(_0x161dfd);
          let _0x396995 = await toAudio(_0x6fa371, "mp4");
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'audio': _0x396995,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "tomp3":
        {
          if (!/video/.test(_0x439d63) && !/audio/.test(_0x439d63)) {
            return _0x3915a4.reply("Send or reply to a video to be converted to mp3 with captions " + (_0x22d4e2 + _0x187f8e));
          }
          let _0xbc0e03 = await _0x3347b0.downloadMediaMessage(_0x161dfd);
          let _0xeb7c09 = await toAudio(_0xbc0e03, "mp4");
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'document': _0xeb7c09,
            'mimetype': "audio/mp3",
            'fileName': "Xploader.mp3"
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(_0x439d63) && !/audio/.test(_0x439d63)) {
            return _0x3915a4.reply("Send or reply to a video to be converted to VN with captions " + (_0x22d4e2 + _0x187f8e));
          }
          let _0x42712a = await _0x3347b0.downloadMediaMessage(_0x161dfd);
          let {
            toPTT: _0x21cafa
          } = require("./lib/converter");
          let _0x21a550 = await _0x21cafa(_0x42712a, "mp4");
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'audio': _0x21a550,
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "togif":
        {
          if (!/webp/.test(_0x439d63)) {
            return _0x3915a4.reply("*Reply to a sticker with caption " + (_0x22d4e2 + _0x187f8e) + '*');
          }
          let _0x10376d = await _0x3347b0.downloadAndSaveMediaMessage(_0x161dfd);
          let _0x87ca10 = await webp2mp4File(_0x10376d);
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'video': {
              'url': _0x87ca10.result,
              'caption': "ᎫᏆΝᏔϴϴ"
            },
            'gifPlayback': true
          }, {
            'quoted': _0x3915a4
          });
          await fs.unlinkSync(_0x10376d);
        }
        break;
      case "play2":
      case "song2":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please provide a song name!*");
          }
          const _0x5d9ae3 = require("axios");
          const _0x10eae2 = require("yt-search");
          try {
            const _0x5f3f6c = await _0x10eae2(_0x2ce6e9);
            if (!_0x5f3f6c || _0x5f3f6c.all.length === 0) {
              return _0x3915a4.reply("*The song you are looking for was not found.*");
            }
            const _0x559b01 = _0x5f3f6c.all[0];
            const _0x1e755d = "https://p.oceansaver.in/ajax/download.php?format=mp3&url=" + encodeURIComponent(_0x559b01.url) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222";
            const _0x25a43e = await _0x5d9ae3.get(_0x1e755d, {
              'headers': {
                'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
              }
            });
            if (!_0x25a43e.data || !_0x25a43e.data.success) {
              return _0x3915a4.reply("*Failed to download audio.*");
            }
            const {
              id: _0x3316ef,
              title: _0x2b515b,
              info: _0x580833
            } = _0x25a43e.data;
            while (true) {
              const _0x41c1c4 = await _0x5d9ae3.get("https://p.oceansaver.in/ajax/progress.php?id=" + _0x3316ef, {
                'headers': {
                  'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
                }
              });
              if (_0x41c1c4.data && _0x41c1c4.data.success && _0x41c1c4.data.progress === 1000) {
                const _0x2f4ab3 = _0x41c1c4.data.download_url;
                await _0x3347b0.sendMessage(_0x3915a4.chat, {
                  'audio': {
                    'url': _0x2f4ab3
                  },
                  'mimetype': "audio/mpeg",
                  'fileName': _0x559b01.title + ".mp3",
                  'contextInfo': {
                    'externalAdReply': {
                      'title': botname,
                      'body': '' + _0x559b01.title,
                      'thumbnailUrl': '' + _0x559b01.thumbnail,
                      'sourceUrl': '' + _0x559b01.url,
                      'mediaType': 0x2,
                      'mediaUrl': '' + _0x559b01.thumbnail
                    }
                  }
                }, {
                  'quoted': _0x3915a4
                });
                break;
              }
              await sleep(5000);
            }
          } catch (_0x51ab68) {
            console.error("Error:", _0x51ab68);
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'text': "An error occurred while trying to download the audio."
            }, {
              'quoted': _0x3915a4
            });
          }
        }
        break;
      case "play":
      case "song":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please provide a song name!*");
          }
          const {
            y2save: _0x23f59a
          } = require("./lib/y2save.js");
          const _0x3822b1 = require("yt-search");
          const _0x2d8cdb = async (_0x4093f9, _0x578b4c) => {
            try {
              const _0x3a64ae = await fetchJson("https://api.vreden.web.id/api/ytplaymp3?query=" + encodeURIComponent(_0x4093f9));
              if (_0x3a64ae.status === 200 && _0x3a64ae.result && _0x3a64ae.result.download && _0x3a64ae.result.download.status) {
                return _0x3a64ae.result.download.url;
              } else {
                throw new Error("Vreden API failed.");
              }
            } catch (_0x533189) {
              console.error("Error with Vreden API:", _0x533189.message);
              try {
                return await _0x23f59a.main(_0x578b4c, "mp3", "128kbps");
              } catch (_0x5bf683) {
                console.error("Error with y2save:", _0x5bf683.message);
                throw _0x5bf683;
              }
            }
          };
          try {
            const _0xd7c955 = await _0x3822b1(_0x2ce6e9);
            if (!_0xd7c955 || _0xd7c955.all.length === 0) {
              return _0x3915a4.reply("*The song you are looking for was not found.*");
            }
            const _0x5a0def = _0xd7c955.all[0];
            const _0x2e12e5 = _0x5a0def.url;
            const _0x4c6a8c = _0x5a0def.title;
            const _0x1f226b = await _0x2d8cdb(_0x4c6a8c, _0x2e12e5);
            console.log("Final download URL:", _0x1f226b);
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'audio': {
                'url': _0x1f226b
              },
              'mimetype': "audio/mpeg",
              'fileName': _0x5a0def.title + ".mp3",
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': '' + _0x5a0def.title,
                  'thumbnailUrl': '' + _0x5a0def.thumbnail,
                  'sourceUrl': '' + _0x5a0def.url,
                  'mediaType': 0x2,
                  'mediaUrl': '' + _0x5a0def.thumbnail
                }
              }
            }, {
              'quoted': _0x3915a4
            });
          } catch (_0xcfb594) {
            console.error("Error:", _0xcfb594);
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'text': "An error occurred while trying to download the audio."
            }, {
              'quoted': _0x3915a4
            });
          }
        }
        break;
      case "play4":
      case "song4":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please provide a song name!*");
          }
          const {
            y2save: _0x37fde8
          } = require("./lib/y2save.js");
          const _0x4b8786 = require("yt-search");
          const _0xc5ce83 = async _0x40ac22 => {
            try {
              return await _0x37fde8.main(_0x40ac22, "mp3", "128kbps");
            } catch (_0x533213) {
              console.error("Error with y2save:", _0x533213.message);
              throw _0x533213;
            }
          };
          try {
            const _0x3059a0 = await _0x4b8786(_0x2ce6e9);
            if (!_0x3059a0 || _0x3059a0.all.length === 0) {
              return _0x3915a4.reply("*The song you are looking for was not found.*");
            }
            const _0x1a440e = _0x3059a0.all[0];
            const _0x29bd29 = await _0xc5ce83(_0x1a440e.url);
            console.log("Final download URL:", _0x29bd29);
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'audio': {
                'url': _0x29bd29
              },
              'mimetype': "audio/mpeg",
              'fileName': _0x1a440e.title + ".mp3",
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': '' + _0x1a440e.title,
                  'thumbnailUrl': '' + _0x1a440e.thumbnail,
                  'sourceUrl': '' + _0x1a440e.url,
                  'mediaType': 0x2,
                  'mediaUrl': '' + _0x1a440e.thumbnail
                }
              }
            }, {
              'quoted': _0x3915a4
            });
          } catch (_0x556183) {
            console.error("Error:", _0x556183);
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'text': "An error occurred while trying to download the audio."
            }, {
              'quoted': _0x3915a4
            });
          }
        }
        break;
      case "play5":
      case "song5":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please provide a song name!*");
          }
          const _0x477f25 = async _0x3414bc => {
            try {
              const _0x5d5ac3 = await fetchJson("https://api.vreden.web.id/api/ytplaymp3?query=" + encodeURIComponent(_0x3414bc));
              if (_0x5d5ac3.status === 200 && _0x5d5ac3.result && _0x5d5ac3.result.download && _0x5d5ac3.result.download.status) {
                return _0x5d5ac3.result.download.url;
              } else {
                throw new Error("Vreden API failed.");
              }
            } catch (_0x4c61c3) {
              console.error("Error with Vreden API:", _0x4c61c3.message);
              throw _0x4c61c3;
            }
          };
          try {
            const _0x47d73f = await _0x477f25(_0x2ce6e9);
            console.log("Final download URL:", _0x47d73f);
            const _0x41a345 = await fetchJson("https://api.vreden.web.id/api/ytplaymp3?query=" + encodeURIComponent(_0x2ce6e9));
            const _0x509e36 = _0x41a345.result.metadata;
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'audio': {
                'url': _0x47d73f
              },
              'mimetype': "audio/mpeg",
              'fileName': _0x509e36.title + ".mp3",
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': '' + _0x509e36.title,
                  'thumbnailUrl': '' + _0x509e36.thumbnail,
                  'sourceUrl': '' + _0x509e36.url,
                  'mediaType': 0x2,
                  'mediaUrl': '' + _0x509e36.thumbnail
                }
              }
            }, {
              'quoted': _0x3915a4
            });
          } catch (_0x5cfd84) {
            console.error("Error:", _0x5cfd84);
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'text': "An error occurred while trying to download the audio."
            }, {
              'quoted': _0x3915a4
            });
          }
        }
        break;
      case "playdoc":
      case "songdoc":
        {
          try {
            if (!_0x2ce6e9) {
              return _0x3915a4.reply("*Please provide a song name!*");
            }
            try {
              const _0x474c0a = await fetchJson("https://api.vreden.web.id/api/ytplaymp3?query=" + encodeURIComponent(_0x2ce6e9));
              if (_0x474c0a.status !== 200 || !_0x474c0a.result || !_0x474c0a.result.download || !_0x474c0a.result.download.status) {
                throw new Error("*Failed to retrieve the song!*");
              }
              const _0x592694 = _0x474c0a.result;
              const _0x4ce091 = await fetch(_0x592694.download.url).then(_0xb173ff => _0xb173ff.buffer());
              await _0x3347b0.sendMessage(_0x3915a4.chat, {
                'document': _0x4ce091,
                'mimetype': "audio/mp3",
                'fileName': _0x592694.metadata.title + ".mp3",
                'contextInfo': {
                  'externalAdReply': {
                    'title': botname,
                    'body': '' + _0x592694.metadata.title,
                    'thumbnailUrl': '' + _0x592694.metadata.thumbnail,
                    'sourceUrl': '' + _0x592694.metadata.url,
                    'mediaType': 0x2,
                    'mediaUrl': '' + _0x592694.metadata.thumbnail
                  }
                }
              }, {
                'quoted': _0x3915a4
              });
              _0x3347b0.sendMessage(_0x3915a4.chat, {
                'react': {
                  'text': '✅',
                  'key': _0x3915a4.key
                }
              });
            } catch (_0x1e8c6a) {
              console.error("Vreden API failed:", _0x1e8c6a);
              try {
                const _0x145820 = await yts(_0x2ce6e9);
                if (!_0x145820.all[0]) {
                  return _0x3915a4.reply("*Song not found!*");
                }
                const _0x152ec7 = _0x145820.all[0].url;
                const _0x5420b0 = await y2save.main(_0x152ec7, "mp3", "128kbps");
                if (!_0x5420b0) {
                  throw new Error("*Failed to retrieve the song!*");
                }
                const _0xd76128 = await fetch(_0x5420b0).then(_0x550099 => _0x550099.buffer());
                await _0x3347b0.sendMessage(_0x3915a4.chat, {
                  'document': _0xd76128,
                  'mimetype': "audio/mp3",
                  'fileName': _0x145820.all[0].title + ".mp3",
                  'contextInfo': {
                    'externalAdReply': {
                      'title': botname,
                      'body': '' + _0x145820.all[0].title,
                      'thumbnailUrl': '' + _0x145820.all[0].thumbnail,
                      'sourceUrl': '' + _0x152ec7,
                      'mediaType': 0x2,
                      'mediaUrl': '' + _0x145820.all[0].thumbnail
                    }
                  }
                }, {
                  'quoted': _0x3915a4
                });
                _0x3347b0.sendMessage(_0x3915a4.chat, {
                  'react': {
                    'text': '✅',
                    'key': _0x3915a4.key
                  }
                });
              } catch (_0x131ed8) {
                console.error("y2save method failed:", _0x131ed8);
                _0x3915a4.reply("Error: " + _0x131ed8.message);
              }
            }
          } catch (_0x273332) {
            console.error("Playdoc command failed:", _0x273332);
            _0x3915a4.reply("Error: " + _0x273332.message);
          }
        }
        break;
      case "xvideos":
      case "xvideo":
      case "xvideosdl":
      case "porn":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please provide a porn video search query!*");
          }
          let _0x1d18fc = await fetchJson("https://api-aswin-sparky.koyeb.app/api/search/xvideos?search=" + _0x2ce6e9);
          let _0x11a6c3 = await fetchJson("https://api-aswin-sparky.koyeb.app/api/downloader/xdl?url=" + _0x1d18fc.data[0].url);
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'video': {
              'url': _0x11a6c3.data
            },
            'caption': '' + wm,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': '' + _0x1d18fc.data[0].title,
                'sourceUrl': '' + _0x1d18fc.data[0].url,
                'mediaType': 0x2,
                'mediaUrl': '' + _0x1d18fc.data[0].url
              }
            }
          }, {
            'quoted': _0x3915a4
          });
          let _0x24c68e = await fetchJson("https://api-aswin-sparky.koyeb.app/api/downloader/xdl?url=" + _0x1d18fc.data[1].url);
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'video': {
              'url': _0x24c68e.data
            },
            'caption': '' + wm,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': '' + _0x1d18fc.data[1].title,
                'sourceUrl': '' + _0x1d18fc.data[1].url,
                'mediaType': 0x2,
                'mediaUrl': '' + _0x1d18fc.data[0].url
              }
            }
          }, {
            'quoted': _0x3915a4
          });
          let _0x50ed1b = await fetchJson("*https://api-aswin-sparky.koyeb.app/api/downloader/xdl?url=" + _0x1d18fc.data[2].url + '*');
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'video': {
              'url': _0x50ed1b.data
            },
            'caption': '' + wm,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': '' + _0x1d18fc.data[2].title,
                'sourceUrl': '' + _0x1d18fc.data[2].url,
                'mediaType': 0x2,
                'mediaUrl': '' + _0x1d18fc.data[2].url
              }
            }
          }, {
            'quoted': _0x3915a4
          });
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'react': {
              'text': '✅',
              'key': _0x3915a4.key
            }
          });
        }
        break;
      case "yts":
      case "ytsearch":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Example : " + (_0x22d4e2 + _0x187f8e) + " Alan Walker Lilly*");
          }
          let _0x28c157 = await yts(_0x2ce6e9);
          let _0xe3ec0a = "YouTube Search\n\n Result From " + _0x2ce6e9 + "\n\n";
          let _0x274592 = 1;
          for (let _0x4ec4f6 of _0x28c157.all) {
            _0xe3ec0a += "□ No : " + _0x274592++ + "\n□ Type : " + _0x4ec4f6.type + "\n□ Video ID : " + _0x4ec4f6.videoId + "\n□ Title : " + _0x4ec4f6.title + "\n□ Views : " + _0x4ec4f6.views + "\n□ Duration : " + _0x4ec4f6.timestamp + "\n□ Uploaded : " + _0x4ec4f6.ago + "\n□ Url : " + _0x4ec4f6.url + "\n\n─────────────────\n\n";
          }
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'image': {
              'url': _0x28c157.all[0].thumbnail
            },
            'caption': _0xe3ec0a
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "gitclone":
        if (!_0x360a67[0]) {
          return _0x3915a4.reply("*GitHub link to clone?*\nExample :\n" + _0x22d4e2 + _0x187f8e + " https://github.com/OfficialKango");
        }
        if (!isUrl(_0x360a67[0])) {
          return _0x3915a4.reply("*Link invalid! Please provide a valid URL.*");
        }
        let _0x2ecac5 = /(?:https|git)(?::\/\/|@)(www\.)?github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [,, _0x255949, _0x1c7ab9] = _0x360a67[0].match(_0x2ecac5) || [];
        if (!_0x1c7ab9) {
          return _0x3915a4.reply("*Invalid GitHub link format. Please double-check the provided link.*");
        }
        _0x1c7ab9 = _0x1c7ab9.replace(/.git$/, '');
        let _0x15b238 = "https://api.github.com/repos/" + _0x255949 + '/' + _0x1c7ab9 + "/zipball";
        let _0x14012f = (await fetch(_0x15b238, {
          'method': "HEAD"
        })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[1];
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'document': {
            'url': _0x15b238
          },
          'fileName': _0x14012f + ".zip",
          'mimetype': "application/zip"
        }, {
          'quoted': _0x3915a4
        })["catch"](_0x4ff4f7 => _0x3915a4.reply(mess.error));
        break;
      case "ytmp3doc":
        {
          try {
            if (!_0x2ce6e9) {
              return _0x3915a4.reply("*Please provide a valid YouTube link!*");
            }
            const _0x2269b8 = _0x2ce6e9.trim();
            console.log("YouTube URL:", _0x2269b8);
            await _0x1e7347(_0x2269b8);
          } catch (_0x23497f) {
            console.error("ytmp3 command failed:", _0x23497f);
            _0x3915a4.reply("Error: " + _0x23497f.message);
          }
        }
        break;
      case "ytmp4doc":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please provide a valid  YouTube link!*");
          }
          let _0x1214af = _0x2ce6e9.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
          if (!_0x1214af) {
            return _0x3915a4.reply("*Seems like your message does not contain a valid YouTube link*");
          }
          let _0x264d94 = parseInt(_0x2ce6e9) - 1;
          if (_0x264d94 < 0 || _0x264d94 >= _0x1214af.length) {
            return _0x3915a4.reply("*Invalid URL index*");
          }
          await _0x160af9(_0x1214af);
        }
        break;
      case "ytmp3":
        {
          try {
            if (!_0x2ce6e9) {
              return _0x3915a4.reply("*Please provide a valid YouTube link!*");
            }
            const _0x4b1fd0 = _0x2ce6e9.trim();
            console.log("YouTube URL:", _0x4b1fd0);
            await _0x5772db(_0x4b1fd0);
          } catch (_0x1a38fe) {
            console.error("ytmp3 command failed:", _0x1a38fe);
            _0x3915a4.reply("Error: " + _0x1a38fe.message);
          }
        }
        break;
      case "ytmp4":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please provide a valid  YouTube link!*");
          }
          let _0x13b0df = _0x2ce6e9.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
          if (!_0x13b0df) {
            return _0x3915a4.reply("*Seems like your message does not contain a valid YouTube link*");
          }
          let _0xd0bbc6 = parseInt(_0x2ce6e9) - 1;
          if (_0xd0bbc6 < 0 || _0xd0bbc6 >= _0x13b0df.length) {
            return _0x3915a4.reply("*Invalid URL index*");
          }
          await _0x34b2ac(_0x13b0df);
        }
        break;
      case "tiktok":
      case "tikdl":
      case "tiktokvideo":
        {
          if (!_0x360a67[0]) {
            return _0x3915a4.reply("*Please provide a TikTok video url!*");
          }
          let _0x3f8f4b = await fetchJson("https://api-aswin-sparky.koyeb.app/api/downloader/tiktok?url=" + _0x360a67[0]);
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'caption': '' + wm,
            'video': {
              'url': _0x3f8f4b.data.video
            },
            'fileName': "video.mp4",
            'mimetype': "video/mp4"
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "tiktokaudio":
        {
          if (!_0x360a67[0]) {
            return _0x3915a4.reply("*Please provide a TikTok audio url!*");
          }
          let _0x4bfd08 = await fetchJson("https://api-aswin-sparky.koyeb.app/api/downloader/tiktok?url=" + _0x360a67[0]);
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'audio': {
              'url': _0x4bfd08.data.audio
            },
            'fileName': "tiktok.mp3",
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "apk":
      case "apkdl":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Which apk do you want to download?*");
          }
          let _0x2b8174 = await fetchJson("https://bk9.fun/search/apk?q=" + _0x2ce6e9);
          let _0x4350e4 = await fetchJson("https://bk9.fun/download/apk?id=" + _0x2b8174.BK9[0].id);
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'document': {
              'url': _0x4350e4.BK9.dllink
            },
            'fileName': _0x4350e4.BK9.name,
            'mimetype': "application/vnd.android.package-archive",
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': '' + _0x4350e4.BK9.name,
                'thumbnailUrl': '' + _0x4350e4.BK9.icon,
                'sourceUrl': '' + _0x4350e4.BK9.dllink,
                'mediaType': 0x2,
                'showAdAttribution': true,
                'renderLargerThumbnail': false
              }
            }
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "telesticker":
      case "telegramsticker":
        {
          if (_0x360a67[0] && _0x360a67[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let _0x14df3a = await _0x3b1736(_0x360a67[0]);
            await _0x194e7d("*Sending " + _0x14df3a.length + " stickers...*");
            if (_0x3915a4.isGroup && _0x14df3a.length > 30) {
              await _0x194e7d("*Number of stickers more than 30, bot will send it in private chat.*");
              for (let _0x3d5ca5 = 0; _0x3d5ca5 < _0x14df3a.length; _0x3d5ca5++) {
                _0x3347b0.sendMessage(_0x3915a4.sender, {
                  'sticker': {
                    'url': _0x14df3a[_0x3d5ca5].url
                  }
                });
              }
            } else {
              for (let _0x48fa33 = 0; _0x48fa33 < _0x14df3a.length; _0x48fa33++) {
                _0x3347b0.sendMessage(_0x3915a4.chat, {
                  'sticker': {
                    'url': _0x14df3a[_0x48fa33].url
                  }
                });
              }
            }
          } else {
            _0x194e7d("*Telegram sticker link?*\nExample. " + (_0x22d4e2 + _0x187f8e) + " https://t.me/addstickers/FriendlyDeath");
          }
        }
        break;
      case "weather":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Which place?*");
          }
          let _0x448224 = _0x2ce6e9.split(" ")[0];
          let _0x233faf = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + _0x448224 + "&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en");
          let _0x3ca4de = '';
          _0x3ca4de += "*Weather of  " + _0x448224 + "*\n\n";
          _0x3ca4de += "*Weather:-* " + _0x233faf.data.weather[0].main + "\n";
          _0x3ca4de += "*Description:-* " + _0x233faf.data.weather[0].description + "\n";
          _0x3ca4de += "*Avg Temp:-* " + _0x233faf.data.main.temp + "\n";
          _0x3ca4de += "*Feels Like:-* " + _0x233faf.data.main.feels_like + "\n";
          _0x3ca4de += "*Pressure:-* " + _0x233faf.data.main.pressure + "\n";
          _0x3ca4de += "*Humidity:-* " + _0x233faf.data.main.humidity + "\n";
          _0x3ca4de += "*Humidity:-* " + _0x233faf.data.wind.speed + "\n";
          _0x3ca4de += "*Latitude:-* " + _0x233faf.data.coord.lat + "\n";
          _0x3ca4de += "*Longitude:-* " + _0x233faf.data.coord.lon + "\n";
          _0x3ca4de += "*Country:-* " + _0x233faf.data.sys.country + "\n";
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': _0x3ca4de
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "imdb":
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Name a Series or movie*");
        }
        let _0x420eba = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x2ce6e9 + "&plot=full");
        let _0x28ef1c = '';
        console.log(_0x420eba.data);
        _0x28ef1c += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
        _0x28ef1c += "Title      : " + _0x420eba.data.Title + "\n";
        _0x28ef1c += "Year       : " + _0x420eba.data.Year + "\n";
        _0x28ef1c += "Rated      : " + _0x420eba.data.Rated + "\n";
        _0x28ef1c += "Released   : " + _0x420eba.data.Released + "\n";
        _0x28ef1c += "Runtime    : " + _0x420eba.data.Runtime + "\n";
        _0x28ef1c += "Genre      : " + _0x420eba.data.Genre + "\n";
        _0x28ef1c += "Director   : " + _0x420eba.data.Director + "\n";
        _0x28ef1c += "Writer     : " + _0x420eba.data.Writer + "\n";
        _0x28ef1c += "Actors     : " + _0x420eba.data.Actors + "\n";
        _0x28ef1c += "Plot       : " + _0x420eba.data.Plot + "\n";
        _0x28ef1c += "Language   : " + _0x420eba.data.Language + "\n";
        _0x28ef1c += "Country    : " + _0x420eba.data.Country + "\n";
        _0x28ef1c += "Awards     : " + _0x420eba.data.Awards + "\n";
        _0x28ef1c += "BoxOffice  : " + _0x420eba.data.BoxOffice + "\n";
        _0x28ef1c += "Production : " + _0x420eba.data.Production + "\n";
        _0x28ef1c += "imdbRating : " + _0x420eba.data.imdbRating + "\n";
        _0x28ef1c += "imdbVotes  : " + _0x420eba.data.imdbVotes + '';
        _0x3347b0.sendMessage(_0x3915a4.chat, {
          'image': {
            'url': _0x420eba.data.Poster
          },
          'caption': _0x28ef1c
        }, {
          'quoted': _0x3915a4
        });
        break;
      case "wanumber":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Provide Number with last values as x*\n\nExample: " + (_0x22d4e2 + _0x187f8e) + " 2637147578xx");
          }
          var _0x43a50 = _0x2ce6e9.split(" ")[0];
          _0x3915a4.reply("*Searching for WhatsApp account in given range...*");
          var _0x47b826 = _0x43a50.split('x')[0];
          var _0x323dd3 = _0x43a50.split('x')[_0x43a50.split('x').length - 1] ? _0x43a50.split('x')[_0x43a50.split('x').length - 1] : '';
          var _0x13efbf = _0x43a50.split('x').length - 1;
          var _0x469fe4;
          if (_0x13efbf == 1) {
            _0x469fe4 = 10;
          } else {
            if (_0x13efbf == 2) {
              _0x469fe4 = 100;
            } else if (_0x13efbf == 3) {
              _0x469fe4 = 1000;
            }
          }
          var _0x1097fe = "*==[ List of Whatsapp Numbers ]==*\n\n";
          var _0x1d410e = "\n*Bio:* || \nHey there! I am using WhatsApp.\n";
          var _0x20a167 = "\n*Numbers with no WhatsApp account within provided range.*\n";
          for (let _0xacb9c9 = 0; _0xacb9c9 < _0x469fe4; _0xacb9c9++) {
            var _0x121f06 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            var _0x25f59a = _0x121f06[Math.floor(Math.random() * _0x121f06.length)];
            var _0x31a710 = _0x121f06[Math.floor(Math.random() * _0x121f06.length)];
            var _0x101972 = _0x121f06[Math.floor(Math.random() * _0x121f06.length)];
            var _0x496242 = _0x121f06[Math.floor(Math.random() * _0x121f06.length)];
            var _0x1c01ea;
            if (_0x13efbf == 1) {
              _0x1c01ea = '' + _0x25f59a;
            } else {
              if (_0x13efbf == 2) {
                _0x1c01ea = '' + _0x25f59a + _0x31a710;
              } else {
                if (_0x13efbf == 3) {
                  _0x1c01ea = '' + _0x25f59a + _0x31a710 + _0x101972;
                } else if (_0x13efbf == 4) {
                  _0x1c01ea = '' + _0x25f59a + _0x31a710 + _0x101972 + _0x496242;
                }
              }
            }
            var _0x50e82e = await _0x3347b0.onWhatsApp('' + _0x47b826 + _0xacb9c9 + _0x323dd3 + "@s.whatsapp.net");
            var _0x2d38ef = _0x50e82e.length !== 0 ? _0x50e82e : false;
            try {
              try {
                var _0x19c318 = await _0x3347b0.fetchStatus(_0x50e82e[0].jid);
              } catch {
                var _0x19c318 = "401";
              }
              if (_0x19c318 == "401" || _0x19c318.status.length == 0) {
                _0x1d410e += "wa.me/" + _0x50e82e[0].jid.split('@')[0] + "\n";
              } else {
                _0x1097fe += "*Number:* wa.me/" + _0x50e82e[0].jid.split('@')[0] + "\n*Bio:* " + _0x19c318.status + "\n*Last updated:* " + moment(_0x19c318.setAt).tz('' + timezones).format("HH:mm:ss DD/MM/YYYY") + "\n\n";
              }
            } catch {
              _0x20a167 += '' + _0x47b826 + _0xacb9c9 + _0x323dd3 + "\n";
            }
          }
          _0x3915a4.reply('' + _0x1097fe + _0x1d410e + _0x20a167);
        }
        break;
      case "ringtone":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Example : " + (_0x22d4e2 + _0x187f8e) + " black rover*");
          }
          let _0x309d9d = require("./lib/scraper");
          let _0x22c8da = await _0x309d9d.ringtone(_0x2ce6e9);
          let _0x462bbe = _0x22c8da[Math.floor(Math.random() * _0x22c8da.length)];
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'audio': {
              'url': _0x462bbe.audio
            },
            'fileName': _0x462bbe.title + ".mp3",
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "pinterest":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Enter a search quiry*");
          }
          let {
            pinterest: _0x2e06ac
          } = require("./lib/scraper");
          anutrest = await _0x2e06ac(_0x2ce6e9);
          result = anutrest[Math.floor(Math.random() * anutrest.length)];
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'image': {
              'url': result
            },
            'caption': "Media Url : " + result
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "itunes":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please provide a song name*");
          }
          try {
            let _0xafcb68 = await fetch("https://api.popcat.xyz/itunes?q=" + encodeURIComponent(_0x2ce6e9));
            if (!_0xafcb68.ok) {
              throw new Error("*API request failed with status " + _0xafcb68.status + '*');
            }
            let _0x130922 = await _0xafcb68.json();
            console.log("JSON response:", _0x130922);
            let _0x4254fb = "*Song Information:*\n\n     • *Name:* " + _0x130922.name + "\n\n     • *Artist:* " + _0x130922.artist + "\n\n     • *Album:* " + _0x130922.album + "\n\n     • *Release Date:* " + _0x130922.release_date + "\n\n     • *Price:* " + _0x130922.price + "\n\n     • *Length:* " + _0x130922.length + "\n\n     • *Genre:* " + _0x130922.genre + "\n\n     • *URL:* " + _0x130922.url;
            if (_0x130922.thumbnail) {
              await _0x3347b0.sendMessage(_0x3915a4.chat, {
                'image': {
                  'url': _0x130922.thumbnail
                },
                'caption': _0x4254fb
              }, {
                'quoted': _0x3915a4
              });
            } else {
              _0x3915a4.reply(_0x4254fb);
            }
          } catch (_0x1182e3) {
            console.error(_0x1182e3);
          }
        }
        break;
      case "fbdl":
      case "facebook":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please provide an Facebook video url!*");
          }
          var _0x130f2f = await fetchJson("https://api-aswin-sparky.koyeb.app/api/downloader/fbdl?url=" + q);
          var _0x115462 = _0x130f2f.data[0].url;
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'video': {
              'url': _0x115462,
              'caption': wm
            }
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "igdl":
      case "instagram":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please provide an Instagram video url!*");
          }
          var _0x50e82e = await fetchJson("https://api-aswin-sparky.koyeb.app/api/downloader/igdl?url=" + q);
          var _0x519e99 = _0x50e82e.data[0].url;
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'video': {
              'url': _0x519e99,
              'caption': wm
            }
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "happymod":
        {
          if (!q) {
            return _0x3915a4.reply("*Example " + (_0x22d4e2 + _0x187f8e) + " Subway surfer mod*");
          }
          let _0x3fe09a = await scp2.happymod(q);
          _0x3915a4.reply(util.format(_0x3fe09a));
        }
        break;
      case "glitchtext":
      case "graffiti":
      case "matrix":
      case "sand":
      case "topography":
      case "incandescent":
      case "dragonball":
      case "deadpool":
      case "writetext":
      case "advancedglow":
      case "typographytext":
      case "pixelglitch":
      case "neonglitch":
      case "flagtext":
      case "flag3dtext":
      case "deletingtext":
      case "blackpinkstyle":
      case "glowingtext":
      case "underwatertext":
      case "logomaker":
      case "cartoonstyle":
      case "papercutstyle":
      case "watercolortext":
      case "effectclouds":
      case "blackpinklogo":
      case "gradienttext":
      case "summerbeach":
      case "luxurygold":
      case "multicoloredneon":
      case "sandsummer":
      case "galaxywallpaper":
      case "1917style":
      case "makingneon":
      case "royaltext":
      case "freecreate":
      case "galaxystyle":
      case "lighteffects":
        {
          if (!q) {
            return _0x3915a4.reply("*Example : " + (_0x22d4e2 + _0x187f8e) + " Malvin*");
          }
          let _0x5b007c;
          if (/glitchtext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
          }
          if (/writetext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
          }
          if (/advancedglow/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/advanced-glow-effects-74.html";
          }
          if (/typographytext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
          }
          if (/pixelglitch/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
          }
          if (/neonglitch/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
          }
          if (/flagtext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
          }
          if (/flag3dtext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
          }
          if (/deletingtext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
          }
          if (/blackpinkstyle/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
          }
          if (/glowingtext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
          }
          if (/underwatertext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
          }
          if (/logomaker/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
          }
          if (/cartoonstyle/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
          }
          if (/papercutstyle/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
          }
          if (/watercolortext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
          }
          if (/effectclouds/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
          }
          if (/blackpinklogo/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
          }
          if (/gradienttext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
          }
          if (/summerbeach/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
          }
          if (/luxurygold/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
          }
          if (/multicoloredneon/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html";
          }
          if (/sandsummer/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
          }
          if (/galaxywallpaper/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
          }
          if (/1917style/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/1917-style-text-effect-523.html";
          }
          if (/makingneon/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
          }
          if (/royaltext/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
          }
          if (/freecreate/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
          }
          if (/galaxystyle/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
          }
          if (/lighteffects/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
          }
          if (/deadpool/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
          }
          if (/dragonball/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html";
          }
          if (/incandescent/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html";
          }
          if (/topography/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
          }
          if (/sand/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
          }
          if (/matrix/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/matrix-text-effect-154.html";
          }
          if (/graffiti/.test(_0x187f8e)) {
            _0x5b007c = "https://en.ephoto360.com/cute-girl-painting-graffiti-text-effect-667.html";
          }
          let _0x64312e = await _0x1bfc23(_0x5b007c, q);
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'image': {
              'url': _0x64312e
            },
            'caption': '' + mess.success
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "gpt":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please ask a question*");
          }
          let _0x170383 = await fetchJson("https://api.siputzx.my.id/api/ai/copilot?text=" + _0x2ce6e9);
          if (!_0x170383.data) {
            return _0x3915a4.reply("*Please try again later or try another command!*");
          } else {
            _0x3915a4.reply(_0x170383.data);
          }
        }
        break;
      case "gemini":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please ask a question*");
          }
          let _0x1d56cb = await fetchJson("https://api.siputzx.my.id/api/ai/gemini-pro?content=" + _0x2ce6e9);
          if (!_0x1d56cb.data) {
            return _0x3915a4.reply("*Please try again later or try another command!*");
          } else {
            _0x3915a4.reply(_0x1d56cb.data);
          }
        }
        break;
      case "openai":
      case 'ai':
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please ask a question*");
          }
          let _0x8908e = await fetchJson("https://api.tioo.eu.org/openai?text=" + _0x2ce6e9);
          if (!_0x8908e.result) {
            return _0x3915a4.reply("*Please try again later or try another command!*");
          } else {
            _0x3915a4.reply(_0x8908e.result);
          }
        }
        break;
      case "gptgo":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please ask a question*");
          }
          let _0x39af53 = await fetchJson("https://api.tioo.eu.org/gptgo?text=" + _0x2ce6e9);
          if (!_0x39af53.result) {
            return _0x3915a4.reply("*Please try again later or try another command!*");
          } else {
            _0x3915a4.reply(_0x39af53.result);
          }
        }
        break;
      case "bard":
      case "bardai":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please ask a question*");
          }
          let _0x5d4db2 = await fetchJson("https://api.siputzx.my.id/api/ai/bard?query=" + _0x2ce6e9);
          if (!_0x5d4db2.data) {
            return _0x3915a4.reply("*Please try again later or try another command!*");
          } else {
            _0x3915a4.reply(_0x5d4db2.data);
          }
        }
        break;
      case "bingai":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please ask a question*");
          }
          let _0x395774 = await fetchJson("https://api.siputzx.my.id/api/ai/copilot?text=" + _0x2ce6e9);
          if (!_0x395774.data) {
            return _0x3915a4.reply("*Please try again later or try another command!*");
          } else {
            _0x3915a4.reply(_0x395774.data);
          }
        }
        break;
      case "simi":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please ask a question*");
          }
          let _0x36b3e8 = await fetchJson("https://api.vreden.web.id/api/simi?query=" + _0x2ce6e9 + "&lang=en");
          if (!_0x36b3e8.result) {
            return _0x3915a4.reply("*Please try again later or try another command!*");
          } else {
            _0x3915a4.reply(_0x36b3e8.result);
          }
        }
        break;
      case "photoai":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please enter a query!*");
          }
          let _0x19dd82 = await fetchJson("https://api.tioo.eu.org/ai/text2img?text=" + _0x2ce6e9);
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'image': {
              'url': _0x19dd82
            }
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "llama":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please ask a question*");
          }
          let _0x112189 = await fetchJson("https://bk9.fun/ai/llama?q=" + _0x2ce6e9);
          if (!_0x112189.BK9) {
            return _0x3915a4.reply("*Please try again later or try another command!*");
          } else {
            _0x3915a4.reply(_0x112189.BK9);
          }
        }
        break;
      case "gpt2":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please ask a question*");
          }
          let _0x153e59 = await fetchJson("https://bk9.fun/ai/jeeves-chat?q=" + _0x2ce6e9);
          if (!_0x153e59.BK9) {
            return _0x3915a4.reply("*Please try again later or try another command!*");
          } else {
            _0x3915a4.reply(_0x153e59.BK9);
          }
        }
        break;
      case "turbo":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Please ask a question*");
          }
          let _0x2b0284 = await fetchJson("https://api.tioo.eu.org/lepton?text=" + _0x2ce6e9);
          if (!_0x2b0284.result) {
            return _0x3915a4.reply("*Please try again later or try another command!*");
          } else {
            _0x3915a4.reply(_0x2b0284.result);
          }
        }
        break;
      case "dalle":
        {
          if (!q) {
            return _0x3915a4.reply("*Please provide a query to generate an image. Example: " + (_0x22d4e2 + _0x187f8e) + " Beautiful landscape*");
          }
          const _0x53f52c = "https://api.tioo.eu.org/dalle?text=" + encodeURIComponent(q);
          try {
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'image': {
                'url': _0x53f52c
              }
            }, {
              'quoted': _0x3915a4
            });
          } catch (_0x3153a7) {
            console.error(_0x3153a7);
            _0x194e7d("An error occurred while generating the image.");
          }
        }
        break;
      case "imagen":
        {
          if (!q) {
            return _0x3915a4.reply("*Please provide a query to generate an image. Example: " + (_0x22d4e2 + _0x187f8e) + " Beautiful landscape*");
          }
          const _0x35ba7f = "https://bk9.fun/ai/magicstudio?prompt=" + encodeURIComponent(q);
          try {
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'image': {
                'url': _0x35ba7f
              }
            }, {
              'quoted': _0x3915a4
            });
          } catch (_0x56c3ea) {
            console.error(_0x56c3ea);
            _0x194e7d("*An error occurred while generating the image.*");
          }
        }
        break;
      case "generate":
        {
          if (!q) {
            return _0x3915a4.reply("*Please provide a query to generate an image. Example: " + (_0x22d4e2 + _0x187f8e) + " Beautiful landscape*");
          }
          const _0x367325 = "https://api.tioo.eu.org/ai/text2img?text=" + encodeURIComponent(q);
          try {
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'image': {
                'url': _0x367325
              }
            }, {
              'quoted': _0x3915a4
            });
          } catch (_0x48079b) {
            console.error(_0x48079b);
            _0x194e7d("*An error occurred while generating the image.*");
          }
        }
        break;
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "squirrel":
        try {
          let _0x593c65;
          if (/bass/.test(_0x187f8e)) {
            _0x593c65 = "-af equalizer=f=54:width_type=o:width=2:g=20";
          }
          if (/blown/.test(_0x187f8e)) {
            _0x593c65 = "-af acrusher=.1:1:64:0:log";
          }
          if (/deep/.test(_0x187f8e)) {
            _0x593c65 = "-af atempo=4/4,asetrate=44500*2/3";
          }
          if (/earrape/.test(_0x187f8e)) {
            _0x593c65 = "-af volume=12";
          }
          if (/fast/.test(_0x187f8e)) {
            _0x593c65 = "-filter:a \"atempo=1.63,asetrate=44100\"";
          }
          if (/fat/.test(_0x187f8e)) {
            _0x593c65 = "-filter:a \"atempo=1.6,asetrate=22100\"";
          }
          if (/nightcore/.test(_0x187f8e)) {
            _0x593c65 = "-filter:a atempo=1.06,asetrate=44100*1.25";
          }
          if (/reverse/.test(_0x187f8e)) {
            _0x593c65 = "-filter_complex \"areverse\"";
          }
          if (/robot/.test(_0x187f8e)) {
            _0x593c65 = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          }
          if (/slow/.test(_0x187f8e)) {
            _0x593c65 = "-filter:a \"atempo=0.7,asetrate=44100\"";
          }
          if (/smooth/.test(_0x187f8e)) {
            _0x593c65 = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          }
          if (/squirrel/.test(_0x187f8e)) {
            _0x593c65 = "-filter:a \"atempo=0.5,asetrate=65100\"";
          }
          if (/audio/.test(_0x439d63)) {
            let _0x4ab57a = await _0x3347b0.downloadAndSaveMediaMessage(_0xf32e23);
            let _0x251c2b = getRandom(".mp3");
            exec("ffmpeg -i " + _0x4ab57a + " " + _0x593c65 + " " + _0x251c2b, (_0x2caa00, _0x51f040, _0x41f542) => {
              fs.unlinkSync(_0x4ab57a);
              if (_0x2caa00) {
                return _0x3915a4.reply(_0x2caa00);
              }
              let _0x1c44aa = fs.readFileSync(_0x251c2b);
              _0x3347b0.sendMessage(_0x3915a4.chat, {
                'audio': _0x1c44aa,
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x3915a4
              });
              fs.unlinkSync(_0x251c2b);
            });
          } else {
            _0x3915a4.reply("Reply to the audio you want to change with a caption *" + (_0x22d4e2 + _0x187f8e) + '*');
          }
        } catch (_0x31bf55) {
          _0x3915a4.reply(_0x31bf55);
        }
        break;
      case "cry":
      case "kill":
      case "hug":
      case "pat":
      case "lick":
      case "kiss":
      case "bite":
      case "yeet":
      case "bully":
      case "bonk":
      case "wink":
      case "poke":
      case "nom":
      case "slap":
      case "smile":
      case "wave":
      case "awoo":
      case "blush":
      case "smug":
      case "glomp":
      case "happy":
      case "dance":
      case "cringe":
      case "cuddle":
      case "highfive":
      case "shinobu":
      case "handhold":
        {
          axios.get("https://api.waifu.pics/sfw/" + _0x187f8e).then(({
            data: _0x3a0b2b
          }) => {
            _0x3347b0.sendImageAsSticker(_0x2cd79f, _0x3a0b2b.url, _0x3915a4, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case "woof":
      case "8ball":
      case "goose":
      case "gecg":
      case "feed":
      case "avatar":
      case "foxgirl":
      case "lizard":
      case "spank":
      case "meow":
      case "tickle":
        {
          axios.get("https://nekos.life/api/v2/img/" + _0x187f8e).then(({
            data: _0x56ad30
          }) => {
            _0x3347b0.sendImageAsSticker(_0x2cd79f, _0x56ad30.url, _0x3915a4, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case "script":
      case 'sc':
      case "repository":
      case "repo":
        {
          try {
            let _0x1f76eb = _0x3915a4.sender;
            const _0x8895f3 = await axios.get("https://api.github.com/repos/OfficialKango/");
            if (_0x8895f3.status === 200) {
              const _0x4f3c83 = _0x8895f3.data;
              const _0x13fd80 = "\n*BOT NAME:*\n> " + _0x4f3c83.name + "\n\n*STARS:* \n> " + _0x4f3c83.stargazers_count + "\n\n*FORKS:* \n> " + _0x4f3c83.forks_count + "\n\n*GITHUB LINK:* \nhttps://github.com/OfficialKango-BOT\n\n@" + _0x1f76eb.split('@')[0] + "👋, Don't forget to star and fork my repository😊\n\n> " + wm;
              _0x3347b0.sendMessage(_0x3915a4.chat, {
                'text': _0x13fd80,
                'contextInfo': {
                  'mentionedJid': [_0x3915a4.sender],
                  'forwardingScore': 0x270f,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "120363306168354073@newsletter",
                    'serverMessageId': 0x14,
                    'newsletterName': "❃KANGOXMD ᏴϴͲ"
                  },
                  'externalAdReply': {
                    'title': "KANGOXMD ᏴϴͲ",
                    'body': '',
                    'thumbnail': Malvinking,
                    'sourceUrl': null,
                    'mediaType': 0x1
                  }
                }
              }, {
                'quoted': _0x3915a4
              });
            } else {
              await _0x3915a4.reply("Failed to fetch repository data!");
            }
          } catch (_0x565b59) {
            console.error(_0x565b59);
            await _0x3915a4.reply("Couldn't find repository!");
          }
        }
        break;
      case "owner":
        {
          let _0x5e2567 = [];
          for (let _0x1ce65f of [ownernumber]) {
            _0x5e2567.push({
              'displayName': await _0x3347b0.getName(_0x1ce65f),
              'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + global.ownername + "\nFN:" + global.ownername + "\nitem1.TEL;waid=" + _0x1ce65f.split('@')[0] + ':' + _0x1ce65f.split('@')[0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
            });
          }
          await _0x3347b0.sendMessage(_0x2cd79f, {
            'contacts': {
              'displayName': _0x5e2567.length + " Contact",
              'contacts': _0x5e2567
            },
            'mentions': [_0x4b1a38]
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "emojimix":
      case "emix":
        {
          let [_0x4512ea, _0x1fbdea] = _0x2ce6e9.split`+`;
          if (!_0x4512ea) {
            return _0x3915a4.reply("*Example : " + (_0x22d4e2 + _0x187f8e) + " 😅+🤔*");
          }
          if (!_0x1fbdea) {
            return _0x3915a4.reply("*Example : " + (_0x22d4e2 + _0x187f8e) + " 😅+🤔*");
          }
          let _0x5d3cfd = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x4512ea) + '_' + encodeURIComponent(_0x1fbdea));
          for (let _0x225797 of _0x5d3cfd.results) {}
        }
        break;
      case "tovo":
      case "tovv":
      case "toviewonce":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0xf32e23) {
            return _0x3915a4.reply("*Reply to an Image or Video*");
          }
          if (/image/.test(_0x439d63)) {
            anuan = await _0x3347b0.downloadAndSaveMediaMessage(_0xf32e23);
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'image': {
                'url': anuan
              },
              'caption': mess.done,
              'fileLength': "999",
              'viewOnce': true
            }, {
              'quoted': _0x3915a4
            });
          } else {
            if (/video/.test(_0x439d63)) {
              anuanuan = await _0x3347b0.downloadAndSaveMediaMessage(_0xf32e23);
              _0x3347b0.sendMessage(_0x3915a4.chat, {
                'video': {
                  'url': anuanuan
                },
                'caption': mess.done,
                'fileLength': "99999999",
                'viewOnce': true
              }, {
                'quoted': _0x3915a4
              });
            } else if (/audio/.test(_0x439d63)) {
              bebasap = await _0x3347b0.downloadAndSaveMediaMessage(_0xf32e23);
              _0x3347b0.sendMessage(_0x3915a4.chat, {
                'audio': {
                  'url': bebasap
                },
                'mimetype': "audio/mpeg",
                'ptt': true,
                'viewOnce': true
              });
            }
          }
        }
        break;
      case "whatmusic":
      case "find":
      case "shazam":
        if (!_0x3915a4.quoted) {
          _0x3915a4.reply("*It seems you want to identify a music. Please provide a quoted audio or video message for identification.*");
        } else {
          if (/audio|video/.test(_0x439d63)) {
            try {
              let _0x31be2d = await _0x3915a4.quoted.download();
              const _0x492e5c = _0x439d63.split('/')[1];
              fs.writeFileSync("./src/" + _0x3915a4.sender + '.' + _0x492e5c, _0x31be2d);
              const _0x2f11ba = await acr.identify(fs.readFileSync("./src/" + _0x3915a4.sender + '.' + _0x492e5c));
              const {
                code: _0x2e6479,
                msg: _0x18bfd4
              } = _0x2f11ba.status;
              if (_0x2e6479 !== 0) {
                throw _0x18bfd4;
              }
              const {
                title: _0x5b245e,
                artists: _0xfde10d,
                album: _0xb4f588,
                genres: _0x237534,
                release_date: _0x4dd37c
              } = _0x2f11ba.metadata.music[0];
              const _0x116557 = ("╭◈ ◌KANGO XMD BOT ◌\n│• TITLE: " + _0x5b245e + "\n│• 𝙰𝚁𝚃𝙸𝚂𝚃: " + (_0xfde10d !== undefined ? _0xfde10d.map(_0x3a5bdb => _0x3a5bdb.name).join(", ") : "NOT FOUND") + "\n│• 𝙰𝙻𝙱𝚄𝙼: " + (_0xb4f588.name || "NOT FOUND") + "\n│• 𝙶𝙴𝙽𝚁𝙴: " + (_0x237534 !== undefined ? _0x237534.map(_0x542d4f => _0x542d4f.name).join(", ") : "NOT FOUND") + "\n│• RELEASE DATE: " + (_0x4dd37c || "NOT FOUND") + "\n╰◎ ").trim();
              fs.unlinkSync("./src/" + _0x3915a4.sender + '.' + _0x492e5c);
              _0x3915a4.reply(_0x116557);
            } catch (_0x32b233) {
              console.error(_0x32b233);
              _0x3915a4.reply("*An error occurred during music identification.*");
            }
          }
        }
        break;
      case "tinyurl":
      case "shortlink":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Example: " + (_0x22d4e2 + _0x187f8e) + " https://instagram.com/malvinking20*");
          }
          let _0x3549eb = await axios.get("https://tinyurl.com/api-create.php?url=" + _0x2ce6e9);
          _0x3915a4.reply(_0x3549eb.data);
        }
        break;
      case "calculate":
      case "calculator":
        {
          if (_0x2ce6e9.split('+')[0] && _0x2ce6e9.split('+')[1]) {
            const _0x36c07b = Number(_0x2ce6e9.split('+')[0]);
            const _0x1578bf = Number(_0x2ce6e9.split('+')[1]);
            _0x194e7d('' + (_0x36c07b + _0x1578bf));
          } else {
            if (_0x2ce6e9.split('-')[0] && _0x2ce6e9.split('-')[1]) {
              const _0x3b82cd = Number(_0x2ce6e9.split('-')[0]);
              const _0x3d09ed = Number(_0x2ce6e9.split('-')[1]);
              _0x194e7d('' + (_0x3b82cd - _0x3d09ed));
            } else {
              if (_0x2ce6e9.split('×')[0] && _0x2ce6e9.split('×')[1]) {
                const _0x454967 = Number(_0x2ce6e9.split('×')[0]);
                const _0x3a19d9 = Number(_0x2ce6e9.split('×')[1]);
                _0x194e7d('' + _0x454967 * _0x3a19d9);
              } else {
                if (_0x2ce6e9.split('÷')[0] && _0x2ce6e9.split('÷')[1]) {
                  const _0x36e563 = Number(_0x2ce6e9.split('÷')[0]);
                  const _0x465f43 = Number(_0x2ce6e9.split('÷')[1])('' + _0x36e563 / _0x465f43);
                } else {
                  _0x3915a4.reply("*Enter a maths question, Example* : " + (_0x22d4e2 + _0x187f8e) + " 1 + 1\n\nAvailable options (+, -, ÷, ×)");
                }
              }
            }
          }
        }
        break;
      case "tourl":
      case "url":
        let _0x2dbfa8 = await _0x3347b0.downloadAndSaveMediaMessage(_0xf32e23);
        let _0x1ce731 = await handleMediaUpload(_0x3915a4, _0x439d63);
        if (_0x1ce731.startsWith("http")) {
          _0x3915a4.reply("Url : " + _0x1ce731);
        } else {
          _0x3915a4.reply(_0x1ce731);
        }
        break;
      case "define2":
        if (!q) {
          return _0x3915a4.reply("What do you want to define?");
        }
        try {
          targetfine = await axios.get("http://api.urbandictionary.com/v0/define?term=" + q);
          if (!targetfine) {
            return _0x3915a4.reply(mess.error);
          }
          const _0x5f5194 = "\n*WORD:* " + q + "\n*DEFINITION:* " + targetfine.data.list[0].definition.replace(/\[/g, '').replace(/\]/g, '') + "\n*EXAMPLE:* " + targetfine.data.list[0].example.replace(/\[/g, '').replace(/\]/g, '');
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': _0x5f5194
          }, {
            'quoted': _0x3915a4
          });
        } catch (_0x1b9e55) {
          console.log(_0x1b9e55);
          return _0x3915a4.reply('*' + q + "* isn't a valid text");
        }
        break;
      case "remini":
      case "enhance":
      case 'hd':
        {
          if (!_0xf32e23) {
            return _0x3915a4.reply("*Send or reply to an image*");
          }
          if (!/image/.test(_0x439d63)) {
            return _0x3915a4.reply("Send or reply to an image with captions " + (_0x22d4e2 + _0x187f8e));
          }
          const {
            remini: _0x163019
          } = require("./lib/remini");
          let _0x1604b3 = await _0xf32e23.download();
          let _0x5a16a4 = await _0x163019(_0x1604b3, "enhance");
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'image': _0x5a16a4,
            'caption': mess.success
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "wallpaper":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Enter a search query");
          }
          let {
            wallpaper: _0xe4fa5f
          } = require("./lib/scraper");
          anuwallpep = await _0xe4fa5f(_0x2ce6e9);
          result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)];
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'caption': "TITLE : " + result.title + "\nCATEGORY : " + result.type + "\nDETAIL : " + result.source + "\nMEDIA URL : " + (result.image[2] || result.image[1] || result.image[0]),
            'image': {
              'url': result.image[0]
            }
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "wikimedia":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Enter a search query");
          }
          let {
            wikimedia: _0x183577
          } = require("./lib/scraper");
          let _0x42be5a = await _0x183577(_0x2ce6e9);
          result = _0x42be5a[Math.floor(Math.random() * _0x42be5a.length)];
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'caption': "TITLE : " + result.title + "\nSOURCE : " + result.source + "\nMEDIA URL : " + result.image,
            'image': {
              'url': result.image
            }
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "fact":
        {
          const {
            data: _0x57e38e
          } = await axios.get("https://nekos.life/api/v2/fact");
          return _0x3915a4.reply("*FACT:* " + _0x57e38e.fact + "\n");
        }
        break;
      case "quotes":
        const _0x18dbdc = await axios.get("https://favqs.com/api/qotd");
        const _0xb7ae7 = "*QUOTE:* " + _0x18dbdc.data.quote.body + "\n\n*AUTHOR:* " + _0x18dbdc.data.quote.author;
        return _0x3915a4.reply(_0xb7ae7);
        break;
      case "dare":
        {
          const _0x1a064d = ["Eat 2 tablespoons of rice without any side dishes.", "Spill a secret about yourself.", "Call your crush now and send a screenshot.", "Drop only emojis for 1 day in group chats.", "Sing the chorus of your favorite song.", "Change your name to 'I'm a officialkango' for 24 hours.", "Tell a random person 'I was told I'm your twin, separated at birth.'", "Pretend to be possessed by an animal for 30 minutes.", "Record yourself reading a funny quote and send it here.", "Prank chat an ex and say 'I still love you.'", "Change your profile picture to a funny meme for 5 hours.", "Type only in Spanish for 24 hours.", "Use a funny voice note greeting for 3 days.", "Drop a song quote and tag a suitable member.", "Say 'You're beautiful' to someone you admire.", "Act like a chicken in front of your parents.", "Read a page from a random book aloud and send it here.", "Howl like a wolf for 10 seconds outside.", "Make a short dance video and put it on your status.", "Eat a raw piece of garlic.", "Show the last five people you texted and what the messages said.", "Put your full name on status for 5 hours.", "Make a twerk dance video and put it on your status.", "Call your bestie and say 'I love you.'", "Put your photo without filters on your status.", "Say 'I love you' to someone you secretly admire.", "Send a voice note saying 'Can I call you baby?'", "Change your name to 'I'm a daredevil' for 24 hours.", "Use a Bollywood actor's photo as your profile picture.", "Put your crush's photo on status with the caption 'My crush.'", "Write 'I love you' to someone and send a screenshot.", "Slap your butt and send the sound effect.", "Shout 'Bravo!' and send it here.", "Snap your face and send it here.", "Send your photo with the caption 'I'm feeling confident.'", "Kiss your mom or dad and say 'I love you.'", "Put your dad's name on status for 5 hours.", "Make a TikTok dance challenge video.", "Break up with your best friend for 5 hours without telling them.", "Tell a friend you love them and want to marry them."];
          const _0x5ef439 = _0x1a064d[Math.floor(Math.random() * _0x1a064d.length)];
          const _0xcaeeca = await getBuffer("https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg");
          _0x3347b0.sendMessage(_0x2cd79f, {
            'image': _0xcaeeca,
            'caption': "DARE\n" + _0x5ef439
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "truth":
        {
          const _0x3db353 = ["What's your biggest fear?", "Have you ever lied to your best friend?", "What's your deepest secret?", "Who's your secret crush?", "What's the biggest mistake you've ever made?", "Have you ever cheated on a test?", "What's the most embarrassing thing that's ever happened to you?", "Do you have a hidden talent?", "What's the biggest lie you've ever told?", "Have you ever been in love?", "What's the most spontaneous thing you've ever done?", "Who's the person you trust most?", "What's the biggest risk you've ever taken?", "Have you ever regretted something?", "What's the most memorable gift you've received?", "Have you ever had a crush on someone older?", "What's the biggest lesson you've learned?", "Have you ever broken someone's heart?", "What's the most exciting thing you've done?", "Do you believe in soulmates?", "What's the biggest challenge you've faced?", "Have you ever kept a secret from your parents?", "What's the most creative thing you've done?", "Have you ever felt betrayed?", "What's the biggest adventure you've been on?", "Have you ever had a rival?", "What's the most thoughtful thing someone's done for you?", "Have you ever forgiven someone?", "What's the biggest obstacle you've overcome?", "Do you believe in karma?", "What's the most romantic thing someone's done for you?", "Have you ever taken a risk for love?", "What's the biggest surprise you've ever received?", "Have you ever had a paranormal experience?", "What's the most inspiring story you've heard?", "Have you ever helped someone in need?", "What's the biggest accomplishment you're proud of?"];
          const _0x5e6892 = _0x3db353[Math.floor(Math.random() * _0x3db353.length)];
          const _0x450c36 = await getBuffer("https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg");
          _0x3347b0.sendMessage(_0x2cd79f, {
            'image': _0x450c36,
            'caption': "TRUTH\n" + _0x5e6892
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "truthdetector":
      case "liedetector":
        {
          if (!_0x3915a4.quoted) {
            return _0x3915a4.reply("Please reply to the message you want to detect!");
          }
          let _0x512531 = ["That's a blatant lie!", "Truth revealed!", "Lie alert!", "Hard to believe, but true!", "Professional liar detected!", "Fact-check: TRUE", "Busted! That's a lie!", "Unbelievable, but FALSE!", "Detecting... TRUTH!", "Lie detector activated: FALSE!", "Surprisingly, TRUE!", "My instincts say... LIE!", "That's partially true!", "Can't verify, try again!", "Most likely, TRUE!", "Don't believe you!", "Surprisingly, FALSE!", "Truth!", "Honest as a saint!", "Deceptive much?", "Absolutely true!", "Completely false!", "Seems truthful.", "Not buying it!", "You're lying through your teeth!", "Hard to believe, but it's true!", "I sense honesty.", "Falsehood detected!", "Totally legit!", "Lies, lies, lies!", "You can't fool me!", "Screams truth!", "Fabrication alert!", "Spot on!", "Fishy story, isn't it?", "Unquestionably true!", "Pure fiction!"];
          let _0x134dab = _0x512531[Math.floor(Math.random() * _0x512531.length)];
          let _0x1a0259 = "*RESULT*: " + _0x134dab;
          await _0x3915a4.reply(_0x1a0259);
        }
        break;
      case "say":
      case "tts":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Text needed*");
          }
          let _0x1bed69 = _0x2ce6e9.substring(0, 500);
          const _0x14e492 = googleTTS.getAudioUrl(_0x1bed69, {
            'lang': 'en',
            'slow': false,
            'host': "https://translate.google.com"
          });
          return _0x3347b0.sendMessage(_0x3915a4.chat, {
            'audio': {
              'url': _0x14e492
            },
            'mimetype': "audio/mp4",
            'ptt': true,
            'fileName': _0x2ce6e9 + ".mp3"
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "obfuscate":
        {
          if (!q) {
            return _0x3915a4.reply("*Example " + (_0x22d4e2 + _0x187f8e) + " const jinwo = require(\"nexusbots\");*");
          }
          let _0x4a249c = await _0x12ae22(q);
          _0x3915a4.reply('' + _0x4a249c.result);
        }
        break;
      case "fancy":
      case "styletext":
        {
          let {
            styletext: _0x25a460
          } = require("./lib/scraper");
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("*Enter a text!*");
          }
          let _0xf9cb6a = await _0x25a460(_0x2ce6e9);
          let _0x91429f = "Style texts for " + _0x2ce6e9 + "\n\n";
          for (let _0x3fa9e2 of _0xf9cb6a) {
            _0x91429f += "□ *" + _0x3fa9e2.name + "* : " + _0x3fa9e2.result + "\n\n";
          }
          _0x3915a4.reply(_0x91429f);
        }
        break;
      case "bible":
        {
          try {
            let _0x53eb33 = _0x3915a4.text.split(" ").slice(1).join('').trim();
            if (!_0x53eb33) {
              throw new Error("*Please specify the chapter number or name. Example: " + (_0x22d4e2 + _0x187f8e) + " John 3:16*");
            }
            _0x53eb33 = encodeURIComponent(_0x53eb33);
            let _0x3236c2 = await fetch("https://bible-api.com/" + _0x53eb33);
            if (!_0x3236c2.ok) {
              throw new Error("*Please specify the chapter number or name. Example: " + (_0x22d4e2 + _0x187f8e) + " John 3:16*");
            }
            let _0x47e544 = await _0x3236c2.json();
            let _0xc3dde2 = "\n*The Holy Bible*\n\n*Chapter " + _0x47e544.reference + "*\n\nType: " + _0x47e544.translation_name + "\n\nNumber of verses: " + _0x47e544.verses.length + "\n\n*Chapter Content:*\n\n" + _0x47e544.text + "\n";
            _0x3915a4.reply(_0xc3dde2);
          } catch (_0xbd3346) {
            _0x3915a4.reply("Error: " + _0xbd3346.message);
          }
        }
        break;
      case "quran":
        {
          try {
            let _0x46a3c5 = _0x3915a4.text.split(" ")[1];
            if (!_0x46a3c5) {
              throw new Error("*Please specify the surah number or name*");
            }
            let _0x4ca482 = await fetch("https://quran-endpoint.vercel.app/quran");
            let _0x5b5c41 = await _0x4ca482.json();
            let _0x455881 = _0x5b5c41.data.find(_0x35b3fe => _0x35b3fe.number === Number(_0x46a3c5) || _0x35b3fe.asma.ar.short.toLowerCase() === _0x46a3c5.toLowerCase() || _0x35b3fe.asma.en.short.toLowerCase() === _0x46a3c5.toLowerCase());
            if (!_0x455881) {
              throw new Error("Couldn't find surah with number or name \"" + _0x46a3c5 + "\"");
            }
            let _0x91472f = await fetch("https://quran-endpoint.vercel.app/quran/" + _0x455881.number);
            if (!_0x91472f.ok) {
              let _0x28afef = await _0x91472f.json();
              throw new Error("API request failed with status " + _0x91472f.status + " and message " + _0x28afef.message);
            }
            let _0x16ee0b = await _0x91472f.json();
            let _0x1026c6 = "\n*Quran: The Holy Book*\n\n*Surah " + _0x16ee0b.data.number + ": " + _0x16ee0b.data.asma.ar.long + " (" + _0x16ee0b.data.asma.en.long + ")*\n\nType: " + _0x16ee0b.data.type.en + "\n\nNumber of verses: " + _0x16ee0b.data.ayahCount + "\n\n*Explanation:*\n\n" + _0x16ee0b.data.tafsir.id;
            _0x3915a4.reply(_0x1026c6);
            if (_0x16ee0b.data.recitation.full) {
              _0x3347b0.sendMessage(_0x3915a4.chat, {
                'audio': {
                  'url': _0x16ee0b.data.recitation.full
                },
                'mimetype': "audio/mp4",
                'ptt': true,
                'fileName': "recitation.mp3"
              }, {
                'quoted': _0x3915a4
              });
            }
          } catch (_0x4802f9) {
            _0x3915a4.reply("Error: " + _0x4802f9.message);
          }
        }
        break;
      case "qrcode2":
        {
          if (!q) {
            return _0x3915a4.reply("*Please include link or text!*");
          }
          const _0x47c8e6 = require("qrcode");
          let _0x4faa3a = await _0x47c8e6.toDataURL(q, {
            'scale': 0x23
          });
          let _0x837d1a = new Buffer.from(_0x4faa3a.replace("data:image/png;base64,", ''), "base64");
          let _0x500df5 = getRandom(".jpg");
          await fs.writeFileSync('./' + _0x500df5, _0x837d1a);
          let _0x4f889e = fs.readFileSync('./' + _0x500df5);
          await _0x3347b0.sendMessage(_0x2cd79f, {
            'image': _0x4f889e,
            'caption': "KANGOXMD ᏴϴͲ"
          }, {
            'quoted': _0x3915a4
          });
          setTimeout(() => {
            fs.unlinkSync(_0x500df5);
          }, 10000);
        }
        break;
      case "lyrics":
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please provide a song name!*");
        }
        try {
          let _0x3ebbc9 = await axios.get("https://api.vreden.web.id/api/lirik?lagu=" + encodeURIComponent(_0x2ce6e9));
          if (_0x3ebbc9.status !== 200 || !_0x3ebbc9.data.result) {
            throw new Error("Failed to fetch lyrics");
          }
          let _0x6d1d72 = _0x3ebbc9.data.result;
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'image': {
              'url': _0x6d1d72.image
            },
            'caption': "*Title*: " + _0x6d1d72.title + "\n*Artist*: " + _0x6d1d72.artist + "\n\n*Lyrics*:\n" + _0x6d1d72.lyrics
          }, {
            'quoted': _0x3915a4
          });
        } catch (_0x46cf7b) {
          console.error(_0x46cf7b);
          _0x3915a4.reply("An error occurred while fetching lyrics.");
        }
        break;
      case "time":
      case "date":
        {
          let _0x48c8dc = moment(Date.now()).tz('' + timezones).locale('en').format("dddd");
          let _0x15f567 = moment(Date.now()).tz('' + timezones).locale('en').format("HH:mm:ss z");
          let _0x4ae760 = "𝗧𝗜𝗠𝗘:\n" + _0x15f567 + "\n\n𝗗𝗔𝗧𝗘:\n" + _0x48c8dc;
          _0x3915a4.reply(_0x4ae760);
        }
        break;
      case "volaudio":
        {
          if (!_0x360a67.join(" ")) {
            return _0x3915a4.reply("*Example: " + (_0x22d4e2 + _0x187f8e) + " 10*");
          }
          _0x2dbfa8 = await _0x3347b0.downloadAndSaveMediaMessage(_0xf32e23, "volume");
          rname = getRandom(".mp3");
          exec("ffmpeg -i " + _0x2dbfa8 + " -filter:a volume=" + _0x360a67[0] + " " + rname, (_0xcb3595, _0x1940f0, _0xe57d61) => {
            fs.unlinkSync(_0x2dbfa8);
            if (_0xcb3595) {
              return _0x3915a4.reply("*Error!*");
            }
            jadie = fs.readFileSync(rname);
            _0x3347b0.sendMessage(_0x2cd79f, {
              'audio': jadie,
              'mimetype': "audio/mp4",
              'ptt': true
            }, {
              'quoted': _0x3915a4
            });
            fs.unlinkSync(rname);
          });
        }
        break;
      case "volvideo":
        {
          if (!_0x360a67.join(" ")) {
            return _0x3915a4.reply("*Example: " + (_0x22d4e2 + _0x187f8e) + " 10*");
          }
          _0x2dbfa8 = await _0x3347b0.downloadAndSaveMediaMessage(_0xf32e23, "volume");
          rname = getRandom(".mp4");
          exec("ffmpeg -i " + _0x2dbfa8 + " -filter:a volume=" + _0x360a67[0] + " " + rname, (_0x1af1ee, _0x13c33d, _0x15d4bf) => {
            fs.unlinkSync(_0x2dbfa8);
            if (_0x1af1ee) {
              return _0x3915a4.reply("*Error!*");
            }
            jadie = fs.readFileSync(rname);
            _0x3347b0.sendMessage(_0x2cd79f, {
              'video': jadie,
              'mimetype': "video/mp4"
            }, {
              'quoted': _0x3915a4
            });
            fs.unlinkSync(rname);
          });
        }
        break;
      case "close":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4302a3 && !_0x449bf4) {
            return _0x3915a4.reply(mess.notadmin);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          _0x3347b0.groupSettingUpdate(_0x3915a4.chat, "announcement");
          _0x3915a4.reply("Group closed by admin. Only admins can send messages.");
        }
        break;
      case "open":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4302a3 && !_0x449bf4) {
            return _0x3915a4.reply(mess.notadmin);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          _0x3347b0.groupSettingUpdate(_0x3915a4.chat, "not_announcement");
          _0x3915a4.reply("Group opened by admin. Members can now send messages.");
        }
        break;
      case "idgc":
      case "groupid":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!q) {
            return _0x3915a4.reply("Please provide a group link!");
          }
          let _0x41c61c = _0x360a67.join(" ");
          let _0x4d929f = _0x41c61c.split("https://chat.whatsapp.com/")[1];
          if (!_0x4d929f) {
            return _0x3915a4.reply("Link Invalid");
          }
          _0x3347b0.query({
            'tag': 'iq',
            'attrs': {
              'type': "get",
              'xmlns': "w:g2",
              'to': "@g.us"
            },
            'content': [{
              'tag': "invite",
              'attrs': {
                'code': _0x4d929f
              }
            }]
          }).then(async _0x253c7d => {
            tee = '' + (_0x253c7d.content[0].attrs.id ? _0x253c7d.content[0].attrs.id : "undefined");
            _0x3915a4.reply(tee + "@g.us");
          });
        }
        break;
      case "userid":
      case "userjid":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          const _0x10929c = _0x3915a4.isGroup ? await _0x3347b0.groupMetadata(_0x3915a4.chat)["catch"](_0x14242e => {}) : '';
          const _0x42cf9f = _0x3915a4.isGroup ? await _0x10929c.participants : '';
          let _0x4c417a = "Here is kango< address of all users of\n *- " + _0x10929c.subject + "*\n\n";
          for (let _0x2f942e of _0x42cf9f) {
            _0x4c417a += "□ " + _0x2f942e.id + "\n";
          }
          _0x3915a4.reply(_0x4c417a);
        }
        break;
      case "browse":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Enter URL");
          }
          try {
            let _0x5a546a = await fetch(_0x2ce6e9);
            if (_0x5a546a.headers.get("Content-Type").includes("application/json")) {
              let _0x192e31 = await _0x5a546a.json();
              _0x3347b0.sendMessage(_0x3915a4.chat, {
                'text': JSON.stringify(_0x192e31, null, 2)
              }, {
                'quoted': _0x3915a4
              });
            } else {
              let _0x50f042 = await _0x5a546a.text();
              _0x3347b0.sendMessage(_0x3915a4.chat, {
                'text': _0x50f042
              }, {
                'quoted': _0x3915a4
              });
            }
            if (!_0x5a546a.ok) {
              throw new Error("HTTP Error " + _0x5a546a.status);
            }
          } catch (_0x183262) {
            _0x3915a4.reply("Error fetching URL: " + _0x183262.message);
          }
        }
        break;
      case "download":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Enter download URL");
          }
          try {
            let _0x20d6b1 = await fetch(_0x2ce6e9, {
              'method': "GET",
              'redirect': "follow"
            });
            let _0x171270 = _0x20d6b1.headers.get("content-type");
            let _0x54ed25 = await _0x20d6b1.buffer();
            let _0x27e214 = _0x171270.split('/')[1];
            let _0x47be97 = _0x20d6b1.headers.get("content-disposition")?.["match"](/filename="(.*)"/)?.[1] || "download-" + Math.random().toString(36).slice(2, 10) + '.' + _0x27e214;
            let _0x2000d3;
            switch (_0x171270) {
              case "audio/mpeg":
                _0x2000d3 = "audio/mpeg";
                break;
              case "image/png":
                _0x2000d3 = "image/png";
                break;
              case "image/jpeg":
                _0x2000d3 = "image/jpeg";
                break;
              case "application/pdf":
                _0x2000d3 = "application/pdf";
                break;
              case "application/zip":
                _0x2000d3 = "application/zip";
                break;
              case "video/mp4":
                _0x2000d3 = "video/mp4";
                break;
              case "video/webm":
                _0x2000d3 = "video/webm";
                break;
              case "application/vnd.android.package-archive":
                _0x2000d3 = "application/vnd.android.package-archive";
                break;
              default:
                _0x2000d3 = "application/octet-stream";
            }
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'document': _0x54ed25,
              'mimetype': _0x2000d3,
              'fileName': _0x47be97
            }, {
              'quoted': _0x3915a4
            });
          } catch (_0x540f48) {
            _0x3915a4.reply("Error downloading file: " + _0x540f48.message);
          }
        }
        break;
      case "device":
      case "getdevice":
        {
          if (!_0x3915a4.quoted) {
            return _0x3915a4.reply("*Please quote a message to use this command!*");
          }
          try {
            const _0x1a3068 = await _0x3915a4.getQuotedMessage();
            if (!_0x1a3068) {
              return _0x3915a4.reply("*Could not detect, please try with newly sent message!*");
            }
            const _0x11b27c = _0x1a3068.key.id;
            const _0x44686e = getDevice(_0x11b27c) || "Unknown";
            _0x3915a4.reply("The message is sent from *" + _0x44686e + "* device.");
          } catch (_0x400cda) {
            _0x3915a4.reply("Error determining device: " + _0x400cda.message);
          }
        }
        break;
      case "deviceid":
        {
          if (!_0x3915a4.quoted) {
            return _0x3915a4.reply("*Please quote a message to use this command!*");
          }
          try {
            const _0x2bd1de = await _0x3915a4.getQuotedMessage();
            if (!_0x2bd1de) {
              return _0x3915a4.reply("*Could not find the quoted message!*");
            }
            const _0x29dc1f = _0x2bd1de.key.id;
            const _0xdcdca1 = _0x29dc1f.length;
            _0x3915a4.reply("Device Information:\nMessage ID: " + _0x29dc1f + "\nMessage ID Length: " + _0xdcdca1);
          } catch (_0x105b29) {
            _0x3915a4.reply("Error retrieving device information: " + _0x105b29.message);
          }
        }
        break;
      case "meme":
      case "memes":
        {
          let _0x11c0bf = await fetch("https://api.imgflip.com/get_memes");
          let _0x749955 = await _0x11c0bf.json();
          for (let _0x176eda = 0; _0x176eda < 5; _0x176eda++) {
            let _0x5abb7f = _0x749955.data.memes[_0x176eda];
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'image': {
                'url': _0x5abb7f.url
              }
            }, {
              'quoted': _0x3915a4
            });
          }
        }
        break;
      case "joke":
      case "jokes":
        {
          let _0x10d660 = await fetch("https://api.chucknorris.io/jokes/random");
          let _0x1d78ef = await _0x10d660.json();
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': _0x1d78ef.value
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "qrcode":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Enter text or URL");
          }
          let _0x33e21c = await fetch("https://api.qrserver.com/v1/create-qr-code/?data=" + _0x2ce6e9 + "&size=200x200");
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'image': {
              'url': _0x33e21c.url
            }
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "define":
        {
          if (!_0x2ce6e9) {
            return _0x3915a4.reply("Enter word");
          }
          let _0x34d4be = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x2ce6e9);
          let _0xe49f6d = await _0x34d4be.json();
          let _0x1f1e44 = _0xe49f6d[0].meanings[0].definitions;
          let _0xe3ec2 = '';
          for (let _0x5f2f19 = 0; _0x5f2f19 < _0x1f1e44.length; _0x5f2f19++) {
            _0xe3ec2 += "Definition " + (_0x5f2f19 + 1) + ": " + _0x1f1e44[_0x5f2f19].definition + "\n\n";
          }
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': _0xe3ec2
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "trivia":
        {
          let _0x2fcc0b = await fetch("https://opentdb.com/api.php?amount=1");
          let _0x3464a8 = await _0x2fcc0b.json();
          let _0x45f8af = _0x3464a8.results[0].question;
          let _0x168a1a = _0x3464a8.results[0].correct_answer;
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': "Question: " + _0x45f8af + "\n\nThink you know the answer? Sending the correct answer after 20 seconds"
          }, {
            'quoted': _0x3915a4
          });
          setTimeout(async () => {
            _0x3347b0.sendMessage(_0x3915a4.chat, {
              'text': "Answer: " + _0x168a1a
            });
          }, 20000);
        }
        break;
      case "genpass":
      case "genpassword":
        {
          let _0x59eb5f = _0x2ce6e9 ? parseInt(_0x2ce6e9) : 12;
          let _0x4f3589 = '';
          for (let _0x3ee45a = 0; _0x3ee45a < _0x59eb5f; _0x3ee45a++) {
            _0x4f3589 += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+".charAt(Math.floor(Math.random() * "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+".length));
          }
          _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': _0x4f3589
          }, {
            'quoted': _0x3915a4
          });
        }
        break;
      case "antibadword":
      case "antitoxic":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          if (!_0x4302a3 && !_0x449bf4) {
            return _0x3915a4.reply(mess.notadmin);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("*on or off?*");
          }
          if (_0x360a67[0] === 'on') {
            db.data.chats[_0x2cd79f].badword = true;
            _0x3915a4.reply("*Successfully enabled " + _0x187f8e + '*');
          } else if (_0x360a67[0] === "off") {
            db.data.chats[_0x2cd79f].badword = false;
            _0x3915a4.reply("*Successfully disabled " + _0x187f8e + '*');
          }
        }
        break;
      case "xxqc":
        {
          if (!q) {
            return _0x3915a4.reply("📌Example: " + (_0x22d4e2 + _0x187f8e) + " pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver");
          }
          if (_0x2ce6e9.length > 100) {
            return _0x3915a4.reply("Max 100 character.");
          }
          let [_0x3a731a, ..._0x2d7bdd] = _0x2ce6e9.split(" ");
          _0x2d7bdd = _0x2d7bdd.join(" ");
          let _0x128568;
          switch (_0x3a731a) {
            case "pink":
              _0x128568 = "#f68ac9";
              break;
            case "blue":
              _0x128568 = "#6cace4";
              break;
            case "red":
              _0x128568 = "#f44336";
              break;
            case "green":
              _0x128568 = "#4caf50";
              break;
            case "yellow":
              _0x128568 = "#ffeb3b";
              break;
            case "purple":
              _0x128568 = "#9c27b0";
              break;
            case "darkblue":
              _0x128568 = "#0d47a1";
              break;
            case "lightblue":
              _0x128568 = "#03a9f4";
              break;
            case "ash":
              _0x128568 = "#9e9e9e";
              break;
            case "orange":
              _0x128568 = "#ff9800";
              break;
            case "black":
              _0x128568 = "#000000";
              break;
            case "white":
              _0x128568 = "#ffffff";
              break;
            case "teal":
              _0x128568 = "#008080";
              break;
            case "lightpink":
              _0x128568 = "#FFC0CB";
              break;
            case "chocolate":
              _0x128568 = "#A52A2A";
            case "salmon":
              _0x128568 = "#FFA07A";
              break;
            case "magenta":
              _0x128568 = "#FF00FF";
              break;
            case "tan":
              _0x128568 = "#D2B48C";
              break;
            case "wheat":
              _0x128568 = "#F5DEB3";
              break;
            case "deeppink":
              _0x128568 = "#FF1493";
              break;
            case "fire":
              _0x128568 = "#B22222";
              break;
            case "skyblue":
              _0x128568 = "#00BFFF";
              break;
            case "orange":
              _0x128568 = "#FF7F50";
              break;
            case "brightskyblue":
              _0x128568 = "#1E90FF";
              break;
            case "hotpink":
              _0x128568 = "#FF69B4";
              break;
            case "lightskyblue":
              _0x128568 = "#87CEEB";
              break;
            case "seagreen":
              _0x128568 = "#20B2AA";
              break;
            case "darkred":
              _0x128568 = "#8B0000";
              break;
            case "orangered":
              _0x128568 = "#FF4500";
              break;
            case "cyan":
              _0x128568 = "#48D1CC";
              break;
            case "violet":
              _0x128568 = "#BA55D3";
              break;
            case "mossgreen":
              _0x128568 = "#00FF7F";
              break;
            case "darkgreen":
              _0x128568 = "#008000";
              break;
            case "navyblue":
              _0x128568 = "#191970";
              break;
            case "darkorange":
              _0x128568 = "#FF8C00";
              break;
            case "darkpurple":
              _0x128568 = "#9400D3";
              break;
            case "fuchsia":
              _0x128568 = "#FF00FF";
              break;
            case "darkmagenta":
              _0x128568 = "#8B008B";
              break;
            case "darkgray":
              _0x128568 = "#2F4F4F";
              break;
            case "peachpuff":
              _0x128568 = "#FFDAB9";
              break;
            case "darkishgreen":
              _0x128568 = "#BDB76B";
              break;
            case "darkishred":
              _0x128568 = "#DC143C";
              break;
            case "goldenrod":
              _0x128568 = "#DAA520";
              break;
            case "darkishgray":
              _0x128568 = "#696969";
              break;
            case "darkishpurple":
              _0x128568 = "#483D8B";
              break;
            case "gold":
              _0x128568 = "#FFD700";
              break;
            case "silver":
              _0x128568 = "#C0C0C0";
              break;
            default:
              return _0x3915a4.reply("The selected color is not available.");
          }
          let _0x2b607b = {
            'type': "quote",
            'format': "png",
            'backgroundColor': _0x128568,
            'width': 0x200,
            'height': 0x300,
            'scale': 0x2,
            'messages': [{
              'entities': [],
              'avatar': true,
              'from': {
                'id': 0x1,
                'name': _0xe47e7d,
                'photo': {
                  'url': await _0x3347b0.profilePictureUrl(_0x3915a4.sender, "image")["catch"](() => "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60")
                }
              },
              'text': _0x2d7bdd,
              'replyMessage': {}
            }]
          };
          let _0x132dd3 = await axios.post("https://bot.lyo.su/quote/generate", _0x2b607b, {
            'headers': {
              'Content-Type': "application/json"
            }
          });
          let _0x4fafb3 = Buffer.from(_0x132dd3.data.result.image, "base64");
          _0x3347b0.sendImageAsSticker(_0x3915a4.chat, _0x4fafb3, _0x3915a4, {
            'packname': '' + global.packname,
            'author': '' + global.author
          });
        }
        break;
      case "listonline":
      case "onlinemembers":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          let _0x460ab5 = _0x360a67 && /\d+\-\d+@g.us/.test(_0x360a67[0]) ? _0x360a67[0] : _0x3915a4.chat;
          let _0x323835 = [...Object.keys(_0x490ba3.presences[_0x460ab5]), _0x271f7f];
          let _0x229cd7 = 1;
          _0x3347b0.sendText(_0x3915a4.chat, "*ONLINE MEMBERS IN THIS GROUP*\n\n" + _0x323835.map(_0x1108a1 => _0x229cd7++ + " . @" + _0x1108a1.replace(/@.+/, '')).join`\n`, _0x3915a4, {
            'mentions': _0x323835
          });
        }
        break;
      case "editsettings":
      case "editinfo":
        if (!_0x3915a4.isGroup) {
          return _0x3915a4.reply(mess.group);
        }
        if (!_0x4302a3 && !_0x2a1e20 && !_0x449bf4) {
          return _0x3915a4.reply(mess.admin);
        }
        if (!_0x4eee23) {
          return _0x3915a4.reply(mess.admin);
        }
        if (_0x360a67[0] === 'on') {
          await _0x3347b0.groupSettingUpdate(_0x3915a4.chat, "unlocked").then(_0x31c79d => _0x3915a4.reply("*Successful, members can edit group info*"));
        } else if (_0x360a67[0] === "off") {
          await _0x3347b0.groupSettingUpdate(_0x3915a4.chat, "locked").then(_0x275c68 => _0x3915a4.reply("*Successful, members cannot edit group info*"));
        } else {
          _0x3915a4.reply("Example " + (_0x22d4e2 + _0x187f8e) + " on/off");
        }
        break;
      case "delppgroup":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4302a3 && !_0x449bf4) {
            return _0x3915a4.reply(mess.notadmin);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          await _0x3347b0.removeProfilePicture(_0x2cd79f);
          _0x3915a4.reply("Group profile picture has been successfully removed.");
        }
        break;
      case "setppgroup":
        {
          if (!_0x3915a4.isGroup) {
            return _0x3915a4.reply(mess.group);
          }
          if (!_0x4302a3 && !_0x449bf4) {
            return _0x3915a4.reply(mess.notadmin);
          }
          if (!_0x4eee23) {
            return _0x3915a4.reply(mess.admin);
          }
          if (!_0xf32e23) {
            return _0x3915a4.reply("*Send or reply to an image with the caption " + (_0x22d4e2 + _0x187f8e) + '*');
          }
          if (!/image/.test(_0x439d63)) {
            return _0x3915a4.reply("*Send or reply to an image with the caption " + (_0x22d4e2 + _0x187f8e) + '*');
          }
          if (/webp/.test(_0x439d63)) {
            return _0x3915a4.reply("*Send or reply to an image with the caption " + (_0x22d4e2 + _0x187f8e) + '*');
          }
          var _0xf594c5 = await _0x3347b0.downloadAndSaveMediaMessage(_0xf32e23, "ppbot.jpeg");
          if (_0x360a67[0] == "full") {
            var {
              img: _0x616201
            } = await generateProfilePicture(_0xf594c5);
            await _0x3347b0.query({
              'tag': 'iq',
              'attrs': {
                'to': _0x3915a4.chat,
                'type': "set",
                'xmlns': "w:profile:picture"
              },
              'content': [{
                'tag': "picture",
                'attrs': {
                  'type': "image"
                },
                'content': _0x616201
              }]
            });
            fs.unlinkSync(_0xf594c5);
            _0x3915a4.reply("Group profile picture has been successfully set.");
          } else {
            var _0x28ecc9 = await _0x3347b0.updateProfilePicture(_0x3915a4.chat, {
              'url': _0xf594c5
            });
            fs.unlinkSync(_0xf594c5);
            _0x3915a4.reply("Group profile picture has been successfully updated.");
          }
        }
        break;
      case "addbadword":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("Use " + _0x22d4e2 + "addbadword [harsh word].");
          }
          bad.push(q);
          fs.writeFileSync("./src/badwords.json", JSON.stringify(bad, null, 2));
          _0x3915a4.reply("Successfully added bad word!");
        }
        break;
      case "delbadword":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (_0x360a67.length < 1) {
            return _0x3915a4.reply("Use " + _0x22d4e2 + "delbadword [bad word].");
          }
          const _0x57f79a = bad.indexOf(q);
          if (_0x57f79a !== -1) {
            bad.splice(_0x57f79a, 1);
            fs.writeFileSync("./src/badwords.json", JSON.stringify(bad, null, 2));
            _0x3915a4.reply("Successfully deleted bad word!");
          } else {
            _0x3915a4.reply("Bad word not found!");
          }
        }
        break;
      case "listbadword":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          if (_0x3915a4.isGroup) {
            return _0x3915a4.reply("This command cannot be used in personal chats.");
          }
          if (bad.length === 0) {
            return _0x3915a4.reply("No bad words have been added yet.");
          }
          let _0x373add = "*Bad Words List:*\n\n";
          bad.forEach((_0x1df302, _0x44c862) => {
            _0x373add += _0x44c862 + 1 + ". " + _0x1df302 + "\n";
          });
          _0x373add += "\nTotal bad words: " + bad.length;
          _0x3915a4.reply(_0x373add);
        }
        break;
      case "setvar":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        const [_0x3eba4e, _0x315740] = _0x4b07b2.split('=');
        if (!_0x3eba4e || !_0x315740) {
          return _0x3915a4.reply("*Please provide a variable name and value*\n\nExample: .setvar ANTI_CALL = false");
        }
        try {
          await _0x3915a4.reply("*Environment variable set successfully*\n```" + _0x3eba4e + " = " + _0x315740 + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new environment variable. Please wait a moment!*");
        } catch (_0x27bbd3) {
          await _0x3915a4.reply("*Error setting environment variable*\n" + _0x27bbd3.message);
        }
        break;
      case "getvars":
      case "getvar":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        try {
          const _0x5bf5e7 = await _0x4c3483();
          const _0x254b09 = Object.entries(_0x5bf5e7).map(([_0x4d1314, _0x3997fe]) => _0x4d1314 + " = " + _0x3997fe).join("\n");
          await _0x3915a4.reply("*Current Environment Variables:*\n```" + _0x254b09 + "```");
        } catch (_0x5b476c) {
          await _0x3915a4.reply("*Error getting environment variables*\n" + _0x5b476c.message);
        }
        break;
      case "delvar":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        const _0x2a8173 = _0x4b07b2.trim();
        if (!_0x2a8173) {
          return _0x3915a4.reply("*Please provide the variable name to delete*");
        }
        try {
          await _0x3915a4.reply("*Environment variable deleted successfully*\n```" + _0x2a8173 + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new environment variable. Please wait a moment!*");
        } catch (_0x39c607) {
          await _0x3915a4.reply("*Error deleting environment variable*\n" + _0x39c607.message);
        }
        break;
      case "addvar":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        const [_0x1e390c, _0x7034bf] = _0x4b07b2.split('=');
        if (!_0x1e390c || !_0x7034bf) {
          return _0x3915a4.reply("*Please provide a variable name and value*\n\nExample: .addvar NEW_VAR = value");
        }
        try {
          await _0x3915a4.reply("*Environment variable added successfully*\n```" + _0x1e390c + " = " + _0x7034bf + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new environment variable. Please wait a moment!*");
        } catch (_0x929e81) {
          await _0x3915a4.reply("*Error adding environment variable*\n" + _0x929e81.message);
        }
        break;
      case "anticall":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify on/off*\n\nExample: .anticall on");
        }
        const _0x51fd32 = _0x2ce6e9.trim().toLowerCase();
        if (_0x51fd32 !== 'on' && _0x51fd32 !== "off") {
          return _0x3915a4.reply("*Invalid value. Please specify on or off*");
        }
        try {
          const _0x14e34 = _0x51fd32 === 'on' ? "true" : "false";
          await _0x3915a4.reply("*Anti-Call setting updated successfully*\n```ANTI_CALL = " + _0x14e34.toUpperCase() + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x4dbe44) {
          await _0x3915a4.reply("*Error updating Anti-Call setting*\n" + _0x4dbe44.message);
        }
        break;
      case "welcome":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify on/off*\n\nExample: .welcome on");
        }
        const _0x5a2296 = _0x2ce6e9.trim().toLowerCase();
        if (_0x5a2296 !== 'on' && _0x5a2296 !== "off") {
          return _0x3915a4.reply("*Invalid value. Please specify on or off*");
        }
        try {
          const _0xc045e5 = _0x5a2296 === 'on' ? "true" : "false";
          await _0xef6eec("WELCOME_MSG", _0xc045e5);
          await _0x3915a4.reply("*Welcome Message setting updated successfully*\n```WELCOME_MSG = " + _0xc045e5.toUpperCase() + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x15a4e3) {
          await _0x3915a4.reply("*Error updating Welcome Message setting*\n" + _0x15a4e3.message);
        }
        break;
      case "mode":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify the mode*\n\nExample: .mode private");
        }
        const _0xd5bdcf = _0x2ce6e9.trim().toLowerCase();
        if (_0xd5bdcf !== "private" && _0xd5bdcf !== "public") {
          return _0x3915a4.reply("*Invalid value. Please specify private or public*");
        }
        try {
          await _0xef6eec("MODE", _0xd5bdcf);
          await _0x3915a4.reply("*Mode updated successfully*\n```MODE = " + _0xd5bdcf.toUpperCase() + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x5ed129) {
          await _0x3915a4.reply("*Error updating mode*\n" + _0x5ed129.message);
        }
        break;
      case "autostatusview":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify on/off*\n\nExample: .autostatusview on");
        }
        const _0x31d3b0 = _0x2ce6e9.trim().toLowerCase();
        if (_0x31d3b0 !== 'on' && _0x31d3b0 !== "off") {
          return _0x3915a4.reply("*Invalid value. Please specify on or off*");
        }
        try {
          const _0x55fc0c = _0x31d3b0 === 'on' ? "true" : "false";
          await _0xef6eec("AUTO_STATUS_VIEW", _0x55fc0c);
          await _0x3915a4.reply("*Auto-Status View setting updated successfully*\n```AUTO_STATUS_VIEW = " + _0x55fc0c.toUpperCase() + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x5781a1) {
          await _0x3915a4.reply("*Error updating Auto-Status View setting*\n" + _0x5781a1.message);
        }
        break;
      case "autoread":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify on/off*\n\nExample: .autoread on");
        }
        const _0x1ff1af = _0x2ce6e9.trim().toLowerCase();
        if (_0x1ff1af !== 'on' && _0x1ff1af !== "off") {
          return _0x3915a4.reply("*Invalid value. Please specify on or off*");
        }
        try {
          const _0x526aa5 = _0x1ff1af === 'on' ? "true" : "false";
          await _0xef6eec("AUTO_READ", _0x526aa5);
          await _0x3915a4.reply("*Auto-Read setting updated successfully*\n```AUTO_READ = " + _0x526aa5.toUpperCase() + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x4864bf) {
          await _0x3915a4.reply("*Error updating Auto-Read setting*\n" + _0x4864bf.message);
        }
        break;
      case "autoblockforeign":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify on/off*\n\nExample: .autoblockforeign on");
        }
        const _0x18d3b6 = _0x2ce6e9.trim().toLowerCase();
        if (_0x18d3b6 !== 'on' && _0x18d3b6 !== "off") {
          return _0x3915a4.reply("*Invalid value. Please specify on or off*");
        }
        try {
          const _0x1cada7 = _0x18d3b6 === 'on' ? "true" : "false";
          await _0xef6eec("AUTO_BLOCK_FOREIGN", _0x1cada7);
          await _0x3915a4.reply("*Auto-Block Foreign setting updated successfully*\n```AUTO_BLOCK_FOREIGN = " + _0x1cada7.toUpperCase() + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0xd6cf18) {
          await _0x3915a4.reply("*Error updating Auto-Block Foreign setting*\n" + _0xd6cf18.message);
        }
        break;
      case "setprefix":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify the prefix*\n\nExample: .setprefix !");
        }
        const _0x53ea24 = _0x2ce6e9.trim();
        try {
          await _0xef6eec("PREFIX", _0x53ea24);
          await _0x3915a4.reply("*Prefix updated successfully*\n```PREFIX = " + _0x53ea24 + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x206364) {
          await _0x3915a4.reply("*Error updating prefix*\n" + _0x206364.message);
        }
        break;
      case "setbotname":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify the bot name*\n\nExample: .setbotname MyBot");
        }
        const _0x2c930f = _0x2ce6e9.trim();
        try {
          await _0xef6eec("BOT_NAME", _0x2c930f);
          await _0x3915a4.reply("*Bot name updated successfully*\n```BOT_NAME = " + _0x2c930f + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x539de8) {
          await _0x3915a4.reply("*Error updating bot name*\n" + _0x539de8.message);
        }
        break;
      case "setcountrycode":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify the country code*\n\nExample: .setcountrycode 254");
        }
        const _0x232af2 = _0x2ce6e9.trim();
        try {
          await _0xef6eec("COUNTRY_CODE", _0x232af2);
          await _0x3915a4.reply("*Country code updated successfully*\n```COUNTRY_CODE = " + _0x232af2 + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x26c2ab) {
          await _0x3915a4.reply("*Error updating country code*\n" + _0x26c2ab.message);
        }
        break;
      case "setmenu":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify the menu style*\n\nExample: .setmenu 2");
        }
        const _0x46b28a = _0x2ce6e9.trim();
        try {
          await _0xef6eec("MENU_STYLE", _0x46b28a);
          await _0x3915a4.reply("*Menu style updated successfully*\n```MENU_STYLE = " + _0x46b28a + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x830671) {
          await _0x3915a4.reply("*Error updating menu style*\n" + _0x830671.message);
        }
        break;
      case "setsudo":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify the number*\n\nExample: .setsudo 1234567890 or .setsudo 1234567890,0987654321");
        }
        const _0x4d0510 = _0x2ce6e9.trim();
        try {
          await _0xef6eec("SUDO", _0x4d0510);
          await _0x3915a4.reply("*Owner number updated successfully*\n```SUDO= " + _0x4ccdc6 + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x15f1a6) {
          await _0x3915a4.reply("*Error updating sudo number*\n" + _0x15f1a6.message);
        }
        break;
      case "setname":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify the name*\n\nExample: .setname YourName");
        }
        const _0x214074 = _0x2ce6e9.trim();
        try {
          await _0xef6eec("OWNER_NAME", _0x214074);
          await _0x3915a4.reply("*Owner name updated successfully*\n```OWNER_NAME = " + _0x214074 + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x185c51) {
          await _0x3915a4.reply("*Error updating owner name*\n" + _0x185c51.message);
        }
        break;
      case "setownernumber":
        if (!_0x449bf4) {
          return _0x3915a4.reply(mess.owner);
        }
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("*Please specify the owner number*\n\nExample: .setownernumber 263714757857");
        }
        const _0x4ccdc6 = _0x2ce6e9.trim();
        try {
          await _0xef6eec("OWNER_NUMBER", _0x4ccdc6);
          await _0x3915a4.reply("*Owner number updated successfully*\n```OWNER_NUMBER = " + _0x4ccdc6 + "```");
          await _0x3915a4.reply("*Bot will restart to apply the new setting. Please wait a moment!*");
        } catch (_0x5a393c) {
          await _0x3915a4.reply("*Error updating owner number*\n" + _0x5a393c.message);
        }
        break;
      case "play3":
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("Please provide a song name.");
        }
        try {
          let _0x52558a = await yts(_0x2ce6e9);
          let _0x33bdb5 = _0x52558a.all[0];
          let _0x8b5fec = "https://api.siputzx.my.id/api/d/ytmp3?url=" + encodeURIComponent(_0x33bdb5.url);
          let _0x243524 = await axios.get(_0x8b5fec);
          if (_0x243524.status !== 200 || !_0x243524.data.status) {
            throw new Error("Failed to retrieve audio link");
          }
          let _0x4c45ee = _0x243524.data.data;
          let _0x3df5d5 = {
            'text': "*Title*: " + _0x4c45ee.title + "\n*Channel*: " + _0x33bdb5.author.name + "\n*Views*: " + _0x33bdb5.views + "\n*Duration*: " + _0x33bdb5.timestamp + "\n\n*𝐽𝑖𝑛𝑤𝑜𝑜 𝑖𝑠 𝑑𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑎𝑢𝑑𝑖𝑜...*",
            'contextInfo': {
              'mentionedJid': [_0x3915a4.sender]
            }
          };
          _0x3347b0.sendMessage(_0x3915a4.chat, _0x3df5d5, {
            'quoted': _0x3915a4
          });
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'audio': {
              'url': _0x4c45ee.dl
            },
            'mimetype': "audio/mp4",
            'fileName': _0x4c45ee.title + ".mp3"
          }, {
            'quoted': _0x3915a4
          });
        } catch (_0x400e5a) {
          console.error(_0x400e5a);
          _0x3915a4.reply("An error occurred while fetching audio.");
        }
        break;
      case "video":
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("Please provide a song/video name.");
        }
        try {
          let _0x414aef = await yts(_0x2ce6e9);
          let _0xd4d8b0 = _0x414aef.all[0];
          let _0x51ad3c = "https://api.siputzx.my.id/api/d/ytmp4?url=" + encodeURIComponent(_0xd4d8b0.url);
          let _0x4032a6 = await axios.get(_0x51ad3c);
          if (_0x4032a6.status !== 200 || !_0x4032a6.data.status) {
            throw new Error("Failed to retrieve video link");
          }
          let _0xfb5a25 = _0x4032a6.data.data;
          let _0x9f5154 = {
            'text': "*Title*: " + _0xfb5a25.title + "\n*Channel*: " + _0xd4d8b0.author.name + "\n*Views*: " + _0xd4d8b0.views + "\n*Duration*: " + _0xd4d8b0.timestamp + "\n\n*𝐽𝑖𝑛𝑤𝑜𝑜 𝑖𝑠 𝑑𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑣𝑖𝑑𝑒𝑜...*",
            'contextInfo': {
              'mentionedJid': [_0x3915a4.sender]
            }
          };
          _0x3347b0.sendMessage(_0x3915a4.chat, _0x9f5154, {
            'quoted': _0x3915a4
          });
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'video': {
              'url': _0xfb5a25.dl
            },
            'mimetype': "video/mp4",
            'fileName': _0xfb5a25.title + ".mp4",
            'caption': "『J』『I』『N』『W』『O』『O』"
          }, {
            'quoted': _0x3915a4
          });
        } catch (_0x482069) {
          console.error(_0x482069);
          _0x3915a4.reply("An error occurred while fetching the video.");
        }
        break;
      case "videodoc":
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("Please provide a song/video name.");
        }
        try {
          let _0x123b22 = await yts(_0x2ce6e9);
          let _0x238909 = _0x123b22.all[0];
          let _0x95c171 = "https://api.siputzx.my.id/api/d/ytmp4?url=" + encodeURIComponent(_0x238909.url);
          let _0x5311e4 = await axios.get(_0x95c171);
          if (_0x5311e4.status !== 200 || !_0x5311e4.data.status) {
            throw new Error("Failed to retrieve video link");
          }
          let _0x4222d6 = _0x5311e4.data.data;
          let _0x320260 = {
            'text': "*Title*: " + _0x4222d6.title + "\n*Channel*: " + _0x238909.author.name + "\n*Views*: " + _0x238909.views + "\n*Duration*: " + _0x238909.timestamp + "\n\n*𝐽𝑖𝑛𝑤𝑜𝑜 𝑖𝑠 𝑑𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑣𝑖𝑑𝑒𝑜...*",
            'contextInfo': {
              'mentionedJid': [_0x3915a4.sender]
            }
          };
          _0x3347b0.sendMessage(_0x3915a4.chat, _0x320260, {
            'quoted': _0x3915a4
          });
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'document': {
              'url': _0x4222d6.dl
            },
            'mimetype': "video/mp4",
            'fileName': _0x4222d6.title + ".mp4",
            'caption': "KANGOXMD BOT"
          }, {
            'quoted': _0x3915a4
          });
        } catch (_0x1f517e) {
          console.error(_0x1f517e);
          _0x3915a4.reply("An error occurred while fetching the video.");
        }
        break;
      case "video2":
        {
          try {
            if (!_0x2ce6e9) {
              return _0x3915a4.reply("*Please provide a song name!*");
            }
            const _0x551fc2 = require("yt-search");
            const _0x2cdf80 = await _0x551fc2(_0x2ce6e9);
            if (!_0x2cdf80.all.length) {
              return _0x3915a4.reply("*The video you are looking for was not found.*");
            }
            const _0xb7a4e8 = _0x2cdf80.all[0];
            const _0x46c3ae = _0xb7a4e8.url;
            try {
              const _0x403c3a = await fetchJson("https://api.vreden.web.id/api/ytmp4?url=" + encodeURIComponent(_0x46c3ae));
              if (_0x403c3a.status !== 200 || !_0x403c3a.result || !_0x403c3a.result.download || !_0x403c3a.result.download.status) {
                throw new Error("*Failed to retrieve the video!*");
              }
              const _0x3ac86c = _0x403c3a.result;
              const _0x17723a = await fetch(_0x3ac86c.download.url).then(_0xc3cea2 => _0xc3cea2.buffer());
              await _0x3347b0.sendMessage(_0x3915a4.chat, {
                'video': _0x17723a,
                'mimetype': "video/mp4",
                'fileName': _0x3ac86c.metadata.title + ".mp4",
                'caption': _0x3ac86c.metadata.title + "\n" + _0x3ac86c.metadata.description,
                'contextInfo': {
                  'externalAdReply': {
                    'title': botname,
                    'body': '' + _0x3ac86c.metadata.title,
                    'thumbnailUrl': '' + _0x3ac86c.metadata.thumbnail,
                    'sourceUrl': '' + _0x3ac86c.metadata.url,
                    'mediaType': 0x2,
                    'mediaUrl': '' + _0x3ac86c.metadata.thumbnail
                  }
                }
              }, {
                'quoted': _0x3915a4
              });
              _0x3347b0.sendMessage(_0x3915a4.chat, {
                'react': {
                  'text': '✅',
                  'key': _0x3915a4.key
                }
              });
            } catch (_0x35c4d3) {
              console.error("Vreden API failed:", _0x35c4d3);
              _0x3915a4.reply("Error: " + _0x35c4d3.message);
            }
          } catch (_0x4d92d7) {
            console.error("Playvideo command failed:", _0x4d92d7);
            _0x3915a4.reply("Error: " + _0x4d92d7.message);
          }
        }
        break;
      case "ssweb":
      case "screenshot":
      case 'ss':
        {
          if (!q) {
            return _0x3915a4.reply("Please provide a URL to screenshot!");
          }
          const _0x532edb = "https://api.siputzx.my.id/api/tools/ssweb?url=" + q + "&theme=light&device=mobile";
          try {
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'image': {
                'url': _0x532edb
              }
            }, {
              'quoted': _0x3915a4
            });
          } catch (_0x8742fd) {
            console.error(_0x8742fd);
            _0x3915a4.reply("An error occurred while generating the image.");
          }
        }
        break;
      case "sswebtab":
        {
          if (!q) {
            return _0x3915a4.reply("Please provide a URL to screenshot!");
          }
          const _0x26896a = "https://api.siputzx.my.id/api/tools/ssweb?url=" + q + "&theme=light&device=tablet";
          try {
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'image': {
                'url': _0x26896a
              }
            }, {
              'quoted': _0x3915a4
            });
          } catch (_0x240554) {
            console.error(_0x240554);
            _0x3915a4.reply("An error occurred.");
          }
        }
        break;
      case "sswebpc":
        {
          if (!q) {
            return _0x3915a4.reply("Please provide a URL to screenshot!");
          }
          const _0x17a6b7 = "https://api.siputzx.my.id/api/tools/ssweb?url=" + q + "&theme=light&device=desktop";
          try {
            await _0x3347b0.sendMessage(_0x3915a4.chat, {
              'image': {
                'url': _0x17a6b7
              }
            }, {
              'quoted': _0x3915a4
            });
          } catch (_0x443016) {
            console.error(_0x443016);
            _0x3915a4.reply("An error occurred.");
          }
        }
        break;
      case "ttp":
        if (_0x360a67.length == 0) {
          return _0x3915a4.reply("Example: " + (_0x22d4e2 + _0x187f8e) + " Tylor");
        }
        dgXpBottks = _0x360a67.join(" ");
        dgXpBotvuff = await getBuffer("https://api.tioo.eu.org/ttp?text=" + dgXpBottks);
        _0x3347b0.sendImageAsSticker(_0x3915a4.chat, dgXpBotvuff, _0x3915a4, {
          'packname': packname,
          'author': author
        });
        break;
      case "attp":
        if (_0x360a67.length == 0) {
          return _0x3915a4.reply("Example: " + (_0x22d4e2 + _0x187f8e) + " Tylor");
        }
        dgXpBottks2 = _0x360a67.join(" ");
        dgXpBotvuff2 = await getBuffer("https://api.tioo.eu.org/attp?text=" + dgXpBottks2);
        _0x3347b0.sendImageAsSticker(_0x3915a4.chat, dgXpBotvuff2, _0x3915a4, {
          'packname': packname,
          'author': author
        });
        break;
      case "gsmarena":
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("Please provide a phone model name.");
        }
        try {
          let _0x2d3579 = await axios.get("https://api.siputzx.my.id/api/s/gsmarena?query=" + encodeURIComponent(_0x2ce6e9));
          if (_0x2d3579.status !== 200 || !_0x2d3579.data.status) {
            throw new Error("Failed to fetch phone specifications");
          }
          let _0x1746e3 = _0x2d3579.data.data;
          if (!_0x1746e3.length) {
            return _0x3915a4.reply("Failed to fetch phone specifications. Please try again.");
          }
          let _0x3b5585 = _0x1746e3.slice(0, 10).map(_0x1e366f => {
            return "\n*Name*: " + _0x1e366f.name + "\n*Description*: " + _0x1e366f.description + "\n*URL*: https://www.gsmarena.com/" + _0x1e366f.id + "\n            ";
          }).join("\n\n");
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'image': {
              'url': _0x1746e3[0].thumbnail
            },
            'caption': _0x3b5585.trim()
          }, {
            'quoted': _0x3915a4
          });
        } catch (_0x4eb0cd) {
          console.error(_0x4eb0cd);
          _0x3915a4.reply("An error occurred while fetching phone specifications.");
        }
        break;
      case "tempmail":
        try {
          let _0x8b5fd5 = await fetch("https://api.tioo.eu.org/tempmail");
          let _0x5bac94 = await _0x8b5fd5.json();
          if (!_0x5bac94.status || !_0x5bac94.data || !_0x5bac94.data[0].email) {
            return _0x3915a4.reply("Failed to fetch a temporary email. Please try again.");
          }
          let _0x4f5286 = _0x5bac94.data[0].email;
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': "*Temporary Email*: " + _0x4f5286 + "\n\nUse this email to receive temporary messages.\nTo read messages use " + prefixz + "getmail " + _0x4f5286
          }, {
            'quoted': _0x3915a4
          });
        } catch (_0x109db6) {
          console.error(_0x109db6);
          _0x3915a4.reply("An error occurred while fetching temporary email.");
        }
        break;
      case "getmail":
        if (!_0x2ce6e9) {
          return _0x3915a4.reply("Please provide the temporary email address to fetch messages.");
        }
        try {
          let _0x437476 = await fetch("https://api.tioo.eu.org/getmail?email=" + encodeURIComponent(_0x2ce6e9));
          let _0x1e4c9e = await _0x437476.json();
          if (!_0x1e4c9e.status || !_0x1e4c9e.result || !Array.isArray(_0x1e4c9e.result.contentmail)) {
            return _0x3915a4.reply("Failed to fetch email content. Please try again.");
          }
          let _0x12810c = _0x1e4c9e.result.contentmail;
          if (_0x12810c.length === 0) {
            return _0x3915a4.reply("*Temporary Email*: " + _0x2ce6e9 + "\n\nNo messages received yet. Check back later.");
          }
          let _0x40dce0 = _0x12810c.map((_0x59798d, _0x2abbd7) => "*Email #" + (_0x2abbd7 + 1) + ":*\n" + _0x59798d).join("\n\n");
          await _0x3347b0.sendMessage(_0x3915a4.chat, {
            'text': "*Temporary Email*: " + _0x2ce6e9 + "\n\n*Messages Received*:\n" + _0x40dce0
          }, {
            'quoted': _0x3915a4
          });
        } catch (_0x1bbfaa) {
          console.error(_0x1bbfaa);
          _0x3915a4.reply("An error occurred while fetching email content.");
        }
        break;
      case "addignorelist":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          let _0x4417b8 = _0x3915a4.mentionedJid && _0x3915a4.mentionedJid[0];
          let _0x3d6ac0 = _0x3915a4.quoted && _0x3915a4.quoted.sender;
          let _0x3a8289 = _0x4417b8 || _0x3d6ac0 || _0x360a67[0];
          if (_0x3a8289 && !_0x3a8289.includes("@s.whatsapp.net")) {
            _0x3a8289 = _0x3a8289 + "@s.whatsapp.net";
          }
          if (!_0x3a8289) {
            return _0x3915a4.reply("Please mention a user, reply to a user's message, or provide a phone number to add to the bot's ignore list.");
          }
          let _0x1f3687 = _0x24ded7();
          if (!_0x1f3687.blacklisted_numbers.includes(_0x3a8289)) {
            _0x1f3687.blacklisted_numbers.push(_0x3a8289);
            fs.writeFileSync(_0x1de7ac, JSON.stringify(_0x1f3687, null, 2));
            _0x3915a4.reply("User " + _0x3a8289 + " has been added to the bot's ignore list\n\nThe bot will no longer respond to their messages🗿.");
          } else {
            _0x3915a4.reply("User " + _0x3a8289 + " is already in the bot's ignore list.");
          }
        }
        break;
      case "delignorelist":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          let _0x238523 = _0x3915a4.mentionedJid && _0x3915a4.mentionedJid[0];
          let _0x345c9b = _0x3915a4.quoted && _0x3915a4.quoted.sender;
          let _0xa07154 = _0x238523 || _0x345c9b || _0x360a67[0];
          if (_0xa07154 && !_0xa07154.includes("@s.whatsapp.net")) {
            _0xa07154 = _0xa07154 + "@s.whatsapp.net";
          }
          if (!_0xa07154) {
            return _0x3915a4.reply("Please mention a user, reply to a user's message, or provide a phone number to remove from the bot's ignore list.");
          }
          let _0x2f8c15 = _0x24ded7();
          if (_0x2f8c15.blacklisted_numbers.includes(_0xa07154)) {
            _0x2f8c15.blacklisted_numbers = _0x2f8c15.blacklisted_numbers.filter(_0x297ab2 => _0x297ab2 !== _0xa07154);
            fs.writeFileSync(_0x1de7ac, JSON.stringify(_0x2f8c15, null, 2));
            _0x3915a4.reply("User " + _0xa07154 + " has been removed from the bot's ignore list.");
          } else {
            _0x3915a4.reply("User " + _0xa07154 + " is not in the bot's ignore list..");
          }
        }
        break;
      case "listignorelist":
        {
          if (!_0x449bf4) {
            return _0x3915a4.reply(mess.owner);
          }
          let _0x54353c = _0x24ded7();
          if (_0x54353c.blacklisted_numbers.length === 0) {
            _0x3915a4.reply("The ignore list is currently empty.");
          } else {
            let _0x26c820 = "Ignored Numbers:\n";
            _0x54353c.blacklisted_numbers.forEach((_0x3c6df6, _0x497bde) => {
              _0x26c820 += _0x497bde + 1 + ". " + _0x3c6df6 + "\n";
            });
            _0x3915a4.reply(_0x26c820);
          }
        }
        break;
      case "take":
      case 'wm':
      case "steal":
        {
          if (!_0x3915a4.quoted) {
            return _0x3915a4.reply("Please reply to a sticker");
          }
          let _0x3d25dd = false;
          let _0x5b64d3 = _0x360a67.join(" ").split('|');
          let _0x55d1ed = _0x5b64d3[0] !== '' ? _0x5b64d3[0] : _0xe47e7d || packname;
          let _0x2a8c31 = typeof _0x5b64d3[1] !== "undefined" ? _0x5b64d3[1] : '';
          try {
            let _0x17313f = _0x3915a4.quoted.mimetype || '';
            if (!/webp/.test(_0x17313f)) {
              return _0x3915a4.reply("Please reply to a sticker");
            }
            let _0x348ad3 = await _0x3915a4.quoted.download();
            if (!_0x348ad3) {
              return _0x3915a4.reply("Please reply to a sticker!");
            }
            _0x3d25dd = await addExif(_0x348ad3, _0x55d1ed, _0x2a8c31);
          } catch (_0x12b21b) {
            console.error(_0x12b21b);
            if (Buffer.isBuffer(_0x12b21b)) {
              _0x3d25dd = _0x12b21b;
            }
          } finally {
            if (_0x3d25dd) {
              _0x3347b0.sendFile(_0x3915a4.chat, _0x3d25dd, "wm.webp", '', _0x3915a4, null, {
                'mentions': [_0x3915a4.sender]
              });
            } else {
              return _0x3915a4.reply("An error occurred");
            }
          }
        }
        break;
      case "translate":
      case "trt":
        {
          let _0x211963 = ("\n🚀 *How to Use the Translate Command:*\n\n📌 *Example 1:* Translate text from any language to English\n   - Command: " + _0x22d4e2 + _0x187f8e + " en [Your Text Here]\n   - Usage: " + _0x22d4e2 + _0x187f8e + " en Hello World\n\n📌 *Example 2:* Translate text to a specific language\n   - Command: " + _0x22d4e2 + _0x187f8e + " <language_code> [Your Text Here]\n   - Usage: " + _0x22d4e2 + _0x187f8e + " fr Bonjour tout le monde\n\n🌐 *Supported Languages:*\nExplore the full list of supported languages at:\n   https://cloud.google.com/translate/docs/languages\n\n🛠 *Note:*\nEnsure you use the correct language code for accurate translation.\n").trim();
          let _0x1f7bed = _0x360a67[0];
          let _0x4a758c = _0x360a67.slice(1).join(" ");
          const _0x2dab3d = ['af', 'ar', 'bg', 'bn', 'ca', 'cs', 'da', 'de', 'el', 'en', 'es', 'fa', 'fi', 'fr', 'he', 'hi', 'hu', 'id', 'it', 'ja', 'ko', 'ms', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sv', 'th', 'tr', 'uk', 'vi', 'zh'];
          if (!_0x2dab3d.includes(_0x1f7bed)) {
            _0x1f7bed = 'en';
            _0x4a758c = _0x360a67.join(" ");
          }
          if (!_0x4a758c && _0x3915a4.quoted && _0x3915a4.quoted.text) {
            _0x4a758c = _0x3915a4.quoted.text;
          }
          if (!_0x4a758c) {
            return _0x3915a4.reply(_0x211963);
          }
          try {
            const _0x55e775 = "https://api.siputzx.my.id/api/tools/translate?text=" + encodeURIComponent(_0x4a758c) + "&source=auto&target=" + _0x1f7bed;
            const _0x5e0d23 = await fetchJson(_0x55e775);
            if (!_0x5e0d23.success) {
              throw new Error("Translation failed");
            }
            let _0x269afb = _0x5e0d23.translatedText;
            _0x3915a4.reply(_0x269afb);
          } catch (_0x51ff92) {
            console.error("Translation Error:", _0x51ff92);
            _0x3915a4.reply(String(_0x51ff92));
          }
        }
        break;
      case "save":
      case "savestatus":
        {
          await _0x3e9b6e(_0x3915a4);
        }
        break;
      default:
        {
          if (_0x249ce8.startsWith('$')) {
            if (!_0x449bf4) {
              return;
            }
            exec(_0x249ce8.slice(2), (_0x52abee, _0x18cd89) => {
              if (_0x52abee) {
                return _0x3915a4.reply(_0x52abee);
              }
              if (_0x18cd89) {
                return _0x3915a4.reply(_0x18cd89);
              }
            });
          }
          if (_0x249ce8.startsWith('>')) {
            if (!_0x449bf4) {
              return;
            }
            try {
              let _0x6bdb8b = await eval(_0x249ce8.slice(2));
              if (typeof _0x6bdb8b !== "string") {
                _0x6bdb8b = require("util").inspect(_0x6bdb8b);
              }
              await _0x3915a4.reply(_0x6bdb8b);
            } catch (_0x56a907) {
              console.error(_0x56a907);
              await _0x3915a4.reply(String(_0x56a907));
            }
          }
          if (_0x249ce8.startsWith('=>')) {
            if (!_0x449bf4) {
              return;
            }
            try {
              const _0x164764 = await eval("(async () => { return " + _0x249ce8.slice(3) + " })()");
              _0x3915a4.reply(util.format(_0x164764));
            } catch (_0x2924f0) {
              console.error(_0x2924f0);
              _0x3915a4.reply(String(_0x2924f0));
            }
          }
        }
    }
  } catch (_0x1ee2da) {
    let _0x384e63 = util.format(_0x1ee2da);
    let _0x2a3c70 = String(_0x384e63);
    if (shouldLogError(_0x2a3c70)) {
      if (typeof _0x1ee2da === "string") {
        _0x3915a4.reply("An error occurred:\n\nError Description: " + _0x2a3c70);
      } else {
        console.log(_0x384e63);
        _0x3347b0.sendMessage(_0x3347b0.user.id, {
          'text': "An error occurred:\n\nError Description: " + _0x2a3c70,
          'contextInfo': {
            'forwardingScore': 0x98967f,
            'isForwarded': true
          }
        }, {
          'ephemeralExpiration': 0x3c
        });
      }
      recordError(_0x2a3c70);
    } else {
      console.log("Repeated error suppressed: " + _0x2a3c70);
    }
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  const _0x32bb68 = {
    'GDcwO': function (_0x42cadb, _0x40c992) {
      return _0x42cadb(_0x40c992);
    },
    'OntQs': function (_0x479829, _0x364e3a) {
      return _0x479829(_0x364e3a);
    }
  };
  fs.unwatchFile(file);
  console.log(color("Updated " + __filename));
  delete require.cache[file];
  require(file);
});