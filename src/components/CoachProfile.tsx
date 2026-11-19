import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Dumbbell, MessageCircle, ShieldAlert, Zap } from 'lucide-react';
import { getCoach } from '@/data/coaches';
import { classes, dayLabels } from '@/data/classes';
import { voltConfig, whatsappUrl } from '@/data/voltConfig';
import ShareButton from '@/components/ShareButton';
import { useEffect } from 'react';

export default function CoachProfile() {
  const { slug } = useParams<{ slug: string }>();
  const coach = getCoach(slug);

  // Scroll to top and set the page title for share previews.
  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (coach) document.title = `${coach.name} | VOLT GYM سوهاج`;
    return () => {
      document.title = 'VOLT GYM سوهاج | طلّع البطل اللي جواك';
    };
  }, [coach]);

  if (!coach) {
    return (
      <main className="volt-container flex min-h-[70vh] flex-col items-center justify-center gap-4 pt-24 text-center">
        <h1 className="text-2xl font-extrabold">مفيش صفحة كابتن بالرابط ده</h1>
        <p className="text-sm text-volt-gray">يمكن الرابط قديم أو فيه خطأ في الكتابة.</p>
        <Link to="/#coaches" className="volt-btn-primary mt-2">
          <ArrowRight size={16} />
          رجوع لصفحة الكباتن
        </Link>
      </main>
    );
  }

  const coachClasses = classes.filter((c) => c.coachSlug === coach.slug);
  const inquiryMsg = `السلام عليكم، شفت صفحة ${coach.name} على موقع VOLT GYM وعايز أستفسر عن الكلاسات المتاحة.`;

  return (
    <main className="pt-16 lg:pt-20">
      {/* Profile hero */}
      <header className="relative overflow-hidden border-b border-volt-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(229,36,48,0.26),transparent_34%),linear-gradient(135deg,#1c1c1c,#080808)]" aria-hidden="true" />
        <Dumbbell className="absolute bottom-10 left-10 text-white/10" size={180} strokeWidth={0.8} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-volt-black/30 via-volt-black/70 to-volt-black" aria-hidden="true" />

        <div className="volt-container relative z-10 py-12 lg:py-16">
          <Link
            to="/#coaches"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-volt-gray transition-colors hover:text-volt-red"
          >
            <ArrowRight size={14} />
            كل الكباتن
          </Link>

          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-end">
            <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-2xl border-2 border-volt-red/60 bg-volt-charcoal2 shadow-[0_16px_48px_-12px_rgba(229,36,48,0.4)] sm:h-44 sm:w-44" role="img" aria-label={coach.photoAlt}>
              <Zap className="text-volt-red" size={58} fill="currentColor" strokeWidth={1.5} />
            </div>
            <div className="text-center sm:text-start">
              {!coach.approved && (
                <span className="volt-chip mb-3 !border-volt-red/40 !text-volt-red">
                  <ShieldAlert size={12} />
                  بيانات قيد الاعتماد
                </span>
              )}
              <h1 className="text-2xl font-black sm:text-3xl lg:text-4xl">{coach.name}</h1>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-volt-gray">{coach.intro}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(inquiryMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="volt-btn-primary"
            >
              <MessageCircle size={16} />
              استفسر عن كلاسات الكابتن
            </a>
            <ShareButton title={coach.name} text={`صفحة ${coach.name} — VOLT GYM سوهاج`} />
          </div>
        </div>
      </header>

      {/* Specialties & classes */}
      <div className="volt-container grid gap-8 py-12 lg:grid-cols-2 lg:py-16">
        <section aria-labelledby="coach-specialties" className="volt-card p-6 sm:p-8">
          <h2 id="coach-specialties" className="text-lg font-extrabold">
            التخصصات
          </h2>
          {coach.specialties.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {coach.specialties.map((s) => (
                <li key={s} className="volt-chip !border-volt-red/40 !bg-volt-redSoft !text-volt-red">
                  {s}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-volt-gray">هتتضاف التخصصات بعد اعتمادها رسميًا.</p>
          )}
          <p className="mt-4 text-xs leading-relaxed text-volt-gray/70">
            بنعرض التخصصات المؤكدة بس — أي تفاصيل إضافية عن خبرة الكابتن بتتنشر بعد مراجعة النادي.
          </p>
        </section>

        <section aria-labelledby="coach-schedule" className="volt-card p-6 sm:p-8">
          <h2 id="coach-schedule" className="text-lg font-extrabold">
            الكلاسات والأيام
          </h2>
          {coachClasses.length > 0 ? (
            <ul className="mt-4 divide-y divide-volt-line">
              {coachClasses.map((c) => (
                <li key={c.id} className="flex items-center justify-between gap-3 py-3">
                  <span className="text-sm font-bold">{c.category}</span>
                  <span className="text-xs text-volt-gray">
                    {c.days.map((d) => dayLabels[d]).join('، ')}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-volt-gray">مفيش كلاسات مسجلة للكابتن ده حاليًا.</p>
          )}
          <p className="mt-4 text-xs leading-relaxed text-volt-gray/70">
            الجدول مبدئي وقيد الاعتماد — للمواعيد النهائية اتصل بنا أو كلّمنا على واتساب ({voltConfig.phone}).
          </p>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="volt-container pb-20">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-volt-line bg-volt-charcoal/60 p-8 text-center">
          <p className="text-lg font-extrabold">عايز تتمرن مع {coach.name}؟</p>
          <p className="max-w-md text-sm text-volt-gray">
            سجّل استفسارك وهيتحوّل لرسالة واتساب جاهزة لفريق VOLT — أو شارك صفحة الكابتن مع أصحابك.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/#join" className="volt-btn-primary">
              سجّل استفسارك
            </Link>
            <Link to="/#classes" className="volt-btn-outline">
              الجدول الأسبوعي الكامل
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
