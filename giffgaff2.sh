#!/bin/bash

# 你的Telegram机器人API令牌和聊天ID
API_TOKEN="7946198995:AAHIJAsZSB7R4UlRvnDfOvxBTQw5in9Vg0g"
CHAT_ID="7975219348"
MESSAGE="giffgaff该续期啦！！!"

# 向Telegram发送消息
curl -s -X POST https://api.telegram.org/bot$API_TOKEN/sendMessage -d chat_id=$CHAT_ID -d text="$MESSAGE"