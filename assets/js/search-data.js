// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-case-studies",
          title: "case studies",
          description: "Deep dives into systems I designed, shipped, and measured in production.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/case-studies/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download my CV or view it below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-stop-optimizing-for-mse-why-your-business-metrics-matter-more-than-your-loss-function",
        
          title: 'Stop Optimizing for MSE: Why Your Business Metrics Matter More Than Your Loss... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "As developers, we are trained to worship the leaderboards. We see a lower Mean Squared Error (MSE) or a higher R-squared, and we think we’ve won. But after half a decade in the industry—transitionin...",
        section: "Posts",
        handler: () => {
          
            window.open("https://dev.to/pallab_roy/stop-optimizing-for-mse-why-your-business-metrics-matter-more-than-your-loss-function-f7e", "_blank");
          
        },
      },{id: "post-the-silent-killer-of-ai-projects-how-to-spot-data-leakage-before-it-kills-your-production-code",
        
          title: 'The Silent Killer of AI Projects: How to Spot Data Leakage Before It... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’ve all been there. You’ve spent weeks cleaning data, engineering features, and tuning your model. You hit &quot;Run,&quot; and the results are breathtaking: 99.8% accuracy. You celebrate. You might even st...",
        section: "Posts",
        handler: () => {
          
            window.open("https://dev.to/pallab_roy/the-silent-killer-of-ai-projects-how-to-spot-data-leakage-before-it-kills-your-production-code-2f12", "_blank");
          
        },
      },{id: "projects-autonomous-subscription-retention-system",
          title: 'Autonomous Subscription Retention System',
          description: "An autonomous retention engine that optimizes operations pipelines and unlocks high-value billable hours by automating prediction and strategic decision logic.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_customer_retention/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/pallab.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%61%6C%6C%61%62%72%6F%79%77%72%6B@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/PallabRoy-SE", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pallabroy-job", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://dev.to/pallab_roy", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
