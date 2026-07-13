"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = `/*
 * Thymer Plugin Settings UI \u2014 Design Tokens
 *
 * Canonical CSS custom properties for the plugin settings panel system.
 * Plugins consume this verbatim; component CSS reads from these vars.
 *
 * See shared/settings-ui/DESIGN.md for rationale.
 *
 * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).
 * Fallbacks use color-mix(currentColor) so panels work when a token is absent.
 *
 * SCOPE IS DOUBLED ON PURPOSE (.tps-panel.tps-panel, specificity 0,2,0).
 * Every plugin bundles its own copy of this file and injects it into the same
 * document, all declaring the same global .tps-panel class. At equal specificity
 * the last stylesheet injected wins for EVERY panel in the app, so one plugin
 * running an outdated bundle silently redefines these tokens for all the others.
 * That shipped: pre-1f753f6 builds set --tps-accent from --accent-color, a var
 * Thymer never defines, which collapsed the accent to currentColor (white text)
 * across every installed plugin's panel. Doubling the class lets a current copy
 * outrank any stale plain-.tps-panel copy regardless of injection order.
 * Do not "simplify" this back to a single class.
 */

.tps-panel.tps-panel {
  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-text:           var(--text-default,   currentColor);
  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));
  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));
  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));

  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-bg-input:       var(--input-bg-color,
                        color-mix(in srgb, currentColor 6%, transparent));
  --tps-bg-hover:       var(--hover-subtle,
                        var(--sidebar-bg-hover,
                        color-mix(in srgb, currentColor 8%, transparent)));
  --tps-bg-active:      var(--active-bg-color,
                        color-mix(in srgb, currentColor 12%, transparent));

  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-divider:        var(--divider-color,
                        var(--thin-divider-color,
                        color-mix(in srgb, currentColor 14%, transparent)));
  --tps-border:         var(--input-border-color,
                        var(--divider-color,
                        color-mix(in srgb, currentColor 22%, transparent)));
  --tps-border-strong:  var(--titlebar-border-color,
                        var(--selection-border,
                        color-mix(in srgb, currentColor 32%, transparent)));

  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Fallback is a real color, never currentColor: an accent that degrades into
     the text color fails invisibly. Deliberately the brand mark, not the theme's
     --color-primary-500 \u2014 that one is a muted slate on themes like
     basalt-bedrock, which would make checked rows harder to read, not easier. */
  --tps-accent:         var(--logo-color, #04d1ab);
  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);
  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));

  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-danger:         var(--enum-red-fg, #ef4444);
  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);
  --tps-warning:        var(--text-warning,
                        var(--enum-yellow-fg, #f59e0b));
  --tps-success:        var(--enum-green-fg, #10b981);
  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);

  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));

  /* Panel chrome */
  --tps-panel-bg:       var(--panel-bg-color, transparent);
  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);

  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Font is INHERITED from Thymer's panel chrome (see components.css). */

  --tps-fs-title:       18px;
  --tps-fs-lede:        13px;
  --tps-fs-section:     11px;
  --tps-fs-hint:        12px;
  --tps-fs-label:       13px;
  --tps-fs-desc:        12px;
  --tps-fs-body:        13px;
  --tps-fs-value:       12px;
  --tps-fs-button:      12px;
  --tps-fs-list-header: 10px;

  --tps-lh-tight:       1;
  --tps-lh-snug:        1.2;
  --tps-lh-base:        1.4;
  --tps-lh-loose:       1.5;

  --tps-fw-regular:     400;
  --tps-fw-medium:      500;
  --tps-fw-semibold:    600;
  --tps-fw-bold:        700;

  --tps-ls-section:     0.06em;
  --tps-ls-list:        0.08em;
  --tps-ls-title:       0;

  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-space-1:        4px;
  --tps-space-2:        8px;
  --tps-space-3:        12px;
  --tps-space-4:        16px;
  --tps-space-5:        24px;
  --tps-space-6:        32px;
  --tps-space-7:        48px;

  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-radius-sm:      4px;
  --tps-radius-md:      6px;
  --tps-radius-lg:      8px;
  --tps-radius-pill:    999px;
  --tps-radius-circle:  50%;

  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);
  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --tps-dur-fast:       80ms;
  --tps-dur-base:       160ms;

  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);

  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-control-h-sm:   28px;
  --tps-control-h-md:   32px;
  --tps-input-w:        64px;
  --tps-num-step-w:     28px;
  --tps-swatch-size:    22px;
  --tps-thumb-size:     16px;
  --tps-track-h:        6px;

  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);
  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .tps-panel.tps-panel {
    --tps-dur-fast:     1ms;
    --tps-dur-base:     1ms;
  }
}
`;

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: baseline;
  align-self: baseline;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

.tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-plugin-header-icon,
.tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  transform: translateY(2px);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Header controls: scope pill + bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Settings-scope cluster. Resting: one dim "All devices" pill. Diverged:
   pill lights amber (full-perimeter border + tint \u2014 never a single-edge
   accent) and the \u2191 push / \u21BA discard icon buttons appear beside it. Amber
   rides Thymer's orange enum tokens so it tracks the theme. */
.tps-scope {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.tps-scope-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 8px;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: 999px;
  font-size: 10.5px;
  line-height: 1;
  white-space: nowrap;
  color: var(--tps-text-muted);
  background: transparent;
  user-select: none;
}

.tps-scope-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tps-text-muted);
  opacity: 0.55;
}

.tps-scope-pill[data-diverged="true"] {
  color: var(--enum-orange-fg, #d98324);
  border-color: var(--enum-orange-border, rgba(217, 131, 36, 0.45));
  background: var(--enum-orange-bg, rgba(217, 131, 36, 0.12));
}

.tps-scope-pill[data-diverged="true"] .tps-scope-dot {
  background: var(--enum-orange-fg, #d98324);
  opacity: 1;
}

.tps-scope-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-scope-btn .ti {
  width: 14px;
  height: 14px;
  font-size: 14px;
  transform: none;
  margin: 0;
}

.tps-scope-btn:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-scope-btn:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-scope-btn--push:hover {
  color: var(--enum-green-fg, #3fa653);
  border-color: var(--enum-green-border, rgba(63, 166, 83, 0.45));
  background: var(--enum-green-bg, rgba(63, 166, 83, 0.12));
}

.tps-scope-btn--discard[data-armed="true"] {
  color: var(--enum-red-fg, #d64545);
  border-color: var(--enum-red-border, rgba(214, 69, 69, 0.5));
  background: var(--enum-red-bg, rgba(214, 69, 69, 0.12));
}

.tps-scope-btn[disabled] {
  opacity: 0.5;
  cursor: default;
}

/* \u2500\u2500 Header controls: bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Last flex item of the attr row; margin-left:auto pins the group to the
   right edge, align-self:center opts out of the row's baseline alignment. */
.tps-plugin-header-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-2, 8px);
  margin-left: auto;
  align-self: center;
  padding-left: var(--tps-space-3, 12px);
}

/* In-row placement (right of the version link): opt out of the attr row's
   baseline alignment so the square button centers on the text line. */
.tps-plugin-header-attr > .tps-plugin-header-bug {
  align-self: center;
  margin-left: var(--tps-space-2, 8px);
}

.tps-plugin-header-bug {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Undo the attr row's generic .ti treatment (translateY + margin) inside the button. */
.tps-plugin-header-bug .ti {
  width: 14px;
  height: 14px;
  font-size: 14px;
  transform: none;
  margin: 0;
}

.tps-plugin-header-bug:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-plugin-header-bug:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  width: 30px;
  height: 16px;
  padding: 0;
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-pill, 999px);
  background: var(--tps-bg-input);
  cursor: pointer;
  transition: background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch-knob {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 12px;
  height: 12px;
  border-radius: var(--tps-radius-circle, 50%);
  background: var(--tps-text-muted);
  transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch[aria-checked="true"] {
  background: var(--tps-accent);
  border-color: var(--tps-accent);
}

.tps-switch[aria-checked="true"] .tps-switch-knob {
  transform: translateX(14px);
  background: var(--tps-on-accent, #fff);
}

.tps-switch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch[data-busy],
.tps-switch:disabled {
  opacity: 0.55;
  pointer-events: none;
}

/* Off-state "safe mode": dim the body, keep it interactive \u2014 edits stage in the
   plugin's local drafts and apply on re-enable. Keyed off the pill's aria state
   so the optimistic flip dims instantly and heal re-renders stay correct with
   no JS. The header (pill, bug button, off-note) stays full opacity \u2014 exclude
   any direct child containing it (collection-icons wraps the header in a row
   element, so exclude by content, not class). */
.tps-panel:has(.tps-plugin-header .tps-switch[aria-checked="false"]) > :not(:has(.tps-plugin-header)) {
  opacity: 0.65;
  transition: opacity var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

/* Rendered whenever the header has a kill switch; shown only while it's off. */
.tps-plugin-header-off-note {
  display: none;
  margin: var(--tps-space-2, 8px) 0 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-plugin-header:has(.tps-switch[aria-checked="false"]) .tps-plugin-header-off-note {
  display: block;
}

/* \u2500\u2500 Feedback dialog (panel-scoped modal) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The overlay positions against the .tps-panel root (the scroll container). */
.tps-panel {
  position: relative;
}

.tps-feedback-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-4);
  background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 55%, transparent);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

@supports not ((backdrop-filter: blur(6px)) or (-webkit-backdrop-filter: blur(6px))) {
  .tps-feedback-overlay {
    background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 90%, transparent);
  }
}

/* Flex column with a growing description field: the card stretches to the
   available panel height (capped) and the textarea absorbs the difference,
   so the card itself never needs a scrollbar. */
.tps-feedback-card {
  display: flex;
  flex-direction: column;
  width: min(440px, 100%);
  height: min(760px, 100%);
  overflow: auto;
  background: var(--panel-bg-color, light-dark(#ffffff, #17171b));
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-lg);
  padding: var(--tps-space-4);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

/* Rows keep their natural height \u2014 when content doesn't fit (e.g. the system
   report drawer opens in a short panel) the CARD scrolls; rows must never be
   squeezed into overlapping each other. Only the description field flexes. */
.tps-feedback-card > * {
  flex: 0 0 auto;
}

.tps-feedback-card > .tps-feedback-field--grow {
  flex: 1 1 auto;
}

.tps-feedback-field--grow {
  display: flex;
  flex-direction: column;
}

.tps-feedback-field--grow .tps-feedback-textarea {
  flex: 1 1 auto;
  min-height: 72px;
}

.tps-feedback-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 var(--tps-space-2);
}

.tps-feedback-title {
  margin: 0;
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  color: var(--tps-text);
}

.tps-feedback-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  font-size: 14px;
}

.tps-feedback-close:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-feedback-close:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-feedback-hint {
  margin: 0 0 var(--tps-space-3);
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-feedback-field {
  display: block;
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-label {
  display: block;
  margin: 0 0 var(--tps-space-1);
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text);
}

.tps-feedback-input,
.tps-feedback-textarea {
  width: 100%;
  padding: var(--tps-space-1, 4px) var(--tps-space-2, 8px);
  font-family: inherit;
  font-size: var(--tps-fs-body, 13px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-sm, 4px);
}

.tps-feedback-textarea {
  resize: vertical;
  min-height: 72px;
}

.tps-feedback-input:focus,
.tps-feedback-textarea:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--tps-accent) 60%, transparent);
}

.tps-feedback-input[aria-invalid="true"],
.tps-feedback-textarea[aria-invalid="true"] {
  border-color: var(--tps-danger);
}

.tps-feedback-details {
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-summary {
  font-size: var(--tps-fs-hint, 12px);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-feedback-summary:hover {
  color: var(--tps-text);
}

.tps-feedback-report {
  margin: var(--tps-space-2) 0 0;
  padding: var(--tps-space-2);
  max-height: 140px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--tps-text-muted);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm, 4px);
}

/* Themed thin scrollbars \u2014 the card (short panels) and the report pre both scroll. */
.tps-feedback-card,
.tps-feedback-report {
  scrollbar-width: thin;
  scrollbar-color: var(--tps-border, rgba(127, 127, 127, 0.25)) transparent;
}

.tps-feedback-card::-webkit-scrollbar,
.tps-feedback-report::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.tps-feedback-card::-webkit-scrollbar-track,
.tps-feedback-report::-webkit-scrollbar-track {
  background: transparent;
}

.tps-feedback-card::-webkit-scrollbar-thumb,
.tps-feedback-report::-webkit-scrollbar-thumb {
  background: var(--tps-border, rgba(127, 127, 127, 0.25));
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.tps-feedback-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--tps-space-2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/feedback.js
  var MAX_URL_LENGTH = 7600;
  function el(tag, props, ...children) {
    const node = document.createElement(tag);
    const dom = (
      /** @type {any} */
      node
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class") node.className = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            node.setAttribute(k, v);
          }
        } else node.setAttribute(k, v === true ? "" : String(v));
      }
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }
  __name(el, "el");
  function versionFromConf(conf) {
    if (!conf || typeof conf !== "object") return "";
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object") {
      const v = (
        /** @type {Record<string, unknown>} */
        custom.pluginVersion
      );
      if (typeof v === "string") return v;
    }
    return "";
  }
  __name(versionFromConf, "versionFromConf");
  async function collectSystemReport({ pluginName = "", pluginVersion = "", disabled = false, data } = {}) {
    const ua = navigator.userAgent || "";
    const lines = [];
    lines.push(`Plugin: ${pluginName} v${pluginVersion}${disabled ? " (kill switch: OFF)" : ""}`);
    lines.push(`App: ${/electron/i.test(ua) ? "Thymer desktop app (Electron)" : "Thymer web"}${location && location.host ? ` \xB7 ${location.host}` : ""}`);
    lines.push(`UA: ${ua}`);
    lines.push(`Platform: ${navigator.platform || "?"} \xB7 lang ${navigator.language || "?"} \xB7 tz ${Intl.DateTimeFormat().resolvedOptions().timeZone || "?"}`);
    const dpr = Math.round((window.devicePixelRatio || 1) * 100) / 100;
    lines.push(`Screen (css px): ${screen.width}x${screen.height} @${dpr}x (\u2248${Math.round(screen.width * dpr)}x${Math.round(screen.height * dpr)} device px) \xB7 viewport ${window.innerWidth}x${window.innerHeight}`);
    try {
      const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const themeClasses = Array.from(document.body.classList).filter((c) => /theme/i.test(c)).join(" ");
      lines.push(`Appearance: ${dark ? "dark" : "light"}${reducedMotion ? " \xB7 reduced-motion" : ""}${themeClasses ? ` \xB7 body: ${themeClasses}` : ""}`);
    } catch {
    }
    try {
      const bits = [];
      if (navigator.hardwareConcurrency) bits.push(`${navigator.hardwareConcurrency} cores`);
      const devMem = (
        /** @type {any} */
        navigator.deviceMemory
      );
      if (devMem) bits.push(devMem >= 8 ? `RAM \u22658GB (API cap)` : `~${devMem}GB RAM`);
      const heap = (
        /** @type {any} */
        performance.memory
      );
      if (heap && heap.usedJSHeapSize) bits.push(`JS heap ${Math.round(heap.usedJSHeapSize / 1048576)}MB of ${Math.round(heap.jsHeapSizeLimit / 1048576)}MB limit`);
      bits.push(navigator.onLine === false ? "OFFLINE" : "online");
      if (typeof performance.now === "function") bits.push(`session up ${Math.round(performance.now() / 6e4)}m`);
      lines.push(`System: ${bits.join(" \xB7 ")}`);
    } catch {
    }
    try {
      if (navigator.storage && typeof navigator.storage.estimate === "function") {
        const est = await navigator.storage.estimate();
        if (est && est.usage != null) {
          lines.push(`Storage: ${Math.round((est.usage || 0) / 1048576)}MB used${est.quota ? ` of ${Math.round(est.quota / 1048576)}MB quota` : ""}`);
        }
      }
    } catch {
    }
    try {
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const plugins = await data.getAllGlobalPlugins();
        const listed = plugins.slice(0, 25).map((p) => {
          let name = "";
          let ver = "";
          try {
            name = p.getName?.() || "";
          } catch {
          }
          try {
            ver = versionFromConf(p.getConfiguration?.());
          } catch {
          }
          return ver ? `${name} v${ver}` : name;
        }).filter(Boolean);
        if (listed.length) {
          lines.push(`Global plugins, all installed (${plugins.length}): ${listed.join(", ")}${plugins.length > 25 ? ", \u2026" : ""}`);
        }
      }
      if (data && typeof /** @type {any} */
      data.getAllCollections === "function") {
        const collections = await /** @type {any} */
        data.getAllCollections();
        if (Array.isArray(collections)) lines.push(`Collection-level plugins: ${collections.length} (names withheld)`);
      }
    } catch {
    }
    return lines.join("\n");
  }
  __name(collectSystemReport, "collectSystemReport");
  function buildIssueUrl({ repository, description, discord, email, report }) {
    const repo = repository.replace(/\/+$/, "");
    const firstLine = description.split("\n")[0].trim();
    const title = `[bug] ${firstLine.length > 60 ? `${firstLine.slice(0, 57)}...` : firstLine}`;
    const bodyFor = /* @__PURE__ */ __name((desc2) => {
      const parts = [`**Describe the bug**

${desc2}`];
      if (discord || email) {
        const contact = [];
        if (discord) contact.push(`- Discord: ${discord}`);
        if (email) contact.push(`- Email: ${email}`);
        parts.push(`**Contact**

${contact.join("\n")}`);
      }
      parts.push(`**System report**

\`\`\`
${report}
\`\`\``);
      parts.push("_Screenshots: paste or drag images directly into this text box._");
      return parts.join("\n\n");
    }, "bodyFor");
    const urlFor = /* @__PURE__ */ __name((desc2) => `${repo}/issues/new?${new URLSearchParams({ title, body: bodyFor(desc2) })}`, "urlFor");
    let desc = description;
    let url = urlFor(desc);
    while (url.length > MAX_URL_LENGTH && desc.length > 200) {
      desc = `${desc.slice(0, Math.max(200, desc.length - 500)).trimEnd()}

[description truncated \u2014 URL length limit]`;
      url = urlFor(desc);
    }
    return url;
  }
  __name(buildIssueUrl, "buildIssueUrl");
  function openFeedbackDialog({ host, opener, pluginName = "", pluginVersion = "", repository = "", disabled = false, data } = {}) {
    const panelHost = host || /** @type {HTMLElement | null} */
    (opener ? opener.closest(".tps-panel") : null);
    if (!panelHost || !repository) return;
    if (panelHost.querySelector(".tps-feedback-overlay")) return;
    const reportPromise = collectSystemReport({ pluginName, pluginVersion, disabled, data });
    const discordInput = el("input", { class: "tps-feedback-input", type: "text", placeholder: "e.g. akaready", autocomplete: "off", spellcheck: "false" });
    const emailInput = el("input", { class: "tps-feedback-input", type: "email", placeholder: "e.g. you@example.com", autocomplete: "off", spellcheck: "false" });
    const descInput = el("textarea", { class: "tps-feedback-textarea", rows: "5", placeholder: "What happened? What did you expect instead?" });
    const reportPre = el("pre", { class: "tps-feedback-report" }, "Collecting\u2026");
    reportPromise.then((text) => {
      reportPre.textContent = text;
    }).catch(() => {
      reportPre.textContent = "Report unavailable.";
    });
    const fieldRow = /* @__PURE__ */ __name((label, field, extraClass) => el(
      "label",
      { class: `tps-feedback-field${extraClass ? ` ${extraClass}` : ""}` },
      el("span", { class: "tps-feedback-label" }, label),
      field
    ), "fieldRow");
    const prevOverflow = panelHost.style.overflow;
    const close = /* @__PURE__ */ __name(() => {
      overlay.remove();
      panelHost.style.overflow = prevOverflow;
      try {
        opener?.focus();
      } catch {
      }
    }, "close");
    const submit = /* @__PURE__ */ __name(async () => {
      const description = descInput.value.trim();
      if (!description) {
        descInput.setAttribute("aria-invalid", "true");
        descInput.focus();
        return;
      }
      let report = "";
      try {
        report = await reportPromise;
      } catch {
      }
      const url = buildIssueUrl({
        repository,
        description,
        discord: discordInput.value.trim(),
        email: emailInput.value.trim(),
        report
      });
      window.open(url, "_blank", "noopener");
      close();
    }, "submit");
    const card = el(
      "div",
      { class: "tps-feedback-card", role: "dialog", "aria-modal": "true", "aria-label": `Report a bug in ${pluginName}` },
      el(
        "div",
        { class: "tps-feedback-head" },
        el("h2", { class: "tps-feedback-title" }, "Report a bug"),
        el(
          "button",
          { type: "button", class: "tps-feedback-close", "aria-label": "Close", onClick: close },
          el("i", { class: "ti ti-x", "aria-hidden": "true" })
        )
      ),
      // Fixed short copy — no variable repo name, so each line stays on one line.
      el(
        "p",
        { class: "tps-feedback-hint" },
        "Opens a prefilled GitHub issue on the repo.",
        el("br"),
        "Please add relevant screenshots to the GitHub issue."
      ),
      fieldRow("Discord username (optional)", discordInput),
      fieldRow("Email (optional)", emailInput),
      fieldRow("What happened?", descInput, "tps-feedback-field--grow"),
      el(
        "details",
        { class: "tps-feedback-details" },
        el("summary", { class: "tps-feedback-summary" }, "System report (included with the issue)"),
        reportPre
      ),
      el(
        "div",
        { class: "tps-feedback-actions" },
        el("button", { type: "button", class: "tps-button tps-button--ghost", onClick: close }, "Cancel"),
        el("button", { type: "button", class: "tps-button tps-button--primary", onClick: submit }, "Open GitHub issue")
      )
    );
    const overlay = el("div", { class: "tps-feedback-overlay" }, card);
    overlay.addEventListener("mousedown", (e) => {
      if (e.target === overlay) close();
    });
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    });
    descInput.addEventListener("input", () => descInput.removeAttribute("aria-invalid"));
    panelHost.style.overflow = "hidden";
    overlay.style.top = `${panelHost.scrollTop}px`;
    overlay.style.height = `${panelHost.clientHeight}px`;
    panelHost.appendChild(overlay);
    descInput.focus();
  }
  __name(openFeedbackDialog, "openFeedbackDialog");

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el3 = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el3
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el3.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el3.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el3.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el3.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el3.setAttribute(k, v);
          }
        } else {
          el3.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el3, children);
    return el3;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready",
    killSwitch = null,
    feedback = null,
    scope = null
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const fb = feedback ? {
      pluginName: (feedback === true ? "" : feedback.pluginName) || heading,
      pluginVersion: (feedback === true ? "" : feedback.pluginVersion) || version,
      repository: (feedback === true ? "" : feedback.repository) || repository,
      disabled: (feedback === true ? void 0 : feedback.disabled) ?? (killSwitch ? !killSwitch.on : false),
      data: feedback === true ? void 0 : feedback.data
    } : null;
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null,
        // Bug report sits with the attribution links (right of the version);
        // the far-right corner is reserved for state toggles (scope pill,
        // kill switch).
        fb ? renderFeedbackButton(fb) : null,
        killSwitch || scope ? h(
          "span",
          { class: "tps-plugin-header-controls" },
          scope ? scopeCluster(scope) : null,
          killSwitch ? renderKillSwitch(killSwitch) : null
        ) : null
      ),
      // Always rendered with a kill switch; CSS shows it only while the pill is
      // off, so it appears instantly on the optimistic flip with no re-render.
      killSwitch ? h(
        "p",
        { class: "tps-plugin-header-off-note" },
        "Plugin is off \u2014 settings stay editable and your changes apply when you switch it back on."
      ) : null
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  function scopeCluster(scope) {
    const pill = h(
      "span",
      {
        class: "tps-scope-pill tooltip",
        "data-diverged": String(!!scope.diverged),
        "data-tooltip": scope.diverged ? "These settings currently apply to this device only" : "Settings are synced \u2014 changes here start as this-device-only",
        "data-tooltip-dir": "top"
      },
      h("span", { class: "tps-scope-dot", "aria-hidden": "true" }),
      scope.diverged ? "This device" : "All devices"
    );
    if (!scope.diverged) {
      return h("span", { class: "tps-scope" }, pill);
    }
    const push = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--push tooltip",
      "data-tooltip": "Apply these settings to all devices",
      "data-tooltip-dir": "top",
      "aria-label": "Apply these settings to all devices",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.disabled) return;
        btn.disabled = true;
        try {
          scope.onPush();
        } catch {
          btn.disabled = false;
        }
      }, "onClick")
    }, h("i", { class: "ti ti-arrow-up", "aria-hidden": "true" }));
    let disarmTimer = 0;
    const discard = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--discard tooltip",
      "data-tooltip": "Discard device changes \u2014 revert to synced settings",
      "data-tooltip-dir": "top",
      "aria-label": "Discard device changes",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.getAttribute("data-armed") !== "true") {
          btn.setAttribute("data-armed", "true");
          btn.setAttribute("data-tooltip", "Tap again to discard device changes");
          clearTimeout(disarmTimer);
          disarmTimer = window.setTimeout(() => {
            btn.removeAttribute("data-armed");
            btn.setAttribute("data-tooltip", "Discard device changes \u2014 revert to synced settings");
          }, 3e3);
          return;
        }
        clearTimeout(disarmTimer);
        try {
          scope.onDiscard();
        } catch {
        }
      }, "onClick")
    }, h("i", { class: "ti ti-arrow-back-up", "aria-hidden": "true" }));
    return h("span", { class: "tps-scope" }, pill, push, discard);
  }
  __name(scopeCluster, "scopeCluster");
  function renderFeedbackButton(fb) {
    return h("button", {
      type: "button",
      class: "tps-plugin-header-bug",
      title: "Report a bug",
      "aria-label": "Report a bug",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLElement} */
          e.currentTarget
        );
        openFeedbackDialog({
          host: (
            /** @type {HTMLElement | null} */
            btn.closest(".tps-panel")
          ),
          opener: btn,
          ...fb
        });
      }, "onClick")
    }, h("i", { class: "ti ti-bug", "aria-hidden": "true" }));
  }
  __name(renderFeedbackButton, "renderFeedbackButton");
  function renderKillSwitch(killSwitch) {
    const sw = h("button", {
      type: "button",
      class: "tps-switch",
      role: "switch",
      "aria-checked": String(!!killSwitch.on),
      "aria-label": killSwitch.label || "Plugin enabled",
      title: killSwitch.on ? "Plugin enabled \u2014 click to disable all of its effects" : "Plugin disabled \u2014 click to re-enable"
    }, h("span", { class: "tps-switch-knob" }));
    const unlock = /* @__PURE__ */ __name(() => {
      sw.removeAttribute("data-busy");
      sw.disabled = false;
    }, "unlock");
    sw.addEventListener("click", () => {
      if (sw.disabled) return;
      const nextOn = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(nextOn));
      sw.setAttribute("data-busy", "");
      sw.disabled = true;
      setTimeout(unlock, 700);
      try {
        killSwitch.onToggle(nextOn);
      } catch {
        unlock();
        sw.setAttribute("aria-checked", String(!nextOn));
      }
    });
    return sw;
  }
  __name(renderKillSwitch, "renderKillSwitch");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle, killSwitch, feedback } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee,
      killSwitch,
      feedback
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");

  // ../../shared/settings-ui/tailwind-palette.js
  var TW_SHADES = Object.freeze([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]);
  var TW_MID_INDEX = 5;
  function mirrorShadeIdx(idx) {
    const n = TW_SHADES.length;
    const i = Math.max(0, Math.min(n - 1, Number(idx) || 0));
    return n - 1 - i;
  }
  __name(mirrorShadeIdx, "mirrorShadeIdx");
  var TAILWIND = Object.freeze({
    slate: ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a", "#020617"],
    gray: ["#f9fafb", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#4b5563", "#374151", "#1f2937", "#111827", "#030712"],
    zinc: ["#fafafa", "#f4f4f5", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#52525b", "#3f3f46", "#27272a", "#18181b", "#09090b"],
    neutral: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717", "#0a0a0a"],
    stone: ["#fafaf9", "#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c", "#57534e", "#44403c", "#292524", "#1c1917", "#0c0a09"],
    red: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"],
    orange: ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12", "#431407"],
    amber: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#451a03"],
    yellow: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e", "#713f12", "#422006"],
    lime: ["#f7fee7", "#ecfccb", "#d9f99d", "#bef264", "#a3e635", "#84cc16", "#65a30d", "#4d7c0f", "#3f6212", "#365314", "#1a2e05"],
    green: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d", "#052e16"],
    emerald: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b", "#022c22"],
    teal: ["#f0fdfa", "#ccfbf1", "#99f6e4", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a", "#042f2e"],
    cyan: ["#ecfeff", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63", "#083344"],
    sky: ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e", "#082f49"],
    blue: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"],
    indigo: ["#eef2ff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81", "#1e1b4b"],
    violet: ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95", "#2e1065"],
    purple: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87", "#3b0764"],
    fuchsia: ["#fdf4ff", "#fae8ff", "#f5d0fe", "#f0abfc", "#e879f9", "#d946ef", "#c026d3", "#a21caf", "#86198f", "#701a75", "#4a044e"],
    pink: ["#fdf2f8", "#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843", "#500724"],
    rose: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337", "#4c0519"]
  });
  var TW_FAMILIES = Object.freeze(Object.keys(TAILWIND));
  function isHex(s) {
    return typeof s === "string" && /^#[0-9a-f]{6}$/i.test(s);
  }
  __name(isHex, "isHex");
  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  __name(hexToRgb, "hexToRgb");
  function exactTailwind(hex) {
    if (!isHex(hex)) return null;
    const needle = hex.toLowerCase();
    for (const family of TW_FAMILIES) {
      const i = TAILWIND[family].indexOf(needle);
      if (i >= 0) return { family, shadeIdx: i };
    }
    return null;
  }
  __name(exactTailwind, "exactTailwind");
  function nearestTailwind(hex) {
    if (!isHex(hex)) return null;
    const [r, g, b] = hexToRgb(hex);
    let best = null;
    let bestD = Infinity;
    for (const family of TW_FAMILIES) {
      const shades = TAILWIND[family];
      for (let i = 0; i < shades.length; i += 1) {
        const [cr, cg, cb] = hexToRgb(shades[i]);
        const d = (r - cr) ** 2 + (g - cg) ** 2 + (b - cb) ** 2;
        if (d < bestD) {
          bestD = d;
          best = { family, shadeIdx: i, hex: shades[i] };
        }
      }
    }
    return best;
  }
  __name(nearestTailwind, "nearestTailwind");

  // ../../shared/settings-ui/theme-vars.js
  var DEFAULT_THEME_SOURCES = [
    ":root",
    "body",
    ".sidebar--icons",
    ".sidebar"
  ];
  var CURRENT_THEME_VARS = Object.freeze([
    // Accent
    { name: "--logo-color", label: "Accent" },
    // Text
    { name: "--text-default", label: "Text" },
    { name: "--text-muted", label: "Muted text" },
    { name: "--text-subtle", label: "Subtle text" },
    { name: "--text-hilite", label: "Highlight text" },
    { name: "--text-brighter", label: "Brighter text" },
    { name: "--text-disabled", label: "Disabled text" },
    { name: "--text-status-offline", label: "Offline text" },
    { name: "--text-warning", label: "Warning text" },
    { name: "--cmdpal-hilite-color", label: "Command palette highlight" },
    { name: "--color-text-900", label: "Legacy text" },
    // Tag / pill
    { name: "--tag-fg-color", label: "Tag" },
    // Surfaces
    { name: "--panel-bg-color", label: "Panel background" },
    { name: "--input-bg-color", label: "Input background" },
    { name: "--hover-subtle", label: "Hover background" },
    { name: "--sidebar-bg-hover", label: "Sidebar hover" },
    { name: "--active-bg-color", label: "Active background" },
    // Borders / dividers
    { name: "--divider-color", label: "Divider" },
    { name: "--thin-divider-color", label: "Thin divider" },
    { name: "--faint-divider-color", label: "Faint divider" },
    { name: "--input-border-color", label: "Input border" },
    { name: "--sidebar-divider-color", label: "Sidebar divider" },
    { name: "--titlebar-border-color", label: "Titlebar border" },
    { name: "--selection-border", label: "Selection border" },
    // Enum/tag palette (Thymer ships 16 hues — no amber, lime, or violet)
    { name: "--enum-red-fg", label: "Red" },
    { name: "--enum-orange-fg", label: "Orange" },
    { name: "--enum-yellow-fg", label: "Yellow" },
    { name: "--enum-green-fg", label: "Green" },
    { name: "--enum-teal-fg", label: "Teal" },
    { name: "--enum-cyan-fg", label: "Cyan" },
    { name: "--enum-sky-fg", label: "Sky" },
    { name: "--enum-blue-fg", label: "Blue" },
    { name: "--enum-indigo-fg", label: "Indigo" },
    { name: "--enum-purple-fg", label: "Purple" },
    { name: "--enum-fuchsia-fg", label: "Fuchsia" },
    { name: "--enum-pink-fg", label: "Pink" },
    { name: "--enum-rose-fg", label: "Rose" },
    { name: "--enum-stone-fg", label: "Stone" },
    { name: "--enum-zinc-fg", label: "Zinc" }
  ]);
  function elementOrNull(node) {
    return node instanceof Element ? node : null;
  }
  __name(elementOrNull, "elementOrNull");
  function themeVariableRoots(options = {}) {
    const roots = [];
    const seen = /* @__PURE__ */ new Set();
    const add = /* @__PURE__ */ __name((node) => {
      const el3 = elementOrNull(node);
      if (!el3 || seen.has(el3)) return;
      seen.add(el3);
      roots.push(el3);
    }, "add");
    add(document.documentElement);
    add(document.body);
    for (const selector of options.selectors || DEFAULT_THEME_SOURCES) {
      try {
        document.querySelectorAll(selector).forEach(add);
      } catch {
      }
    }
    for (const root of options.roots || []) add(root);
    return roots;
  }
  __name(themeVariableRoots, "themeVariableRoots");
  function resolveRenderedColor(cssColor, root = document.body) {
    const host = elementOrNull(root) || document.body || document.documentElement;
    if (!host) return "";
    const probe = document.createElement("span");
    probe.style.position = "absolute";
    probe.style.pointerEvents = "none";
    probe.style.visibility = "hidden";
    probe.style.color = "transparent";
    host.appendChild(probe);
    const attempts = [cssColor];
    if (cssColor.startsWith("var(")) {
      attempts.push(`rgb(${cssColor})`, `rgba(${cssColor}, 1)`, `hsl(${cssColor})`, `hsla(${cssColor}, 1)`);
    }
    try {
      for (const attempt of attempts) {
        probe.style.color = "";
        probe.style.color = attempt;
        const resolved = getComputedStyle(probe).color;
        if (resolved && resolved !== "rgba(0, 0, 0, 0)" && resolved !== "transparent") return resolved;
      }
    } finally {
      probe.remove();
    }
    return "";
  }
  __name(resolveRenderedColor, "resolveRenderedColor");

  // ../../shared/settings-ui/theme-swatches.js
  var THEME_GROUPS = (
    /** @type {ThemeGroupDef[]} */
    Object.freeze([
      {
        key: "hues",
        label: "Theme colors",
        tokens: [
          { token: "--enum-red-fg", label: "Red" },
          { token: "--enum-orange-fg", label: "Orange" },
          { token: "--enum-yellow-fg", label: "Yellow" },
          { token: "--enum-green-fg", label: "Green" },
          { token: "--enum-teal-fg", label: "Teal" },
          { token: "--enum-cyan-fg", label: "Cyan" },
          { token: "--enum-sky-fg", label: "Sky" },
          { token: "--enum-blue-fg", label: "Blue" },
          { token: "--enum-indigo-fg", label: "Indigo" },
          { token: "--enum-purple-fg", label: "Purple" },
          { token: "--enum-fuchsia-fg", label: "Fuchsia" },
          { token: "--enum-pink-fg", label: "Pink" },
          { token: "--enum-rose-fg", label: "Rose" },
          { token: "--tag-fg-color", label: "Tag" },
          { token: "--text-warning", label: "Warning" }
        ]
      },
      {
        key: "text",
        label: "Text & neutrals",
        tokens: [
          { token: "--text-default", label: "Text" },
          { token: "--text-muted", label: "Muted text" },
          { token: "--text-subtle", label: "Subtle text" },
          { token: "--text-hilite", label: "Highlight text" },
          { token: "--text-brighter", label: "Brighter text" },
          { token: "--text-disabled", label: "Disabled text" },
          { token: "--enum-stone-fg", label: "Stone" },
          { token: "--enum-zinc-fg", label: "Zinc" }
        ]
      },
      {
        key: "surfaces",
        label: "Surfaces & lines",
        marginal: true,
        tokens: [
          { token: "--panel-bg-color", label: "Panel background" },
          { token: "--input-bg-color", label: "Input background" },
          { token: "--hover-subtle", label: "Hover background" },
          { token: "--active-bg-color", label: "Active background" },
          { token: "--divider-color", label: "Divider" },
          { token: "--thin-divider-color", label: "Thin divider" },
          { token: "--faint-divider-color", label: "Faint divider" },
          { token: "--input-border-color", label: "Input border" },
          { token: "--titlebar-border-color", label: "Titlebar border" },
          { token: "--selection-border", label: "Selection border" }
        ]
      }
    ])
  );
  function resolveThemeToken(token, roots) {
    const rs = roots || themeVariableRoots();
    for (const root of rs) {
      const raw = getComputedStyle(root).getPropertyValue(token).trim();
      if (!raw) continue;
      const resolved = resolveRenderedColor(`var(${token})`, root);
      if (resolved) return resolved;
    }
    return "";
  }
  __name(resolveThemeToken, "resolveThemeToken");
  function resolveThemeGroups({ exclude = [] } = {}) {
    const roots = themeVariableRoots();
    const excludeSet = new Set(exclude);
    const groups = [];
    for (const def of THEME_GROUPS) {
      const swatches = [];
      const seen = /* @__PURE__ */ new Set();
      for (const { token, label } of def.tokens) {
        if (excludeSet.has(token)) continue;
        const color = resolveThemeToken(token, roots);
        if (!color || seen.has(color)) continue;
        seen.add(color);
        swatches.push({ token, label, color });
      }
      if (swatches.length) {
        groups.push({ key: def.key, label: def.label, hint: def.hint, marginal: def.marginal, swatches });
      }
    }
    return groups;
  }
  __name(resolveThemeGroups, "resolveThemeGroups");

  // ../../shared/settings-ui/tooltip.js
  var TIP_SELECTOR = "[data-tps-tip],[data-cf-tip]";
  var STYLE_ID = "tps-tip-css";
  var WIN_FLAG = "__tpsInstantTooltip";
  function installInstantTooltip() {
    if (typeof document === "undefined") return;
    if (typeof window !== "undefined" && /** @type {any} */
    window[WIN_FLAG]) return;
    if (typeof window !== "undefined") window[WIN_FLAG] = true;
    injectTooltipCss();
    const tip = document.createElement("div");
    tip.className = "tps-tip";
    tip.setAttribute("aria-hidden", "true");
    (document.body || document.documentElement).appendChild(tip);
    const hide = /* @__PURE__ */ __name(() => tip.classList.remove("is-visible"), "hide");
    const label = /* @__PURE__ */ __name((el3) => el3.getAttribute("data-tps-tip") || el3.getAttribute("data-cf-tip") || "", "label");
    document.addEventListener("mouseover", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      if (!t) {
        hide();
        return;
      }
      const text = label(t);
      if (!text) {
        hide();
        return;
      }
      tip.textContent = text;
      const r = t.getBoundingClientRect();
      tip.style.left = `${r.left + r.width / 2}px`;
      tip.style.top = `${r.top}px`;
      tip.classList.add("is-visible");
    }, true);
    document.addEventListener("mouseout", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      const to = e.relatedTarget instanceof Element ? e.relatedTarget : null;
      if (t && (!to || !t.contains(to))) hide();
    }, true);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("blur", hide);
  }
  __name(installInstantTooltip, "installInstantTooltip");
  function injectTooltipCss() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = [
      ".tps-tip{position:fixed;z-index:2147483000;transform:translate(-50%,calc(-100% - 8px));",
      "padding:3px 8px;border-radius:var(--tps-radius-sm,5px);background:var(--tps-text,#1a1a1a);",
      "color:var(--tps-panel-bg,#fff);font-size:11px;font-weight:500;line-height:1.3;white-space:nowrap;",
      "pointer-events:none;opacity:0;box-shadow:0 2px 8px rgba(0,0,0,.35)}",
      ".tps-tip.is-visible{opacity:1}"
    ].join("");
    (document.head || document.documentElement).appendChild(style);
  }
  __name(injectTooltipCss, "injectTooltipCss");

  // ../../shared/settings-ui/color-field.js
  var MAX_CUSTOM = 44;
  function colorField({ value = null, onPick, featured = [], allowNone = true, customSwatches = [], onCustomSwatchesChange } = {}) {
    const emit = /* @__PURE__ */ __name((r) => {
      if (typeof onPick === "function") onPick(r);
    }, "emit");
    let curFamily = "blue";
    let curShade = TW_MID_INDEX;
    let invertLightness = false;
    let mode = "theme";
    let customList = Array.isArray(customSwatches) ? customSwatches.filter(isHex).map((s) => s.toLowerCase()).slice(0, MAX_CUSTOM) : [];
    let selection = null;
    if (value && value.type === "tw" && value.family && TAILWIND[value.family]) {
      const idx = Math.max(0, Math.min(TW_SHADES.length - 1, Number(value.shadeIdx) || 0));
      curFamily = value.family;
      curShade = idx;
      invertLightness = !!value.invert;
      selection = { kind: "hex", hex: TAILWIND[value.family][idx] };
      mode = "tailwind";
    } else {
      selection = normalizeValue(value);
      if (selection && selection.kind === "hex") {
        const ex = exactTailwind(selection.hex);
        if (ex) {
          curFamily = ex.family;
          curShade = ex.shadeIdx;
          mode = "tailwind";
        } else {
          const near = nearestTailwind(selection.hex);
          if (near) {
            curFamily = near.family;
            curShade = near.shadeIdx;
          }
          mode = "custom";
        }
      }
    }
    const root = h("div", { class: "tps-color-field" });
    const tabs = { theme: tabBtn("theme", "Theme"), tailwind: tabBtn("tailwind", "Tailwind"), custom: tabBtn("custom", "Custom") };
    root.appendChild(h("div", { class: "tps-cf-tabs" }, tabs.theme, tabs.tailwind, tabs.custom));
    function tabBtn(m, label) {
      const b = h("button", { type: "button", class: "tps-cf-tab", dataset: { mode: m } }, label);
      b.addEventListener("click", () => setMode(m));
      return b;
    }
    __name(tabBtn, "tabBtn");
    const paneTheme = h("div", { class: "tps-cf-pane", dataset: { pane: "theme" } });
    const featuredTokens = featured.map((f) => f.token);
    if (featured.length) {
      const featRow = h("div", { class: "tps-cf-featured" });
      for (const f of featured) {
        const color = resolveThemeToken(f.token);
        if (!color) continue;
        featRow.appendChild(themeTile(f.label, f.token, color));
      }
      if (featRow.children.length) paneTheme.appendChild(featRow);
    }
    for (const g of resolveThemeGroups({ exclude: featuredTokens })) {
      paneTheme.appendChild(h(
        "div",
        { class: "tps-cf-group" },
        h(
          "div",
          { class: "tps-cf-group-head" },
          h("span", { class: "tps-cf-group-label" }, g.label),
          g.hint ? h("span", { class: "tps-cf-group-hint" }, g.hint) : null
        ),
        h("div", { class: "tps-cf-dots" }, ...g.swatches.map((s) => themeDot(s.label, s.token, s.color)))
      ));
    }
    root.appendChild(paneTheme);
    const paneTw = h("div", { class: "tps-cf-pane", dataset: { pane: "tailwind" } });
    const hueCells = {};
    const hueRow = h("div", { class: "tps-cf-dots" });
    for (const fam of TW_FAMILIES) {
      const dot = h("button", {
        type: "button",
        class: "tps-cf-swatch tps-cf-dot tps-cf-hue-dot",
        dataset: { cfTip: fam },
        "aria-label": fam,
        style: { background: TAILWIND[fam][TW_MID_INDEX] }
      });
      dot.addEventListener("click", () => {
        curFamily = fam;
        buildLightRamp();
        pickTailwind(fam, curShade);
      });
      hueCells[fam] = dot;
      hueRow.appendChild(dot);
    }
    const lightRamp = h("div", { class: "tps-cf-ramp" });
    const invertCheckbox = h("input", { type: "checkbox", class: "tps-cf-invert-cb" });
    invertCheckbox.checked = invertLightness;
    const invertRow = h(
      "label",
      { class: "tps-cf-invert" },
      invertCheckbox,
      h("span", null, "Invert lightness in light/dark"),
      h("span", { class: "tps-cf-invert-hint" }, "e.g. 900 in light \u2192 100 in dark")
    );
    invertCheckbox.addEventListener("change", () => {
      invertLightness = invertCheckbox.checked;
      renderSelection();
      if (selection && selection.kind === "hex") {
        const ex = exactTailwind(selection.hex);
        if (ex) emit({ type: "tw", family: ex.family, shadeIdx: ex.shadeIdx, invert: invertLightness, hex: selection.hex });
      }
    });
    paneTw.appendChild(labeledGroup("Hue", hueRow));
    paneTw.appendChild(labeledGroup("Lightness", lightRamp));
    paneTw.appendChild(invertRow);
    root.appendChild(paneTw);
    function buildLightRamp() {
      lightRamp.textContent = "";
      TW_SHADES.forEach((s, si) => {
        const hex = TAILWIND[curFamily][si];
        const cell = h("button", {
          type: "button",
          class: "tps-cf-ramp-cell",
          dataset: { si: String(si), cfTip: `${curFamily}-${s} \xB7 ${hex}` },
          "aria-label": `${curFamily} ${s}`,
          style: { background: hex, color: textOn(hex) }
        }, String(s));
        cell.addEventListener("click", () => {
          curShade = si;
          pickTailwind(curFamily, si);
        });
        lightRamp.appendChild(cell);
      });
    }
    __name(buildLightRamp, "buildLightRamp");
    function pickTailwind(family, shadeIdx) {
      curFamily = family;
      curShade = shadeIdx;
      const hex = TAILWIND[family][shadeIdx];
      selection = { kind: "hex", hex };
      renderSelection();
      emit({ type: "tw", family, shadeIdx, invert: invertLightness, hex });
    }
    __name(pickTailwind, "pickTailwind");
    const paneCustom = h("div", { class: "tps-cf-pane", dataset: { pane: "custom" } });
    const customRow = h("div", { class: "tps-cf-dots tps-cf-custom-row" });
    const hexDot = h("span", { class: "tps-cf-hex-dot" });
    const hexInput = h("input", { type: "text", class: "tps-cf-hex-input", placeholder: "#hex", maxLength: 7, spellcheck: false, "aria-label": "Custom hex color" });
    const addBtn = h("button", { type: "button", class: "tps-cf-add" }, "Add");
    const removeBtn = h("button", { type: "button", class: "tps-cf-remove" }, "Remove");
    removeBtn.hidden = true;
    const countEl = h("span", { class: "tps-cf-custom-count" });
    paneCustom.appendChild(customRow);
    paneCustom.appendChild(h(
      "div",
      { class: "tps-cf-addrow" },
      h("span", { class: "tps-cf-hexbox" }, hexDot, hexInput),
      addBtn,
      removeBtn,
      countEl
    ));
    root.appendChild(paneCustom);
    removeBtn.addEventListener("click", () => {
      if (!selection || selection.kind !== "hex") return;
      const idx = customList.indexOf(selection.hex);
      if (idx >= 0) removeCustom(idx);
    });
    let dragIdx = -1;
    function renderCustomRow() {
      customRow.textContent = "";
      if (!customList.length) {
        customRow.appendChild(h("span", { class: "tps-cf-custom-empty" }, "No saved colors yet \u2014 add a hex, then select one and press Remove to delete it."));
      }
      customList.forEach((hex, i) => {
        const dot = h("button", {
          type: "button",
          class: "tps-cf-swatch tps-cf-dot tps-cf-custom-dot",
          draggable: "true",
          dataset: { hex, idx: String(i), cfTip: hex.toUpperCase() },
          "aria-label": hex,
          style: { background: hex }
        });
        dot.addEventListener("click", () => pickHex(hex));
        dot.addEventListener("dragstart", () => {
          dragIdx = i;
          dot.classList.add("is-dragging");
        });
        dot.addEventListener("dragend", () => dot.classList.remove("is-dragging"));
        dot.addEventListener("dragover", (e) => e.preventDefault());
        dot.addEventListener("drop", (e) => {
          e.preventDefault();
          if (dragIdx >= 0 && dragIdx !== i) reorderCustom(dragIdx, i);
          dragIdx = -1;
        });
        customRow.appendChild(dot);
      });
      countEl.textContent = `${customList.length}/${MAX_CUSTOM}`;
      renderSelection();
    }
    __name(renderCustomRow, "renderCustomRow");
    const commitCustom = /* @__PURE__ */ __name(() => {
      if (typeof onCustomSwatchesChange === "function") onCustomSwatchesChange(customList.slice());
    }, "commitCustom");
    function addCustom() {
      const hex = normHex(hexInput.value);
      if (!hex) return;
      if (!customList.includes(hex) && customList.length < MAX_CUSTOM) {
        customList = [...customList, hex];
        commitCustom();
        renderCustomRow();
      }
      hexInput.value = "";
      hexDot.style.background = "";
      pickHex(hex);
    }
    __name(addCustom, "addCustom");
    function removeCustom(i) {
      customList = customList.filter((_, j) => j !== i);
      commitCustom();
      renderCustomRow();
    }
    __name(removeCustom, "removeCustom");
    function reorderCustom(from, to) {
      const arr = customList.slice();
      const [m] = arr.splice(from, 1);
      arr.splice(to, 0, m);
      customList = arr;
      commitCustom();
      renderCustomRow();
    }
    __name(reorderCustom, "reorderCustom");
    addBtn.addEventListener("click", addCustom);
    hexInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addCustom();
      }
    });
    hexInput.addEventListener("input", () => {
      const hadHash = hexInput.value.trimStart().startsWith("#");
      const digits = hexInput.value.replace(/[^0-9a-fA-F]/g, "").slice(0, 6);
      const cleaned = (hadHash ? "#" : "") + digits;
      if (cleaned !== hexInput.value) hexInput.value = cleaned;
      const hex = normHex(hexInput.value);
      hexDot.style.background = hex || "";
      if (hex) {
        selection = { kind: "hex", hex };
        renderSelection();
        emit({ type: "hex", hex });
      }
    });
    let noneRef = null;
    if (allowNone) {
      const noneBtn = h("button", { type: "button", class: "tps-cf-none" }, h("span", { class: "tps-cf-none-sw" }), "No color");
      noneBtn.addEventListener("click", () => {
        selection = { kind: "none" };
        renderAll();
        emit(null);
      });
      root.appendChild(h("div", { class: "tps-cf-divider" }));
      root.appendChild(h("div", { class: "tps-cf-universal" }, noneBtn));
      noneRef = noneBtn;
    }
    function pickHex(hex) {
      selection = { kind: "hex", hex };
      renderSelection();
      emit({ type: "hex", hex });
    }
    __name(pickHex, "pickHex");
    function renderSelection() {
      root.querySelectorAll(".is-sel, .is-sel-mirror").forEach((e) => e.classList.remove("is-sel", "is-sel-mirror"));
      Object.values(hueCells).forEach((c) => c.classList.remove("is-active"));
      if (hueCells[curFamily]) hueCells[curFamily].classList.add("is-active");
      removeBtn.hidden = !(selection && selection.kind === "hex" && customList.includes(selection.hex));
      let twShadeSelected = false;
      if (selection) {
        if (selection.kind === "theme") {
          const el3 = root.querySelector(`.tps-cf-swatch[data-token="${cssEscape(selection.token)}"]`);
          if (el3) el3.classList.add("is-sel");
        } else if (selection.kind === "hex") {
          const selHex = selection.hex;
          const rc = lightRamp.querySelector(`.tps-cf-ramp-cell[data-si="${curShade}"]`);
          if (rc && TAILWIND[curFamily][curShade] === selHex) {
            rc.classList.add("is-sel");
            twShadeSelected = true;
          }
          customRow.querySelectorAll(".tps-cf-custom-dot").forEach((d) => {
            if (d.dataset.hex === selHex) d.classList.add("is-sel");
          });
        } else if (selection.kind === "none") {
          if (noneRef) noneRef.classList.add("is-sel");
        }
      }
      const canInvert = twShadeSelected && curShade !== TW_MID_INDEX;
      invertCheckbox.disabled = !canInvert;
      invertRow.classList.toggle("is-disabled", !canInvert);
      if (canInvert && invertLightness) {
        const mc = lightRamp.querySelector(`.tps-cf-ramp-cell[data-si="${mirrorShadeIdx(curShade)}"]`);
        if (mc) mc.classList.add("is-sel-mirror");
      }
    }
    __name(renderSelection, "renderSelection");
    function setMode(m) {
      mode = m;
      for (const k in tabs) tabs[k].classList.toggle("is-active", k === m);
      paneTheme.classList.toggle("is-active", m === "theme");
      paneTw.classList.toggle("is-active", m === "tailwind");
      paneCustom.classList.toggle("is-active", m === "custom");
    }
    __name(setMode, "setMode");
    function renderAll() {
      setMode(mode);
      renderSelection();
    }
    __name(renderAll, "renderAll");
    function themeTile(label, token, color) {
      const tile = h(
        "button",
        { type: "button", class: "tps-cf-swatch tps-cf-tile", dataset: { token }, "aria-label": label },
        h("span", { class: "tps-cf-tile-dot", style: { background: color } }),
        h("span", { class: "tps-cf-tile-label" }, label)
      );
      tile.addEventListener("click", () => selectTheme(token));
      return tile;
    }
    __name(themeTile, "themeTile");
    function themeDot(label, token, color) {
      const dot = h("button", { type: "button", class: "tps-cf-swatch tps-cf-dot", dataset: { token, cfTip: label }, "aria-label": label, style: { background: color } });
      dot.addEventListener("click", () => selectTheme(token));
      return dot;
    }
    __name(themeDot, "themeDot");
    function selectTheme(token) {
      selection = { kind: "theme", token };
      renderSelection();
      const rendered = resolveThemeToken(token);
      emit({ type: "theme", token, hex: renderedToHex(rendered) || rendered });
    }
    __name(selectTheme, "selectTheme");
    function labeledGroup(label, body) {
      return h("div", { class: "tps-cf-group" }, h("div", { class: "tps-cf-group-head" }, h("span", { class: "tps-cf-group-label" }, label)), body);
    }
    __name(labeledGroup, "labeledGroup");
    installInstantTooltip();
    buildLightRamp();
    renderCustomRow();
    if (selection && selection.kind === "hex" && mode === "custom" && !customList.includes(selection.hex)) {
      hexInput.value = selection.hex;
      hexDot.style.background = selection.hex;
    }
    renderAll();
    return root;
  }
  __name(colorField, "colorField");
  function normalizeValue(value) {
    if (!value) return null;
    if (value.type === "hex" && isHex(value.hex)) return { kind: "hex", hex: value.hex.toLowerCase() };
    if (value.type === "theme" && value.token) return { kind: "theme", token: value.token };
    return null;
  }
  __name(normalizeValue, "normalizeValue");
  function cssEscape(s) {
    return String(s).replace(/"/g, '\\"');
  }
  __name(cssEscape, "cssEscape");
  function normHex(input) {
    if (typeof input !== "string") return null;
    let s = input.trim().toLowerCase();
    if (!s) return null;
    if (!s.startsWith("#")) s = `#${s}`;
    if (/^#[0-9a-f]{3}$/.test(s)) s = `#${s.slice(1).split("").map((c) => c + c).join("")}`;
    return /^#[0-9a-f]{6}$/.test(s) ? s : null;
  }
  __name(normHex, "normHex");
  function textOn(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
    const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return l > 0.6 ? "rgba(0,0,0,0.72)" : "rgba(255,255,255,0.92)";
  }
  __name(textOn, "textOn");
  function renderedToHex(str) {
    if (!str) return "";
    if (/^#[0-9a-f]{6}$/i.test(str)) return str.toLowerCase();
    const m = str.match(/rgba?\(([^)]+)\)/i);
    if (!m) return "";
    const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
    if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return "";
    const t = /* @__PURE__ */ __name((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0"), "t");
    return `#${t(parts[0])}${t(parts[1])}${t(parts[2])}`;
  }
  __name(renderedToHex, "renderedToHex");

  // ../../shared/plugin-version.js
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = (
      /** @type {Record<string, unknown> | undefined} */
      conf.custom
    );
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function resolveConfigApi(plugin) {
    if (!plugin) return null;
    if (typeof plugin.saveConfiguration === "function") return plugin;
    try {
      const guid = typeof plugin.getGuid === "function" ? plugin.getGuid() : null;
      const data = plugin.data;
      if (guid && data && typeof data.getPluginByGuid === "function") {
        const byGuid = data.getPluginByGuid(guid);
        if (byGuid && typeof byGuid.saveConfiguration === "function") return byGuid;
      }
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const all = await data.getAllGlobalPlugins();
        const name = plugin.getConfiguration?.()?.name;
        const found = all.find((p) => p && typeof p.getGuid === "function" && p.getGuid() === guid) || (name ? all.find((p) => p && typeof p.getName === "function" && p.getName() === name) : null);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
    } catch {
    }
    return null;
  }
  __name(resolveConfigApi, "resolveConfigApi");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-version-synced/${ws}/${conf.name}`;
      if (sessionStorage.getItem(guardKey) === pluginVersion) return;
      sessionStorage.setItem(guardKey, pluginVersion);
    } catch {
    }
    try {
      await api.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");

  // ../../shared/plugin-kill-switch.js
  var MARKER_SYNC_HORIZON_MS = 9e4;
  function isPluginDisabled(conf) {
    if (!conf || typeof conf !== "object") return false;
    const custom = conf.custom;
    return !!(custom && typeof custom === "object" && /** @type {Record<string, unknown>} */
    custom.pluginDisabled === true);
  }
  __name(isPluginDisabled, "isPluginDisabled");
  function markerKey(plugin) {
    let ws = "default";
    try {
      ws = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `tps-kill-switch/${ws}/${name}`;
  }
  __name(markerKey, "markerKey");
  function writeKillSwitchMarker(plugin, disabled) {
    try {
      localStorage.setItem(markerKey(plugin), JSON.stringify({ disabled, ts: Date.now() }));
    } catch {
    }
  }
  __name(writeKillSwitchMarker, "writeKillSwitchMarker");
  function clearKillSwitchMarker(plugin) {
    try {
      localStorage.removeItem(markerKey(plugin));
    } catch {
    }
  }
  __name(clearKillSwitchMarker, "clearKillSwitchMarker");
  function readKillSwitch(plugin) {
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
    }
    const confDisabled = isPluginDisabled(conf);
    try {
      const raw = localStorage.getItem(markerKey(plugin));
      if (raw) {
        const marker = JSON.parse(raw);
        if (marker && typeof marker.disabled === "boolean") {
          if (marker.disabled === confDisabled) {
            clearKillSwitchMarker(plugin);
            return confDisabled;
          }
          if (Date.now() - (Number(marker.ts) || 0) < MARKER_SYNC_HORIZON_MS) {
            return marker.disabled;
          }
          clearKillSwitchMarker(plugin);
        }
      }
    } catch {
    }
    return confDisabled;
  }
  __name(readKillSwitch, "readKillSwitch");
  async function setPluginDisabled(plugin, disabled, pluginVersion, customPatch = {}) {
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    if (readKillSwitch(plugin) === disabled && isPluginDisabled(conf) === disabled) return;
    writeKillSwitchMarker(plugin, disabled);
    try {
      await api.saveConfiguration(configWithPluginVersion(conf, { ...customPatch, pluginDisabled: disabled }, pluginVersion));
    } catch {
      clearKillSwitchMarker(plugin);
    }
  }
  __name(setPluginDisabled, "setPluginDisabled");

  // plugin.js
  var PLUGIN_VERSION = "1.3.4";
  var ROOT_CLASS = "plg-collection-colors";
  var COLORS_CHANGED_EVENT = "collection-colors:changed";
  var PANEL_TYPE = "settings";
  var SIDEBAR_SEPARATOR_PLUGIN_KEY = "sidebarSeparators";
  var SIDEBAR_SEPARATOR_PLUGIN_KEY_LEGACY = "sidebarSeperators";
  var SIDEBAR_SEPARATOR_COLLECTION_NAME = "\u200B";
  var TINT_STYLE_ID = "plg-collection-colors-tint";
  var SIDEBAR_ROOT_ATTR = "data-plg-coll-sidebar";
  var COLL_GUID_ATTR = "data-plg-coll-guid";
  var MENU_NEW_ATTR = "data-plg-coll-new";
  var ACTIVE_ATTR = "data-plg-coll-active";
  var THYMER_ROW_FOCUSED = ".sidebar-item-hoverable.is-focused";
  var APPLY_TO_DEFAULT = "icon+text";
  var SIDEBAR_TARGET_DEFAULT = ["titleIcon", "title"];
  var BREADCRUMB_TARGET_DEFAULT = ["title", "bg"];
  var MENU_TARGET_DEFAULT = ["icon", "text", "subtext"];
  var MENU_NEW_TARGET_DEFAULT = ["icon", "text", "subtext"];
  var TAILWIND_SHADES = Object.freeze([100, 200, 300, 400, 500, 600, 700, 800, 900]);
  var TAILWIND_FAMILIES = Object.freeze({
    Slate: { 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" },
    Gray: { 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" },
    Zinc: { 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" },
    Neutral: { 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" },
    Red: { 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" },
    Orange: { 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" },
    Amber: { 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" },
    Yellow: { 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" },
    Lime: { 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" },
    Green: { 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" },
    Emerald: { 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" },
    Teal: { 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" },
    Cyan: { 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" },
    Sky: { 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" },
    Blue: { 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" },
    Indigo: { 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" },
    Violet: { 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" },
    Purple: { 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" },
    Fuchsia: { 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" },
    Pink: { 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" },
    Rose: { 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }
  });
  var PRESETS = Object.freeze([
    { id: "rainbow", label: "Rainbow", shadeIdx: 5, families: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"] },
    { id: "sunset", label: "Sunset", shadeIdx: 5, families: ["rose", "red", "orange", "amber", "yellow"] },
    { id: "fire", label: "Fire", shadeIdx: 5, families: ["yellow", "amber", "orange", "red"] },
    { id: "ocean", label: "Ocean", shadeIdx: 5, families: ["teal", "cyan", "sky", "blue", "indigo"] },
    { id: "forest", label: "Forest", shadeIdx: 6, families: ["lime", "green", "emerald", "teal", "cyan"] },
    { id: "meadow", label: "Meadow", shadeIdx: 5, families: ["lime", "green", "emerald", "teal"] },
    { id: "berry", label: "Berry", shadeIdx: 5, families: ["blue", "indigo", "violet", "purple", "fuchsia", "pink"] },
    { id: "candy", label: "Candy", shadeIdx: 5, families: ["rose", "pink", "fuchsia", "purple", "violet"] },
    { id: "warm", label: "Warm", shadeIdx: 5, families: ["red", "orange", "amber", "yellow", "rose"] },
    { id: "cool", label: "Cool", shadeIdx: 5, families: ["teal", "cyan", "sky", "blue", "indigo", "violet"] },
    { id: "neon", label: "Neon", shadeIdx: 4, families: ["lime", "cyan", "blue", "fuchsia", "rose"] },
    { id: "pastels", label: "Pastels", shadeIdx: 3, families: ["rose", "orange", "amber", "lime", "emerald", "sky", "blue", "violet", "fuchsia"] },
    { id: "jewel", label: "Jewel", shadeIdx: 7, families: ["emerald", "teal", "blue", "violet", "fuchsia", "rose"] },
    { id: "grayscale", label: "Grayscale", family: "slate", shades: [5, 6, 7, 8, 9] },
    { id: "mono", label: "Mono Blue", family: "blue", shades: [4, 5, 6, 7, 8] }
  ]);
  var ANIM_TICK_MS = 90;
  var APPLY_TO_OPTIONS = (
    /** @type {const} */
    [
      { val: "icon", label: "Icon", letter: "I", icon: "ti-star", tip: "Tint the collection icon only." },
      { val: "icon+text", label: "Collection title", letter: "T", icon: "ti-abc", tip: "Tint the icon and the collection title." },
      { val: "icon+text+pages", label: "Title + pages", letter: "P", icon: "ti-list-tree", tip: "Tint the collection title and every page inside." }
    ]
  );
  var SIDEBAR_TARGET_OPTIONS = (
    /** @type {const} */
    [
      { val: "titleIcon", label: "Collection title icon", icon: "ti-star" },
      { val: "title", label: "Collection title", icon: "ti-abc" },
      { val: "pageIcon", label: "Page icon", icon: "ti-icons" },
      { val: "pages", label: "Page", icon: "ti-list-tree" }
    ]
  );
  var BREADCRUMB_TARGET_OPTIONS = (
    /** @type {const} */
    [
      { val: "icon", label: "Icon" },
      { val: "title", label: "Title" },
      { val: "slash", label: "Slash" },
      { val: "views", label: "Views" },
      { val: "bg", label: "Background" }
    ]
  );
  var MENU_TARGET_OPTIONS = (
    /** @type {const} */
    [
      { val: "icon", label: "Icon" },
      { val: "text", label: "Text" },
      { val: "subtext", label: "Subtext" }
    ]
  );
  function isApplyTo(v) {
    return v === "icon" || v === "icon+text" || v === "icon+text+pages";
  }
  __name(isApplyTo, "isApplyTo");
  function applyToToSidebarTargets(applyTo) {
    if (applyTo === "icon") return ["titleIcon"];
    if (applyTo === "icon+text+pages") return ["titleIcon", "title", "pageIcon", "pages"];
    return ["titleIcon", "title"];
  }
  __name(applyToToSidebarTargets, "applyToToSidebarTargets");
  function normalizeSidebarTargets(values) {
    if (!Array.isArray(values)) return [];
    const valid = new Set(SIDEBAR_TARGET_OPTIONS.map((o) => o.val));
    return Array.from(new Set(values.filter((v) => valid.has(v))));
  }
  __name(normalizeSidebarTargets, "normalizeSidebarTargets");
  function normalizeBreadcrumbTargets(values) {
    if (!Array.isArray(values)) return [];
    const valid = new Set(BREADCRUMB_TARGET_OPTIONS.map((o) => o.val));
    return Array.from(new Set(values.filter((v) => valid.has(v))));
  }
  __name(normalizeBreadcrumbTargets, "normalizeBreadcrumbTargets");
  function normalizeMenuTargets(values) {
    if (!Array.isArray(values)) return [];
    const valid = new Set(MENU_TARGET_OPTIONS.map((o) => o.val));
    const migrated = values.map((v) => v === "name" ? "subtext" : v);
    return Array.from(new Set(migrated.filter((v) => valid.has(v))));
  }
  __name(normalizeMenuTargets, "normalizeMenuTargets");
  function normalizeTailwindShade(v) {
    const n = Number(v);
    return TAILWIND_SHADES.includes(n) ? n : 500;
  }
  __name(normalizeTailwindShade, "normalizeTailwindShade");
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter?.count?.({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    /** @type {Record<string, ColorEntry>} */
    _colors = {};
    /** @type {GlobalSettings} */
    _settings = {
      defaultApplyTo: APPLY_TO_DEFAULT,
      defaultSidebarTargets: [...SIDEBAR_TARGET_DEFAULT],
      defaultBreadcrumbTargets: [...BREADCRUMB_TARGET_DEFAULT],
      defaultMenuTargets: [...MENU_TARGET_DEFAULT],
      defaultMenuNewTargets: [...MENU_NEW_TARGET_DEFAULT],
      titleVariation: { hueShift: 0, satDelta: 0, lightDelta: 0 },
      pagesVariation: { hueShift: 0, satDelta: 0, lightDelta: 0 },
      viewsVariation: { hueShift: 0, satDelta: 0, lightDelta: 0 },
      highlightedItemMode: "auto",
      highlightedTintShade: 500,
      highlightedTintInvert: false,
      customSwatches: []
    };
    /** @type {PluginCollectionAPI[]} */
    _collections = [];
    /** @type {string} */
    _collectionSearch = "";
    /** When true, collections marked by Sidebar Separators are omitted from the list. */
    _hideSeparators = true;
    /**
     * Active palette-preset preview, or null. `colors` maps guid→hex for the
     * included collections; reading it in _getRaw makes the preview show live in
     * both the sidebar tint and the panel swatches without committing anything.
     * @type {{ presetId: string, included: Set<string>, colors: Record<string,string> } | null}
     */
    _preview = null;
    /** Animated mode: live per-collection colors flowing through a palette. */
    /** true while the animation actually runs (live preview or confirmed) */
    _animRunning = false;
    /** @type {ReturnType<typeof setInterval> | null} */
    _animTimer = null;
    /** @type {number} continuous phase advanced each tick */
    _animPhase = 0;
    /** @type {Record<string,string> | null} guid→hex for the current animation frame */
    _animColors = null;
    /** @type {string[]} ordered target guids, cached so the tick stays cheap */
    _animTargets = [];
    /** Persists header how-to chevron across panel re-renders. */
    _headerHelperOpen = false;
    /** @type {string | null} guid whose tint-variation panel is open, or null */
    _tintGuid = null;
    /** @type {string | null} guid whose color picker is open, or null */
    _colorGuid = null;
    /** true when live color edits await a synced saveConfiguration commit */
    _colorEditsPending = false;
    /** @type {Record<'titleVariation' | 'pagesVariation' | 'viewsVariation', boolean>} */
    _globalTintOpen = { titleVariation: false, pagesVariation: false, viewsVariation: false };
    /** @type {HTMLElement | null} */
    _panelEl = null;
    /** @type {MutationObserver | null} */
    _sidebarObserver = null;
    /** @type {Map<HTMLElement, MutationObserver>} */
    _sidebarRootObservers = /* @__PURE__ */ new Map();
    /** re-entrancy guard for the synchronous in-observer annotate pass */
    _annotating = false;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _observerRetryTimer = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _collectionsRetryTimer = null;
    /** @type {ResizeObserver | null} */
    _panelResizeObserver = null;
    /** @type {MutationObserver | null} */
    _appearanceObserver = null;
    /** @type {boolean | null} */
    _lastDark = null;
    /** @type {number | null} */
    _appearanceRaf = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _configSaveTimer = null;
    _configSaveInFlight = false;
    _configSaveQueued = false;
    /** true when edits await a synced saveConfiguration (flushed on panel close) */
    _configDirty = false;
    /** @type {string | null} panel.closed event handler id */
    _panelClosedHandler = null;
    /** @type {string[]} collection.* event handler ids (refetch triggers) */
    _collectionEventIds = [];
    onLoad() {
      pingInstall("collection-colors");
      pingActive("collection-colors");
      void syncPluginVersionOnLoad(this, PLUGIN_VERSION);
      this._disabled = readKillSwitch(this);
      installInstantTooltip();
      this._colors = this._loadColors();
      this._settings = this._loadSettings();
      if (this._hasLocalObject(this._colorsKey()) || this._hasLocalObject(this._settingsKey())) {
        this._configDirty = true;
        this._flushConfig();
      }
      this._collections = [];
      this._tintGuid = null;
      this._colorGuid = null;
      this._panelEl = null;
      this._injectManagedCSS("plg-collection-colors-panel-css", PANEL_CSS);
      this._injectStaticCSS();
      this.ui.registerCustomPanelType(PANEL_TYPE, (panel) => {
        try {
          panel.setTitle("Configure Collection Colors");
        } catch {
        }
        const panelEl = panel.getElement();
        if (!panelEl) return;
        this._panelEl = panelEl;
        this._renderPanel();
      });
      this._panelClosedHandler = this.events.on("panel.closed", () => this._flushConfig());
      this.ui.addCommandPaletteCommand({
        label: "Plugin: Collection Colors",
        icon: "palette",
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      });
      this._loadCollections();
      this._collectionEventIds = ["collection.created", "collection.updated"].map((ev) => this.events.on(
        /** @type {any} */
        ev,
        () => this._loadCollections()
      ));
      this._watchAppearance();
      try {
        const staleRoot = document.querySelector(".plg-collection-colors-panel");
        if (staleRoot && staleRoot.parentElement) {
          this._panelEl = staleRoot.parentElement;
          void this._renderPanel();
        }
      } catch {
      }
      if (this._disabled) return;
      this._ensureTintStyle();
      this._writeTintStyle();
      this._setupSidebarObserver();
      for (const ev of ["panel.navigated", "panel.focused"]) {
        this._collectionEventIds.push(this.events.on(
          /** @type {any} */
          ev,
          () => {
            if (this._annotating) return;
            this._annotating = true;
            try {
              this._annotateSidebar();
            } finally {
              this._annotating = false;
            }
          }
        ));
      }
      if (this._settings.animate) {
        this._animRunning = true;
        this._startAnimation();
      }
    }
    onUnload() {
      this._stopAnimation();
      if (this._sidebarObserver) {
        this._sidebarObserver.disconnect();
        this._sidebarObserver = null;
      }
      for (const observer of this._sidebarRootObservers.values()) {
        try {
          observer.disconnect();
        } catch {
        }
      }
      this._sidebarRootObservers.clear();
      if (this._observerRetryTimer) {
        clearTimeout(this._observerRetryTimer);
        this._observerRetryTimer = null;
      }
      if (this._collectionsRetryTimer) {
        clearTimeout(this._collectionsRetryTimer);
        this._collectionsRetryTimer = null;
      }
      if (this._configSaveTimer) {
        clearTimeout(this._configSaveTimer);
        this._configSaveTimer = null;
      }
      if (this._panelClosedHandler) {
        this.events.off(this._panelClosedHandler);
        this._panelClosedHandler = null;
      }
      for (const id of this._collectionEventIds) {
        try {
          this.events.off(id);
        } catch {
        }
      }
      this._collectionEventIds = [];
      if (this._panelResizeObserver) {
        this._panelResizeObserver.disconnect();
        this._panelResizeObserver = null;
      }
      if (this._appearanceObserver) {
        this._appearanceObserver.disconnect();
        this._appearanceObserver = null;
      }
      if (this._appearanceRaf) {
        cancelAnimationFrame(this._appearanceRaf);
        this._appearanceRaf = null;
      }
      document.querySelectorAll("[data-coll-parent]").forEach((el3) => el3.removeAttribute("data-coll-parent"));
      document.querySelectorAll(`[${COLL_GUID_ATTR}]`).forEach((el3) => el3.removeAttribute(COLL_GUID_ATTR));
      document.querySelectorAll(`[${SIDEBAR_ROOT_ATTR}]`).forEach((el3) => el3.removeAttribute(SIDEBAR_ROOT_ATTR));
      document.querySelectorAll(`[${ACTIVE_ATTR}]`).forEach((el3) => el3.removeAttribute(ACTIVE_ATTR));
      const tint = document.getElementById(TINT_STYLE_ID);
      if (tint) tint.remove();
      document.getElementById("plg-collection-colors-panel-css")?.remove();
      document.getElementById("plg-collection-colors-static-css")?.remove();
      this._panelEl = null;
    }
    // ─── Sidebar runtime annotation ─────────────────────────────────────────
    // Records have flat data-guids with no prefix tying them to their parent
    // collection (only journal records use the S-<COLL>-P... format). To tint
    // children of any collection, we walk forward from each .sidebar-item-collection
    // to the next collection/heading and tag intermediate .sidebar-item children
    // with data-coll-parent="<COLL-GUID>". The tint CSS targets that attribute.
    _setupSidebarObserver() {
      const tryAttach = /* @__PURE__ */ __name(() => {
        this._observerRetryTimer = null;
        if (!document.body) {
          this._observerRetryTimer = setTimeout(tryAttach, 500);
          return;
        }
        if (this._sidebarObserver) this._sidebarObserver.disconnect();
        this._sidebarObserver = new MutationObserver((mutations) => this._onSidebarMutations(mutations));
        this._sidebarObserver.observe(document.body, { childList: true, subtree: true });
        this._discoverSidebarRoots();
        this._annotateSidebar();
      }, "tryAttach");
      tryAttach();
    }
    /**
     * Re-stamp annotations SYNCHRONOUSLY inside the observer callback.
     * MutationObserver callbacks are microtasks that drain before the next
     * paint, so re-annotating here lands in the same frame Thymer rendered the
     * new DOM — colors never visibly drop. Any deferral (setTimeout / rIC)
     * paints an un-annotated flash frame first; that WAS the zoom-flash bug
     * (same fix as build-title-from-properties f022a26).
     * @param {MutationRecord[]} mutations
     */
    _onSidebarMutations(mutations) {
      if (this._annotating) return;
      if (!this._mutationsRelevant(mutations)) return;
      this._annotating = true;
      try {
        this._annotateSidebar();
        this._annotateAutocomplete();
      } finally {
        this._annotating = false;
      }
    }
    /**
     * Cheap scope filter so editor typing doesn't pay for annotate passes:
     * a batch matters only if it touches a sidebar or the panel menubar
     * (where our color-bearing attributes live).
     * @param {MutationRecord[]} mutations
     */
    _mutationsRelevant(mutations) {
      const inScope = /* @__PURE__ */ __name((node) => {
        const elt = node instanceof HTMLElement ? node : node.parentElement;
        if (!elt) return false;
        if (elt.closest(`[${SIDEBAR_ROOT_ATTR}], .sidebar, .panel-menubar, .autocomplete`)) return true;
        return !!(elt.querySelector && elt.querySelector(".sidebar-item-collection, .panel-menubar-buttons, .autocomplete--option"));
      }, "inScope");
      for (const m of mutations) {
        if (inScope(m.target)) return true;
        for (const added of m.addedNodes) {
          if (added.nodeType === Node.ELEMENT_NODE && inScope(added)) return true;
        }
      }
      return false;
    }
    _discoverSidebarRoots() {
      const roots = /* @__PURE__ */ new Set();
      document.querySelectorAll(".sidebar-item-collection[data-guid]").forEach((row) => {
        if (!(row instanceof HTMLElement)) return;
        const root = row.closest(".sidebar") || row.parentElement?.closest('[class*="sidebar"]') || row.parentElement;
        if (root instanceof HTMLElement) roots.add(root);
      });
      for (const [root, observer] of Array.from(this._sidebarRootObservers.entries())) {
        if (!root.isConnected || !roots.has(root)) {
          try {
            observer.disconnect();
          } catch {
          }
          root.removeAttribute(SIDEBAR_ROOT_ATTR);
          this._sidebarRootObservers.delete(root);
        }
      }
      for (const root of roots) {
        root.setAttribute(SIDEBAR_ROOT_ATTR, "1");
        if (this._sidebarRootObservers.has(root)) continue;
        const observer = new MutationObserver((mutations) => this._onSidebarMutations(mutations));
        observer.observe(root, { childList: true, subtree: true });
        this._sidebarRootObservers.set(root, observer);
      }
    }
    _annotateSidebar() {
      if (this._disabled) return;
      this._discoverSidebarRoots();
      const roots = Array.from(this._sidebarRootObservers.keys()).filter((root) => root.isConnected);
      if (!roots.length) {
        this._annotateBreadcrumbs();
        return;
      }
      for (const sidebar of roots) {
        sidebar.querySelectorAll("[data-coll-parent]").forEach((el3) => el3.removeAttribute("data-coll-parent"));
        sidebar.querySelectorAll(`[${ACTIVE_ATTR}]`).forEach((el3) => el3.removeAttribute(ACTIVE_ATTR));
        const collections = sidebar.querySelectorAll(".sidebar-item-collection");
        for (const coll of collections) {
          if (!(coll instanceof HTMLElement)) continue;
          const guid = coll.getAttribute("data-guid");
          if (!guid) continue;
          coll.setAttribute(COLL_GUID_ATTR, guid);
          let cur = coll.nextElementSibling;
          while (cur instanceof HTMLElement) {
            if (cur.classList.contains("sidebar-item-collection") || cur.classList.contains("sidebar-item-heading") || cur.classList.contains("sidebar-item-divider") || cur.classList.contains("sidebar-item-collsheading")) break;
            if (cur.classList.contains("sidebar-item")) {
              cur.setAttribute("data-coll-parent", guid);
            }
            cur = cur.nextElementSibling;
          }
        }
        const activeGuid = this._activePanelRecordGuid();
        if (activeGuid) {
          const esc = /* @__PURE__ */ __name((s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"'), "esc");
          const row = sidebar.querySelector(`.sidebar-item[data-guid="${esc(activeGuid)}"]`);
          if (row instanceof HTMLElement) {
            row.setAttribute(ACTIVE_ATTR, "1");
            const collapsed = sidebar.classList.contains("sidebar-collapsed");
            const collParent = row.getAttribute("data-coll-parent");
            if (collapsed && collParent) {
              const coll = sidebar.querySelector(`.sidebar-item-collection[data-guid="${esc(collParent)}"]`);
              if (coll instanceof HTMLElement) coll.setAttribute(ACTIVE_ATTR, "1");
            }
          }
        }
      }
      this._annotateBreadcrumbs();
    }
    /** @returns {string | null} */
    _activePanelRecordGuid() {
      try {
        const panel = this.ui.getActivePanel();
        const rec = panel && panel.getActiveRecord ? panel.getActiveRecord() : null;
        return rec && rec.guid ? rec.guid : null;
      } catch {
        return null;
      }
    }
    /**
     * Load the workspace collections into the cache. getAllCollections() can
     * resolve empty right after a fresh plugin load (the data layer may not have
     * synced yet), so retry a bounded number of times on an empty/failed result.
     * Re-render an open panel whenever the cache is (re)populated so a panel that
     * opened before data was ready fills in once it arrives.
     * @param {number} [attempt]
     */
    _loadCollections(attempt = 0) {
      if (this._collectionsRetryTimer) {
        clearTimeout(this._collectionsRetryTimer);
        this._collectionsRetryTimer = null;
      }
      const retry = /* @__PURE__ */ __name(() => {
        const delay = Math.min(3e3, 400 + attempt * 200);
        if (attempt > 0 && attempt % 10 === 0) console.warn(`[collection-colors] getAllCollections still empty after ${attempt} attempts`);
        this._collectionsRetryTimer = setTimeout(() => this._loadCollections(attempt + 1), delay);
      }, "retry");
      this.data.getAllCollections().then((list) => {
        const arr = Array.isArray(list) ? list : [];
        if (!arr.length) {
          retry();
          return;
        }
        const prevKey = this._collections.map((c) => c.getGuid()).join(",");
        const nextKey = arr.map((c) => c.getGuid()).join(",");
        this._collections = arr;
        this._annotateBreadcrumbs();
        if (this._animRunning) {
          this._refreshAnimTargets();
          if (!this._animTimer) this._startAnimation();
        }
        if (this._panelEl && prevKey !== nextKey) this._renderPanel();
      }).catch(() => retry());
    }
    /**
     * Tag `@`-menu rows that point at a collection, so the per-collection CSS can
     * tint them.
     *
     * A result row carries its collection as plain text in a trailing
     * `.autocomplete--kbd` span (e.g. "Notes", "Recall.ai Meetings"). That same
     * span is ALSO used for genuine keyboard hints — "1." on Numbered List, ">"
     * on Line Quote — so there is no class that distinguishes the two. The
     * name→guid lookup IS the disambiguator: a hint like "1." never matches a
     * collection name, so it simply falls through untagged.
     *
     * Consequence worth knowing: collections whose names collide (this workspace
     * has two named with a zero-width space) are ambiguous by name and are left
     * untagged rather than tinted as the wrong one.
     */
    _annotateAutocomplete() {
      const rows = document.querySelectorAll(".autocomplete--option");
      if (!rows.length) return;
      const byName = this._collections.length ? new Map(this._collections.map((c) => [String(c.getName && c.getName()).trim().toLowerCase(), c.getGuid()])) : null;
      const nameCount = /* @__PURE__ */ new Map();
      if (byName) {
        for (const c of this._collections) {
          const n = String(c.getName && c.getName()).trim().toLowerCase();
          nameCount.set(n, (nameCount.get(n) || 0) + 1);
        }
      }
      rows.forEach((row) => {
        if (!(row instanceof HTMLElement)) return;
        row.removeAttribute(COLL_GUID_ATTR);
        row.removeAttribute(MENU_NEW_ATTR);
        if (!byName) return;
        const kbd = row.querySelector(".autocomplete--option-right .autocomplete--kbd");
        if (!kbd) return;
        const name = String(kbd.textContent || "").trim().toLowerCase();
        if (!name || (nameCount.get(name) || 0) !== 1) return;
        const guid = byName.get(name);
        if (!guid) return;
        row.setAttribute(COLL_GUID_ATTR, guid);
        const iconSlot = row.querySelector(".autocomplete--option-icon");
        const isCreate = !!iconSlot && Array.from(iconSlot.children).some((child) => !child.classList.contains("ti"));
        if (isCreate) row.setAttribute(MENU_NEW_ATTR, "1");
      });
    }
    _annotateBreadcrumbs() {
      if (!this._collections.length) return;
      const byName = new Map(this._collections.map((c) => [String(c.getName && c.getName()).trim().toLowerCase(), c.getGuid()]));
      document.querySelectorAll(".panel-menubar-buttons").forEach((group) => {
        group.removeAttribute(COLL_GUID_ATTR);
        const coll = group.querySelector(".button-group-collection-name");
        if (!(coll instanceof HTMLElement)) return;
        coll.removeAttribute(COLL_GUID_ATTR);
        const text = (coll.childNodes.length ? Array.from(coll.childNodes).filter((n) => n.nodeType === Node.TEXT_NODE).map((n) => n.textContent || "").join(" ") : coll.textContent || "").trim().toLowerCase();
        const guid = byName.get(text);
        if (!guid) return;
        coll.setAttribute(COLL_GUID_ATTR, guid);
        if (group instanceof HTMLElement) group.setAttribute(COLL_GUID_ATTR, guid);
      });
    }
    async _openPanel() {
      const panel = await this.ui.createPanel();
      if (panel) panel.navigateToCustomType(PANEL_TYPE);
    }
    // ─── Storage ────────────────────────────────────────────────────────────
    _colorsKey() {
      return `collection-colors/${this.getWorkspaceGuid()}/colors`;
    }
    _settingsKey() {
      return `collection-colors/${this.getWorkspaceGuid()}/settings`;
    }
    /** @param {string} key @returns {boolean} */
    _hasLocalObject(key) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return false;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" && Object.keys(parsed).length > 0;
      } catch {
        return false;
      }
    }
    /** @param {string} key @returns {Record<string, any>} */
    _loadLocalObject(key) {
      try {
        const parsed = JSON.parse(localStorage.getItem(key) || "{}");
        return parsed && typeof parsed === "object" ? parsed : {};
      } catch {
        return {};
      }
    }
    /** @returns {Record<string, any>} */
    _customConfig() {
      try {
        const conf = this.getConfiguration && this.getConfiguration();
        const custom = conf && conf.custom;
        return custom && typeof custom === "object" ? custom : {};
      } catch {
        return {};
      }
    }
    /** @returns {Record<string, ColorEntry>} */
    _loadColors() {
      return this._normalizeColors({
        ...this._customConfig().colors || {},
        ...this._loadLocalObject(this._colorsKey())
      });
    }
    /** @param {any} raw @returns {Record<string, ColorEntry>} */
    _normalizeColors(raw) {
      if (!raw || typeof raw !== "object") return {};
      const out = {};
      for (const [guid, entry] of Object.entries(raw)) {
        if (!entry || typeof entry !== "object") continue;
        const src = (
          /** @type {any} */
          entry
        );
        const color = typeof src.color === "string" && src.color ? src.color : null;
        if (!color) continue;
        const next = (
          /** @type {ColorEntry} */
          { color }
        );
        if (isApplyTo(src.applyTo)) next.applyTo = src.applyTo;
        if (Array.isArray(src.sidebarTargets)) next.sidebarTargets = normalizeSidebarTargets(src.sidebarTargets);
        if (Array.isArray(src.breadcrumbTargets)) next.breadcrumbTargets = normalizeBreadcrumbTargets(src.breadcrumbTargets);
        if (src.titleVariation) next.titleVariation = this._parseVariationDelta(src.titleVariation);
        if (src.pagesVariation) next.pagesVariation = this._parseVariationDelta(src.pagesVariation);
        out[guid] = next;
      }
      return out;
    }
    _saveColors() {
      localStorage.setItem(this._colorsKey(), JSON.stringify(this._colors));
      this._configDirty = true;
      this._broadcastColorsChanged();
    }
    /**
     * Local-only persistence for live color edits — writes the localStorage
     * cache and marks the config dirty, but does NOT call saveConfiguration
     * (which reloads the plugin). The synced save is deferred to panel close.
     */
    _saveColorsLocal() {
      localStorage.setItem(this._colorsKey(), JSON.stringify(this._colors));
      this._configDirty = true;
      this._broadcastColorsChanged();
    }
    /**
     * Tell same-page consumers (Collection Icons) that the color map changed.
     *
     * They can't learn it any other way: the `storage` event never fires in the tab that wrote
     * the value, and our synced saveConfiguration is deliberately deferred to panel close (it
     * forces a plugin reload that resets editor scroll). Without this, a consumer has to poll.
     * Fire-and-forget — nobody listening is the normal case.
     */
    _broadcastColorsChanged() {
      try {
        window.dispatchEvent(new CustomEvent(COLORS_CHANGED_EVENT, {
          detail: { key: this._colorsKey() }
        }));
      } catch {
      }
    }
    /**
     * Close out a live color-picker session. Edits are already in localStorage
     * and marked dirty; the synced saveConfiguration (and its reload) is deferred
     * to panel close, so this must NOT trigger a save mid-session.
     */
    _flushColorEdits() {
      this._colorEditsPending = false;
    }
    /**
     * Push pending edits to the synced config. This calls saveConfiguration,
     * which reloads the plugin, so it runs only when the user is done editing
     * (panel closed / plugin load) — never mid-interaction.
     */
    _flushConfig() {
      if (!this._configDirty) return;
      this._configDirty = false;
      void this._saveCustomConfigNow();
    }
    /** @returns {GlobalSettings} */
    _loadSettings() {
      return this._normalizeSettings({
        ...this._customConfig().settings || {},
        ...this._loadLocalObject(this._settingsKey())
      });
    }
    /** @param {any} raw @returns {GlobalSettings} */
    _normalizeSettings(raw) {
      const fallback = (
        /** @type {GlobalSettings} */
        {
          defaultApplyTo: APPLY_TO_DEFAULT,
          defaultSidebarTargets: [...SIDEBAR_TARGET_DEFAULT],
          defaultBreadcrumbTargets: [...BREADCRUMB_TARGET_DEFAULT],
          defaultMenuTargets: [...MENU_TARGET_DEFAULT],
          titleVariation: { hueShift: 0, satDelta: 0, lightDelta: 0 },
          pagesVariation: { hueShift: 0, satDelta: 0, lightDelta: 0 },
          viewsVariation: { hueShift: 0, satDelta: 0, lightDelta: 0 },
          highlightedItemMode: "auto",
          highlightedTintShade: 500,
          highlightedTintInvert: false
        }
      );
      try {
        raw = raw && typeof raw === "object" ? raw : {};
        let titleVariation = this._parseVariationDelta(raw.titleVariation);
        let pagesVariation = this._parseVariationDelta(raw.pagesVariation);
        let viewsVariation = this._parseVariationDelta(raw.viewsVariation);
        if (raw.pageVariation && !raw.titleVariation && !raw.pagesVariation) {
          const old = this._parseVariationDelta(raw.pageVariation);
          const target = raw.pageVariation.target;
          if (target === "title") titleVariation = old;
          else if (target === "both") {
            titleVariation = old;
            pagesVariation = old;
          } else pagesVariation = old;
        }
        let breadcrumbTargets = normalizeBreadcrumbTargets(raw.defaultBreadcrumbTargets);
        const bgTargetMigrated = raw.bgTargetMigrated === true;
        if (!bgTargetMigrated && breadcrumbTargets.length > 0 && !breadcrumbTargets.includes("bg")) {
          breadcrumbTargets = [...breadcrumbTargets, "bg"];
        }
        return {
          defaultApplyTo: isApplyTo(raw.defaultApplyTo) ? raw.defaultApplyTo : APPLY_TO_DEFAULT,
          defaultSidebarTargets: Array.isArray(raw.defaultSidebarTargets) ? normalizeSidebarTargets(raw.defaultSidebarTargets) : applyToToSidebarTargets(isApplyTo(raw.defaultApplyTo) ? raw.defaultApplyTo : APPLY_TO_DEFAULT),
          defaultBreadcrumbTargets: breadcrumbTargets,
          bgTargetMigrated: true,
          // The `@`-menu row was originally icon + name; `text` (the option
          // label) only became addressable when the row was split into
          // text/subtext. Configs written before that split never had the
          // chance to opt into `text`, so seed them with the full default
          // once instead of leaving the label stubbornly untinted.
          defaultMenuTargets: Array.isArray(raw.defaultMenuTargets) && raw.menuSplitMigrated === true ? normalizeMenuTargets(raw.defaultMenuTargets) : [...MENU_TARGET_DEFAULT],
          menuSplitMigrated: true,
          defaultMenuNewTargets: Array.isArray(raw.defaultMenuNewTargets) ? normalizeMenuTargets(raw.defaultMenuNewTargets) : [...MENU_NEW_TARGET_DEFAULT],
          titleVariation,
          pagesVariation,
          viewsVariation,
          highlightedItemMode: migrateHighlightedItemMode(raw),
          highlightedTintShade: migrateHighlightedTintShade(raw),
          highlightedTintInvert: migrateHighlightedTintInvert(raw),
          customSwatches: Array.isArray(raw.customSwatches) ? raw.customSwatches.filter(isHex2).slice(0, 44) : [],
          animate: raw.animate === true,
          animateSpeed: clampNum(raw.animateSpeed, 0.01, 0.5, 0.06),
          animatePalette: typeof raw.animatePalette === "string" && PRESETS.some((p) => p.id === raw.animatePalette) ? raw.animatePalette : "rainbow",
          reverse: raw.reverse === true
        };
      } catch {
        return fallback;
      }
    }
    /** @param {any} src @returns {VariationDelta} */
    _parseVariationDelta(src) {
      return {
        hueShift: clampNum(src && src.hueShift, -180, 180, 0),
        satDelta: clampNum(src && src.satDelta, -100, 100, 0),
        lightDelta: clampNum(src && src.lightDelta, -100, 100, 0),
        mode: src && (src.mode === "tailwind" || src.mode === "hsl") ? src.mode : void 0,
        tailwindShade: normalizeTailwindShade(src && src.tailwindShade)
      };
    }
    _saveSettings() {
      localStorage.setItem(this._settingsKey(), JSON.stringify(this._settings));
      this._configDirty = true;
    }
    _scheduleConfigSave() {
      if (this._configSaveTimer) clearTimeout(this._configSaveTimer);
      this._configSaveTimer = setTimeout(() => {
        this._configSaveTimer = null;
        void this._saveCustomConfigNow();
      }, 900);
    }
    async _saveCustomConfigNow() {
      if (this._configSaveInFlight) {
        this._configSaveQueued = true;
        return;
      }
      this._configSaveInFlight = true;
      try {
        const plugin = await this._ownGlobalPlugin();
        if (!plugin || !plugin.saveConfiguration) return;
        const conf = plugin.getConfiguration ? plugin.getConfiguration() : this.getConfiguration();
        const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const colors = this._normalizeColors(this._colors);
        const settings = this._normalizeSettings(this._settings);
        if (JSON.stringify(this._normalizeColors(custom.colors)) === JSON.stringify(colors) && JSON.stringify(this._normalizeSettings(custom.settings)) === JSON.stringify(settings)) return;
        await plugin.saveConfiguration(
          /** @type {any} */
          configWithPluginVersion(conf, {
            schemaVersion: 1,
            colors,
            settings
          }, PLUGIN_VERSION)
        );
      } catch {
      } finally {
        this._configSaveInFlight = false;
        if (this._configSaveQueued) {
          this._configSaveQueued = false;
          this._scheduleConfigSave();
        }
      }
    }
    async _ownGlobalPlugin() {
      try {
        const ownGuid = this.getGuid && this.getGuid();
        const plugins = await this.data.getAllGlobalPlugins();
        return plugins.find((p) => p && p.getGuid && p.getGuid() === ownGuid) || plugins.find((p) => p && p.getName && p.getName() === "Collection Colors") || null;
      } catch {
        return null;
      }
    }
    /** @param {string} guid */
    _getRaw(guid) {
      const e = this._colors[guid] || { color: null };
      const hasOwn = Object.prototype.hasOwnProperty;
      let liveColor;
      if (this._animColors && hasOwn.call(this._animColors, guid)) liveColor = this._animColors[guid];
      else if (this._preview && hasOwn.call(this._preview.colors, guid)) liveColor = this._preview.colors[guid];
      return {
        color: liveColor !== void 0 ? liveColor : typeof e.color === "string" ? e.color : null,
        applyToOverride: isApplyTo(e.applyTo) ? e.applyTo : void 0,
        sidebarTargetsOverride: Array.isArray(e.sidebarTargets) ? normalizeSidebarTargets(e.sidebarTargets) : void 0,
        breadcrumbTargetsOverride: Array.isArray(e.breadcrumbTargets) ? normalizeBreadcrumbTargets(e.breadcrumbTargets) : void 0,
        titleVariationOverride: e.titleVariation,
        pagesVariationOverride: e.pagesVariation
      };
    }
    /** @param {string} guid */
    _resolvedTitleVariation(guid) {
      return this._getRaw(guid).titleVariationOverride || this._settings.titleVariation;
    }
    /** @param {string} guid */
    _resolvedPagesVariation(guid) {
      return this._getRaw(guid).pagesVariationOverride || this._settings.pagesVariation;
    }
    /** @param {string} guid @param {'titleVariation' | 'pagesVariation'} key @param {Partial<VariationDelta>} patch */
    _setEntryVariation(guid, key, patch) {
      const e = this._colors[guid] || { color: null };
      const base = e[key] || this._settings[key];
      const next = { ...base, ...patch };
      this._colors[guid] = { ...e, [key]: next };
      this._saveColors();
      this._writeTintStyle();
      this._renderPanel();
    }
    /** @param {string} guid @param {'titleVariation' | 'pagesVariation'} key */
    _clearEntryVariation(guid, key) {
      const e = this._colors[guid];
      if (!e) return;
      const next = { ...e };
      delete next[key];
      this._colors[guid] = next;
      this._saveColors();
      this._writeTintStyle();
      this._renderPanel();
    }
    /** @param {string} guid */
    _getResolved(guid) {
      const raw = this._getRaw(guid);
      return {
        color: raw.color,
        applyTo: raw.applyToOverride ?? this._settings.defaultApplyTo,
        sidebarTargets: raw.sidebarTargetsOverride ?? (raw.applyToOverride ? applyToToSidebarTargets(raw.applyToOverride) : this._settings.defaultSidebarTargets),
        breadcrumbTargets: raw.breadcrumbTargetsOverride ?? this._settings.defaultBreadcrumbTargets,
        isOverride: raw.applyToOverride !== void 0
      };
    }
    /** @param {string} guid @param {string | null} color @param {boolean} [render] */
    _setColor(guid, color, render = true) {
      const raw = this._getRaw(guid);
      if (color === null && raw.applyToOverride === void 0) {
        delete this._colors[guid];
      } else {
        const next = { color };
        if (raw.applyToOverride !== void 0) next.applyTo = raw.applyToOverride;
        if (raw.sidebarTargetsOverride !== void 0) next.sidebarTargets = raw.sidebarTargetsOverride;
        if (raw.breadcrumbTargetsOverride !== void 0) next.breadcrumbTargets = raw.breadcrumbTargetsOverride;
        if (raw.titleVariationOverride !== void 0) next.titleVariation = raw.titleVariationOverride;
        if (raw.pagesVariationOverride !== void 0) next.pagesVariation = raw.pagesVariationOverride;
        this._colors[guid] = next;
      }
      if (render) this._saveColors();
      else {
        this._saveColorsLocal();
        this._colorEditsPending = true;
      }
      this._writeTintStyle();
      if (render) this._renderPanel();
      else this._refreshRowColor(guid, color);
    }
    /** @param {string} guid @param {ApplyTo | null} applyTo  null = clear override */
    _setApplyTo(guid, applyTo) {
      const raw = this._getRaw(guid);
      if (applyTo === null) {
        if (raw.color === null) delete this._colors[guid];
        else this._colors[guid] = { color: raw.color };
      } else {
        this._colors[guid] = { color: raw.color, applyTo };
      }
      this._saveColors();
      this._writeTintStyle();
      this._renderPanel();
    }
    /** @param {SidebarTarget[]} targets */
    _setGlobalSidebarTargets(targets) {
      this._settings = { ...this._settings, defaultSidebarTargets: targets };
      if (!targets.includes("pages") && !targets.includes("pageIcon")) {
        this._globalTintOpen.pagesVariation = false;
      }
      if (!targets.includes("title") && !targets.includes("titleIcon")) {
        this._globalTintOpen.titleVariation = false;
      }
      this._saveSettings();
      this._writeTintStyle();
      this._renderPanel();
    }
    /** @param {BreadcrumbTarget[]} targets */
    _setGlobalBreadcrumbTargets(targets) {
      this._settings = { ...this._settings, defaultBreadcrumbTargets: targets };
      if (!targets.includes("views")) {
        this._globalTintOpen.viewsVariation = false;
      }
      this._saveSettings();
      this._writeTintStyle();
      this._renderPanel();
    }
    /** @param {SidebarTarget} target */
    _toggleGlobalSidebarTarget(target) {
      const current = this._settings.defaultSidebarTargets;
      const next = current.includes(target) ? current.filter((t) => t !== target) : [...current, target];
      this._setGlobalSidebarTargets(next);
    }
    /** @param {MenuTarget[]} targets */
    _setGlobalMenuTargets(targets) {
      this._settings = { ...this._settings, defaultMenuTargets: targets };
      this._saveSettings();
      this._writeTintStyle();
      this._annotateAutocomplete();
      this._renderPanel();
    }
    /** @param {MenuTarget} target */
    _toggleGlobalMenuTarget(target) {
      const current = this._settings.defaultMenuTargets;
      const next = current.includes(target) ? current.filter((t) => t !== target) : [...current, target];
      this._setGlobalMenuTargets(next);
    }
    /** @param {MenuTarget[]} targets */
    _setGlobalMenuNewTargets(targets) {
      this._settings = { ...this._settings, defaultMenuNewTargets: targets };
      this._saveSettings();
      this._writeTintStyle();
      this._annotateAutocomplete();
      this._renderPanel();
    }
    /** @param {MenuTarget} target */
    _toggleGlobalMenuNewTarget(target) {
      const current = this._settings.defaultMenuNewTargets;
      const next = current.includes(target) ? current.filter((t) => t !== target) : [...current, target];
      this._setGlobalMenuNewTargets(next);
    }
    /** @param {BreadcrumbTarget} target */
    _toggleGlobalBreadcrumbTarget(target) {
      const current = this._settings.defaultBreadcrumbTargets;
      const next = current.includes(target) ? current.filter((t) => t !== target) : [...current, target];
      this._setGlobalBreadcrumbTargets(next);
    }
    /** @param {'titleVariation' | 'pagesVariation' | 'viewsVariation'} key @param {Partial<VariationDelta>} patch */
    _setVariation(key, patch) {
      const next = { ...this._settings[key], ...patch };
      this._settings = { ...this._settings, [key]: next };
      this._saveSettings();
      this._writeTintStyle();
      this._renderPanel();
    }
    /** @param {'titleVariation' | 'pagesVariation' | 'viewsVariation'} key */
    _resetVariation(key) {
      this._setVariation(key, { hueShift: 0, satDelta: 0, lightDelta: 0, mode: "hsl", tailwindShade: 500 });
    }
    // ─── Tint <style> ───────────────────────────────────────────────────────
    _ensureTintStyle() {
      if (document.getElementById(TINT_STYLE_ID)) return;
      const style = document.createElement("style");
      style.id = TINT_STYLE_ID;
      document.head.appendChild(style);
    }
    _writeTintStyle() {
      if (this._disabled) return;
      this._ensureTintStyle();
      const node = document.getElementById(TINT_STYLE_ID);
      if (node) node.textContent = this._buildTintCSS();
    }
    _buildTintCSS() {
      const rules = [];
      const stateForeground = [];
      const cssEscape2 = /* @__PURE__ */ __name((s) => s.replace(/[\\"]/g, "\\$&"), "cssEscape");
      const guids = new Set(Object.keys(this._colors));
      if (this._preview) for (const g of Object.keys(this._preview.colors)) guids.add(g);
      if (this._animColors) for (const g of Object.keys(this._animColors)) guids.add(g);
      for (const guid of guids) {
        const safeGuid = cssEscape2(guid);
        const { color: colorRaw, sidebarTargets, breadcrumbTargets } = this._getResolved(guid);
        if (!colorRaw) continue;
        const color = this._resolveColorValue(colorRaw);
        if (!color) continue;
        const menuTargets = this._settings.defaultMenuTargets || [];
        const menuNewTargets = this._settings.defaultMenuNewTargets || [];
        const fromAnim = !!(this._animColors && Object.prototype.hasOwnProperty.call(this._animColors, guid));
        const isRamp = fromAnim || typeof colorRaw === "string" && colorRaw.startsWith("twflip:");
        const rampSafe = /* @__PURE__ */ __name((v) => isRamp && v && v.mode === "tailwind" ? { ...v, mode: void 0 } : v, "rampSafe");
        const titleVar = rampSafe(this._resolvedTitleVariation(guid));
        const pagesVar = rampSafe(this._resolvedPagesVariation(guid));
        const viewsVar = rampSafe(this._settings.viewsVariation);
        const titleColor = applyVariation(color, titleVar);
        const pagesColor = applyVariation(color, pagesVar);
        const viewsColor = applyVariation(color, viewsVar);
        const collRow = `[${SIDEBAR_ROOT_ATTR}="1"] [${COLL_GUID_ATTR}="${safeGuid}"], .sidebar-item-collection[data-guid="${safeGuid}"]`;
        const anyInColl = `[${SIDEBAR_ROOT_ATTR}="1"] .sidebar-item[data-coll-parent="${safeGuid}"], .sidebar-item[data-coll-parent="${safeGuid}"]`;
        const crumbCollection = `.panel-menubar-buttons [${COLL_GUID_ATTR}="${safeGuid}"]`;
        const crumbGroup = `.panel-menubar-buttons[${COLL_GUID_ATTR}="${safeGuid}"]`;
        if (sidebarTargets.includes("titleIcon")) {
          rules.push(
            `${collRow} .ti, ${collRow} svg {`,
            `  color: ${titleColor} !important;`,
            `  fill: ${titleColor} !important;`,
            `}`
          );
        }
        if (sidebarTargets.includes("title")) {
          rules.push(`${collRow}, ${collRow} .sidebar-item-title, ${collRow} .sidebar-item-name, ${collRow} .sidebar-item-text { color: ${titleColor} !important; }`);
        }
        if (sidebarTargets.includes("pages")) {
          rules.push(`${anyInColl} { color: ${pagesColor} !important; }`);
        }
        if (sidebarTargets.includes("pageIcon")) {
          rules.push(
            `${anyInColl} .ti, ${anyInColl} svg {`,
            `  color: ${pagesColor} !important;`,
            `  fill: ${pagesColor} !important;`,
            `}`
          );
        }
        const highlightMode = this._settings.highlightedItemMode;
        if (highlightMode !== "none") {
          const titleFg = this._resolveRowStateColor(titleColor, highlightMode, this._settings.highlightedTintShade, this._settings.highlightedTintInvert);
          const pagesFg = this._resolveRowStateColor(pagesColor, highlightMode, this._settings.highlightedTintShade, this._settings.highlightedTintInvert);
          const highlightedCollRow = withHighlightedRowGate(collRow);
          const highlightedInColl = withHighlightedRowGate(anyInColl);
          if (sidebarTargets.length > 0) {
            stateForeground.push({ priority: 1, sel: highlightedCollRow, fg: titleFg });
          }
          if (sidebarTargets.includes("pages") || sidebarTargets.includes("pageIcon") || sidebarTargets.includes("title") || sidebarTargets.includes("titleIcon")) {
            const pageFg = sidebarTargets.includes("pages") || sidebarTargets.includes("pageIcon") ? pagesFg : titleFg;
            stateForeground.push({ priority: 1, sel: highlightedInColl, fg: pageFg });
          }
        }
        if (breadcrumbTargets.includes("bg")) {
          const chip = `color-mix(in srgb, ${color} 14%, var(--color-bg-700, #0f1318))`;
          rules.push(
            `${crumbGroup} { background-color: ${chip} !important; }`,
            `${crumbGroup} > button:not(:hover) { background-color: ${chip} !important; }`,
            `${crumbCollection} { background-color: transparent !important; }`
          );
        }
        if (breadcrumbTargets.includes("title")) {
          rules.push(`${crumbCollection} { color: ${color} !important; }`);
          if (!breadcrumbTargets.includes("icon")) {
            rules.push(
              `${crumbCollection} > .ti:not(.ti-settings) {`,
              `  color: var(--text-default, currentColor) !important;`,
              `  fill: currentColor !important;`,
              `}`
            );
          }
        }
        if (breadcrumbTargets.includes("icon")) {
          rules.push(
            `${crumbCollection} > .ti:not(.ti-settings) {`,
            `  color: ${color} !important;`,
            `}`
          );
        }
        if (breadcrumbTargets.includes("slash")) rules.push(`${crumbCollection} .id--sep .hover-switch-off { color: ${color} !important; }`);
        if (breadcrumbTargets.includes("views")) rules.push(`${crumbGroup} .view-button { color: ${viewsColor} !important; }`);
        const rowBase = `.autocomplete .autocomplete--option[${COLL_GUID_ATTR}="${safeGuid}"]`;
        const menuRules = /* @__PURE__ */ __name((targets, row) => {
          if (targets.includes("icon")) {
            rules.push(`${row} .autocomplete--option-icon .ti { color: ${color} !important; }`);
          }
          if (targets.includes("text")) {
            rules.push(
              `${row} .autocomplete--option-label,`,
              `${row} .autocomplete--option-label *,`,
              `${row} .autocomplete--option-icon > span:not(.ti) { color: ${color} !important; }`
            );
          }
          if (targets.includes("subtext")) {
            rules.push(`${row} .autocomplete--option-right .autocomplete--kbd { color: ${color} !important; }`);
          }
        }, "menuRules");
        if (menuTargets.length > 0) menuRules(menuTargets, `${rowBase}:not([${MENU_NEW_ATTR}])`);
        if (menuNewTargets.length > 0) menuRules(menuNewTargets, `${rowBase}[${MENU_NEW_ATTR}]`);
      }
      stateForeground.sort((a, b) => a.priority - b.priority);
      for (const { sel, fg } of stateForeground) appendStateForeground(rules, sel, fg);
      return rules.join("\n");
    }
    // ─── Panel render ───────────────────────────────────────────────────────
    /**
     * Neutralise centering on the panel host and its ancestors WITHOUT touching display,
     * width, or overflow.
     * @param {HTMLElement} el
     */
    _forceLeftAlignSafe(el3) {
      try {
        el3.style.setProperty("text-align", "left", "important");
        el3.style.setProperty("margin-left", "0", "important");
        el3.style.setProperty("margin-right", "auto", "important");
        let p = el3.parentElement;
        for (let i = 0; i < 10 && p && p !== document.body; i++) {
          const cs = getComputedStyle(p);
          if (cs.textAlign === "center") {
            p.style.setProperty("text-align", "left", "important");
          }
          if (cs.display.includes("flex")) {
            if (cs.justifyContent === "center" || cs.justifyContent === "space-around" || cs.justifyContent === "space-evenly") {
              p.style.setProperty("justify-content", "flex-start", "important");
            }
            if (cs.alignItems === "center") {
              p.style.setProperty("align-items", "stretch", "important");
            }
          }
          if (cs.display.includes("grid")) {
            if (cs.justifyItems === "center") p.style.setProperty("justify-items", "start", "important");
            if (cs.alignItems === "center") p.style.setProperty("align-items", "start", "important");
          }
          p = p.parentElement;
        }
      } catch {
      }
    }
    async _renderPanel() {
      if (!this._panelEl) return;
      const scrollState = [];
      for (let node = (
        /** @type {HTMLElement | null} */
        this._panelEl
      ); node; node = node.parentElement) {
        if (node.scrollTop > 0) scrollState.push([node, node.scrollTop]);
        if (node === document.body) break;
      }
      const restoreScroll = /* @__PURE__ */ __name(() => {
        for (const [node, top] of scrollState) node.scrollTop = top;
      }, "restoreScroll");
      this._panelEl.classList.add(ROOT_CLASS);
      this._forceLeftAlignSafe(this._panelEl);
      if (!this._collections.length) {
        try {
          const list = await this.data.getAllCollections();
          this._collections = Array.isArray(list) ? list : [];
        } catch {
          this._collections = [];
        }
      }
      this._panelEl.textContent = "";
      const root = el2("div", `tps-panel ${ROOT_CLASS}__panel-root`);
      root.appendChild(this._renderHeader());
      root.appendChild(this._renderApplyToSection());
      root.appendChild(this._renderList());
      this._panelEl.appendChild(root);
      restoreScroll();
      try {
        requestAnimationFrame(restoreScroll);
      } catch {
      }
    }
    _renderHeader() {
      const conf = typeof this.getConfiguration === "function" ? this.getConfiguration() || {} : {};
      return pluginHeaderFromConfig(conf, {
        version: PLUGIN_VERSION,
        helperOpen: this._headerHelperOpen,
        onHelperToggle: /* @__PURE__ */ __name((open) => {
          this._headerHelperOpen = open;
        }, "onHelperToggle"),
        killSwitch: {
          on: !this._disabled,
          onToggle: /* @__PURE__ */ __name((nextOn) => {
            if (this._configSaveTimer) {
              clearTimeout(this._configSaveTimer);
              this._configSaveTimer = null;
            }
            this._configDirty = false;
            void setPluginDisabled(this, !nextOn, PLUGIN_VERSION, {
              schemaVersion: 1,
              colors: this._normalizeColors(this._colors),
              settings: this._normalizeSettings(this._settings)
            });
          }, "onToggle")
        },
        feedback: { data: this.data }
      });
    }
    /** @param {() => HTMLElement} renderBody */
    _staticSection(renderBody) {
      const wrap = el2("section", "tps-section");
      const body = el2("div", "tps-section-body");
      body.appendChild(renderBody());
      wrap.appendChild(body);
      return wrap;
    }
    _renderApplyToSection() {
      return this._staticSection(() => {
        const body = el2("div", `${ROOT_CLASS}__apply-body`);
        const titleTintDisabled = !this._settings.defaultSidebarTargets.includes("title") && !this._settings.defaultSidebarTargets.includes("titleIcon");
        const pageTintDisabled = !this._settings.defaultSidebarTargets.includes("pages") && !this._settings.defaultSidebarTargets.includes("pageIcon");
        const viewsTintDisabled = !this._settings.defaultBreadcrumbTargets.includes("views");
        const sidebarGroup = this._renderTargetGroup(
          "Sidebar",
          SIDEBAR_TARGET_OPTIONS,
          this._settings.defaultSidebarTargets,
          (target) => this._toggleGlobalSidebarTarget(
            /** @type {SidebarTarget} */
            target
          ),
          () => this._setGlobalSidebarTargets([]),
          [
            this._renderGlobalTintToggle("titleVariation", "Title tint", titleTintDisabled, "Select Collection title icon or Collection title."),
            this._renderGlobalTintToggle("pagesVariation", "Page tint", pageTintDisabled, "Select Page icon or Page.")
          ]
        );
        if (this._globalTintOpen.titleVariation) sidebarGroup.appendChild(this._renderTintInBody("titleVariation"));
        if (this._globalTintOpen.pagesVariation) sidebarGroup.appendChild(this._renderTintInBody("pagesVariation"));
        body.appendChild(sidebarGroup);
        body.appendChild(this._renderHighlightedItemSection());
        body.appendChild(el2("div", `${ROOT_CLASS}__apply-divider`));
        const breadcrumbsGroup = this._renderTargetGroup(
          "Breadcrumbs",
          BREADCRUMB_TARGET_OPTIONS,
          this._settings.defaultBreadcrumbTargets,
          (target) => this._toggleGlobalBreadcrumbTarget(
            /** @type {BreadcrumbTarget} */
            target
          ),
          () => this._setGlobalBreadcrumbTargets([]),
          [
            this._renderGlobalTintToggle("viewsVariation", "Views tint", viewsTintDisabled, "Select Views to tint breadcrumb view buttons.")
          ]
        );
        if (this._globalTintOpen.viewsVariation) breadcrumbsGroup.appendChild(this._renderTintInBody("viewsVariation"));
        body.appendChild(breadcrumbsGroup);
        body.appendChild(this._renderTargetGroup(
          "@ Menu existing collection items",
          MENU_TARGET_OPTIONS,
          this._settings.defaultMenuTargets,
          (target) => this._toggleGlobalMenuTarget(
            /** @type {MenuTarget} */
            target
          ),
          () => this._setGlobalMenuTargets([])
        ));
        body.appendChild(this._renderTargetGroup(
          "@ Menu new item actions",
          MENU_TARGET_OPTIONS,
          this._settings.defaultMenuNewTargets,
          (target) => this._toggleGlobalMenuNewTarget(
            /** @type {MenuTarget} */
            target
          ),
          () => this._setGlobalMenuNewTargets([])
        ));
        return body;
      });
    }
    /** @param {'titleVariation' | 'pagesVariation' | 'viewsVariation'} key @param {string} label @param {boolean} disabled @param {string} disabledTitle */
    _renderGlobalTintToggle(key, label, disabled, disabledTitle) {
      const active = this._globalTintOpen[key];
      const btn = el2("button", `${ROOT_CLASS}__tint-toggle ${active ? "is-active" : ""}`, label);
      btn.type = "button";
      btn.disabled = disabled;
      btn.setAttribute("data-tps-tip", disabled ? disabledTitle : label);
      btn.addEventListener("click", () => {
        this._globalTintOpen = { ...this._globalTintOpen, [key]: !active };
        this._renderPanel();
      });
      return btn;
    }
    /**
     * @param {string} label
     * @param {readonly {val: string, label: string}[]} options
     * @param {string[]} selected
     * @param {(target: string) => void} onToggle
     * @param {() => void} onNone
     * @param {HTMLElement[]} [extraControls]
     */
    _renderTargetGroup(label, options, selected, onToggle, onNone, extraControls = []) {
      const wrap = el2("div", `${ROOT_CLASS}__target-group`);
      wrap.appendChild(el2("div", `${ROOT_CLASS}__target-label`, label));
      const seg = el2("div", `${ROOT_CLASS}__seg`);
      const none = el2("button", `${ROOT_CLASS}__seg-btn ${selected.length === 0 ? "is-active" : ""}`, "None");
      none.type = "button";
      none.addEventListener("click", onNone);
      seg.appendChild(none);
      for (const opt of options) {
        const active = selected.includes(opt.val);
        const b = el2("button", `${ROOT_CLASS}__seg-btn ${active ? "is-active" : ""}`, opt.label);
        b.type = "button";
        b.addEventListener("click", () => onToggle(opt.val));
        seg.appendChild(b);
      }
      wrap.appendChild(seg);
      if (extraControls.length) {
        const tintRow = el2("div", `${ROOT_CLASS}__tint-toggles`);
        for (const control of extraControls) tintRow.appendChild(control);
        wrap.appendChild(tintRow);
      }
      return wrap;
    }
    /** @param {'titleVariation' | 'pagesVariation' | 'viewsVariation'} key */
    _renderTintInBody(key) {
      const wrap = el2("div", `${ROOT_CLASS}__tint-inline`);
      const labels = {
        titleVariation: "Collection title tinting",
        pagesVariation: "Page tinting",
        viewsVariation: "Views tinting"
      };
      wrap.appendChild(el2("div", `${ROOT_CLASS}__tint-inline-label`, labels[key]));
      const live = /* @__PURE__ */ __name((k) => (
        /** @param {Partial<VariationDelta>} p */
        (p) => {
          this._settings = { ...this._settings, [k]: { ...this._settings[k], ...p } };
          this._writeTintStyle();
        }
      ), "live");
      const commit = /* @__PURE__ */ __name(() => {
        this._saveSettings();
        this._renderPanel();
      }, "commit");
      const groupLabel = key === "titleVariation" ? "Collection title" : key === "pagesVariation" ? "Page" : "Views";
      wrap.appendChild(this._renderVariationGroup(
        groupLabel,
        this._settings[key],
        live(key),
        commit,
        () => this._resetVariation(key)
      ));
      return wrap;
    }
    _renderHighlightedItemSection() {
      const wrap = el2("div", `${ROOT_CLASS}__highlighted-item`);
      wrap.appendChild(el2("div", `${ROOT_CLASS}__target-label`, "Highlighted"));
      const seg = el2("div", `${ROOT_CLASS}__seg`);
      for (
        const opt of
        /** @type {const} */
        [
          { val: "none", label: "None", tip: "Leave text and icons unchanged on highlighted rows." },
          { val: "auto", label: "Auto", tip: "Readable contrast for text and icons against the row tint." },
          { val: "tint", label: "Tint", tip: "Shift to another Tailwind shade (50\u2013950) in the row's color family." }
        ]
      ) {
        const active = this._settings.highlightedItemMode === opt.val;
        const b = el2("button", `${ROOT_CLASS}__seg-btn ${active ? "is-active" : ""}`, opt.label);
        b.type = "button";
        b.setAttribute("data-tps-tip", opt.tip);
        b.addEventListener("click", () => this._setHighlightedItemMode(opt.val));
        seg.appendChild(b);
      }
      wrap.appendChild(seg);
      if (this._settings.highlightedItemMode === "tint") {
        const shades = el2("div", `${ROOT_CLASS}__tint-shades`);
        for (const shade of TW_SHADES) {
          const active = normalizeRowTintShade(this._settings.highlightedTintShade) === shade;
          const btn = el2("button", `${ROOT_CLASS}__shade-btn ${active ? "is-active" : ""}`, String(shade));
          btn.type = "button";
          btn.addEventListener("click", () => this._setHighlightedTintShade(shade));
          shades.appendChild(btn);
        }
        wrap.appendChild(shades);
        const invertCheckbox = el2("input", `${ROOT_CLASS}__focus-invert-cb`);
        invertCheckbox.type = "checkbox";
        invertCheckbox.checked = this._settings.highlightedTintInvert;
        const invertRow = el2("label", `${ROOT_CLASS}__focus-invert`);
        invertRow.appendChild(invertCheckbox);
        invertRow.appendChild(el2("span", `${ROOT_CLASS}__focus-invert-label`, "Invert for light mode"));
        invertCheckbox.addEventListener("change", () => {
          this._settings = { ...this._settings, highlightedTintInvert: invertCheckbox.checked };
          this._saveSettings();
          this._writeTintStyle();
        });
        wrap.appendChild(invertRow);
      }
      return wrap;
    }
    /** @param {RowStateMode} mode */
    _setHighlightedItemMode(mode) {
      this._settings = { ...this._settings, highlightedItemMode: mode };
      this._saveSettings();
      this._writeTintStyle();
      this._renderPanel();
    }
    /** @param {number} shade */
    _setHighlightedTintShade(shade) {
      this._settings = { ...this._settings, highlightedTintShade: normalizeRowTintShade(shade) };
      this._saveSettings();
      this._writeTintStyle();
      this._renderPanel();
    }
    /**
     * Foreground for a sidebar row state override (text + icons).
     * @param {string} rowColor resolved tint for the row
     * @param {RowStateMode} mode
     * @param {number} tintShade
     * @param {boolean} tintInvert
     */
    _resolveRowStateColor(rowColor, mode, tintShade, tintInvert) {
      if (mode === "auto") {
        if (isHex2(rowColor)) return textOnHex(rowColor);
        return "var(--side-fg-active-focus, var(--text-default, currentColor))";
      }
      if (mode === "tint") {
        if (!isHex2(rowColor)) return "var(--side-fg-active-focus, var(--text-default, currentColor))";
        return shiftTailwindTint(rowColor, tintShade, tintInvert, this._isDarkAppearance());
      }
      return rowColor;
    }
    /**
     * @param {string} label @param {VariationDelta} v
     */
    _variationSummary(label, v) {
      const span = el2("span", `${ROOT_CLASS}__variation-summary`);
      const isZero = v.hueShift === 0 && v.satDelta === 0 && v.lightDelta === 0;
      span.textContent = isZero ? `${label} 0` : `${label} ${v.hueShift > 0 ? "+" : ""}${v.hueShift}\xB0/${v.satDelta > 0 ? "+" : ""}${v.satDelta}/${v.lightDelta > 0 ? "+" : ""}${v.lightDelta}`;
      if (!isZero) span.classList.add("is-active");
      return span;
    }
    /**
     * @param {string} label
     * @param {VariationDelta} v
     * @param {(p: Partial<VariationDelta>) => void} onLive
     * @param {() => void} onCommit
     * @param {() => void} onReset
     */
    _renderVariationGroup(label, v, onLive, onCommit, onReset) {
      const group = el2("div", `${ROOT_CLASS}__variation-group`);
      const head = el2("div", `${ROOT_CLASS}__variation-group-head`);
      head.appendChild(el2("div", `${ROOT_CLASS}__variation-group-label`, label));
      const reset = el2("button", `${ROOT_CLASS}__variation-reset`, "Reset");
      reset.type = "button";
      reset.addEventListener("click", onReset);
      head.appendChild(reset);
      group.appendChild(head);
      const mode = v.mode === "tailwind" || !v.mode && true ? "tailwind" : "hsl";
      if (true) {
        const modeRow = el2("div", `${ROOT_CLASS}__tint-mode`);
        for (
          const opt of
          /** @type {const} */
          [
            { key: "hsl", label: "HSL" },
            { key: "tailwind", label: "Tailwind" }
          ]
        ) {
          const active = mode === opt.key;
          const btn = el2("button", `${ROOT_CLASS}__tint-mode-btn ${active ? "is-active" : ""}`, opt.label);
          btn.type = "button";
          btn.addEventListener("click", () => {
            onLive({ mode: opt.key });
            onCommit();
          });
          modeRow.appendChild(btn);
        }
        group.appendChild(modeRow);
      }
      if (mode === "tailwind" && true) {
        const shades = el2("div", `${ROOT_CLASS}__tint-shades`);
        for (const shade of TAILWIND_SHADES) {
          const active = normalizeTailwindShade(v.tailwindShade) === shade;
          const btn = el2("button", `${ROOT_CLASS}__shade-btn ${active ? "is-active" : ""}`, String(shade));
          btn.type = "button";
          btn.addEventListener("click", () => {
            onLive({ mode: "tailwind", tailwindShade: shade });
            onCommit();
          });
          shades.appendChild(btn);
        }
        group.appendChild(shades);
      } else {
        group.appendChild(this._sliderRow("Hue", "hueShift", -180, 180, "\xB0", v.hueShift, onLive, onCommit));
        group.appendChild(this._sliderRow("Saturation", "satDelta", -100, 100, "%", v.satDelta, onLive, onCommit));
        group.appendChild(this._sliderRow("Lightness", "lightDelta", -100, 100, "%", v.lightDelta, onLive, onCommit));
      }
      return group;
    }
    /**
     * @param {string} label
     * @param {keyof VariationDelta} key
     * @param {number} min @param {number} max @param {string} suffix @param {number} value
     * @param {(p: Partial<VariationDelta>) => void} onLive   per-tick: update tint live without re-rendering the panel
     * @param {() => void} onCommit                            on release: save + re-render
     */
    _sliderRow(label, key, min, max, suffix, value, onLive, onCommit) {
      const row = el2("div", `${ROOT_CLASS}__slider-row`);
      row.appendChild(el2("div", `${ROOT_CLASS}__slider-label`, label));
      const input = el2("input", `${ROOT_CLASS}__slider`);
      input.type = "range";
      input.min = String(min);
      input.max = String(max);
      input.step = "1";
      input.value = String(value);
      const readout = el2("div", `${ROOT_CLASS}__slider-value`, `${value > 0 ? "+" : ""}${value}${suffix}`);
      input.addEventListener("input", () => {
        const n = Number(input.value);
        readout.textContent = `${n > 0 ? "+" : ""}${n}${suffix}`;
        onLive({ [key]: n });
      });
      input.addEventListener("change", () => onCommit());
      input.addEventListener("pointerup", () => onCommit());
      row.appendChild(input);
      row.appendChild(readout);
      return row;
    }
    /** @returns {PluginCollectionAPI[]} */
    _filteredCollections() {
      const query = this._collectionSearch.trim().toLowerCase();
      return this._collections.filter((collection) => {
        if (this._hideSeparators && this._isSidebarSeparator(collection)) return false;
        if (!query) return true;
        const name = typeof collection.getName === "function" ? collection.getName() : "";
        return String(name).toLowerCase().includes(query);
      });
    }
    /**
     * Detect a Sidebar Separators collection via its config marker (primary) or
     * the zero-width-space name the plugin assigns (legacy / pre-marker rows).
     * @param {PluginCollectionAPI} collection
     */
    _isSidebarSeparator(collection) {
      try {
        const conf = collection.getConfiguration && collection.getConfiguration();
        const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : null;
        const marker = custom && (custom[SIDEBAR_SEPARATOR_PLUGIN_KEY] || custom[SIDEBAR_SEPARATOR_PLUGIN_KEY_LEGACY]);
        if (marker && marker.isSeparator === true) return true;
      } catch {
      }
      const name = typeof collection.getName === "function" ? collection.getName() : "";
      return String(name) === SIDEBAR_SEPARATOR_COLLECTION_NAME;
    }
    /** @param {string} guid */
    _isSidebarSeparatorGuid(guid) {
      const collection = this._collections.find((c) => c.getGuid() === guid);
      return collection ? this._isSidebarSeparator(collection) : false;
    }
    /** @param {boolean} checked */
    _onHideSeparatorsChange(checked) {
      this._hideSeparators = checked;
      if (checked && this._colorGuid && this._isSidebarSeparatorGuid(this._colorGuid)) {
        this._flushColorEdits();
        this._colorGuid = null;
        this._tintGuid = null;
      }
      if (this._animRunning) this._refreshAnimTargets();
      if (this._preview) {
        this._startPreset(this._preview.presetId);
        return;
      }
      this._renderListRowsIntoPanel();
    }
    // ─── Palette presets (preview → save) ───────────────────────────────────
    /**
     * Raw ordered palette values. Multi-hue presets are static hex; mono ramps
     * (grey / single-hue) are stored as `twflip:family:shade` so they flip to the
     * VISIBLE side per theme (dark greys on a light theme, light greys on dark).
     * @param {{shadeIdx?:number,families?:string[],family?:string,shades?:number[]}} preset @returns {string[]}
     */
    _presetStops(preset) {
      let stops;
      if (preset.family && Array.isArray(preset.shades)) {
        stops = TAILWIND[preset.family] ? preset.shades.map((s) => `twflip:${preset.family}:${s}`) : [];
      } else {
        const shadeIdx = preset.shadeIdx ?? 5;
        stops = (preset.families || []).map((f) => TAILWIND[f] ? TAILWIND[f][shadeIdx] : null).filter((hex) => typeof hex === "string");
      }
      return this._settings.reverse ? stops.slice().reverse() : stops;
    }
    /** Current-theme resolved hexes for a preset — for chip gradients + animation.
     *  @param {{shadeIdx?:number,families?:string[],family?:string,shades?:number[]}} preset @returns {string[]} */
    _presetHexes(preset) {
      return (
        /** @type {string[]} */
        this._presetStops(preset).map((v) => this._resolveColorValue(v)).filter((hex) => typeof hex === "string" && /^#[0-9a-f]{6}$/i.test(hex))
      );
    }
    /** Collections a preset applies to: list order, separators only when shown. */
    _presetTargetCollections() {
      return this._collections.filter((c) => !(this._hideSeparators && this._isSidebarSeparator(c)));
    }
    /**
     * Evenly sample a preset's palette across the given ordered guids.
     * @param {{shadeIdx?:number,families?:string[],family?:string,shades?:number[]}} preset @param {string[]} orderedGuids
     * @returns {Record<string,string>}
     */
    _computePresetColors(preset, orderedGuids) {
      const stops = this._presetStops(preset);
      const out = {};
      const n = orderedGuids.length;
      const L = stops.length;
      if (!n || !L) return out;
      const mid = Math.floor((L - 1) / 2);
      orderedGuids.forEach((guid, i) => {
        const idx = n === 1 ? mid : Math.round(i * (L - 1) / (n - 1));
        out[guid] = stops[Math.max(0, Math.min(L - 1, idx))];
      });
      return out;
    }
    /** Enter (or re-scope) preview mode for a preset. @param {string} presetId */
    _startPreset(presetId) {
      const preset = PRESETS.find((p) => p.id === presetId);
      if (!preset) return;
      if (this._settings.animatePalette !== presetId) {
        this._settings = { ...this._settings, animatePalette: presetId };
        this._saveSettings();
      }
      const targets = this._presetTargetCollections();
      if (!targets.length) return;
      const orderedGuids = targets.map((c) => c.getGuid());
      const prevIncluded = this._preview && this._preview.presetId === presetId ? this._preview.included : null;
      const included = new Set(orderedGuids.filter((g) => !prevIncluded || prevIncluded.has(g)));
      const includedOrdered = orderedGuids.filter((g) => included.has(g));
      this._preview = { presetId, included, colors: this._computePresetColors(preset, includedOrdered) };
      this._colorGuid = null;
      this._tintGuid = null;
      this._writeTintStyle();
      this._renderPanel();
    }
    /** Toggle one collection in/out of the active preview run. @param {string} guid */
    _togglePresetGuid(guid) {
      const preview = this._preview;
      if (!preview) return;
      const preset = PRESETS.find((p) => p.id === preview.presetId);
      if (!preset) return;
      if (preview.included.has(guid)) preview.included.delete(guid);
      else preview.included.add(guid);
      const orderedGuids = this._presetTargetCollections().map((c) => c.getGuid());
      const includedOrdered = orderedGuids.filter((g) => preview.included.has(g));
      preview.colors = this._computePresetColors(preset, includedOrdered);
      this._writeTintStyle();
      this._renderPanel();
    }
    /** Number of included collections that already have a committed color. */
    _presetOverwriteCount() {
      if (!this._preview) return 0;
      let n = 0;
      for (const guid of this._preview.included) {
        const e = this._colors[guid];
        if (e && typeof e.color === "string" && e.color) n++;
      }
      return n;
    }
    /** Commit the active preview into the collection colors. */
    _savePreset() {
      if (!this._preview) return;
      for (const [guid, hex] of Object.entries(this._preview.colors)) {
        const e = this._colors[guid] || {};
        this._colors[guid] = { ...e, color: hex };
      }
      this._preview = null;
      this._saveColors();
      this._writeTintStyle();
      this._renderPanel();
    }
    /** @param {boolean} on Reverse the palette direction (preview + animation). */
    _setReverse(on) {
      this._settings = { ...this._settings, reverse: on };
      this._saveSettings();
      if (this._preview) {
        this._startPreset(this._preview.presetId);
        return;
      }
      this._renderPanel();
    }
    /** Remove every committed collection color AND discard any live preview. */
    _clearAllColors() {
      const hadColors = Object.keys(this._colors).length > 0;
      if (!hadColors && !this._preview) return;
      this._preview = null;
      if (hadColors) {
        this._colors = {};
        this._saveColors();
      }
      this._writeTintStyle();
      this._renderPanel();
    }
    /** Discard the active preview, reverting the sidebar + panel. */
    _cancelPreset() {
      if (!this._preview) return;
      this._preview = null;
      this._writeTintStyle();
      this._renderPanel();
    }
    // ─── Animated mode ──────────────────────────────────────────────────────
    // A living sidebar: each collection's color continuously flows through a
    // palette, offset per collection so they form a moving gradient. Runs
    // whenever the `animate` setting is on (even with the panel closed); the
    // flowing colors are ephemeral (never committed).
    /** Interpolate a continuous position into a hex palette (wrapping).
     *  @param {string[]} hexes @param {number} pos @returns {string} */
    _lerpPalette(hexes, pos) {
      const L = hexes.length;
      if (L === 1) return hexes[0];
      const base = (pos % L + L) % L;
      const i0 = Math.floor(base);
      const i1 = (i0 + 1) % L;
      const t = base - i0;
      const a = hexToRgb2(hexes[i0]);
      const b = hexToRgb2(hexes[i1]);
      const ch = /* @__PURE__ */ __name((j) => Math.round(a[j] + (b[j] - a[j]) * t).toString(16).padStart(2, "0"), "ch");
      return `#${ch(0)}${ch(1)}${ch(2)}`;
    }
    /** Cache the ordered target guids the animation flows over. */
    _refreshAnimTargets() {
      this._animTargets = this._presetTargetCollections().map((c) => c.getGuid());
    }
    _startAnimation() {
      this._stopAnimation();
      if (this._disabled || !this._animRunning) return;
      this._preview = null;
      this._refreshAnimTargets();
      this._animTick();
      this._animTimer = setInterval(() => this._animTick(), ANIM_TICK_MS);
    }
    _stopAnimation() {
      if (this._animTimer) {
        clearInterval(this._animTimer);
        this._animTimer = null;
      }
      if (this._animColors) {
        this._animColors = null;
        this._writeTintStyle();
      }
    }
    /** Animate is only allowed to flow one of our built-in preset palettes. */
    _canAnimate() {
      return this._presetTargetCollections().length > 0 && PRESETS.some((p) => p.id === this._settings.animatePalette);
    }
    _animTick() {
      const preset = PRESETS.find((p) => p.id === this._settings.animatePalette) || PRESETS[0];
      const hexes = this._presetHexes(preset);
      const guids = this._animTargets;
      const n = guids.length;
      const L = hexes.length;
      if (!n || !L) {
        this._animColors = null;
        return;
      }
      this._animPhase += this._settings.animateSpeed ?? 0.06;
      const colors = {};
      for (let i = 0; i < n; i++) {
        colors[guids[i]] = this._lerpPalette(hexes, this._animPhase + i * L / n);
      }
      this._animColors = colors;
      this._writeTintStyle();
    }
    /**
     * Toggle the live animation. Turning it ON is a live preview — it flows but
     * is NOT persisted until Confirm. Turning it OFF stops and, if it had been
     * confirmed, persists animate:false.
     * @param {boolean} on
     */
    _setAnimate(on) {
      if (on && !this._canAnimate()) return;
      this._animRunning = on;
      if (on) {
        this._startAnimation();
      } else {
        this._stopAnimation();
        if (this._settings.animate) {
          this._settings = { ...this._settings, animate: false };
          this._saveSettings();
        }
      }
      this._renderPanel();
    }
    /** Lock in the running animation: persist animate:on + current speed/palette. */
    _confirmAnimation() {
      if (!this._animRunning) return;
      this._settings = { ...this._settings, animate: true };
      this._saveSettings();
      this._renderPanel();
    }
    /** @param {string} presetId */
    _setAnimatePalette(presetId) {
      if (!PRESETS.some((p) => p.id === presetId)) return;
      this._settings = { ...this._settings, animatePalette: presetId };
      this._saveSettings();
      if (this._animRunning) this._animTick();
      this._renderPanel();
    }
    /** Committed colors among the target collections that the animation covers. */
    _animOverwriteCount() {
      let n = 0;
      for (const c of this._presetTargetCollections()) {
        const e = this._colors[c.getGuid()];
        if (e && typeof e.color === "string" && e.color) n++;
      }
      return n;
    }
    /** @param {number} speed @param {boolean} [commit] */
    _setAnimateSpeed(speed, commit) {
      const v = clampNum(speed, 0.01, 0.5, 0.06);
      this._settings = { ...this._settings, animateSpeed: v };
      if (commit) this._saveSettings();
      else localStorage.setItem(this._settingsKey(), JSON.stringify(this._settings));
    }
    /** Palette-preset chip row, plus the Save/Cancel bar while previewing. */
    _renderPresetRow() {
      const wrap = el2("div", `${ROOT_CLASS}__preset-row`);
      const hasTargets = this._presetTargetCollections().length > 0;
      const animating = this._animRunning;
      const canAnimate = this._canAnimate();
      const head = el2("div", `${ROOT_CLASS}__preset-head`);
      head.appendChild(el2("div", `${ROOT_CLASS}__preset-label`, "Palette"));
      const headRight = el2("div", `${ROOT_CLASS}__preset-head-right`);
      const revLabel = el2("label", `${ROOT_CLASS}__preset-animate`);
      const revCb = el2("input", `${ROOT_CLASS}__preset-animate-cb`);
      revCb.type = "checkbox";
      revCb.checked = !!this._settings.reverse;
      revCb.setAttribute("data-tps-tip", "Reverse the gradient direction");
      revCb.addEventListener("change", (e) => this._setReverse(
        /** @type {HTMLInputElement} */
        e.target.checked
      ));
      revLabel.appendChild(revCb);
      revLabel.appendChild(el2("span", `${ROOT_CLASS}__preset-animate-label`, "Reverse"));
      headRight.appendChild(revLabel);
      const animLabel = el2("label", `${ROOT_CLASS}__preset-animate${!animating && !canAnimate ? " is-disabled" : ""}`);
      const animCb = el2("input", `${ROOT_CLASS}__preset-animate-cb`);
      animCb.type = "checkbox";
      animCb.checked = animating;
      animCb.disabled = !animating && !canAnimate;
      animCb.addEventListener("change", (e) => this._setAnimate(
        /** @type {HTMLInputElement} */
        e.target.checked
      ));
      animLabel.appendChild(animCb);
      animLabel.appendChild(el2("span", `${ROOT_CLASS}__preset-animate-label`, "Animate"));
      headRight.appendChild(animLabel);
      head.appendChild(headRight);
      wrap.appendChild(head);
      const chips = el2("div", `${ROOT_CLASS}__preset-chips`);
      for (const preset of PRESETS) {
        const active = animating ? this._settings.animatePalette === preset.id : !!this._preview && this._preview.presetId === preset.id;
        const chip = el2("button", `${ROOT_CLASS}__preset-chip${active ? " is-active" : ""}`);
        chip.type = "button";
        chip.disabled = !hasTargets;
        chip.setAttribute("data-tps-tip", animating ? `Animate: ${preset.label}` : preset.label);
        const hexes = this._presetHexes(preset);
        const grad = el2("span", `${ROOT_CLASS}__preset-chip-grad`);
        grad.style.background = hexes.length === 1 ? hexes[0] : `linear-gradient(90deg, ${hexes.join(", ")})`;
        chip.appendChild(grad);
        chip.appendChild(el2("span", `${ROOT_CLASS}__preset-chip-name`, preset.label));
        chip.addEventListener("click", () => animating ? this._setAnimatePalette(preset.id) : this._startPreset(preset.id));
        chips.appendChild(chip);
      }
      const nColors = Object.keys(this._colors).length;
      const clearChip = el2("button", `${ROOT_CLASS}__preset-chip ${ROOT_CLASS}__preset-chip--clear`);
      clearChip.type = "button";
      clearChip.disabled = !nColors && !this._preview;
      clearChip.setAttribute("data-tps-tip", "Clear all collection colors");
      clearChip.appendChild(el2("span", `${ROOT_CLASS}__preset-chip-grad ${ROOT_CLASS}__swatch-summary-dot--none`));
      clearChip.appendChild(el2("span", `${ROOT_CLASS}__preset-chip-name`, "Clear"));
      clearChip.addEventListener("click", () => this._clearAllColors());
      chips.appendChild(clearChip);
      wrap.appendChild(chips);
      if (animating) {
        const bar = el2("div", `${ROOT_CLASS}__anim-bar`);
        bar.appendChild(el2("span", `${ROOT_CLASS}__anim-bar-label`, "Speed"));
        const slider = el2("input", `${ROOT_CLASS}__anim-speed`);
        slider.type = "range";
        slider.min = "0.01";
        slider.max = "0.5";
        slider.step = "0.01";
        slider.value = String(this._settings.animateSpeed ?? 0.06);
        const speedNum = /* @__PURE__ */ __name((v) => String(Math.round(v * 100)), "speedNum");
        const readout = el2("span", `${ROOT_CLASS}__anim-speed-val`, speedNum(this._settings.animateSpeed ?? 0.06));
        slider.addEventListener("input", (e) => {
          const v = parseFloat(
            /** @type {HTMLInputElement} */
            e.target.value
          );
          readout.textContent = speedNum(v);
          this._setAnimateSpeed(v, false);
        });
        slider.addEventListener("change", (e) => this._setAnimateSpeed(parseFloat(
          /** @type {HTMLInputElement} */
          e.target.value
        ), true));
        bar.appendChild(slider);
        bar.appendChild(readout);
        wrap.appendChild(bar);
        const n = this._presetTargetCollections().length;
        const covered = this._animOverwriteCount();
        const confirmed = !!this._settings.animate;
        const gate = el2("div", `${ROOT_CLASS}__preset-bar`);
        const ginfo = el2("div", `${ROOT_CLASS}__preset-info`);
        ginfo.appendChild(el2(
          "span",
          `${ROOT_CLASS}__preset-info-main`,
          confirmed ? `Animating \u2014 ${n} collection${n === 1 ? "" : "s"}` : `Preview \u2014 ${n} collection${n === 1 ? "" : "s"}`
        ));
        if (covered > 0) {
          ginfo.appendChild(el2(
            "span",
            `${ROOT_CLASS}__preset-info-warn`,
            `covers ${covered} saved color${covered === 1 ? "" : "s"}`
          ));
        }
        gate.appendChild(ginfo);
        const gactions = el2("div", `${ROOT_CLASS}__preset-actions`);
        const stop = el2("button", `${ROOT_CLASS}__preset-cancel`, "Turn off");
        stop.type = "button";
        stop.setAttribute("data-tps-tip", "Stop animating and revert");
        stop.addEventListener("click", () => this._setAnimate(false));
        gactions.appendChild(stop);
        if (!confirmed) {
          const confirm = el2("button", `${ROOT_CLASS}__preset-save`, "Confirm");
          confirm.type = "button";
          confirm.setAttribute("data-tps-tip", "Lock in the animation and speed");
          confirm.addEventListener("click", () => this._confirmAnimation());
          gactions.appendChild(confirm);
        }
        gate.appendChild(gactions);
        wrap.appendChild(gate);
      }
      if (!animating && this._preview) {
        const count = this._preview.included.size;
        const overwrite = this._presetOverwriteCount();
        const bar = el2("div", `${ROOT_CLASS}__preset-bar`);
        const info = el2("div", `${ROOT_CLASS}__preset-info`);
        info.appendChild(el2(
          "span",
          `${ROOT_CLASS}__preset-info-main`,
          `Previewing \u2014 ${count} collection${count === 1 ? "" : "s"}`
        ));
        if (overwrite > 0) {
          info.appendChild(el2(
            "span",
            `${ROOT_CLASS}__preset-info-warn`,
            `${overwrite} will be overwritten`
          ));
        }
        bar.appendChild(info);
        const actions = el2("div", `${ROOT_CLASS}__preset-actions`);
        const cancel = el2("button", `${ROOT_CLASS}__preset-cancel`, "Cancel");
        cancel.type = "button";
        cancel.addEventListener("click", () => this._cancelPreset());
        const save = el2("button", `${ROOT_CLASS}__preset-save`, count ? `Apply to ${count}` : "Apply");
        save.type = "button";
        save.disabled = !count;
        save.addEventListener("click", () => this._savePreset());
        actions.appendChild(cancel);
        actions.appendChild(save);
        bar.appendChild(actions);
        wrap.appendChild(bar);
      }
      return wrap;
    }
    _emptyListMessage() {
      if (this._collectionSearch.trim()) return "No matching collections.";
      if (this._hideSeparators && this._collections.some((c) => this._isSidebarSeparator(c))) {
        return "No collections to show \u2014 separators are hidden.";
      }
      return "No collections found.";
    }
    _renderList() {
      return this._staticSection(() => {
        const body = el2("div", `${ROOT_CLASS}__list-section`);
        const toolbar = el2("div", `${ROOT_CLASS}__list-toolbar`);
        const search = el2("input", `${ROOT_CLASS}__collection-search`);
        search.type = "search";
        search.placeholder = "Search collections";
        search.value = this._collectionSearch;
        search.addEventListener("input", (e) => {
          this._collectionSearch = /** @type {HTMLInputElement} */
          e.target.value;
          this._renderListRowsIntoPanel();
        });
        toolbar.appendChild(search);
        const refreshBtn = el2("button", `${ROOT_CLASS}__refresh`);
        refreshBtn.type = "button";
        refreshBtn.setAttribute("aria-label", "Refresh collections");
        refreshBtn.setAttribute("data-tps-tip", "Refresh collections");
        refreshBtn.appendChild(el2("span", `${ROOT_CLASS}__refresh-icon ti ti-refresh`));
        refreshBtn.addEventListener("click", () => {
          refreshBtn.classList.remove("is-spinning");
          void refreshBtn.offsetWidth;
          refreshBtn.classList.add("is-spinning");
          this._loadCollections();
        });
        refreshBtn.addEventListener("animationend", () => refreshBtn.classList.remove("is-spinning"));
        toolbar.appendChild(refreshBtn);
        const hideLabel = el2("label", `${ROOT_CLASS}__hide-separators`);
        const hideCb = el2("input", `${ROOT_CLASS}__hide-separators-cb`);
        hideCb.type = "checkbox";
        hideCb.checked = this._hideSeparators;
        hideCb.addEventListener("change", (e) => {
          this._onHideSeparatorsChange(
            /** @type {HTMLInputElement} */
            e.target.checked
          );
        });
        hideLabel.appendChild(hideCb);
        hideLabel.appendChild(el2("span", `${ROOT_CLASS}__hide-separators-label`, "Hide separators"));
        toolbar.appendChild(hideLabel);
        body.appendChild(this._renderPresetRow());
        body.appendChild(toolbar);
        const list = el2("div", `${ROOT_CLASS}__list-fill ${ROOT_CLASS}__collection-list`);
        const filtered = this._filteredCollections();
        if (!filtered.length) {
          list.appendChild(el2("div", `${ROOT_CLASS}__empty`, this._emptyListMessage()));
        } else {
          for (const collection of filtered) {
            list.appendChild(this._renderListRow(collection));
          }
        }
        body.appendChild(list);
        return body;
      });
    }
    _renderListRowsIntoPanel() {
      const filtered = this._filteredCollections();
      const list = this._panelEl?.querySelector(`.${ROOT_CLASS}__collection-list`);
      if (!list) return;
      list.textContent = "";
      if (!filtered.length) {
        list.appendChild(el2("div", `${ROOT_CLASS}__empty`, this._emptyListMessage()));
        return;
      }
      for (const collection of filtered) {
        list.appendChild(this._renderListRow(collection));
      }
    }
    /** @param {PluginCollectionAPI} collection */
    _renderListRow(collection) {
      const guid = collection.getGuid();
      const name = typeof collection.getName === "function" ? collection.getName() : "(unnamed)";
      const resolved = this._getResolved(guid);
      const shown = resolved.color ? this._resolveColorValue(resolved.color) : null;
      const preview = this._preview;
      const included = !!preview && preview.included.has(guid);
      const isExpanded = !preview && this._colorGuid === guid;
      const row = el2("div", `${ROOT_CLASS}__row${isExpanded ? " is-expanded" : ""}` + (preview ? " is-preview" : "") + (preview && !included ? " is-excluded" : ""));
      row.dataset.collGuid = guid;
      const main = el2("div", `${ROOT_CLASS}__row-main`);
      if (preview) {
        const cb = el2("input", `${ROOT_CLASS}__row-select`);
        cb.type = "checkbox";
        cb.checked = included;
        cb.setAttribute("aria-label", `Include ${name}`);
        cb.addEventListener("click", (e) => e.stopPropagation());
        cb.addEventListener("change", () => this._togglePresetGuid(guid));
        main.appendChild(cb);
        main.addEventListener("click", (e) => {
          if (e.target instanceof Element && e.target.closest("button, input")) return;
          this._togglePresetGuid(guid);
        });
      } else {
        main.addEventListener("click", (e) => {
          if (e.target instanceof Element && e.target.closest("button")) return;
          this._toggleColor(guid);
        });
      }
      const iconClass = this._collectionIconClass(collection);
      const icon = el2("span", `${ROOT_CLASS}__row-icon ti ${iconClass}`);
      icon.setAttribute("aria-hidden", "true");
      if (shown && resolved.sidebarTargets.includes("titleIcon")) icon.style.color = shown;
      main.appendChild(icon);
      main.appendChild(el2("span", `${ROOT_CLASS}__row-name`, name));
      if (preview) {
        const holder = el2("span", `${ROOT_CLASS}__row-color ${ROOT_CLASS}__row-color--static`);
        const dot2 = el2("span", `${ROOT_CLASS}__swatch-summary-dot`);
        if (shown) dot2.style.background = shown;
        else dot2.classList.add(`${ROOT_CLASS}__swatch-summary-dot--none`);
        holder.appendChild(dot2);
        main.appendChild(holder);
        row.appendChild(main);
        return row;
      }
      const colorBtn = el2("button", `${ROOT_CLASS}__row-color${isExpanded ? " is-active" : ""}`);
      colorBtn.type = "button";
      colorBtn.setAttribute("aria-label", resolved.color ? "Change color" : "Pick color");
      colorBtn.setAttribute("data-tps-tip", resolved.color ? "Change color" : "Pick color");
      const dot = el2("span", `${ROOT_CLASS}__swatch-summary-dot`);
      if (shown) dot.style.background = shown;
      else dot.classList.add(`${ROOT_CLASS}__swatch-summary-dot--none`);
      colorBtn.appendChild(dot);
      colorBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this._toggleColor(guid);
      });
      main.appendChild(colorBtn);
      this._appendRowOverrideToggles(main, guid, resolved);
      row.appendChild(main);
      if (isExpanded) row.appendChild(this._renderExpandedColorField(guid, resolved));
      if (isExpanded && this._tintGuid === guid && resolved.color) {
        row.appendChild(this._renderEntryVariations(guid));
      }
      return row;
    }
    /** @param {PluginCollectionAPI} collection */
    _collectionIconClass(collection) {
      try {
        const cfg = collection.getConfiguration && collection.getConfiguration();
        const icon = cfg && typeof cfg.icon === "string" ? cfg.icon : "";
        if (icon) return icon.startsWith("ti-") ? icon : `ti-${icon}`;
      } catch {
      }
      return "ti-folder";
    }
    /** @param {string} guid */
    _toggleTint(guid) {
      this._tintGuid = this._tintGuid === guid ? null : guid;
      this._renderPanel();
    }
    /** @param {string} guid */
    _toggleColor(guid) {
      if (this._colorGuid && this._colorGuid !== guid) this._flushColorEdits();
      const wasOpen = this._colorGuid === guid;
      this._colorGuid = wasOpen ? null : guid;
      if (wasOpen) {
        this._tintGuid = null;
        this._flushColorEdits();
      } else if (this._colorGuid && this._tintGuid && this._tintGuid !== guid) {
        this._tintGuid = null;
      }
      this._renderPanel();
    }
    /** @param {string} guid @param {{color: string|null, applyTo: ApplyTo, isOverride: boolean}} resolved */
    _renderExpandedColorField(guid, resolved) {
      const wrap = el2("div", `${ROOT_CLASS}__expanded`);
      wrap.addEventListener("click", (e) => e.stopPropagation());
      wrap.addEventListener("keydown", (e) => e.stopPropagation());
      wrap.appendChild(this._renderColorField(guid, resolved));
      return wrap;
    }
    /**
     * Per-collection override toggles — inline in the row, to the right of the color swatch.
     * @param {HTMLElement} parent
     * @param {string} guid
     * @param {{color: string|null, applyTo: ApplyTo, isOverride: boolean}} resolved
     */
    _appendRowOverrideToggles(parent, guid, resolved) {
      for (const opt of APPLY_TO_OPTIONS) {
        const isActive = resolved.isOverride && resolved.applyTo === opt.val;
        const btn = el2("button", `${ROOT_CLASS}__override-toggle ${isActive ? "is-active" : ""}`);
        btn.type = "button";
        btn.setAttribute("aria-pressed", String(isActive));
        btn.setAttribute("aria-label", opt.label);
        btn.setAttribute("data-tps-tip", isActive ? `${opt.label} override active \u2014 click to clear` : `Override default to: ${opt.label}`);
        btn.appendChild(el2("span", `ti ${opt.icon}`));
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          this._setApplyTo(guid, isActive ? null : opt.val);
        });
        parent.appendChild(btn);
      }
      const isTintOpen = this._tintGuid === guid;
      const tintBtn = el2("button", `${ROOT_CLASS}__override-toggle ${isTintOpen ? "is-active" : ""}`);
      tintBtn.type = "button";
      tintBtn.setAttribute("aria-pressed", String(isTintOpen));
      tintBtn.setAttribute("aria-label", "Tint variation");
      tintBtn.setAttribute("data-tps-tip", isTintOpen ? "Hide tint variation" : "Show tint variation");
      tintBtn.appendChild(el2("span", "ti ti-brush"));
      tintBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this._toggleTint(guid);
      });
      parent.appendChild(tintBtn);
    }
    /** @param {string} guid @param {{color: string|null}} resolved */
    _renderColorField(guid, resolved) {
      const wrap = el2("div", `${ROOT_CLASS}__color-field-wrap`);
      wrap.appendChild(colorField({
        value: this._colorFieldValue(resolved.color),
        featured: [{ label: "Accent", token: "--color-primary-500" }],
        customSwatches: this._settings.customSwatches,
        onCustomSwatchesChange: /* @__PURE__ */ __name((list) => this._onCustomSwatchesChange(list), "onCustomSwatchesChange"),
        onPick: /* @__PURE__ */ __name((r) => this._onPickColor(guid, r), "onPick")
      }));
      return wrap;
    }
    /** @param {string[]} list — user's saved custom swatches (global) */
    _onCustomSwatchesChange(list) {
      this._settings = { ...this._settings, customSwatches: Array.isArray(list) ? list.filter(isHex2).slice(0, 44) : [] };
      localStorage.setItem(this._settingsKey(), JSON.stringify(this._settings));
      this._colorEditsPending = true;
      this._configDirty = true;
    }
    /** @param {string | null} color @returns {{type:'theme',token:string} | {type:'hex',hex:string} | {type:'tw',family:string,shadeIdx:number,invert:boolean} | null} */
    _colorFieldValue(color) {
      if (typeof color !== "string") return null;
      const flip = color.match(/^twflip:([a-z]+):(\d+)$/i);
      if (flip && TAILWIND[flip[1]]) return { type: "tw", family: flip[1], shadeIdx: Number(flip[2]), invert: true };
      const m = color.match(/^var\((--[a-z0-9-]+)/i);
      if (m) return { type: "theme", token: m[1] };
      return /^#[0-9a-f]{6}$/i.test(color) ? { type: "hex", hex: color } : null;
    }
    /**
     * Picker callback. Theme picks persist as a live `var(--token)` reference;
     * a Tailwind pick with "invert lightness" persists as `twflip:<family>:<idx>`
     * (resolved per light/dark appearance at tint time); everything else is a hex.
     * @param {string} guid
     * @param {any} r
     */
    _onPickColor(guid, r) {
      let color = null;
      if (r && r.type === "theme") color = `var(${r.token})`;
      else if (r && r.type === "tw") color = r.invert ? `twflip:${r.family}:${r.shadeIdx}` : r.hex;
      else if (r) color = r.hex;
      this._setColor(guid, color, false);
    }
    /**
     * Resolve a stored color value to a CSS color. `twflip:` flips its Tailwind
     * shade for the active appearance (900 in light → 100 in dark). hex + var()
     * pass through unchanged.
     * @param {string | null} color
     */
    _resolveColorValue(color) {
      if (typeof color !== "string") return color;
      const flip = color.match(/^twflip:([a-z]+):(\d+)$/i);
      if (flip && TAILWIND[flip[1]]) {
        const idx = Number(flip[2]);
        const useIdx = this._isDarkAppearance() ? TW_SHADES.length - 1 - idx : idx;
        return TAILWIND[flip[1]][Math.max(0, Math.min(TW_SHADES.length - 1, useIdx))] || color;
      }
      return color;
    }
    /** Re-tint when the user switches light/dark so `twflip:` colors flip. */
    _watchAppearance() {
      this._lastDark = this._isDarkAppearance();
      const check = /* @__PURE__ */ __name(() => {
        const dark = this._isDarkAppearance();
        if (dark !== this._lastDark) {
          this._lastDark = dark;
          this._writeTintStyle();
        }
      }, "check");
      try {
        this._appearanceObserver = new MutationObserver(() => {
          if (this._appearanceRaf) return;
          this._appearanceRaf = requestAnimationFrame(() => {
            this._appearanceRaf = null;
            check();
          });
        });
        const opts = { attributes: true, attributeFilter: ["class", "style", "data-theme", "data-appearance"] };
        this._appearanceObserver.observe(document.documentElement, opts);
        if (document.body) this._appearanceObserver.observe(document.body, opts);
      } catch {
      }
    }
    /** @returns {boolean} true when Thymer's current appearance is dark */
    _isDarkAppearance() {
      try {
        const t = this.ui.getCurrentTheme && this.ui.getCurrentTheme();
        const appearance = t && (t.appearance || t.theme && t.theme.appearance);
        if (appearance === "dark") return true;
        if (appearance === "light") return false;
      } catch {
      }
      try {
        if (document.body && document.body.classList.contains("dark")) return true;
      } catch {
      }
      const lum = /* @__PURE__ */ __name((str) => {
        const m = String(str || "").match(/rgba?\(([^)]+)\)/i);
        if (!m) return null;
        const [r, g, b, a] = m[1].split(",").map((s) => parseFloat(s));
        if (a !== void 0 && a === 0) return null;
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      }, "lum");
      const surfaces = [document.querySelector(".sidebar"), document.body, document.documentElement];
      for (const el3 of surfaces) {
        if (!el3) continue;
        try {
          const bg = lum(getComputedStyle(el3).backgroundColor);
          if (bg !== null) return bg < 0.5;
        } catch {
        }
      }
      for (const el3 of [document.body, document.documentElement]) {
        if (!el3) continue;
        try {
          const tx = lum(getComputedStyle(el3).color);
          if (tx !== null) return tx > 0.5;
        } catch {
        }
      }
      try {
        return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      } catch {
      }
      return true;
    }
    /** @param {string} guid @param {string | null} color */
    _refreshRowColor(guid, color) {
      if (!this._panelEl) return;
      const row = this._panelEl.querySelector(`.${ROOT_CLASS}__row[data-coll-guid="${guid}"]`);
      if (!row) return;
      const icon = (
        /** @type {HTMLElement | null} */
        row.querySelector(`.${ROOT_CLASS}__row-icon`)
      );
      if (icon) icon.style.color = color || "";
      const dot = (
        /** @type {HTMLElement | null} */
        row.querySelector(`.${ROOT_CLASS}__swatch-summary-dot, .${ROOT_CLASS}__row-color .${ROOT_CLASS}__swatch-summary-dot`)
      );
      if (dot) {
        dot.style.background = color || "";
        dot.classList.toggle(`${ROOT_CLASS}__swatch-summary-dot--none`, !color);
      }
    }
    /** @param {string} guid */
    _renderEntryVariations(guid) {
      const raw = this._getRaw(guid);
      const wrap = el2("div", `${ROOT_CLASS}__entry-variation`);
      wrap.appendChild(el2("div", `${ROOT_CLASS}__entry-variation-label`, "Tint variation (overrides global)"));
      const titleV = raw.titleVariationOverride || this._settings.titleVariation;
      const pagesV = raw.pagesVariationOverride || this._settings.pagesVariation;
      const live = /* @__PURE__ */ __name((key) => (
        /** @param {Partial<VariationDelta>} p */
        (p) => {
          const e = this._colors[guid] || { color: null };
          const base = e[key] || this._settings[key];
          this._colors[guid] = { ...e, [key]: { ...base, ...p } };
          this._writeTintStyle();
        }
      ), "live");
      const commit = /* @__PURE__ */ __name(() => {
        this._saveColors();
        this._renderPanel();
      }, "commit");
      wrap.appendChild(this._renderVariationGroup(
        raw.titleVariationOverride ? "Title (override)" : "Title (global)",
        titleV,
        live("titleVariation"),
        commit,
        () => raw.titleVariationOverride ? this._clearEntryVariation(guid, "titleVariation") : this._setEntryVariation(guid, "titleVariation", { hueShift: 0, satDelta: 0, lightDelta: 0 })
      ));
      wrap.appendChild(this._renderVariationGroup(
        raw.pagesVariationOverride ? "Pages (override)" : "Pages (global)",
        pagesV,
        live("pagesVariation"),
        commit,
        () => raw.pagesVariationOverride ? this._clearEntryVariation(guid, "pagesVariation") : this._setEntryVariation(guid, "pagesVariation", { hueShift: 0, satDelta: 0, lightDelta: 0 })
      ));
      if (this._getResolved(guid).applyTo !== "icon+text+pages") {
        wrap.lastElementChild?.setAttribute("hidden", "");
      }
      return wrap;
    }
    /** @param {'light' | 'dark'} theme @param {string} hex @param {string} guid */
    _buildPreview(theme, hex, guid) {
      const tile = el2("div", `${ROOT_CLASS}__preview ${ROOT_CLASS}__preview--${theme}`);
      tile.appendChild(el2("div", `${ROOT_CLASS}__preview-head`, theme === "light" ? "Light" : "Dark"));
      const item = el2("div", `${ROOT_CLASS}__preview-item`);
      item.dataset.theme = theme;
      const collection = this._collections.find((c) => c.getGuid() === guid);
      const iconClass = collection ? this._collectionIconClass(collection) : "ti-folder";
      const name = collection && typeof collection.getName === "function" ? collection.getName() : "Collection";
      item.style.color = hex;
      item.style.background = withAlpha(hex, theme === "light" ? 0.14 : 0.2);
      item.appendChild(el2("span", `${ROOT_CLASS}__preview-icon ti ${iconClass}`));
      item.appendChild(el2("span", `${ROOT_CLASS}__preview-name`, name));
      tile.appendChild(item);
      return tile;
    }
    // ─── Static styles ──────────────────────────────────────────────────────
    /**
     * Inject CSS into a single managed <style id> that we replace on each load,
     * instead of this.ui.injectCSS which appends a NEW stylesheet every plugin
     * reload without removing the old one — that accumulation left stale rules
     * (borders, fixed heights) ghosting onto the picker after redeploys.
     * @param {string} id @param {string} css
     */
    _injectManagedCSS(id, css) {
      let node = document.getElementById(id);
      if (!(node instanceof HTMLStyleElement)) {
        node = document.createElement("style");
        node.id = id;
        (document.head || document.documentElement).appendChild(node);
      }
      node.textContent = css;
    }
    _injectStaticCSS() {
      this._injectManagedCSS("plg-collection-colors-static-css", `
			.${ROOT_CLASS} {
				display: block; height: 100%; overflow: auto;
			}
			.${ROOT_CLASS},
			.${ROOT_CLASS} * {
				text-align: left !important;
			}
			.${ROOT_CLASS} button { text-align: center !important; }
			/* Stretch direct children to full width so dividers + content span edge-to-edge. */
			.${ROOT_CLASS},
			.${ROOT_CLASS}__panel-root {
				align-items: stretch !important;
			}
			.${ROOT_CLASS} > *,
			.${ROOT_CLASS}__panel-root > *,
			.${ROOT_CLASS}__panel-root .tps-plugin-header > *:not(.tps-plugin-header-logo) {
				align-self: stretch !important;
				justify-self: stretch !important;
				width: 100% !important;
				max-width: 100% !important;
				margin-left: 0 !important;
				margin-right: 0 !important;
				box-sizing: border-box !important;
			}
			.${ROOT_CLASS}__panel-root .tps-plugin-header-logo {
				width: auto !important;
				max-width: none !important;
				align-self: flex-start !important;
			}
			.${ROOT_CLASS}__panel-root {
				padding: 0 12px 60px;
				font-size: 13px;
				width: 100%;
				box-sizing: border-box;
			}
			.${ROOT_CLASS}__empty { opacity: 0.6; padding: 16px 0; }

			/* Shared collapsible sections: flat Collection Icons-style rhythm,
			   fixed header geometry, and section separators above the section. */
			.${ROOT_CLASS} .tps-section {
				padding: 16px 0 0;
				margin: 0;
				border-top: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.12)));
			}
			.${ROOT_CLASS} .tps-plugin-header + .tps-section {
				padding-top: 0;
				border-top: 0;
			}
			.${ROOT_CLASS} .tps-section + .tps-section {
				margin-top: 16px;
				padding-top: 16px;
				border-top: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.12)));
			}
			.${ROOT_CLASS} .tps-section-header {
				display: flex;
				align-items: center;
				gap: 10px;
				width: 100%;
				min-height: 34px;
				padding: 0;
				margin: 0;
				border: 0;
				background: transparent;
				color: inherit;
				font: inherit;
				text-align: left;
				cursor: pointer;
				transform: none !important;
			}
			.${ROOT_CLASS} .tps-section-header:hover {
				background: transparent;
			}
			.${ROOT_CLASS} .tps-section-header:active,
			.${ROOT_CLASS} .tps-section-header:focus {
				transform: none !important;
			}
			.${ROOT_CLASS} .tps-section-chev {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				flex: 0 0 18px;
				width: 18px;
				height: 18px;
				font-size: 16px;
				line-height: 1;
				opacity: 0.75;
				transform-origin: center;
				transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out), opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
			}
			.${ROOT_CLASS} .tps-section-header:hover .tps-section-chev {
				opacity: 1;
			}
			.${ROOT_CLASS} .tps-section-label {
				display: flex;
				align-items: center;
				min-height: 18px;
				margin: 0 !important;
				line-height: 18px;
			}
			.${ROOT_CLASS} .tps-section-summary {
				min-height: 18px;
				display: flex;
				align-items: center;
				margin-left: auto;
			}
			.${ROOT_CLASS} .tps-section-body {
				padding: 8px 0 0;
				margin-top: 0;
				border-top: 0;
			}

			/* Palette section (above global default) */
			.${ROOT_CLASS}__palette-section {
				display: flex; flex-direction: column; gap: 8px;
				padding: 10px 12px;
				background: rgba(127,127,127,0.06);
				border: 1px solid rgba(127,127,127,0.12);
				border-radius: 8px;
				margin-bottom: 10px;
			}
			.${ROOT_CLASS}__palette-head {
				display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
			}
			.${ROOT_CLASS}__palette-label {
				font-size: 11px; font-weight: 600; opacity: 0.7;
				text-transform: uppercase; letter-spacing: 0.04em;
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}__palette-buttons {
				display: flex; flex-wrap: wrap; gap: 4px;
			}
			.${ROOT_CLASS}__palette-btn {
				border: 1px solid rgba(127,127,127,0.18);
				background: rgba(127,127,127,0.08);
				color: inherit;
				padding: 4px 10px; border-radius: 4px;
				cursor: pointer; font-size: 11px;
			}
			.${ROOT_CLASS}__palette-btn:hover { background: rgba(127,127,127,0.16); }
			.${ROOT_CLASS}__palette-btn.is-active {
				background: color-mix(in srgb, var(--tps-accent, currentColor) 18%, transparent);
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				color: var(--tps-accent, currentColor);
				font-weight: 600;
			}
			.${ROOT_CLASS}__palette-preview {
				display: flex; flex-wrap: wrap; gap: 4px;
			}
			.${ROOT_CLASS}__palette-dot {
				width: 14px; height: 14px; border-radius: 50%;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 8%, transparent));
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}__palette-empty { font-size: 11px; opacity: 0.55; }

			/* Palette name-left / swatches-right list (all palettes visible) */
			.${ROOT_CLASS}__palette-list {
				display: flex; flex-direction: column;
				border-top: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.1)));
			}
			.${ROOT_CLASS}__palette-row {
				display: flex; flex-wrap: nowrap;
				align-items: center;
				gap: 12px;
				padding: 8px 0;
				border-bottom: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.08)));
				overflow: hidden;
			}
			.${ROOT_CLASS}__palette-row.is-truncated .${ROOT_CLASS}__palette-row-dots {
				display: none;
			}
			.${ROOT_CLASS}__palette-row-reveal {
				display: inline-flex !important;
				align-items: center;
				justify-content: center;
				gap: 4px;
				margin-left: auto;
				width: 28px;
				height: 28px;
				padding: 0;
				border-radius: 4px;
				opacity: 0;
				visibility: hidden;
				font-size: 16px;
				line-height: 1;
				flex: 0 0 28px;
				border: 0;
				background: transparent;
				color: inherit;
				cursor: pointer;
			}
			.${ROOT_CLASS}__palette-row-reveal:hover {
				background: var(--tps-bg-hover, rgba(127,127,127,0.1));
				opacity: 1;
			}
			.${ROOT_CLASS}__palette-row-reveal::after {
				content: '\u25BE';
				opacity: 0.7;
			}
			.${ROOT_CLASS}__palette-row.is-revealed .${ROOT_CLASS}__palette-row-reveal::after {
				content: '\u25B4';
			}
			.${ROOT_CLASS}__palette-row.is-truncated .${ROOT_CLASS}__palette-row-reveal,
			.${ROOT_CLASS}__palette-row.is-revealed .${ROOT_CLASS}__palette-row-reveal {
				opacity: 0.75;
				visibility: visible;
			}
			.${ROOT_CLASS}__palette-row.is-truncated,
			.${ROOT_CLASS}__palette-row.is-revealed {
				cursor: pointer;
			}
			.${ROOT_CLASS}__palette-row.is-truncated:hover,
			.${ROOT_CLASS}__palette-row.is-revealed:hover {
				background: var(--tps-bg-hover, rgba(127,127,127,0.06));
			}
			.${ROOT_CLASS}__palette-row.is-revealed {
				flex-wrap: wrap;
				align-items: flex-start;
				overflow: visible;
			}
			.${ROOT_CLASS}__palette-row.is-revealed .${ROOT_CLASS}__palette-row-dots {
				display: flex !important;
				flex-wrap: wrap;
				flex: 1 0 100%;
				width: 100%;
				min-width: 0;
				margin-top: 4px;
				padding-left: 0;
				overflow: visible;
			}
			.${ROOT_CLASS}__palette-row:last-child { border-bottom: 0; }
			.${ROOT_CLASS}__palette-row:hover { background: var(--tps-bg-hover, rgba(127,127,127,0.04)); }
			.${ROOT_CLASS}__palette-row.is-active {
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 12%, transparent));
				padding-left: 8px;
				padding-right: 8px;
			}
			.${ROOT_CLASS}__palette-row.is-active .${ROOT_CLASS}__palette-row-name {
				color: var(--tps-accent, currentColor);
				font-weight: 600;
			}
			.${ROOT_CLASS}__palette-row--custom .${ROOT_CLASS}__palette-row-name {
				font-style: italic;
			}
			.${ROOT_CLASS}__palette-row--add .${ROOT_CLASS}__palette-row-name {
				opacity: 0.7; font-style: italic;
			}
			.${ROOT_CLASS}__palette-row-name {
				display: flex; align-items: center; gap: 8px;
				border: 0; background: transparent; color: inherit;
				font: inherit; padding: 0; text-align: left;
				cursor: pointer;
				white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}__palette-row-dots {
				display: flex; flex-wrap: nowrap; gap: 4px;
				flex: 1 1 auto;
				min-width: 0;
				overflow: hidden;
			}
			.${ROOT_CLASS}__tailwind-shades {
				display: flex;
				align-items: flex-start;
				gap: 10px;
				padding: 8px;
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 12%, transparent));
			}
			.${ROOT_CLASS}__tailwind-shades-label {
				flex: 0 0 auto;
				min-height: 28px;
				display: inline-flex;
				align-items: center;
				font-size: 11px;
				font-weight: 600;
				opacity: 0.7;
				text-transform: uppercase;
				letter-spacing: 0.04em;
			}
			.${ROOT_CLASS}__tailwind-shades-seg {
				display: flex;
				flex: 1 1 auto;
				min-width: 0;
				flex-wrap: wrap;
				gap: 4px;
			}
			.${ROOT_CLASS}__shade-btn {
				min-width: 44px;
				height: 28px;
				border: 1px solid transparent;
				background: transparent;
				color: inherit;
				padding: 0 8px;
				border-radius: 4px;
				cursor: pointer;
				font: inherit;
				font-size: 12px;
				transition: background-color 0.08s ease, border-color 0.08s ease, color 0.08s ease;
			}
			.${ROOT_CLASS}__shade-btn:hover,
			.${ROOT_CLASS}__shade-btn:focus-visible {
				background: var(--tps-bg-hover, rgba(127,127,127,0.1)));
				border-color: var(--tps-border, rgba(127,127,127,0.24));
				color: var(--tps-text, var(--text-default, currentColor));
				outline: none;
			}
			.${ROOT_CLASS}__shade-btn.is-active {
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 15%, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				color: var(--tps-accent, currentColor);
				font-weight: 600;
			}
			.${ROOT_CLASS}__palette-btn--custom {
				border-style: dashed;
			}
			.${ROOT_CLASS}__palette-btn--add {
				border-style: dashed;
				opacity: 0.7;
			}
			.${ROOT_CLASS}__palette-btn--add:hover { opacity: 1; }

			.${ROOT_CLASS}__palette-editor {
				display: flex; flex-direction: column; gap: 8px;
				padding: 10px 0 2px;
				background: transparent;
				border-top: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.12)));
				border-radius: 0;
				margin-top: 6px;
			}
			.${ROOT_CLASS}__palette-editor-head {
				display: flex; gap: 8px; align-items: center;
			}
			.${ROOT_CLASS}__palette-name-input {
				flex: 1;
				background: var(--tps-bg-input, rgba(127,127,127,0.08));
				border: 1px solid var(--tps-divider, rgba(127,127,127,0.2));
				color: inherit;
				padding: 5px 8px; border-radius: 4px;
				font-size: 12px;
				outline: none;
			}
			.${ROOT_CLASS}__palette-editor-del {
				background: transparent;
				border: 1px solid rgba(239, 68, 68, 0.3);
				color: rgba(239, 68, 68, 0.85);
				padding: 5px 10px; border-radius: 4px;
				font-size: 11px; cursor: pointer;
			}
			.${ROOT_CLASS}__palette-editor-del:hover { background: rgba(239, 68, 68, 0.1); }

			.${ROOT_CLASS}__palette-editor-swatches {
				display: flex; flex-wrap: wrap; gap: 4px;
				min-height: 22px;
			}
			.${ROOT_CLASS}__palette-chip {
				display: inline-flex; align-items: center; gap: 2px;
				padding: 2px 4px 2px 2px;
				background: var(--tps-bg-input, rgba(127,127,127,0.08));
				border-radius: 12px;
			}
			.${ROOT_CLASS}__palette-chip-dot {
				width: 16px; height: 16px; border-radius: 50%;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 8%, transparent));
			}
			.${ROOT_CLASS}__palette-chip-x {
				border: 0; background: transparent; color: inherit;
				width: 16px; height: 16px;
				font-size: 14px; line-height: 1;
				cursor: pointer; opacity: 0.6;
				border-radius: 50%;
			}
			.${ROOT_CLASS}__palette-chip-x:hover { background: rgba(127,127,127,0.2); opacity: 1; }

			.${ROOT_CLASS}__palette-editor-add {
				display: flex; flex-wrap: wrap; gap: 6px; align-items: center;
			}
			.${ROOT_CLASS}__palette-hex-input {
				width: 100px;
				background: var(--tps-bg-input, rgba(127,127,127,0.08));
				border: 1px solid var(--tps-divider, rgba(127,127,127,0.2));
				color: inherit;
				padding: 5px 8px; border-radius: 4px;
				font-size: 12px;
				font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
				outline: none;
			}
			.${ROOT_CLASS}__palette-editor-add-btn {
				background: color-mix(in srgb, var(--tps-accent, currentColor) 18%, transparent);
				border: 0;
				color: var(--tps-accent, currentColor);
				padding: 5px 10px; border-radius: 4px;
				font-size: 11px; cursor: pointer; font-weight: 600;
			}
			.${ROOT_CLASS}__palette-editor-add-btn:hover { background: color-mix(in srgb, var(--tps-accent, currentColor) 30%, transparent); }

			.${ROOT_CLASS}__palette-quick {
				display: flex; flex-wrap: wrap; gap: 3px;
				margin-left: 8px;
				padding-left: 8px;
				border-left: 1px solid rgba(127,127,127,0.18);
			}
			.${ROOT_CLASS}__palette-quick-dot {
				width: 16px; height: 16px; border-radius: 50%;
				border: 0; padding: 0; cursor: pointer; outline: none;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 8%, transparent));
				transition: transform 0.08s ease;
			}
			.${ROOT_CLASS}__palette-quick-dot:hover { transform: scale(1.2); }

			/* Global default */
			.${ROOT_CLASS}__global {
				display: flex; flex-wrap: wrap; align-items: center; gap: 10px;
				padding: 8px 12px;
				background: rgba(127,127,127,0.06);
				border: 1px solid rgba(127,127,127,0.12);
				border-radius: 8px;
				margin-bottom: 12px;
			}
			.${ROOT_CLASS}__global-label {
				font-size: 11px; font-weight: 600; opacity: 0.7;
				text-transform: uppercase; letter-spacing: 0.04em;
				flex: 0 0 auto;
			}

			/* Collapsible section pattern (palette + tint variation) */
			.${ROOT_CLASS}__section {
				background: var(--tps-panel-bg, rgba(127,127,127,0.06));
				border: 1px solid var(--border-default, rgba(127,127,127,0.12));
				border-radius: 8px;
				margin-bottom: 10px;
				overflow: hidden;
			}
			/* Header height: same in both collapsed and expanded states. */
			.${ROOT_CLASS}__section-header { min-height: 38px; }
			.${ROOT_CLASS}__section-summary-chips {
				display: flex; gap: 6px; flex-wrap: wrap;
				min-width: 0; overflow: hidden;
			}
			.${ROOT_CLASS}__apply-body {
				display: flex; flex-direction: column; gap: 20px;
				padding: 4px 0 4px;
			}
			.${ROOT_CLASS}__section-helper {
				margin: 0 0 2px;
				font-size: 12px;
				line-height: 1.45;
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}__target-group {
				display: flex;
				flex-direction: column;
				gap: 6px;
			}
			.${ROOT_CLASS}__highlighted-item {
				display: flex;
				flex-direction: column;
				gap: 8px;
			}
			.${ROOT_CLASS}__apply-divider {
				border-top: 1px solid var(--tps-border-subtle, color-mix(in srgb, currentColor 12%, transparent));
				margin: 6px 0 2px;
			}
			.${ROOT_CLASS}__focus-invert {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 6px 8px;
				font-size: 12px;
				cursor: pointer;
				opacity: 0.85;
			}
			.${ROOT_CLASS}__target-label {
				font-size: 11px;
				font-weight: 600;
				opacity: 0.7;
				text-transform: uppercase;
				letter-spacing: 0.04em;
			}
			.${ROOT_CLASS}__apply-row {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 12px;
				flex-wrap: wrap;
			}
			.${ROOT_CLASS}__tint-toggles {
				display: flex;
				align-items: center;
				gap: 4px;
				flex-wrap: wrap;
			}
			.${ROOT_CLASS}__tint-toggle {
				height: 28px;
				border: 1px solid transparent;
				background: transparent;
				color: inherit;
				padding: 0 10px;
				border-radius: 4px;
				cursor: pointer;
				font: inherit;
				font-size: 12px;
				opacity: 0.72;
			}
			.${ROOT_CLASS}__tint-toggle:hover:not(:disabled) {
				opacity: 1;
				background: var(--tps-bg-hover, rgba(127,127,127,0.1)));
				border-color: var(--tps-border, rgba(127,127,127,0.24));
			}
			.${ROOT_CLASS}__tint-toggle.is-active {
				opacity: 1;
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 15%, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				color: var(--tps-accent, currentColor);
				font-weight: 600;
			}
			.${ROOT_CLASS}__tint-toggle:disabled {
				cursor: default;
				opacity: 0.28;
			}
			.${ROOT_CLASS}__tint-inline {
				display: flex; flex-direction: column; gap: 10px;
				padding: 6px 0 2px;
			}
			.${ROOT_CLASS}__tint-inline-label {
				font-size: 11px; font-weight: 600; opacity: 0.7;
				letter-spacing: 0.02em;
			}
			.${ROOT_CLASS}__tint-hidden-hint {
				font-size: 11px; opacity: 0.45; font-style: italic;
				padding: 4px 0 2px;
			}
			.${ROOT_CLASS}__section-header {
				display: flex; align-items: center; gap: 10px;
				width: 100%;
				padding: 8px 12px;
				border: 0; background: transparent; color: inherit;
				font: inherit; text-align: left;
				cursor: pointer;
			}
			.${ROOT_CLASS}__section-header:hover { background: var(--tps-bg-hover, rgba(127,127,127,0.04)); }
			.${ROOT_CLASS}__section-chev { opacity: 0.5; font-size: 11px; flex: 0 0 auto; }
			.${ROOT_CLASS}__section-label {
				font-size: 11px; font-weight: 600; opacity: 0.7;
				text-transform: uppercase; letter-spacing: 0.04em;
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}__section-summary {
				flex: 1; min-width: 0;
				display: flex; align-items: center; gap: 10px;
				font-size: 11px; opacity: 0.8;
				overflow: hidden;
			}
			.${ROOT_CLASS}__section-summary-name { font-weight: 500; flex: 0 0 auto; }
			.${ROOT_CLASS}__section-summary-dots {
				display: flex; flex-wrap: nowrap; gap: 3px;
				overflow: hidden; min-width: 0;
			}
			.${ROOT_CLASS}__variation-summary {
				font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
				opacity: 0.55;
				padding: 1px 6px;
				border-radius: 4px;
			}
			.${ROOT_CLASS}__variation-summary.is-active {
				opacity: 0.95;
				background: color-mix(in srgb, var(--tps-accent, currentColor) 12%, transparent);
				color: var(--tps-accent, currentColor);
			}
			.${ROOT_CLASS}__section-body {
				padding: 4px 12px 12px;
				display: flex; flex-direction: column; gap: 8px;
				border-top: 1px solid var(--border-default, rgba(127,127,127,0.08));
			}
			.${ROOT_CLASS}__palette-body { display: flex; flex-direction: column; gap: 8px; }
			.${ROOT_CLASS}__variation-body {
				display: flex; flex-direction: column;
				gap: 8px;
				padding: 2px 2px 4px;
			}
			.${ROOT_CLASS}__variation-group {
				display: flex; flex-direction: column; gap: 4px;
				padding: 8px 0 10px;
				background: transparent;
				border: 0;
				border-top: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.08)));
				border-radius: 0;
			}
			.${ROOT_CLASS}__tint-inline .${ROOT_CLASS}__variation-group {
				padding-top: 2px;
				border-top: 0;
			}
			.${ROOT_CLASS}__variation-group-head {
				display: flex; align-items: center; gap: 12px;
				flex-wrap: wrap;
				padding-bottom: 4px;
				border-bottom: 1px solid var(--border-default, rgba(127,127,127,0.08));
				margin-bottom: 2px;
			}
			.${ROOT_CLASS}__tint-inline .${ROOT_CLASS}__variation-group-head {
				padding-bottom: 0;
				border-bottom: 0;
				margin-bottom: 0;
			}
			.${ROOT_CLASS}__variation-group-label {
				font-size: 12px; font-weight: 700; opacity: 0.85;
				flex: 0 0 auto;
			}

			.${ROOT_CLASS}__entry-variation {
				display: flex; flex-direction: column; gap: 6px;
				/* Match the picker's 10px horizontal inset so revealed controls
				   aren't flush against the panel wall. Border-top sits outside the
				   padding, so the divider still spans full width. */
				padding: 8px 10px;
				background: transparent;
				border: 0;
				border-top: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.08)));
				border-radius: 0;
				margin-top: 2px;
			}
			.${ROOT_CLASS}__entry-variation-label {
				font-size: 10px; font-weight: 600; opacity: 0.65;
				text-transform: uppercase; letter-spacing: 0.04em;
			}

			/* Legacy (kept for spacing of inner pieces) */
			.${ROOT_CLASS}__variation {
				display: flex; flex-direction: column; gap: 8px;
			}
			.${ROOT_CLASS}__variation-head {
				display: flex; align-items: baseline; flex-wrap: wrap; gap: 8px 14px;
			}
			.${ROOT_CLASS}__variation-label {
				font-size: 11px; font-weight: 600; opacity: 0.7;
				text-transform: uppercase; letter-spacing: 0.04em;
			}
			.${ROOT_CLASS}__variation-target {
				display: flex; align-items: center; gap: 8px;
				margin-top: 2px;
			}
			.${ROOT_CLASS}__variation-target-label {
				font-size: 10px; opacity: 0.65;
				text-transform: uppercase; letter-spacing: 0.04em;
			}
			.${ROOT_CLASS}__slider-row {
				display: grid;
				grid-template-columns: 90px 1fr 60px;
				align-items: center;
				gap: 12px;
				padding: 1px 0;
			}
			.${ROOT_CLASS}__slider-label {
				font-size: 11px; opacity: 0.7;
				text-transform: uppercase; letter-spacing: 0.04em;
			}
			.${ROOT_CLASS}__slider {
				width: 100%; height: 22px;
				appearance: none;
				background: transparent;
				outline: none;
				cursor: pointer;
				touch-action: pan-y;
			}
			.${ROOT_CLASS}__slider::-webkit-slider-runnable-track {
				height: 6px; border-radius: 3px;
				background: var(--tps-slider-track, color-mix(in srgb, currentColor 22%, transparent));
			}
			.${ROOT_CLASS}__slider::-webkit-slider-thumb {
				appearance: none; width: 18px; height: 18px;
				border-radius: 50%;
				background: var(--tps-accent, currentColor);
				border: 2px solid rgba(0,0,0,0.3); cursor: grab;
				margin-top: -6px;
				box-shadow: 0 1px 3px rgba(0,0,0,0.3);
			}
			.${ROOT_CLASS}__slider:active::-webkit-slider-thumb { cursor: grabbing; }
			.${ROOT_CLASS}__slider::-moz-range-track {
				height: 6px; border-radius: 3px;
				background: var(--tps-slider-track, color-mix(in srgb, currentColor 22%, transparent));
			}
			.${ROOT_CLASS}__slider::-moz-range-thumb {
				width: 18px; height: 18px;
				border-radius: 50%;
				background: var(--tps-accent, currentColor);
				border: 2px solid rgba(0,0,0,0.3); cursor: grab;
			}
			.${ROOT_CLASS}__slider-value {
				font-size: 11px;
				font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
				opacity: 0.8;
				text-align: right;
			}
			.${ROOT_CLASS}__variation-reset {
				align-self: flex-start;
				border: 1px solid rgba(127,127,127,0.2);
				background: transparent; color: inherit;
				padding: 4px 10px; border-radius: 4px;
				cursor: pointer; font-size: 11px;
			}
			.${ROOT_CLASS}__variation-reset:hover { background: rgba(127,127,127,0.1); }
			.${ROOT_CLASS}__tint-mode,
			.${ROOT_CLASS}__tint-shades {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 4px;
			}
			.${ROOT_CLASS}__tint-mode-btn {
				height: 28px;
				border: 1px solid transparent;
				background: transparent;
				color: inherit;
				padding: 0 10px;
				border-radius: 4px;
				cursor: pointer;
				font: inherit;
				font-size: 12px;
			}
			.${ROOT_CLASS}__tint-mode-btn:hover {
				background: var(--tps-bg-hover, rgba(127,127,127,0.1)));
				border-color: var(--tps-border, rgba(127,127,127,0.24));
			}
			.${ROOT_CLASS}__tint-mode-btn.is-active {
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 15%, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				color: var(--tps-accent, currentColor);
				font-weight: 600;
			}

			/* List */
			.${ROOT_CLASS}__list-section {
				display: flex;
				flex-direction: column;
				gap: 8px;
			}
			/* \u2500\u2500 Palette presets \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
			.${ROOT_CLASS}__preset-row {
				display: flex;
				flex-direction: column;
				gap: 8px;
			}
			.${ROOT_CLASS}__preset-head {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 10px;
			}
			.${ROOT_CLASS}__preset-head-right {
				display: inline-flex;
				align-items: center;
				gap: 12px;
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}__preset-clear {
				flex: 0 0 auto;
				height: 24px;
				padding: 0 10px;
				border: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.18)));
				border-radius: 999px;
				background: transparent;
				color: var(--tps-text-muted, rgba(127,127,127,0.8));
				font-size: 11px;
				font-weight: var(--tps-fw-medium, 500);
				cursor: pointer;
				transition: color var(--tps-dur-fast, 80ms) ease, border-color var(--tps-dur-fast, 80ms) ease;
			}
			.${ROOT_CLASS}__preset-clear:hover:not(:disabled) {
				color: var(--enum-red-fg, #dc2626);
				border-color: color-mix(in srgb, var(--enum-red-fg, #dc2626) 45%, transparent);
			}
			.${ROOT_CLASS}__preset-clear:disabled { opacity: 0.4; cursor: default; }
			.${ROOT_CLASS}__preset-animate {
				display: inline-flex;
				align-items: center;
				gap: 6px;
				flex: 0 0 auto;
				font-size: 11px;
				font-weight: var(--tps-fw-medium, 500);
				color: var(--tps-text-muted, rgba(127,127,127,0.8));
				cursor: pointer;
				user-select: none;
			}
			.${ROOT_CLASS}__preset-animate.is-disabled { opacity: 0.4; cursor: default; }
			.${ROOT_CLASS}__preset-animate.is-disabled .${ROOT_CLASS}__preset-animate-cb { cursor: default; }
			.${ROOT_CLASS}__preset-animate-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
			.${ROOT_CLASS}__anim-bar {
				display: flex;
				align-items: center;
				gap: 10px;
				padding: 8px 10px;
				border: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.18)));
				border-radius: var(--tps-radius-md, 8px);
				background: var(--tps-bg-hover, rgba(127,127,127,0.05));
			}
			.${ROOT_CLASS}__anim-bar-label {
				font-size: 11px;
				font-weight: var(--tps-fw-semibold, 600);
				text-transform: uppercase;
				letter-spacing: 0.04em;
				color: var(--tps-text-muted, rgba(127,127,127,0.75));
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}__anim-speed {
				flex: 1 1 auto;
				min-width: 0;
				accent-color: var(--tps-accent, currentColor);
				cursor: pointer;
			}
			.${ROOT_CLASS}__anim-speed-val {
				flex: 0 0 auto;
				min-width: 20px;
				text-align: right;
				font-size: 11px;
				font-weight: var(--tps-fw-semibold, 600);
				font-variant-numeric: tabular-nums;
				color: var(--tps-text-muted, rgba(127,127,127,0.8));
			}
			.${ROOT_CLASS}__preset-chip--clear .${ROOT_CLASS}__preset-chip-grad {
				width: 14px;
				height: 14px;
				border-radius: 50%;
			}
			.${ROOT_CLASS}__preset-chip--clear .${ROOT_CLASS}__preset-chip-name {
				color: var(--tps-text-muted, rgba(127,127,127,0.8));
			}
			.${ROOT_CLASS}__preset-chips {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 6px;
			}
			.${ROOT_CLASS}__preset-label {
				font-size: 11px;
				font-weight: var(--tps-fw-semibold, 600);
				letter-spacing: 0.04em;
				text-transform: uppercase;
				color: var(--tps-text-muted, rgba(127,127,127,0.75));
			}
			.${ROOT_CLASS}__preset-chip {
				display: inline-flex;
				align-items: center;
				gap: 6px;
				height: 26px;
				padding: 0 9px 0 5px;
				border: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.18)));
				border-radius: 999px;
				background: var(--tps-bg-input, rgba(127,127,127,0.08));
				color: var(--tps-text, inherit);
				font-size: 11px;
				font-weight: var(--tps-fw-medium, 500);
				cursor: pointer;
				transition: border-color var(--tps-dur-fast, 80ms) ease, background var(--tps-dur-fast, 80ms) ease;
			}
			.${ROOT_CLASS}__preset-chip:hover:not(:disabled) {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				background: var(--tps-bg-hover, rgba(127,127,127,0.05));
			}
			.${ROOT_CLASS}__preset-chip:disabled { opacity: 0.5; cursor: default; }
			.${ROOT_CLASS}__preset-chip.is-active {
				border-color: var(--tps-accent, currentColor);
				background: color-mix(in srgb, var(--tps-accent, currentColor) 12%, transparent);
			}
			.${ROOT_CLASS}__preset-chip-grad {
				width: 26px;
				height: 12px;
				border-radius: 3px;
				box-shadow: inset 0 0 0 1px rgba(127,127,127,0.18);
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}__preset-chip-name { line-height: 1; }
			.${ROOT_CLASS}__preset-bar {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 10px;
				padding: 8px 10px;
				border: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.18)));
				border-radius: var(--tps-radius-md, 8px);
				background: var(--tps-bg-hover, rgba(127,127,127,0.05));
			}
			.${ROOT_CLASS}__preset-info { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
			.${ROOT_CLASS}__preset-info-main { font-size: 12px; font-weight: var(--tps-fw-medium, 500); }
			.${ROOT_CLASS}__preset-info-warn { font-size: 11px; color: var(--enum-amber-fg, #b45309); }
			.${ROOT_CLASS}__preset-actions { display: flex; align-items: center; gap: 8px; flex: 0 0 auto; }
			.${ROOT_CLASS}__preset-cancel,
			.${ROOT_CLASS}__preset-save {
				height: 28px;
				padding: 0 12px;
				border-radius: var(--tps-radius-sm, 5px);
				font: inherit;
				font-size: 12px;
				font-weight: var(--tps-fw-semibold, 600);
				cursor: pointer;
				border: 1px solid transparent;
			}
			.${ROOT_CLASS}__preset-cancel {
				border-color: var(--tps-divider, var(--border-default, rgba(127,127,127,0.18)));
				background: transparent;
				color: var(--tps-text-muted, rgba(127,127,127,0.8));
			}
			.${ROOT_CLASS}__preset-cancel:hover { color: var(--tps-text, inherit); background: var(--tps-bg-input, rgba(127,127,127,0.08)); }
			.${ROOT_CLASS}__preset-save {
				border-color: color-mix(in srgb, var(--enum-green-fg, #16a34a) 55%, transparent);
				background: color-mix(in srgb, var(--enum-green-fg, #16a34a) 12%, transparent);
				color: var(--enum-green-fg, #16a34a);
			}
			.${ROOT_CLASS}__preset-save:hover:not(:disabled) {
				background: color-mix(in srgb, var(--enum-green-fg, #16a34a) 20%, transparent);
			}
			.${ROOT_CLASS}__preset-save:disabled { opacity: 0.5; cursor: default; }
			.${ROOT_CLASS}__row-select {
				flex: 0 0 auto;
				margin: 0 2px 0 0;
				cursor: pointer;
				accent-color: var(--tps-accent, currentColor);
			}
			.${ROOT_CLASS}__row.is-preview { cursor: pointer; }
			.${ROOT_CLASS}__row.is-preview .${ROOT_CLASS}__row-main {
				grid-template-columns: auto 18px minmax(0, 1fr) 28px;
			}
			.${ROOT_CLASS}__row.is-excluded { opacity: 0.45; }
			.${ROOT_CLASS}__row-color--static { pointer-events: none; }
			.${ROOT_CLASS}__list-toolbar {
				display: flex;
				align-items: center;
				gap: 10px;
				flex-wrap: wrap;
			}
			.${ROOT_CLASS}__refresh {
				flex: 0 0 auto;
				margin-left: auto;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 30px;
				height: 30px;
				padding: 0;
				border: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.18)));
				border-radius: var(--tps-radius-sm, 5px);
				background: var(--tps-bg-input, rgba(127,127,127,0.08));
				color: var(--tps-text-muted, rgba(127,127,127,0.75));
				cursor: pointer;
				transition: color var(--tps-dur-fast, 80ms) ease, border-color var(--tps-dur-fast, 80ms) ease, background var(--tps-dur-fast, 80ms) ease;
			}
			.${ROOT_CLASS}__refresh:hover {
				color: var(--tps-accent, currentColor);
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				background: var(--tps-bg-hover, rgba(127,127,127,0.04));
			}
			.${ROOT_CLASS}__refresh:focus-visible {
				outline: none;
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				box-shadow: 0 0 0 1px color-mix(in srgb, var(--tps-accent, currentColor) 25%, transparent);
			}
			.${ROOT_CLASS}__refresh-icon { font-size: 15px; line-height: 1; }
			.${ROOT_CLASS}__refresh.is-spinning .${ROOT_CLASS}__refresh-icon {
				animation: plg-cc-refresh-spin 0.55s var(--tps-ease-out, ease);
			}
			@keyframes plg-cc-refresh-spin {
				from { transform: rotate(0deg); }
				to { transform: rotate(360deg); }
			}
			.${ROOT_CLASS}__hide-separators {
				display: inline-flex;
				align-items: center;
				gap: 6px;
				flex: 0 0 auto;
				font-size: 11px;
				color: var(--tps-text-muted, rgba(127,127,127,0.75));
				cursor: pointer;
				user-select: none;
				white-space: nowrap;
			}
			.${ROOT_CLASS}__hide-separators-cb {
				margin: 0;
				cursor: pointer;
				accent-color: var(--tps-accent, currentColor);
			}
			.${ROOT_CLASS}__hide-separators-label {
				line-height: 1.2;
			}
			.${ROOT_CLASS}__collection-search {
				flex: 1 1 220px;
				min-width: 0;
				width: 100%;
				height: 30px;
				padding: 0 10px;
				border: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.18)));
				border-radius: var(--tps-radius-sm, 5px);
				background: var(--tps-bg-input, rgba(127,127,127,0.08));
				color: inherit;
				font: inherit;
				font-size: 12px;
				outline: none;
			}
			.${ROOT_CLASS}__collection-search::placeholder {
				color: var(--tps-text-muted, rgba(127,127,127,0.65));
			}
			.${ROOT_CLASS}__collection-search:focus {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				box-shadow: 0 0 0 1px color-mix(in srgb, var(--tps-accent, currentColor) 25%, transparent);
			}
			.${ROOT_CLASS}__list-fill {
				display: flex; flex-direction: column;
				margin: 0;
			}
			.${ROOT_CLASS}__row {
				display: flex; flex-direction: column;
				border-bottom: 1px solid var(--border-default, rgba(127,127,127,0.08));
			}
			.${ROOT_CLASS}__row:last-child { border-bottom: 0; }
			.${ROOT_CLASS}__row.is-expanded { background: var(--tps-bg-hover, rgba(127,127,127,0.04)); }

			.${ROOT_CLASS}__row-main {
				display: grid;
				grid-template-columns: 18px minmax(0, 1fr) 28px repeat(4, 30px);
				align-items: center;
				gap: 6px;
				padding: 9px 14px;
				cursor: pointer;
			}
			.${ROOT_CLASS}__row-main:hover {
				background: var(--tps-bg-hover, rgba(127,127,127,0.04));
			}
			.${ROOT_CLASS}__row-main:focus-visible {
				outline: none;
				box-shadow: inset 0 0 0 1px var(--tps-accent, currentColor);
			}

			.${ROOT_CLASS}__row-icon {
				width: 18px;
				height: 18px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				color: var(--text-muted, currentColor);
				font-size: 15px;
				line-height: 1;
				transition: color 0.08s ease, transform 0.08s ease, opacity 0.08s ease;
				justify-self: center;
				pointer-events: none;
				opacity: 0.9;
			}
			.${ROOT_CLASS}__row:hover .${ROOT_CLASS}__row-icon {
				color: var(--tps-accent, currentColor);
				transform: scale(1.08);
				opacity: 1;
			}
			.${ROOT_CLASS}__row.is-expanded .${ROOT_CLASS}__row-icon {
				opacity: 1;
			}
			.${ROOT_CLASS}__row-swatch {
				width: 16px; height: 16px; border-radius: 50%;
				display: block;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 8%, transparent));
				transition: transform 0.08s ease;
				justify-self: center;
				pointer-events: none;
			}
			.${ROOT_CLASS}__row:hover .${ROOT_CLASS}__row-swatch { transform: scale(1.18); }
			.${ROOT_CLASS}__row-swatch--none {
				background:
					linear-gradient(135deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%),
					rgba(127,127,127,0.18);
				color: rgba(127,127,127,0.7);
			}
			.${ROOT_CLASS}__row-name {
				min-width: 0;
				white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
				pointer-events: none;
			}
			.${ROOT_CLASS}__row-color {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 28px;
				height: 28px;
				border: 1px solid var(--border-default, rgba(127,127,127,0.18));
				background: transparent;
				color: inherit;
				border-radius: 6px;
				cursor: pointer;
				padding: 0;
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}__row-color:hover,
			.${ROOT_CLASS}__row-color.is-active {
				background: var(--tps-bg-hover, rgba(127,127,127,0.1));
				border-color: var(--tps-border, rgba(127,127,127,0.28));
			}
			.${ROOT_CLASS}__row-color .${ROOT_CLASS}__swatch-summary-dot {
				width: 16px;
				height: 16px;
			}
			.${ROOT_CLASS}__override-toggle {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 30px;
				height: 30px;
				padding: 0;
				border: 1px solid var(--tps-divider, rgba(127,127,127,0.18));
				border-radius: var(--tps-radius-sm, 5px);
				background: transparent;
				color: var(--tps-text-muted, inherit);
				font: inherit;
				cursor: pointer;
				opacity: 0.85;
				justify-self: center;
			}
			.${ROOT_CLASS}__override-toggle .ti {
				font-size: 14px;
				line-height: 1;
			}
			.${ROOT_CLASS}__override-toggle:hover {
				opacity: 1;
				background: var(--tps-bg-hover, rgba(127,127,127,0.1));
				color: var(--tps-text, inherit);
				border-color: var(--tps-border, rgba(127,127,127,0.28));
			}
			.${ROOT_CLASS}__override-toggle.is-active {
				opacity: 1;
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 15%, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				color: var(--tps-accent, currentColor);
			}

			/* Inline expanded section under a row */
			.${ROOT_CLASS}__expanded {
				padding: 4px 10px 8px 10px;
				display: flex; flex-direction: column; gap: 10px;
				min-width: 0;
				overflow: visible;
			}

			/* Swatch row (inside expanded) */
			.${ROOT_CLASS}__swatch-wrapper {
				width: 100%;
				min-width: 0;
				overflow: hidden;
			}
			.${ROOT_CLASS}__swatch-wrapper.is-compact,
			.${ROOT_CLASS}__swatch-wrapper.is-open {
				overflow: visible;
			}
			.${ROOT_CLASS}__swatch-wrapper:not(.is-compact) .${ROOT_CLASS}__swatches {
				flex-wrap: nowrap;
			}
			.${ROOT_CLASS}__swatches {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				align-content: flex-start;
				gap: 5px;
				width: 100%;
				max-width: 100%;
				min-width: 0;
				overflow: visible;
				padding: 2px 0;
			}
			.${ROOT_CLASS}__swatch {
				flex: 0 0 18px;
			}
			.${ROOT_CLASS}__swatch-summary {
				display: inline-flex; align-items: center; gap: 8px;
				border: 1px solid var(--border-default, rgba(127,127,127,0.18));
				background: transparent; color: inherit;
				padding: 5px 10px; border-radius: 4px;
				cursor: pointer;
				font-size: 12px;
			}
			.${ROOT_CLASS}__swatch-summary:hover { background: var(--tps-bg-hover, rgba(127,127,127,0.1)); }
			.${ROOT_CLASS}__swatch-summary-dot {
				width: 14px; height: 14px; border-radius: 50%;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 8%, transparent));
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}__swatch-summary-dot--none {
				background:
					linear-gradient(135deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%),
					rgba(127,127,127,0.18);
				color: rgba(127,127,127,0.7);
			}
			.${ROOT_CLASS}__swatch-summary-label { flex: 0 1 auto; }
			.${ROOT_CLASS}__swatch-summary-chev { opacity: 0.5; font-size: 11px; }
			.${ROOT_CLASS}__swatches--dropdown {
				display: flex;
				flex-wrap: wrap !important;
				margin-top: 6px;
				padding: 8px 0 0;
				width: 100%;
				max-width: 100%;
				min-width: 0;
				background: transparent;
				border-top: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.12)));
				border-radius: 0;
				overflow: visible;
			}
			.${ROOT_CLASS}__swatch {
				width: 18px; height: 18px; border-radius: 50%;
				border: 0; padding: 0; cursor: pointer; outline: none;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 6%, transparent));
				opacity: 0.42;
				transition: transform 0.08s ease, box-shadow 0.08s ease, opacity 0.08s ease;
			}
			.${ROOT_CLASS}__swatch:hover { transform: scale(1.1); opacity: 0.78; }
			.${ROOT_CLASS}__swatch.is-active {
				opacity: 1;
				box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px rgba(0,0,0,0.45);
			}
			.${ROOT_CLASS}__swatch--none {
				background:
					linear-gradient(135deg, transparent calc(50% - 1px), currentColor calc(50% - 1px), currentColor calc(50% + 1px), transparent calc(50% + 1px)),
					rgba(127,127,127,0.18);
				color: rgba(127,127,127,0.7);
			}
			.${ROOT_CLASS}__swatch--custom {
				background: linear-gradient(135deg, #ffffff 50%, #111111 50%);
			}
			@media (max-width: 760px) {
				.${ROOT_CLASS}__row-main {
					grid-template-columns: 18px minmax(0, 1fr) 28px repeat(4, 28px);
					gap: 4px;
					padding: 9px 10px;
				}
				.${ROOT_CLASS}__override-toggle {
					width: 28px;
					height: 28px;
				}
			}

			/* Custom hex panel */
			.${ROOT_CLASS}__custom-panel {
				display: grid;
				grid-template-columns: minmax(150px, 0.75fr) minmax(180px, 1fr);
				gap: 12px;
				align-items: start;
				padding: 8px 0 0; border-radius: 0;
				background: transparent;
				border-top: 1px solid var(--tps-divider, rgba(127,127,127,0.12));
			}
			.${ROOT_CLASS}__custom-left,
			.${ROOT_CLASS}__custom-right {
				display: flex;
				flex-direction: column;
				gap: 8px;
				min-width: 0;
			}
			.${ROOT_CLASS}__sv {
				position: relative; width: 100%; aspect-ratio: 1.35 / 1;
				max-height: 150px;
				border-radius: 6px;
				background:
					linear-gradient(to top, #000, transparent),
					linear-gradient(to right, #fff, hsl(var(--hue, 0), 100%, 50%));
				cursor: crosshair; touch-action: none; user-select: none;
			}
			.${ROOT_CLASS}__sv-thumb {
				position: absolute; width: 12px; height: 12px;
				border: 2px solid #fff; border-radius: 50%;
				transform: translate(-50%, -50%); pointer-events: none;
				box-shadow: 0 0 0 1px rgba(0,0,0,0.6);
			}
			.${ROOT_CLASS}__hue {
				width: 100%; height: 10px; appearance: none;
				background: linear-gradient(to right,
					#f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
				border-radius: 6px; outline: none;
			}
			.${ROOT_CLASS}__hue::-webkit-slider-thumb {
				appearance: none; width: 14px; height: 14px;
				border-radius: 50%; background: #fff;
				border: 2px solid rgba(0,0,0,0.6); cursor: pointer;
			}
			.${ROOT_CLASS}__formats {
				display: inline-flex; align-self: flex-start;
				background: rgba(127,127,127,0.12); border-radius: 6px; padding: 2px;
			}
			.${ROOT_CLASS}__format-btn {
				border: 0; background: transparent; color: inherit;
				padding: 3px 8px; border-radius: 4px;
				cursor: pointer; font-size: 11px; letter-spacing: 0.04em;
			}
			.${ROOT_CLASS}__format-btn.is-active {
				background: rgba(127,127,127,0.24); font-weight: 600;
			}
			.${ROOT_CLASS}__inputs { display: flex; gap: 6px; align-items: center; }
			.${ROOT_CLASS}__hex-input,
			.${ROOT_CLASS}__num input {
				background: rgba(127,127,127,0.12);
				border: 1px solid rgba(127,127,127,0.18);
				color: inherit;
				padding: 5px 7px; border-radius: 4px;
				font-size: 12px;
				font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
				outline: none;
			}
			.${ROOT_CLASS}__hex-input { flex: 1; }
			.${ROOT_CLASS}__num { display: flex; flex-direction: column; align-items: center; gap: 2px; flex: 1; }
			.${ROOT_CLASS}__num input { width: 100%; text-align: center; }
			.${ROOT_CLASS}__num-label,
			.${ROOT_CLASS}__input-label { font-size: 10px; opacity: 0.6; letter-spacing: 0.04em; }
			.${ROOT_CLASS}__random {
				align-self: flex-start;
				background: rgba(127,127,127,0.12);
				border: 1px solid rgba(127,127,127,0.18);
				color: inherit;
				padding: 4px 9px; border-radius: 4px;
				font-size: 12px; cursor: pointer;
			}
			.${ROOT_CLASS}__random:hover { background: rgba(127,127,127,0.2); }
			.${ROOT_CLASS}__previews { display: flex; gap: 8px; }
			.${ROOT_CLASS}__preview {
				flex: 1; border-radius: 6px; padding: 8px;
				display: flex; flex-direction: column; gap: 6px; align-items: flex-start;
			}
			.${ROOT_CLASS}__preview--light { background: #ffffff; color: #1f2937; }
			.${ROOT_CLASS}__preview--dark  { background: #18181b; color: #e5e7eb; }
			.${ROOT_CLASS}__preview-head { font-size: 11px; opacity: 0.65; }
			.${ROOT_CLASS}__preview-item {
				display: inline-flex;
				align-items: center;
				gap: 6px;
				max-width: 100%;
				font-size: 12px;
				padding: 5px 8px;
				border-radius: 4px;
				font-weight: 500;
			}
			.${ROOT_CLASS}__preview-icon {
				font-size: 14px;
				line-height: 1;
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}__preview-name {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.${ROOT_CLASS}__actions {
				display: flex; gap: 6px; justify-content: flex-end;
			}
			.${ROOT_CLASS}__btn {
				border: 0; padding: 5px 12px; border-radius: 4px;
				font-size: 12px; cursor: pointer;
			}
			.${ROOT_CLASS}__btn--ghost { background: transparent; color: inherit; opacity: 0.75; }
			.${ROOT_CLASS}__btn--primary {
				background: color-mix(in srgb, var(--tps-accent, currentColor) 18%, transparent);
				color: var(--tps-accent, currentColor); font-weight: 600;
			}
			.${ROOT_CLASS}__btn--primary:hover { background: color-mix(in srgb, var(--tps-accent, currentColor) 30%, transparent); }
			@media (max-width: 560px) {
				.${ROOT_CLASS}__custom-panel {
					grid-template-columns: 1fr;
				}
			}

			.${ROOT_CLASS}__seg {
				display: flex;
				flex-wrap: wrap;
				gap: 4px;
				background: transparent;
				border-radius: 0; padding: 0;
			}
			.${ROOT_CLASS}__seg-btn {
				border: 1px solid transparent; background: transparent; color: inherit;
				padding: 5px 10px; border-radius: 4px;
				cursor: pointer; font-size: 12px;
				transition: background-color 0.08s ease, border-color 0.08s ease, color 0.08s ease, opacity 0.08s ease;
			}
			.${ROOT_CLASS}__seg-btn:hover {
				background: var(--tps-bg-hover, rgba(127,127,127,0.1)));
				border-color: var(--tps-border, rgba(127,127,127,0.24));
				color: var(--tps-text, var(--text-default, currentColor));
			}
			.${ROOT_CLASS}__seg-btn.is-active {
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 15%, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				color: var(--tps-accent, currentColor);
				font-weight: 600;
			}
		`);
    }
  };
  function el2(tag, cls = "", text = "") {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }
  __name(el2, "el");
  function clampNum(v, min, max, fallback) {
    const n = typeof v === "number" ? v : Number(v);
    if (!Number.isFinite(n)) return fallback;
    return Math.max(min, Math.min(max, n));
  }
  __name(clampNum, "clampNum");
  function nearestTailwindFamily(hex) {
    const normalized = normalizeHex(hex);
    if (!normalized) return null;
    const [tr, tg, tb] = hexToRgb2(normalized);
    let bestFamily = (
      /** @type {string | null} */
      null
    );
    let bestScore = Number.POSITIVE_INFINITY;
    for (const [family, shades] of Object.entries(TAILWIND_FAMILIES)) {
      for (const shadeHex of Object.values(shades)) {
        if (shadeHex.toLowerCase() === normalized) return family;
        const [r, g, b] = hexToRgb2(shadeHex);
        const score = (tr - r) ** 2 + (tg - g) ** 2 + (tb - b) ** 2;
        if (score < bestScore) {
          bestScore = score;
          bestFamily = family;
        }
      }
    }
    return bestFamily;
  }
  __name(nearestTailwindFamily, "nearestTailwindFamily");
  function applyTailwindPrimitive(hex, shade) {
    const family = nearestTailwindFamily(hex);
    if (!family) return hex;
    const families = (
      /** @type {Record<string, Record<number, string>>} */
      TAILWIND_FAMILIES
    );
    return families[family]?.[normalizeTailwindShade(shade)] || hex;
  }
  __name(applyTailwindPrimitive, "applyTailwindPrimitive");
  function applyVariation(hex, v) {
    if (!isHex2(hex)) return hex;
    if (v && v.mode === "tailwind") return applyTailwindPrimitive(hex, v.tailwindShade ?? 500);
    if (!v || v.hueShift === 0 && v.satDelta === 0 && v.lightDelta === 0) return hex;
    const [r, g, b] = hexToRgb2(hex);
    let [h2, s, l] = rgbToHsl(r, g, b);
    h2 = ((h2 + v.hueShift) % 360 + 360) % 360;
    s = Math.max(0, Math.min(100, s + v.satDelta));
    l = Math.max(0, Math.min(100, l + v.lightDelta));
    const [nr, ng, nb] = hslToRgb(h2, s, l);
    return rgbToHex(nr, ng, nb);
  }
  __name(applyVariation, "applyVariation");
  function isHex2(s) {
    return typeof s === "string" && /^#[0-9a-f]{6}$/i.test(s);
  }
  __name(isHex2, "isHex");
  function normalizeHex(input) {
    if (typeof input !== "string") return null;
    let s = input.trim().toLowerCase();
    if (!s.startsWith("#")) s = "#" + s;
    if (/^#[0-9a-f]{3}$/.test(s)) {
      s = "#" + s.slice(1).split("").map((c) => c + c).join("");
    }
    return /^#[0-9a-f]{6}$/.test(s) ? s : null;
  }
  __name(normalizeHex, "normalizeHex");
  function hexToRgb2(hex) {
    const h2 = normalizeHex(hex) || "#000000";
    return [parseInt(h2.slice(1, 3), 16), parseInt(h2.slice(3, 5), 16), parseInt(h2.slice(5, 7), 16)];
  }
  __name(hexToRgb2, "hexToRgb");
  function rgbToHex(r, g, b) {
    const t = /* @__PURE__ */ __name((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0"), "t");
    return "#" + t(r) + t(g) + t(b);
  }
  __name(rgbToHex, "rgbToHex");
  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    let h2 = 0, s = 0;
    const l = (mx + mn) / 2;
    if (mx !== mn) {
      const d = mx - mn;
      s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
      if (mx === r) h2 = (g - b) / d + (g < b ? 6 : 0);
      else if (mx === g) h2 = (b - r) / d + 2;
      else h2 = (r - g) / d + 4;
      h2 *= 60;
    }
    return [Math.round(h2), Math.round(s * 100), Math.round(l * 100)];
  }
  __name(rgbToHsl, "rgbToHsl");
  function hslToRgb(h2, s, l) {
    h2 = (h2 % 360 + 360) % 360 / 360;
    s /= 100;
    l /= 100;
    if (s === 0) {
      const v = l * 255;
      return [v, v, v];
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const f = /* @__PURE__ */ __name((t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }, "f");
    return [f(h2 + 1 / 3) * 255, f(h2) * 255, f(h2 - 1 / 3) * 255];
  }
  __name(hslToRgb, "hslToRgb");
  function migrateHighlightedItemMode(raw) {
    if (!raw || typeof raw !== "object") return "auto";
    const src = (
      /** @type {any} */
      raw
    );
    if (src.highlightedItemMode != null) return normalizeRowStateMode(src.highlightedItemMode);
    const focused = normalizeRowStateMode(src.focusedItemMode ?? src.selectedFocusMode);
    const active = normalizeRowStateMode(src.activeItemMode ?? "auto");
    if (focused !== "none") return focused;
    if (active !== "none") return active;
    return "auto";
  }
  __name(migrateHighlightedItemMode, "migrateHighlightedItemMode");
  function migrateHighlightedTintShade(raw) {
    if (!raw || typeof raw !== "object") return 500;
    const src = (
      /** @type {any} */
      raw
    );
    if (src.highlightedTintShade != null) return normalizeRowTintShade(src.highlightedTintShade);
    if (src.focusedTintShade != null) return normalizeRowTintShade(src.focusedTintShade);
    if (src.activeTintShade != null) return normalizeRowTintShade(src.activeTintShade);
    if (src.selectedTintShade != null) return normalizeRowTintShade(src.selectedTintShade);
    if (src.selectedVariation?.tailwindShade != null) return normalizeRowTintShade(src.selectedVariation.tailwindShade);
    const color = src.selectedColor;
    if (typeof color === "string") {
      const flip = color.match(/^twflip:[a-z]+:(\d+)$/i);
      if (flip && TW_SHADES[Number(flip[1])] != null) return TW_SHADES[Number(flip[1])];
    }
    return 500;
  }
  __name(migrateHighlightedTintShade, "migrateHighlightedTintShade");
  function migrateHighlightedTintInvert(raw) {
    if (!raw || typeof raw !== "object") return false;
    const src = (
      /** @type {any} */
      raw
    );
    return src.highlightedTintInvert === true || src.focusedTintInvert === true || src.activeTintInvert === true || src.selectedTintInvert === true || src.selectedTextMode === "custom" && src.selectedColor && String(src.selectedColor).startsWith("twflip:");
  }
  __name(migrateHighlightedTintInvert, "migrateHighlightedTintInvert");
  function normalizeRowStateMode(v) {
    return v === "none" || v === "auto" || v === "tint" ? v : "auto";
  }
  __name(normalizeRowStateMode, "normalizeRowStateMode");
  function normalizeRowTintShade(v) {
    const n = Number(v);
    return TW_SHADES.includes(n) ? n : 500;
  }
  __name(normalizeRowTintShade, "normalizeRowTintShade");
  function twShadeLabelToIdx(shadeLabel) {
    const i = TW_SHADES.indexOf(normalizeRowTintShade(shadeLabel));
    return i >= 0 ? i : TW_SHADES.indexOf(500);
  }
  __name(twShadeLabelToIdx, "twShadeLabelToIdx");
  function shiftTailwindTint(hex, shadeLabel, invert, isDark) {
    const near = nearestTailwind(hex);
    if (!near) return hex;
    let shadeIdx = twShadeLabelToIdx(shadeLabel);
    if (invert) shadeIdx = isDark ? shadeIdx : mirrorShadeIdx(shadeIdx);
    const family = near.family;
    const shades = TAILWIND[family];
    return shades && shades[shadeIdx] ? shades[shadeIdx] : hex;
  }
  __name(shiftTailwindTint, "shiftTailwindTint");
  function appendStateForeground(rules, rowSel, fg) {
    const textSel = `${rowSel}, ${rowSel} .sidebar-item-title, ${rowSel} .sidebar-item-name, ${rowSel} .sidebar-item-text, ${rowSel} .sidebar-item-label`;
    const iconSel = `${rowSel} .sidebar-item-icon, ${rowSel} .sidebar-item-icon .ti, ${rowSel} .sidebar-item-icon .ti::before, ${rowSel} .sidebar-item-icon *, ${rowSel} .ti, ${rowSel} svg, ${rowSel} svg *`;
    rules.push(
      `${textSel} { color: ${fg} !important; -webkit-text-fill-color: ${fg} !important; }`,
      `${iconSel} { color: ${fg} !important; fill: ${fg} !important; -webkit-text-fill-color: ${fg} !important; }`
    );
  }
  __name(appendStateForeground, "appendStateForeground");
  function withHighlightedRowGate(sel) {
    return sel.split(",").flatMap((part) => {
      const t = part.trim();
      return [
        `${t}${THYMER_ROW_FOCUSED}`,
        `${t}:has(${THYMER_ROW_FOCUSED})`,
        `${t}[${ACTIVE_ATTR}="1"]`
      ];
    }).join(", ");
  }
  __name(withHighlightedRowGate, "withHighlightedRowGate");
  function textOnHex(hex) {
    const [r, g, b] = hexToRgb2(hex);
    const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return l > 0.6 ? "rgba(0,0,0,0.82)" : "rgba(255,255,255,0.94)";
  }
  __name(textOnHex, "textOnHex");
  function withAlpha(hex, a) {
    const [r, g, b] = hexToRgb2(hex);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  __name(withAlpha, "withAlpha");
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
