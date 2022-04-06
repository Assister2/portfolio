import Projects from "./Projects";

const Portfolio = () => {
  return (
    <article className="portfolio">
      <section className="portfolio-text">
        <h2 className="title-font pink-text">My Portfolio</h2>
        <p className="white-text">
          I have spent a lot of time on different projects. I love doing
          everything from scratch. Here are some of my favorite ones which sum
          up my knowledge. I have done many small projects from different
          courses and challenges to learn the basics. You can check them on my{" "}
          <span>
            <a
              href="https://github.com/catherineisonline?tab=repositories"
              className="pink-text"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
        </p>
      </section>
      <Projects />
    </article>
  );
};

export default Portfolio;
