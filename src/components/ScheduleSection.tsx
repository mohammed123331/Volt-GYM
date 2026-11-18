import { useState } from 'react';
import { MessageCircle, AlertTriangle } from 'lucide-react';
import {
  classes,
  dayLabels,
  weekOrder,
  type ClassDay,
} from '@/data/classes';
import { whatsappUrl } from '@/data/voltConfig';
import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';

type Filter = ClassDay | 'all';

export default function ScheduleSection() {
  const [day, setDay] = useState<Filter>('all');

  const visible = day === 'all' ? classes : classes.filter((c) => c.days.includes(day));

  return (
    <section id="classes" className="scroll-mt-24 bg-volt-black py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading
          eyebrow="الكلاسات"
          title="جدول الكلاسات الأسبوعي"
          description="اختار اليوم وشوف الكلاسات المتاحة وكابتن كل كلاس."
        />

        {/* Draft-status notice — schedule pending official confirmation */}
        <div
          role="note"
          className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-xl border border-volt-red/40 bg-volt-redSoft p-4"
        >
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-volt-red" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-volt-gray">
            <strong className="text-white">الجدول مبدئي وقيد الاعتماد.</strong> المواعيد النهائية هتتنشر بعد
            التأكيد الرسمي — لأي استفسار عن آخر تحديث، كلّمنا على واتساب.
          </p>
        </div>

        {/* Day filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="تصفية الكلاسات باليوم">
          <button
            type="button"
            onClick={() => setDay('all')}
            aria-pressed={day === 'all'}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              day === 'all' ? 'bg-volt-red text-white' : 'border border-volt-line bg-volt-charcoal text-volt-gray hover:text-white'
            }`}
          >
            كل الأيام
          </button>
          {weekOrder.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDay(d)}
              aria-pressed={day === d}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                day === d ? 'bg-volt-red text-white' : 'border border-volt-line bg-volt-charcoal text-volt-gray hover:text-white'
              }`}
            >
              {dayLabels[d]}
            </button>
          ))}
        </div>

        {/* Weekly board */}
        {day === 'all' ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {weekOrder.map((d) => {
              const dayClasses = classes.filter((c) => c.days.includes(d));
              return (
                <div
                  key={d}
                  className="volt-card flex flex-col p-5"
                  aria-label={`${dayLabels[d]}: ${dayClasses.length ? dayClasses.map((c) => c.category).join('، ') : 'مفيش كلاسات'}`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-base font-extrabold">{dayLabels[d]}</h3>
                    <span className="font-display text-xs font-semibold tracking-widest text-volt-gray/60">
                      {dayClasses.length} كلاس
                    </span>
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    {dayClasses.length === 0 ? (
                      <p className="text-xs text-volt-gray/60">يوم راحة — مفيش كلاسات جماعية</p>
                    ) : (
                      dayClasses.map((c) => (
                        <div
                          key={c.id}
                          className="flex items-center justify-between gap-2 rounded-lg bg-volt-black/60 px-3 py-2"
                        >
                          <span className="text-xs font-bold">{c.category}</span>
                          <Link
                            to={`/coaches/${c.coachSlug}`}
                            className="text-[11px] font-semibold text-volt-gray transition-colors hover:text-volt-red"
                          >
                            {c.coachName.replace('كابتن ', 'ك. ')}
                          </Link>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => (
              <div key={c.id} className="volt-card flex items-center justify-between gap-4 p-5">
                <div>
                  <h3 className="text-base font-extrabold">{c.category}</h3>
                  <p className="mt-1 text-xs text-volt-gray">{c.coachName}</p>
                </div>
                <Link
                  to={`/coaches/${c.coachSlug}`}
                  className="shrink-0 rounded-full border border-volt-line px-3 py-1.5 text-xs font-bold text-volt-gray transition-colors hover:border-volt-red hover:text-volt-red"
                >
                  صفحة الكابتن
                </Link>
              </div>
            ))}
            {visible.length === 0 && (
              <p className="col-span-full py-10 text-center text-sm text-volt-gray">
                مفيش كلاسات جماعية مسجلة في {dayLabels[day as ClassDay]} — اسألنا على واتساب عن المواعيد المتاحة.
              </p>
            )}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappUrl('السلام عليكم، عايز أستفسر عن آخر تحديث لجدول الكلاسات في VOLT GYM.')}
            target="_blank"
            rel="noopener noreferrer"
            className="volt-btn-primary"
          >
            <MessageCircle size={16} />
            اسأل عن آخر تحديث للجدول
          </a>
        </div>
      </div>
    </section>
  );
}
