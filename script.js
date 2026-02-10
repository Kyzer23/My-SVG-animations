// ========================================
// SVG ORBITAL SPINNER - Interactive Script
// ========================================

// Wait for DOM to fully load before executing
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🚀 SVG Orbital Spinner initialized');
    
    // ========================================
    // ELEMENT SELECTION
    // ========================================
    
    const spinningCircle = document.querySelector('.spinning-circle');
    const orbitalRing = document.querySelector('.orbital-ring');
    const centerGlow = document.querySelector('.center-glow');
    const circleLabel = document.querySelector('.circle-label');
    const svgWrapper = document.querySelector('.svg-wrapper');
    
    // Verify elements exist
    if (!spinningCircle) {
        console.error('❌ Spinning circle element not found');
        return;
    }
    
    console.log('✅ All SVG elements successfully selected');
    
    // ========================================
    // ANIMATION CONFIGURATION
    // ========================================
    
    const animationConfig = {
        speed: '2s',           // Animation duration
        timing: 'linear',      // Timing function
        iterations: 'infinite' // Loop count
    };
    
    // ========================================
    // APPROACH 1: CSS CLASS TOGGLE (RECOMMENDED)
    // ========================================
    
    // Mouse Enter Event - Start Spinning
    spinningCircle.addEventListener('mouseenter', function() {
        console.log('🌀 Hover detected - Activating spin');
        
        // Add active spinning class
        spinningCircle.classList.add('active-spin');
        
        // Optional: Update label text
        if (circleLabel) {
            circleLabel.textContent = 'ACTIVE';
        }
        
        // Optional: Add visual feedback to wrapper
        if (svgWrapper) {
            svgWrapper.style.transform = 'scale(1.02)';
        }
    });
    
    // Mouse Leave Event - Stop Spinning
    spinningCircle.addEventListener('mouseleave', function() {
        console.log('⏸️  Hover ended - Deactivating spin');
        
        // Remove active spinning class
        spinningCircle.classList.remove('active-spin');
        
        // Optional: Reset label text
        if (circleLabel) {
            circleLabel.textContent = 'SPIN';
        }
        
        // Optional: Reset wrapper scale
        if (svgWrapper) {
            svgWrapper.style.transform = 'scale(1)';
        }
    });
    
    // ========================================
    // APPROACH 2: DIRECT STYLE MANIPULATION
    // (Alternative method - commented out)
    // ========================================
    
    /*
    spinningCircle.addEventListener('mouseenter', function() {
        console.log('🌀 Direct style - Activating spin');
        this.style.animation = `spin ${animationConfig.speed} ${animationConfig.timing} ${animationConfig.iterations}`;
        this.style.filter = 'drop-shadow(0 0 20px rgba(123, 47, 247, 0.5))';
    });
    
    spinningCircle.addEventListener('mouseleave', function() {
        console.log('⏸️  Direct style - Deactivating spin');
        this.style.animation = 'none';
        this.style.filter = 'drop-shadow(0 0 8px rgba(0, 255, 200, 0.5))';
    });
    */
    
    // ========================================
    // OPTIONAL ENHANCEMENT: CLICK TO TOGGLE
    // ========================================
    
    let isLocked = false;
    
    spinningCircle.addEventListener('click', function() {
        isLocked = !isLocked;
        
        if (isLocked) {
            console.log('🔒 Spin locked - Continuous rotation');
            spinningCircle.classList.add('active-spin');
            
            if (circleLabel) {
                circleLabel.textContent = 'LOCKED';
            }
            
            // Change cursor to indicate locked state
            spinningCircle.style.cursor = 'not-allowed';
            
        } else {
            console.log('🔓 Spin unlocked - Hover mode restored');
            spinningCircle.classList.remove('active-spin');
            
            if (circleLabel) {
                circleLabel.textContent = 'SPIN';
            }
            
            // Restore cursor
            spinningCircle.style.cursor = 'pointer';
        }
    });
    
    // ========================================
    // OPTIONAL: KEYBOARD ACCESSIBILITY
    // ========================================
    
    // Make the circle keyboard-accessible
    spinningCircle.setAttribute('tabindex', '0');
    spinningCircle.setAttribute('role', 'button');
    spinningCircle.setAttribute('aria-label', 'Spinning circle - Hover or press Enter to activate');
    
    // Space or Enter key to toggle
    spinningCircle.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            console.log('⌨️  Keyboard activation detected');
            this.click(); // Trigger click event
        }
    });
    
    // ========================================
    // OPTIONAL: PERFORMANCE MONITORING
    // ========================================
    
    // Log animation performance
    let animationStartTime;
    
    spinningCircle.addEventListener('animationstart', function() {
        animationStartTime = performance.now();
        console.log('🎬 Animation started at:', animationStartTime);
    });
    
    spinningCircle.addEventListener('animationiteration', function() {
        const currentTime = performance.now();
        const duration = currentTime - animationStartTime;
        console.log('🔄 Animation loop completed. Duration:', duration.toFixed(2), 'ms');
        animationStartTime = currentTime;
    });
    
    // ========================================
    // OPTIONAL: DYNAMIC SPEED CONTROL
    // ========================================
    
    // Function to change animation speed dynamically
    window.setSpinSpeed = function(speed) {
        const speedMap = {
            'slow': '4s',
            'normal': '2s',
            'fast': '1s',
            'extreme': '0.5s'
        };
        
        const newSpeed = speedMap[speed] || speed;
        
        // Update CSS variable or inline style
        document.documentElement.style.setProperty('--spin-speed', newSpeed);
        console.log('⚡ Spin speed changed to:', newSpeed);
    };
    
    // ========================================
    // OPTIONAL: VISUAL EFFECTS ON HOVER
    // ========================================
    
    // Add extra visual feedback to orbital ring
    if (orbitalRing) {
        spinningCircle.addEventListener('mouseenter', function() {
            orbitalRing.style.opacity = '0.6';
            orbitalRing.style.strokeWidth = '3';
        });
        
        spinningCircle.addEventListener('mouseleave', function() {
            if (!isLocked) {
                orbitalRing.style.opacity = '0.3';
                orbitalRing.style.strokeWidth = '2';
            }
        });
    }
    
    // ========================================
    // DEBUGGING HELPERS
    // ========================================
    
    // Console command to enable/disable debug mode
    window.debugMode = false;
    
    window.toggleDebug = function() {
        window.debugMode = !window.debugMode;
        console.log('🐛 Debug mode:', window.debugMode ? 'ENABLED' : 'DISABLED');
    };
    
    // Log all events when debug mode is on
    if (window.debugMode) {
        ['mouseenter', 'mouseleave', 'click', 'animationstart', 'animationend'].forEach(eventType => {
            spinningCircle.addEventListener(eventType, function(e) {
                console.log(`📊 Event: ${eventType}`, e);
            });
        });
    }
    
    // ========================================
    // INITIALIZATION COMPLETE
    // ========================================
    
    console.log('✨ All event listeners attached successfully');
    console.log('💡 Tip: Use window.setSpinSpeed("fast") to change speed');
    console.log('💡 Tip: Use window.toggleDebug() to enable debug mode');
    
});
