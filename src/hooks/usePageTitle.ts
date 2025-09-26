import { useEffect } from "react";

export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    // Update page title - company name at the end
    document.title = `${title} | HMR Technologies`;
    
    // Update meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags for social media sharing
    const pageTitle = `${title} | HMR Technologies`;
    
    // Update or create OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', pageTitle);

    // Update or create OG description
    if (description) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', description);
    }

    // Update or create Twitter title
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('property', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', pageTitle);

    // Update or create Twitter description
    if (description) {
      let twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (!twitterDescription) {
        twitterDescription = document.createElement('meta');
        twitterDescription.setAttribute('property', 'twitter:description');
        document.head.appendChild(twitterDescription);
      }
      twitterDescription.setAttribute('content', description);
    }

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://www.hmrtechnologies.com${window.location.pathname}`);

    // Update Schema.org structured data for the current page
    let existingSchema = document.querySelector('script[type="application/ld+json"][data-page]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description || "AI-Powered Development Services by HMR Technologies",
      "url": `https://www.hmrtechnologies.com${window.location.pathname}`,
      "isPartOf": {
        "@type": "WebSite",
        "name": "HMR Technologies",
        "url": "https://www.hmrtechnologies.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "HMR Technologies",
        "url": "https://www.hmrtechnologies.com"
      }
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.setAttribute('data-page', 'true');
    schemaScript.textContent = JSON.stringify(pageSchema);
    document.head.appendChild(schemaScript);
  }, [title, description]);
}