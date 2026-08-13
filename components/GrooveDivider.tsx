export default function GrooveDivider({
  label,
  tone = 'ink',
}: {
  label?: string;
  tone?: 'ink' | 'paper';
}) {
  const ring = tone === 'ink' ? 'border-ink/15' : 'border-paper/25';
  return (
    <div className="flex items-center gap-4 py-2" role="separator">
      <span className={`relative h-3 w-3 shrink-0 rounded-disc border ${ring}`}>
        <span className="absolute inset-[3px] rounded-disc bg-gold" />
      </span>
      <span className={`h-px flex-1 border-t border-dashed ${ring}`} />
      {label && (
        <span className="shrink-0 font-body text-xs uppercase tracking-[0.2em] text-ink/50">
          {label}
        </span>
      )}
      <span className={`h-px flex-1 border-t border-dashed ${ring}`} />
      <span className={`relative h-3 w-3 shrink-0 rounded-disc border ${ring}`}>
        <span className="absolute inset-[3px] rounded-disc bg-gold" />
      </span>
    </div>
  );
}
