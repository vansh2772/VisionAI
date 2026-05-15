# 👁️ VisionAI: Real-Time Smart Surveillance Dashboard

![VisionAI Banner](https://img.shields.io/badge/AI-TensorFlow.js-orange.svg)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)

A production-ready, fully serverless real-time computer vision web application. VisionAI processes live webcam feeds directly in the browser and uses AI to detect, track, and count multiple objects dynamically.

Link: https://visionaismart.netlify.app/


This project was built to demonstrate proficiency in integrating state-of-the-art machine learning models with modern, responsive web interfaces—without relying on heavy backend processing.

## ✨ Features
- **Real-Time Edge Inference:** Leverages TensorFlow.js to run the COCO-SSD object detection model entirely on the edge (the user's device).
- **Multi-Object Detection:** Automatically recognizes up to 80 different object classes (e.g., people, laptops, cell phones, vehicles) with high accuracy and low latency.
- **Privacy-First Architecture:** 100% of the video processing happens locally in your browser. No video data is ever transmitted to a server.
- **Premium UI/UX:** A highly responsive, glassmorphism-inspired dark-mode analytics dashboard showing live metrics and system logs.
- **Zero-Config Deployment:** Completely static frontend codebase (HTML, CSS, JS) designed to be instantly hosted on any static provider like Netlify, Vercel, or GitHub Pages.

## 🛠️ Tech Stack
- **AI/ML:** TensorFlow.js, COCO-SSD pre-trained model
- **Frontend:** HTML5, CSS3 (Vanilla Custom Framework), Modern ES6+ JavaScript
- **Deployment:** Netlify Ready

## 🧠 The Role of AI in this Project
This project leverages Artificial Intelligence, specifically **Computer Vision**, to interpret real-world video streams directly in the browser. 
- **Model**: We use **COCO-SSD (Common Objects in Context - Single Shot MultiBox Detector)**, a lightweight but powerful pre-trained AI model provided by TensorFlow.js.
- **How it works**: The AI model analyzes each frame of the live video feed. It identifies patterns, edges, and shapes to classify objects into 80 predefined categories. It then computes bounding boxes (the exact coordinates of the object) and a confidence score for each detection.
- **Why Edge AI**: By running the AI inference entirely on the client-side (Edge AI), we eliminate the need for expensive backend servers, drastically reduce latency, and ensure absolute user privacy since the video data never leaves the local device.

## 🚀 How to Run Locally

Because this project uses a completely serverless architecture, running it locally is incredibly simple.

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/SmartSurveillance-AI.git
   cd SmartSurveillance-AI
   ```
2. Start a local HTTP server (Required because modern browsers block webcam access over the `file://` protocol for security reasons):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server
   ```
3. Open your browser and navigate to `http://localhost:8000`.

## 🌐 Deploying to Netlify
This project is perfectly formatted to go live globally in under a minute.

1. Push your code to a new GitHub repository.
2. Log into [Netlify](https://app.netlify.com/).
3. Click **Add new site** -> **Import an existing project**.
4. Connect your GitHub account and select this repository.
5. Leave the "Build command" and "Publish directory" fields **completely blank**.
6. Click **Deploy site**. 

Your AI surveillance dashboard will be live instantly! Share the Netlify link on your resume and portfolio.
