import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, List, message } from 'antd';

const { TextArea } = Input;

const Chatbot = ({ person, questions }) => {
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) {
      message.warning('Please enter a message.');
      return;
    }

    const newMessage = { role: 'user', content: input };
    setConversation([...conversation, newMessage]);
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/chat-completion', {
        messages: [...conversation, newMessage],
      });

      const botResponse = { role: 'assistant', content: response.data.text };
      setConversation([...conversation, newMessage, botResponse]);
    } catch (error) {
      console.error('Error fetching response from server:', error.response ? error.response.data : error.message);
      message.error('Failed to fetch response.');
    } finally {
      setInput('');
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-md">
      <h2 className="text-lg font-bold mb-4">{`Chat with ${person}`}</h2>
      <List
        className="mb-4"
        bordered
        dataSource={questions}
        renderItem={(question) => (
          <List.Item onClick={() => setInput(question)} className="cursor-pointer hover:bg-gray-100">
            {question}
          </List.Item>
        )}
      />
      <div className="mb-4">
        <TextArea
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
        />
      </div>
      <Button type="primary" onClick={handleSend} loading={loading} block>
        Send
      </Button>
      <div className="mt-4">
        {conversation.length > 0 ? (
          conversation.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <p className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                {msg.content}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No conversation yet</div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;




