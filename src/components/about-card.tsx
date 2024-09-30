interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <div className="shadow-none">
      <div className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900">
        <h6 className="mb-4 text-center text-white">{subTitle}</h6>
        <h4 className="text-center text-white">{title}</h4>
        <p className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center text-white font-normal">
          {description}
        </p>
        <button className="px-4 py-2 text-sm bg-white text-gray-900 rounded">
          View details
        </button>
      </div>
    </div>
  );
}

export default AboutCard;
