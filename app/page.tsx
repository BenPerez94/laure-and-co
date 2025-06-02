/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto mt-12">
      <div className="container px-32 pb-12 mx-auto">
        <div className="px-12 py-8 mb-8 ">
          <h2 className="mb-6">Qui sommes-nous ?</h2>
          <p>
            Je suis Laure Guyetand, une médiatrice animale passionnée par le
            bien-être des humains et des animaux. <br />
            Forte de cette passion, j'ai fondé « Laure & Co » dans le but
            d'apporter du réconfort et de la joie à travers la médiation
            animale.
          </p>
          <p>
            En 2022, j'ai obtenu mon diplôme d'Accompagnante Educative et
            Sociale (AES) pour affiner monexpérience auprès des personnes âgées
            et répondre au mieux à leurs besoins. Par la suite, j'ai suivi une
            formation en médiation par l'animal avec l'organisme UMA, obtenant
            ainsi mon certificat en mars 2024.
          </p>
          <p>
            Accompagnée de mes fidèles compagnons ma chienne Life et ma ponette
            Arizona, je m’engageàégayer le quotidien de divers publics. Mon
            objectif est d'étendre mes services à unpublicpluslarge et
            d'agrandir notre belle équipe. Restez informés en suivant nos
            actualités, car de nouvelles aventures s'annoncent !
          </p>
        </div>
      </div>
      <div className="px-12 py-8 rounded-lg shadow-lg bg-secondary">
        <div className="container px-32 mx-auto">
          <h2 className="mb-10 text-center text-white">
            Mes deux coéquipières
          </h2>
          <div className="flex flex-col gap-2 ">
            <div className="flex items-center gap-6 px-12 py-8 mb-8 bg-white rounded-lg shadow-lg">
              <Image
                src="/arizona.jpg"
                alt="Arizona"
                width={300}
                height={300}
                className="rounded-lg "
              />
              <p>
                <b>Arizona</b>, une ponette ONC âgée de 19 ans, mesure
                environ1m30,ce qui en fait une grande ponette. Depuis 14 ans,
                notrecomplicitén'a cessé de grandir jusqu'à ce que je devienne
                officiellementsapropriétaire en 2018. Calme et posé de nature,
                Arizonasaitsefaire entendre lorsqu’elle n’est pas d’humeur à
                obéir ouàrecevoir des câlins. Très sociable, elle s’entend à
                merveilleavectous les animaux devenant rapidement l’amie de
                chacun. Sapassion ultime ? La nourriture, elle ne dit jamais
                nonàunefriandise.
              </p>
            </div>
            <div className="flex items-center gap-6 px-12 py-8 mb-8 bg-white rounded-lg shadow-lg">
              <p>
                <b>Life</b>, chien finnois de Laponie âgée de 2 ans, est une
                adorable boule de poils qui évoque un mini chien de traîneau
                avec sa petite taille, son poil mi-long et sa queue enroulée sur
                son dos. Toujours souriante, elle déborde d'énergie tout en
                sachant se montrer calme lorsque nécessaire. Sa plus grande
                qualité réside dans sa sociabilité infinie, tant avec les autres
                animaux qu'avec les humains, faisant de chaque être rencontré un
                ami. Comme Arizona, Life ne résiste jamais à une friandise (ou
                plusieurs).
              </p>
              <Image
                src="/Life.jpg"
                alt="Arizona"
                width={350}
                height={200}
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 py-16 bg-white rounded-lg shadow-lg ">
        <div className="container px-32 mx-auto">
          <h2 className="mb-16 text-center">Comment accueillir une séance ?</h2>
          <div className="flex justify-between gap-8 text-center">
            <div className="w-1/3 p-6 px-12 rounded-lg shadow-lg">
              <h3>Le matériel</h3>
              <p className="text-center">
                Pour les séances collectives j’ai besoin, de votre part, d’une
                table, ou deux selon le nombre de bénéficiaires qui participe,
                et des chaises. J’apporte tout le matériel nécessaire pour
                assurer le bon déroulement de l’activité.
              </p>
            </div>
            <div className="w-1/3 p-6 px-12 pb-2 rounded-lg shadow-lg">
              <h3>Le Lieu</h3>
              <p className="text-center">
                Pour la sécurité des animaux je souhaite pratiquer les séances
                dans un endroit clos. Les séances peuvent autant se dérouler à
                l’intérieur qu’à l’extérieur (clôturé) du bâtiment. Il est
                important que l’activité se déroule dans un lieu calme où il
                faut éviter les lieux de passage.
              </p>
            </div>
            <div className="w-1/3 p-6 px-12 rounded-lg shadow-lg">
              <h3>Fin de séance</h3>
              <p className="text-center">
                A la fin de la séance je range et nettoie le matériel et le
                lieu. Je prendrais 5 minutes avecleprofessionnel de
                l’établissement qui reste lors de l’activité afin de remplir une
                évaluationdelaséance.
              </p>
            </div>
          </div>
          <div className="w-2/3 p-12 mx-auto mt-6 rounded-lg shadow-lg">
            <h3 className="text-center">
              Prendre contact auprès de Laure & Co
            </h3>

            <ul className="text-center">
              <li>Expliquer vos attentes et vos objectifs</li>
              <li>
                Choisir le type de séance que vous souhaitez : thérapie ou
                animation
              </li>
              <li>Notifier le nombre de bénéficiaires qui vont participer</li>
              <li>
                Notifier les aspects organisationnels : fréquences, date et
                professionnels présents
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-12 py-16 rounded-lg shadow-lg bg-primary ">
        <div className="container px-32 mx-auto">
          <h2 className="mb-12 text-center text-white">
            Qu’est-ce que l’AAA et la TAA?
          </h2>
          <div className="flex gap-6">
            <div className="w-1/2 px-12 py-8 mb-8 bg-white rounded-lg shadow-lg ">
              <h3>Animation Assistée par l’Animal (AAA)</h3>
              <p>
                C’est une méthode d’intervention qui est, de manière générale,
                une méthode préventiveetludique où l’animal est présent dans le
                but d’améliorer la qualité de vie des personnes
                cibléesenaugmentant leur motivation à participer à des activités
                récréatives. L’animal devient lecentred’intérêt de l’activité.
                Ces interventions se déroulent, généralement, en groupe mêmes’il
                estpossible de faire des séances individuelles. Les différentes
                interventions assistées par l’animal sontdiverses et variées, et
                les méthodes de travail et leurs objectifs sont aussi différents
                quelespersonnes et les problématiques ciblées. Les séances
                peuvent être régulières ou occasionnelles.
              </p>
            </div>
            <div className="w-1/2 px-12 py-8 mb-8 bg-white rounded-lg shadow-lg">
              <h3>Thérapie Assistée par l’Animal (TAA)</h3>
              <p>
                C’est une méthode d’intervention utilisée comme alternative ou
                complémentaire aux thérapiesconventionnelles. L’animal devient
                un médiateur entre le professionnel et le patient. Il
                estconsidéré comme un « collègue » thérapeutique. Ces séances se
                déroulent en individuelleouenpetit groupe et des objectifs à
                visée thérapeutique doivent être établies au préalable,
                lorsderéunions de travail, avec les professionnels de
                l’institution d’accueil. Les séances sont régulières,minimum 1
                fois tous les 15 jours, idéalement 1 fois par semaine. /!\ La
                TAA ne remplace pas les consultations thérapeutiques.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container px-32 py-16 mx-auto">
          <h2 className="text-center">Tarifs et préstations</h2>
          <div>
            <h3 className="py-6 text-center">
              Animation Assistée par l'animal
            </h3>
            <div className="flex justify-between gap-6">
              <div className="flex flex-col w-3/4">
                <div className="w-full px-12 py-8 mb-3 bg-white rounded-lg shadow-lg">
                  <h4>Séance collective</h4>
                  <p className="mt-4">
                    Nombre de participants : de 6 à 8 maximum selon le public.
                    <br /> Il est possible d’ajouter 4 personnes supplémentaires
                    si accompagnées par un professionnel de l’établissement
                    d’accueil.
                  </p>
                  <p>Durée : 1h à 1h30</p>
                  <p className="text-primary">
                    <b>
                      TARIF : 90€ / heure + 10€ par personne supplémentaire.
                    </b>{" "}
                    (Hors frais de déplacement)
                  </p>
                  <p>
                    Petit plus : en collaboration avec la Cavale Attraction,
                    nous vous proposons des séances de médiation animale à bord
                    d’une calèche. <br />
                    *Minimum 1H30 - maximum 3H.
                  </p>
                  <p className="text-primary">
                    <b>TARIF : de 200€ à 280€ selon la formule choisi*.</b>{" "}
                    <br />* sur demande.
                  </p>
                </div>
                <div className="w-full px-12 py-8 mb-8 bg-white rounded-lg shadow-lg">
                  <h4>Séances individuelles</h4>
                  <p className="mt-4">
                    Nombre de participant : 1 personne.
                    <br />
                    Il est possible d’ajouter une personne pour une séance en
                    duo (pour un couple par exemple).
                  </p>
                  <p>Durée : 30mins à 1h</p>
                  <p className="text-primary">
                    <b>TARIF : 40€ / heure.</b> (Hors frais de déplacement)
                  </p>
                </div>
              </div>
              <div className="w-1/2 px-12 py-8 mb-8 bg-white rounded-lg shadow-lg">
                <h4>Exemples d’objectifs d’animation</h4>
                <ul className="my-12">
                  <li>Apaiser les angoisses et l’anxiété</li>
                  <li>Échanges et interactions</li>
                  <li>Stimuler la motricité</li>
                  <li>Stimuler le langage et la communication</li>
                  <li>Améliorer le sentiment d’utilité et de valorisation</li>
                  <li>Apporter de la joie et de la tendresse</li>
                </ul>
                <h4>Informations</h4>
                <ul className="my-12">
                  <li>
                    Les participants peuvent différer d’une séance à une autre
                  </li>
                  <li>
                    Présence recommandée d’un professionnel de l’établissement
                    lors des séances
                  </li>
                  <li>
                    Compte-rendu fourni à chaque séance à la demande de
                    l’établissement
                  </li>
                  <li>
                    Évaluation à remplir par le professionnel de l’établissement
                    présent lors de la séance
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="py-6 text-center">Thérapie Assistée par l’animal</h3>
            <div className="flex justify-between gap-6">
              <div className="flex flex-col w-3/4">
                <div className="w-full px-12 py-8 mb-3 bg-white rounded-lg shadow-lg">
                  <h4>Séance collective</h4>
                  <p className="mt-4">
                    Nombre de participants : 4 personnes maximum.
                  </p>
                  <p>Durée : 1h</p>
                  <p className="text-primary">
                    <b>TARIF : 60€ / heure</b> (Hors frais de déplacement)
                  </p>
                </div>
                <div className="w-full px-12 py-8 mb-8 bg-white rounded-lg shadow-lg">
                  <h4>Séances individuelles</h4>
                  <p className="mt-4">
                    Nombre de participant : 1 personne.
                    <br />
                    Il est possible d’ajouter une personne pour une séance en
                    duo (pour un couple par exemple).
                  </p>
                  <p>Durée : 30mins à 1h</p>
                  <p className="text-primary">
                    <b>TARIF : 40€ / heure.</b> (Hors frais de déplacement)
                  </p>
                </div>
              </div>
              <div className="w-1/2 px-12 py-8 mb-8 bg-white rounded-lg shadow-lg">
                <h4>Exemples d’objectifs d’animation</h4>
                <ul className="my-10">
                  <li>Apaiser les angoisses et l’anxiété</li>
                  <li>Valorisation du bénéficiaire</li>
                  <li>Améliorer les interactions sociales</li>
                  <li>Apporter de la joie et de la tendresse</li>
                  <li>Rompre l’isolement et la solitude</li>
                </ul>
                <h4>Informations</h4>
                <ul className="my-12">
                  <li>
                    Les mêmes participant à chaque cycle de séances (suivies)
                  </li>
                  <li>
                    Présence des professionnels de l’établissement aux séances
                  </li>
                  <li>Compte-rendu fourni à chaque séance à la demande</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="py-6 text-center">Séances à domicile</h3>
            <div className="flex justify-between gap-6">
              <div className="flex flex-col w-3/4">
                <div className="w-full px-12 py-8 mb-3 bg-white rounded-lg shadow-lg">
                  <h4>Séance collective</h4>
                  <p className="mt-4">
                    Nombre de participants : 4 personnes maximum.
                  </p>
                  <p>Durée : 1h</p>
                  <p className="text-primary">
                    <b>TARIF : 60€ / heure </b>
                    (Hors frais de déplacement)
                  </p>
                </div>
                <div className="w-full px-12 py-8 mb-8 bg-white rounded-lg shadow-lg">
                  <h4>Séances individuelles</h4>
                  <p className="mt-4">
                    Nombre de participant : 1<br />
                    Il est possible d’ajouter une personne pour une séance en
                    duo (pour un couple par exemple).
                  </p>
                  <p>Durée : 30mins à 1h</p>
                  <p className="text-primary">
                    <b>TARIF : 40€ / heure.</b> (Hors frais de déplacement)
                  </p>
                </div>
              </div>
              <div className="w-1/2 px-12 py-8 mb-8 bg-white rounded-lg shadow-lg">
                <h4>Exemples d’objectifs</h4>
                <ul className="my-6">
                  <li>Rompre l’isolement, la solitude</li>
                  <li>Améliorer la motricité</li>
                  <li>Améliorer le moral</li>
                  <li>Stimuler la communication et la mémoire</li>
                </ul>
                <h4>Informations</h4>
                <ul className="my-6">
                  <li>Séances de TAA ou d’AAA à votre choix</li>
                  <li>
                    Présence d’un soignant, d’un proche ou de la tutelle si le
                    ou les bénéficiaires ont des pathologies qui préconisent une
                    aide pendant la séance
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
        </div>
      </div>
      <div className="py-6 bg-secondary">
        <div className="container px-32 mx-auto mb-12">
          <h2 className="py-12 text-center text-white">
            Informations complémentaire
          </h2>
          <div className="flex flex-row gap-8 px-12 mb-8 ">
            <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-center">Les tarifs comprennent :</h4>
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
            <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-center">Frais kilométriques :</h4>
              <ul className="mt-6">
                <li>Départ de Xertigny</li>
                <li>A partir de 5km</li>
                <li>0,50€ le km aller/retour*</li>
                <li>1,00€ le km aller/retour avec le van*</li>
                <p>*Évolutif</p>
              </ul>
            </div>
            <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-center">Astuces pour diminuer le prix</h4>
              <ul className="mt-6">
                <li>
                  Trouver un financeur (département, caisse de retraite, CAF,
                  appel à projets, ...)
                </li>
                <li>
                  Connaître un établissement souhaitant mettre en place de la
                  médiation par l’animal dans lemême secteur géographique afin
                  de partager les frais de déplacement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
