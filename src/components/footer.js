"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import styles from "@/style/footer.module.css";
import { FaInstagram } from "react-icons/fa";

export default function Footer({ router }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.reclambook}>
          <a href="https://www.livroreclamacoes.pt/Inicio/">
            <p>Livro de reclamações</p>
          </a>
          <a
            href="https://www.instagram.com/jmicropigmentation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt={`Slide`} width={1080} height={1920} />
          </div>
          <div className={styles.menu}>
            <h3>Menu</h3>
            <Link
              href="/"
              onClick={() => {
                setHome(true);
                setMenuOpen(false);
              }}
            >
              Home
            </Link>
            <Link href="/quemsomos">{t("Quem Somos")}</Link>
            <Link href="/servicos">{t("Serviços")}</Link>
          </div>
          <div className={styles.contacts}>
            <h4>Email</h4>
            <p>jmicropigmentation@gmail.com</p>
            <h4>{t("PHONE")}</h4>
            <p>+351 968 259 600</p>
            <h4>{t("ADDRESS")}</h4>
            <p>{t("MAP_ADDRESS")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
