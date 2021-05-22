'use strict'

require('dotenv').config();

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand

const chatbot = new Telegram.Telegram(process.env.TOKEN)

class EventsController extends TelegramBaseController {
    acaoMiar(scope) {

        let lista = ['Não', '...', 'Miau miaaaaaaau, merda', 'Não quero']
        let sentenca = lista[Math.floor(Math.random() * lista.length)]

        scope.sendMessage(sentenca)
    }


    get routes() {
        return {
            'miar': 'acaoMiar'
        }
    }
}

chatbot.router.when(new TextCommand('/miar', 'miar'), new EventsController())