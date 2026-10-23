import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react';
import { Search, Send } from 'lucide-react';

const TYPED = 'ntktuhfv';

/**
 * «ntktuhfv» typed in the English layout finds Telegram. Rendered on the server in its final state, so the text is
 * there without JavaScript; in the browser it types itself out while on screen, unless motion is reduced.
 */
export default function LayoutDemo() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const [count, setCount] = useState(TYPED.length);

  useEffect(() => {
    if (reduced || !inView) return;
    let step = 0;
    setCount(0);
    const timer = setInterval(() => {
      step += 1;
      // Eight letters, then the result stays for a while before typing again.
      setCount(step <= TYPED.length ? step : step > TYPED.length + 14 ? (step = 0) : TYPED.length);
    }, 160);
    return () => clearInterval(timer);
  }, [reduced, inView]);

  const found = count === TYPED.length;
  return (
    <div ref={ref} className="w-full max-w-sm space-y-3" aria-label="Набрано «ntktuhfv» — найден Telegram">
      <div className="glass flex h-11 items-center gap-2 rounded-full px-4">
        <Search className="size-4 text-muted-foreground" aria-hidden />
        <span className="font-mono text-[15px] tracking-wide">
          {TYPED.slice(0, count)}
          <span className="ml-px inline-block h-4 w-px translate-y-0.5 bg-primary motion-safe:animate-pulse" aria-hidden />
        </span>
      </div>
      <div className="h-[60px]">
        <AnimatePresence>
          {found && (
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="glass flex items-center gap-3 rounded-2xl p-2.5 pr-4"
            >
              <span className="grid size-10 place-items-center rounded-[11px] bg-gradient-to-b from-sky-400 to-sky-600 text-white">
                <Send className="size-5 -translate-x-px" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block font-medium">Telegram</span>
                <span className="block text-xs text-muted-foreground">ntktuhfv → телеграм</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
