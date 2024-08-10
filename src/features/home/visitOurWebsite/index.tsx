export function VisitOurWebsite() {
  return (
    <>
      <div className=" text-white-paper flex flex-col md:flex-row md:justify-between justify-center items-center p-5 m-5  lg:mx-80 my-16 lg:px-80 bg-no-repeat bg-cover bg-center  bg-[url('/assets/img/background-visit-website.png')] bg-[#525151]">
        <div>
          <img src="/assets/img/zamrood-logo-white.png" alt="" />
        </div>
        <div className="text-center flex flex-col justify-center">
          <p className="font-medium text-sm">
            Want to see other destinations? Check us out at our website
          </p>
          <div className="flex justify-center underline">
            <a href="" className="flex gap-1 font-semibold">
              <span>Pandooin.com</span>
              <img src="/assets/svg/common-arrow.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
