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
        <div className="min-h-screen flex items-center justify-center p-4 bg-[#06182B] text-[#EAF6FB] font-mono">
          <div className="max-w-md w-full p-6 sm:p-8 rounded-xl border border-[#FF9484]/40 bg-[#0A2540] text-center space-y-5 shadow-2xl">
            <div className="w-14 h-14 rounded-xl bg-[#FF9484]/10 border border-[#FF9484]/30 text-[#FF9484] mx-auto flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-bold text-[#FF9484]">
                BIỂN ĐỘNG — CÓ SỰ CỐ
              </h1>
              <p className="text-xs text-[#9CC2D6] leading-relaxed">
                Đã xảy ra sự cố hiển thị trong phiên làm việc hiện tại. Vui lòng bấm khởi động lại giao diện hoặc xóa bộ nhớ đệm (Cache).
              </p>
            </div>
            {this.state.error && (
              <div className="p-3 rounded bg-[#06182B] border border-[#FF9484]/20 text-left text-[11px] text-[#FFC0B5] font-mono overflow-x-auto max-h-28">
                {this.state.error.message}
              </div>
            )}
            <button
              onClick={() => {
                localStorage.removeItem('duyln05-theme');
                window.location.reload();
              }}
              type="button"
              className="w-full py-2.5 rounded-lg text-xs font-bold bg-[#43D3E6] text-[#04202F] hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Tải lại giao diện</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
