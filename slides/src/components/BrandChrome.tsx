import { MapPin, Phone, Mail } from 'lucide-react';

/**
 * iPMAC brand chrome — header & footer used on every "content" slide.
 * Replicates the original iPMAC PDF identity (red ribbon footer, IIBA badge header).
 */

export function BrandHeader({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <div
      className={`relative h-[120px] flex items-center px-16 ${
        variant === 'dark' ? 'bg-neutral-900' : 'bg-white'
      }`}
    >
      <img src="/brand/logo.png" alt="iPMAC" className="h-16 w-auto" />
      <div
        className={`ml-6 pl-6 border-l-2 ${
          variant === 'dark' ? 'border-white/20' : 'border-neutral-200'
        }`}
      >
        <div
          className={`text-[20px] font-bold tracking-wide ${
            variant === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}
        >
          CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN IPMAC
        </div>
        <div
          className={`text-[20px] mt-1 ${
            variant === 'dark' ? 'text-white/60' : 'text-neutral-500'
          }`}
        >
          Khoá học Phân tích Nghiệp vụ Cơ bản — Ready for BA
        </div>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="text-right leading-tight">
          <div
            className={`text-[20px] uppercase tracking-[0.2em] font-bold ${
              variant === 'dark' ? 'text-white/50' : 'text-neutral-400'
            }`}
          >
            Endorsed by
          </div>
          <div
            className={`text-2xl font-black tabular-nums ${
              variant === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}
          >
            IIBA<span className="text-brand-600">®</span>
          </div>
        </div>
        <div className="border-l-2 border-brand-600 pl-3 text-left">
          <div className="text-[20px] font-bold text-brand-700 leading-tight">ENDORSED</div>
          <div className="text-[20px] font-bold text-brand-700 leading-tight">EDUCATION</div>
          <div className="text-[20px] font-bold text-brand-700 leading-tight">PROVIDER</div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-1.5 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
    </div>
  );
}

export function BrandFooter({
  pageNumber,
  totalPages,
}: {
  pageNumber?: number;
  totalPages?: number;
}) {
  return (
    <div className="relative h-[90px] overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-600"
        style={{ clipPath: 'polygon(0 0, 86% 0, 92% 100%, 0 100%)' }}
      />
      <div
        className="absolute inset-0 bg-neutral-900"
        style={{ clipPath: 'polygon(86% 0, 100% 0, 100% 100%, 92% 100%)' }}
      />
      <div className="absolute right-[7%] top-0 bottom-0 w-[8%] bg-white/5" />

      <div className="relative h-full flex items-center px-16 gap-12 text-white text-[20px]">
        <div className="flex items-center gap-3">
          <MapPin size={20} className="text-white shrink-0" strokeWidth={2.2} />
          <div className="leading-snug">
            <div>Tầng 6, Toà nhà Kim Ánh,</div>
            <div>ngõ 78 Duy Tân, Cầu Giấy, Hà Nội</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={20} className="text-white shrink-0" strokeWidth={2.2} />
          <div className="font-semibold">024 3771 0668</div>
        </div>
        <div className="flex items-center gap-3">
          <Mail size={20} className="text-white shrink-0" strokeWidth={2.2} />
          <div className="font-semibold">info@ipmac.vn</div>
        </div>

        {pageNumber !== undefined && (
          <div className="ml-auto pr-6 text-white/90 text-[20px] font-semibold tabular-nums">
            {pageNumber}
            {totalPages !== undefined ? ` / ${totalPages}` : ''}
          </div>
        )}
      </div>
    </div>
  );
}
