import { useEffect, useState } from "react";
import { ArrowLeft, Check, Columns3, LayoutDashboard, Maximize2, PanelLeft, Save } from "lucide-react";
import fetchWithAuth from "../utils/fetchWithAuth";
import ThemeToggle from "../components/ThemeToggle";
import {
  DEFAULT_DESIGN,
  DESIGN_PRESETS,
  applyDesign,
  designStorageKey,
  normalizeDesign,
} from "../utils/design";
import "./DesignSettings.css";

const DESIGN_ICONS = {
  classic: LayoutDashboard,
  focus: Maximize2,
  rail: PanelLeft,
  canvas: Columns3,
};

const DESIGN_META = {
  classic: { label: "CURRENT", note: "The familiar CodeLab workspace" },
  focus: { label: "CALM STUDY", note: "More room for the task in front of you" },
  rail: { label: "DEV MODE", note: "A compact rail for focused building" },
  canvas: { label: "WIDE VIEW", note: "Library navigation across the top" },
};

function DesignPreview({ preset }) {
  const Icon = DESIGN_ICONS[preset.id] || LayoutDashboard;
  const meta = DESIGN_META[preset.id] || DESIGN_META[DEFAULT_DESIGN];

  return (
    <span className={`design-preview design-preview-${preset.id}`} aria-hidden="true">
      <span className="design-preview-topbar"><i /><i /><i /></span>
      <span className="design-preview-layout">
        <span className="design-preview-navigation"><Icon size={12} /><i /><i /><i /><i /></span>
        <span className="design-preview-workspace">
          <span className="design-preview-heading"><i /><i /></span>
          <span className="design-preview-stat-row"><i /><i /><i /></span>
          <span className="design-preview-content-row"><i /><i /></span>
        </span>
      </span>
      <span className="design-preview-label">{meta.label}</span>
    </span>
  );
}

function DesignSettings({ user, onBack, onUserUpdated, embedded = false }) {
  const [selectedDesign, setSelectedDesign] = useState(() => normalizeDesign(
    localStorage.getItem(designStorageKey(user?.id))
      || localStorage.getItem("codelabDesign:guest")
      || user?.designPreset
      || DEFAULT_DESIGN
  ));
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    applyDesign(selectedDesign);
  }, [selectedDesign]);

  const saveDesign = async (designPreset = selectedDesign) => {
    setIsSaving(true);
    setError("");
    setMessage("");
    const normalizedDesign = normalizeDesign(designPreset);
    applyDesign(normalizedDesign);
    localStorage.setItem(designStorageKey(user?.id), normalizedDesign);

    try {
      const response = await fetchWithAuth("/api/auth/preferences", {
        method: "PATCH",
        body: JSON.stringify({ designPreset: normalizedDesign }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Could not save your design preference.");
      }
      if (data.user && onUserUpdated) onUserUpdated(data.user);
      setMessage("Design saved to your account.");
    } catch (saveError) {
      setError(saveError.message || "Could not save your design preference.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className={`design-page${embedded ? " design-page-embedded" : ""}`} aria-labelledby="design-title">
      {!embedded && <div className="design-page-header">
        <button type="button" className="design-back" onClick={onBack}>
          <ArrowLeft size={17} aria-hidden="true" />
          Back to dashboard
        </button>
        <ThemeToggle />
      </div>}

      <div className="design-heading">
        <span className="design-kicker"><LayoutDashboard size={16} aria-hidden="true" /> WORKSPACE DESIGN</span>
        <h1 id="design-title">Choose how CodeLab is arranged.</h1>
        <p>Change the shape of your learning workspace without changing your courses, Kai conversations, XP, or progress. Your current layout stays selected by default.</p>
      </div>

      <div className="design-notice" role="note">
        <span className="design-notice-mark">01</span>
        <div><strong>Design is separate from appearance.</strong><span>Use Appearance for colors and Design for navigation, spacing, and workspace structure.</span></div>
      </div>

      <div className="design-grid">
        {DESIGN_PRESETS.map((preset) => {
          const isSelected = selectedDesign === preset.id;
          const meta = DESIGN_META[preset.id] || DESIGN_META[DEFAULT_DESIGN];
          return (
            <button
              type="button"
              key={preset.id}
              className={`design-card${isSelected ? " selected" : ""}`}
              onClick={() => {
                setSelectedDesign(preset.id);
                saveDesign(preset.id);
              }}
              disabled={isSaving}
              aria-pressed={isSelected}
            >
              <DesignPreview preset={preset} />
              <span className="design-card-copy">
                <span className="design-card-title-row"><strong>{preset.name}</strong><span>{meta.note}</span></span>
                <span>{preset.description}</span>
              </span>
              <span className="design-tag-row">{preset.tags.map((tag) => <i key={tag}>{tag}</i>)}</span>
              <span className="design-selected-indicator">{isSelected ? <><Check size={15} /> Current design</> : "Use this design"}</span>
            </button>
          );
        })}
      </div>

      <div className="design-save-row">
        <button type="button" className="design-save-button" onClick={() => saveDesign()} disabled={isSaving}>
          <Save size={16} aria-hidden="true" />
          {isSaving ? "Saving..." : "Save design"}
        </button>
        {message && <span className="design-success">{message}</span>}
        {error && <span className="design-error">{error} Your local choice is still active.</span>}
      </div>
    </section>
  );
}

export default DesignSettings;
