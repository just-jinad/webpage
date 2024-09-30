import Image from "next/image";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}

export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <div className="flex lg:flex-row flex-col mb-10 lg:items-end">
      {/* Card Header */}
      <div className="h-[32rem] max-w-[28rem] shrink-0">
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card Body */}
      <div className="col-span-full lg:col-span-3 p-6">
        <h6 className="text-blue-gray-700 text-lg mb-4">{panel}</h6>
        <h2 className="text-blue-gray-800 text-4xl font-medium mb-4">{title}</h2>
        <p className="mb-12 md:w-8/12 text-gray-500 font-medium">{des}</p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200">
            <Image
              src="/logos/spotify-logo.png"
              alt="spotify"
              width={48}
              height={48}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h6 className="text-blue-gray-800 text-lg mb-0.5">{name}</h6>
            <p className="text-gray-500 font-normal text-sm">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventContentCard;
