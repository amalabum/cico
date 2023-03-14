import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";
const header = (props) => {
  return (
    <div className="header">
      <div className="enseign">
        <Link href="../">
          {" "}
          <span className="logo">
            <Image src={props.logo} alt="" width={96} height={96} />
          </span>
        </Link>
        {/* <span className="nom">{props.enseign}</span> */}
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="action">
        <ul>
          <Link href={props.twitter_l}>
            <li>
              <Image src="/icons/3.png" alt="" width={26} height={26} />
            </li>
          </Link>
          <Link href={props.linkedin_l}>
            <li>
              {" "}
              <Image src="/icons/2.png" alt="" width={26} height={26} />
            </li>
          </Link>
          <Link href={props.facebook_l}>
            <li>
              {" "}
              <Image src="/icons/1.png" alt="" width={26} height={26} />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default header;
