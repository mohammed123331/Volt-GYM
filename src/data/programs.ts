/**
 * VOLT GYM — برامج التدريب
 * ------------------------------------------------------------------
 * فئات البرامج مبنية على محتوى VOLT المنشور علنًا.
 * ملاحظة: لا توجد تفاصيل أسعار ولا مدد اشتراك — تُضاف فقط بعد اعتمادها.
 *
 * `image`: local asset under /public/images/volt-gym — replace the file
 * to update the photo. `imageAlt` describes what the real photo should show.
 *
 * Future integration note: replace this static array with a fetch from
 * the programs table; the ProgramCard UI stays unchanged.
 */

export interface Program {
  id: string;
  name: string;
  description: string;
  /** Which confirmed coach leads this program, if any (slug from coaches.ts). */
  coachSlug?: string;
  image: string;
  imageAlt: string;
}

export const programs: Program[] = [
  {
    id: 'strength',
    name: 'جيم وتمارين مقاومة',
    description:
      'تمارين الحديد وبناء العضلات وزيادة القوة بإشراف الكباتن، ببرنامج يناسب مستواك سواء بادئ من أول يوم أو لها سنين خبرة.',
    coachSlug: 'mohamed-elmesawy',
    image: '/images/volt-gym/gym-equipment-01.jpg',
    imageAlt: 'أوزان وأجهزة تمارين المقاومة في VOLT GYM',
  },
  {
    id: 'fitness',
    name: 'لياقة ولياقة بدنية',
    description:
      'تمارين كارديو و conditioning تحسّن لياقتك القلبية وترفع مستوى طاقتك، بأسلوب تدريبي منظم وآمن.',
    image: '/images/volt-gym/workout-01.jpg',
    imageAlt: 'تمرين لياقة وكارديو داخل VOLT GYM',
  },
  {
    id: 'weight',
    name: 'إدارة الوزن',
    description:
      'برامج مخصصة لخسارة الوزن أو زيادته بطريقة صحية ومتوازنة، مع متابعة مستمرة من كباتن النادي.',
    image: '/images/volt-gym/workout-02.jpg',
    imageAlt: 'متدرب يتابع برنامج إدارة الوزن في VOLT GYM',
  },
  {
    id: 'rehab',
    name: 'برامج التأهيل والإصابات',
    description:
      'تمارين تأهيل مدروسة لما بعد الإصابات، بمراحل تدرّج آمنة ترجعك للتمرين بخطوات ثابتة وبدون استعجال.',
    image: '/images/volt-gym/gym-interior-02.jpg',
    imageAlt: 'مساحة التأهيل والتمارين العلاجية في VOLT GYM',
  },
  {
    id: 'group',
    name: 'كلاسات جماعية',
    description:
      'كلاسات زيروباكس، ستيب، أيروبيكس وكارديو بوكسينج بطاقة جماعية تحفّزك وتخلّي التمرين يوم ممتع.',
    coachSlug: 'roaa',
    image: '/images/volt-gym/class-cardio.jpg',
    imageAlt: 'كلاس جماعي في VOLT GYM',
  },
  {
    id: 'sports',
    name: 'ألعاب فردية',
    description:
      'ألعاب فردية داخل النادي تناسب اللي بيحب يتمرن بروحه بروح تنافسية ومنظمة.',
    image: '/images/volt-gym/gym-interior-01.jpg',
    imageAlt: 'منطقة الألعاب الفردية في VOLT GYM',
  },
  {
    id: 'karate',
    name: 'كاراتيه أطفال',
    description:
      'كلاسات كاراتيه مخصصة للأطفال، بتبني الانضباط والثقة واللياقة من سن صغيرة في بيئة آمنة وممتعة.',
    image: '/images/volt-gym/challenge-01.jpg',
    imageAlt: 'كلاس كاراتيه للأطفال في VOLT GYM',
  },
];
