import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import chatbotData from '../data/chatbotData.json';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isScrollSoundEnabled, setIsScrollSoundEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastScrollTimeRef = useRef<number>(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Use global audio functions from AudioManager
  const playScrollSound = async (direction: 'up' | 'down', intensity: number = 0.3, speed: number = 1) => {
    if (!isScrollSoundEnabled) return;
    
    if (typeof window !== 'undefined' && (window as any).playScrollSound) {
      try {
        await (window as any).playScrollSound(direction, intensity, speed);
      } catch (error) {
        console.warn('Scroll sound failed:', error);
      }
    }
  };

  // Handle scroll events (enhanced with speed detection)
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;
    
    // Calculate scroll intensity and speed
    const scrollProgress = scrollTop / (scrollHeight - clientHeight);
    const intensity = Math.min(scrollProgress * 1.5, 1);
    
    // Determine scroll direction and speed
    const direction = scrollTop > lastScrollTimeRef.current ? 'down' : 'up';
    const scrollDelta = Math.abs(scrollTop - lastScrollTimeRef.current);
    const speed = Math.min(scrollDelta / 10, 3); // Normalize speed
    
    lastScrollTimeRef.current = scrollTop;
    
    // Play sound with direction, intensity, and speed
    if (scrollTop > 0) {
      playScrollSound(direction, intensity, speed);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !messages.length) {
      const welcomeMessage = chatbotData.greetings[Math.floor(Math.random() * chatbotData.greetings.length)];
      addMessage(welcomeMessage, false);
    }
  }, [isOpen]);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const findBestResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (chatbotData.responses.portfolio?.projects) {
      for (const [, projectData] of Object.entries(chatbotData.responses.portfolio.projects)) {
        const hasKeyword = projectData.keywords.some(keyword =>
          input.includes(keyword.toLowerCase())
        );

        if (hasKeyword) {
          return projectData.response;
        }
      }
    }

    for (const [key, data] of Object.entries(chatbotData.responses)) {
      if (key === 'default' || key === 'portfolio') continue;

      const hasKeyword = data.keywords.some(keyword =>
        input.includes(keyword.toLowerCase())
      );

      if (hasKeyword) {
        return data.response;
      }
    }

    if (chatbotData.responses.portfolio) {
      const hasPortfolioKeyword = chatbotData.responses.portfolio.keywords.some(keyword =>
        input.includes(keyword.toLowerCase())
      );

      if (hasPortfolioKeyword) {
        return chatbotData.responses.portfolio.response;
      }
    }

    return chatbotData.responses.default.response;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, true);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestResponse(userMessage);
      addMessage(response, false);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    addMessage(question, true);
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestResponse(question);
      addMessage(response, false);
      setIsTyping(false);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-vivid-orange hover:bg-vivid-orange/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-vivid-orange rounded-full flex items-center justify-center animate-pulse border-2 border-white">
            <span className="text-xs font-bold text-white">1</span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed z-50 transition-all duration-300 ${
      isMinimized
        ? 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-80 h-16'
        : 'bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-96 h-[100dvh] sm:h-[600px] sm:max-h-[calc(100vh-3rem)]'
    }`}>
       <div className="bg-black h-full flex flex-col shadow-2xl border border-white/10 sm:rounded-2xl overflow-hidden">
         <div className={`flex items-center justify-between bg-black transition-all duration-300 ${
           isMinimized 
             ? 'p-3 h-16' 
             : 'p-3 sm:p-4 border-b border-white/10'
         }`}>
           <div className="flex items-center gap-2 sm:gap-3">
             <div className={`rounded-full bg-vivid-orange flex items-center justify-center ${
               isMinimized 
                 ? 'w-8 h-8' 
                 : 'w-8 h-8 sm:w-10 sm:h-10'
             }`}>
               <Bot className={`text-white ${
                 isMinimized 
                   ? 'w-4 h-4' 
                   : 'w-4 h-4 sm:w-5 sm:h-5'
               }`} />
             </div>
             <div className={isMinimized ? 'hidden sm:block' : ''}>
               <h3 className={`font-bold text-white tracking-wide ${
                 isMinimized 
                   ? 'text-sm' 
                   : 'text-base sm:text-lg md:text-xl'
               }`}>
                 {isMinimized ? 'RivuletIQ' : 'RivuletIQ Assistant'}
               </h3>
               {!isMinimized && (
                 <p className="text-xs sm:text-sm text-neutral-400 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-vivid-orange rounded-full animate-pulse"></span>
                   Online
                 </p>
               )}
             </div>
           </div>
             <div className="flex items-center gap-1 sm:gap-2">
               {!isMinimized && (
                 <button
                   onClick={() => setIsScrollSoundEnabled(!isScrollSoundEnabled)}
                   className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                     isScrollSoundEnabled 
                       ? 'hover:bg-white/10 text-vivid-orange' 
                       : 'hover:bg-white/10 text-neutral-400'
                   }`}
                   aria-label={isScrollSoundEnabled ? "Disable scroll sounds" : "Enable scroll sounds"}
                   title={isScrollSoundEnabled ? "Scroll Symphony ON" : "Scroll Symphony OFF"}
                 >
                   <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                   </svg>
                 </button>
               )}
               <button
                 onClick={() => setIsMinimized(!isMinimized)}
                 className={`rounded-lg transition-colors ${
                   isMinimized 
                     ? 'p-2 hover:bg-white/10' 
                     : 'p-1.5 sm:p-2 hover:bg-white/10'
                 }`}
                 aria-label={isMinimized ? "Maximize" : "Minimize"}
               >
                 {isMinimized ? (
                   <Maximize2 className={`text-neutral-400 ${
                     isMinimized 
                       ? 'w-4 h-4' 
                       : 'w-3.5 h-3.5 sm:w-4 sm:h-4'
                   }`} />
                 ) : (
                   <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400" />
                 )}
               </button>
               <button
                 onClick={() => setIsOpen(false)}
                 className={`rounded-lg transition-colors ${
                   isMinimized 
                     ? 'p-2 hover:bg-white/10' 
                     : 'p-1.5 sm:p-2 hover:bg-white/10'
                 }`}
                 aria-label="Close"
               >
                 <X className={`text-neutral-400 ${
                   isMinimized 
                     ? 'w-4 h-4' 
                     : 'w-3.5 h-3.5 sm:w-4 sm:h-4'
                 }`} />
               </button>
             </div>
        </div>

        {!isMinimized && (
          <>
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-black"
              onScroll={handleScroll}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  <div className={`flex items-start gap-3 max-w-[85%] sm:max-w-[75%] ${
                    message.isUser ? 'flex-row-reverse' : 'flex-row'
                  }`}>
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                       message.isUser
                         ? 'bg-vivid-orange'
                         : 'bg-vivid-orange/20'
                     }`}>
                       {message.isUser ? (
                         <User className="w-4 h-4 text-white" />
                       ) : (
                         <Bot className="w-4 h-4 text-vivid-orange" />
                       )}
                     </div>
                     <div className={`px-4 py-2.5 rounded-2xl ${
                       message.isUser
                         ? 'bg-vivid-orange text-white rounded-br-sm'
                         : 'bg-white/10 text-neutral-200 border border-white/10 rounded-bl-sm'
                     }`}>
                      <p className="text-sm leading-relaxed break-words">{message.text}</p>
                      <p className={`text-xs mt-1.5 ${
                        message.isUser ? 'text-white/70' : 'text-neutral-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

               {isTyping && (
                 <div className="flex justify-start animate-fadeIn">
                   <div className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-full bg-vivid-orange/20 flex items-center justify-center">
                       <Bot className="w-4 h-4 text-vivid-orange" />
                     </div>
                     <div className="bg-white/10 border border-white/10 px-4 py-2.5 rounded-2xl rounded-bl-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-vivid-orange rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-vivid-orange rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-vivid-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

              {messages.length <= 1 && (
                <div className="px-4 pb-3 border-t border-white/10 pt-3">
                  <p className="text-xs text-neutral-400 mb-3">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {['About RivuletIQ', 'Our Services', 'Portfolio', 'Contact'].map((question) => (
                      <button
                        key={question}
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs px-3 py-1.5 bg-vivid-orange/10 text-vivid-orange rounded-full hover:bg-vivid-orange/20 transition-colors border border-vivid-orange/20"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            <div className="p-4 border-t border-white/10 bg-black">
              <div className="flex items-end gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none focus:ring-2 focus:ring-vivid-orange/20 transition-all text-white placeholder-neutral-400"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="p-2.5 bg-vivid-orange hover:bg-vivid-orange/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all flex-shrink-0 shadow-lg shadow-vivid-orange/20"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
