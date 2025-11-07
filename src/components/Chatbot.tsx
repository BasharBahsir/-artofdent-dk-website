'use client'

import { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, XMarkIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickPrompt = (promptText: string) => {
    setInput(promptText);
    // Automatically submit after a brief delay
    setTimeout(() => {
      const form = document.querySelector('form');
      if (form) {
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }, 100);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input };
    const currentInput = input; // Store the input before clearing it
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      console.log('Sending message to API:', currentInput);

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput, history }),
      });

      console.log('API Response status:', res.status);

      if (!res.ok) {
        let errorData;
        try {
          const errorText = await res.text();
          errorData = errorText ? JSON.parse(errorText) : { error: 'Empty response' };
        } catch (parseError) {
          console.error('Error parsing error response:', parseError);
          errorData = { error: 'Invalid error response' };
        }
        console.error('API Error:', errorData);
        throw new Error(`Server error: ${res.status} - ${errorData.error || 'Unknown error'}`);
      }

      const responseText = await res.text();
      console.log('Raw API response:', responseText);
      
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Error parsing response:', parseError);
        throw new Error('Invalid JSON response from server');
      }
      
      if (!data.text) {
        console.error('Invalid response structure:', data);
        throw new Error('Invalid response from server - no text field');
      }

      console.log('AI Response:', data.text);
      const modelMessage: Message = { role: 'model', text: data.text };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Failed to fetch chat response:', error);
      const errorMessage: Message = { 
        role: 'model', 
        text: 'Undskyld, noget gik galt med AI-assistenten. Kontakt os gerne direkte på telefon eller via kontaktformularen for hjælp.' 
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-700 text-white p-4 rounded-full shadow-lg hover:bg-primary-800 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
          aria-label="Åbn chat"
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200/50">
          {/* Header */}
          <div className="bg-gray-50 p-4 rounded-t-2xl border-b flex items-center gap-x-3">
            <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">AI-assistent på Artofdent</h3>
              <p className="text-xs text-gray-500">Svarer normalt med det samme</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50/20">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-800">Hej og velkommen til Artofdent! Jeg er din digitale assistent. Hvad kan jeg hjælpe dig med i dag?</p>
                </div>
              </div>
              {/* Quick prompt buttons - only show when no messages yet */}
              {messages.length === 0 && (
                <div className="space-y-2 mb-4">
                  <button
                    onClick={() => handleQuickPrompt('Jeg vil gerne booke tid til tandundersøgelse')}
                    className="w-full text-left bg-white border border-gray-200 hover:border-primary-700 hover:bg-primary-50 p-3 rounded-lg transition-all text-sm text-gray-700 hover:text-primary-700"
                  >
                    Book tid til tandundersøgelse
                  </button>
                  <button
                    onClick={() => handleQuickPrompt('Jeg har akut tandpine, hvor hurtigt kan I tage imod mig?')}
                    className="w-full text-left bg-white border border-gray-200 hover:border-primary-700 hover:bg-primary-50 p-3 rounded-lg transition-all text-sm text-gray-700 hover:text-primary-700"
                  >
                    Akut tandpine - har brug for hjælp hurtigt
                  </button>
                </div>
              )}
              
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-lg max-w-xs ${msg.role === 'user' ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/<strong>/g, '<strong class="font-semibold">').replace(/\n/g, '<br />') }} />
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Skriver...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="px-4 py-2 bg-gray-50 border-t">
            <p className="text-xs text-gray-400 text-center">
              Denne chat giver generel information og er ikke en professionel medicinsk vurdering.
            </p>
          </div>

          {/* Input */}
          <div className="p-4 bg-white rounded-b-2xl border-t">
            <form onSubmit={handleSendMessage} className="flex items-center gap-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Spørg mig om noget..."
                className="flex-1 w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary-700"
              />
              <button
                type="submit"
                className="p-3 bg-primary-700 text-white rounded-full hover:bg-primary-800 disabled:bg-gray-300 transition-colors"
                disabled={isLoading}
                aria-label="Send besked"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
