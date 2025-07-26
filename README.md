# Viswa's Portfolio

A modern, responsive developer portfolio built with React, TypeScript, shadcn/ui, and Tailwind CSS.

## 🚀 Features

- **Responsive Design:** Looks great on mobile, tablet, and desktop.
- **Project Carousel:** Scrollable, filterable project showcase with smooth animations.
- **Skills Carousel:** Interactive, animated skills section.
- **Contact Form:** EmailJS-powered contact form with toast notifications for success/failure.
- **Category Filtering:** Filter projects by Full Stack, Backend, or Frontend.
- **Beautiful UI:** Uses shadcn/ui, Tailwind CSS, and Lucide icons for a clean, modern look.
- **Dark/Light Mode:** Theme toggle support.
- **SEO Optimized:** Meta tags and social sharing images.
- **Accessibility:** Keyboard navigation, alt tags, and good color contrast.
- **Production Ready:** Error handling, mobile-friendly, and easy to deploy.

## 🛠️ Libraries & Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (UI components)
- [Lucide React](https://lucide.dev/) (icon library)
- [EmailJS](https://www.emailjs.com/) (contact form email service)
- [react-hot-toast](https://react-hot-toast.com/) (toast notifications)
- [clsx](https://www.npmjs.com/package/clsx) (conditional classNames)
- [react-router-dom](https://reactrouter.com/) (routing)
- [@tanstack/react-query](https://tanstack.com/query/latest) (data fetching/caching)
- [keen-slider] or [shadcn/ui carousel] (carousel functionality, depending on your final implementation)

## 📁 Project Structure

- `src/components/` — All React components (Projects, Skills, Contact, Hero, Navigation, etc.)
- `src/components/ui/` — shadcn/ui and custom UI components
- `src/pages/` — Page-level components
- `public/` — Static assets (images, favicon, etc.)

## ⚡ Getting Started

### 1. **Clone the repository**
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

### 2. **Install dependencies**
```sh
npm install
```

### 3. **Set up EmailJS (for contact form)**
- Sign up at [emailjs.com](https://www.emailjs.com/)
- Create a service and email template
- Add your EmailJS public key, service ID, and template ID to the contact form code

### 4. **Start the development server**
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) (or the port Vite shows) to view your site.

### 5. **Build for production**
```sh
npm run build
```

### 6. **Preview production build**
```sh
npm run preview
```

## 🌐 Deployment

- Deploy easily to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any static hosting provider.
- For custom domains, follow your host’s instructions.

## 📝 Customization

- **Projects:** Edit `src/components/Projects.tsx` to add or update your projects.
- **Skills:** Edit `src/components/Skills.tsx` to update your skills.
- **Contact:** Edit `src/components/Contact.tsx` to change contact details or email logic.
- **Theme:** Customize Tailwind config or shadcn/ui theme as desired.

## 🛡️ License

This project is open source and free to use.

---

**Built with ❤️ by Viswateja Tummala**
