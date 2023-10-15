import Footer from "../Components/Footer/Index";
import Desktop from "../Components/Nav/Desktop";
// import Button from "../Components/Button/Index";
import OwlCarousel from "react-owl-carousel";
import Button from "../Components/Button/Index";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Andro from "../Components/Nav/Andro";

const options = {
  center: true, // Optionally keep center as true
  margin: 700, // Increase the margin to add more space between items
  responsive: {
    0: {
      items: 1, // Display 1 item on mobile
    },
    600: {
      items: 2, // Display 2 items on tablets
    },
    1000: {
      items: 3, // Display 3 items on desktop
    },
  },
  animateOut: "fadeOut",
  animateIn: "flipInX",
  autoplay: true,
  dots: false,
  touchDrag: true,
  lazyLoad: true,
};

const items = [
  <div className="item" key={1}>
    <div className="md:w-[700px]">
      <div className="relative">
        <div className="backdrop-blur-sm rounded-xl max-w-full absolute inset-0 bg-white/30"></div>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt=""
          className="rounded-xl"
        />
        <h1 className="text-3xl text-dongker font-bold text-center absolute inset-0 flex items-center justify-center">
          Programming & Coding
        </h1>
      </div>
    </div>
  </div>,
  <div className="item" key={2}>
    <div className="md:w-[700px]">
      <div className="relative">
        <div className="backdrop-blur-sm rounded-xl max-w-full absolute inset-0 bg-white/30"></div>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt=""
          className="rounded-xl"
        />
        <h1 className="text-3xl text-dongker font-bold text-center absolute inset-0 flex items-center justify-center">
          Programming & Coding
        </h1>
      </div>
    </div>
  </div>,
  <div className="item" key={3}>
    <div className="md:w-[700px]">
      <div className="relative">
        <div className="backdrop-blur-sm rounded-xl max-w-full absolute inset-0 bg-white/30"></div>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt=""
          className="rounded-xl"
        />
        <h1 className="text-3xl text-dongker font-bold text-center absolute inset-0 flex items-center justify-center">
          Programming & Coding
        </h1>
      </div>
    </div>
  </div>,
];

const About = () => {
  return (
    <>
      <div className="w-full md:z-0 -z-[9]">
        <div className="font-figtree md:min-h-screen h-[550px] bg-biru overflow-hidden">
          <nav className="relative z-[10] top-0 px-4 py-4 flex justify-between items-center ">
            <a className="text-3xl font-bold leading-none w-40 md:w-60" href="">
              <img src="/src/assets/img/logo.png" alt="" />
            </a>
            <div className="lg:hidden"></div>
            <Desktop />
          </nav>
          <div className="backdrop-sepia-0 relative bg-white/30 blur-2xl">
            <div className="absolute -z-20 w-96 h-96 -mt-40 -ml-40 rounded-full bg-white"></div>
            <div className="absolute -z-20 w-[700px] h-[700px] right-0 hidden md:block -mt-20 -mr-60 rounded-full bg-dongker"></div>
            <div className="absolute -z-[20]  w-[400px] h-[400px] -mr-40 md:mt-[550px] mt-[500px]  right-0 rounded-full bg-white"></div>
          </div>
          <div className="mt-20 px-1 md:px-0">
            <OwlCarousel className="owl-theme" {...options}>
              {items}
            </OwlCarousel>
          </div>
          <div className="-mt-[130px] hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#EEEEEE"
                fill-opacity="1"
                d="M0,128L80,138.7C160,149,320,171,480,197.3C640,224,800,256,960,261.3C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <Andro />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-[86px] md:hidden"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#EEEEEE"
          fill-opacity="1"
          d="M0,128L80,138.7C160,149,320,171,480,197.3C640,224,800,256,960,261.3C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <div className="md:flex container overflow-hidden">
        <div className="md:hidden mt-10 -mb-20 flex justify-center items-center">
          <img src="/img/about/people.jpg" className="rounded-xl w-60" alt="" />
        </div>
        <div className="bg-slate-200 rounded-2xl w-full h-[500px] pt-36 md:pt-0 md:h-[700px] flex items-center right-0 md:ml-96">
          <div className="w-[900px] md:-ml-60 hidden md:flex">
            <img src="/img/about/people.jpg" className="rounded-xl" alt="" />
          </div>
          <div className="md:ml-20 px-10 font-figtree md:-mt-0 -mt-20 md:pr-40">
            <h1 className=" text-lg md:text-xl font-bold">About Us</h1>
            <h3 className="text-3xl md:text-5xl font-bold">
              We Want To Build Positive Community of Indonesian IT
            </h3>
            <h2 className="mt-5 text-md">Sort About Us.</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              eveniet aliquam minus voluptatem perspiciatis ipsum placeat harum
              facere nam illum.
            </h4>
            <div className="pt-10">
              <Button children="Learn More" rotate={0} />
            </div>
          </div>
        </div>
      </div>

      <div className=" md:px-40 mt-20 font-figtree">
        <div className="text-center ">
          <div className="relative inline-flex -rotate-12 md:mb-10 hover:rotate-0 duration-100 hover:scale-110">
            <span className="absolute inset-x-0 bottom-0 border-b-[10px] rounded-lg border-dongker"></span>
            <h1 className="relative text-4xl md:text-6xl font-bold text-slate-800 sm:text-6xl lg:text-7xl">
              Popular Topics
            </h1>
          </div>
        </div>

        {/* <div className="bg-slate-200 md:px-0 rounded-xl w-[400px] h-[400px]"> */}

        <div className="flex flex-wrap md:flex-nowrap md:gap-4 mt-10 justify-center px-10 md:px-0">
          <div className="mb-5 p-4 md:w-1/3 bg-white rounded-lg itemBox">
            <div className="rounded-lg overflow-hidden">
              <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                <div className="absolute bg-dongker text-white rounded-lg px-2 mt-4 ml-4">
                  <h1>Website</h1>
                </div>
                <img
                  src="/img/about/project1.jpg"
                  className="rounded-2xl"
                  alt=""
                />
              </div>
              <h2 className="text-primary font-bold uppercase mt-3 text-dongker">
                Programming
              </h2>
              <h3 className="font-semibold text-xl text-dark mt-2 mb-3">
                Website Development
              </h3>
              <p className="font-medium text-base text-secondary">
                Discuss the creation of websites and the technology that is
                currently being used.
              </p>
            </div>
          </div>
          <div className="mb-5 p-4 md:w-1/3 bg-white rounded-lg itemBox">
            <div className="rounded-lg overflow-hidden">
              <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                <div className="absolute bg-biru text-white rounded-lg px-2 mt-4 ml-4">
                  <h1>Game Dev</h1>
                </div>
                <img
                  src="/img/about/project1.jpg"
                  className="rounded-2xl"
                  alt=""
                />
              </div>
              <h2 className="text-primary font-bold text-biru uppercase mt-3">
                Programming
              </h2>
              <h3 className="font-semibold text-xl text-dark mt-2 mb-3">
                Game Development
              </h3>
              <p className="font-medium text-base text-secondary">
                In the future, we will share more experiences about game making
                and technology.
              </p>
            </div>
          </div>
          <div className="mb-5 p-4 md:w-1/3 bg-white rounded-lg itemBox">
            <div className="rounded-lg overflow-hidden">
              <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                <div className="absolute bg-blue-900 text-white rounded-lg px-2 mt-4 ml-4">
                  <h1>Hardware</h1>
                </div>
                <img
                  src="/img/about/project1.jpg"
                  className="rounded-2xl"
                  alt=""
                />
              </div>
              <h2 className="text-primary text-blue-900 t font-bold uppercase mt-3">
                Maintenance
              </h2>
              <h3 className="font-semibold text-xl text-dark mt-2 mb-3">
                Hardware + Programming
              </h3>
              <p className="font-medium text-base text-secondary">
                Discuss integration and hardware such as arduino depending on
                the group's interest.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="bg-gradient-to-r from-biru via-blue-400 to-blue-500 font-figtree overflow-hidden w-full h-[400px] mt-10">
        <div className="md:flex h-full justify-center items-center pt-5">
          <div className="flex md:flex-none  justify-center items-center md:-space-x-0 -space-x-48 md:-ml-0 -ml-20">
            <div className="px-40 w-96 text-center">
              <img src="/icon/about/Group 31.png" alt="" />
              <h1 className="text-white font-black text-6xl">+400</h1>
              <h1 className="text-white font-md text-2xl">Participants</h1>
            </div>
            <div className="px-40 w-96 text-center">
              <img src="/icon/about/Group 32.png" alt="" />
              <h1 className="text-white font-black text-6xl">+100</h1>
              <h1 className="text-white font-md text-2xl">Followers</h1>
            </div>
          </div>
          <div className="flex md:flex-none  justify-center pt-8 items-center md:-space-x-0 -space-x-48 md:-ml-0 -ml-20">
            <div className="px-40 w-96 text-center">
              <img src="/icon/about/Group 33.png" alt="" />
              <h1 className="text-white font-black text-6xl">+10K</h1>
              <h1 className="text-white font-md text-2xl">Likes</h1>
            </div>
            <div className="px-40 w-96 text-center">
              <img src="/icon/about/Group 34.png" alt="" />
              <h1 className="text-white font-black text-6xl">24</h1>
              <h1 className="text-white font-md text-2xl">Hours</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="font-figtree mt-20">
        <div className="text-center ">
          <div className="relative inline-flex rotate-12 md:mb-10 hover:rotate-0 duration-100 hover:scale-150">
            <span className="absolute inset-x-0 bottom-0 border-b-[10px] md:border-b-[20px] rounded-lg border-dongker"></span>
            <h1 className="relative text-2xl md:text-6xl font-bold text-slate-800 sm:text-6xl lg:text-7xl">
              Admin & Founder
            </h1>
          </div>
          <div className="md:flex items-center space-y-56 md:space-x-20 justify-center mx-auto px-24 mt-52 md:mt-20  md:px-32">
            <div className="w-96">
              <div className="bg-biru rounded-lg w-60 h-60 mt-28" />
              <img
                src="/img/about/Foto.jpg"
                className="rounded-full w-60 -mt-[400px] -ml-20"
                alt=""
              />
              <div className="text-white">
                <h1 className="text-xl mt-4 -ml-[150px] md:-ml-[20px] font-bold">
                  Fabyan Yastika Permana
                </h1>
                <h1 className="text-start pl-[10px]">Website Developer</h1>
              </div>
              <div className="flex space-x-5 w-10  justify-center items-center ml-[100px] mt-10">
                <img
                  src="/icon/about/socmed/Group 35.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 36.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 37.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 38.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
              </div>
            </div>
            <div className="w-96">
              <div className="bg-biru rounded-lg w-60 h-60 md:-mt-28" />
              <img
                src="/img/about/Foto.jpg"
                className="rounded-full w-60 -mt-[400px] -ml-20"
                alt=""
              />
              <div className="text-white">
                <h1 className="text-xl mt-4 -ml-[150px] md:-ml-[20px] font-bold">
                  Fabyan Yastika Permana
                </h1>
                <h1 className="text-start pl-[10px]">Website Developer</h1>
              </div>
              <div className="flex space-x-5 w-10  justify-center items-center ml-[100px] mt-10">
                <img
                  src="/icon/about/socmed/Group 35.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 36.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 37.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 38.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
              </div>
            </div>
            <div className="w-96">
              <div className="bg-biru rounded-lg w-60 h-60  md:-mt-28" />
              <img
                src="/img/about/Foto.jpg"
                className="rounded-full w-60 -mt-[400px] -ml-20"
                alt=""
              />
              <div className="text-white">
                <h1 className="text-xl mt-4 -ml-[150px] md:-ml-[20px] font-bold">
                  Fabyan Yastika Permana
                </h1>
                <h1 className="text-start pl-[10px]">Website Developer</h1>
              </div>
              <div className="flex space-x-5 w-10  justify-center items-center ml-[100px] mt-10">
                <img
                  src="/icon/about/socmed/Group 35.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 36.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 37.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 38.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
              </div>
            </div>
            <div className="w-96">
              <div className="bg-biru rounded-lg w-60 h-60  md:-mt-28" />
              <img
                src="/img/about/Foto.jpg"
                className="rounded-full w-60 -mt-[400px] -ml-20"
                alt=""
              />
              <div className="text-white">
                <h1 className="text-xl mt-4 -ml-[150px] md:-ml-[20px] font-bold">
                  Fabyan Yastika Permana
                </h1>
                <h1 className="text-start pl-[10px]">Website Developer</h1>
              </div>
              <div className="flex space-x-5 w-10  justify-center items-center ml-[100px] mt-10">
                <img
                  src="/icon/about/socmed/Group 35.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 36.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 37.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
                <img
                  src="/icon/about/socmed/Group 38.png"
                  className=" opacity-75 hover:opacity-100 hover:scale-110 duration-150"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
