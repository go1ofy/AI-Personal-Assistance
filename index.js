const express = require('express');
const app = express();
app.use(express.json());

app.post('/ai', (req, res) => {
  const { message } = req.body || {};
  // Replace this with your AI call (OpenAI etc.) later
  res.json({ reply: `Server received: ${message || '(no message)'}` });
});

app.get('/', (req, res) => res.send('MCP server is live!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
