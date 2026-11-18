/**
 * VOLT GYM — الكباتن
 * ------------------------------------------------------------------
 * ⚠️ سجلات مبدئية (DRAFT) — أسماء وردت في محتوى VOLT المنشور علنًا فقط.
 * ممنوع نشر مؤهلات أو خبرات أو سيرة ذاتية غير معتمدة.
 * لإضافة كابتن جديد: انسخ أي عنصر وعدّل البيانات — الموقع يتولّى الباقي
 * (صفحة شخصية برابط خاص /coaches/<slug> تتبدأ تلقائيًا).
 *
 * Future integration note: replace with a fetch from the coaches table;
 * CoachProfile + CoachCard need no changes.
 */

export interface Coach {
  slug: string;
  name: string;
  /** One-line neutral intro — no invented biography. */
  intro: string;
  /** Confirmed specialties only — leave empty until approved. */
  specialties: string[];
  /** Class categories this coach leads (from classes.ts draft schedule). */
  classes: string[];
  photo: string;
  photoAlt: string;
  /**false = appears on site marked "قيد الاعتماد" and hidden from share previews */
  approved: boolean;
}

export const coaches: Coach[] = [
  {
    slug: 'mohamed-elmesawy',
    name: 'كابتن محمد المسطي',
    intro: 'من كباتن فريق VOLT GYM — استفسر عن الكلاسات والبرامج المتاحة معاه.',
    // No specialty published yet — Elmesawy does not appear in the Nov 3, 2026
    // schedule post, so any assignment here would be invented. Leave empty
    // until the owner confirms his programs.
    specialties: [],
    classes: [],
    photo: '/images/volt-gym/coach-mohamed.jpg',
    photoAlt: 'كابتن محمد المسطي — VOLT GYM',
    approved: false,
  },
  {
    slug: 'maryam-ahmed',
    name: 'كابتن مريم أحمد',
    intro: 'من كباتن فريق VOLT GYM — استفسر عن الكلاسات والبرامج المتاحة معاه.',
    specialties: ['رقص شرقي'],
    classes: ['رقص شرقي'],
    photo: '/images/volt-gym/class-dance.jpg',
    photoAlt: 'كابتن مريم أحمد — VOLT GYM',
    approved: false,
  },
  {
    slug: 'roaa',
    name: 'كابتن رواء',
    intro: 'من كباتن فريق VOLT GYM — استفسر عن الكلاسات والبرامج المتاحة معاه.',
    specialties: ['زيروباكس', 'ستيب', 'كارديو', 'تأهيل'],
    classes: ['زيروباكس', 'ستيب', 'كارديو', 'تأهيل'],
    photo: '/images/volt-gym/class-cardio.jpg',
    photoAlt: 'كابتن رواء — VOLT GYM',
    approved: false,
  },
  {
    slug: 'doha',
    name: 'كابتن دعاء',
    intro: 'من كباتن فريق VOLT GYM — استفسر عن الكلاسات والبرامج المتاحة معاه.',
    specialties: ['أيروبيكس', 'كارديو بوكسينج', 'كروس فت', 'كور', 'تمارين عسكرية'],
    classes: ['أيروبيكس', 'كارديو بوكسينج', 'كروس فت', 'كور', 'تمارين عسكرية'],
    photo: '/images/volt-gym/workout-01.jpg',
    photoAlt: 'كابتن دعاء — VOLT GYM',
    approved: false,
  },
];

export function getCoach(slug: string | undefined): Coach | undefined {
  return coaches.find((c) => c.slug === slug);
}
