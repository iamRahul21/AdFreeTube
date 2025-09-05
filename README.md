<div align="center">

# AdFreeTube

<em>A Chrome extension that redirects YouTube video links to yout-ube.com for an ad-free viewing experience.</em>

</div>

## Features

- **Automatic Redirect**: Clicks on YouTube video links are automatically redirected to yout-ube.com
- **New Tab**: Videos open in a new tab for seamless browsing
- **Dynamic Content**: Automatically detects new video links as they load on the page

## How it Works

1. The extension monitors all YouTube pages for video links
2. When you click on a video link (like `https://www.youtube.com/watch?v=VIDEO_ID`)
3. It intercepts the click and redirects to `https://www.yout-ube.com/watch?v=VIDEO_ID`
4. The video opens in a new tab with the modified URL

## Installation

1. **Download the Repository**:
   - Click the green "Code" button on this GitHub repository
   - Select "Download ZIP" to download the repository as a ZIP file
   - Extract the ZIP file to a folder on your computer
   - Alternatively, clone the repository using: `git clone https://github.com/iamRahul21/AdFreeTube.git`

2. **Load Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the extracted AdFreeTube folder
   - The AdFreeTube extension will appear in your extensions list

## Usage

1. Go to YouTube.com
2. Browse videos normally
3. Click on any video - it will automatically redirect to yout-ube.com

## Files Structure

```
AdFreeTube/
├── manifest.json       # Extension configuration
├── content.js          # Main functionality script
├── popup.html          # Extension popup interface
└── README.md           # This file
```

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension format)
- **Permissions**: 
  - `tabs`: To open new tabs
  - `activeTab`: To interact with the current tab
  - `*://*.youtube.com/*`: To run on YouTube pages
- **Content Script**: Runs on all YouTube pages to intercept clicks

## Customization

You can modify the redirect behavior by editing the `convertYouTubeUrl` function in `content.js`:

```javascript
function convertYouTubeUrl(url) {
    return url.replace(/youtube\.com/g, 'yout-ube.com');
}
```

## Version History

- **1.0.0**: Initial release with working redirect functionality