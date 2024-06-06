import React from 'react';
const About = () => {
  return (
    <footer
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div
        className="flex items-center justify-center border-b-2 border-neutral-200 dark:border-neutral-500 lg:justify-between">
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h6
              className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  <span className="sr-only">Hiệp Phát</span>
                  <img alt="logo" className="h-16 w-auto sm:h-16 p-3" src="/assets/images/logo.ico" />
              HIỆP PHÁT 
            </h6>
            <p>
            Trường dạy lái xe đào tạo lái xe an toàn đường bộ, sơ cấp cứu và lái xe chuyên nghiệp trên nhiều lĩnh vực thông qua đào tạo trực tuyến trên nền tảng số, ngoại trừ các bài học trên ôtô.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Thành viên
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"
              >35 Giảng Viên</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"
              >2000 Học Viên</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"
              >2000 Học Viên</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"
              >31000 Học Viên Đã Được Đào Tạo</a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Bạn muốn đăng ký học lái xe ?
            </h6>
            <p className="mb-4">
              <p className="text-neutral-600 dark:text-neutral-200"
              >Bạn có nhu cầu Đăng ký học lái xe số sàn hay số tự động?
              Các giáo viên hướng dẫn của Hiệp Phát luôn sẵn sàng điều chỉnh khoá học theo nhu cầu và thời gian của bạn
              Các giáo viên hướng dẫn của Hng điều chỉnh khoá học theo nhu cầu và thời gian của bạn 
              </p>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Liên Hệ
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              176 Đường Thế Lữ, Tân Nhựt, Bình Chánh, Thành phố Hồ Chí Minh
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              hiepphat@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd" />
              </svg>
              +84 911 739 119
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>Copyright © 2024: Bản quyền thuộc về Trung tâm dạy nghề lái xe  </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tw-elements.com/"
        >Hiệp Phát</a>
      </div>
    </footer>
  );
};
export default About;
