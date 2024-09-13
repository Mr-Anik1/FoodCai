const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-component">
        <p>
          &copy; {currentYear} <span className="app-name">Food Cai</span>. All
          rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
