import logging
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, filters, ContextTypes
import requests
import os
import instaloader

# Logging configuration
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

# Initialize the bot with your token
TOKEN = '7048340008:AAGOVICnNVZkFP0CNhIJMzrvpjppV6eNOSE'  # Replace with your actual token
app = ApplicationBuilder().token(TOKEN).build()

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text('ᴡᴇʟᴄᴏᴍᴇ! ᴘʟᴇᴀꜱᴇ ꜱᴇɴᴅ ᴍᴇ ᴀ ᴠɪᴅᴇᴏ ʟɪɴᴋ ꜰʀᴏᴍ ɪɴꜱᴛᴀɢʀᴀᴍ')

def download_instagram_video(link: str):
    try:
        L = instaloader.Instaloader()
        post = instaloader.Post.from_shortcode(L.context, link.split('/')[-2])
        video_url = post.video_url
        response = requests.get(video_url)
        
        filename = f"{post.shortcode}.mp4"
        with open(filename, 'wb') as f:
            f.write(response.content)
        logging.info(f"Downloaded Instagram video: {post.shortcode}")
        return filename
    except Exception as e:
        logging.error(f"Error downloading Instagram video: {e}")
        return None

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    link = update.message.text
    
    if 'instagram.com' in link:
        wait_message = await update.message.reply_text("˜”*°• WAIT •°*”˜")
        filename = download_instagram_video(link)
        
        if filename:
            await context.bot.send_video(chat_id=update.message.chat.id, video=open(filename, 'rb'), reply_to_message_id=update.message.message_id)
            os.remove(filename)  # Remove the file after sending
            await context.bot.delete_message(chat_id=update.message.chat.id, message_id=wait_message.message_id)  # Delete the wait message
        else:
            await context.bot.delete_message(chat_id=update.message.chat.id, message_id=wait_message.message_id)  # Delete wait message
            await context.bot.send_message(chat_id=update.message.chat.id, text="❌ Failed to download the video.")
    else:
        await context.bot.send_message(chat_id=update.message.chat.id, text="❌ Invalid link provided.")

# Handlers
app.add_handler(CommandHandler('start', start))
app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

# Start the Bot
app.run_polling()
