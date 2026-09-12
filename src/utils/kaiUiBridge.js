const ALLOWED_KAI_UI_ACTIONS = new Set([
  "open_view",
  "open_category",
  "open_course",
  "open_lesson",
  "start_or_resume_course",
  "show_videos",
  "show_challenges",
  "show_progress",
  "update_learning_preferences",
  "mark_lesson_complete",
  "unlock_next_lesson",
]);

export const KAI_UI_EVENT = "codelab:kai-ui-action";

export function isAllowedKaiUiAction(action) {
  return Boolean(action && ALLOWED_KAI_UI_ACTIONS.has(action.type));
}

export function requestKaiUiAction(action) {
  if (!isAllowedKaiUiAction(action)) {
    return { accepted: false, reason: "Action is not allowed for Kai." };
  }

  window.dispatchEvent(new CustomEvent(KAI_UI_EVENT, { detail: action }));
  return { accepted: true };
}

// This is the only browser-level capability surface exposed to Kai. It does not
// expose React state, DOM selectors, credentials, storage, or arbitrary scripts.
export function installKaiUiBridge() {
  window.CodeLabKaiUI = Object.freeze({
    allowedActions: Object.freeze([...ALLOWED_KAI_UI_ACTIONS]),
    requestAction: requestKaiUiAction,
  });

  return () => {
    if (window.CodeLabKaiUI?.requestAction === requestKaiUiAction) {
      delete window.CodeLabKaiUI;
    }
  };
}

export default requestKaiUiAction;
