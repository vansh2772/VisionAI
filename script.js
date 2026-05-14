const video = document.getElementById('webcam');
const canvas = document.getElementById('overlay');
const ctx = canvas.getContext('2d');
const cameraStatus = document.getElementById('camera-status');
const objectCount = document.getElementById('object-count');
const logsContainer = document.getElementById('logs-container');

let model = undefined;

function addLog(message) {
    const li = document.createElement('li');
    li.innerText = message;
    logsContainer.appendChild(li);
    // Keep only the last 6 logs to prevent overflow
    if (logsContainer.children.length > 6) {
        logsContainer.removeChild(logsContainer.firstChild);
    }
}

// Load the COCO-SSD model
cocoSsd.load().then(loadedModel => {
    model = loadedModel;
    addLog('[AI] COCO-SSD model loaded successfully.');
    startWebcam();
}).catch(err => {
    addLog(`[ERROR] Failed to load model: ${err.message}`);
    console.error(err);
});

// Setup Webcam
function startWebcam() {
    addLog('[CAMERA] Requesting webcam access...');
    
    // Check if the browser supports mediaDevices
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        addLog('[ERROR] Webcams are not supported by your browser or HTTP is being used instead of HTTPS.');
        cameraStatus.innerText = 'Unsupported';
        return;
    }

    // Request the webcam feed
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })
        .then(stream => {
            video.srcObject = stream;
            
            // Wait for the video metadata to load so we have the correct dimensions
            video.addEventListener('loadedmetadata', () => {
                cameraStatus.innerText = 'Active';
                cameraStatus.className = 'stat-value status-active';
                addLog('[CAMERA] Feed active. Starting inference...');
                
                // Match canvas internal dimensions to video resolution
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                
                predictWebcam();
            });
        })
        .catch(err => {
            cameraStatus.innerText = 'Error';
            cameraStatus.className = 'stat-value status-error';
            addLog(`[ERROR] Webcam access denied: ${err.message}`);
            console.error(err);
        });
}

function predictWebcam() {
    // Run the object detection on the current video frame
    model.detect(video).then(predictions => {
        // Clear previous frame's drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update stats dashboard
        objectCount.innerText = predictions.length;

        // Draw bounding boxes for each prediction
        predictions.forEach(prediction => {
            const [x, y, width, height] = prediction.bbox;
            const text = `${prediction.class} (${Math.round(prediction.score * 100)}%)`;

            // Style bounding box
            ctx.strokeStyle = '#10b981'; // Emerald green
            ctx.lineWidth = 4;
            ctx.strokeRect(x, y, width, height);

            // Style text background
            ctx.fillStyle = '#10b981';
            const textWidth = ctx.measureText(text).width;
            ctx.fillRect(x, y - 25, textWidth + 10, 25);

            // Style text
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.fillText(text, x + 5, y - 6);
        });

        // Loop the prediction continuously for the next frame
        requestAnimationFrame(predictWebcam);
    });
}
