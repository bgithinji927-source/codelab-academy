import { useEffect, useState } from "react";
import { ArrowLeft, Check, Palette, Save } from "lucide-react";
import fetchWithAuth from "../utils/fetchWithAuth";
import {
  APPEARANCE_PRESETS,
  DEFAULT_APPEARANCE,
  appearanceStorageKey,
  applyAppearance,
  normalizeAppearance,
} from "../utils/appearance";
import ThemeToggle from "../components/ThemeToggle";
import "./AppearanceSettings.css";

function AppearanceSettings({ user, onBack, onUserUpdated }) {
  const [selectedAppearance, setSelectedAppearance] = useState(() => normalizeAppearance(
    user?.appearancePreset || localStorage.getItem(appearanceStorageKey(user?.id)) || DEFAULT_APPEARANCE
  ));
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    applyAppearance(selectedAppearance);
  }, [selectedAppearance]);

  const saveAppearance = async (appearancePreset = selectedAppearance) => {
    setIsSaving(true);
    setError("");
    setMessage("");
    applyAppearance(appearancePreset);
    localStorage.setItem(appearanceStorageKey(user?.id), appearancePreset);

    try {
      const response = await fetchWithAuth("/api/auth/preferences", {
        method: "PATCH",
        body: JSON.stringify({ appearancePreset }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Could not save your appearance preference.");
      }
      if (data.user && onUserUpdated) onUserUpdated(data.user);
      setMessage("Appearance saved to your account.");
    } catch (saveError) {
      setError(saveError.message || "Could not save your appearance preference.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="appearance-page" aria-labelledby="appearance-title">
      <div className="appearance-page-header">
        <button type="button" className="appearance-back" onClick={onBack}>
          <ArrowLeft size={17} aria-hidden="true" />
          Back to dashboard
        </button>
        <ThemeToggle />
      </div>

      <div className="appearance-heading">
        <span className="appearance-kicker"><Palette size={16} aria-hidden="true" /> ACCOUNT APPEARANCE</span>
        <h1 id="appearance-title">Make CodeLab feel like yours.</h1>
        <p>Choose a visual preset for your account. Your courses, Kai conversations, XP, and learning progress are not changed.</p>
      </div>

      <div className="appearance-grid">
        {APPEARANCE_PRESETS.map((preset) => {
          const isSelected = selectedAppearance === preset.id;
          return (
            <button
              type="button"
              key={preset.id}
              className={`appearance-card${isSelected ? " selected" : ""}`}
              onClick={() => {
                setSelectedAppearance(preset.id);
                saveAppearance(preset.id);
              }}
              disabled={isSaving}
              aria-pressed={isSelected}
            >
              <span className="appearance-preview" data-preview={preset.id}>
                <span className="appearance-preview-bar" />
                <span className="appearance-preview-content"><i /><i /><i /></span>
                <span className="appearance-preview-button" />
              </span>
              <span className="appearance-card-copy">
                <strong>{preset.name}</strong>
                <span>{preset.description}</span>
              </span>
              <span className="appearance-swatch-row" aria-hidden="true">
                {preset.swatches.map((swatch) => <i key={swatch} style={{ background: swatch }} />)}
              </span>
              <span className="appearance-selected-indicator">{isSelected ? <><Check size={15} /> Selected</> : "Choose preset"}</span>
            </button>
          );
        })}
      </div>

      <div className="appearance-save-row">
        <button type="button" className="appearance-save-button" onClick={() => saveAppearance()} disabled={isSaving}>
          <Save size={16} aria-hidden="true" />
          {isSaving ? "Saving..." : "Save appearance"}
        </button>
        {message && <span className="appearance-success">{message}</span>}
        {error && <span className="appearance-error">{error} Your local choice is still active.</span>}
      </div>
    </section>
  );
}

export default AppearanceSettings;
