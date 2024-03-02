const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content text-center flex flex-wrap md:flex-row md:justify-around">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      {/* 
      <div>
        <h3 className="text-sm bg-base-200 text-base-content text-center">
          Developed by{" "}
          <span className="underline bg-gradient-to-r from-yellow-400 to-red-500 hover:from-red-500 hover:to-yellow-500 p-2 rounded-full text-gray-700">
            <a
              href="https://www.linkedin.com/in/sadmanryanriad/"
              target="_blank"
            >
              Sadman Ryan Riad
            </a>
          </span>{" "}
        </h3>
      </div> */}
    </>
  );
};

export default Footer;
