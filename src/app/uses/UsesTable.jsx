import UsesSection from './UsesSection';

const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: 'Laptop: MacBook Pro',
        description:
          'My MacBook Pro is my reliable companion for all things data science. With its powerful performance and sleek design, it provides the perfect platform for running data analyses, coding in Python, and creating impactful visualizations.',
      },

    ],
  },
  {
    groupName: 'Development Tools',
    items: [
      {
        title: 'Python IDE: Jupyter Notebook',
        description:
          'Jupyter Notebook is my preferred environment for interactive data analysis and experimentation. Its versatility, ease of use, and support for various programming languages allow me to explore datasets, prototype models, and visualize results in a collaborative and efficient manner.',
      },
      {
        title: 'SQL (Structured Query Language)',
        description:
          'SQL is a domain-specific language used for managing and querying relational databases. It is essential for extracting, manipulating, and aggregating data stored in databases, making it a foundational skill for data scientists working with structured data. Proficiency in SQL allows data scientists to perform data retrieval and manipulation tasks efficiently.',
      },
      {
        title: 'Java',
        description:
          'Java is a widely used programming language with a large ecosystem of libraries and frameworks. While not as commonly used as Python or R in data science, Java is often preferred for building enterprise-level applications and integrating with existing systems in industries like finance, healthcare, and telecommunications.',
      },
    ],
  },
  {
    groupName: 'Data Visualization',
    items: [
      {
        title: 'Tableau ',
        description:
          'Tableau Public is my tool of choice for creating impactful visualizations and dashboards from raw data. Its intuitive interface, extensive library of visualization options, and interactive features enable me to communicate insights effectively and engage stakeholders in data-driven decision-making processes.',
      },

    ],
  },
  {
    groupName: 'Online Learning Platform',
    items: [
      {
        title: 'LinkedIn Learning',
        description:
          ' LinkedIn Learning courses provide valuable resources for data science students at all levels, offering practical insights, hands-on experience, and expert guidance to help you succeed in your data science endeavors. Whether you are just starting out or looking to deepen your skills, these courses offer a structured learning path to support your growth and development in the field of data science.',
      },
    ],
  },
];

function UsesTable() {
  return (
    <>
      <UsesSection items={items} />
    </>
  );
}

export default UsesTable;
