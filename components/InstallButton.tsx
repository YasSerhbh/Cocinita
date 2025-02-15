"use client";

import { DownloadIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if the app is already installed
    // @ts-expect-error navigator.standalone is not in the types
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
    setIsInstalled(isStandalone);

    if (!isStandalone) {
      // Listen for the `beforeinstallprompt` event
      const handleBeforeInstallPrompt = (e: any) => {
        e.preventDefault();
        setDeferredPrompt(e); // Save the event to trigger later
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
    // @ts-expect-error prompt is not in the types
      deferredPrompt.prompt(); // Show the install prompt
    // @ts-expect-error userChoice is not in the types
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null); // Clear the deferred prompt
      });
    }
  };

  // If the app is already installed, hide or disable the button
  if (isInstalled || !deferredPrompt) {
    return null; // Optionally return null to hide the button completely
  }

  return (
     <button onClick={handleInstallClick} disabled={!deferredPrompt} className="cursor-pointer text-c-primary font-main font-bold">
        حمل التطبيق <DownloadIcon className="inline" />
    </button>

  );
}
