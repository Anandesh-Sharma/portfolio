# 🚀 Modern Developer Portfolio

## 📌 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)


## 🌟 Introduction

Welcome to the Modern Developer Portfolio! This project is a sleek, responsive, and customizable portfolio website built with Next.js, React, and Tailwind CSS. It's designed to showcase your skills, projects, and experiences in a professional and visually appealing manner.

## ✨ Features

- 🎨 Modern and minimalist design
- 📱 Fully responsive layout
- 🌓 Dark mode by default
- ⚡ Fast performance with Next.js
- 🧩 Modular and easily customizable components
- 💅 Styled with Tailwind CSS
- 🔧 Easy to deploy on various platforms


## 🚀 Getting Started

Follow these steps to set up your portfolio:

1. **Clone the repository**
    ```bash
    git clone https://github.com/Anandesh-Sharma/portfolio.git
    cd modern-developer-portfolio`
    ```

2. **Install dependencies**</br>
    `npm install`

3. **Set up environment variables** </br>
    Create a `.env.local` file in the root directory: </br>
    ```NEXT_PUBLIC_SITE_URL=[http://localhost:3000](http://localhost:3000)```

4. **Run the development server**
    ```npm run dev```

5. **Open [http://localhost:3000](http://localhost:3000)** to see your portfolio!


## 🎨 Customization

### Project Structure
```
modern-developer-portfolio/
├── app/
│   ├── blog/
│   │   └── [...]/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BlogSection.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ProfileCard.tsx
│   └── RecentProjects.tsx
├── styles/
│   ├── globals.css
│   └── mdx.css
└── content/
└── blog/
```

### Personalizing Content

1. **Profile Information**
Update `components/ProfileCard.tsx`:
```js
// Update these values
const profile = {
name: "Your Name",
image: "your-image-url",
bio: "Your short bio",
social: {
github: "[https://github.com/yourusername](https://github.com/yourusername)",
linkedin: "[https://linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)",
twitter: "[https://twitter.com/yourusername](https://twitter.com/yourusername)",
email: "mailto:[you@example.com](mailto:you@example.com)"
}
}
```

2. **Hero Section**
Modify `components/HeroSection.tsx`:
```js
// Customize the rotating words
const roles = ["ENGINEER", "INNOVATOR", "ARTISAN"]

// Update statistics
const stats = [
{ number: "+7", label: "YEARS OF EXPERIENCE" },
{ number: "+16", label: "PROJECTS COMPLETED" },
{ number: "+20", label: "WORLDWIDE CLIENTS" }
]
```


3. **Projects**
Edit `components/RecentProjects.tsx`:
```js
const projects = [
{
title: "Project Name",
description: "Project description goes here...",
image: "/path-to-image.jpg",
color: "bg-[#HEX_COLOR]",
link: "[https://project-url.com](https://project-url.com)"
}
// Add more projects...
]
```
4. **Experience Timeline**
Update `components/ExperienceSection.tsx`:
```js
const experiences = [
{
role: "Job Title",
company: "Company Name",
companyUrl: "[https://company.com](https://company.com)",
period: "Start - End Date",
description: "Job description and achievements..."
}
// Add more experiences...
]
```


### Styling Customization

1. **Color Scheme**
In `styles/globals.css`:
```css
:root {
--primary: 16 100% 66%;    /* Main accent color */
--secondary: 72 100% 50%;  /* Secondary accent */
--background: 0 0% 11%;    /* Background color */
/* Add or modify colors as needed */
}
```
3. **Typography**

1. Update font imports in `styles/globals.css`
2. Modify the font variables:
```css
:root {
--framer-font-family: "Your-Font", sans-serif;
--framer-font-family-bold: "Your-Bold-Font", sans-serif;
}
```


4. **Layout & Spacing**

1. Adjust container widths in `app/page.tsx`
2. Modify grid layouts and spacing using Tailwind classes





## Adding Blog Posts

1. ### Create a new `.mdx` file in `content/blog/`:
```md
## title: Your Blog Title
date: YYYY-MM-DD
readingTime: Xmin read

Your blog content here...
```



## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy automatically


### Manual Deployment

1. Build the project:
`npm run build`
2. Start the production server:
`npm start`


### Docker Deployment

1. Build the image:
`docker build -t portfolio .`
2. Run the container:
`docker run -p 3000:3000 portfolio`


## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch:
`git checkout -b feature/AmazingFeature`
3. Commit your changes:
`git commit -m 'Add AmazingFeature'`
4. Push to the branch:
`git push origin feature/AmazingFeature`
5. Open a Pull Request


### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Add tests for new features


## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 🌟 Acknowledgements

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)


## 📮 Support & Contact

- Report bugs via [GitHub Issues](https://github.com/Anandesh-Sharma/portfolio//issues)
- Request features via [GitHub Discussions](https://github.com/Anandesh-Sharma/portfolio/discussions)
- Email: [anandeshsharma@gmail.com](mailto:anandeshsharma@gmail.com)


---

Made with ❤️ by [Anandesh Sharma](https://github.com/Anandesh-Sharma)

⭐️ Star this repo if you found it helpful!

[⬆ Back to Top](#-modern-developer-portfolio)
