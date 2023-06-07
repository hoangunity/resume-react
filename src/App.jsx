import {
  AcademicCap,
  BirthdayCakeIcon,
  CustomStarBadge,
  DiMongodb,
  EmailIcon,
  FaCss3Alt,
  FaDotCircle,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaSuitcase,
  FaUserAlt,
  GiAchievement,
  MapPinIcon,
  PhoneNumberIcon,
} from "./components/Icons";
import LeftView from "./pages/LeftView";

const App = () => {
  return (
    <div className="min-h-screen container mx-auto flex items-stretch justify-stretch">
      <LeftView />
      <div className={`bg-image bg-center grow text-slate-200`}>
        <div className="flex flex-col ml-4 mt-2">
          <h2 className="font-bold text-4xl text-red-300">Duong Minh Hoang</h2>
          <h3 className="font-semibold text-2xl text-red-400">Web Developer</h3>
        </div>
        <div className="w-full">
          <div className="w-full flex gap-10 justify-center">
            <div className="grow-0">
              <div className="flex gap-[0.5rem] p-1">
                <span>
                  <BirthdayCakeIcon />
                </span>
                <p className="pt-0.5">
                  14 {"-"} 11 {"-"} 1996
                </p>
              </div>
              <div className="flex gap-[0.5rem] p-1">
                <span>
                  <PhoneNumberIcon />
                </span>
                <p className="pt-0.5">+84 921 126 934</p>
              </div>
              <div className="flex gap-[0.5rem] p-1">
                <span>
                  <EmailIcon />
                </span>
                <p className="pt-0.5">hoangdm.141196@gmail.com</p>
              </div>
            </div>

            <div className="grow-0">
              <div className="flex gap-[0.5rem] p-1">
                <span>
                  <FaLinkedin className="w-7 h-7" />
                </span>
                <p className="pt-0.5">
                  https://www.linkedin.com/in/hoangduongminh
                </p>
              </div>
              <div className="flex gap-[0.5rem] p-1">
                <span>
                  <FaGithub className="w-7 h-7" />
                </span>
                <p className="pt-0.5">https://www.github.com/hoangunity</p>
              </div>

              <div className="flex gap-[0.5rem] p-1">
                <span>
                  <MapPinIcon />
                </span>
                <p>46th, 5th street, ward 17, Go Vap district, HCM city</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-1 ml-1">
          <div className="flex gap-3">
            <span>
              <FaUserAlt className="w-7 h-7 text-red-300" />
            </span>
            <h2 className="text-3xl font-bold text-red-300">About me</h2>
          </div>
          <div>
            <p>
              Poised and calm in stressful, high-pressure situations. Have just
              finished 2 years in millitary service. Remains composed throughout
              intense combat scenarios by applying trained disciplines and
              methodical communication tactics. To seek and maintain full-time
              position that offers professional challenges utilizing
              interpersonal skills, excellent time management and
              problem-solving skills. Hardworking and passionate job seeker with
              strong organizational skills eager to secure entry-level web
              development position. Ready to help team achieve company goals.
              Excellent attention to detail and strong organizational skills.
              Safety-driven and disciplined with a remarkable work ethic.
            </p>
          </div>
        </div>

        <div className="mt-2 flex flex-col">
          <div className="flex gap-3">
            <span>
              <AcademicCap color={`text-red-300`} />
            </span>
            <h2 className="text-3xl font-bold text-red-300">Education</h2>
          </div>
          <div className="ml-5">
            <h3 className="text-xl font-semibold">
              Bachelor of Economics: International Business
            </h3>
            <p className="text-lg">
              <i>University of Economics and Laws - Ho Chi Minh City</i>
            </p>
            <p>
              <i>(2016-12 - 2020-12)</i>
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-2 ml-1">
          <div className="flex gap-3 items-center">
            <span>
              <FaSuitcase className="w-7 h-7 text-red-300" />
            </span>
            <h2 className="text-3xl font-bold text-red-300">Professional Experience</h2>
          </div>

          <div className="ml-6">
            <h3 className="flex gap-1.5 items-center font-bold text-xl">
              <span>
                <FaDotCircle className="w-2 h-2" />
              </span>
              Soldier in the Vietnamese People&apos;s Army
            </h3>
            <p className="italic text-lg">
              Lữ đoàn 77 - Quân khu 7 - Hồ Chí Minh city (From 2021 to 2023)
            </p>
          </div>

          <div>
            <div className="ml-6">
              <h3 className="flex gap-1.5 items-center font-bold text-xl">
                <span>
                  <FaDotCircle className="w-2 h-2" />
                </span>
                Technical skills
              </h3>
              <ol className="list-decimal pl-6">
                <li>
                  <p className="text-lg">
                    Front-end web development: Proficiency in HTML, CSS, and
                    JavaScript
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Back-end development: Knowledge of server-side programming
                    languages (Node.js)
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Database design and management: Knowledge of database
                    management systems (MongoDB)
                  </p>
                </li>
              </ol>
            </div>

            <div className="flex gap-4 justify-evenly mt-3">
              <span>
                <FaHtml5 className="w-[5rem] h-[5rem]" />
              </span>
              <span>
                <FaCss3Alt className="w-[5rem] h-[5rem]" />
              </span>
              <span>
                <FaJs className="w-[5rem] h-[5rem]" />
              </span>
              <span>
                <FaNodeJs className="w-[5rem] h-[5rem]" />
              </span>
              <span>
                <DiMongodb className="w-[5rem] h-[5rem]" />
              </span>
            </div>

            <div className="flex flex-col mt-2 ml-6">
              <h3 className="flex gap-1.5 items-center font-bold text-xl">
                <span>
                  <FaDotCircle className="w-2 h-2" />
                </span>
                Projects
              </h3>
              <ol className="list-decimal pl-6">
                <li>
                  <p className="text-lg">
                    Music player app:{" "}
                    <a
                      href="https://hoangunity.github.io/music-player-app/"
                      className="text-blue-400 hover:text-red-200"
                    >
                      <b>https://hoangunity.github.io/music-player-app/</b>
                    </a>
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Custom countdown app:{" "}
                    <a
                      href="https://hoangunity.github.io/custom-countdown/"
                      className="text-blue-400 hover:text-red-200"
                    >
                      <b>https://hoangunity.github.io/custom-countdown/</b>
                    </a>
                    <br />
                    <b>- Description:</b> A Custom Countdown for Date, with very
                    nice UI using HTML, CSS and vanilla JavaScript! You can log
                    in again to see the timer because it will be cached inside
                    of the localStorage of the browser.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Form-validation:{" "}
                    <a
                      href="https://hoangunity.github.io/form-validation/"
                      className="text-blue-400 hover:text-red-200"
                    >
                      <b>https://hoangunity.github.io/form-validation/</b>
                    </a>
                    <br />
                    <b>- Description:</b> A simple UI to validate what user
                    input according to pre-define rules.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col">
          <div className="flex gap-3 items-center">
            <span>
              <CustomStarBadge color={`text-red-300`} />
            </span>
            <h2 className="text-3xl font-bold text-red-300">Additional Information</h2>
          </div>

          <div className="mt-2">
            <ul className="list-disc ml-6">
              <li>
                <p className="text-lg">
                  Committed to staying up-to-date with the latest industry
                  trends and advancements such as AI (chatGPT), IoT,...
                </p>
              </li>
              <li>
                <p className="text-lg">
                  Desire for growth, improving skills tech skills and soft
                  skills, self-reliance.
                </p>
              </li>
              <li>
                <p className="text-lg">
                  Able to read documentations and do research to gain
                  information and solve difficult challenges and problems.
                </p>
              </li>
              <li>
                <p className="text-lg">
                  I am aware of my limitations on some certain technical areas
                  and I am always eager to learn and grow professionally. I
                  believe that by admitting my weaknesses, I am taking the first
                  step towards improving myself and I am committed to
                  continuously developing my skills and abilities
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col mt-2">
          <div className="flex gap-3 items-center">
            <span>
              <GiAchievement className="w-10 h-10 text-red-300" />
            </span>
            <h2 className="text-3xl font-bold text-red-300">Certifications</h2>
          </div>

          <ul className="list-disc ml-6 mt-2">
            <li>
              <p className="text-lg">
                Complete Learn HTML Course from Codeacademy
              </p>
            </li>
            <li>
              <p className="text-lg">
                Complete Learn CSS Course from Codeacademy
              </p>
            </li>
            <li>
              <p className="text-lg">Other online certificates</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
