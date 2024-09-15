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

## 3. Set Up Your Bot on Heroku (Easy Way without CLI)

1. **Connect Your GitHub Account to Heroku**:
   - In your Heroku Dashboard, go to the "Deploy" tab of your app.
   - Under "Deployment method", select "GitHub" and click "Connect to GitHub".
   - Authorize Heroku to access your GitHub account if prompted.
   - Search for your repository by name and click "Connect".

2. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/) and log in or sign up if you don’t have an account.
   - Click the "+" icon in the top right corner and select "New repository".
   - Give your repository a name and description, choose public or private, and click "Create repository".

3. **Add Your Code to the Repository Using GitHub’s Web Interface**:
   - Navigate to your newly created GitHub repository.
   - Click on the "Add file" button and select "Upload files".
   - Drag and drop your project files into the upload area or click "Choose your files" to select them from your computer.
   - After uploading your files, scroll down and click "Commit changes" to save them to the repository.

4. **Deploy Your Code Using GitHub**:
   - Go back to the "Deploy" tab on Heroku.
   - Under "Automatic deploys", click "Enable Automatic Deploys".
   - Choose the branch you want to deploy (usually `master` or `main`) and click "Deploy Branch".
   - Heroku will automatically deploy your code from GitHub. You can check the progress in the "Activity" tab.

5. **Add Your Discord Bot Token**:
   - In your Heroku Dashboard, go to the "Settings" tab of your app.
   - Click "Reveal Config Vars" under the "Config Vars" section.
   - Add a new variable with the key `DISCORD_TOKEN` and paste your Discord bot token as the value.
   - Click "Add" to save it.

## 4. Deploy Your Code on Heroku

1. **Deploy Your Code**:
   - Since you've enabled automatic deploys in the previous steps, any new commits to your GitHub repository will automatically deploy to Heroku.
   - If you need to manually deploy, you can click the "Deploy" button under the "Manual deploy" section in the "Deploy" tab.

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
