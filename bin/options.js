module.exports = {

  // 命令参数配置
  "config": {
    force: {
      short: 'f',
      info: '[x]Enforce the current operation.',
      demo: 'hai2007_nodejs --force|-f'
    },
    version: {
      short: 'v',
      info: '[0]Display the version of hai2007_nodejs.',
      demo: 'hai2007_nodejs --version|-v'
    },
    config: {
      info: '[1]Specify a configuration file.',
      demo: 'hai2007_nodejs --config ./hai2007_nodejs.config.js'
    },
    help: {
      short: 'h',
      info: '[2]Display this help text.',
      demo: 'hai2007_nodejs --help|-h <term>'
    },
    delete: {
      short: 'd',
      info: '[3]delete file or folder.',
      demo: 'hai2007_nodejs --delete|-d ./file'
    },
    copy: {
      short: 'c',
      info: '[4]copy file or folder.',
      demo: 'hai2007_nodejs --copy|-c ./sourceFile ./targetFile'
    },
    move: {
      short: 'm',
      info: '[5]move file or folder.',
      demo: 'hai2007_nodejs --move|-m ./sourceFile ./targetFile'
    },
    server: {
      short: 's',
      info: '[6]render source server.',
      demo: 'hai2007_nodejs --server|-s [port|8080]'
    }
  },

  // 帮助信息
  "help": `
  Usage: hai2007_nodejs <command>
  
  where <command> is one of:
    --help, -h, --config, --force, -f, --delete, -d, --move, -m, --copy, -c, --server, -s, --version, -v
  
  hai2007_nodejs --help|-h <term>       search for help on <term>
  hai2007_nodejs --help|-h              involved overview
    `

};