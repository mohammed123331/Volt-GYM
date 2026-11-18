import { Link } from 'react-router-dom';
import { BadgeCheck, ShieldAlert } from 'lucide-react';
import { coaches } from '@/data/coaches';
import SectionHeading from '@/components/SectionHeading';
import VoltImage from '@/components/VoltImage';

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
          {coaches.map((coach) => (
            <article key={coach.slug} className="volt-card group flex flex-col">
              <div className="relative overflow-hidden">
                <VoltImage
                  src={coach.photo}
                  alt={coach.photoAlt}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-volt-charcoal via-transparent to-transparent"
                  aria-hidden="true"
                />
                {coach.approved ? (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-volt-black/80 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                    <BadgeCheck size={11} />
                    معتمد
                  </span>
                ) : (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-volt-black/80 px-2.5 py-1 text-[10px] font-bold text-volt-red backdrop-blur-sm">
                    <ShieldAlert size={11} />
                    قيد الاعتماد
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-base font-extrabold">{coach.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {coach.specialties.slice(0, 2).map((s) => (
                    <span key={s} className="volt-chip !px-2.5 !py-0.5 !text-[10px]">
                      {s}
                    </span>
                  ))}
                  {coach.specialties.length > 2 && (
                    <span className="volt-chip !px-2.5 !py-0.5 !text-[10px]">
                      +{coach.specialties.length - 2}
                    </span>
                  )}
                </div>
                <Link
                  to={`/coaches/${coach.slug}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-volt-red transition-all hover:gap-2.5"
                >
                  شوف صفحة الكابتن
                  <BadgeCheck size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-volt-gray/70">
          بيانات الكباتن معروضة بشكل مبدئي وقيد الاعتماد — بمجرد اعتماد الصور والسير الذاتية الرسمية، هتتنشر الصفحات
          كاملة ومشاركة مع المتدربين.
        </p>
      </div>
    </section>
  );
}
