// import TelegramBot from "node-telegram-bot-api";
// import fetch from "node-fetch";
// const TOKEN = '7939564885:AAHKplqVyoXPx6Vulys6iFJhsjl_-HyzgFY'

// const bot  = new TelegramBot(TOKEN, {polling: true});


// bot.on("message", msg => {
//     let chatId = msg.chat.id;
//     let text = msg.text;
//     if(text == '/start'){
//         bot.sendMessage(chatId, "|| hello world ||", {
//             parse_mode: "MarkdownV2"
//         });
//     }
//     if(text == 'hello'){
//         bot.sendMessage(chatId, '|| world||', {
//             parse_mode: "MarkdownV2"
//         });
//     }

    

// });


import TelegramBot from "node-telegram-bot-api";
const TOKEN = '7939564885:AAHKplqVyoXPx6Vulys6iFJhsjl_-HyzgFY'

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // if(text == '/start') {
    //     bot.sendMessage(chatId, "|| salom to'lqinxon ||", {parse_mode: "MarkdownV2"} )
    // }
    // if(text == 'kun'){
    //     bot.sendMessage(chatId, '[kun](https://www.kun.uz)', {parse_mode: "MarkdownV2", disable_web_page_preview: true ,})
    // }
    // if(text == 'html'){
    //     bot.sendMessage(chatId, '<b>hello world</b>', {parse_mode: "HTML"})
    // }
    // if(text == 'emoji'){
    //     bot.sendMessage(chatId, '😂')
    // }
    // if(text == 'site'){
    //     bot.sendMessage(chatId, 'site', {
    //         // disable_web_page_preview:true,
    //         entities: [
    //             {
    //                 type: 'text_link',
    //                 length: 4,
    //                 offset: 0,
    //                 url: "https://www.kun.uz",
    //             }
    //         ]
    //     })
    // }
    // if(text == 'reply'){
    //     bot.sendMessage(chatId, "reply all questions", {reply_to_message_id: msg.message_id})
    // }

    if(text == "buttons"){
        bot.sendMessage(chatId, 'tugani tanglang', {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: 'Garden'
    
                        },
                        {
                            text: 'Kitchen'
                        },
                        {
                            text: 'Kom'
    
                        },
                        {
                            text: 'laptop '
    
                        },
                        {
                            text: 'Garden'
    
                        },
                        {
                            text: 'Kitchen'
                        },
                        {
                            text: 'Kom'
    
                        },
                        {
                            text: 'laptop ',
                            request_contact: true 
    
                        }
                    ]
                ],
                resize_keyboard: true
            }
        })
    }

     


})

