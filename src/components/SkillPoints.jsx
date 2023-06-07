const SkillPoints = ({ name, points }) => {
  const yellowPoint = Array(points)
    .fill(0)
    .map((_, index) => {
      return (
        <div
          key={index}
          className="w-[0.4rem] h-[0.4rem] rounded-full bg-yellow-500"
        />
      );
    });

  const remainingPoint = Array(5 - points)
    .fill(0)
    .map((_, index) => {
      return (
        <div
          key={index}
          className="w-[0.4rem] h-[0.4rem] rounded-full bg-gray-300"
        />
      );
    });

  return (
    <div className="flex gap-10">
      <h3 className="grow pl-1 text-[1rem]">{name}</h3>
      <div className="flex gap-[2px] items-center grow-0">
        {yellowPoint}
        {remainingPoint}
      </div>
    </div>
  );
};

export default SkillPoints;
