# 🎨 AI Image Generator

An elegant web app that lets you generate images from text prompts using the [Vyro API](https://vyro.ai).  
Simply describe the image you want, pick a style and aspect ratio, and get an AI-generated result you can download instantly.

---

## 🚀 Features
- ✍️ **Prompt input** — describe what you want to see.
- 🎨 **Style options** — Realistic, Anime, Flux-schnell.
- 🖼️ **Aspect ratios** — Square (1:1), Landscape (16:9), Portrait (9:16).
- ⚡ **Loading animation** while your image is being created.
- 📥 **One-click download** of the generated image.
- 📱 **Responsive design** — works on desktop and mobile.

---

## 📂 Project Structure
```plaintext
.
├── index.html   # The main UI
├── style.css    # Styling (responsive, modern look)
└── script.js    # Logic for API requests and image handling

🛠️ Setup & Usage

1. Clone this repository (or download the files):

```bash
   git clone https://github.com/your-username/ai-image-generator.git
   cd ai-image-generator
   ```


2. Open index.html in your browser.
No server setup is required — it runs entirely in the browser.

3. Enter a prompt (e.g. “A futuristic cityscape at sunset”).

Choose a style (Realistic, Anime, Flux-schnell).

Choose an aspect ratio (1:1, 16:9, 9:16).

Click Generate Image.

4. Once generated, hover over the image to download it.

⚠️ Important Notes

- The app uses the Vyro API for image generation.

- You’ll need a Imagine art API key to make requests. Replace the placeholder key inside script.js:

```bash
   const API_KEY = "Bearer YOUR_API_KEY_HERE";
   ```



Keep your API key private — don’t share it publicly.
