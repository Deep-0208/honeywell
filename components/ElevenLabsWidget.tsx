'use client';

import { useConversation, ConversationProvider } from '@elevenlabs/react';
import { useState, useCallback } from 'react';
import { Mic, Loader2, Volume2, X, Sparkles } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

function ElevenLabsWidgetInner() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const conversation = useConversation({
    onConnect: () => console.log('Connected to ElevenLabs'),
    onDisconnect: () => console.log('Disconnected'),
    onMessage: (message) => console.log('Message:', message),
    onError: (error) => console.error('Error:', error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);

      // Start the conversation session
      await conversation.startSession({
        agentId: 'agent_7401kvz8dw6cevdv6fqaym6bgtz5',
      });
    } catch (error) {
      console.error('Failed to start conversation:', error);
      setHasPermission(false);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const isConnected = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4">
      {isOpen && (
        <div className="w-80 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.4)] text-white overflow-hidden relative transition-all duration-300 ease-out transform origin-bottom-right">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500/20 p-2 rounded-full border border-blue-500/30">
                <Sparkles className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg tracking-tight">AI Assistant</h3>
            </div>
            <button 
              onClick={() => {
                if (isConnected) stopConversation();
                setIsOpen(false);
              }}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
          </div>

          {/* Status and Visualizer Area */}
          <div className="flex flex-col items-center justify-center py-6 min-h-[180px]">
            {isConnecting && (
              <div className="flex flex-col items-center gap-4 text-blue-400">
                <Loader2 className="w-10 h-10 animate-spin" />
                <p className="text-sm font-medium animate-pulse">Connecting to AI...</p>
              </div>
            )}
            
            {isConnected && (
              <div className="flex flex-col items-center gap-8 w-full">
                {/* Audio visualizer */}
                <div className="relative flex items-center justify-center w-28 h-28 mt-4">
                  <div className={twMerge(
                    "absolute inset-0 rounded-full bg-blue-500/20 transition-all duration-500",
                    conversation.isSpeaking ? "scale-[1.6] opacity-40 animate-ping" : "scale-100 opacity-0"
                  )} />
                  <div className={twMerge(
                    "absolute inset-0 rounded-full bg-blue-400/30 transition-all duration-300",
                    conversation.isSpeaking ? "scale-[1.3] opacity-80 animate-pulse" : "scale-100 opacity-0"
                  )} />
                  <div className="relative bg-gradient-to-b from-blue-500 to-blue-700 rounded-full p-6 shadow-lg shadow-blue-500/40 z-10">
                    <Volume2 className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg font-medium text-white mb-1">
                    {conversation.isSpeaking ? 'AI is speaking' : 'Listening...'}
                  </p>
                  <p className="text-sm text-gray-400">
                    {conversation.isSpeaking ? 'Wait for your turn' : 'Go ahead, speak'}
                  </p>
                </div>

                <button
                  onClick={stopConversation}
                  className="mt-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors border border-white/10"
                >
                  End Call
                </button>
              </div>
            )}

            {!isConnected && !isConnecting && (
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Hi! I'm your AI assistant. I can help you with Honeywell hydraulic products, services, and support.
                </p>
                <button
                  onClick={startConversation}
                  className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
                >
                  <Mic className="w-5 h-5" />
                  Start Conversation
                </button>
                {hasPermission === false && (
                  <p className="text-red-400 text-xs mt-4">Microphone access denied. Please allow in browser settings.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-b from-gray-800 to-black border border-white/10 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-ping opacity-20" />
          <Sparkles className="w-7 h-7 text-white group-hover:text-blue-400 transition-colors z-10" />
        </button>
      )}
    </div>
  );
}

export function ElevenLabsWidget() {
  return (
    <ConversationProvider>
      <ElevenLabsWidgetInner />
    </ConversationProvider>
  );
}
