const Footer = () => {
    return (
      <footer className="bg-orange-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Fashion Hub. All rights reserved.
          </p>
          
        </div>
      </footer>
    );
  };
  
  export default Footer;