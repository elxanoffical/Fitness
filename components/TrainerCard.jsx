import Image from "next/image";
import Link from "next/link";

export default function TrainerCard({
  name,
  role,
  experience,
  specialties,
  slug,
  image,
  icon: Icon,       // optional icon
  showIcon = false, // control icon display
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded overflow-hidden hover:border-emerald-500 transition flex flex-col h-full">
      {/* IMAGE (ölçü sabit saxlanılıb) */}
      <div className="w-full aspect-[4/4] bg-neutral-800 flex items-center justify-center text-neutral-600">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-[350px]"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1 text-center">
        {/* Təcrübə (icon ilə və ya onsuz) */}
        {showIcon && Icon ? (
          <div className="flex justify-center items-center gap-2 text-emerald-500 text-sm mb-1">
            <Icon />
            {experience}
          </div>
        ) : (
          <div className="text-sm text-neutral-400">{experience}</div>
        )}

        {/* Ad və rol */}
        <h3 className="text-xl font-semibold text-white mt-1">{name}</h3>
        <p className="text-neutral-400 text-sm">{role}</p>

        {/* İxtisaslar */}
        <ul className="mt-3 text-neutral-400 text-sm space-y-1 flex-1">
          {specialties.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        {/* Keçid düyməsi */}
        <Link
          href={`/trainers/${slug}`}
          className="mt-6 inline-block bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold py-2 px-4 rounded transition text-sm"
        >
          Profilə bax
        </Link>
      </div>
    </div>
  );
}
