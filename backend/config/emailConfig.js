const nodemailer = require('nodemailer');

let transporter = null;

// Initialize transporter on first use
const initializeTransporter = async () => {
  if (transporter) return transporter;
  
  try {
    console.log('📧 Initializing email service...');
    
    const hasSMTP = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (hasSMTP) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      console.log('✅ Email service initialized with SMTP configuration');
    } else {
      const testAccount = await nodemailer.createTestAccount();

      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });

      console.log('✅ Email service initialized with Ethereal Test Account');
      console.log(`📧 Test Email Account: ${testAccount.user}`);
    }
    
    return transporter;
  } catch (error) {
    console.error('❌ Error initializing email service:', error.message);
    throw error;
  }
};

const sendOTPEmail = async (email, otp) => {
  try {
    // Initialize transporter if not already done
    const mailTransporter = await initializeTransporter();

    const mailOptions = {
      from: 'Megamart <noreply@yopmail.com>',
      to: email,
      subject: 'Your Megamart OTP - Valid for 10 minutes',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1a1a1a; margin-bottom: 20px;">Welcome to Megamart!</h2>
            
            <p style="color: #555555; font-size: 16px; margin-bottom: 20px;">Your One-Time Password (OTP) is:</p>
            
            <div style="background-color: #000000; color: #ffffff; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
              <h1 style="letter-spacing: 5px; margin: 0; font-size: 32px;">${otp}</h1>
            </div>
            
            <p style="color: #666666; font-size: 14px; margin-bottom: 20px;">
              This OTP is valid for <strong>10 minutes</strong> only. Please do not share this code with anyone.
            </p>
            
            <p style="color: #666666; font-size: 14px; margin-bottom: 30px;">
              If you did not request this OTP, please ignore this email.
            </p>
            
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
            
            <p style="color: #999999; font-size: 12px; text-align: center;">
              © 2024 Megamart. All rights reserved.
            </p>
          </div>
        </div>
      `
    };

    const info = await mailTransporter.sendMail(mailOptions);
    
    console.log('✅ OTP Email sent successfully!');
    console.log(`📧 To: ${email}`);
    console.log(`🔐 OTP: ${otp}`);
    
    // Log preview URL for test account
    if (info.testMessageUrl) {
      console.log('📬 Preview URL (check this in browser):', nodemailer.getTestMessageUrl(info));
    }
    
    return { success: true, message: 'OTP sent successfully' };
  } catch (error) {
    console.error('❌ Error sending OTP email:', error.message);
    throw new Error('Failed to send OTP email: ' + error.message);
  }
};

module.exports = { sendOTPEmail, initializeTransporter };
