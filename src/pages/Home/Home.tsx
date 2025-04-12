import React from 'react';
import { Link } from 'react-router';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const cards = [
    {
      title: "Calculadora",
      icon: "bi-calculator",
      description: "Ferramenta de cálculos matemáticos",
      url: "/calculator",
      color: styles.bgGreen
    },
    {
      title: "Calendário",
      icon: "bi-calendar",
      description: "Agenda e planejamento de tarefas",
      url: "/calendar",
      color: styles.bgPurple
    },
    {
      title: "Notas",
      icon: "bi-journal-bookmark",
      description: "Crie e organize suas anotações",
      url: "/notes",
      color: styles.bgAmber
    }
  ];

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bem-vindo ao Sistema</h1>
        <p className={styles.subtitle}>Selecione o módulo que deseja acessar</p>
      </header>

      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <Link 
            to={card.url} 
            key={index}
            className={styles.cardLink}
          >
            <div className={`${styles.card} ${card.color}`}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <i className={`bi ${card.icon} ${styles.cardIcon}`}></i>
                  <h2 className={styles.cardTitle}>{card.title}</h2>
                </div>
                <p className={styles.cardDescription}>{card.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.arrowCircle}>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;