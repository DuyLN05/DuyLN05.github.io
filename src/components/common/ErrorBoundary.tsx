import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[#070A13] text-[#F4F7FB] font-mono">
          <div className="max-w-md w-full p-6 sm:p-8 rounded-xl border border-red-500/40 bg-[#0c1324] text-center space-y-5 shadow-2xl">
            <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 mx-auto flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-bold text-red-400">
                SYSTEM_GLITCH_DETECTED
              </h1>
              <p className="text-xs text-slate-400 leading-relaxed">
                Đã xảy ra sự cố hiển thị trong phiên làm việc hiện tại. Vui lòng bấm khởi động lại giao diện hoặc xóa bộ nhớ đệm (Cache).
              </p>
            </div>
            {this.state.error && (
              <div className="p-3 rounded bg-[#070A13] border border-red-500/20 text-left text-[11px] text-red-300 font-mono overflow-x-auto max-h-28">
                {this.state.error.message}
              </div>
            )}
            <button
              onClick={() => {
                localStorage.removeItem('duyln05-theme');
                window.location.reload();
              }}
              type="button"
              className="w-full py-2.5 rounded-lg text-xs font-bold bg-[#38E8FF] text-black hover:bg-cyan-300 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Khởi động lại (Reboot UI)</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
