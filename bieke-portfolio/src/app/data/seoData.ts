interface SEOMetadata {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
}

interface PageSEO {
    [key: string]: SEOMetadata;
}

const siteUrl = 'http://www.biekebellot.com';

export const seoData: PageSEO = {
    home: {
        title: 'Bieke Bellot - 3D Web Developer & Designer',
        description: 'Portfolio of Bieke Bellot, a creative 3D web developer and designer with expertise in frontend development, web design, and digital marketing.',
        keywords: ['Bieke Bellot', '3D web developer', 'frontend developer', 'web design', 'portfolio'],
        canonicalUrl: siteUrl,
    },
    about: {
        title: 'About Me | Bieke Bellot',
        description: 'Learn more about Bieke Bellot, a passionate developer and designer with experience in React, Vue, Next.js, and motion design.',
        keywords: ['Bieke Bellot', 'about me', 'developer', 'designer', 'experience'],
        canonicalUrl: `${siteUrl}/about`,
    },
    contact: {
        title: 'Contact | Bieke Bellot',
        description: 'Get in touch with Bieke Bellot for collaborations, projects, or freelance work.',
        keywords: ['contact', 'Bieke Bellot', 'freelance', 'collaboration'],
        canonicalUrl: `${siteUrl}/contact`,
    },
    portfolio: {
        title: 'Portfolio | Bieke Bellot',
        description: 'Explore the work of Bieke Bellot, including 3D web projects, web designs, and frontend development cases.',
        keywords: ['portfolio', 'Bieke Bellot', '3D web', 'frontend', 'web design'],
        canonicalUrl: `${siteUrl}/portfolio`,
    },
};

export const getPortfolioProjectSEO = (id: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Portfolio | Bieke Bellot`,
    description: excerpt,
    keywords: ['portfolio', 'project', '3D web', title.toLowerCase()],
    canonicalUrl: `${siteUrl}/portfolio/${id}`,
});

export const getBlogPostSEO = (slug: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Blog | Bieke Bellot`,
    description: excerpt,
    keywords: ['blog', 'article', 'web development', ...title.toLowerCase().split(' ')],
    canonicalUrl: `${siteUrl}/blog/${slug}`,
});

