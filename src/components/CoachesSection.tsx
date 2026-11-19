import { Link } from 'react-router-dom';
import { BadgeCheck, Dumbbell, ShieldAlert, Zap } from 'lucide-react';
import { coaches } from '@/data/coaches';
import SectionHeading from '@/components/SectionHeading';

export default function CoachesSection() {
  return (
    <section id="coaches" className="scroll-mt-24 bg-volt-charcoal/40 py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading
          eyebrow="الكباتن"
          title="الكباتن اللي هيقفوا جنبك"
          description="كل كابتن عنده صفحة خاصة بيه — فيها تخصصاته وكلاساته، وينفع يشاركها مع متدربيه."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {coaches.map((coach, index) => (
            <article key={coach.slug} className="volt-card group flex flex-col">
              <div className="relative flex aspect-[4/5] items-end overflow-hidden bg-volt-charcoal2 p-5">
                <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-volt-red/25' : 'from-white/10'} via-transparent to-volt-black`} />
                <div className="absolute -left-8 top-8 h-36 w-36 rounded-full border border-white/10" />
                <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full border-[18px] border-volt-red/10" />
                <Dumbbell className="absolute right-5 top-5 text-white/15" size={62} strokeWidth={1} />
                <div className="relative z-10">
                  <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-volt-red/50 bg-volt-black/60 text-volt-red">
                    <Zap size={24} fill="currentColor" />
                  </span>
                  <p className="font-display text-xs font-bold tracking-[0.3em] text-volt-gray/70">VOLT COACH</p>
                  <p className="mt-1 text-xl font-black text-white">{coach.name.replace('كابتن ', '')}</p>
                </div>
                {coach.approved ? (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-volt-black/80 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm"><BadgeCheck size={11} />معتمد</span>
                ) : (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-volt-black/80 px-2.5 py-1 text-[10px] font-bold text-volt-red backdrop-blur-sm"><ShieldAlert size={11} />قيد الاعتماد</span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex flex-wrap gap-1.5">
                  {coach.specialties.length ? coach.specialties.slice(0, 2).map((s) => <span key={s} className="volt-chip !px-2.5 !py-0.5 !text-[10px]">{s}</span>) : <span className="volt-chip !px-2.5 !py-0.5 !text-[10px]">بيانات أولية</span>}
                </div>
                <Link to={`/coaches/${coach.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-volt-red transition-all hover:gap-2.5">
                  شوف صفحة الكابتن
                  <BadgeCheck size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-volt-gray/70">
          بيانات الكباتن معروضة بشكل مبدئي وقيد الاعتماد — بمجرد اعتماد الصور والسير الذاتية الرسمية، هتتنشر الصفحات كاملة ومشاركة مع المتدربين.
        </p>
      </div>
    </section>
  );
}
