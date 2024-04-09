module.exports = {
    config: {
        name: "Kyle",
        version: "1.0",
        author: "Kyle Senpai",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        const lowerCaseBody = event.body.toLowerCase();
        if (lowerCaseBody.includes("kyle") || lowerCaseBody.includes("kyle Bait-it") ||
lowerCaseBody.includes("Kyle") ||
lowerCaseBody.includes("@Kyle Bait-it")) {
            return message.reply(`kaylangan mo sa master ko?`);
        }
    }
};
