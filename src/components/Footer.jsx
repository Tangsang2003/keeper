import React from "react";

function Footer() {
    const yearToday = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {yearToday}, Tangsang2003</p>
        </footer>
    )
}

export default Footer;