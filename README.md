# How to Set Up Your Discord Bot on Heroku

This guide will help you set up a Discord bot and deploy it using Heroku. Follow these steps to get started!

## 1. Create Your Discord Bot

1. **Go to the Discord Developer Portal**:
   - Open your web browser and go to [Discord Developer Portal](https://discord.com/developers/applications).

2. **Create a New Application**:
   - Click the "New Application" button.
   - Give your application a name and click "Create".

3. **Create a Bot User**:
   - Select your application from the list.
   - Go to the "Bot" tab on the left sidebar.
   - Click "Add Bot" and then "Yes, do it!".
   - You’ll see a "Token" under the "TOKEN" section. Click "Copy" to copy your bot token. **Keep this token private!**

## 2. Create a Heroku App

1. **Sign Up for Heroku**:
   - If you don't have a Heroku account, sign up at [Heroku](https://signup.heroku.com/).

2. **Create a New App**:
   - Once logged in, go to your [Heroku Dashboard](https://dashboard.heroku.com/).
   - Click the "New" button and select "Create new app".
   - Enter a name for your app and choose a region.
   - Click "Create app".

## 3. Set Up Your Bot on Heroku

1. **Install the Heroku CLI** (if you haven’t already):
   - Download and install it from [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

2. **Log In to Heroku CLI**:
   - Open your terminal or command prompt.
   - Run `heroku login` and follow the prompts to log in.

3. **Add Your Discord Bot Token**:
   - In your Heroku Dashboard, go to the "Settings" tab of your app.
   - Click "Reveal Config Vars" under the "Config Vars" section.
   - Add a new variable with the key `DISCORD_TOKEN` and paste your Discord bot token as the value.
   - Click "Add" to save it.

## 4. Deploy Your Code on Heroku

1. **Prepare Your Code**:
   - Make sure your bot’s code is ready and you have a `Procfile` in the root of your project with the following content:
     ```
     worker: node your-bot-file.js
     ```

2. **Deploy Your Code**:
   - If you’re using Git, navigate to your project directory in the terminal.
   - Initialize a git repository if you haven't already:
     ```bash
     git init
     ```
   - Add your Heroku remote:
     ```bash
     heroku git:remote -a your-heroku-app-name
     ```
   - Add, commit, and push your code:
     ```bash
     git add .
     git commit -m "Initial commit"
     git push heroku master
     ```

## 5. Find Your Discord Channel ID

1. **Enable Developer Mode**:
   - Open Discord and go to User Settings (the gear icon).
   - Go to the "Advanced" tab and enable "Developer Mode".

2. **Get the Channel ID**:
   - Right-click on the channel you want to use for bot messages.
   - Select "Copy ID". This is your channel ID.

## Done!

Your Discord bot should now be live and running on Heroku. If you encounter any issues, check the Heroku logs for errors using:

```bash
heroku logs --tail
```
