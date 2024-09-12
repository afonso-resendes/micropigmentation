"use client";
import React, { useState } from "react";
import styles from "@/style/media.module.css";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main className={styles.mainContainer}>
      <header>
        <section>
          <div className={styles.containerVideo}>
            <video
              className={styles.videoPlayer}
              controls
              src="./media/Caso1.mp4"
              poster="/media/thumbnail1.png"
              title="Caso 1"
            >
              O seu navegador não suporta o elemento <code>video</code>.
            </video>
          </div>
          <div className={styles.textsContainer}>
            <b>Caso 1</b>
            <br></br>
            <br></br>

            <p>
              “Sou alessandro natural da Itália; e desde muito jovem tive
              problemas de calvicie; conheci este procedimento através de um
              colega de trabalho, e depois de conversar com o artista não
              demorei muito tempo em avançar! Ele me transmitiu confiança e
              desde esse momento soube perfeitamente que estava nas melhores
              mãos”
            </p>
            <br></br>
            <p>
              O nosso cliente decidiu acabar com a calvície de forma rápida,
              eficaz e segura, e além disso, Fomos escolhidos pela qualidade e
              realismo do nosso trabalho.
            </p>
          </div>
        </section>
        <section>
          <div className={styles.containerVideo}>
            <video
              className={styles.videoPlayer}
              controls
              src="./media/Caso2.mp4"
              poster="/media/thumbnail2.png"
              title="Caso 1"
            >
              O seu navegador não suporta o elemento <code>video</code>.
            </video>
          </div>
          <div className={styles.textsContainer}>
            <b>Caso 2</b>
            <br></br>
            <br></br>
            <p>
              O reconhecido cantor melao da banda excesso, entrou no team “scalp
              micro” com um design único de linha frontal, com um efeito
              realista e acima de tudo natural. Ficamos extremamente felizes por
              ter formado parte da mudança do melao. E esperamos que continue a
              sorrir sempre com plena confiança e liberdade fora e dentro dos
              palcos.
            </p>
          </div>
        </section>
        <section>
          <div className={styles.containerVideo}>
            <video
              className={styles.videoPlayer}
              controls
              src="./media/Caso3.mp4"
              poster="/media/thumbnail3.png"
              title="Caso 1"
            >
              O seu navegador não suporta o elemento <code>video</code>.
            </video>
          </div>
          <div className={styles.textsContainer}>
            <b>Caso 3</b>
            <br></br>
            <br></br>
            <p>
              Nicolau, cansado da sua calvície, decidiu experimentar a
              micropigmentação capilar e desde o primeiro dia, sentiu-se
              esperançoso… O resultado superou todas as expectativas,
              proporcionando-lhe uma aparência incrivelmente natural. Cada ponto
              meticulosamente desenhado no seu couro cabeludo transformou-se
              numa tela perfeita, onde a precisão e o cuidado do artista criaram
              uma nova realidade para ele.
            </p>
          </div>
        </section>
      </header>
    </main>
  );
}
