import React, { useState } from 'react';
import { Box, IconButton, Paper, Typography, TextField, Button, List, ListItem } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! Welcome to z-mart. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      // 2. Placeholder for your Backend API call
      // const response = await axios.post('/api/chatbot', { message: input });
      // const botReply = response.data.reply;

      // Mock Bot Reply for testing:
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I'm processing your request regarding our fashion collection!", isBot: true }]);
      }, 1000);

    } catch (error) {
      console.error("Chatbot Error:", error);
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 30, right: 30, zIndex: 1000 }}>
      {/* Floating Action Button */}
      {!isOpen && (
        <IconButton onClick={() => setIsOpen(true)} sx={{ bgcolor: '#380672', color: '#fff', width: 60, height: 60, '&:hover': { bgcolor: '#b91c1c' } }}>
          <ChatIcon />
        </IconButton>
      )}

      {isOpen && (
        <Paper sx={{ width: 320, height: 450, display: 'flex', flexDirection: 'column', boxShadow: '0px 4px 20px rgba(0,0,0,0.15)', borderRadius: '12px', overflow: 'hidden' }}>
          {/* Header */}
          <Box sx={{ bgcolor: '#1a1a1a', color: '#fff', p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>z-mart Assistant</Typography>
            <IconButton onClick={() => setIsOpen(false)} size="small" sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ flex: 1, overflowY: 'auto', p: 2, bgcolor: '#f9f9f9' }}>
            {messages.map((msg, index) => (
              <ListItem key={index} sx={{ justifyContent: msg.isBot ? 'flex-start' : 'flex-end', p: 0, mb: 1.5 }}>
                <Box sx={{ bgcolor: msg.isBot ? '#e0e0e0' : '#1a1a1a', color: msg.isBot ? '#000' : '#fff', px: 2, py: 1, borderRadius: msg.isBot ? '12px 12px 12px 0px' : '12px 12px 0px 12px', maxWidth: '75%', fontSize: '0.85rem' }}>
                  {msg.text}
                </Box>
              </ListItem>
            ))}
          </List>

          <Box sx={{ p: 1.5, display: 'flex', gap: 1, borderTop: '1px solid #eee' }}>
            <TextField size="small" fullWidth placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} />
            <Button variant="contained" onClick={handleSend} sx={{ bgcolor: '#1a1a1a' }}>Send</Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
}