/**
 * VOLT GYM — جدول الكلاسات الأسبوعي
 * ------------------------------------------------------------------
 * ⚠️ بيانات مبدئية (DRAFT) — مأخوذة من منشور فيسبوك بتاريخ 3 نوفمبر 2026.
 * لا مواعيد محددة ولا قاعات منشورة هنا حتى يعتمدها صاحب النادي رسميًا.
 * أي تعديل يبدأ من هذا الملف — تحديث الأيام أو المدرب أو الفئة من هنا فقط.
 *
 * Future integration note: this maps 1:1 to a `classes` table
 * (day, category, coach_slug). Swap the static array for a fetch when
 * the Phase-2 dashboard ships.
 */

export type ClassDay = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

export interface GymClass {
  id: string;
  category: string;
  days: ClassDay[];
  coachSlug: string;
  coachName: string;
  /**true once the owner confirms the class officially — drives the draft badge */
  confirmed: boolean;
}

export const dayLabels: Record<ClassDay, string> = {
  sunday: 'الأحد',
  monday: 'الاتنين',
  tuesday: 'التلات',
  wednesday: 'الأربع',
  thursday: 'الخميس',
  friday: 'الجمعة',
  saturday: 'السبت',
};

export const weekOrder: ClassDay[] = [
  'saturday',
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
];

export const classes: GymClass[] = [
  {
    id: 'belly-dance',
    category: 'رقص شرقي',
    days: ['monday', 'wednesday'],
    coachSlug: 'maryam-ahmed',
    coachName: 'كابتن مريم أحمد',
    confirmed: false,
  },
  {
    id: 'zumba',
    category: 'زيروباكس',
    days: ['sunday', 'tuesday', 'thursday'],
    coachSlug: 'roaa',
    coachName: 'كابتن رواء',
    confirmed: false,
  },
  {
    id: 'step',
    category: 'ستيب',
    days: ['sunday', 'tuesday', 'thursday'],
    coachSlug: 'roaa',
    coachName: 'كابتن رواء',
    confirmed: false,
  },
  {
    id: 'cardio',
    category: 'كارديو',
    days: ['sunday', 'tuesday', 'thursday'],
    coachSlug: 'roaa',
    coachName: 'كابتن رواء',
    confirmed: false,
  },
  {
    id: 'rehab-class',
    category: 'تأهيل',
    days: ['sunday', 'tuesday', 'thursday'],
    coachSlug: 'roaa',
    coachName: 'كابتن رواء',
    confirmed: false,
  },
  {
    id: 'aerobics',
    category: 'أيروبيكس',
    days: ['thursday'],
    coachSlug: 'doha',
    coachName: 'كابتن دعاء',
    confirmed: false,
  },
  {
    id: 'cardio-boxing',
    category: 'كارديو بوكسينج',
    days: ['thursday'],
    coachSlug: 'doha',
    coachName: 'كابتن دعاء',
    confirmed: false,
  },
  {
    id: 'crossfit',
    category: 'كروس فت',
    days: ['thursday'],
    coachSlug: 'doha',
    coachName: 'كابتن دعاء',
    confirmed: false,
  },
  {
    id: 'core',
    category: 'كور',
    days: ['thursday'],
    coachSlug: 'doha',
    coachName: 'كابتن دعاء',
    confirmed: false,
  },
  {
    id: 'military',
    category: 'تمارين عسكرية',
    days: ['thursday'],
    coachSlug: 'doha',
    coachName: 'كابتن دعاء',
    confirmed: false,
  },
];
