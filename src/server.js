import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/chat-completion', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        ...messages,
      ],
    });

    const responseText = response.data.choices[0].message.content.trim();
    res.json({ text: responseText });
  } catch (error) {
    console.error('Error communicating with OpenAI API:', error.response ? error.response.data : error.message);
    res.status(500).send('Error communicating with OpenAI API');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





