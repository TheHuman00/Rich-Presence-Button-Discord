var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
        details : "🡓 Lien du bot discord 🡓",
        assets : {
        large_image : "avatar",
        large_text : "🤖 Poulycroc, le bot discord 🤖"
        },
        buttons : [
            {label: 'Ajouter le Bot' , url: 'https://discord.com/api/oauth2/authorize?client_id=775838503707082784&permissions=8&scope=bot'},
            {label: 'Tableau de bord du bot', url: 'https://www.poulycroc.org/'}
        ]}
    })
})
client.login({ clientId : "775838503707082784" }).catch(console.error);