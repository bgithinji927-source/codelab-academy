---
name: Kai layout verification
description: Why Kai alignment changes require checking the full theme cascade.
---

Check Kai teaching layout changes against the complete loaded stylesheet cascade, not just the page stylesheet.

**Why:** Theme rules have overridden otherwise correct page-level alignment rules, including narrowing the composer input while leaving its outer surface full width.

**How to apply:** For alignment changes, check message cards, plain responses, structured responses, and composer geometry across teaching modes. Preserve phone and keyboard behavior unless the request includes mobile changes.