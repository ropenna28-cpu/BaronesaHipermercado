type Props = {
  label?: string;
  tone?: 'ink' | 'paper';
};

/**
 * Signature element: a "record groove" divider. Baronesa's differential is its
 * disc store, so section breaks borrow the concentric-ring language of a vinyl
 * record instead of a generic straight rule — it quietly signals "this store
 * also sells music" everywhere on the site, not just on the discos page.
 */
export default function GrooveDivider({ label, tone = 'ink' }: Props) {
  const ring = tone === 'ink' ? 'border-ink/15' : 'border-paper/25';
  const dot = tone === 'ink' ? 'bg-gold' : 'bg-gold';
  return (
    <div className="flex items-center gap-4 py-2" role="separator">
      <span className={`relative h-3 w-3 shrink-0 rounded-disc border ${ring}`}>
        <span className={`absolute inset-[3px] rounded-disc ${dot}`} />
      </span>
      <span className={`h-px flex-1 border-t border-dashed ${ring}`} />
      {label && (
        <span className="shrink-0 font-body text-xs uppercase tracking-[0.2em] text-ink/50">
          {label}
        </span>
      )}
      <span className={`h-px flex-1 border-t border-dashed ${ring}`} />
      <span className={`relative h-3 w-3 shrink-0 rounded-disc border ${ring}`}>
        <span className={`absolute inset-[3px] rounded-disc ${dot}`} />
      </span>
    </div>
  );
}
