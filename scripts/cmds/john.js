module.exports = {
    config: {
        name: "John",
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
        if (lowerCaseBody.includes("John") || lowerCaseBody.includes("kyle Bait-it") ||
lowerCaseBody.includes("john") ||
lowerCaseBody.includes("@John Dereck Midrano Oboza")) {
            return message.reply(`kaylangan mo sa master ko na pogi?`);
        }
    }
};
