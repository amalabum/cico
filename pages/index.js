import Head from "next/head";
import Image from "next/image";
import Banierre_acceuil from "../components/banierre_acceuil";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Menu from "../components/menu";
import Link from "next/link";
import Footer from "../components/footer";

export default function Home({ configurs, services }) {
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
        <Banierre_acceuil
          facebook_link={configurs.facebook}
          twitter_link={configurs.twitter}
          linkedin_link={configurs.linkedin}
        />
        <div className="section_container avec_marg">
          <div className="section_img"></div>
          <div className="section_text">
            {" "}
            <h6>TÉLÉCOMMUNICATION</h6>
            <h1>
              Vous êtes une entreprise œuvrant dans la télécommunication ou le
              transport d'énergie ?
            </h1>
            <p>
              CICO CONSTRUCTION regorge en <br />
              son sein des experts en montage des pylônes <br />
              selon le besoin de votre entreprise. <br />
              Faites-nous confiance <br />
              et bénéficiez de nos services .
            </p>
            <p className="mt-5">
              <Link href="../services" className="a_mylink">
                Voir d'autres services →
              </Link>
            </p>
          </div>
        </div>
        <div className="chiffres">
          <div className="container_chiff">
            <div className="bloc_1">
              <span>Nos</span>
              <h1>
                chiffres <br />
                clés.
              </h1>
              <Link href="#">En savoir plus</Link>
            </div>
            <div className="bloc_2">
              <h1>+ 10 </h1>
              <span>années d'éxperience</span>
            </div>
            <div className="bloc_3">
              <h1>+ 110 </h1>
              <span>Projets achevés </span>
            </div>
            <div className="bloc_3">
              <h1>10 000 000 </h1>
              <span>de chiffre d'affaires </span>
            </div>
            <div className="bloc_4">
              <h1>+ 20 </h1>
              <span> Conception et études </span>
            </div>
          </div>
        </div>
        <div className="projets_titre">
          <h1>Depuis notre blog </h1>
          Nous construisons, réhabilitons, modifions, rénovons et entretenons
          <b> tout type d'ouvrage de genie civil </b>; batiment, route, ponts,
          canivaux, murs de soutènement, systeme d'adduction d'eau
        </div>
        <div className="realisations ">
          {services?.services?.slice(0, 4)?.map((item, index) => (
            <Link href={`../blog/${item.id_publication}`} className="">
              {" "}
              <div className="realisation_n_iem">
                <div className="cover"></div>
                <img
                  src={`http://localhost/fidbagraphics/2023/fevrier/cico/back-office/Views/uploads-images/${item.imagenavant}`}
                />
                <div className="cover2">
                  <span className="">En savoir plus</span>
                </div>

                <h3>{item.titre}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="section_container avec_marg">
          <div className="section_text">
            {" "}
            <h6>CICO SARL UNE ENTREPRISE DE CONSTRUCTION</h6>
            <h1>Meilleur fournisseur de services industriels</h1>
            <p>
              Nous sommes dans ce secteur depuis 2010 et nous fournissons le
              meilleur prestations industrielles Nous sommes une entreprise de
              génie civil, spécialisée dans la construction, l’expertise
              immobilière, la fabrication et la vente des matériaux de
              construction. Créée en 2010, elle a son siège en Ville de Goma et
              des antennes à Kinshasa, Bukavu et Kalemie. Nous avons une
              couverture totale de toute la république Démocratique du Congo à
              travers nos quatre bureaux.
            </p>
            <p className="mt-5">
              <Link href="../services" className="a_mylink ">
                Voir d'autres services →
              </Link>
            </p>
          </div>
          <div className="section_img_3"></div>
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
export let getServerSideProps = async () => {
  const respons = await fetch(
    "http://localhost/fidbagraphics/2023/fevrier/cico/back-office/api-v1?configs=cico"
  );

  const posts_response = await fetch(
    "http://localhost/fidbagraphics/2023/fevrier/cico/back-office/api-v1?datas=all"
  );
  const configurs = await respons.json();
  const services = await posts_response.json();

  return {
    props: {
      configurs,
      services,
    },
  };
};
