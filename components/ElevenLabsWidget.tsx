'use client';

import { useConversation, ConversationProvider } from '@elevenlabs/react';
import { useState, useCallback } from 'react';
import { Mic, Loader2, X, Sparkles, AudioLines } from 'lucide-react';
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
        agentId: 'agent_2201kw1tqva6f8697azmfvd801fw',
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
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4 font-sans">
      {isOpen && (
        <div className="w-[340px] bg-white/90 backdrop-blur-3xl border border-white/60 rounded-[2rem] p-7 shadow-[0_20px_60px_-15px_rgba(13,27,92,0.15)] ring-1 ring-honeywell-navy/[0.05] text-honeywell-navy overflow-hidden relative transition-all duration-500 ease-out transform origin-bottom-right">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-honeywell-navy/10 p-2.5 rounded-2xl shadow-sm border border-honeywell-navy/20">
                <Sparkles className="w-4 h-4 text-honeywell-navy" strokeWidth={2.5} />
              </div>
              <h3 className="font-semibold text-lg tracking-tight text-honeywell-navy">AI Assistant</h3>
            </div>
            <button 
              onClick={() => {
                if (isConnected) stopConversation();
                setIsOpen(false);
              }}
              className="p-2 hover:bg-honeywell-navy/5 rounded-full transition-colors group"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-400 group-hover:text-honeywell-navy transition-colors" />
            </button>
          </div>

          {/* Status and Visualizer Area */}
          <div className="flex flex-col items-center justify-center py-4 min-h-[200px]">
            {isConnecting && (
              <div className="flex flex-col items-center gap-5 text-honeywell-navy">
                <Loader2 className="w-8 h-8 animate-spin text-honeywell-navy" />
                <p className="text-sm font-medium text-gray-500 tracking-wide uppercase text-[11px] letter-spacing-widest text-justify">Connecting securely...</p>
              </div>
            )}
            
            {isConnected && (
              <div className="flex flex-col items-center gap-10 w-full animate-in fade-in zoom-in duration-500">
                {/* Audio visualizer */}
                <div className="relative flex items-center justify-center w-32 h-32">
                  {/* Subtle outer ripples */}
                  <div className={twMerge(
                    "absolute inset-0 rounded-full bg-honeywell-navy/5 transition-all duration-700 ease-out",
                    conversation.isSpeaking ? "scale-[1.8] opacity-100" : "scale-100 opacity-0"
                  )} />
                  <div className={twMerge(
                    "absolute inset-0 rounded-full bg-honeywell-navy/10 transition-all duration-500 ease-out",
                    conversation.isSpeaking ? "scale-[1.4] opacity-100" : "scale-100 opacity-0"
                  )} />
                  
                  {/* Core Orb */}
                  <div className={twMerge(
                    "relative flex items-center justify-center w-20 h-20 rounded-full shadow-xl transition-all duration-300 z-10",
                    conversation.isSpeaking 
                      ? "bg-honeywell-navy shadow-honeywell-navy/30 scale-110" 
                      : "bg-white border border-gray-100 shadow-[0_8px_24px_-4px_rgba(13,27,92,0.12)] scale-100"
                  )}>
                    <AudioLines className={twMerge(
                      "w-8 h-8 transition-colors duration-300",
                      conversation.isSpeaking ? "text-white animate-pulse" : "text-honeywell-navy"
                    )} />
                  </div>
                </div>

                <div className="text-center space-y-1.5">
                  <p className="text-lg font-semibold text-honeywell-navy tracking-tight text-justify">
                    {conversation.isSpeaking ? 'Assistant is speaking' : 'Listening...'}
                  </p>
                  <p className="text-sm text-gray-500 font-medium text-justify">
                    {conversation.isSpeaking ? 'Please wait a moment' : 'Go ahead, ask a question'}
                  </p>
                </div>

                <button
                  onClick={stopConversation}
                  className="mt-2 group flex items-center justify-center gap-2 bg-gray-50 hover:bg-honeywell-navy/5 text-honeywell-navy px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 border border-gray-200 hover:border-honeywell-navy/20"
                >
                  End Conversation
                </button>
              </div>
            )}

            {!isConnected && !isConnecting && (
              <div className="text-center animate-in fade-in duration-500">
                <p className="text-gray-500 text-[15px] mb-8 leading-relaxed px-2 font-medium text-justify">
                  Experience our intelligent AI assistant. Ask questions about our hydraulic solutions and get real-time answers.
                </p>
                <button
                  onClick={startConversation}
                  className="group relative bg-honeywell-navy text-white hover:bg-brand-deepNavy px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-[0_8px_20px_rgba(13,27,92,0.25)] hover:shadow-[0_12px_25px_rgba(13,27,92,0.35)] hover:-translate-y-1 flex items-center gap-3 mx-auto overflow-hidden w-full justify-center"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <Mic className="w-5 h-5 relative z-10" />
                  <span className="relative z-10 tracking-wide">Start Conversation</span>
                </button>
                {hasPermission === false && (
                  <p className="text-red-500 text-xs mt-5 font-medium bg-red-50 py-2 px-3 rounded-lg border border-red-100 text-justify">
                    Microphone access is required.
                  </p>
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
          className="group relative flex items-center justify-center w-[68px] h-[68px] bg-white border border-gray-100 rounded-[1.5rem] shadow-[0_12px_40px_-10px_rgba(13,27,92,0.2)] hover:shadow-[0_20px_50px_-12px_rgba(13,27,92,0.25)] transition-all duration-500 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-honeywell-navy/5 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Sparkles className="w-7 h-7 text-honeywell-navy transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 z-10" strokeWidth={2.5} />
          
          {/* Unread indicator dot */}
          <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-honeywell-red rounded-full border-2 border-white shadow-sm" />
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
