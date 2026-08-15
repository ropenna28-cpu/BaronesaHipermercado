export default function VinylDisc() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div className="absolute inset-0 animate-[spin_16s_linear_infinite] motion-reduce:animate-none rounded-disc bg-[radial-gradient(circle_at_center,#26365A_0%,#0F1728_28%,#182339_29%,#0F1728_46%,#182339_47%,#0F1728_64%,#182339_65%,#0F1728_82%,#182339_100%)] shadow-2xl shadow-ink-dark/60">
        <div className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-disc bg-gold shadow-inner">
          <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-disc border border-ink/20 text-center">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-ink/80">
              Baronesa
            </span>
            <span className="font-body text-[8px] uppercase tracking-widest text-ink/60">
              Desde 1998
            </span>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-disc bg-ink-dark" />
      </div>
      <div className="absolute -inset-6 -z-10 rounded-disc bg-gold/10 blur-3xl" />
    </div>
  );
}
