/* eslint-disable react/no-unescaped-entities */

import PhotoGallery from "@/src/components/PhotoGallery";
import { Reveal } from "@/src/components/utils/Reveal";
import { Sparkle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto mt-8 sm:mt-6">
      {/* QUI SOMMES-NOUS ? */}

      <div className="container pb-12 mx-auto text-center md:px-24" id="about">
        <Reveal delay={0}>
          <div className="px-4 py-12 mb-2 sm:px-6 md:px-12">
            <h1 className="hidden">Laure and co Médiation animale</h1>
            <h2 className="mb-6 text-2xl font-fredoka sm:text-3xl md:text-4xl text-primary">
              Qui sommes-nous ?
            </h2>
            <div className="w-16 h-1 mx-auto mb-8 rounded-full bg-primary"></div>
            <p className="text-center">
              Je suis Laure Guyetand, une médiatrice animale passionnée par le
              bien-être des humains et des animaux. <br />
              Forte de cette passion, j'ai fondé « Laure & Co » dans le but
              d'apporter du réconfort et de la joie à travers la médiation
              animale.
            </p>
            <p className="text-center">
              En 2022, j'ai obtenu mon diplôme d'Accompagnante Educative et
              Sociale (AES) pour affiner mon expérience auprès des personnes
              âgées et répondre au mieux à leurs besoins. Par la suite, j'ai
              suivi une formation en médiation par l'animal avec l'organisme
              UMA, obtenant ainsi mon certificat en mars 2024.
            </p>
            <p className="text-center">
              Accompagnée de mes fidèles compagnons ma chienne Life et ma
              ponette Arizona, je m’engage à égayer le quotidien de divers
              publics. Mon objectif est d'étendre mes services à un public plus
              large et d'agrandir notre belle équipe. Restez informés en suivant
              nos actualités, car de nouvelles aventures s'annoncent !
            </p>
          </div>
        </Reveal>
      </div>

      {/* MES DEUX COEQUIPIERES */}

      <div className="px-2 py-16 shadow-lg sm:px-4 bg-primary">
        <div className="container mx-auto md:px-24">
          <Reveal>
            <div>
              <h2 className="mb-6 text-2xl text-center text-white font-fredoka sm:text-3xl md:text-4xl">
                Mes deux coéquipières
              </h2>
              <div className="w-16 h-1 mx-auto mb-8 bg-white rounded-full"></div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-6 px-2 py-6 mb-8 bg-white rounded-lg shadow-lg md:flex-row sm:px-6 md:px-12 md:py-8">
                  <Image
                    src="/Arizona.jpg"
                    alt="Arizona"
                    width={300}
                    height={300}
                    className="rounded-lg w-full md:w-[300px] h-auto"
                  />
                  <p className="p-4 text-left md:p-0">
                    <b>Arizona</b>, une ponette ONC âgée de 19 ans, mesure
                    environ 1m30, ce qui en fait une grande ponette. Depuis 14
                    ans, notre complicité n'a cessé de grandir jusqu'à ce que je
                    devienne officiellement sa propriétaire en 2018. Calme et
                    posée de nature, Arizona sait se faire entendre lorsqu’elle
                    n’est pas d’humeur à obéir ou à recevoir des câlins. Très
                    sociable, elle s’entend à merveille avec tous les animaux
                    devenant rapidement l’amie de chacun. Sa passion ultime ? La
                    nourriture, elle ne dit jamais non à une friandise.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-6 px-2 py-6 mb-8 bg-white rounded-lg shadow-lg md:flex-row-reverse sm:px-6 md:px-12 md:py-8">
                  <Image
                    src="/Life.jpg"
                    alt="Life"
                    width={350}
                    height={200}
                    className="rounded-lg w-full md:w-[350px] h-auto"
                  />
                  <p className="p-4 text-left md:p-0">
                    <b>Life</b>, chien finnois de Laponie âgée de 2 ans, est une
                    adorable boule de poils qui évoque un mini chien de traîneau
                    avec sa petite taille, son poil mi-long et sa queue enroulée
                    sur son dos. Toujours souriante, elle déborde d'énergie tout
                    en sachant se montrer calme lorsque nécessaire. Sa plus
                    grande qualité réside dans sa sociabilité infinie, tant avec
                    les autres animaux qu'avec les humains, faisant de chaque
                    être rencontré un ami. Comme Arizona, Life ne résiste jamais
                    à une friandise (ou plusieurs).
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Qu'est-ce que la médiation animale ? */}
      <div className="px-2 py-16 shadow-lg sm:px-4 md:px-24 md:py-24 " id="aaa">
        <div className="container mx-auto md:px-24">
          <Reveal>
            <div>
              <h2 className="mb-6 text-2xl text-center font-fredoka sm:text-3xl md:text-4xl text-primary">
                Qu'est-ce que la médiation animale ?
              </h2>
              <div className="w-16 h-1 mx-auto mb-8 rounded-full bg-primary"></div>
              <p className="mb-6 text-base text-center text-gray-800 sm:text-lg">
                La médiation animale est une thérapie à médiation qui permet,
                avec des animaux spécifiquement éduqués, de maintenir ou
                d’améliorer un état de bien-être physique, psychologique,
                affectif et social. Elle regroupe la thérapie assistée par
                l’animal et l’animation assistée par l’animal.
              </p>
              <p className="text-base text-center text-gray-800 sm:text-lg">
                La médiation animale favorise la communication, motive
                l’activité physique, diminue l’anxiété, améliore la motricité,
                favorise l’autonomie, augmente l’estime de soi, diminue la
                solitude, crée ou recrée des liens sociaux, apprend à gérer les
                émotions, aide à lâcher prise, stimule la concentration, stimule
                le langage, etc.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* QU'EST-CE QUE L'AAA ET LA TAA ? */}
      <div className="px-2 py-16 shadow-lg sm:px-4 md:px-24 md:py-16 bg-secondary">
        <div className="container mx-auto md:px-24">
          <Reveal>
            <div>
              <h2 className="mb-6 text-2xl text-center text-white font-fredoka sm:text-3xl md:text-4xl">
                Qu’est-ce que l’AAA et la TAA?
              </h2>

              <div className="w-16 h-1 mx-auto mb-8 bg-white rounded-full"></div>

              <div className="flex flex-col gap-6 md:flex-row">
                <div className="w-full px-6 py-6 mb-6 bg-white rounded-lg shadow-lg md:w-1/2 sm:px-6 md:px-12 md:py-8 md:mb-8">
                  <h3 className="my-4 text-center font-fredoka">
                    Animation Assistée par l’Animal (AAA)
                  </h3>
                  <p className="text-center">
                    C’est une méthode d’intervention qui est, de manière
                    générale, une méthode préventive et ludique où l’animal est
                    présent dans le but d’améliorer la qualité de vie des
                    personnes ciblées en augmentant leur motivation à participer
                    à des activités récréatives. L’animal devient le centre
                    d’intérêt de l’activité. Ces interventions se déroulent,
                    généralement, en groupe même s’il est possible de faire des
                    séances individuelles. Les différentes interventions
                    assistées par l’animal sont diverses et variées, et les
                    méthodes de travail et leurs objectifs sont aussi différents
                    que les personnes et les problématiques ciblées. Les séances
                    peuvent être régulières ou occasionnelles.
                  </p>
                </div>
                <div className="w-full px-6 py-6 mb-6 bg-white rounded-lg shadow-lg md:w-1/2 sm:px-6 md:px-12 md:py-8 md:mb-8">
                  <h3 className="my-4 text-center font-fredoka">
                    Thérapie Assistée par l’Animal (TAA)
                  </h3>
                  <p className="text-center">
                    C’est une méthode d’intervention utilisée comme alternative
                    ou complémentaire aux thérapies conventionnelles. L’animal
                    devient un médiateur entre le professionnel et le patient.
                    Il est considéré comme un « collègue » thérapeutique. Ces
                    séances se déroulent en individuel ou en petit groupe, et
                    des objectifs à visée thérapeutique doivent être établis au
                    préalable, lors de réunions de travail avec les
                    professionnels de l’institution d’accueil. Les séances sont
                    régulières, minimum 1 fois tous les 15 jours, idéalement 1
                    fois par semaine. /!\ La TAA ne remplace pas les
                    consultations thérapeutiques.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ACCUEILLIR UNE SEANCE */}
      <div
        className="px-2 py-16 bg-white rounded-lg shadow-lg sm:px-4 md:px-24 md:py-16"
        id="seance"
      >
        <div className="container mx-auto md:px-24">
          <Reveal>
            <div className="px-2 pb-6">
              <h2 className="mb-6 text-2xl text-center font-fredoka sm:text-3xl md:text-4xl text-primary">
                Comment accueillir une séance ?
              </h2>
              <div className="w-16 h-1 mx-auto mb-16 rounded-full bg-primary"></div>

              <div className="flex flex-col justify-between gap-8 text-center md:flex-row">
                <div className="w-full p-2 mb-6 rounded-lg shadow-lg md:w-1/3 sm:p-6 md:px-6 md:mb-0">
                  <h3 className="flex items-center justify-center gap-2 mb-4 -ml-2 font-fredoka sm:gap-4 sm:-ml-6">
                    <Sparkle strokeWidth={2.25} /> Le matériel
                  </h3>
                  <p>
                    Pour les séances collectives j’ai besoin, de votre part,
                    d’une table, ou deux selon le nombre de bénéficiaires qui
                    participent, et des chaises. J’apporte tout le matériel
                    nécessaire pour assurer le bon déroulement de l’activité.
                  </p>
                </div>
                <div className="w-full p-4 pb-2 mb-6 rounded-lg shadow-lg md:w-1/3 sm:p-6 md:px-6 md:mb-0">
                  <h3 className="flex items-center justify-center gap-2 mb-4 -ml-2 font-fredoka sm:gap-4 sm:-ml-6">
                    <Sparkle strokeWidth={2.25} /> Le Lieu
                  </h3>
                  <p>
                    Pour la sécurité des animaux je souhaite pratiquer les
                    séances dans un endroit clos. Les séances peuvent autant se
                    dérouler à l’intérieur qu’à l’extérieur (clôturé) du
                    bâtiment. Il est important que l’activité se déroule dans un
                    lieu calme où il faut éviter les lieux de passage.
                  </p>
                </div>
                <div className="w-full p-4 rounded-lg shadow-lg md:w-1/3 sm:p-6 md:px-6">
                  <h3 className="flex items-center justify-center gap-2 mb-4 -ml-2 font-fredoka sm:gap-4 sm:-ml-6">
                    <Sparkle strokeWidth={2.25} /> Fin de séance
                  </h3>
                  <p>
                    A la fin de la séance je range et nettoie le matériel et le
                    lieu. Je prendrais 5 minutes avec le professionnel de
                    l’établissement qui reste lors de l’activité afin de remplir
                    une évaluation de la séance.
                  </p>
                </div>
              </div>
              <div className="w-full p-4 mx-auto mt-6 rounded-lg shadow-lg md:w-2/3 sm:p-8 md:p-12">
                <h3 className="text-center font-fredoka">
                  Prendre contact auprès de Laure & Co
                </h3>
                <ul className="text-center">
                  <li>Expliquer vos attentes et vos objectifs</li>
                  <li>
                    Choisir le type de séance que vous souhaitez : thérapie ou
                    animation
                  </li>
                  <li>
                    Notifier le nombre de bénéficiaires qui vont participer
                  </li>
                  <li>
                    Notifier les aspects organisationnels : fréquences, date et
                    professionnels présents
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      {/* PHOTO DE LAURE ET CO */}
      <div className="px-2 py-16 shadow-lg sm:px-4 md:px-24 md:py-16 bg-primary">
        <div className="container mx-auto md:px-24">
          <h2 className="mb-12 text-2xl text-center text-white font-fredoka sm:text-3xl md:text-4xl">
            Galerie photos
          </h2>
          <PhotoGallery />
        </div>
      </div>

      {/* TARIFS ET PRESTATIONS */}
      <div>
        <div
          className="container px-3 py-16 mx-auto md:py-16 md:px-24"
          id="tarifs"
        >
          <Reveal>
            <div>
              <h2 className="mb-6 text-2xl text-center font-fredoka text-primary sm:text-3xl md:text-4xl">
                Tarifs et prestations
              </h2>
              <div className="w-16 h-1 mx-auto mb-4 rounded-full bg-primary"></div>

              <div>
                <h3 className="py-4 text-center font-fredoka md:py-6">
                  Animation Assistée par l'animal
                </h3>
                <div className="flex flex-col justify-between gap-6 md:flex-row">
                  <div className="flex flex-col w-full md:w-3/4">
                    <div className="w-full px-4 py-6 mb-3 bg-white rounded-lg shadow-lg sm:px-6 md:px-12 md:py-8">
                      <h4>Séance collective</h4>
                      <p className="mt-4 text-left">
                        Nombre de participants : de 6 à 8 maximum selon le
                        public.
                        <br /> Il est possible d’ajouter 4 personnes
                        supplémentaires si accompagnées par un professionnel de
                        l’établissement d’accueil.
                      </p>
                      <p className="text-left">Durée : 1h à 1h30</p>
                      <p className="text-left text-primary">
                        <b>
                          TARIF : 90€ / heure + 10€ par personne supplémentaire.
                        </b>{" "}
                        (Hors frais de déplacement)
                      </p>
                      <p className="text-left">
                        Petit plus : en collaboration avec la Cavale Attraction,
                        nous vous proposons des séances de médiation animale à
                        bord d’une calèche. <br />
                        *Minimum 1H30 - maximum 3H.
                      </p>
                      <p className="text-left text-primary">
                        <b>TARIF : de 200€ à 280€ selon la formule choisie*.</b>{" "}
                        <br /> <i>* sur demande.</i>
                      </p>
                    </div>
                    <div className="w-full px-4 py-6 mb-8 bg-white rounded-lg shadow-lg sm:px-6 md:px-12 md:py-8">
                      <h4 className="font-fredoka">Séances individuelles</h4>
                      <p className="mt-4 text-left">
                        Nombre de participant : 1 personne.
                        <br />
                        Il est possible d’ajouter une personne pour une séance
                        en duo (pour un couple par exemple).
                      </p>
                      <p className="text-left">Durée : 30mins à 1h</p>
                      <p className="text-left text-primary">
                        <b>TARIF : 40€ / heure.</b> (Hors frais de déplacement)
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 py-6 mb-8 bg-white rounded-lg shadow-lg md:w-1/2 sm:px-6 md:px-12 md:py-8">
                    <h4 className="font-fredoka">
                      Exemples d’objectifs d’animation
                    </h4>
                    <ul className="my-4">
                      <li>Apaiser les angoisses et l’anxiété</li>
                      <li>Échanges et interactions</li>
                      <li>Stimuler la motricité</li>
                      <li>Stimuler le langage et la communication</li>
                      <li>
                        Améliorer le sentiment d’utilité et de valorisation
                      </li>
                      <li>Apporter de la joie et de la tendresse</li>
                    </ul>
                    <h4 className="font-fredoka">Informations</h4>
                    <ul className="my-4">
                      <li>
                        Les participants peuvent différer d’une séance à une
                        autre
                      </li>
                      <li>
                        Présence recommandée d’un professionnel de
                        l’établissement lors des séances
                      </li>
                      <li>
                        Compte-rendu fourni à chaque séance à la demande de
                        l’établissement
                      </li>
                      <li>
                        Évaluation à remplir par le professionnel de
                        l’établissement présent lors de la séance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="py-4 text-center font-fredoka md:py-6">
                Thérapie Assistée par l’animal
              </h3>
              <div className="flex flex-col justify-between gap-6 md:flex-row">
                <div className="flex flex-col w-full md:w-3/4">
                  <div className="w-full px-4 py-6 mb-3 bg-white rounded-lg shadow-lg sm:px-6 md:px-12 md:py-8">
                    <h4 className="font-fredoka">Séance collective</h4>
                    <p className="mt-4 text-left">
                      Nombre de participants : 4 personnes maximum.
                    </p>
                    <p className="text-left">Durée : 1h</p>
                    <p className="text-left text-primary">
                      <b>TARIF : 60€ / heure</b> (Hors frais de déplacement)
                    </p>
                  </div>
                  <div className="w-full px-4 py-6 mb-8 bg-white rounded-lg shadow-lg sm:px-6 md:px-12 md:py-8">
                    <h4 className="font-fredoka">Séances individuelles</h4>
                    <p className="mt-4 text-left">
                      Nombre de participant : 1 personne.
                      <br />
                      Il est possible d’ajouter une personne pour une séance en
                      duo (pour un couple par exemple).
                    </p>
                    <p className="text-left">Durée : 30mins à 1h</p>
                    <p className="text-left text-primary">
                      <b>TARIF : 40€ / heure.</b> (Hors frais de déplacement)
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 py-6 mb-8 bg-white rounded-lg shadow-lg md:w-1/2 sm:px-6 md:px-12 md:py-8">
                  <h4 className="font-fredoka">
                    Exemples d’objectifs d’animation
                  </h4>
                  <ul className="my-4">
                    <li>Apaiser les angoisses et l’anxiété</li>
                    <li>Valorisation du bénéficiaire</li>
                    <li>Améliorer les interactions sociales</li>
                    <li>Apporter de la joie et de la tendresse</li>
                    <li>Rompre l’isolement et la solitude</li>
                  </ul>
                  <h4 className="font-fredoka">Informations</h4>
                  <ul className="my-4">
                    <li>
                      Les mêmes participants à chaque cycle de séances (suivies)
                    </li>
                    <li>
                      Présence des professionnels de l’établissement aux séances
                    </li>
                    <li>Compte-rendu fourni à chaque séance à la demande</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="py-4 text-center font-fredoka md:py-6">
                Séances à domicile
              </h3>
              <div className="flex flex-col justify-between gap-6 md:flex-row">
                <div className="flex flex-col w-full md:w-3/4">
                  <div className="w-full px-4 py-6 mb-3 bg-white rounded-lg shadow-lg sm:px-6 md:px-12 md:py-8">
                    <h4>Séance collective</h4>
                    <p className="mt-4 text-left">
                      Nombre de participants : 4 personnes maximum.
                    </p>
                    <p className="text-left">Durée : 1h</p>
                    <p className="text-left text-primary">
                      <b>TARIF : 60€ / heure </b>
                      (Hors frais de déplacement)
                    </p>
                  </div>
                  <div className="w-full px-4 py-6 mb-8 bg-white rounded-lg shadow-lg sm:px-6 md:px-12 md:py-8">
                    <h4 className="font-fredoka">Séances individuelles</h4>
                    <p className="mt-4 text-left">
                      Nombre de participant : 1<br />
                      Il est possible d’ajouter une personne pour une séance en
                      duo (pour un couple par exemple).
                    </p>
                    <p className="text-left">Durée : 30mins à 1h</p>
                    <p className="text-left text-primary">
                      <b>TARIF : 40€ / heure.</b> (Hors frais de déplacement)
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 py-4 mb-8 bg-white rounded-lg shadow-lg md:w-1/2 sm:px-6 md:px-12 md:py-8">
                  <h4 className="font-fredoka">Exemples d’objectifs</h4>
                  <ul className="my-4">
                    <li>Rompre l’isolement, la solitude</li>
                    <li>Améliorer la motricité</li>
                    <li>Améliorer le moral</li>
                    <li>Stimuler la communication et la mémoire</li>
                  </ul>
                  <h4 className="font-fredoka">Informations</h4>
                  <ul className="my-4">
                    <li>Séances de TAA ou d’AAA à votre choix</li>
                    <li>
                      Présence d’un soignant, d’un proche ou de la tutelle si le
                      ou les bénéficiaires ont des pathologies qui préconisent
                      une aide pendant la séance
                    </li>
                    <li>
                      Compte-rendu fourni à chaque séance à la demande de
                      l’établissement
                    </li>
                    <li>Compte-rendu fourni à chaque séance à la demande</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* INFORMATIONS COMPLÉMENTAIRES */}
      <div className="py-16 bg-secondary" id="info-sup">
        <div className="container mx-auto mb-12">
          <Reveal>
            <div>
              <h2 className="mb-6 text-2xl text-center text-white font-fredoka sm:text-3xl md:text-4xl">
                Informations complémentaires
              </h2>
              <div className="w-16 h-1 mx-auto mb-16 bg-white rounded-full"></div>

              <div className="flex flex-col gap-6 px-2 mb-8 md:flex-row md:gap-8 sm:px-6 md:px-12">
                <div className="w-full p-4 bg-white rounded-lg shadow-lg md:w-1/3 md:p-6">
                  <h4 className="text-center font-fredoka">
                    Les tarifs comprennent :
                  </h4>
                  <ul className="mt-6">
                    <li>
                      Le suivi et les soins vétérinaires des animaux médiateurs
                    </li>
                    <li>L’alimentation des animaux</li>
                    <li>L’entretien du véhicule et du van</li>
                    <li>Le matériel pour les séances de médiation</li>
                    <li>Ma rémunération</li>
                  </ul>
                </div>
                <div className="w-full p-4 bg-white rounded-lg shadow-lg md:w-1/3 md:p-6">
                  <h4 className="text-center font-fredoka">
                    Frais kilométriques :
                  </h4>
                  <ul className="mt-6">
                    <li>Départ de Xertigny</li>
                    <li>A partir de 5km</li>
                    <li>0,50€ le km aller/retour*</li>
                    <li>1,00€ le km aller/retour avec le van*</li>
                    <p className="pt-3 text-left text-primary">
                      <i>* Évolutif</i>
                    </p>
                  </ul>
                </div>
                <div className="w-full p-4 bg-white rounded-lg shadow-lg md:w-1/3 md:p-6">
                  <h4 className="text-center font-fredoka">
                    Astuces pour diminuer le prix
                  </h4>
                  <ul className="mt-6">
                    <li>
                      Trouver un financeur (département, caisse de retraite,
                      CAF, appel à projets, ...)
                    </li>
                    <li>
                      Connaître un établissement souhaitant mettre en place de
                      la médiation par l’animal dans le même secteur
                      géographique afin de partager les frais de déplacement.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
