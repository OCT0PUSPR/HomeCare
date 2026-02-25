import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const blogPosts = [
  { title: 'Early Pregnancy Symptoms: What to Look Out for and How to Prepare for a Healthy Journey', date: 'February 6, 2026', excerpt: 'A guide for first-time mothers on recognizing early pregnancy indicators. A missed period is often considered the first sign of pregnancy.', image: '/images/blog/blog-pregnancy-symptoms.jpg' },
  { title: '10 Pregnancy Essentials Every Expecting Parent Should Know', date: 'February 6, 2026', excerpt: 'Pregnancy is a remarkable journey filled with anticipation, excitement, and naturally, a few nerves. Here are the essentials every parent should know.', image: '/images/blog/blog-pregnancy-essentials.jpg' },
  { title: "Wharton's Jelly: A Powerful Stem Cell Resource Every UAE Parent Should Know About", date: 'December 25, 2025', excerpt: 'Information on stem cell banking and why this tissue is an alternative to cord blood for cellular preservation.', image: '/images/blog/blog-stem-cell.jpg' },
  { title: 'Why Your Birth Plan Should Include Cord Blood Banking & Trusted Home Support Services in the UAE', date: 'December 25, 2025', excerpt: 'Comprehensive planning advice for expecting parents regarding delivery preferences and postpartum support options.', image: '/images/blog/blog-cord-blood.jpg' },
  { title: 'Why Home Physiotherapy in Dubai is Changing the Way We Heal', date: 'November 13, 2025', excerpt: 'Discussion of flexible, accessible healthcare solutions through at-home therapeutic services in Dubai.', image: '/images/blog/blog-physiotherapy.jpg' },
  { title: "Benefits of Choosing Babysitting Services in Dubai for Your Child's Care", date: 'November 10, 2025', excerpt: 'An overview of childcare service advantages in Dubai and how professional babysitting can benefit your family.', image: '/images/blog/blog-babysitting.jpg' },
];

const Blog = () => {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="News, articles, and insights from our healthcare experts"
        breadcrumbItems={[{ label: 'About Us', link: '/about' }, { label: 'Blog' }]}
      />

      <section className="section">
        <div className="container">
          <motion.div
            className="blog-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {blogPosts.map((post) => (
              <motion.div className="blog-card" key={post.title} variants={fadeInUp}>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-date">{post.date}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
