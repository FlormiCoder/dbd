const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "ODA2MTYzNTExNjI0NTk3NTA0.YBlcRg.YlWFSDaWRIg0MJ0wf1AqfQ5DMU0", //TOKEN YOUR BOT(ТОКЕН ВАШЕГО БОТА)
prefix: "$getServerVar[prefix]" //PREFIX YOUR BOT(ПРЕФИКС ВАШЕГО БОТА)
})
bot.onMessage()
//commands(команды)

bot.command({
   name: "$alwaysExecute",
   code: `$setGlobalUserVar[message;$sum[$getGlobalUserVar[message];1]]`
})

bot.command({
   name: "$alwaysExecute",
   code: `
$addCmdReactions[$randomText[<:smeshno:638150132772241419>;<:almaz:853241149907795968>;<:kot_dolboeb:787085885095018536>;<:lox:771503021749174292>]] 
$onlyForIDs[514953592067850241; ]
$onlyForServers[524937096524333076; ]` //Флорми
})

bot.command({
   name: "$alwaysExecute",
   code: `
$addCmdReactions[<:4len:904711115500564481>]
$onlyForIDs[817837280428949545; ]
$onlyForServers[524937096524333076; ]` //Таня
})

bot.command({
   name: "$alwaysExecute",
   code: `
$addCmdReactions[☝️;🐺]
$onlyForIDs[283085505275494400; ]
$onlyForServers[524937096524333076; ]` //Даша
})

bot.command({
   name: "$alwaysExecute",
   code: `
$addCmdReactions[$randomText[<:ebalo_psina:771843225984040961>;<:fdeddcb27e42b23bc6d2d7f05c3b2745:915570035207053362>]]
$onlyForIDs[787014512803971163; ]
$onlyForServers[524937096524333076;914910747052617748; ]
$suppressErrors` //Саня
})

//bot.command({
//   name: "$alwaysExecute",
//   code: `
//$deletecommand
//$deleteIn[5s]
//$description[успех]
//$setGlobalVar[work;$message]
//})

//bot.loopCommand({
//   code: `$modifyRole[736906468082843658;Админ;$random[111111;999999];yes;yes]`,
//   channel: "774181552992550922",
//   executeOnStartup: true,
//   every: 2500
//})

bot.command({
    name: "флорми",
    code: `
$channelSendMessage[716293493013872773;$username использовал(а) | полное сообщение: ****$message****]
$title[Вот чем сейчас занимается Флорми]
$description[****$getVar[flormi]****]
$footer[узнать подробнее про статус *инфстат]
$color[00ff66]`
})

bot.command({
    name: "сет",
    code: `
$deletecommand
$description[__Установнено__ > **$message**]
$setVar[flormi;$message]
$onlyForIDs[514953592067850241; ]
$color[00ff66]`
})

bot.command({
    name: "инфстат",
    code: `
$title[Информация]
$description[
1. иногда после текста чем занят Флорми будет время когда он примерно освободится (время указывается по киевскому GMT)
2. не всегда статус обновляется во время
3. если в статусе указано "NONE" то он был утерян или долго не обновлялся, возможно какие-то проблемы
3. бот не будет работать с 7 по 14 число каждого следующего месяца]
$color[FF0000]`
})

bot.command({
  name: "хелп",
  code: `
$title[Помощь]
$thumbnail[$userAvatar[$authorID]]
$description[Текущий префикс: ****$getServerVar[prefix]****
$getServerVar[prefix]префикс, система, профиль, очистить, сервер]
$color[00ff66]`
})

bot.command({
  name: "вер",
  code: `
$deletecommand
$giveRole[$authorID;671387856689823774]
$onlyForServers[524937096524333076;etc;Использовать эту команду можно только на официальном сервере поддержки бота!]
$onlyIf[$message==$discriminator[$authorID];****вы указали не свой тег или проверьте правильность написания тега, **** Пример: __*вер 4472__
БЕЗ ****#****]
$argsCheck[1; Укажите свой дискорд тег]
$title[Успешно]
$description[****$username**** верифицирован ☑️]
$color[00ff66]`
})

bot.command({
 name: "плей",
 aliases: ['p'],
 code: `
$color[RANDOM]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
$title[**Песня добавлена в очередь**]
$description[**Succesfully added** [$songInfo[title]\\]($songInfo[url]) to the **Queue**]
$addField[:stopwatch:| Duration:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]__**]
$addField[:dvd: | Views:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]__**]
$addField[:coffee: | Author:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]__**]
$addField[:clock10: Uploaded:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]__**]
$playSong[$message;1m;{title:Error}{description:**⛔ There was an error while making the request**}{color:RED}]
$onlyIf[$message!=;{title:Error}{description:**⛔ I need Song name to find a** \`song\`...}]
$onlyIf[$voiceID!=;**⛔ You are Not in a Voice channel! Join a voice channel**]
$cooldown[5s;Подожди **%time%**, чтобы снова использовать эту команду]`
})

bot.command({
  name: "музыка",
  code: `$author[Сейчас играет;https://bigsmokebot.ga/music.png]
$description[**__Автор__**: [$songInfo[publisher]\\]($songInfo[publisher_url])
**__Песня__**: [$songInfo[title]\\]($songInfo[url])
**__Продолжительность__**: $songInfo[duration]
$thumbnail[$songInfo[thumbnail]]
$footer[Выполнил $username]
$color[add8e6]`
})

bot.command({
name: "префикс",
aliases: ["sprefix", "sp", "prefix"],
code: `
$sendMessage[
  {title:Префикс успешно изменён!}
  {description:**Новый префикс\:** \`$message[1]\`}
;no]
$setServerVar[prefix;$message[1]]
$onlyIf[$charCount[$message[1]]<=3;:x:\`Префикс не может быть длиннее 3 символов!\`]
$onlyIf[$message[1]!=;:x:\`Префикс не может быть пустым!\`]
$onlyPerms[manageserver;:x:\`У вас недостаточно прав для смены префикса!\`]
$color[00ff00]`
})

bot.command({
name: "система",
aliases: ["sysinfo", "system"],
usage: "система",
description: "Выдает статы систимы",
code: `
$title[Информация о системе]
  $addField[Система;**CPU:** $djsEval[require("os").cpus()[0].model;yes]
**ОС:** $djsEval[require("os").platform;yes] x64]
  $addField[Память;**Доступно:** $sub[$maxRam;$ram] МБ
**Всего:** $maxRam МБ
**Потребление:** $ram МБ]
$color[00ff00]`
})

bot.command({
  name: "профиль",
  aliases: ['user'],
  cat: "Информация",
  desc: "Выдает инофрмацию о пользователе",
  usage: "mr:user (user)",
  code: `
  $thumbnail[$userAvatar[$findUser[$message[1]]]]
  $title[Информация о пользователе - $username[$findUser[$message[1]]]]
  $description[> **Имя** - $username[$findUser[$message[1]]]
> **Сообщений за сегодня** - $GetGlobalUserVar[message;$mentioned[1;yes]]
> **Статус** - $replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$message[1]]];online;В сети;-1];offline;Не в сети;-1];idle;Не активен;-1];dnd;Не беспокоить;-1]
> **Пользовательский статус** - $replaceText[$replaceText[$checkCondition[$getCustomStatus[$findUser[$message];emote]$getCustomStatus[$findUser[$message];state]==nonenone];true;Отсутствует];false;$replaceText[$replaceText[$checkCondition[$getCustomStatus[$findUser[$message];emote]$getCustomStatus[$findUser[$message];state]==$getCustomStatus[$findUser[$message];emote]none];true;$getCustomStatus[$findUser[$message];emote]];false;$replaceText[$replaceText[$checkCondition[$getCustomStatus[$findUser[$message];emote]$getCustomStatus[$findUser[$message];state]==none$getCustomStatus[$findUser[$message];state]];true;$getCustomStatus[$findUser[$message];state]];false;$getCustomStatus[$findUser[$message];emote] $getCustomStatus[$findUser[$message];state]]
> **Платформа** - $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findUser[$message[1]]];none;❓ Отсутствует;-1];web;📄 Браузер;-1];mobile;📱 Телефон;-1];desktop;🖥️ Компьютер;-1]
> **Дата создания аккаунта** - $creationDate[$findUser[$message[1]]]
> **Присоединился** - $memberJoinedDate[$findUser[$message[1]];date]]
$footer[Айди: $findUser[$message]]
  $color[00ff66]
  `
})

bot.command({
 name: "очистить", 
 aliases: ['clean'],
 code: `$title[Очистка] 
$description[Чат очищен на $message[1] сообщений! Очистил: <@$authorID>.]
$color[RANDOM]
$clear[$message[1]]
$onlyIf[$message<=100;{description:Я не могу очистить больше чем 100 сообщений}]
$onlyPerms[managemessages;Не достаточно прав! необходимо ****Управление сообщениями****]
$addCmdReactions[🧹]
$suppressErrors
$argsCheck[>1;{description: Введите на сколько сообщений вы хотите очистить чат}]`})

bot.command({
  name: "сервер",
  aliases: ['guild'],
  cat: "Информация",
  desc: "Выдает статистику сервера",
  usage: "mr:server/guild",
  code: `$title[Информация о сервер: $serverName]
  $thumbnail[$serverIcon]
  $addField[Остальное;• **Создатель** - $username[$ownerID]
• **Дата Создания** - $creationDate[$guildID]
• **Уровень Верефикации** - $replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;Low;Низкий;-1];Very High;Очень Высокий;-1];Medium;Средний;-1];High;Высокий;-1]
• **Регион** - $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;frankfurt; Франкфурт];brazil; Бразилия];europe; Европа];hongkong; Гонконг];india; Индия];japan; Япония];russia; Россия];singapore; Сингапур];southafrica; Южная Африка];sydney; Сидней];us-central; Центральная часть США];us-east; Восток США];us-south; Юг США];us-west; Запад США];amsterdam; Амстердам];dubai; Дубай];south-korea; Южная Корея];london; Лондон];eu-west; Западная Европа];eu-central; Центральная Европа]
• **Уровень буста** - $replaceText[$replaceText[$checkCondition[$serverBoostLevel<2];true;Нет уровня];false;$replaceText[$replaceText[$checkCondition[$serverBoostLevel<15];true;1 (Бусты: $serverBoostLevel)];false;$replaceText[$replaceText[$checkCondition[$serverBoostLevel<30];true;2 (Бусты: $serverBoostLevel)];false;3 (Бусты: $serverBoostLevel)]]]]
  $addField[Каналы (Всего: $channelCount);**Текстовые** - $channelCount[text]
**Голосовые** - $channelCount[voice]
**Категории** - $channelCount[category]]
$addField[Подробно о статусах;**В сети** - $membersCount[$guildId;online]
**Неактивны** - $membersCount[$guildId;idle]
**Не беспокоить** - $membersCount[$guildId;dnd]
**Не в сети**- $membersCount[$guildId;offline];yes]
$addField[Участники;**Всего** - $membersCount
**Люди** - $sub[$membersCount;$botCount]
**Боты** - $botCount;yes]
$color[GREEN]
`
})

//status(статус бота)

bot.status({
  text: "за $AllMembersCount игроками | *хелп",
  type: "WATCHING",
  time: 12
})

//variables(переменные)

bot.variables({
  message: '0',
  prefix: '*',
  work: '0',
  money: '100',
  flormi: 'test'
})
