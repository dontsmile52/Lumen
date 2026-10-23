import { Clipboard, FileSearch, FolderOpen, Hand, Languages, Workflow } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import LayoutDemo from './LayoutDemo';

/** An optimised screenshot from Astro's getImage. */
export interface Picture { src: string; srcset: string; width: number; height: number; alt: string }

function Mark({ children, soon = false }: { children: string; soon?: boolean }) {
  return (
    <Badge variant={soon ? 'outline' : 'secondary'} className={soon ? 'rounded-full text-muted-foreground' : 'rounded-full bg-accent text-accent-foreground'}>
      {children}
    </Badge>
  );
}

/** The picture fills the top half of the card, cut at its bottom edge, so the text below stays clear. */
function Shot({ picture, align = 'center' }: { picture?: Picture; align?: 'center' | 'top' }) {
  if (!picture) return null;
  return (
    <div className="pointer-events-none absolute inset-x-5 top-5 h-[46%] overflow-hidden rounded-xl shadow-2xl ring-1 ring-border">
      <img
        src={picture.src} srcSet={picture.srcset} sizes="(min-width: 1024px) 720px, 90vw" width={picture.width} height={picture.height}
        alt={picture.alt} loading="lazy" decoding="async"
        className={`h-full w-full object-cover transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-[1.03] ${align === 'top' ? 'object-top' : 'object-center'}`}
      />
    </div>
  );
}

/** «Возможности»: what Lumen does, as a bento grid; the search card types the wrong-layout example by itself. */
export default function Features({ clipboard, folder }: { clipboard?: Picture; folder?: Picture }) {
  return (
    <BentoGrid className="auto-rows-[24rem] lg:grid-rows-[24rem_24rem_20rem]">
      <BentoCard
        Icon={Languages}
        name="Поиск по-русски"
        description="Находит приложения по русскому и английскому названию и прощает опечатки. Забыли переключить раскладку — «ntktuhfv» всё равно найдёт Telegram."
        className="lg:col-span-1"
        background={<div className="absolute inset-x-6 top-10 flex justify-center"><LayoutDemo /></div>}
      />
      <BentoCard
        Icon={Clipboard}
        name="История буфера обмена"
        description="⌘⇧V — и всё, что вы копировали: текст, ссылки, картинки, файлы. Поиск по истории, Enter вставляет туда, где вы печатаете. Секретное из менеджеров паролей Lumen не запоминает."
        className="lg:col-span-2"
        background={<Shot picture={clipboard} align="top" />}
      />
      <BentoCard
        Icon={FolderOpen}
        name="Папки и перетаскивание"
        description="Перетащите иконку на иконку — получится папка. Порядок, имя, цвет, эмодзи или своя картинка — как вам удобно."
        className="lg:col-span-2"
        background={<Shot picture={folder} />}
      />
      <BentoCard
        Icon={FileSearch}
        name="Поиск файлов"
        badge={<Mark>Pro</Mark>}
        description="Файлы из папок, которые вы разрешили, — прямо под приложениями. Enter открывает, ⌘Enter показывает в Finder."
        className="lg:col-span-1"
        background={<FileRows />}
      />
      <BentoCard
        Icon={Hand}
        name="Жест трекпада и хоткей"
        description="⌥Space или жест на трекпаде: щипок тремя, четырьмя или пятью пальцами, свайп вверх или вниз. Обратный жест закрывает. Можно открывать Lumen вместо Spotlight по ⌘Space."
        className="lg:col-span-2"
        background={<Gestures />}
      />
      <BentoCard
        Icon={Workflow}
        name="Команды из приложения «Команды»"
        badge={<Mark soon>Скоро</Mark>}
        description="Ваши команды из приложения «Команды» — прямо в поиске Lumen."
        className="lg:col-span-1"
      />
    </BentoGrid>
  );
}

/** Found files under the apps, drawn: names made up for the picture. */
function FileRows() {
  const files = [['Договор аренды.pdf', 'Документы'], ['Договор поставки.docx', 'Загрузки']];
  return (
    <div className="absolute inset-x-5 top-5 space-y-1.5" aria-hidden>
      <div className="glass flex h-9 items-center rounded-full px-3.5 font-mono text-sm">договор</div>
      {files.map(([name, folder], i) => (
        <div key={name} className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm ${i === 0 ? 'bg-accent' : ''}`}>
          <span className="h-7 w-5 shrink-0 rounded-[4px] bg-gradient-to-b from-white/80 to-white/40 ring-1 ring-border" />
          <span className="min-w-0 leading-tight"><span className="block truncate">{name}</span><span className="block text-xs text-muted-foreground">{folder}</span></span>
        </div>
      ))}
    </div>
  );
}

/** Keys and fingers, drawn: what opens Lumen. */
function Gestures() {
  const key = 'glass grid h-14 min-w-14 place-items-center rounded-2xl px-4 text-xl font-medium';
  return (
    <div className="absolute inset-x-6 top-10 flex flex-wrap items-center justify-center gap-3" aria-hidden>
      <span className={key}>⌥</span>
      <span className="text-muted-foreground">+</span>
      <span className={`${key} min-w-32`}>Space</span>
      <span className="mx-3 text-sm text-muted-foreground">или</span>
      <svg viewBox="0 0 120 64" className="h-16 w-28 text-brand" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <rect x="3" y="3" width="114" height="58" rx="12" className="text-border" stroke="currentColor" />
        {[28, 48, 68, 88].map((x, i) => <circle key={x} cx={x} cy={i === 0 ? 40 : 24} r="5" fill="currentColor" fillOpacity="0.25" />)}
        <path d="M38 50 L52 36 M82 50 L68 36" strokeOpacity="0.6" />
      </svg>
    </div>
  );
}
