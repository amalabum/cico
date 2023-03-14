import Header from "./header";
import Link from "next/link";
const Banierre_acceuil = (props) => {
  return (
    <div className="Banierre_acceuil">
      <Header
        facebook_l={props.facebook_link}
        twitter_l={props.twitter_link}
        linkedin_l={props.linkedin_link}
        enseign="Sico-sarl."
        logo="/logo_cico.png"
        action_name="demander un devis"
        action_url="collections"
      />
      <div className="Banierre_acceuil_containt">
        <h1>
          {" "}
          NOUS CONSTRUISONS <br /> DES{" "}
          <span className="coloric_yellow_span">
            GRANDS <br /> PROJETS
          </span>
          .{" "}
        </h1>{" "}
        <h3>
          {" "}
          Notre mission est de mettre à la disposition de la population <br />
          Congolaise les services de qualité en matière de génie civil...
        </h3>{" "}
        <p className="devis_container ">
          <Link href="../contact" className="devis">
            Soumettre un projet à l'étude
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Banierre_acceuil;
