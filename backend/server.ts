import * as express from 'express';
import * as nodemailer from 'nodemailer';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Replaces bodyParser.json()

// Root route to prevent "Cannot GET /"
app.get('/', (req, res) => {
  res.send('🚀 Server is running!');
});

// Check if environment variables exist
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('❌ Missing EMAIL_USER or EMAIL_PASS in .env file');
  process.exit(1); // Stop the server if credentials are missing
}

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send email to YOU (the website owner)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // ✅ Now emails go to the website owner (YOU)
      subject: `New Contact Form Submission: ${subject}`,
      text: `You received a message from:

      Name: ${name}
      Email: ${email}

      Message:
      ${message}
      `,
      html: `<p><strong>You received a new message:</strong></p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: '✅ Email sent successfully' });

  } catch (error: any) {
    console.error('❌ Error sending email:', error.message || error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
