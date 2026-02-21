# Premium Developer Portfolio

A modern, fully responsive, and highly customizable developer portfolio built with React (Vite), Tailwind CSS v4, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Dark mode by default, glassmorphism, and smooth animations.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.
- **Easy Customization**: All content is centralized in `src/data/content.js`.
- **Animations**: Powered by Framer Motion for a premium feel.
- **Clean Code**: Modular component structure.

## 🛠 Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Installation

1.  Clone the repository (or navigate to the project folder):
    
```
bash
    cd portfolio
    
```

2.  Install dependencies:
    
```
bash
    npm install
    
```

3.  Start the development server:
    
```
bash
    npm run dev
    
```

## 📝 Customization

1.  Open `src/data/content.js`.
2.  Update the `personalInfo`, `skills`, `experience`, `projects`, and other sections with your own data.
3.  The changes will reflect instantly.

## 🚀 Deployment (Vercel)

1.  Push your code to GitHub.
2.  Go to [Vercel](https://vercel.com/) and sign in.
3.  Click **"Add New Project"** and import your GitHub repository.
4.  Vercel will detect Vite automatically.
5.  Click **"Deploy"**.

## 🎨 Theme Customization

To change the primary colors, edit `src/index.css`:

```
css
@theme {
  --color-primary: #3b82f6; /* Change this */
  --color-secondary: #8b5cf6; /* Change this */
  /* ... */
}
```

## 📧 EmailJS Contact Form Setup (Gmail)

Follow these step-by-step instructions to receive messages from your portfolio contact form at faizalahamedj331@gmail.com.

### Step 1: Create an EmailJS Account
1. Open your browser and go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** button (top right)
3. Sign up with your Gmail account: **faizalahamedj331@gmail.com**
4. Complete the registration and verify your email if required

### Step 2: Create an Email Service (Gmail)
1. After logging in, you'll see the EmailJS dashboard
2. Click on **"Email Services"** in the left sidebar
3. Click the **"Add New Service"** button (blue button)
4. Select **"Gmail"** from the options
5. Click **"Connect Gmail Account"** or **"Connect Google Account"**
6. Sign in with your Gmail account: **faizalahamedj331@gmail.com**
7. Grant permission to EmailJS to send emails on your behalf
8. Give your service a name (e.g., "My Gmail") and click **"Create Service"**
9. **IMPORTANT**: Copy the **Service ID** shown (it will look like: `service_xxxxxxxx`)
10. Save this Service ID - you'll need it later

### Step 3: Create an Email Template
1. Click on **"Email Templates"** in the left sidebar
2. Click the **"Create New Template"** button (blue button)
3. You'll see an email editor. Delete the default content and paste this template:

```
{{from_name}} sent you a message:

{{message}}

---
Reply to: {{from_email}}
```

4. Click the **"Save"** button (top right)
5. **IMPORTANT**: Copy the **Template ID** shown (it will look like: `template_xxxxxxxx`)
6. Save this Template ID - you'll need it later

### Step 4: Get Your Public Key
1. Click on **"Account"** in the left sidebar (or your profile icon)
2. Scroll to the **"API Keys"** section
3. Copy your **"Public Key"** (it will look like: `xxxxxxxxxxxxxxxxxx`)
4. Save this Public Key - you'll need it later

### Step 5: Configure Your .env File
1. Open the `.env` file in your project folder (in VSCode or any text editor)
2. Replace the placeholder values with your actual credentials:

```
VITE_APP_EMAILJS_SERVICE_ID=service_xxxxxxxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
VITE_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxx
```

For example, it should look something like:
```
VITE_APP_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_APP_EMAILJS_TEMPLATE_ID=template_def456uvw
VITE_APP_EMAILJS_PUBLIC_KEY=xyz789abc012
```

3. Save the `.env` file

### Step 6: Test the Contact Form
1. Open your terminal and run:
```
npm run dev
```
2. Open your browser to the local URL shown (usually http://localhost:5173)
3. Scroll down to the **"Contact"** section
4. Fill in the form:
   - Name: Your name
   - Email: Your email address
   - Message: Test message
5. Click **"Send Message"**
6. You should see a success message
7. Check your Gmail inbox at https://mail.google.com/mail/u/0/#inbox for the test email!

### Troubleshooting
- If messages aren't sending, make sure your .env file is saved correctly
- Check the browser console (F12) for any error messages
- Verify all three credentials (Service ID, Template ID, Public Key) are correct in .env
- Make sure there are no extra spaces or quotes around the values in .env
