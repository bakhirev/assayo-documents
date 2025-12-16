const useTranslations = require('./useTranslations');

const SITE = 'https://bakhirev.github.io/';
const GITHUB_LINK = 'https://github.com/bakhirev/assayo';
const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  de: 'Deutsch',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  ar: 'العربية',
  hi: 'हिन्दी',
  ru: 'Русский',
};

function getLanguageLinks(selectedLanguage) {
  const text = Object.entries(languages).map(([lang, title]) => {
    const link = lang === 'en'
      ? GITHUB_LINK
      : `${GITHUB_LINK}/blob/main/documents/${lang.toUpperCase()}.md`;

    return lang === selectedLanguage
      ? `__[${title}](${link})__`
      : `[${title}](${link})`;
  }).join(' | ');

  return text;
}

module.exports = (LANGUAGE, text) => {
  const { t, l } = useTranslations(text);

  return `
> ${getLanguageLinks(LANGUAGE)}

# [Assayo](https://bakhirev.github.io/?ref=github&lang=en)
${t('main.title')}
${t('main.features')}

**${t('main.links')}** ${l({
  demo: SITE + 'demo/?ref=github&dump=./test.txt',
  'online version': SITE + 'demo/?ref=github',
  docker: 'https://hub.docker.com/r/bakhirev/assayo',
  reddit: 'https://www.reddit.com/r/ITManagers/comments/1e5k291/the_visualization_and_analysis_of_git_commit/',
  habr: 'https://habr.com/ru/articles/852782/',
})}

**${t('main.videos')}** ${l({
  english: 'https://www.youtube.com/watch?v=uMbhrrd25t4',
  español: 'https://www.youtube.com/watch?v=skmctb_2rZ0',
  русский: 'https://www.youtube.com/watch?v=jwCp_-bhrCQ',
})}

<a href="${SITE}demo/?ref=github&dump=./test.txt" target="_blank"><img src="${SITE}assets/images/index.gif" width="100%" /></a>

<a name="link-0"></a>
### ${t('main.tableOfContents')}
- [${t('report.title')}](#link-1)
  - [${t('report.create.title')}](#link-2)
    - [${t('report.create.public.title')}](#link-3)
    - [${t('report.create.js.title')}](#link-4)
    - [${t('report.create.php.title')}](#link-5)
    - [${t('report.create.python.title')}](#link-6)
    - [${t('report.create.ruby.title')}](#link-7)
    - [${t('report.create.go.title')}](#link-8)
    - [${t('report.create.src.title')}](#link-9)
    - [${t('report.create.github.title')}](#link-10)
    - [${t('report.create.private.title')}](#link-11)
  - [${t('report.concat.title')}](#link-12)
  - [${t('report.logFile.title')}](#link-13)
    - [${t('report.logFile.online.title')}](#link-14)
    - [${t('report.logFile.offline.title')}](#link-15)
    - [${t('report.logFile.powerShell.title')}](#link-16)
  - [${t('report.logFile.group.title')}](#link-17)


- [${t('practice.title')}](#link-18)
  - [${t('practice.message.title')}](#link-19)
  - [${t('practice.autoCheck')}](#link-20)
    - [${t('practice.commitMessage.title', { file: 'commit-msg' })}](#link-21)
    - [${t('practice.preCommit.simpleTitle', { name: 'pre-commit' })}](#link-22)


- [${t('about.title')}](#link-23)
  - [${t('about.theme.title')}](#link-24)
  - [${t('about.build.title')}](#link-25)
  - [${t('about.translations.title')}](#link-26)
  - [${t('about.architecture.title')}](#link-27)
    - [${t('about.microservices.title')}](#link-29)
  - [${t('about.contacts.title')}](#link-30)

<a name="link-1"></a>
##  ${t('report.title')}

<a name="link-2"></a>
### 📈 ${t('report.create.title')}

<a name="link-3"></a>
#### ${t('report.create.public.title')}
- ${t('report.create.public.step1', { url: 'https://bakhirev.github.io/' })}
- ${t('report.create.public.step2')}

<a name="link-4"></a>
#### ${t('report.create.js.title')}
- ${t('report.create.any.run', { code: 'npx assayo' })}
- ${t('report.create.any.open', { file: './assayo/index.html' })}

<a name="link-5"></a>
#### ${t('report.create.php.title')}
- ${t('report.create.any.run', { code: 'composer require bakhirev/assayo' })}
- ${t('report.create.any.run', { code: 'vendor/bin/assayo' })}
- ${t('report.create.any.open', { file: './assayo/index.html' })}

<a name="link-6"></a>
#### ${t('report.create.python.title')}
- ${t('report.create.any.run', { code: 'pipx install assayo' })}
- ${t('report.create.any.run', { code: 'assayo' })}
- ${t('report.create.any.open', { file: './assayo/index.html' })}

<a name="link-7"></a>
#### ${t('report.create.ruby.title')}
- ${t('report.create.any.run', { code: 'gem install assayo' })}
- ${t('report.create.any.run', { code: 'assayo' })}
- ${t('report.create.any.open', { file: './assayo/index.html' })}

<a name="link-8"></a>
#### ${t('report.create.go.title')}
- ${t('report.create.any.run', { code: 'go get github.com/bakhirev/assayo' })}
- ${t('report.create.any.run', { code: 'go install github.com/bakhirev/assayo' })}
- ${t('report.create.any.run', { code: 'assayo' })}
- ${t('report.create.any.open', { file: './assayo/index.html' })}

<a name="link-9"></a>
#### ${t('report.create.src.title')}
- ${t('report.create.src.step1', { clone: 'git clone https://github.com/bakhirev/assayo.git' })}
- ${t('report.create.src.step2', { file: 'log.txt', dir: '/build' })}
- ${t('report.create.any.open', { file: '/build/index.html' })}
- ${t('report.create.src.step3', { file: 'log.txt', dir: '/build', to: '/report' })}

${t('report.create.src.step4', { file: 'log.txt' })}

<a name="link-10"></a>
####  ${t('report.create.github.title')}
${t('report.create.github.description', {
    url: 'https://github.com/bakhirev/assayo/blob/main/documents/ActionExample.yml',
    dir: '.github/workflows/',
    action: 'https://github.com/marketplace/actions/assayo',
  })}

<a name="link-11"></a>
#### ${t('report.create.private.title')}
- ${t('report.create.private.step1', { url: 'https://hub.docker.com/r/bakhirev/assayo' })}
- ${t('report.create.private.step2')}
- ${t('report.create.private.step3', { param: 'dump' })}

\`\`\`
http://assayo_url/?dump=//you_url/some/log.txt
assayo_url - ${t('report.create.private.example1', { port: '80' })}
you_url    - ${t('report.create.private.example2')}
\`\`\`
${t('report.create.private.step4', { url: 'http://127.0.0.1:80/', port: '80' })}

<a name="link-12"></a>
### ‍🎭 ${t('report.concat.title')}
${t('report.concat.description', { file: '.mailmap' })}

${t('report.concat.example')}
\`\`\`
Alex B <alex@mail.uk>
Alex B <alex@mail.uk> <alex@gov.tk>
Alex B <alex@mail.uk> <bakhirev@ya.kz>
Alex B <alex@mail.uk> <man64@yahoo.com>
\`\`\`
${t('report.concat.more', { url: 'https://git-scm.com/docs/gitmailmap' })}

<a name="link-13"></a>
### 📤 ${t('report.logFile.title')}

<a name="link-14"></a>
####  ${t('report.logFile.online.title')}
${t('report.logFile.online.description')}

<a name="link-15"></a>
####  ${t('report.logFile.offline.title')}
${t('report.logFile.offline.description', { file: 'log.txt', ext: 'js', report: '/build/index.html' })}

<a name="link-16"></a>
#### ${t('report.logFile.powerShell.title')}
${t('report.logFile.powerShell.description')}
\`\`\`
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
\`\`\`
${t('report.logFile.powerShell.example')}

<a name="link-17"></a>
### 🗃️ ${t('report.logFile.group.title')}
- ${t('report.logFile.group.step1', {
    file: 'log.txt',
    files: '\`log-1.txt\`, \`log-2.txt\`, \`log-3.txt\`',
    url: 'https://github.com/bakhirev/assayo-crawler',
  })}
- ${t('report.logFile.group.step2')}
- ${t('report.logFile.group.step3', { files: '\`log-1.txt\`, \`log-2.txt\`, \`log-3.txt\`', dir: '/build' })}

<a name="link-18"></a>
## ${t('practice.title')}

<a name="link-19"></a>
### 📝 ${t('practice.message.title')}
${t('practice.message.description', { url: 'https://www.conventionalcommits.org/en/v1.0.0/' })}
\`\`\`
JIRA-1234 feat(profile): Added avatar for user
\`\`\`
- ${t('practice.message.example.task', { task: 'JIRA-1234' })}
- ${t('practice.message.example.type', { type: 'feat, fix, style, refactor, test, doc' })}
- ${t('practice.message.example.page', { page: 'profile' })}
- ${t('practice.message.example.text', { text: 'Added avatar for user' })}

<a name="link-20"></a>
### 👮 ${t('practice.autoCheck')}

<a name="link-21"></a>
####  ${t('practice.commitMessage.title', { file: 'commit-msg' })}
1. ${t('practice.commitMessage.step1', { file: 'commit-msg', dir: '.git/hooks/' })}
2. ${t('practice.commitMessage.step2')}
\`\`\`
#!/usr/bin/env bash
if ! grep -iqE "(JIRA-[0-9]{1,5})(\s)(feat|fix|docs|style|refactor|test|chore)((\([a-z0-9_-]{1,}\)){0,})(:\s)([a-z]{1,})" "$1"; then
   echo "Need commit message like: JIRA-12 fix(profile): some text. Read Semantic Commit Messages" >&2
   exit 1
fi
\`\`\`

<a name="link-22"></a>
#### ${t('practice.preCommit.title', { name: 'pre-commit', url: 'https://www.npmjs.com/package/pre-commit' })}
1. ${t('practice.preCommit.step1', { file: 'package.json', property: 'commit-msg' })}
\`\`\`
...
"commit-msg": {
  "regex": "(JIRA-[0-9]{1,5})(\\s)(feat|fix|docs|style|refactor|test|chore)((\\([a-z0-9_-]{1,}\\)){0,})(:\\s)([a-z]{1,})",
    "error-message": "Need commit message like: JIRA-12 fix(profile): some text Read Semantic Commit Messages"
},
...
\`\`\`
2. ${t('practice.preCommit.step2', { code: 'npm install pre-commit' })}

<a name="link-23"></a>
##  ${t('about.title')}

<a name="link-24"></a>
### 🎨 ${t('about.theme.title')}
${t('about.theme.description')}
- ${t('about.theme.params.title', { property: 'title', url: '?title=You Company' })}
- ${t('about.theme.params.css', { property: 'theme', url: '?theme=//company.com/some.css' })}
- ${t('about.theme.params.language', { property: 'lang', url: '?lang=es' })}

${t('about.theme.example', { url: 'https://bakhirev.github.io/demo/themes/' })}

<a name="link-25"></a>
### 🛠️ ${t('about.build.title')}
- ${t('about.build.step1', { code: 'git clone https://github.com/bakhirev/assayo.git' })}
- ${t('report.create.any.run', { code: 'npm install' })}
- ${t('report.create.any.run', { code: 'npm run build:local' })}
- ${t('about.build.step2', { dir: '/build' })}

<a name="link-26"></a>
### 🈯 ${t('about.translations.title')}
${t('about.translations.description', { dir: 'ts/translations/' })}
${t('about.translations.example', { url: 'https://github.com/firstcontributions/first-contributions' })}

<a name="link-27"></a>
### 📐 ${t('about.architecture.title')}

<a name="link-29"></a>
#### ${t('about.microservices.title')}
<img src="https://raw.githubusercontent.com/bakhirev/assayo-crawler/12af4410fc93384cafb108a4429e43f9a874dbaa/schema.svg" width="70%" />

1. ${t('about.microservices.showcase', { url: 'https://github.com/bakhirev/assayo-showcase' })}
2. ${t('about.microservices.crawler', { url: 'https://github.com/bakhirev/assayo-crawler' })}
3. ${t('about.microservices.visualization', { url: 'https://github.com/bakhirev/assayo' })}

<a name="link-30"></a>
### 📧 ${t('about.contacts.title')}
- 📱 [https://t.me/bakhirev](https://t.me/bakhirev) (${t('about.contacts.priority')})
- 📧 [alexey-bakhirev@yandex.ru](mailto:alexey-bakhirev@yandex.ru)
- 🌐 [${SITE}](${SITE}?ref=github&lang=${LANGUAGE})

`;
}
