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
