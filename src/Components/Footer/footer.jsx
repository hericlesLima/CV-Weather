import React from "react";

//CSS
import "../Footer/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div id="footer"></div>
      <div className="footer-content">
        <div className="footer-details">
          <p className="footer-title">Social</p>
          <a href="https://www.facebook.com/lmntor/" target="_blank" className="footer-link">Facebook</a>
          <a href="https://www.linkedin.com/in/hericles-lima/" target="_blank" className="footer-link">Linkedin</a>
        </div>
        <div className="separator"></div>
        <div className="footer-details">
          <p className="footer-title">E-mail</p>
          <p>hericlesrecheado@gmail.com</p>
          <p>hericlesrecheado@outlook.com</p>
        </div>
        <div className="separator"></div>
        <div className="footer-details">
          <p className="footer-title">Phone's</p>
          <p>+238 977 68 95</p>
          <p>+238 977 68 95</p>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright @ 2021 | Klima di Kabu Verde | Powered by: Héricles Recheado</p>
      </div>
    </div>
  );
}
