const { MessageButton, MessageActionRow, MessageEmbed, Client, MessageSelectMenu } = require("discord.js");
const { glob } = require("glob");
const { promisify } = require("util");

module.exports = {
    name: "social",
    description: 'social media',
    aliases: [],
    run: async (client,message, args) => {
      
  let button = new MessageActionRow()
        .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('Facebook')
  .setEmoji("1027089224123551816") 
  .setURL(`https://www.facebook.com/PEPO126`))//قابل للتغير 
    
       .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('YouTube')
  .setEmoji("1027089219908292668") 
  .setURL(`https://www.youtube.com/c/PepoSpBlack`))//قابل للتغير
    
       .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('YouTube Gaming')
  .setEmoji("1027089219908292668") 
  .setURL(`https://www.youtube.com/c/PEPOPEPO`))//قابل للتغير 

        .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('Instagram')
  .setEmoji("1027089227424469002")  
  .setURL(`https://www.instagram.com/pepospblack/`))//قابل للتغير 
      
    let embed = new MessageEmbed()
      
.setImage(`https://media.discordapp.net/attachments/946291728799920129/977317812278296596/7c335a15ef492ac7.gif`)//قابل للتغير 
      
.setColor(message.guild.me.displayHexColor)
      
      .setTimestamp()
      
    message.reply({ embeds:[embed], components:[button] })
      
          },
};