import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { programs, type Program } from '@/data/programs';
import { whatsappUrl, membershipLink } from '@/data/voltConfig';
import SectionHeading from '@/components/SectionHeading';
import VoltImage from '@/components/VoltImage';

function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="volt-card group flex flex-col">
      <div className="relative overflow-hidden">
        <VoltImage
          src={program.image}
          alt={program.imageAlt}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-volt-charcoal via-transparent to-transparent" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-extrabold">{program.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-volt-gray">{program.description}</p>
        <Link
          to={membershipLink(program.name)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-volt-red transition-all hover:gap-2.5"
          aria-label={`استفسر عن برنامج ${program.name}`}
        >
          استفسر عن البرنامج
          <ArrowLeft size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function ProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-24 bg-volt-charcoal/40 py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading
          eyebrow="البرامج"
          title="اختار البرنامج اللي يناسب هدفك"
          description="من تمارين الحديد للكلاسات الجماعية لكاراتيه الأطفال — في VOLT GYM كل واحد يلاقي برنامجه."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappUrl('السلام عليكم، عايز أستفسر عن البرامج المتاحة في VOLT GYM.')}
            target="_blank"
            rel="noopener noreferrer"
            className="volt-btn-outline"
          >
            <MessageCircle size={16} />
            اسأل عن البرنامج المناسب لك على واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
