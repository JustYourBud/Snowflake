const { SlashCommandBuilder } = require("discord.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName("mario")
		.setDescription("Tells you how long Mario! has been in the VC."),
	async execute(interaction) {
		let number = (Date.now() - 1675487589966)/36e5
		let time = Math.round(number * 10) / 10
		await interaction.reply(`Mario! has been in the voice channel for about ${time} hours.`)
	}
}