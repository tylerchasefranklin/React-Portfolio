import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
    <footer class="bg-transparent text-center text-white pb-3">
        <div class="container">
          <section>
            <a class="btn m-1" href="https://www.linkedin.com/in/chase-franklin-3aa497100/" target="_blank" role="button"><i class="fa-brands fa-linkedin fa-bounce fa-xl"></i></a>
            <a class="btn m-1" href="https://github.com/tylerchasefranklin" target="_blank" role="button"><i class="fa-brands fa-github fa-bounce fa-xl"></i></a>
          </section>
        </div>
        
        <div class="text-center p-2">
          © 2023 Copyright: Chase Franklin
        </div>
        
      </footer>
    );
};

export default Footer;