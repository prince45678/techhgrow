import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 Welcome to TechHGrow. How can I help you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  const quickReplies = [
    "Tell me about your services",
    "I need a website",
    "What's your pricing?",
    "Book a consultation",
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("service") || lowerMessage.includes("what do you do")) {
      return "We specialize in Backend Engineering with Java & Node.js, Full-Stack Web Development with React, Custom CRM Solutions, API Development, and System Architecture. Would you like to know more about any specific service?";
    }
    if (lowerMessage.includes("website") || lowerMessage.includes("web")) {
      return "We build modern, scalable websites using React, Node.js, and Java. Our solutions are designed for performance and scalability. Would you like to schedule a call to discuss your project?";
    }
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("pricing")) {
      return "Our pricing depends on the project scope and requirements. We offer competitive rates and flexible engagement models. Let's schedule a call to discuss your specific needs and provide a custom quote!";
    }
    if (lowerMessage.includes("book") || lowerMessage.includes("call") || lowerMessage.includes("consultation")) {
      return "Great! You can book a consultation through our Contact page. Call us at +91 7042367611 or email info@techhgrow.com. We'd love to discuss your project!";
    }
    if (lowerMessage.includes("founder") || lowerMessage.includes("prince")) {
      return "TechHGrow was founded by Prince Khiyani, a Senior Backend Engineer with 5+ years of experience in Java and enterprise systems. He's passionate about building scalable solutions!";
    }
    return "Thanks for reaching out! For detailed discussions, I recommend booking a call with our team. You can reach us at +91 7042367611 or email info@techhgrow.com. Is there anything specific you'd like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
    handleSend();
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-foreground text-background p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow ${
          isOpen ? "hidden" : "flex"
        } items-center space-x-2`}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium text-sm">Need help?</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] glass-card rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-secondary p-4 flex items-center justify-between border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">TechHGrow Support</h3>
                  <p className="text-xs text-muted-foreground">Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      message.isBot
                        ? "bg-secondary text-foreground rounded-bl-md"
                        : "bg-accent text-accent-foreground rounded-br-md"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length < 3 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-secondary hover:bg-muted px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex space-x-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-secondary border-border"
                />
                <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
