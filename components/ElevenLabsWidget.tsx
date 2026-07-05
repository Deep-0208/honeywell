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
        <div className="w-[340px] bg-white/90 backdrop-blur-3xl border border-white/60 rounded-[2rem] p-7 shadow-[0_20px_60px_-15px_rgba(13,27,92,0.15)] ring-1 ring-honeywell-navy/[0.05] text-honeywell-navy overflow-hidden relative origin-bottom-right animate-in fade-in zoom-in-95 slide-in-from-bottom-8 duration-500 ease-out fill-mode-both">

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
          className="group relative outline-none [--sz-btn:68px] [--space:calc(var(--sz-btn)/5.5)] [--gen-sz:calc(var(--space)*2)] [--sz-text:calc(var(--sz-btn)-var(--gen-sz))] h-[var(--sz-btn)] w-[var(--sz-btn)] border border-solid border-transparent rounded-[1.5rem] flex items-center justify-center aspect-square cursor-pointer transition-transform duration-200 hover:-translate-y-1 active:scale-[0.95] bg-[linear-gradient(45deg,#0a154a,#1e3a8a)] shadow-[0_12px_40px_-10px_rgba(10,21,74,0.4),rgba(255,255,255,0.15)_0_2px_6px_0_inset] animate-in fade-in zoom-in slide-in-from-bottom-4 duration-500 ease-out"
        >
          <svg
            className="animate-pulse absolute z-10 overflow-visible transition-all duration-300 text-honeywell-red group-hover:text-white top-[calc(var(--sz-text)/7)] left-[calc(var(--sz-text)/7)] h-[var(--gen-sz)] w-[var(--gen-sz)] group-hover:h-[var(--sz-text)] group-hover:w-[var(--sz-text)] group-hover:left-[calc(var(--sz-text)/4)] group-hover:top-[calc(calc(var(--gen-sz))/2)]"
            stroke="none"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            />
          </svg>
          <span className="[font-size:var(--sz-text)] font-extrabold leading-none text-white transition-all duration-200 group-hover:opacity-0">
            AI
          </span>
          {/* Unread indicator dot */}
          <div className="absolute top-[2px] right-[2px] w-3 h-3 bg-honeywell-red rounded-full border-2 border-honeywell-navy shadow-sm z-20" />
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
