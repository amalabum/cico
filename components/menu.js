import Link from "next/link";
const Menu = () => {
  return (
    <div className="menu_container">
      <ul>
        <Link href="../">
          <li>
            <div className="menu_icons">
              <img src="/icons/1D.png" alt="" width={26} height={26} />
            </div>
            <div>Acceuil</div>
          </li>
        </Link>
        <Link href="../quisommesnous">
          <li>
            <div className="menu_icons">
              <img src="/icons/1C.png" alt="" width={26} height={26} />
            </div>
            <div>Apropos</div>
          </li>
        </Link>
        <Link href="../services">
          <li>
            <div className="menu_icons">
              <img src="/icons/1B.png" alt="" width={26} height={26} />
            </div>
            <div>Services</div>
          </li>
        </Link>

        <Link href="../contact">
          <li>
            <div className="menu_icons">
              <img src="/icons/1A.png" alt="" width={26} height={26} />
            </div>
            <div>contacts</div>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Menu;
