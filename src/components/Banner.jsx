import Logo from "../assets/Banner.jpg";
export default function Banner() {
  return (
    <div
      className={`bg-[url(${Logo})] w-full h-[60vh] bg-center bg-cover mt-[70px] flex items-end`}
      style={{ backgroundImage: `url(${Logo})` ,
        
    }}
    >
      <div className="text-white w-full h-[60px] text-3xl flex flex-row items-center justify-center bg-gray-900 opacity-80 ">Spiderman No way Home!</div>
    </div>
  );
}
