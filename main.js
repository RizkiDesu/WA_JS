const qrcode = require('qrcode-terminal')
const { Client, LocalAuth } = require('whatsapp-web.js')
const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: './login_data'
    })
})
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true })
})
client.on('ready', () => {
    console.log('Client is ready!')
})
client.on('message', async (message) => {
    // console.log("from :",message.from)
    // console.log("tipe :",message.type)
    // console.log("pesan :",message.body)
    if(message.type === 'chat'){  // groub dll coba di tes jsonnya
        if (message.body === 'Rizki Sayang Pungki') {
            await message.reply('BENAR')
            console.log("pesan cinta:",message.body, " from:", message.from)
        }
        else if (message.body === 'Sayang Pungki Poll') {
            await client.sendMessage(message.from, 'ALHAMDULILAH')
            console.log("pesan cinta:",message.body, " from:", message.from)
        }else{
            console.log("pesan chat:",message.body, " from:", message.from)
        }
    }else{
        console.log("pesan grup atau lainya:",message.body, " from:", message.from)
    }
    // console.log(message) // SEMUA JSON
})
client.initialize()
