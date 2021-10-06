const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "ODA2MTYzNTExNjI0NTk3NTA0.YBlcRg.nZImzb0kfRgMJ6WlJewNgdVGys4", //TOKEN YOUR BOT(ТОКЕН ВАШЕГО БОТА)
prefix: "$getServerVar[prefix]" //PREFIX YOUR BOT(ПРЕФИКС ВАШЕГО БОТА)
})
bot.onMessage();
//commands(команды)
bot.onBanAdd();
bot.onChannelCreate();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onMemberUpdate();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onRoleUpdate()

bot.command({
   name: "$alwaysExecute",
   code: `$setGlobalUserVar[message;$sum[$getGlobalUserVar[message];1]]`
})

bot.loopCommand({
   code: `$modifyRole[айди роля; название роля;$random[111111;999999];yes;yes]`,
   channel: "айди любого канала сервера ($channelID не будет работать!)",
   executeOnStartup: true,
   every: 300
})

bot.command({
  name: "плэй",
  code: `$playSong[$message;2m;yes;yes;Не удалось найти музыку!]`
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
name: "пинг", //Trigger(Триггер команды)
code: `пинг бота $ping` //Code(Код команды)
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
  $description[**Имя** - $username[$findUser[$message[1]]]
**Сообщений за сегодня** - $GetGlobalUserVar[message;$mentioned[1;yes]]
**Статус** - $replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$message[1]]];online;В сети;-1];offline;Не в сети;-1];idle;Не активен;-1];dnd;Не беспокоить;-1]
**Пользовательский статус** - $replaceText[$replaceText[$checkCondition[$getCustomStatus[$findUser[$message];emote]$getCustomStatus[$findUser[$message];state]==nonenone];true;Отсутствует];false;$replaceText[$replaceText[$checkCondition[$getCustomStatus[$findUser[$message];emote]$getCustomStatus[$findUser[$message];state]==$getCustomStatus[$findUser[$message];emote]none];true;$getCustomStatus[$findUser[$message];emote]];false;$replaceText[$replaceText[$checkCondition[$getCustomStatus[$findUser[$message];emote]$getCustomStatus[$findUser[$message];state]==none$getCustomStatus[$findUser[$message];state]];true;$getCustomStatus[$findUser[$message];state]];false;$getCustomStatus[$findUser[$message];emote] $getCustomStatus[$findUser[$message];state]]
**Платформа** - $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findUser[$message[1]]];none;❓ Отсутствует;-1];web;📄 Браузер;-1];mobile;📱 Телефон;-1];desktop;🖥️ Компьютер;-1]
**Дата создания** - $creationDate[$findUser[$message[1]];date]
**Присоединился** - $memberJoinedDate[$findUser[$message]]]
$footer[ID: $findUser[$message]]
  $color[GREEN]
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
  $addField[Каналы (Всего: $channelCount);<:text:815564331629412352> **Текстовые** - $channelCount[text]
<:voice:815564247517626388> **Голосовые** - $channelCount[voice]
<:category:815564242550915093> **Категории** - $channelCount[category]]
$addField[Подробно о статусах;<:online:831120014639497247> **В сети** - $membersCount[$guildId;online]
<:idle:831120069513445376> **Неактивны** - $membersCount[$guildId;idle]
<:dnd:831120124445589544> **Не беспокоить** - $membersCount[$guildId;dnd]
<:offline:831120530278055966> **Не в сети**- $membersCount[$guildId;offline];yes]
$addField[Участники;<:rules:815564316010217472> **Всего** - $membersCount
<:user_aue:817840607087165451> **Люди** - $sub[$membersCount;$botCount]
<:bot:815564333786464257> **Боты** - $botCount;yes]
$color[GREEN]
`
})

bot.command({ //изменить id канала
    name: "логи",
    code: `$title[логи (•beta•)] $description[успешно! не забывайте что эта функция в разработке, могут быть баги...] $color[00ff00] $setServerVar[logID;$message] $onlyPerms[ban;❌ у вас нет права \`ban\`]`
})
bot.banAddCommand({ //command

channel: "$getServerVar[logID]", //channel where it'll be logged

code: `$title[Сервер логи] $description[пользователь <@$authorID> забанен на сервере.] $color[ff0000] $footer[$serverName]` // your code

})

bot.channelCreateCommand({ 

channel: "$getServerVar[logID]", 

code: `
$title[Сервер логи]

$description[создан канал: $newChannel[name]]
$color[00ff00]
$footer[$serverName]
`

})

bot.channelDeleteCommand({ 

channel: "$getServerVar[logID]", 

code: `

$title[Сервер логи]

$description[удален канал, старое имя канала: $oldChannel[name]] $color[ff0000]
$footer[$serverName]
`

})

bot.channelUpdateCommand({ 

channel: "$getServerVar[logID]", 

code: `

$title[Сервер логи]

$description[обновлен канал

старое название: $oldChannel[name]

новое название: $newChannel[name]] $color[00ff00]
$footer[$serverName]
`

})

bot.memberUpdateCommand({ 

channel: "$getServerVar[logID]", 

code: `$title[Сервер логи] $description[обновлен участник сервера

$newMember[name] 

изменены права участника:

было: $oldMember[permissions]
стало: $newMember[permissions]] $color[00ff00]

$footer[$serverName]`

})

bot.updateCommand({

        channel: "$getServerVar[logID]", 

        code: `$title[Сервер логи] $description[обновлено сообщение от $username в канале <#$channelUsed>:

новое сообщение: $message

старое сообщение: $oldMessage] $color[00ff66] $footer[$serverName]`

/*

        Code Breakdown

$message - The new message

$oldMessage - The message before it was edited (This function only works in this callback)

$username - The person who edited the message

$channelUsed - Where the person edited the message

*/

})

bot.deletedCommand({

    channel: "$getServerVar[logID]",

    code: `$title[Сервер логи] $description[сообщение от: $username, было удалено в канале <#$channelUsed>: сообщение: $message] $color[ff0000] $footer[$serverName]`

    /*

        Code Breakdown

        $username - The user who wrote the message

        $channelUsed - The channel where the message was deleted

        $message - The message that was deleted

    */

})

bot.roleCreateCommand({ 

channel: "$getServerVar[logID]", 

code: `

$title[Сервер логи]

$description[создана роль: $newRole[name]
hex цвет: $newRole[hexColor]
id: $newRole[id]
права у роли: $newRole[permissions]] $color[00ff66]
$footer[$serverName]`

})

bot.roleDeleteCommand({ 

channel: "$getServerVar[logID]", 

code: `

$title[Сервер логи]
$description[удалена роль

старое название роли: $oldRole[name]] $color[ff0000]

$footer[$serverName]`

})

bot.roleUpdateCommand({ 

channel: "$getServerVar[logID]", 

code: `

$title[Сервер логи]
$description[обновлена роль:
старое название роли: $oldRole[name]

новое название роли: $newRole[name]] $color[00ff00]

$footer[$serverName]`

})

//status(статус бота)

bot.status({
  text: "за $AllMembersCount игроками",
  type: "WATCHING",
  time: 12
})

//variables(переменные)

bot.variables({
  message: '0',
  prefix: '/',
  logID: '1'
})
