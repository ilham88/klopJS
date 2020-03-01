module.exports = Object.freeze({
  TOKEN: '1041323209:AAFAu6KKvZuFFfvBAm7m9PP2uGLBHddGJFA',
  ARIA_SECRET: 'klopers',
  ARIA_DOWNLOAD_LOCATION: 'download',
  ARIA_DOWNLOAD_LOCATION_ROOT: 'download', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  INDEX_DOMAIN: 'https://bacot.klopindex.workers.dev/', //Get it from here https://gdindex-code-builder.glitch.me/
  GDRIVE_PARENT_DIR_ID: '1IImQIqiiKC11gPuPdKQPkGJn4KVx4F42',
  SUDO_USERS: [684032767],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-309225673],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 6000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@bacot"
  },
  IS_TEAM_DRIVE: false
});
