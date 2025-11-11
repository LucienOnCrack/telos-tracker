'use client';

import { useState } from 'react';

export default function LaunchPage() {
  const [status, setStatus] = useState<'idle' | 'launching' | 'active' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [watchId, setWatchId] = useState<number | null>(null);

  const handleLaunch = () => {
    if (!navigator.geolocation) {
      setStatus('error');
      setMessage('Geolocation not supported');
      return;
    }

    setStatus('launching');
    setMessage('Acquiring location...');

    const id = navigator.geolocation.watchPosition(
      async (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: Date.now(),
        };

        try {
          const response = await fetch('/api/location', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(coords),
          });

          if (response.ok) {
            setStatus('active');
            setMessage(`Sharing location: ${coords.latitude.toFixed(6)}, ${coords.longitude.toFixed(6)}`);
          } else {
            throw new Error('Failed to share location');
          }
        } catch (error) {
          setStatus('error');
          setMessage('Failed to share location');
          console.error(error);
        }
      },
      (error) => {
        setStatus('error');
        setMessage(`Error: ${error.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );

    setWatchId(id);
  };

  const handleStop = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
      setStatus('idle');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-black px-8 py-10 rounded-lg border-2 border-red-500 shadow-[0_0_50px_rgba(255,0,0,0.4)]">
          <div className="text-3xl font-bold text-red-500 mb-6 tracking-wider font-mono text-center">
            &gt; TELOS_LAUNCH
          </div>

          <div className="mb-8 text-center">
            <div className="text-sm text-red-400 mb-2 font-mono">
              [TRACKER_CONTROL]
            </div>
            <p className="text-xs text-red-300/70 font-mono">
              Share your live location with the tracker
            </p>
          </div>

          {message && (
            <div className={`mb-6 p-4 rounded border font-mono text-xs ${
              status === 'error'
                ? 'border-red-500/50 bg-red-500/10 text-red-300'
                : status === 'active'
                ? 'border-green-500/50 bg-green-500/10 text-green-300'
                : 'border-yellow-500/50 bg-yellow-500/10 text-yellow-300'
            }`}>
              {message}
            </div>
          )}

          {status === 'idle' || status === 'error' ? (
            <button
              onClick={handleLaunch}
              className="w-full py-4 bg-red-500/20 hover:bg-red-500/30 border-2 border-red-500 rounded text-red-300 hover:text-red-200 font-bold font-mono tracking-wider transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] cursor-pointer"
            >
              &gt; LAUNCH_TRACKING
            </button>
          ) : (
            <button
              onClick={handleStop}
              className="w-full py-4 bg-yellow-500/20 hover:bg-yellow-500/30 border-2 border-yellow-500 rounded text-yellow-300 hover:text-yellow-200 font-bold font-mono tracking-wider transition-all cursor-pointer"
            >
              &gt; STOP_TRACKING
            </button>
          )}

          {status === 'active' && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-xs text-green-400 font-mono">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                BROADCASTING_LIVE
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-xs text-red-500/50 font-mono">
          <p>&gt; ACCESS_GRANTED</p>
          <p>&gt; SECURE_CHANNEL_ACTIVE</p>
        </div>
      </div>
    </div>
  );
}
