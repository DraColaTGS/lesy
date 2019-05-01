const Discord = require("discord.js");
const client = new Discord.Client();
 
 
 
 client.on('message', msg => {

  if (msg.content.startsWith("السلام عليكم")) {
    msg.channel.send(`**وعليكم السلام ورحمه الله وبركاته**`)

  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best
 

client.on('message', msg => {

  if (msg.content.startsWith("الشعار")) {
   msg.channel.send(`**☞! LG شعارك في الديسكورد ☜ **

  **☞! ᴸᴳ  شعارك بي اللعبه☜ ** 
	
	@here | @everyone`)
                   


  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best


client.on('message', msg => {

  if (msg.content.startsWith("بوت")) {
    msg.channel.send(`**:sparkling_heart: عيوني:sparkling_heart: **`)

  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best


client.on('message', msg => {

  if (msg.content.startsWith("باك")) {
    msg.channel.send(`**:v: :muscle: ولكم باك منور يا بطل:v: :muscle: **`)

  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best


client.on('message', msg => {

  if (msg.content.startsWith("برب")) {
    msg.channel.send(`**:kissing_heart: تيت يا حلو
	 :pray: الله معك **`)

  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best


client.on('message', msg => {

  if (msg.content.startsWith(".")) {
    msg.channel.send(`**:stuck_out_tongue_winking_eye:  اعمل وحده كمان تكسب :yum: **`)

  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best


client.on('message', msg => {

  if (msg.content.startsWith("..")) {
    msg.channel.send(`**اعمل 3 علشان المكسب يبقا متوسط:scream: **`)

  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best


client.on('message', msg => {

  if (msg.content.startsWith("...")) {
    msg.channel.send(`**:money_mouth: اعمل 4 المكسب يكبر:upside_down:**`)

  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best


client.on('message', msg => {

  if (msg.content.startsWith("....")) {
    msg.channel.send(`**:scream_cat: اعمل 5 تكسب الجائزه الكبرا:scream:**`)

  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best


client.on('message', msg => {

  if (msg.content.startsWith(".....")) {
    msg.channel.send(`**الف مبروك اكتب كلمه 
	||المكسب|| **`)

  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best


client.on('message', msg => {

  if (msg.content.startsWith("المكسب")) {
    msg.channel.send(`**:smiling_imp: اياك تفكر تنقط بي لشات تاني اذا بتعملها تاني ببلعك بان:rage: **`)

  }
})//SwaG The Best //Epic codes 4ever //SwaG The Best

client.login(process.env.BOT_TOKEN);
