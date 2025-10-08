interface EmailTemplateProps {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface AutoReplyTemplateProps {
  name: string;
}

export function generateEmailTemplate({
  name,
  email,
  message,
}: EmailTemplateProps): string {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                  color: #333;
                  line-height: 1.6;
              }
              .container {
                  max-width: 600px;
                  margin: 30px auto;
                  padding: 20px;
                  background-color: #fff;
                  border-radius: 5px;
                  box-shadow: 0 0 10px rgba(0,0,0,0.1);
              }
              .logo-container {
                  text-align: center;
                  margin-bottom: 20px;
              }
              .logo {
                  max-width: 200px;
                  height: auto;
              }
              h1 {
                  color: #333;
                  text-align: center;
              }
              p {
                  margin-bottom: 15px;
              }
              .footer {
                  margin-top: 20px;
                  text-align: center;
                  font-size: 0.8em;
                  color: #777;
              }
              .message {
                  padding: 10px;
              }
              @media (max-width: 600px) {
                  .container {
                      padding: 10px;
                      margin: 15px auto;
                  }
                  .logo{
                      max-width: 150px;
                  }
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="logo-container">
                  <img src="https://ai.aceadvisors.org/images/Logo.png" alt="ACEIntelligenceLogo" width="200" style="max-width: 100%; height: auto;" />
              </div>
              <h1>New Contact Form Submission</h1>
              <div class="info">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
              </div>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
              <div class="footer">
                  <p>This is an automated message from your contact form.</p>
              </div>
          </div>
      </body>
      </html>
    `;
}

export function generateAutoReplyTemplate({
  name,
}: AutoReplyTemplateProps): string {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting ACE Advisors</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                  color: #333;
                  line-height: 1.6;
              }
              .container {
                  max-width: 600px;
                  margin: 30px auto;
                  padding: 20px;
                  background-color: #fff;
                  border-radius: 5px;
                  box-shadow: 0 0 10px rgba(0,0,0,0.1);
              }
              .logo-container {
                  text-align: center;
                  margin-bottom: 20px;
              }
              .logo {
                  max-width: 200px;
                  height: auto;
              }
              h1 {
                  color: #333;
                  text-align: center;
              }
              p {
                  margin-bottom: 15px;
              }
              .footer {
                  margin-top: 20px;
                  text-align: center;
                  font-size: 0.8em;
                  color: #777;
              }
              .message {
                  padding: 10px;
              }
              @media (max-width: 600px) {
                  .container {
                      padding: 10px;
                      margin: 15px auto;
                  }
                  .logo{
                      max-width: 150px;
                  }
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="logo-container">
                  <img src="https://ai.aceadvisors.org/images/Logo.png" alt="ACEIntelligenceLogo" width="200" style="max-width: 100%; height: auto;" />
              </div>
              <h1>Thank You for Contacting Us</h1>
              <div class="message">
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to ACE Intelligence. We have received your message and will get back to you shortly.</p>
                <p>We appreciate your interest in our services.</p>
              </div>
              <div class="footer">
                <p>This is an automated response. Please do not reply to this email.</p>
              </div>
          </div>
      </body>
      </html>
    `;
}