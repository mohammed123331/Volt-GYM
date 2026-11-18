import { Link } from 'react-router-dom';
import { Dumbbell, Flame, HeartPulse, LineChart, Users, Medal } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import VoltImage from '@/components/VoltImage';

const pillars = [
  {
    icon: LineChart,
    title: 'تطورك هدفنا',
    body: 'كل متدرب له نقطة بداية مختلفة — إحنا بنقيس تقدمك خطوة بخطوة، وبنحتفل بكل إنجاز مهما كان صغير.',
  },
  {
    icon: Dumbbell,
    title: 'تمرين صح ومظبوط',
    body: 'الأداء الصح الأول: الكباتن بيقفوا معاك عشان تتعلم الأداء السليم قبل الوزن التقيل، عشان تتمرن آمن وبذكاء.',
  },
  {
    icon: Flame,
    title: 'أهداف واضحة',
    body: 'سواء هدفك خسارة وزن، بناء عضلات، زيادة اللياقة، أو لعب رياضة بتحبها — في VOLT في برنامج لكل هدف.',
  },
  {
    icon: Users,
    title: 'جو ترحيبي',
    body: 'في VOLT مفيش مكان للحرج — الجو عائلي، وكل عضو بيتعامل كأنه جزء من النادي من أول يوم.',
  },
  {
    icon: HeartPulse,
    title: 'دعم الكباتن',
    body: 'كباتن النادي معاك في كل خطوة — من أول يوم تعريف حتى ما توصل لهدفك وتكمّل بعده.',
  },
  {
    icon: Medal,
    title: 'بيئة تحفّزك',
    body: 'أجهزة ومساحات تدريب مصممة عشان تحب التمرين، وطاقة المكان نفسها بتشدك ترجع تاني.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-volt-black py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading
          eyebrow="عن VOLT"
          title="مش مجرد جيم... دي بداية تغيير."
          description="في VOLT GYM صدقنا إن كل واحد فينا جواه بطل مستني الفرصة. مش بنبيع اشتراكات — إحنا بنصاحبك في رحلة تغيير حقيقي: جسم أقوى، لياقة أحسن، وثقة أعلى."
        />

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Editorial image collage */}
          <div className="relative order-2 grid grid-cols-2 gap-4 lg:order-1">
            <VoltImage
              src="/images/volt-gym/gym-interior-01.jpg"
              alt="من داخل VOLT GYM سوهاج"
              className="aspect-[3/4] w-full rounded-xl object-cover"
            />
            <VoltImage
              src="/images/volt-gym/workout-02.jpg"
              alt="متدرب بيتمرن في VOLT GYM"
              className="mt-8 aspect-[3/4] w-full rounded-xl object-cover"
            />
            <div className="absolute -bottom-5 right-1/2 translate-x-1/2 rounded-full bg-volt-red px-6 py-2.5 text-sm font-extrabold shadow-[0_10px_30px_-10px_rgba(229,36,48,0.7)] lg:right-auto lg:left-6 lg:translate-x-0">
              VOLT GYM · سوهاج
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-base leading-loose text-volt-gray sm:text-lg">
              من قلب سوهاج، في الزهراء على شارع الكرنك، <strong className="text-white">VOLT GYM</strong> مش مجرد
              مكان فيه أجهزة — ده النادي اللي بيدرب فيه أبطال، بيبدأ فيه المبتدئين رحلتهم، وبيلاقي فيه كل عضو
              الدعم اللي بيخليه يرجع يمرّن كل يوم.
            </p>
            <p className="mt-4 text-base leading-loose text-volt-gray sm:text-lg">
              عندنا برامج لكل مستوى: من الجيم وتمارين المقاومة، للكلاسات الجماعية بطاقتها العالية، لبرامج التأهيل
              بعد الإصابات، وكاراتيه الأطفال. والمهم — كباتن بيقفوا جنبك في كل تمرين.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="group rounded-xl border border-volt-line bg-volt-charcoal p-4 transition-colors duration-300 hover:border-volt-red/60"
                >
                  <p.icon
                    size={22}
                    className="text-volt-red transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 text-sm font-extrabold">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-volt-gray">{p.body}</p>
                </div>
              ))}
            </div>

            <Link to="/#join" className="volt-btn-primary mt-8">
              ابدأ رحلتك معانا
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
