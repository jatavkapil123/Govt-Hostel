# 🏠 Government SC Boys Hostel Website

A modern, responsive website for the Government SC Boys Hostel located in Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh. Built with React.js and designed for optimal user experience with smooth animations and mobile-first approach.

## 🌐 Live Demo
**[Visit Live Website](https://govt-hostel.onrender.com/)**

The website is deployed and accessible at: https://govt-hostel.onrender.com/

## 🌟 Features

### 🎨 **Modern Design & User Experience**
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Clean UI/UX** - Professional emerald/green color scheme with intuitive navigation
- **Fast Loading** - Optimized images and efficient code structure
- **Accessibility** - WCAG compliant design for all users

### 🏢 **Website Sections**

#### 1. **Hero Section**
- Dynamic image slider showcasing hostel facilities
- Call-to-action "Get Admission" button
- Animated text and smooth transitions
- Mobile-responsive navigation

#### 2. **About Section**
- Comprehensive hostel information
- Established in 2018 details
- Location and facility highlights
- Warden contact information (Sanjay Patel - 8109397953)

#### 3. **Facilities Section**
- Detailed accommodation features
- Amenities and services offered
- Visual representation of facilities
- Room specifications and common areas

#### 4. **Gallery Section**
- Image showcase of hostel premises
- JPEG format optimization
- Responsive grid layout
- Fallback image system

#### 5. **Admission Section**
- Government SC Boys Hostel specific admission process
- Step-by-step application guide
- Eligibility criteria
- Required documents checklist
- Fee structure information

#### 6. **Notices Section**
- Latest announcements and updates
- Categorized notice system (admission, fee, facility, event, general)
- Date-wise organization
- Urgent notice highlighting
- Newsletter subscription option

#### 7. **Testimonials Section**
- Student experiences and reviews
- Rating system
- Authentic feedback display
- Social proof for prospective students

#### 8. **Contact Section**
- Complete contact information
- Interactive Google Maps integration
- Address: Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462038
- Phone and email details
- Contact form for inquiries

#### 9. **Footer Section**
- Quick links and navigation
- Social media integration
- Copyright information
- Additional contact details

### 🎯 **Technical Features**

#### **Frontend Technologies**
- **React 18.2.0** - Modern React with hooks and functional components
- **Framer Motion 10.16.4** - Advanced animations and transitions
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing and browser compatibility
- **Responsive Design** - Mobile-first approach

#### **Performance Optimizations**
- **Code Splitting** - Optimized bundle sizes
- **Image Optimization** - Compressed and properly formatted images
- **Lazy Loading** - Efficient resource loading
- **Caching Strategy** - Browser and CDN caching
- **SEO Optimized** - Meta tags and semantic HTML

## 🚀 **Deployment & DevOps**

### **Docker Support**
- **Multi-stage Dockerfile** - Optimized for production
- **Alpine Linux** - Lightweight and secure base images
- **Nginx Serving** - High-performance static file serving
- **Production Ready** - Optimized for containerized deployment

### **Kubernetes Deployment**
- **Namespace Isolation** - Dedicated `sc-boys-hostel` namespace
- **High Availability** - 3-replica deployment setup
- **Health Checks** - Liveness and readiness probes
- **Resource Management** - CPU and memory limits
- **Ingress Configuration** - SSL/TLS support with Let's Encrypt
- **ConfigMap** - Nginx configuration management
- **Service Discovery** - ClusterIP service configuration

### **CI/CD Pipeline (Jenkins)**
- **Automated Testing** - Unit tests with coverage reports
- **Docker Build** - Automated image building and tagging
- **Registry Push** - Docker image deployment to registry
- **Kubernetes Deployment** - Automated rolling deployments
- **Health Monitoring** - Post-deployment verification
- **Rollback Support** - Automatic failure recovery

## 📁 **Project Structure**

```
sc-boys-hostel/
├── public/                     # Static assets
│   ├── images/                # Image assets
│   │   └── gallery/          # Gallery images
│   └── index.html            # HTML template
├── src/                       # Source code
│   ├── components/           # React components
│   │   ├── Header.js        # Navigation header
│   │   ├── Hero.js          # Hero section with slider
│   │   ├── About.js         # About section
│   │   ├── Facilities.js    # Facilities showcase
│   │   ├── Gallery.js       # Image gallery
│   │   ├── Admission.js     # Admission process
│   │   ├── Notices.js       # Notice board
│   │   ├── Testimonials.js  # Student testimonials
│   │   ├── Contact.js       # Contact information
│   │   └── Footer.js        # Footer section
│   ├── index.css            # Global styles
│   ├── index.js             # Application entry point
│   └── App.js               # Main application component
├── k8s/                       # Kubernetes manifests
│   ├── namespace.yaml       # Namespace configuration
│   ├── deployment.yaml      # Application deployment
│   ├── service.yaml         # Service configuration
│   ├── ingress.yaml         # Ingress configuration
│   ├── configmap.yaml       # Nginx configuration
│   ├── deploy.sh            # Deployment script
│   └── README.md            # Kubernetes documentation
├── Dockerfile                 # Docker configuration
├── Jenkinsfile               # CI/CD pipeline
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

## 🛠️ **Installation & Setup**

### **Prerequisites**
- Node.js 18+ and npm
- Docker (for containerization)
- Kubernetes cluster (for deployment)
- Jenkins (for CI/CD)

### **Local Development**
```bash
# Clone the repository
git clone <repository-url>
cd sc-boys-hostel

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### **Docker Deployment**
```bash
# Build Docker image
docker build -t sc-boys-hostel .

# Run container
docker run -p 3000:80 sc-boys-hostel
```

### **Kubernetes Deployment**
```bash
# Quick deployment
chmod +x k8s/deploy.sh
./k8s/deploy.sh

# Manual deployment
kubectl apply -f k8s/
```

## 🔧 **Configuration**

### **Environment Variables**
- Update domain in `k8s/ingress.yaml`
- Configure Docker registry in `Jenkinsfile`
- Set up SSL certificates for production

### **Customization**
- **Colors**: Modify theme in `tailwind.config.js`
- **Content**: Update component files in `src/components/`
- **Images**: Replace images in `public/images/`
- **Contact Info**: Update contact details in relevant components

## 📊 **Monitoring & Maintenance**

### **Health Checks**
- Application health monitoring
- Kubernetes pod status
- Resource usage tracking
- Performance metrics

### **Logging**
- Application logs via kubectl
- Jenkins pipeline logs
- Nginx access logs
- Error tracking and monitoring

## 🔒 **Security Features**

- **HTTPS/SSL** - Secure communication
- **Security Headers** - XSS protection, content type validation
- **Input Validation** - Form data sanitization
- **Container Security** - Non-root user, minimal attack surface
- **Network Policies** - Kubernetes network isolation

## 🎯 **Key Highlights**

### **Hostel Information**
- **Location**: Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462038
- **Established**: 2018
- **Warden**: Sanjay Patel (Contact: 8109397953)
- **Type**: Government SC Boys Hostel
- **Facilities**: Modern amenities, Wi-Fi, mess, study rooms, recreation areas

### **Admission Process**
- Online application system
- Document verification process
- Fee payment integration
- Seat allocation system
- Merit-based selection

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 **Support**

For technical support or inquiries:
- **Hostel Contact**: 8109397953 (Warden Sanjay Patel)
- **Address**: Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462038
- **Email**: [Contact through website form]

## 📄 **License**

This project is developed for the Government SC Boys Hostel and is intended for educational and administrative purposes.

---

**Built with ❤️ for Government SC Boys Hostel, Bhopal**

*Empowering students with quality accommodation and modern web presence.*