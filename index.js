const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "ODA2MTYzNTExNjI0NTk3NTA0.YBlcRg.nZImzb0kfRgMJ6WlJewNgdVGys4", //TOKEN YOUR BOT(ТОКЕН ВАШЕГО БОТА)
prefix: "/" //PREFIX YOUR BOT(ПРЕФИКС ВАШЕГО БОТА)
})
bot.onMessage()
//commands(команды)

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
  $addField[Память;**Доступно:** $sub[$maxRam;$ram]mb
**Всего:** $maxRammb
**Потребление:** $rammb]
$color[00ff00]`
})

bot.command({
name: "сервер",
aliases: ["server-info","si"],
code: `
$reply[$messageID;
{color:00ff00}
{title:Информация о сервере}
{field:Владелец: <@$ownerID> | $username[$ownerID]$discriminator[$ownerID]}
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

//status(статус бота)

bot.status({
  text: "тестируется на aoi",
  type: "WATCHING",
  time: 12
})

//variables(переменные)

bot.variables({
  Name1: 'Value1',
  Name2: 'Value2'
})
