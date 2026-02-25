import React from 'react';
import PageHeader from '../components/PageHeader';

const blogPosts = [
  {
    title: 'Early Pregnancy Symptoms: What to Look Out for and How to Prepare for a Healthy Journey',
    date: 'February 6, 2026',
    excerpt: 'A guide for first-time mothers on recognizing early pregnancy indicators. A missed period is often considered the first sign of pregnancy.',
    icon: '&#129328;'
  },
  {
    title: '10 Pregnancy Essentials Every Expecting Parent Should Know',
    date: 'February 6, 2026',
    excerpt: 'Pregnancy is a remarkable journey filled with anticipation, excitement, and naturally, a few nerves. Here are the essentials every parent should know.',
    icon: '&#128218;'
  },
  {
    title: "Wharton's Jelly: A Powerful Stem Cell Resource Every UAE Parent Should Know About",
    date: 'December 25, 2025',
    excerpt: 'Information on stem cell banking and why this tissue is an alternative to cord blood for cellular preservation.',
    icon: '&#129516;'
  },
  {
    title: 'Why Your Birth Plan Should Include Cord Blood Banking & Trusted Home Support Services in the UAE',
    date: 'December 25, 2025',
    excerpt: 'Comprehensive planning advice for expecting parents regarding delivery preferences and postpartum support options.',
    icon: '&#128203;'
  },
  {
    title: 'Why Home Physiotherapy in Dubai is Changing the Way We Heal',
    date: 'November 13, 2025',
    excerpt: 'Discussion of flexible, accessible healthcare solutions through at-home therapeutic services in Dubai.',
    icon: '&#128170;'
  },
  {
    title: 'Benefits of Choosing Babysitting Services in Dubai for Your Child\'s Care',
    date: 'November 10, 2025',
    excerpt: 'An overview of childcare service advantages in Dubai and how professional babysitting can benefit your family.',
    icon: '&#128118;'
  },
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
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div className="blog-card" key={index}>
                <div className="blog-card-image" dangerouslySetInnerHTML={{__html: post.icon}} />
                <div className="blog-card-content">
                  <div className="blog-card-date">{post.date}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
