export const ICE_CONFIG = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]};

// consistent constraints for getUserMedia
// we can modify these later for fancier things
export const GUM_CONSTRAINTS = {
  video: true,
  audio: {
    echoCancellation: true,
    googAutoGainControl: false,
    googEchoCancellation: true,
    googEchoCancellation2: true,
    googHighpassFilter: true,
    googNoiseSuppression: true,
    googNoiseSuppression2: true,
    googTypingNoiseDetection: true,
  },
};

// wait time in ms for someone to answer a call
export const RING_DURATION = 60000;

// wait time between gUM calls waiting for permission
export const PERMISSION_INTERVAL = 1000;
