(function() {
    'use strict';

    console.log('yout-ube extension loaded');

    function convertYouTubeUrl(url) {
        if (!url) return url;
        
        // Replaces youtube.com with yout-ube.com
        return url.replace(/youtube\.com/g, 'yout-ube.com');
    }
    
    // handle link clicks
    function handleLinkClick(event) {
        const target = event.target.closest('a');
        
        if (!target) return;
        
        const href = target.href;
        
        if (href && href.includes('youtube.com/watch')) {
            event.preventDefault();
            event.stopPropagation();
            
            const newUrl = convertYouTubeUrl(href);
            
            console.log('Redirecting from:', href);
            console.log('Redirecting to:', newUrl);
            
            window.open(newUrl, '_blank');
        }
    }
    
    // event listeners to all video links
    function addEventListeners() {
        // click event listener to the document
        document.addEventListener('click', handleLinkClick, true);
        
        // Also handle middle mouse button clicks (open in new tab)
        document.addEventListener('mousedown', function(event) {
            if (event.button === 1) { // Middle mouse button
                handleLinkClick(event);
            }
        }, true);
    }
    
    function modifyExistingLinks() {
        const videoLinks = document.querySelectorAll('a[href*="youtube.com/watch"]');
        
        videoLinks.forEach(link => {
            if (!link.dataset.adFreeModified) {
                link.dataset.adFreeModified = 'true';
                link.title = `yout-ube: Will redirect to ${convertYouTubeUrl(link.href)}`;
                
                const indicator = document.createElement('span');
                indicator.innerHTML = '🚀';
                indicator.style.cssText = `
                    font-size: 12px;
                    margin-left: 4px;
                    opacity: 0.7;
                    display: inline-block;
                `;
                indicator.title = 'Will be redirected by yout-ube';
                
                const linkText = link.querySelector('span#video-title, h3, .title');
                if (linkText && !linkText.querySelector('.adfree-indicator')) {
                    indicator.className = 'adfree-indicator';
                    linkText.appendChild(indicator);
                }
            }
        });
    }
    
    function init() {
        addEventListeners();
        modifyExistingLinks();
        
        const observer = new MutationObserver(function(mutations) {
            let shouldUpdate = false;
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0) {
                    shouldUpdate = true;
                }
            });
            
            if (shouldUpdate) {
                setTimeout(modifyExistingLinks, 1000);
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();