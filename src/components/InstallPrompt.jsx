import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Download } from "lucide-react";

export default function InstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleInstallAvailable = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };
    const handleInstalled = () => setInstallPrompt(null);
    window.addEventListener("beforeinstallprompt", handleInstallAvailable);
    window.addEventListener("appinstalled", handleInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallAvailable);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  if (!installPrompt) return null;

  const installApp = async () => {
    installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  return createPortal(
    <button type="button" className="install-floating-button" onClick={installApp}>
      <Download size={17} aria-hidden="true" />
      <span>Install app</span>
    </button>,
    document.body
  );
}
