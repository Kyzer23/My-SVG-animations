# My SVG Animations

A collection of interactive SVG animations featuring a cyberpunk-themed orbital spinner. This project demonstrates both standalone SVG animations and Bootstrap-integrated web interfaces.

## 🎨 Projects Included

### 1. Pure SVG Animation (`orbital-animation.svg`)
A self-contained SVG file with embedded CSS animations that activate on hover.

**Features:**
- Multiple rotating rings with different speeds and directions
- 4 orbiting circles traveling around the main circle
- Animated color gradients
- Pulsing glow effects
- Decorative corner stars
- All animations triggered on hover
- No external dependencies

**Usage:**
- Open directly in a web browser
- Embed in HTML using `<img>` or `<object>` tags
- Use as inline SVG in web projects

### 2. Bootstrap Web Interface (`index.html`, `style.css`, `script.js`)
A full-featured web page with interactive SVG animations, stats display, and JavaScript controls.

**Features:**
- Bootstrap 5.3.2 responsive layout
- Multi-layer SVG with gradients and glow effects
- Hover to activate spinning animations
- Click to lock/unlock continuous rotation
- Keyboard accessibility support
- Dynamic speed controls via JavaScript
- Cyberpunk/futuristic design aesthetic
- Mobile-responsive design

## 🚀 Getting Started

### Quick Start - SVG Only
1. Download `orbital-animation.svg`
2. Open it in any modern web browser
3. Hover your mouse over the SVG to see the animations

### Full Web Interface
1. Clone this repository:
```bash
git clone https://github.com/yourusername/My-SVG-animations.git
cd My-SVG-animations
```

2. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## 📁 File Structure

```
My-SVG-animations/
├── README.md                   # This file
├── orbital-animation.svg       # Standalone SVG animation
├── index.html                  # Main HTML page
├── style.css                   # Styles and animations
└── script.js                   # Interactive JavaScript
```

## 🎮 Interactive Features

### Hover Interactions
- **SVG Animation**: Hover over the SVG to activate all animations
- **Web Interface**: Hover over the main circle to start spinning

### Click Interactions (Web Interface Only)
- **Click the circle**: Lock/unlock continuous rotation
- **Keyboard**: Use Tab to focus, then Enter/Space to toggle

### Console Commands (Web Interface Only)
Open browser console and try:
```javascript
// Change animation speed
window.setSpinSpeed("fast")    // Options: slow, normal, fast, extreme
window.setSpinSpeed("2s")      // Or use custom duration

// Enable debug mode
window.toggleDebug()
```

## 🎨 Animations Explained

### Pure SVG (`orbital-animation.svg`)
- **Main Circle**: 360° rotation in 3 seconds
- **Outer Ring**: Reverse rotation in 8 seconds
- **Middle Ring**: Forward rotation in 6 seconds
- **Inner Ring**: Fast reverse rotation in 4 seconds
- **Orbiting Circles**: 5-second orbital paths (staggered)
- **Color Gradients**: 6-second color cycling
- **Pulsing Effects**: 2-3 second opacity animations

### Web Interface CSS Animations
```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

Applied with:
- `animation: spin 2s linear infinite;`
- `transform-origin: center;` for proper rotation
- Hover state activates the animation

## 🎯 Technical Implementation

### SVG Animation Approach
- CSS `@keyframes` embedded in `<style>` tags
- SMIL animations for gradient color shifts
- `svg:hover .class` selectors for hover activation
- Transform-origin set to center for proper rotation
- Multiple animation timings for variety

### Web Interface Approach
- **HTML**: Bootstrap grid, semantic structure, SVG with gradients
- **CSS**: Keyframe animations, cyberpunk color scheme, responsive design
- **JavaScript**: Event listeners (mouseenter, mouseleave, click)
- **Accessibility**: Keyboard navigation, ARIA attributes, reduced motion support

### JavaScript Event Handling
```javascript
// CSS Class Toggle Method (Recommended)
spinningCircle.addEventListener('mouseenter', function() {
  spinningCircle.classList.add('active-spin');
});

spinningCircle.addEventListener('mouseleave', function() {
  spinningCircle.classList.remove('active-spin');
});
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary-cyan: #00ffc8;
  --primary-purple: #7b2ff7;
  --primary-pink: #ff0080;
}
```

### Adjust Animation Speed
Modify the animation duration:
```css
.spinning-circle:hover {
  animation: spin 2s linear infinite; /* Change 2s to your preference */
}
```

### Add New Animations
1. Define keyframes in CSS:
```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}
```

2. Apply to elements:
```css
.your-element:hover {
  animation: yourAnimation 3s ease-in-out infinite;
}
```

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Keyboard navigation support
- ARIA labels for screen readers
- `prefers-reduced-motion` media query support
- High contrast colors for visibility
- Focus indicators for interactive elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Submit bug reports
- Propose new features
- Create pull requests
- Share your own animations

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- Google Fonts (Orbitron, Space Mono)
- SVG specification by W3C
- CSS animations and transforms

## 📞 Contact

Questions or feedback? Open an issue on GitHub!

---

**Enjoy creating with SVG animations! 🎨✨**
