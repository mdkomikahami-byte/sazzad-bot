const TelegramBot = require('node-telegram-bot-api');
const admin = require('firebase-admin');

const token = '8893361874:AAFoO7gEC2I0auA9s166sd1e4wT718f7Jts';
const bot = new TelegramBot(token, { polling: true });

const CheckJoin = require('./CheckJoin');
const Balance = require('./Balance');
const Reffer = require('./Reffer');
const Deposit = require('./Deposit');
const Withdraw = require('./Withdraw');
const Mining = require('./Mining');
const Help = require('./Help');
const History = require('./History');
const Account = require('./Account');

bot.on('message', (msg) => {
    const text = msg.text;
    
    if (!text) {
        return;
    }

    if (text.startsWith('/start')) {
        CheckJoin.startCommand(bot, msg);
    } else if (text === '💰 Balance') {
        Balance.showBalance(bot, msg);
    } else if (text === '👥 Refer') {
        Reffer.showRefer(bot, msg);
    } else if (text === '📥 Deposit') {
        Deposit.showDeposit(bot, msg);
    } else if (text === '📤 Withdraw') {
        Withdraw.showWithdraw(bot, msg);
    } else if (text === '⛏️ Mining') {
        Mining.showMining(bot, msg);
    } else if (text === '📞 Help') {
        Help.showHelp(bot, msg);
    } else if (text === '📜 History') {
        History.showHistory(bot, msg);
    } else if (text === '👤 Account') {
        Account.showAccount(bot, msg);
    }
});

bot.on('callback_query', (query) => {
    if (query.data === 'check_join') {
        CheckJoin.verifyJoin(bot, query);
    } else if (query.data === 'total_mining' || query.data === 'custom_mining') {
        Mining.handleMiningCallback(bot, query);
    } else if (query.data === 'setup_wallet' || query.data === 'wallet_bkash' || query.data === 'wallet_nagad' || query.data === 'edit_wallet' || query.data === 'do_withdraw') {
        Withdraw.handleWithdrawCallback(bot, query);
    }
});
