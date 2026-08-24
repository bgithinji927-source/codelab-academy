import { ArrowLeft, ChevronRight, LayoutDashboard, Palette, Settings as SettingsIcon, SunMoon, UserRound } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import AppearanceSettings from "./AppearanceSettings";
import DesignSettings from "./DesignSettings";
import "./Settings.css";

const SETTING_SECTIONS = [
  { id: "overview", label: "General", description: "Your CodeLab preferences", Icon: SettingsIcon },
  { id: "profile", label: "Profile", description: "Your account details", Icon: UserRound },
  { id: "appearance", label: "Appearance", description: "Colors and visual presets", Icon: Palette },
  { id: "design", label: "Design", description: "Workspace layout", Icon: LayoutDashboard },
];

function SettingsBackButton({ children, onClick }) {
  return (
    <button type="button" className="settings-back" onClick={onClick}>
      <ArrowLeft size={17} aria-hidden="true" />
      {children}
    </button>
  );
}

function ProfileSection({ user, onBack }) {
  const displayName = user?.name || user?.email || "Student";
  const initials = displayName.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "S";
  const roleLabel = user?.isAdmin || user?.role === "admin" ? "Administrator" : "Learner";

  return (
    <section className="settings-section-panel" aria-labelledby="settings-profile-title">
      <div className="settings-subpage-topline">
        <SettingsBackButton onClick={onBack}>Back to Settings</SettingsBackButton>
        <span className="settings-breadcrumb">SETTINGS / PROFILE</span>
      </div>
      <div className="settings-section-heading">
        <span className="settings-kicker"><UserRound size={15} aria-hidden="true" /> PROFILE</span>
        <h1 id="settings-profile-title">Your CodeLab profile.</h1>
        <p>Your account identity and learning role in CodeLab Academy.</p>
      </div>
      <div className="settings-profile-hero">
        <span className="settings-profile-avatar" aria-hidden="true">{initials}</span>
        <div>
          <span className="settings-profile-label">SIGNED-IN ACCOUNT</span>
          <h2>{displayName}</h2>
          <p>{user?.email || "Email not available"}</p>
        </div>
        <span className="settings-role-badge">{roleLabel}</span>
      </div>
      <div className="settings-profile-details">
        <div><span>Name</span><strong>{displayName}</strong></div>
        <div><span>Email</span><strong>{user?.email || "Not available"}</strong></div>
        <div><span>Learning status</span><strong>Active learner</strong></div>
      </div>
      <p className="settings-note">Profile identity is managed by your CodeLab account. Your course progress, XP, and Kai learning records stay connected to this account.</p>
    </section>
  );
}

function SettingsPage({ user, onBack, onUserUpdated }) {
  const [activeSection, setActiveSection] = useState("overview");

  if (activeSection === "profile") {
    return (
      <section className="settings-page settings-page-subpage" aria-label="Profile settings">
        <ProfileSection user={user} onBack={() => setActiveSection("overview")} />
      </section>
    );
  }

  if (activeSection === "appearance") {
    return (
      <section className="settings-page settings-page-subpage" aria-label="Appearance settings">
        <div className="settings-subpage-topline">
          <SettingsBackButton onClick={() => setActiveSection("overview")}>Back to Settings</SettingsBackButton>
          <span className="settings-breadcrumb">SETTINGS / APPEARANCE</span>
        </div>
        <AppearanceSettings user={user} embedded onBack={() => setActiveSection("overview")} onUserUpdated={onUserUpdated} />
      </section>
    );
  }

  if (activeSection === "design") {
    return (
      <section className="settings-page settings-page-subpage" aria-label="Design settings">
        <div className="settings-subpage-topline">
          <SettingsBackButton onClick={() => setActiveSection("overview")}>Back to Settings</SettingsBackButton>
          <span className="settings-breadcrumb">SETTINGS / DESIGN</span>
        </div>
        <DesignSettings user={user} embedded onBack={() => setActiveSection("overview")} onUserUpdated={onUserUpdated} />
      </section>
    );
  }

  return (
    <section className="settings-page" aria-labelledby="settings-title">
      <header className="settings-page-header">
        <SettingsBackButton onClick={onBack}>Back to dashboard</SettingsBackButton>
        <span className="settings-page-mark"><SettingsIcon size={17} aria-hidden="true" /> ACCOUNT SETTINGS</span>
      </header>

      <div className="settings-heading">
        <span className="settings-kicker"><SettingsIcon size={16} aria-hidden="true" /> SETTINGS</span>
        <h1 id="settings-title">Make CodeLab work for you.</h1>
        <p>Manage your profile, appearance, workspace design, and light or dark mode from one place.</p>
      </div>

      <div className="settings-layout">
        <nav className="settings-nav" aria-label="Settings sections">
          <span className="settings-nav-label">ACCOUNT SETTINGS</span>
          {SETTING_SECTIONS.map(({ id, label, description, Icon }) => (
            <button key={id} type="button" className={activeSection === id ? "active" : ""} onClick={() => setActiveSection(id)}>
              <Icon size={17} aria-hidden="true" />
              <span><strong>{label}</strong><small>{description}</small></span>
              <ChevronRight size={15} aria-hidden="true" />
            </button>
          ))}
        </nav>

        <main className="settings-main">
          <section className="settings-overview-panel" aria-labelledby="settings-overview-title">
            <div className="settings-section-heading compact">
              <span className="settings-kicker">YOUR PREFERENCES</span>
              <h2 id="settings-overview-title">Personalize your workspace.</h2>
              <p>These controls affect how CodeLab looks and feels. They do not change your courses or learning progress.</p>
            </div>

            <div className="settings-option-grid">
              <button type="button" className="settings-option-card" onClick={() => setActiveSection("profile")}>
                <span className="settings-option-icon"><UserRound size={20} aria-hidden="true" /></span>
                <span className="settings-option-copy"><strong>Profile</strong><small>{user?.name || user?.email || "View your account details"}</small></span>
                <ChevronRight size={17} aria-hidden="true" />
              </button>

              <button type="button" className="settings-option-card" onClick={() => setActiveSection("appearance")}>
                <span className="settings-option-icon"><Palette size={20} aria-hidden="true" /></span>
                <span className="settings-option-copy"><strong>Appearance</strong><small>Choose your color preset</small></span>
                <ChevronRight size={17} aria-hidden="true" />
              </button>

              <button type="button" className="settings-option-card" onClick={() => setActiveSection("design")}>
                <span className="settings-option-icon"><LayoutDashboard size={20} aria-hidden="true" /></span>
                <span className="settings-option-copy"><strong>Design</strong><small>Choose your workspace layout</small></span>
                <ChevronRight size={17} aria-hidden="true" />
              </button>

              <div className="settings-option-card settings-theme-card">
                <span className="settings-option-icon"><SunMoon size={20} aria-hidden="true" /></span>
                <span className="settings-option-copy"><strong>Light / Dark mode</strong><small>Switch the interface brightness</small></span>
                <ThemeToggle />
              </div>
            </div>
          </section>

          <section className="settings-help-panel" aria-label="Settings information">
            <span className="settings-help-mark">04</span>
            <div><strong>One place for your preferences.</strong><p>Appearance controls colors, Design controls workspace structure, and Light / Dark mode controls brightness. Your saved choices follow your account.</p></div>
          </section>
        </main>
      </div>
    </section>
  );
}

export default SettingsPage;
