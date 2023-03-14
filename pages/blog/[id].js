import Head from "next/head";
import Image from "next/image";

import Defaultbaner from "../../components/defaultbaner";
import Footer from "../../components/footer";

import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import { post } from "jquery";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Menu from "../../components/menu";

export default function Home({ configurs, service_data, services }) {
  return (
    <>
      <Head>
        <title>cico </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_cico.png" />
        <meta charSet="utf-8" />
      </Head>
      <main className={styles.main}>
        <Defaultbaner
          title={service_data.titre}
          facebook_link={configurs.facebook}
          twitter_link={configurs.twitter}
          linkedin_link={configurs.linkedin}
        />
        <div className="relative_block">
          <div className="section_1">
            <img
              src={`http://localhost/fidbagraphics/2023/fevrier/cico/back-office/Views/uploads-images/${service_data.imagenavant}`}
            />

            <h2>{service_data.titre}</h2>
            <div className="details">{service_data.contenu}</div>

            <div className="additionnal_posts">
              <h5>Voir aussi</h5>

              {services?.services?.slice(0, 7)?.map((item, index) => (
                <Link href={`./${item.id_publication}`}>
                  <div className="article">
                    <div className="image_en_avant">
                      <img
                        src={`http://localhost/fidbagraphics/2023/fevrier/cico/back-office/Views/uploads-images/${item.imagenavant}`}
                      />
                    </div>
                    <div className="text">
                      {" "}
                      {item.titre.substr(0, 60)}
                      ...
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/*  */}
        </div>

        <Footer
          apropos={configurs.Apropos}
          facebook_link={configurs.facebook}
          twitter_link={configurs.twitter}
          linkedin_link={configurs.linkedin}
          adress={configurs.adress}
          phone_number={configurs.telephone}
          email={configurs.email}
        />
        <div className="container-fluid menu_footer">
          <Menu />
        </div>
      </main>
    </>
  );
}
const apiurls =
  "http://localhost/fidbagraphics/2023/fevrier/cico/back-office/api-v1?post=";

export const getServerSideProps = async ({ params }) => {
  const router = params;
  const { id } = router;

  const service = await fetch(`${apiurls}${id}`);

  const respons = await fetch(
    "http://localhost/fidbagraphics/2023/fevrier/cico/back-office/api-v1?configs=cico"
  );

  const posts_response = await fetch(
    "http://localhost/fidbagraphics/2023/fevrier/cico/back-office/api-v1?datas=all"
  );
  const configurs = await respons.json();
  const services = await posts_response.json();
  const service_data = await service.json();

  console.log("livres_a:", posts_response);
  return {
    props: {
      configurs,
      services,
      service_data,
    },
  };
};
