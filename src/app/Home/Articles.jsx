import React from "react";
import PropTypes from "prop-types";

const ArticleCard = () => {
  const articles = [
    {
      date: "Apr 05, 2024",
      title: "Data Democratization: An Ecosystemic Contemplation and Coordination",
      content:
        "Like many, the COVID pandemic has affected me personally and professionally in profound ways. Concerned that social isolation might lead to physical or mental atrophy, I paired my solitary walks with episodes of “History of Philosophy Without Any Gaps” hosted by philosopher Peter Adamson. ",
      link: "https://hdsr.mitpress.mit.edu/pub/o3qm160v/release/4",
    },
    {
      date: "Apr 30, 2017",
      title: "Learning Deep Learning with Keras",
      content:
        "Whether you want to start learning deep learning for you career, to have a nice adventure (e.g. with detecting huggable objects) or to get insight into machines before they take over[^webcomics], this post is for you! Its goal is not to teach neural networks by itself, but to provide an overview and to point to didactically useful resources.",
      link: "https://p.migdal.pl/2017/04/30/teaching-deep-learning.html/",
    },
    {
      date: "Jan 7, 2020",
      title: "Instacart Market Basket Analysis",
      content:
        "Our recent Instacart Market Basket Analysis competition challenged Kagglers to predict which grocery products an Instacart consumer will purchase again and when. Imagine, for example, having milk ready to be added to your cart right when you run out, or knowing that it’s time to stock up again on your favorite ice cream.",
      link: "https://medium.com/kaggle-blog/instacart-market-basket-analysis-feda2700cded",
    },
  ];

  if (!articles.length) {
    return <div>No article data</div>;
  }

  return (
    <div>
      {articles.map((article, index) => (
        <article
          key={index}
          data-testid={"articleCard"}
          className="flex flex-col p-6 border border-gray-300 rounded-lg w-full shadow-md mb-5  "
        >
          <div className="text-xs uppercase text-gray-600 dark:text-gray-300 border-l-4 border-gray-300 pl-2">
            <time data-testid={"articleCardDate"}>{article.date}</time>
            <h2 className="text-2xl capitalize my-4 font-bold" data-testid={"articleCardTitle"}>
              {article.title}
            </h2>
          </div>
          <p
            className="text-base text-gray-700 dark:text-white leading-relaxed mb-4"
            data-testid={"articleCardContent"}
          >
            {article.content}
          </p>
          <a
            className="text-base font-bold text-teal-400 hover:underline"
            data-testid={"articleCardLink"}
            href={article.link}
          >
            Read More
          </a>
        </article>
      ))}
    </div>
  );
};

export default ArticleCard;
