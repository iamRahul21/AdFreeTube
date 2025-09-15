<div align="center">

# AdFreeTube ![GitHub repo size](https://img.shields.io/github/repo-size/rahul-deka/AdFreeTube?label=size)

<em>A Chrome extension for ad-free YouTube viewing that prevents algorithm manipulation and protects your privacy.</em>

</div>

## Features

- **Ad-Free Experience**: Watch YouTube videos without any advertisements
- **Privacy Protection**: Videos don't get added to your YouTube watch history
- **Algorithm Freedom**: Prevents YouTube's recommendation algorithm from tracking and controlling your viewing habits
- **New Tab**: Videos open in a new tab for seamless browsing
- **Dynamic Content**: Automatically detects new video links as they load on the page

## How it Works

1. The extension monitors all YouTube pages for video links
2. When you click on a video, it intercepts the click
3. Opens the video through an ad-free alternative that doesn't track your viewing
4. Enjoy watching without ads and without feeding the algorithm spiral

## Installation

1. **Download the Repository**:
   - Click the green "Code" button on this GitHub repository
   - Select "Download ZIP" to download the repository as a ZIP file
   - Extract the ZIP file to a folder on your computer
   - Alternatively, clone the repository using: `git clone https://github.com/rahul-deka/AdFreeTube.git`

2. **Load Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the extracted `AdFreeTube` folder
   - The AdFreeTube extension will appear in your extensions list

## Usage

1. Go to YouTube.com
2. Browse videos normally
3. Click on any video - it will automatically open a new tab
4. Enjoy watching without ads or algorithm tracking!

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

You can modify the extension's behavior by editing the `convertYouTubeUrl` function in `content.js` to adjust the redirection logic according to your preferences.