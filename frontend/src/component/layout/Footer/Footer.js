import React from "react";
import "./Footer.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import AttractionsIcon from "@mui/icons-material/Attractions";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CategoryIcon from "@mui/icons-material/Category";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerContainer">
        <div className="leftFooter">
          <h4>Quick's Link</h4>
          <Link className="quickLink" to="/about">
            <AttractionsIcon />
            About us
          </Link>
          <Link className="quickLink" to="/contact">
            <AddIcCallIcon />
            Contact us
          </Link>
          <Link className="quickLink" to="/products">
            <CategoryIcon />
            Products
          </Link>
          <Link className="quickLink" to="/login">
            <ExitToAppIcon />
            SignIn
          </Link>
        </div>

        <div className="midFooter">
          <h1>Auto Mania</h1>
          <h3>Providing high-quality car parts for any brands</h3>
          <p>
          A spare part, spare, service part, repair part, or replacement part, is an interchangeable part that is kept in an inventory and used for the repair or refurbishment of defective equipment/units.
          </p>
          
          <p className="copy">Copyrights 2022 &copy;Ziad Bin Tariq </p>
        </div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="https://twitter.com/">
            <TwitterIcon className="twitterSvgIcon" />
            Twitter
          </a>
          <a href="http://youtube.com">
            <YouTubeIcon className="youtubeSvgIcon" />
            Youtube
          </a>
          <a href="http://instagram.com">
            <InstagramIcon className="instagramSvgIcon" />
            Instagram
          </a>
          <a href="http://facebook.com">
            <FacebookIcon className="facebookSvgIcon" />
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
