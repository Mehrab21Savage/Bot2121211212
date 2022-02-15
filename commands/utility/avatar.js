const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'avatar',
  expectedArgs: ['<mention>'],
  minArgs: 0,
  maxArgs: 1,
  callback: async (message, args, client) => {
       let Member = message.mentions.users.first() || message.guild.member(args[0]) || message.author;

    		const embed = new MessageEmbed()
      .setColor("RANDOM")
      .addField(
        "Links",
        `[Png](${Member.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [Jpg](${Member.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [Webp](${Member.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})`
      )
      .setImage(Member.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    message.channel.send(embed);

    //End
   
  },
}