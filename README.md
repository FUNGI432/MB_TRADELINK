# MB TradeLink - B2B Textile Trade Platform

A modern, responsive website for MB TradeLink, a B2B platform connecting India's top textile manufacturers with leading retailers and wholesalers.

## 🌟 Features

### 🎨 **Modern Design & Animations**
- **Smooth Scrolling**: Fluid scrolling experience across the entire website
- **Interactive Animations**: Hover effects, smooth transitions, and dynamic elements
- **Meteor Shower Effect**: Beautiful animated background in the footer
- **Smooth Cursor**: Custom cursor animation for enhanced user experience
- **Responsive Design**: Optimized for all devices and screen sizes

### 🏗️ **Website Sections**
- **Hero Section**: Video background with dynamic text animation
- **About Us**: Bento grid layout showcasing company information
- **Features**: Interactive cards with color-matched hover effects
- **Services**: Professional service offerings with SVG icons
- **Gallery**: Interactive image gallery with Lens zoom effect
- **Testimonials**: Endless carousel with customer feedback
- **Company Updates**: Latest news and achievements
- **FAQ**: Interactive accordion with smooth animations
- **Footer**: Comprehensive footer with meteor animation background

### 🎯 **Key Functionalities**
- **Dynamic Navigation**: Color-changing navbar based on scroll position
- **Interactive Elements**: Hover effects, glow animations, and smooth transitions
- **Professional UI**: Clean, modern design with consistent branding
- **Performance Optimized**: Fast loading times and smooth animations

## 🛠️ **Technology Stack**

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite for fast development and building
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: CSS animations, Framer Motion, and custom effects
- **Icons**: Lucide React and custom SVG icons

## 📦 **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mb-tradelink.git
   cd mb-tradelink
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 🚀 **Build for Production**

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

## 📁 **Project Structure**

```
project/
├── public/                 # Static assets
│   ├── fonts/             # Custom fonts
│   │   ├── saree_products/    # Product images
│   │   ├── trusted by/        # Trust badges
│   │   └── *.png, *.mp4       # Logos and videos
│   ├── src/
│   │   ├── components/
│   │   │   ├── magicui/       # Magic UI components
│   │   │   │   ├── bento-grid.tsx
│   │   │   │   ├── lens.tsx
│   │   │   │   ├── magic-card.tsx
│   │   │   │   └── meteors.tsx
│   │   │   └── ui/            # Reusable UI components
│   │   ├── screens/
│   │   │   └── ElementLight/
│   │   │       ├── sections/  # Website sections
│   │   │       │   ├── AboutUsSection/
│   │   │       │   ├── FeaturesSection/
│   │   │       │   ├── FooterSection/
│   │   │       │   ├── GallerySection/
│   │   │       │   ├── HeroSection/
│   │   │       │   └── ... (other sections)
│   │   │       └── ElementLight.tsx
│   │   ├── lib/
│   │   │   └── utils.ts       # Utility functions
│   │   └── index.tsx          # Main entry point
│   ├── tailwind.config.js     # Tailwind configuration
│   ├── tailwind.css          # Global styles
│   └── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🎨 **Customization**

### **Colors & Branding**
- Update colors in `tailwind.config.js`
- Modify CSS variables in `tailwind.css`
- Replace logo files in `public/` directory

### **Content**
- Edit section content in respective component files
- Update images in `public/` directory
- Modify contact information in footer section

### **Animations**
- Customize meteor animation in `FooterSection.tsx`
- Adjust hover effects in `FeaturesSection.tsx`
- Modify smooth cursor behavior in `smooth-cursor.tsx`

## 🌐 **Deployment**

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### **Netlify**
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### **Other Platforms**
The built files in the `dist` directory can be deployed to any static hosting service.

## 📱 **Browser Support**

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 **Contact**

- **Company**: MB TradeLink
- **Address**: 8th Floor, 113/1B, Chittaranjan Ave, Kolutolla, Kolkata, West Bengal 700073
- **Phone**: +91 33 4000 0000
- **Email**: info@mbtradelink.com

## 🙏 **Acknowledgments**

- [Magic UI](https://magicui.design/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for icons

---

**MB TradeLink** - Connecting Manufacturers to the World of Opportunities
