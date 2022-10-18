const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream(displayMediaOptions) {
    let captureStream = null;
  
    try {
      captureStream = await navigator.MediaDevices.getDisplayMedia(displayMediaOptions);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
    return captureStream;
  }
  

//On load

selectMediaStream();