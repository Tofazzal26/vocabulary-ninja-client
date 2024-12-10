const Footer = () => {
  return (
    <div className="bg-[#fcf1f5]">
      <footer className="footer container mx-auto text-base-content p-10">
        <aside>
          <div className="flex items-center gap-4">
            <img
              src="/translate.png"
              alt="logo"
              className="h-[30px] md:h-[40px]"
            />
            <h2 className="text-[14px] md:text-[20px] text-[#301a52] font-urbanist font-black">
              Vocabulary-Ninja
            </h2>
          </div>
          <p className="text-base text-gray-700 md:w-[400px] font-semibold">
            Eros in cursus turpis massa tincidunt Faucibus scelerisque eleifend
            vulputate sapien nec sagittis.
          </p>
        </aside>
        <nav>
          <h6 className="text-[24px] font-semibold text-black mb-4">
            Information
          </h6>
          <a className=" font-semibold text-[15px] text-gray-700">
            Expert Videos
          </a>
          <a className=" font-semibold text-[15px] text-gray-700">
            Request A Demo
          </a>
          <a className="font-semibold text-[15px] text-gray-700">
            Customer Reviews
          </a>
          <a className="font-semibold text-[15px] text-gray-700">
            Press Release
          </a>
        </nav>
        <nav>
          <h6 className="text-[24px] font-semibold text-black mb-4">Careers</h6>
          <a className="font-semibold text-[15px] text-gray-700">My Account</a>
          <a className="font-semibold text-[15px] text-gray-700">Sitemap</a>
          <a className="font-semibold text-[15px] text-gray-700">
            Testimonials
          </a>
          <a className="font-semibold text-[15px] text-gray-700">
            Sign In / Register
          </a>
        </nav>
        <nav>
          <h6 className="text-[24px] font-semibold text-black mb-4">
            About Us
          </h6>
          <a className="font-semibold text-[15px] text-gray-700">About Us</a>
          <a className="font-semibold text-[15px] text-gray-700">Our Team</a>
          <a className="font-semibold text-[15px] text-gray-700">
            Company Info
          </a>
          <a className="font-semibold text-[15px] text-gray-700">
            Corporate Info
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
