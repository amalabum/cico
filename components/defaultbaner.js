import Header from "./header";
import Link from "next/link";
// import { propTypes } from "react-bootstrap/esm/Image";
const Defaultbaner = (props) => {
  return (
    <div className="Banierre_default">
      <Header
        enseign="Sico-sarl."
        logo="/logo_cico.png"
        action_name="demander un devis"
        action_url="collections"
        facebook_l={props.facebook_link}
        twitter_l={props.twitter_link}
        linkedin_l={props.linkedin_link}
      />
      <div className="Banierre_acceuil_containt">
        <h2 className="text-center">{props.title}</h2>
        <h6 className="text-center">{props.legende}</h6>
      </div>
    </div>
  );
};
export default Defaultbaner;
