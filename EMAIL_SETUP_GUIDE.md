# 📧 Email Booking Setup Guide - Easy Steps

This guide will help you set up email notifications for your booking system so you receive an email at **basharbashir1st@gmail.com** whenever someone books an appointment.

---

## ✅ Step 1: Create the Environment File

1. **Open File Explorer**
2. **Navigate to** `C:\agent\artofdent-website`
3. **Right-click** in the folder (empty space)
4. Select **New** → **Text Document**
5. **Name it exactly**: `.env.local` (delete the `.txt` extension)
   - Windows might warn you about changing the extension - click **Yes**
   - If you don't see file extensions, go to **View** → **Show** → **File name extensions**

---

## 🔐 Step 2: Get Your Gmail App Password

You need a special password from Gmail (NOT your regular Gmail password):

### A. Enable 2-Step Verification (if not already enabled)

1. Go to: https://myaccount.google.com/security
2. Sign in with **basharbashir1st@gmail.com**
3. Find **"2-Step Verification"**
4. Click **"Get Started"** and follow the steps
5. This is required before you can create an App Password

### B. Create App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Sign in with **basharbashir1st@gmail.com**
3. In the "Select app" dropdown, choose **"Other (Custom name)"**
4. Type: **"Artofdent Website"**
5. Click **"Generate"**
6. Google will show you a **16-character password** like: `abcd efgh ijkl mnop`
7. **COPY THIS PASSWORD** (you won't see it again!)

---

## ✏️ Step 3: Add Your Email Credentials

1. **Open the `.env.local` file** you created (right-click → Open With → Notepad)
2. **Copy and paste** this text into the file:

```
EMAIL_USER=basharbashir1st@gmail.com
EMAIL_PASS=your-16-character-app-password-here
```

3. **Replace** `your-16-character-app-password-here` with the password you copied from Google
   - Remove all spaces (so `abcd efgh ijkl mnop` becomes `abcdefghijklmnop`)
   
4. **Save the file** (Ctrl + S)
5. **Close Notepad**

### Example of what it should look like:
```
EMAIL_USER=basharbashir1st@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

---

## 🚀 Step 4: Restart Your Development Server

1. **Go to your terminal/command prompt** where the website is running
2. **Press** `Ctrl + C` to stop the server
3. **Type**: `npm run dev`
4. **Press Enter**
5. Wait for it to start (you'll see "Ready" or "Local: http://localhost:3000")

---

## 🧪 Step 5: Test the Booking Form

1. **Open your browser** and go to: http://localhost:3000/boka-tid
2. **Fill out the form** with test information:
   - Choose a clinic
   - Enter a name, phone, email
   - Select a treatment
   - Click **"Skicka bokningsförfrågan"**
3. **Check your email** at basharbashir1st@gmail.com
4. You should receive an email with all the booking details!

---

## ❓ Troubleshooting

### Problem: "Authentication failed"
- Make sure you used the **App Password** (not your regular Gmail password)
- Check that you removed all spaces from the App Password
- Verify the email is exactly: `basharbashir1st@gmail.com`

### Problem: ".env.local file not working"
- Make sure the file is named exactly `.env.local` (with a dot at the start)
- Make sure it's in the root folder: `C:\agent\artofdent-website\.env.local`
- Make sure there are no extra spaces or quotes in the file

### Problem: "Still not receiving emails"
- Check your Spam/Junk folder in Gmail
- Make sure 2-Step Verification is enabled on your Google account
- Try creating a new App Password

---

## 📋 What the Email Will Look Like

When someone books an appointment, you'll receive an email with:

- **Patient Information**: Name, Phone, Email
- **Booking Details**: Clinic, Address, Treatment type
- **Preferred Date & Time**: When they want to come
- **Message**: Any special requests from the patient

---

## 🎉 You're Done!

Once you complete these steps, every booking from your website will automatically send an email to **basharbashir1st@gmail.com**

Need help? The error messages in your terminal/browser will guide you if something goes wrong.

---

## 🔒 Security Note

**NEVER share your `.env.local` file or App Password with anyone!**
This file is already protected and won't be uploaded to GitHub.
