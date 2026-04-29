/**
 * iPMAC text-based brand mark — used on dark backgrounds where the PNG logo
 * (which is multi-color: black "iP" + red "MAC") loses contrast.
 */
export function BrandMarkOnDark({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
  } as const;
  return (
    <div className={`font-display font-black tracking-tight ${sizes[size]} leading-none flex items-baseline`}>
      <span className="text-white">iP</span>
      <span className="text-brand-500">MAC</span>
      <span className="text-brand-500 ml-0.5 text-[0.6em] translate-y-[-0.4em]">●</span>
    </div>
  );
}
