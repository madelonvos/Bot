const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('message', async message => {
    if(message.content.startsWith(process.env.PREFIX)){
        let args = message.content.slice(config.prefix.length).split(/ +/);
        let cmd = args.shift().toLowerCase()
        if(['credits', 'credit', 'madeby', 'owner'].includes(cmd)){
            return message.channel.send(embed('This bot was made by **KokoNeot#9150**\nIf you\'re looking for a bot feel free to contact me or check out [my fiverr gigs](https://www.fiverr.com/share/plGPwZ)'))
        }else if(['id', 'discordid', 'did'].includes(cmd)){
            if(!args.length)
                return message.channel.send(embed('Your ID is: ' + message.author.id))

            let username = args.join(' ').toLowerCase()
            let member = message.guild.members.cache.find(m => m.user.username.toLowerCase() == username)
            if(!member)
                if(!message.mentions.users.first())
                    return message.channel.send(embed('No user found'))
                else
                member = message.mentions.users.first()
                
            message.channel.send(embed(member.user.username + '\'s ID is: ' + member.user.id))
        }
    }
})

bot.on('ready', () => console.log('Online'))

bot.login(process.env.TOKEN)

function embed(m) {
    return new Discord.MessageEmbed()
        .setDescription(m)
        .setColor('RANDOM');
}
