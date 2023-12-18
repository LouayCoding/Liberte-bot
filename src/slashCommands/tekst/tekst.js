const { EmbedBuilder, ApplicationCommand, ApplicationCommandOptionType, Application, ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'tekst',
    description: "Krijg alle details over deze server in een oogopslag!",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'soort',
            description: 's',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: 'regels',
                    value: 'regels'
                },
                {
                    name: 'picperms',
                    value: 'picperms'
                }
            ]
        }
    ],
    run: async (client, interaction) => {
        const soort = interaction.options.getString("soort");

        switch (soort) {
            case 'regels':
                const regelsEmbed = new EmbedBuilder()
                    .setDescription('**Respectvol Gedrag:** Behandel anderen met respect en vriendelijkheid.\n\n**Geen Exposen:** Deel geen persoonlijke informatie of laster over anderen.\n\n**Geen Naakt of Schokkende Inhoud:** Plaats geen expliciete naaktheid, gore of ongepaste inhoud.\n\n**Geen Opzettelijke Verstoringen:** Het opzettelijk verstoren van gesprekken, zoals het spammen van geluiden, is niet toegestaan.')
                    .setColor('#5865F2')

                const regelsEmbed1 = new EmbedBuilder()
                    .setDescription('**Waarschuwingen:** Na elke reeks van 3 waarschuwingen volgt een timeout van 1 uur. Bij elke reeks van 6 waarschuwingen volgt een timeout van 1 dag. Dit herhaalt zich voor elke set van 6 waarschuwingen.\n\n**Oordeel op Basis van Overtreding:** De ernst van de overtreding bepaalt de acties na waarschuwingen. Het opeenvolgend ontvangen van waarschuwingen kan leiden tot achtereenvolgende timeouts van 1 uur en vervolgens 1 dag.\n\n**Verantwoordelijkheid:** Gebruikers zijn verantwoordelijk voor hun gedrag. Waarschuwingen worden gegeven om naleving van de regels te bevorderen en een veilige omgeving te behouden.**Moderatorbeoordeling:\n\n**Moderators beoordelen elke situatie individueel. Ze hebben de bevoegdheid om passende acties te ondernemen om de server veilig en respectvol te houden.')

                return interaction.channel.send({ embeds: [regelsEmbed, regelsEmbed1] })
                break;
            case 'picperms':
                const picpermsEmbed = new EmbedBuilder()
                    .setTitle('Hoe krijg ik pic perms?' )
                    .setDescription('**Level 5** geeft automatisch toegang tot **pic perms**. Gebruik dit privilege verantwoordelijk; misbruik kan leiden tot intrekking om de serverpositiviteit te behouden.')
                    .setColor('#5865F2')
                await interaction.channel.send({ embeds: [picpermsEmbed] });
                return interaction.reply({ content: `**${soort}** tekst succesvol verzonden.`, ephemeral: true });
                break;
            default:
                break;
        }
        console.log(chosenString)



    }
};