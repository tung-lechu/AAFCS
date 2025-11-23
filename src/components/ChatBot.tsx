import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, MessageCircleQuestion } from 'lucide-react';
import { streamChatResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am the AAFCS Assistant. Ask me about our climate advocacy work, upcoming community events, or how you can get involved.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        const stream = await streamChatResponse(userMessage, history);
        
        let fullResponse = '';
        setMessages(prev => [...prev, { role: 'model', text: '' }]);

        for await (const chunk of stream) {
            const chunkText = chunk.text;
            if (chunkText) {
                fullResponse += chunkText;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = fullResponse;
                    return newMessages;
                });
            }
        }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the server right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 bg-brand-primary text-white rounded-full shadow-2xl hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircleQuestion className="w-6 h-6" />
        <span className="font-bold hidden md:inline">Ask Us</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-brand-secondary/20 flex flex-col max-h-[600px] h-[500px] overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-brand-primary p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                    <MessageCircleQuestion className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                    <h3 className="text-white font-bold text-sm">AAFCS Assistant</h3>
                    <span className="text-xs text-brand-accent flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></span>
                        Active Now
                    </span>
                </div>
            </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-light hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-light">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-brand-secondary text-white rounded-br-none shadow-md'
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="w-full pl-4 pr-12 py-3 bg-brand-light border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-sm text-slate-900 placeholder:text-slate-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};