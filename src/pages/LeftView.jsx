import { AcademicCap, ChatBubbleIcon } from "../components/Icons";
import SkillPoints from "../components/SkillPoints";

const LeftView = () => {
  const imgUrl =
    "https://media.licdn.com/dms/image/D5603AQGJ6ZpIoCvPXA/profile-displayphoto-shrink_800_800/0/1675063830131?e=1691625600&v=beta&t=Dvp1Df0KktXZTBliZSg27ORwLe_IqxqxDqbAFLO5bBo";

  return (
    <div className="relative bg-[#0d334b] select-none">
      <div className="sticky top-0 left-0 basis-auto p-2 flex flex-col gap-5">
        <div className="w-[12rem] mx-auto">
          <img src={imgUrl} alt="avatar" className="rounded-[50%]" />
        </div>

        <div className="text-white w-auto">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center border-b pb-2 mx-auto w-[80%] gap-2">
              <span>
                <ChatBubbleIcon />
              </span>
              <h2 className="text-[1.75rem]">Language</h2>
            </div>

            <div className="w-auto">
              <div className="flex">
                <h3 className="grow pl-1 text-[1rem]">English</h3>
                <div className="flex gap-[2px] items-center grow-0">
                  <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-yellow-500" />
                  <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-yellow-500" />
                  <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-yellow-500" />
                  <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-yellow-500" />
                  <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-gray-300" />
                </div>
              </div>
              <div className="flex">
                <h3 className="grow pl-1 text-[1rem]">Ielts</h3>
                <div className="flex">
                  <span className="text-[1rem]">6.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white w-auto">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center border-b pb-2 w-[80%] mx-auto gap-2">
              <span>
                <AcademicCap />
              </span>
              <h2 className="text-[1.75rem]">Skills</h2>
            </div>

            <div className="w-auto">
              <SkillPoints name={"Teamwork"} points={4} />
              <SkillPoints name={"Research"} points={4} />
              <SkillPoints name={"Adaptability"} points={4} />
              <SkillPoints name={"Communication"} points={4} />
              <SkillPoints name={"Attention to detail"} points={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftView;
