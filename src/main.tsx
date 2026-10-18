import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Commodore 110 Exception Caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#111317] text-amber-400 p-8 font-mono flex flex-col items-center justify-center">
          <div className="max-w-xl w-full bg-[#1b1010] border-2 border-red-700/80 rounded-xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2 border-b border-red-900/60 pb-3">
              <span className="text-red-500 font-bold text-xl">*** COMMODORE 110 HARDWARE FAULT ***</span>
            </div>
            <p className="text-sm text-slate-300">
              The Cellular Automata mechanical pipeline encountered an unexpected state:
            </p>
            <div className="bg-[#0b0404] p-3 rounded border border-red-950 text-xs text-red-300 overflow-x-auto whitespace-pre-wrap font-mono">
              {this.state.error?.message || 'Unknown runtime error'}
            </div>
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={this.handleReset}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded cursor-pointer transition-colors shadow-[0_0_8px_rgba(245,158,11,0.4)]"
              >
                WARM REBOOT (RELOAD)
              </button>
              <span className="text-xs text-slate-500">READY.</span>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
} else {
  console.error('Fatal: #root container element not found in DOM.');
}
