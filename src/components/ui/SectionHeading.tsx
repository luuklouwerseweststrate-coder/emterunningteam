interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-emte-gray-900'
        }`}
      >
        {title}
      </h2>

      <div
        className={`mt-4 h-1 w-16 rounded-full bg-emte-yellow ${
          centered ? 'mx-auto' : ''
        }`}
      />

      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${
            light ? 'text-emte-gray-200' : 'text-emte-gray-600'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
