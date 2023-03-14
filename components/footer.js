import Link from "next/link";
import Image from "next/image";
import Menu from "../components/menu";
const Footer = (props) => {
  return (
    <div className="footer container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="ftco-footer-widget mb-4 ">
              <h2 className="">Qui sommes-nous ? </h2>
              <p className="mr-0">{props.apropos.substr(0, 300)} ...</p>
              <div className="social_m_on_footer">
                <ul>
                  <Link href={props.twitter_link}>
                    <li>
                      <Image src="/icons/3.png" alt="" width={26} height={26} />
                    </li>
                  </Link>
                  <Link href={props.linkedin_link}>
                    <li>
                      {" "}
                      <Image src="/icons/2.png" alt="" width={26} height={26} />
                    </li>
                  </Link>
                  <Link href={props.facebook_link}>
                    <li>
                      {" "}
                      <Image src="/icons/1.png" alt="" width={26} height={26} />
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="">liens rapides</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href="../services">Voir tous nos Services</Link>
                </li>
                <li>
                  <Link href="../blog/1"> la plus récente realisation</Link>
                </li>
                <li>
                  <Link href="../contact">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="">Avez-vous une question ?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">{props.adress}</span>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon icon-phone"></span>
                      <span className="text">{props.phone_number}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon icon-envelope"></span>
                      <span className="text">{props.email}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12  mt-5 text-center small">
            <p className="mb-5 copyright_cico">
              Copyright &copy; 2023
              <span> cico sarl, réalisé avec 💛 par </span>
              <Link href="offres.fidbagraphics.com" target="_blank">
                fidbagraphics
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid menu_footer">
        {" "}
        <Menu />
      </div> */}
    </div>
  );
};

export default Footer;

export const getServerSideProps = async () => {
  const respons = await fetch(
    "http://localhost/fidbagraphics/2023/fevrier/cico/back-office/api-v1?configs=cico"
  );

  // const congo = await fetch(
  //   "http://livraze-admin.ritach.net/api-v1?datas=livres_congolais"
  // );
  const configs = await respons.json();

  return {
    props: {
      configs,
    },
  };
};
