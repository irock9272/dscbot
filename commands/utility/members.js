const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Members')
		.setDescription('Shows how much members the server has.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`This Server Has ${interaction.guild.memberCount} Members.`);
	},
};
