const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "ODA2MTYzNTExNjI0NTk3NTA0.YBlcRg.nZImzb0kfRgMJ6WlJewNgdVGys4", //TOKEN YOUR BOT(ТОКЕН ВАШЕГО БОТА)
prefix: "$getServerVar[prefix]" //PREFIX YOUR BOT(ПРЕФИКС ВАШЕГО БОТА)
})
bot.onMessage()
//commands(команды)

bot.command({
   name: "$alwaysExecute",
   code: `$setUserVar[message;$sum[$getUserVar[message];1]]`
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
name: "сервер",
aliases: ["server-info","si"],
code: `
$reply[$messageID;
{color:00ff00}
{title:Информация о сервере}
{field:Владелец: <@$ownerID> | $username[$ownerID]#$discriminator[$ownerID]}
{field:ID сервера: \`$guildID\`}
{field:Регион: \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;brazil;Бразилия];russia;Россия];europe;Европы];hong kong;Гонконг];india;Индия];Japane;Япония];Singapore;Сингапур];south africa;Южная Африка];sydney;Сидней];us central;Центральная часть Сша];us west;Западная часть США];us east;Восточная часть США];us south; Южная часть США]\`}
{field:Уровень проверки: \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;None;Выключено];Low;Низкий];Medium;Средний];High;Высокий];Very High;Очень высокий]\`}
{field:Фильтр содержимого: \`$replaceText[$replaceText[$replaceText[$serverContentFilter;All Members;Фильтрация всех пользователей];Members Without Roles;Фильтрация пользователей без роли];Disabled;Фильтрация отключена]\`}
{field:Канал системных сообщений: $replaceText[<#$systemChannelID>;<#>;Такого канала нет]}
{field:Уровень буста: \`$serverBoostLevel\`}
{field:Всего бустов: \`$serverBoostCount\`}
{field:Забаненых: \`$replaceText[$banCount;missing permissions;У меня нет прав на просмотр забаненых пользователей]\`}
{field:Человек: \`$membersCount\`}
{field:Ботов: \`$botCount\`}
{field:Каналов: \`$channelCount\`}
{field:Ролей: \`$roleCount\`}
{field:Эмодзей: \`$emojiCount\`}
{field:Инвайт: $getServerInvite}]
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
$onlyFor[managemessages;Не достаточно прав! необходимо: ****Удаление сообщений****]
$addCmdReactions[🧹]
$suppressErrors
$argsCheck[>1;{description: Введите на сколько сообщений вы хотите очистить чат}]`})

//status(статус бота)

bot.status({
  text: "за $AllMembersCount игроками",
  type: "WATCHING",
  time: 12
})

//variables(переменные)

bot.variables({
  message: '0',
  prefix: '/'
})
