 module.exports = {
 config: {
   name: "prefix",
   version: "1.0",
   author: "Kylepogi",
   countDown: 2,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `heyy bro, my prefix is [ × ]\n\n______________________________\n📜𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘?\nexample please type: ×help - to view all cmds\n×owner\n______________________________\n𝗢𝗪𝗡𝗘𝗥: 𝐾𝑌𝐿𝐸 𝐵𝐴𝐼𝑇-𝐼𝑇 ツ\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞_𝗟𝗜𝗡𝗞: https://www.facebook.com/kyleyukaro\n______________________________`,
  attachment: await global.utils.getStreamFromURL("")
 });
 }
 }
 }
