export default function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded shadow-md ring-1 ring-black/15 backdrop-blur-[1px] ${color}`}
    >
      {text}
    </span>
  );
}
