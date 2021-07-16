import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #root{
    height: 100%
  }
  
  :root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: var(--bs-font-sans-serif);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }
  
  hr:not([size]) {
    height: 1px;
  }
  
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  
  h1, .h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  
  h2, .h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  
  h3, .h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
  
  h4, .h4 {
    font-size: calc(1.275rem + 0.3vw);
  }
  
  h5, .h5 {
    font-size: 1.25rem;
  }
  
  h6, .h6 {
    font-size: 1rem;
  }
  
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  abbr[title],
  abbr[data-bs-original-title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }
  
  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }
  
  ol,
  ul {
    padding-left: 2rem;
  }
  
  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }
  
  dt {
    font-weight: 700;
  }
  
  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  
  blockquote {
    margin: 0 0 1rem;
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  small, .small {
    font-size: 0.875em;
  }
  
  mark, .mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }
  
  sub,
  sup {
    position: relative;
    font-size: 0.75em;
    line-height: 0;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  a {
    color: #0d6efd;
    text-decoration: underline;
  }
  a:hover {
    color: #0a58ca;
  }
  
  a:not([href]):not([class]), a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }
  
  pre,
  code,
  kbd,
  samp {
    font-family: var(--bs-font-monospace);
    font-size: 1em;
    direction: ltr /* rtl:ignore */;
    unicode-bidi: bidi-override;
  }
  
  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
  }
  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }
  
  code {
    font-size: 0.875em;
    color: #d63384;
    word-wrap: break-word;
  }
  a > code {
    color: inherit;
  }
  
  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }
  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
  }
  
  figure {
    margin: 0 0 1rem;
  }
  
  img,
  svg {
    vertical-align: middle;
  }
  
  table {
    caption-side: bottom;
    border-collapse: collapse;
  }
  
  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
  }
  
  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }
  
  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }
  
  label {
    display: inline-block;
  }
  
  button {
    border-radius: 0;
  }
  
  button:focus:not(:focus-visible) {
    outline: 0;
  }
  
  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  
  button,
  select {
    text-transform: none;
  }
  
  [role=button] {
    cursor: pointer;
  }
  
  select {
    word-wrap: normal;
  }
  select:disabled {
    opacity: 1;
  }
  
  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }
  
  button,
  [type=button],
  [type=reset],
  [type=submit] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type=button]:not(:disabled),
  [type=reset]:not(:disabled),
  [type=submit]:not(:disabled) {
    cursor: pointer;
  }
  
  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  
  textarea {
    resize: vertical;
  }
  
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  
  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
  }

  legend + * {
    clear: left;
  }
  
  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }
  
  ::-webkit-inner-spin-button {
    height: auto;
  }
  
  [type=search] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }
  
  /* rtl:raw:
  [type="tel"],
  [type="url"],
  [type="email"],
  [type="number"] {
    direction: ltr;
  }
  */
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  
  ::file-selector-button {
    font: inherit;
  }
  
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
  
  output {
    display: inline-block;
  }
  
  iframe {
    border: 0;
  }
  
  summary {
    display: list-item;
    cursor: pointer;
  }
  
  progress {
    vertical-align: baseline;
  }
  
  [hidden] {
    display: none !important;
  }
  
  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }
  
  .display-1 {
    font-size: calc(1.625rem + 4.5vw);
    font-weight: 300;
    line-height: 1.2;
  }
  
  .display-2 {
    font-size: calc(1.575rem + 3.9vw);
    font-weight: 300;
    line-height: 1.2;
  }
  
  .display-3 {
    font-size: calc(1.525rem + 3.3vw);
    font-weight: 300;
    line-height: 1.2;
  }
  
  .display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    line-height: 1.2;
  }
  
  .display-5 {
    font-size: calc(1.425rem + 2.1vw);
    font-weight: 300;
    line-height: 1.2;
  }
  
  .display-6 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 300;
    line-height: 1.2;
  }
  
  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }
  
  .list-inline {
    padding-left: 0;
    list-style: none;
  }
  
  .list-inline-item {
    display: inline-block;
  }
  .list-inline-item:not(:last-child) {
    margin-right: 0.5rem;
  }
  
  .initialism {
    font-size: 0.875em;
    text-transform: uppercase;
  }
  
  .blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  .blockquote > :last-child {
    margin-bottom: 0;
  }
  
  .blockquote-footer {
    margin-top: -1rem;
    margin-bottom: 1rem;
    font-size: 0.875em;
    color: #6c757d;
  }
  .blockquote-footer::before {
    content: "— ";
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  
  .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
  }
  
  .figure {
    display: inline-block;
  }
  
  .figure-img {
    margin-bottom: 0.5rem;
    line-height: 1;
  }
  
  .figure-caption {
    font-size: 0.875em;
    color: #6c757d;
  }
  
  .container,
  .container-fluid,
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
  }
  
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) * -.5);
    margin-left: calc(var(--bs-gutter-x) * -.5);
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
  }
  
  .col {
    flex: 1 0 0%;
  }
  
  .row-cols-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  
  .row-cols-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  
  .row-cols-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  
  .row-cols-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  
  .row-cols-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  
  .row-cols-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  
  .row-cols-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  
  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }
  
  .col-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  
  .col-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  
  .col-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  
  .col-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  
  .col-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  
  .col-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  
  .col-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  
  .col-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  
  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  
  .col-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  
  .col-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  
  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  
  .offset-1 {
    margin-left: 8.33333333%;
  }
  
  .offset-2 {
    margin-left: 16.66666667%;
  }
  
  .offset-3 {
    margin-left: 25%;
  }
  
  .offset-4 {
    margin-left: 33.33333333%;
  }
  
  .offset-5 {
    margin-left: 41.66666667%;
  }
  
  .offset-6 {
    margin-left: 50%;
  }
  
  .offset-7 {
    margin-left: 58.33333333%;
  }
  
  .offset-8 {
    margin-left: 66.66666667%;
  }
  
  .offset-9 {
    margin-left: 75%;
  }
  
  .offset-10 {
    margin-left: 83.33333333%;
  }
  
  .offset-11 {
    margin-left: 91.66666667%;
  }
  
  .g-0,
  .gx-0 {
    --bs-gutter-x: 0;
  }
  
  .g-0,
  .gy-0 {
    --bs-gutter-y: 0;
  }
  
  .g-1,
  .gx-1 {
    --bs-gutter-x: 0.25rem;
  }
  
  .g-1,
  .gy-1 {
    --bs-gutter-y: 0.25rem;
  }
  
  .g-2,
  .gx-2 {
    --bs-gutter-x: 0.5rem;
  }
  
  .g-2,
  .gy-2 {
    --bs-gutter-y: 0.5rem;
  }
  
  .g-3,
  .gx-3 {
    --bs-gutter-x: 1rem;
  }
  
  .g-3,
  .gy-3 {
    --bs-gutter-y: 1rem;
  }
  
  .g-4,
  .gx-4 {
    --bs-gutter-x: 1.5rem;
  }
  
  .g-4,
  .gy-4 {
    --bs-gutter-y: 1.5rem;
  }
  
  .g-5,
  .gx-5 {
    --bs-gutter-x: 3rem;
  }
  
  .g-5,
  .gy-5 {
    --bs-gutter-y: 3rem;
  }
  
  .table {
    --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: #212529;
    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --bs-table-active-color: #212529;
    --bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --bs-table-hover-color: #212529;
    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-color: #dee2e6;
  }
  .table > :not(caption) > * > * {
    padding: 0.5rem 0.5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
  }
  .table > tbody {
    vertical-align: inherit;
  }
  .table > thead {
    vertical-align: bottom;
  }
  .table > :not(:last-child) > :last-child > * {
    border-bottom-color: currentColor;
  }
  
  .caption-top {
    caption-side: top;
  }
  
  .table-sm > :not(caption) > * > * {
    padding: 0.25rem 0.25rem;
  }
  
  .table-bordered > :not(caption) > * {
    border-width: 1px 0;
  }
  .table-bordered > :not(caption) > * > * {
    border-width: 0 1px;
  }
  
  .table-borderless > :not(caption) > * > * {
    border-bottom-width: 0;
  }
  
  .table-striped > tbody > tr:nth-of-type(odd) {
    --bs-table-accent-bg: var(--bs-table-striped-bg);
    color: var(--bs-table-striped-color);
  }
  
  .table-active {
    --bs-table-accent-bg: var(--bs-table-active-bg);
    color: var(--bs-table-active-color);
  }
  
  .table-hover > tbody > tr:hover {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: var(--bs-table-hover-color);
  }
  
  .table-primary {
    --bs-table-bg: #cfe2ff;
    --bs-table-striped-bg: #c5d7f2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bacbe6;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfd1ec;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #bacbe6;
  }
  
  .table-secondary {
    --bs-table-bg: #e2e3e5;
    --bs-table-striped-bg: #d7d8da;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #cbccce;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #d1d2d4;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #cbccce;
  }
  
  .table-success {
    --bs-table-bg: #d1e7dd;
    --bs-table-striped-bg: #c7dbd2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bcd0c7;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #c1d6cc;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #bcd0c7;
  }
  
  .table-info {
    --bs-table-bg: #cff4fc;
    --bs-table-striped-bg: #c5e8ef;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #badce3;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfe2e9;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #badce3;
  }
  
  .table-warning {
    --bs-table-bg: #fff3cd;
    --bs-table-striped-bg: #f2e7c3;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #e6dbb9;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #ece1be;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #e6dbb9;
  }
  
  .table-danger {
    --bs-table-bg: #f8d7da;
    --bs-table-striped-bg: #eccccf;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfc2c4;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5c7ca;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #dfc2c4;
  }
  
  .table-light {
    --bs-table-bg: #f8f9fa;
    --bs-table-striped-bg: #ecedee;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfe0e1;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5e6e7;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #dfe0e1;
  }
  
  .table-dark {
    --bs-table-bg: #212529;
    --bs-table-striped-bg: #2c3034;
    --bs-table-striped-color: #fff;
    --bs-table-active-bg: #373b3e;
    --bs-table-active-color: #fff;
    --bs-table-hover-bg: #323539;
    --bs-table-hover-color: #fff;
    color: #fff;
    border-color: #373b3e;
  }
  
  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .form-label {
    margin-bottom: 0.5rem;
  }
  
  .col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
  }
  
  .col-form-label-lg {
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.25rem;
  }
  
  .col-form-label-sm {
    padding-top: calc(0.25rem + 1px);
    padding-bottom: calc(0.25rem + 1px);
    font-size: 0.875rem;
  }
  
  .form-text {
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #6c757d;
  }
  
  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .form-control[type=file] {
    overflow: hidden;
  }
  .form-control[type=file]:not(:disabled):not([readonly]) {
    cursor: pointer;
  }
  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-control::-webkit-date-and-time-value {
    height: 1.5em;
  }
  .form-control::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control::placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control:disabled, .form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
  }
  .form-control::file-selector-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: #dde0e3;
  }
  .form-control::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3;
  }
  
  .form-control-plaintext {
    display: block;
    width: 100%;
    padding: 0.375rem 0;
    margin-bottom: 0;
    line-height: 1.5;
    color: #212529;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
  }
  .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
    padding-right: 0;
    padding-left: 0;
  }
  
  .form-control-sm {
    min-height: calc(1.5em + (0.5rem + 2px));
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }
  .form-control-sm::file-selector-button {
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    -webkit-margin-end: 0.5rem;
    margin-inline-end: 0.5rem;
  }
  .form-control-sm::-webkit-file-upload-button {
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    -webkit-margin-end: 0.5rem;
    margin-inline-end: 0.5rem;
  }
  
  .form-control-lg {
    min-height: calc(1.5em + (1rem + 2px));
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }
  .form-control-lg::file-selector-button {
    padding: 0.5rem 1rem;
    margin: -0.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem;
  }
  .form-control-lg::-webkit-file-upload-button {
    padding: 0.5rem 1rem;
    margin: -0.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem;
  }
  
  textarea.form-control {
    min-height: calc(1.5em + (0.75rem + 2px));
  }
  textarea.form-control-sm {
    min-height: calc(1.5em + (0.5rem + 2px));
  }
  textarea.form-control-lg {
    min-height: calc(1.5em + (1rem + 2px));
  }
  
  .form-control-color {
    max-width: 3rem;
    height: auto;
    padding: 0.375rem;
  }
  .form-control-color:not(:disabled):not([readonly]) {
    cursor: pointer;
  }
  .form-control-color::-moz-color-swatch {
    height: 1.5em;
    border-radius: 0.25rem;
  }
  .form-control-color::-webkit-color-swatch {
    height: 1.5em;
    border-radius: 0.25rem;
  }
  
  .form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  
  .form-select:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-select[multiple], .form-select[size]:not([size="1"]) {
    padding-right: 0.75rem;
    background-image: none;
  }
  .form-select:disabled {
    background-color: #e9ecef;
  }
  .form-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #212529;
  }
  
  .form-select-sm {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    font-size: 0.875rem;
  }
  
  .form-select-lg {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    font-size: 1.25rem;
  }
  
  .form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
  }
  .form-check .form-check-input {
    float: left;
    margin-left: -1.5em;
  }
  
  .form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }
  .form-check-input[type=checkbox] {
    border-radius: 0.25em;
  }
  .form-check-input[type=radio] {
    border-radius: 50%;
  }
  .form-check-input:active {
    filter: brightness(90%);
  }
  .form-check-input:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .form-check-input:checked[type=checkbox] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }
  .form-check-input:checked[type=radio] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
  }
  .form-check-input[type=checkbox]:indeterminate {
    background-color: #0d6efd;
    border-color: #0d6efd;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }
  .form-check-input:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
  }
  .form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
    opacity: 0.5;
  }
  
  .form-switch {
    padding-left: 2.5em;
  }
  .form-switch .form-check-input {
    width: 2em;
    margin-left: -2.5em;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
    background-position: left center;
    border-radius: 2em;
    transition: background-position 0.15s ease-in-out;
  }
  
  .form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
  }
  .form-switch .form-check-input:checked {
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }
  
  .form-check-inline {
    display: inline-block;
    margin-right: 1rem;
  }
  
  .btn-check {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }
  .btn-check[disabled] + .btn, .btn-check:disabled + .btn {
    pointer-events: none;
    filter: none;
    opacity: 0.65;
  }
  
  .form-range {
    width: 100%;
    height: 1.5rem;
    padding: 0;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .form-range:focus {
    outline: 0;
  }
  .form-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-range::-moz-focus-outer {
    border: 0;
  }
  .form-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: #0d6efd;
    border: 0;
    border-radius: 1rem;
    -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    appearance: none;
  }
  
  .form-range::-webkit-slider-thumb:active {
    background-color: #b6d4fe;
  }
  .form-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  .form-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #0d6efd;
    border: 0;
    border-radius: 1rem;
    -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -moz-appearance: none;
    appearance: none;
  }
  
  .form-range::-moz-range-thumb:active {
    background-color: #b6d4fe;
  }
  .form-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  .form-range:disabled {
    pointer-events: none;
  }
  .form-range:disabled::-webkit-slider-thumb {
    background-color: #adb5bd;
  }
  .form-range:disabled::-moz-range-thumb {
    background-color: #adb5bd;
  }
  
  .form-floating {
    position: relative;
  }
  .form-floating > .form-control,
  .form-floating > .form-select {
    height: calc(3.5rem + 2px);
    line-height: 1.25;
  }
  .form-floating > label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem 0.75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
  }
  
  .form-floating > .form-control {
    padding: 1rem 0.75rem;
  }
  .form-floating > .form-control::-moz-placeholder {
    color: transparent;
  }
  .form-floating > .form-control::placeholder {
    color: transparent;
  }
  .form-floating > .form-control:not(:-moz-placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-control:-webkit-autofill {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-select {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  .form-floating > .form-control:focus ~ label,
  .form-floating > .form-control:not(:placeholder-shown) ~ label,
  .form-floating > .form-select ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  .form-floating > .form-control:-webkit-autofill ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  
  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  .input-group > .form-control,
  .input-group > .form-select {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }
  .input-group > .form-control:focus,
  .input-group > .form-select:focus {
    z-index: 3;
  }
  .input-group .btn {
    position: relative;
    z-index: 2;
  }
  .input-group .btn:focus {
    z-index: 3;
  }
  
  .input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  
  .input-group-lg > .form-control,
  .input-group-lg > .form-select,
  .input-group-lg > .input-group-text,
  .input-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }
  
  .input-group-sm > .form-control,
  .input-group-sm > .form-select,
  .input-group-sm > .input-group-text,
  .input-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }
  
  .input-group-lg > .form-select,
  .input-group-sm > .form-select {
    padding-right: 3rem;
  }
  
  .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .valid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #198754;
  }
  
  .valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    color: #fff;
    background-color: rgba(25, 135, 84, 0.9);
    border-radius: 0.25rem;
  }
  
  .was-validated :valid ~ .valid-feedback,
  .was-validated :valid ~ .valid-tooltip,
  .is-valid ~ .valid-feedback,
  .is-valid ~ .valid-tooltip {
    display: block;
  }
  
  .was-validated .form-control:valid, .form-control.is-valid {
    border-color: #198754;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .was-validated .form-control:valid:focus, .form-control.is-valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
  }
  
  .was-validated textarea.form-control:valid, textarea.form-control.is-valid {
    padding-right: calc(1.5em + 0.75rem);
    background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
  }
  
  .was-validated .form-select:valid, .form-select.is-valid {
    border-color: #198754;
  }
  .was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
    padding-right: 4.125rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-position: right 0.75rem center, center right 2.25rem;
    background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .was-validated .form-select:valid:focus, .form-select.is-valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
  }
  
  .was-validated .form-check-input:valid, .form-check-input.is-valid {
    border-color: #198754;
  }
  .was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
    background-color: #198754;
  }
  .was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
  }
  .was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
    color: #198754;
  }
  
  .form-check-inline .form-check-input ~ .valid-feedback {
    margin-left: 0.5em;
  }
  
  .was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,
  .was-validated .input-group .form-select:valid,
  .input-group .form-select.is-valid {
    z-index: 1;
  }
  .was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,
  .was-validated .input-group .form-select:valid:focus,
  .input-group .form-select.is-valid:focus {
    z-index: 3;
  }
  
  .invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #dc3545;
  }
  
  .invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    color: #fff;
    background-color: rgba(220, 53, 69, 0.9);
    border-radius: 0.25rem;
  }
  
  .was-validated :invalid ~ .invalid-feedback,
  .was-validated :invalid ~ .invalid-tooltip,
  .is-invalid ~ .invalid-feedback,
  .is-invalid ~ .invalid-tooltip {
    display: block;
  }
  
  .was-validated .form-control:invalid, .form-control.is-invalid {
    border-color: #dc3545;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  }
  
  .was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
    padding-right: calc(1.5em + 0.75rem);
    background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
  }
  
  .was-validated .form-select:invalid, .form-select.is-invalid {
    border-color: #dc3545;
  }
  .was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
    padding-right: 4.125rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-position: right 0.75rem center, center right 2.25rem;
    background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  }
  
  .was-validated .form-check-input:invalid, .form-check-input.is-invalid {
    border-color: #dc3545;
  }
  .was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
    background-color: #dc3545;
  }
  .was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  }
  .was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
    color: #dc3545;
  }
  
  .form-check-inline .form-check-input ~ .invalid-feedback {
    margin-left: 0.5em;
  }
  
  .was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,
  .was-validated .input-group .form-select:invalid,
  .input-group .form-select.is-invalid {
    z-index: 2;
  }
  .was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,
  .was-validated .input-group .form-select:invalid:focus,
  .input-group .form-select.is-invalid:focus {
    z-index: 3;
  }
  
  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .btn:hover {
    color: #212529;
  }
  .btn-check:focus + .btn, .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .btn:disabled, .btn.disabled, fieldset:disabled .btn {
    pointer-events: none;
    opacity: 0.65;
  }
  
  .btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
  .btn-check:focus + .btn-primary, .btn-primary:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  }
  .btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #0a58ca;
    border-color: #0a53be;
  }
  .btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  }
  .btn-primary:disabled, .btn-primary.disabled {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  
  .btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-secondary:hover {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
  }
  .btn-check:focus + .btn-secondary, .btn-secondary:focus {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
  }
  .btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #565e64;
    border-color: #51585e;
  }
  .btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
  }
  .btn-secondary:disabled, .btn-secondary.disabled {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  
  .btn-success {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }
  .btn-success:hover {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
  }
  .btn-check:focus + .btn-success, .btn-success:focus {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
  }
  .btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #146c43;
    border-color: #13653f;
  }
  .btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
  }
  .btn-success:disabled, .btn-success.disabled {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }
  
  .btn-info {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-info:hover {
    color: #000;
    background-color: #31d2f2;
    border-color: #25cff2;
  }
  .btn-check:focus + .btn-info, .btn-info:focus {
    color: #000;
    background-color: #31d2f2;
    border-color: #25cff2;
    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
  }
  .btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {
    color: #000;
    background-color: #3dd5f3;
    border-color: #25cff2;
  }
  .btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
  }
  .btn-info:disabled, .btn-info.disabled {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
  
  .btn-warning {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-warning:hover {
    color: #000;
    background-color: #ffca2c;
    border-color: #ffc720;
  }
  .btn-check:focus + .btn-warning, .btn-warning:focus {
    color: #000;
    background-color: #ffca2c;
    border-color: #ffc720;
    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
  }
  .btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {
    color: #000;
    background-color: #ffcd39;
    border-color: #ffc720;
  }
  .btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
  }
  .btn-warning:disabled, .btn-warning.disabled {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  
  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bb2d3b;
    border-color: #b02a37;
  }
  .btn-check:focus + .btn-danger, .btn-danger:focus {
    color: #fff;
    background-color: #bb2d3b;
    border-color: #b02a37;
    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
  }
  .btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #b02a37;
    border-color: #a52834;
  }
  .btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
  }
  .btn-danger:disabled, .btn-danger.disabled {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .btn-light {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-light:hover {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
  }
  .btn-check:focus + .btn-light, .btn-light:focus {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
    box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
  }
  .btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
  }
  .btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
  }
  .btn-light:disabled, .btn-light.disabled {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  
  .btn-dark {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-dark:hover {
    color: #fff;
    background-color: #1c1f23;
    border-color: #1a1e21;
  }
  .btn-check:focus + .btn-dark, .btn-dark:focus {
    color: #fff;
    background-color: #1c1f23;
    border-color: #1a1e21;
    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
  }
  .btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #1a1e21;
    border-color: #191c1f;
  }
  .btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
  }
  .btn-dark:disabled, .btn-dark.disabled {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  
  .btn-outline-primary {
    color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
  }
  .btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
  }
  .btn-outline-primary:disabled, .btn-outline-primary.disabled {
    color: #0d6efd;
    background-color: transparent;
  }
  
  .btn-outline-secondary {
    color: #6c757d;
    border-color: #6c757d;
  }
  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
  }
  .btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
  }
  .btn-outline-secondary:disabled, .btn-outline-secondary.disabled {
    color: #6c757d;
    background-color: transparent;
  }
  
  .btn-outline-success {
    color: #198754;
    border-color: #198754;
  }
  .btn-outline-success:hover {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }
  .btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
  }
  .btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }
  .btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
  }
  .btn-outline-success:disabled, .btn-outline-success.disabled {
    color: #198754;
    background-color: transparent;
  }
  
  .btn-outline-info {
    color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-outline-info:hover {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
  }
  .btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
  }
  .btn-outline-info:disabled, .btn-outline-info.disabled {
    color: #0dcaf0;
    background-color: transparent;
  }
  
  .btn-outline-warning {
    color: #ffc107;
    border-color: #ffc107;
  }
  .btn-outline-warning:hover {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
  }
  .btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
  }
  .btn-outline-warning:disabled, .btn-outline-warning.disabled {
    color: #ffc107;
    background-color: transparent;
  }
  
  .btn-outline-danger {
    color: #dc3545;
    border-color: #dc3545;
  }
  .btn-outline-danger:hover {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
  }
  .btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
  }
  .btn-outline-danger:disabled, .btn-outline-danger.disabled {
    color: #dc3545;
    background-color: transparent;
  }
  
  .btn-outline-light {
    color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-outline-light:hover {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
  }
  .btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
  }
  .btn-outline-light:disabled, .btn-outline-light.disabled {
    color: #f8f9fa;
    background-color: transparent;
  }
  
  .btn-outline-dark {
    color: #212529;
    border-color: #212529;
  }
  .btn-outline-dark:hover {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
  }
  .btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
  }
  .btn-outline-dark:disabled, .btn-outline-dark.disabled {
    color: #212529;
    background-color: transparent;
  }
  
  .btn-link {
    font-weight: 400;
    color: #0d6efd;
    text-decoration: underline;
  }
  .btn-link:hover {
    color: #0a58ca;
  }
  .btn-link:disabled, .btn-link.disabled {
    color: #6c757d;
  }
  
  .btn-lg, .btn-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }
  
  .btn-sm, .btn-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }
  
  .fade {
    transition: opacity 0.15s linear;
  }
  
  .fade:not(.show) {
    opacity: 0;
  }
  
  .collapse:not(.show) {
    display: none;
  }
  
  .collapsing {
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  
  .dropup,
  .dropend,
  .dropdown,
  .dropstart {
    position: relative;
  }
  
  .dropdown-toggle {
    white-space: nowrap;
  }
  .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
  .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  
  .dropdown-menu {
    position: absolute;
    z-index: 1000;
    display: none;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
  }
  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: 0;
    margin-top: 0.125rem;
  }
  
  .dropdown-menu-start {
    --bs-position: start;
  }
  .dropdown-menu-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  
  .dropdown-menu-end {
    --bs-position: end;
  }
  .dropdown-menu-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
  
  .dropup .dropdown-menu[data-bs-popper] {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: 0.125rem;
  }
  .dropup .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0;
    border-right: 0.3em solid transparent;
    border-bottom: 0.3em solid;
    border-left: 0.3em solid transparent;
  }
  .dropup .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  
  .dropend .dropdown-menu[data-bs-popper] {
    top: 0;
    right: auto;
    left: 100%;
    margin-top: 0;
    margin-left: 0.125rem;
  }
  .dropend .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0;
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid;
  }
  .dropend .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .dropend .dropdown-toggle::after {
    vertical-align: 0;
  }
  
  .dropstart .dropdown-menu[data-bs-popper] {
    top: 0;
    right: 100%;
    left: auto;
    margin-top: 0;
    margin-right: 0.125rem;
  }
  .dropstart .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
  }
  .dropstart .dropdown-toggle::after {
    display: none;
  }
  .dropstart .dropdown-toggle::before {
    display: inline-block;
    margin-right: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0.3em solid;
    border-bottom: 0.3em solid transparent;
  }
  .dropstart .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .dropstart .dropdown-toggle::before {
    vertical-align: 0;
  }
  
  .dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }
  
  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  .dropdown-item:hover, .dropdown-item:focus {
    color: #1e2125;
    background-color: #e9ecef;
  }
  .dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #0d6efd;
  }
  .dropdown-item.disabled, .dropdown-item:disabled {
    color: #adb5bd;
    pointer-events: none;
    background-color: transparent;
  }
  
  .dropdown-menu.show {
    display: block;
  }
  
  .dropdown-header {
    display: block;
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    font-size: 0.875rem;
    color: #6c757d;
    white-space: nowrap;
  }
  
  .dropdown-item-text {
    display: block;
    padding: 0.25rem 1rem;
    color: #212529;
  }
  
  .dropdown-menu-dark {
    color: #dee2e6;
    background-color: #343a40;
    border-color: rgba(0, 0, 0, 0.15);
  }
  .dropdown-menu-dark .dropdown-item {
    color: #dee2e6;
  }
  .dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.15);
  }
  .dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
    color: #fff;
    background-color: #0d6efd;
  }
  .dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {
    color: #adb5bd;
  }
  .dropdown-menu-dark .dropdown-divider {
    border-color: rgba(0, 0, 0, 0.15);
  }
  .dropdown-menu-dark .dropdown-item-text {
    color: #dee2e6;
  }
  .dropdown-menu-dark .dropdown-header {
    color: #adb5bd;
  }
  
  .btn-group,
  .btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }
  .btn-group > .btn,
  .btn-group-vertical > .btn {
    position: relative;
    flex: 1 1 auto;
  }
  .btn-group > .btn-check:checked + .btn,
  .btn-group > .btn-check:focus + .btn,
  .btn-group > .btn:hover,
  .btn-group > .btn:focus,
  .btn-group > .btn:active,
  .btn-group > .btn.active,
  .btn-group-vertical > .btn-check:checked + .btn,
  .btn-group-vertical > .btn-check:focus + .btn,
  .btn-group-vertical > .btn:hover,
  .btn-group-vertical > .btn:focus,
  .btn-group-vertical > .btn:active,
  .btn-group-vertical > .btn.active {
    z-index: 1;
  }
  
  .btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .btn-toolbar .input-group {
    width: auto;
  }
  
  .btn-group > .btn:not(:first-child),
  .btn-group > .btn-group:not(:first-child) {
    margin-left: -1px;
  }
  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn-group > .btn:nth-child(n+3),
  .btn-group > :not(.btn-check) + .btn,
  .btn-group > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .dropdown-toggle-split {
    padding-right: 0.5625rem;
    padding-left: 0.5625rem;
  }
  .dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
    margin-left: 0;
  }
  .dropstart .dropdown-toggle-split::before {
    margin-right: 0;
  }
  
  .btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
    padding-right: 0.375rem;
    padding-left: 0.375rem;
  }
  
  .btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }
  
  .btn-group-vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .btn-group-vertical > .btn,
  .btn-group-vertical > .btn-group {
    width: 100%;
  }
  .btn-group-vertical > .btn:not(:first-child),
  .btn-group-vertical > .btn-group:not(:first-child) {
    margin-top: -1px;
  }
  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group-vertical > .btn-group:not(:last-child) > .btn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .btn-group-vertical > .btn ~ .btn,
  .btn-group-vertical > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  
  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  
  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #0d6efd;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }

  .nav-link:hover, .nav-link:focus {
    color: #0a58ca;
  }
  .nav-link.disabled {
    color: #6c757d;
    pointer-events: none;
    cursor: default;
  }
  
  .nav-tabs {
    border-bottom: 1px solid #dee2e6;
  }
  .nav-tabs .nav-link {
    margin-bottom: -1px;
    background: none;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
    border-color: #e9ecef #e9ecef #dee2e6;
    isolation: isolate;
  }
  .nav-tabs .nav-link.disabled {
    color: #6c757d;
    background-color: transparent;
    border-color: transparent;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
  .nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  
  .nav-pills .nav-link {
    background: none;
    border: 0;
    border-radius: 0.25rem;
  }
  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #0d6efd;
  }
  
  .nav-fill > .nav-link,
  .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }
  
  .nav-justified > .nav-link,
  .nav-justified .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }
  
  .nav-fill .nav-item .nav-link,
  .nav-justified .nav-item .nav-link {
    width: 100%;
  }
  
  .tab-content > .tab-pane {
    display: none;
  }
  .tab-content > .active {
    display: block;
  }
  
  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .navbar > .container,
  .navbar > .container-fluid,
  .navbar > .container-sm,
  .navbar > .container-md,
  .navbar > .container-lg,
  .navbar > .container-xl,
  .navbar > .container-xxl {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
  }
  .navbar-brand {
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
  }
  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-nav .dropdown-menu {
    position: static;
  }
  
  .navbar-text {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }
  
  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: box-shadow 0.15s ease-in-out;
  }
  
  .navbar-toggler:hover {
    text-decoration: none;
  }
  .navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0.25rem;
  }
  
  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  
  .navbar-nav-scroll {
    max-height: var(--bs-scroll-height, 75vh);
    overflow-y: auto;
  }
  
  .navbar-expand {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand .navbar-toggler {
    display: none;
  }
  
  .navbar-light .navbar-brand {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.55);
  }
  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3);
  }
  .navbar-light .navbar-nav .show > .nav-link,
  .navbar-light .navbar-nav .nav-link.active {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.55);
    border-color: rgba(0, 0, 0, 0.1);
  }
  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  .navbar-light .navbar-text {
    color: rgba(0, 0, 0, 0.55);
  }
  .navbar-light .navbar-text a,
  .navbar-light .navbar-text a:hover,
  .navbar-light .navbar-text a:focus {
    color: rgba(0, 0, 0, 0.9);
  }
  
  .navbar-dark .navbar-brand {
    color: #fff;
  }
  .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
    color: #fff;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.55);
  }
  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, 0.75);
  }
  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, 0.25);
  }
  .navbar-dark .navbar-nav .show > .nav-link,
  .navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
  }
  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, 0.55);
    border-color: rgba(255, 255, 255, 0.1);
  }
  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  .navbar-dark .navbar-text {
    color: rgba(255, 255, 255, 0.55);
  }
  .navbar-dark .navbar-text a,
  .navbar-dark .navbar-text a:hover,
  .navbar-dark .navbar-text a:focus {
    color: #fff;
  }
  
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
  .card > hr {
    margin-right: 0;
    margin-left: 0;
  }
  .card > .list-group {
    border-top: inherit;
    border-bottom: inherit;
  }
  .card > .list-group:first-child {
    border-top-width: 0;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }
  .card > .list-group:last-child {
    border-bottom-width: 0;
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }
  .card > .card-header + .list-group,
  .card > .list-group + .card-footer {
    border-top: 0;
  }
  
  .card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
  }
  
  .card-title {
    margin-bottom: 0.5rem;
  }
  
  .card-subtitle {
    margin-top: -0.25rem;
    margin-bottom: 0;
  }
  
  .card-text:last-child {
    margin-bottom: 0;
  }
  
  .card-link:hover {
    text-decoration: none;
  }
  .card-link + .card-link {
    margin-left: 1rem;
  }
  
  .card-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }
  
  .card-footer {
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  }
  .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }
  
  .card-header-tabs {
    margin-right: -0.5rem;
    margin-bottom: -0.5rem;
    margin-left: -0.5rem;
    border-bottom: 0;
  }
  
  .card-header-pills {
    margin-right: -0.5rem;
    margin-left: -0.5rem;
  }
  
  .card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    border-radius: calc(0.25rem - 1px);
  }
  
  .card-img,
  .card-img-top,
  .card-img-bottom {
    width: 100%;
  }
  
  .card-img,
  .card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }
  
  .card-img,
  .card-img-bottom {
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }
  
  .card-group > .card {
    margin-bottom: 0.75rem;
  }
  
  .accordion-button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    border: 0;
    border-radius: 0;
    overflow-anchor: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
  }
  
  .accordion-button:not(.collapsed) {
    color: #0c63e4;
    background-color: #e7f1ff;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
  }
  .accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    transform: rotate(-180deg);
  }
  .accordion-button::after {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: auto;
    content: "";
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: transform 0.2s ease-in-out;
  }
  
  .accordion-button:hover {
    z-index: 2;
  }
  .accordion-button:focus {
    z-index: 3;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  
  .accordion-header {
    margin-bottom: 0;
  }
  
  .accordion-item {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  .accordion-item:first-of-type {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .accordion-item:first-of-type .accordion-button {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }
  .accordion-item:not(:first-of-type) {
    border-top: 0;
  }
  .accordion-item:last-of-type {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }
  .accordion-item:last-of-type .accordion-collapse {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  
  .accordion-body {
    padding: 1rem 1.25rem;
  }
  
  .accordion-flush .accordion-collapse {
    border-width: 0;
  }
  .accordion-flush .accordion-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }
  .accordion-flush .accordion-item:first-child {
    border-top: 0;
  }
  .accordion-flush .accordion-item:last-child {
    border-bottom: 0;
  }
  .accordion-flush .accordion-item .accordion-button {
    border-radius: 0;
  }
  
  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0;
    margin-bottom: 1rem;
    list-style: none;
  }
  
  .breadcrumb-item + .breadcrumb-item {
    padding-left: 0.5rem;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    float: left;
    padding-right: 0.5rem;
    color: #6c757d;
    content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
  }
  .breadcrumb-item.active {
    color: #6c757d;
  }
  
  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
  }
  
  .page-link {
    position: relative;
    display: block;
    color: #0d6efd;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #dee2e6;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .page-link:hover {
    z-index: 2;
    color: #0a58ca;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }
  .page-link:focus {
    z-index: 3;
    color: #0a58ca;
    background-color: #e9ecef;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  
  .page-item:not(:first-child) .page-link {
    margin-left: -1px;
  }
  .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    background-color: #fff;
    border-color: #dee2e6;
  }
  
  .page-link {
    padding: 0.375rem 0.75rem;
  }
  
  .page-item:first-child .page-link {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  
  .pagination-lg .page-link {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  }
  .pagination-lg .page-item:first-child .page-link {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }
  .pagination-lg .page-item:last-child .page-link {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
  
  .pagination-sm .page-link {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
  .pagination-sm .page-item:first-child .page-link {
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
  }
  .pagination-sm .page-item:last-child .page-link {
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
  }
  
  .badge {
    display: inline-block;
    padding: 0.35em 0.65em;
    font-size: 0.75em;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }
  .badge:empty {
    display: none;
  }
  
  .btn .badge {
    position: relative;
    top: -1px;
  }
  
  .alert {
    position: relative;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  
  .alert-heading {
    color: inherit;
  }
  
  .alert-link {
    font-weight: 700;
  }
  
  .alert-dismissible {
    padding-right: 3rem;
  }
  .alert-dismissible .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 1.25rem 1rem;
  }
  
  .alert-primary {
    color: #084298;
    background-color: #cfe2ff;
    border-color: #b6d4fe;
  }
  .alert-primary .alert-link {
    color: #06357a;
  }
  
  .alert-secondary {
    color: #41464b;
    background-color: #e2e3e5;
    border-color: #d3d6d8;
  }
  .alert-secondary .alert-link {
    color: #34383c;
  }
  
  .alert-success {
    color: #0f5132;
    background-color: #d1e7dd;
    border-color: #badbcc;
  }
  .alert-success .alert-link {
    color: #0c4128;
  }
  
  .alert-info {
    color: #055160;
    background-color: #cff4fc;
    border-color: #b6effb;
  }
  .alert-info .alert-link {
    color: #04414d;
  }
  
  .alert-warning {
    color: #664d03;
    background-color: #fff3cd;
    border-color: #ffecb5;
  }
  .alert-warning .alert-link {
    color: #523e02;
  }
  
  .alert-danger {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
  }
  .alert-danger .alert-link {
    color: #6a1a21;
  }
  
  .alert-light {
    color: #636464;
    background-color: #fefefe;
    border-color: #fdfdfe;
  }
  .alert-light .alert-link {
    color: #4f5050;
  }
  
  .alert-dark {
    color: #141619;
    background-color: #d3d3d4;
    border-color: #bcbebf;
  }
  .alert-dark .alert-link {
    color: #101214;
  }
  
  @-webkit-keyframes progress-bar-stripes {
    0% {
      background-position-x: 1rem;
    }
  }
  
  @keyframes progress-bar-stripes {
    0% {
      background-position-x: 1rem;
    }
  }
  .progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 0.25rem;
  }
  
  .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #0d6efd;
    transition: width 0.6s ease;
  }
  
  .progress-bar-striped {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-size: 1rem 1rem;
  }
  
  .progress-bar-animated {
    -webkit-animation: 1s linear infinite progress-bar-stripes;
    animation: 1s linear infinite progress-bar-stripes;
  }
  
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;
  }
  
  .list-group-numbered {
    list-style-type: none;
    counter-reset: section;
  }
  .list-group-numbered > li::before {
    content: counters(section, ".") ". ";
    counter-increment: section;
  }
  
  .list-group-item-action {
    width: 100%;
    color: #495057;
    text-align: inherit;
  }
  .list-group-item-action:hover, .list-group-item-action:focus {
    z-index: 1;
    color: #495057;
    text-decoration: none;
    background-color: #f8f9fa;
  }
  .list-group-item-action:active {
    color: #212529;
    background-color: #e9ecef;
  }
  
  .list-group-item {
    position: relative;
    display: block;
    padding: 0.5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  .list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  .list-group-item:last-child {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .list-group-item.disabled, .list-group-item:disabled {
    color: #6c757d;
    pointer-events: none;
    background-color: #fff;
  }
  .list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .list-group-item + .list-group-item {
    border-top-width: 0;
  }
  .list-group-item + .list-group-item.active {
    margin-top: -1px;
    border-top-width: 1px;
  }
  
  .list-group-horizontal {
    flex-direction: row;
  }
  .list-group-horizontal > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
  
  .list-group-flush {
    border-radius: 0;
  }
  .list-group-flush > .list-group-item {
    border-width: 0 0 1px;
  }
  .list-group-flush > .list-group-item:last-child {
    border-bottom-width: 0;
  }
  
  .list-group-item-primary {
    color: #084298;
    background-color: #cfe2ff;
  }
  .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
    color: #084298;
    background-color: #bacbe6;
  }
  .list-group-item-primary.list-group-item-action.active {
    color: #fff;
    background-color: #084298;
    border-color: #084298;
  }
  
  .list-group-item-secondary {
    color: #41464b;
    background-color: #e2e3e5;
  }
  .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
    color: #41464b;
    background-color: #cbccce;
  }
  .list-group-item-secondary.list-group-item-action.active {
    color: #fff;
    background-color: #41464b;
    border-color: #41464b;
  }
  
  .list-group-item-success {
    color: #0f5132;
    background-color: #d1e7dd;
  }
  .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
    color: #0f5132;
    background-color: #bcd0c7;
  }
  .list-group-item-success.list-group-item-action.active {
    color: #fff;
    background-color: #0f5132;
    border-color: #0f5132;
  }
  
  .list-group-item-info {
    color: #055160;
    background-color: #cff4fc;
  }
  .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
    color: #055160;
    background-color: #badce3;
  }
  .list-group-item-info.list-group-item-action.active {
    color: #fff;
    background-color: #055160;
    border-color: #055160;
  }
  
  .list-group-item-warning {
    color: #664d03;
    background-color: #fff3cd;
  }
  .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
    color: #664d03;
    background-color: #e6dbb9;
  }
  .list-group-item-warning.list-group-item-action.active {
    color: #fff;
    background-color: #664d03;
    border-color: #664d03;
  }
  
  .list-group-item-danger {
    color: #842029;
    background-color: #f8d7da;
  }
  .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
    color: #842029;
    background-color: #dfc2c4;
  }
  .list-group-item-danger.list-group-item-action.active {
    color: #fff;
    background-color: #842029;
    border-color: #842029;
  }
  
  .list-group-item-light {
    color: #636464;
    background-color: #fefefe;
  }
  .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
    color: #636464;
    background-color: #e5e5e5;
  }
  .list-group-item-light.list-group-item-action.active {
    color: #fff;
    background-color: #636464;
    border-color: #636464;
  }
  
  .list-group-item-dark {
    color: #141619;
    background-color: #d3d3d4;
  }
  .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
    color: #141619;
    background-color: #bebebf;
  }
  .list-group-item-dark.list-group-item-action.active {
    color: #fff;
    background-color: #141619;
    border-color: #141619;
  }
  
  .btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #000;
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: 0.5;
  }
  .btn-close:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
  }
  .btn-close:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    opacity: 1;
  }
  .btn-close:disabled, .btn-close.disabled {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    opacity: 0.25;
  }
  
  .btn-close-white {
    filter: invert(1) grayscale(100%) brightness(200%);
  }
  
  .toast {
    width: 350px;
    max-width: 100%;
    font-size: 0.875rem;
    pointer-events: auto;
    background-color: rgba(255, 255, 255, 0.85);
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
  }
  .toast:not(.showing):not(.show) {
    opacity: 0;
  }
  .toast.hide {
    display: none;
  }
  
  .toast-container {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    max-width: 100%;
    pointer-events: none;
  }
  .toast-container > :not(:last-child) {
    margin-bottom: 0.75rem;
  }
  
  .toast-header {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    color: #6c757d;
    background-color: rgba(255, 255, 255, 0.85);
    background-clip: padding-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }
  .toast-header .btn-close {
    margin-right: -0.375rem;
    margin-left: 0.75rem;
  }
  
  .toast-body {
    padding: 0.75rem;
    word-wrap: break-word;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1060;
    display: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }
  
  .modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
  }
  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -50px);
  }
  
  .modal.show .modal-dialog {
    transform: none;
  }
  .modal.modal-static .modal-dialog {
    transform: scale(1.02);
  }
  
  .modal-dialog-scrollable {
    height: calc(100% - 1rem);
  }
  .modal-dialog-scrollable .modal-content {
    max-height: 100%;
    overflow: hidden;
  }
  .modal-dialog-scrollable .modal-body {
    overflow-y: auto;
  }
  
  .modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - 1rem);
  }
  
  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
  }
  
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
  }
  .modal-backdrop.fade {
    opacity: 0;
  }
  .modal-backdrop.show {
    opacity: 0.5;
  }
  
  .modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }
  .modal-header .btn-close {
    padding: 0.5rem 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
  }
  
  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }
  
  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
  }
  
  .modal-footer {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
  }
  .modal-footer > * {
    margin: 0.25rem;
  }
  
  .modal-fullscreen {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen .modal-footer {
    border-radius: 0;
  }
  
  .tooltip {
    position: absolute;
    z-index: 1080;
    display: block;
    margin: 0;
    font-family: var(--bs-font-sans-serif);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    opacity: 0;
  }
  .tooltip.show {
    opacity: 0.9;
  }
  .tooltip .tooltip-arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem;
  }
  .tooltip .tooltip-arrow::before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid;
  }
  
  .bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {
    padding: 0.4rem 0;
  }
  .bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
    bottom: 0;
  }
  .bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
    top: -1px;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: #000;
  }
  
  .bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {
    padding: 0 0.4rem;
  }
  .bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem;
  }
  .bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
    right: -1px;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    border-right-color: #000;
  }
  
  .bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {
    padding: 0.4rem 0;
  }
  .bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
    top: 0;
  }
  .bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
    bottom: -1px;
    border-width: 0 0.4rem 0.4rem;
    border-bottom-color: #000;
  }
  
  .bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {
    padding: 0 0.4rem;
  }
  .bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem;
  }
  .bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
    left: -1px;
    border-width: 0.4rem 0 0.4rem 0.4rem;
    border-left-color: #000;
  }
  
  .tooltip-inner {
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 0.25rem;
  }
  
  .popover {
    position: absolute;
    top: 0;
    left: 0 /* rtl:ignore */;
    z-index: 1070;
    display: block;
    max-width: 276px;
    font-family: var(--bs-font-sans-serif);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
  }
  .popover .popover-arrow {
    position: absolute;
    display: block;
    width: 1rem;
    height: 0.5rem;
  }
  .popover .popover-arrow::before, .popover .popover-arrow::after {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid;
  }
  
  .bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
    bottom: calc(-0.5rem - 1px);
  }
  .bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
    bottom: 0;
    border-width: 0.5rem 0.5rem 0;
    border-top-color: rgba(0, 0, 0, 0.25);
  }
  .bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
    bottom: 1px;
    border-width: 0.5rem 0.5rem 0;
    border-top-color: #fff;
  }
  
  .bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
    left: calc(-0.5rem - 1px);
    width: 0.5rem;
    height: 1rem;
  }
  .bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
    left: 0;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-right-color: rgba(0, 0, 0, 0.25);
  }
  .bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
    left: 1px;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-right-color: #fff;
  }
  
  .bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
    top: calc(-0.5rem - 1px);
  }
  .bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
    top: 0;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: rgba(0, 0, 0, 0.25);
  }
  .bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
    top: 1px;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: #fff;
  }
  .bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -0.5rem;
    content: "";
    border-bottom: 1px solid #f0f0f0;
  }
  
  .bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
    right: calc(-0.5rem - 1px);
    width: 0.5rem;
    height: 1rem;
  }
  .bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
    right: 0;
    border-width: 0.5rem 0 0.5rem 0.5rem;
    border-left-color: rgba(0, 0, 0, 0.25);
  }
  .bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
    right: 1px;
    border-width: 0.5rem 0 0.5rem 0.5rem;
    border-left-color: #fff;
  }
  
  .popover-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    font-size: 1rem;
    background-color: #f0f0f0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }
  .popover-header:empty {
    display: none;
  }
  
  .popover-body {
    padding: 1rem 1rem;
    color: #212529;
  }
  
  .carousel {
    position: relative;
  }
  
  .carousel.pointer-event {
    touch-action: pan-y;
  }
  
  .carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .carousel-inner::after {
    display: block;
    clear: both;
    content: "";
  }
  
  .carousel-item {
    position: relative;
    display: none;
    float: left;
    width: 100%;
    margin-right: -100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: transform 0.6s ease-in-out;
  }
  
  .carousel-item.active,
  .carousel-item-next,
  .carousel-item-prev {
    display: block;
  }
  
  /* rtl:begin:ignore */
  .carousel-item-next:not(.carousel-item-start),
  .active.carousel-item-end {
    transform: translateX(100%);
  }
  
  .carousel-item-prev:not(.carousel-item-end),
  .active.carousel-item-start {
    transform: translateX(-100%);
  }
  
  /* rtl:end:ignore */
  .carousel-fade .carousel-item {
    opacity: 0;
    transition-property: opacity;
    transform: none;
  }
  .carousel-fade .carousel-item.active,
  .carousel-fade .carousel-item-next.carousel-item-start,
  .carousel-fade .carousel-item-prev.carousel-item-end {
    z-index: 1;
    opacity: 1;
  }
  .carousel-fade .active.carousel-item-start,
  .carousel-fade .active.carousel-item-end {
    z-index: 0;
    opacity: 0;
    transition: opacity 0s 0.6s;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    padding: 0;
    color: #fff;
    text-align: center;
    background: none;
    border: 0;
    opacity: 0.5;
    transition: opacity 0.15s ease;
  }

  .carousel-control-prev:hover, .carousel-control-prev:focus,
  .carousel-control-next:hover,
  .carousel-control-next:focus {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: 0.9;
  }
  
  .carousel-control-prev {
    left: 0;
  }
  
  .carousel-control-next {
    right: 0;
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
  }
  
  /* rtl:options: {
    "autoRename": true,
    "stringMap":[ {
      "name"    : "prev-next",
      "search"  : "prev",
      "replace" : "next"
    } ]
  } */
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
  }
  
  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }
  
  .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 1rem;
    margin-left: 15%;
    list-style: none;
  }
  .carousel-indicators [data-bs-target] {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    padding: 0;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: 0.5;
    transition: opacity 0.6s ease;
  }
  
  .carousel-indicators .active {
    opacity: 1;
  }
  
  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 1.25rem;
    left: 15%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    color: #fff;
    text-align: center;
  }
  
  .carousel-dark .carousel-control-prev-icon,
  .carousel-dark .carousel-control-next-icon {
    filter: invert(1) grayscale(100);
  }
  .carousel-dark .carousel-indicators [data-bs-target] {
    background-color: #000;
  }
  .carousel-dark .carousel-caption {
    color: #000;
  }
  
  @-webkit-keyframes spinner-border {
    to {
      transform: rotate(360deg) /* rtl:ignore */;
    }
  }
  
  @keyframes spinner-border {
    to {
      transform: rotate(360deg) /* rtl:ignore */;
    }
  }
  .spinner-border {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: -0.125em;
    border: 0.25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: 0.75s linear infinite spinner-border;
    animation: 0.75s linear infinite spinner-border;
  }
  
  .spinner-border-sm {
    width: 1rem;
    height: 1rem;
    border-width: 0.2em;
  }
  
  @-webkit-keyframes spinner-grow {
    0% {
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: none;
    }
  }
  
  @keyframes spinner-grow {
    0% {
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: none;
    }
  }
  .spinner-grow {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: -0.125em;
    background-color: currentColor;
    border-radius: 50%;
    opacity: 0;
    -webkit-animation: 0.75s linear infinite spinner-grow;
    animation: 0.75s linear infinite spinner-grow;
  }
  
  .spinner-grow-sm {
    width: 1rem;
    height: 1rem;
  }
  
  .offcanvas {
    position: fixed;
    bottom: 0;
    z-index: 1050;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    visibility: hidden;
    background-color: #fff;
    background-clip: padding-box;
    outline: 0;
    transition: transform 0.3s ease-in-out;
  }
  
  .offcanvas-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
  }
  .offcanvas-header .btn-close {
    padding: 0.5rem 0.5rem;
    margin-top: -0.5rem;
    margin-right: -0.5rem;
    margin-bottom: -0.5rem;
  }
  
  .offcanvas-title {
    margin-bottom: 0;
    line-height: 1.5;
  }
  
  .offcanvas-body {
    flex-grow: 1;
    padding: 1rem 1rem;
    overflow-y: auto;
  }
  
  .offcanvas-start {
    top: 0;
    left: 0;
    width: 400px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    transform: translateX(-100%);
  }
  
  .offcanvas-end {
    top: 0;
    right: 0;
    width: 400px;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    transform: translateX(100%);
  }
  
  .offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: 30vh;
    max-height: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transform: translateY(-100%);
  }
  
  .offcanvas-bottom {
    right: 0;
    left: 0;
    height: 30vh;
    max-height: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    transform: translateY(100%);
  }
  
  .offcanvas.show {
    transform: none;
  }
  
  .clearfix::after {
    display: block;
    clear: both;
    content: "";
  }
  
  .link-primary {
    color: #0d6efd;
  }
  .link-primary:hover, .link-primary:focus {
    color: #0a58ca;
  }
  
  .link-secondary {
    color: #6c757d;
  }
  .link-secondary:hover, .link-secondary:focus {
    color: #565e64;
  }
  
  .link-success {
    color: #198754;
  }
  .link-success:hover, .link-success:focus {
    color: #146c43;
  }
  
  .link-info {
    color: #0dcaf0;
  }
  .link-info:hover, .link-info:focus {
    color: #3dd5f3;
  }
  
  .link-warning {
    color: #ffc107;
  }
  .link-warning:hover, .link-warning:focus {
    color: #ffcd39;
  }
  
  .link-danger {
    color: #dc3545;
  }
  .link-danger:hover, .link-danger:focus {
    color: #b02a37;
  }
  
  .link-light {
    color: #f8f9fa;
  }
  .link-light:hover, .link-light:focus {
    color: #f9fafb;
  }
  
  .link-dark {
    color: #212529;
  }
  .link-dark:hover, .link-dark:focus {
    color: #1a1e21;
  }
  
  .ratio {
    position: relative;
    width: 100%;
  }
  .ratio::before {
    display: block;
    padding-top: var(--bs-aspect-ratio);
    content: "";
  }
  .ratio > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .ratio-1x1 {
    --bs-aspect-ratio: 100%;
  }
  
  .ratio-4x3 {
    --bs-aspect-ratio: calc(3 / 4 * 100%);
  }
  
  .ratio-16x9 {
    --bs-aspect-ratio: calc(9 / 16 * 100%);
  }
  
  .ratio-21x9 {
    --bs-aspect-ratio: calc(9 / 21 * 100%);
  }
  
  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  
  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
  }
  
  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  
  .visually-hidden,
  .visually-hidden-focusable:not(:focus):not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
  
  .stretched-link::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: "";
  }
  
  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .align-baseline {
    vertical-align: baseline !important;
  }
  
  .align-top {
    vertical-align: top !important;
  }
  
  .align-middle {
    vertical-align: middle !important;
  }
  
  .align-bottom {
    vertical-align: bottom !important;
  }
  
  .align-text-bottom {
    vertical-align: text-bottom !important;
  }
  
  .align-text-top {
    vertical-align: text-top !important;
  }
  
  .float-start {
    float: left !important;
  }
  
  .float-end {
    float: right !important;
  }
  
  .float-none {
    float: none !important;
  }
  
  .overflow-auto {
    overflow: auto !important;
  }
  
  .overflow-hidden {
    overflow: hidden !important;
  }
  
  .overflow-visible {
    overflow: visible !important;
  }
  
  .overflow-scroll {
    overflow: scroll !important;
  }
  
  .d-inline {
    display: inline !important;
  }
  
  .d-inline-block {
    display: inline-block !important;
  }
  
  .d-block {
    display: block !important;
  }
  
  .d-grid {
    display: grid !important;
  }
  
  .d-table {
    display: table !important;
  }
  
  .d-table-row {
    display: table-row !important;
  }
  
  .d-table-cell {
    display: table-cell !important;
  }
  
  .d-flex {
    display: flex !important;
  }
  
  .d-inline-flex {
    display: inline-flex !important;
  }
  
  .d-none {
    display: none !important;
  }
  
  .shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
  
  .shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  }
  
  .shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }
  
  .shadow-none {
    box-shadow: none !important;
  }
  
  .position-static {
    position: static !important;
  }
  
  .position-relative {
    position: relative !important;
  }
  
  .position-absolute {
    position: absolute !important;
  }
  
  .position-fixed {
    position: fixed !important;
  }
  
  .position-sticky {
    position: -webkit-sticky !important;
    position: sticky !important;
  }
  
  .top-0 {
    top: 0 !important;
  }
  
  .top-50 {
    top: 50% !important;
  }
  
  .top-100 {
    top: 100% !important;
  }
  
  .bottom-0 {
    bottom: 0 !important;
  }
  
  .bottom-50 {
    bottom: 50% !important;
  }
  
  .bottom-100 {
    bottom: 100% !important;
  }
  
  .start-0 {
    left: 0 !important;
  }
  
  .start-50 {
    left: 50% !important;
  }
  
  .start-100 {
    left: 100% !important;
  }
  
  .end-0 {
    right: 0 !important;
  }
  
  .end-50 {
    right: 50% !important;
  }
  
  .end-100 {
    right: 100% !important;
  }
  
  .translate-middle {
    transform: translate(-50%, -50%) !important;
  }
  
  .translate-middle-x {
    transform: translateX(-50%) !important;
  }
  
  .translate-middle-y {
    transform: translateY(-50%) !important;
  }
  
  .border {
    border: 1px solid #dee2e6 !important;
  }
  
  .border-0 {
    border: 0 !important;
  }
  
  .border-top {
    border-top: 1px solid #dee2e6 !important;
  }
  
  .border-top-0 {
    border-top: 0 !important;
  }
  
  .border-end {
    border-right: 1px solid #dee2e6 !important;
  }
  
  .border-end-0 {
    border-right: 0 !important;
  }
  
  .border-bottom {
    border-bottom: 1px solid #dee2e6 !important;
  }
  
  .border-bottom-0 {
    border-bottom: 0 !important;
  }
  
  .border-start {
    border-left: 1px solid #dee2e6 !important;
  }
  
  .border-start-0 {
    border-left: 0 !important;
  }
  
  .border-primary {
    border-color: #0d6efd !important;
  }
  
  .border-secondary {
    border-color: #6c757d !important;
  }
  
  .border-success {
    border-color: #198754 !important;
  }
  
  .border-info {
    border-color: #0dcaf0 !important;
  }
  
  .border-warning {
    border-color: #ffc107 !important;
  }
  
  .border-danger {
    border-color: #dc3545 !important;
  }
  
  .border-light {
    border-color: #f8f9fa !important;
  }
  
  .border-dark {
    border-color: #212529 !important;
  }
  
  .border-white {
    border-color: #fff !important;
  }
  
  .border-1 {
    border-width: 1px !important;
  }
  
  .border-2 {
    border-width: 2px !important;
  }
  
  .border-3 {
    border-width: 3px !important;
  }
  
  .border-4 {
    border-width: 4px !important;
  }
  
  .border-5 {
    border-width: 5px !important;
  }
  
  .w-25 {
    width: 25% !important;
  }
  
  .w-50 {
    width: 50% !important;
  }
  
  .w-75 {
    width: 75% !important;
  }
  
  .w-100 {
    width: 100% !important;
  }
  
  .w-auto {
    width: auto !important;
  }
  
  .mw-100 {
    max-width: 100% !important;
  }
  
  .vw-100 {
    width: 100vw !important;
  }
  
  .min-vw-100 {
    min-width: 100vw !important;
  }
  
  .h-25 {
    height: 25% !important;
  }
  
  .h-50 {
    height: 50% !important;
  }
  
  .h-75 {
    height: 75% !important;
  }
  
  .h-100 {
    height: 100% !important;
  }
  
  .h-auto {
    height: auto !important;
  }
  
  .mh-100 {
    max-height: 100% !important;
  }
  
  .vh-100 {
    height: 100vh !important;
  }
  
  .min-vh-100 {
    min-height: 100vh !important;
  }
  
  .flex-fill {
    flex: 1 1 auto !important;
  }
  
  .flex-row {
    flex-direction: row !important;
  }
  
  .flex-column {
    flex-direction: column !important;
  }
  
  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }
  
  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }
  
  .flex-grow-0 {
    flex-grow: 0 !important;
  }
  
  .flex-grow-1 {
    flex-grow: 1 !important;
  }
  
  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }
  
  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }
  
  .flex-wrap {
    flex-wrap: wrap !important;
  }
  
  .flex-nowrap {
    flex-wrap: nowrap !important;
  }
  
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  
  .gap-0 {
    gap: 0 !important;
  }
  
  .gap-1 {
    gap: 0.25rem !important;
  }
  
  .gap-2 {
    gap: 0.5rem !important;
  }
  
  .gap-3 {
    gap: 1rem !important;
  }
  
  .gap-4 {
    gap: 1.5rem !important;
  }
  
  .gap-5 {
    gap: 3rem !important;
  }
  
  .justify-content-start {
    justify-content: flex-start !important;
  }
  
  .justify-content-end {
    justify-content: flex-end !important;
  }
  
  .justify-content-center {
    justify-content: center !important;
  }
  
  .justify-content-between {
    justify-content: space-between !important;
  }
  
  .justify-content-around {
    justify-content: space-around !important;
  }
  
  .justify-content-evenly {
    justify-content: space-evenly !important;
  }
  
  .align-items-start {
    align-items: flex-start !important;
  }
  
  .align-items-end {
    align-items: flex-end !important;
  }
  
  .align-items-center {
    align-items: center !important;
  }
  
  .align-items-baseline {
    align-items: baseline !important;
  }
  
  .align-items-stretch {
    align-items: stretch !important;
  }
  
  .align-content-start {
    align-content: flex-start !important;
  }
  
  .align-content-end {
    align-content: flex-end !important;
  }
  
  .align-content-center {
    align-content: center !important;
  }
  
  .align-content-between {
    align-content: space-between !important;
  }
  
  .align-content-around {
    align-content: space-around !important;
  }
  
  .align-content-stretch {
    align-content: stretch !important;
  }
  
  .align-self-auto {
    align-self: auto !important;
  }
  
  .align-self-start {
    align-self: flex-start !important;
  }
  
  .align-self-end {
    align-self: flex-end !important;
  }
  
  .align-self-center {
    align-self: center !important;
  }
  
  .align-self-baseline {
    align-self: baseline !important;
  }
  
  .align-self-stretch {
    align-self: stretch !important;
  }
  
  .order-first {
    order: -1 !important;
  }
  
  .order-0 {
    order: 0 !important;
  }
  
  .order-1 {
    order: 1 !important;
  }
  
  .order-2 {
    order: 2 !important;
  }
  
  .order-3 {
    order: 3 !important;
  }
  
  .order-4 {
    order: 4 !important;
  }
  
  .order-5 {
    order: 5 !important;
  }
  
  .order-last {
    order: 6 !important;
  }
  
  .m-0 {
    margin: 0 !important;
  }
  
  .m-1 {
    margin: 0.25rem !important;
  }
  
  .m-2 {
    margin: 0.5rem !important;
  }
  
  .m-3 {
    margin: 1rem !important;
  }
  
  .m-4 {
    margin: 1.5rem !important;
  }
  
  .m-5 {
    margin: 3rem !important;
  }
  
  .m-auto {
    margin: auto !important;
  }
  
  .mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .mx-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  
  .mx-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  
  .mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  
  .mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  
  .mx-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  
  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  
  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  
  .my-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  
  .my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  
  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  
  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  
  .my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  
  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  
  .mt-0 {
    margin-top: 0 !important;
  }
  
  .mt-1 {
    margin-top: 0.25rem !important;
  }
  
  .mt-2 {
    margin-top: 0.5rem !important;
  }
  
  .mt-3 {
    margin-top: 1rem !important;
  }
  
  .mt-4 {
    margin-top: 1.5rem !important;
  }
  
  .mt-5 {
    margin-top: 3rem !important;
  }
  
  .mt-auto {
    margin-top: auto !important;
  }
  
  .me-0 {
    margin-right: 0 !important;
  }
  
  .me-1 {
    margin-right: 0.25rem !important;
  }
  
  .me-2 {
    margin-right: 0.5rem !important;
  }
  
  .me-3 {
    margin-right: 1rem !important;
  }
  
  .me-4 {
    margin-right: 1.5rem !important;
  }
  
  .me-5 {
    margin-right: 3rem !important;
  }
  
  .me-auto {
    margin-right: auto !important;
  }
  
  .mb-0 {
    margin-bottom: 0 !important;
  }
  
  .mb-1 {
    margin-bottom: 0.25rem !important;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem !important;
  }
  
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
  
  .mb-5 {
    margin-bottom: 3rem !important;
  }
  
  .mb-auto {
    margin-bottom: auto !important;
  }
  
  .ms-0 {
    margin-left: 0 !important;
  }
  
  .ms-1 {
    margin-left: 0.25rem !important;
  }
  
  .ms-2 {
    margin-left: 0.5rem !important;
  }
  
  .ms-3 {
    margin-left: 1rem !important;
  }
  
  .ms-4 {
    margin-left: 1.5rem !important;
  }
  
  .ms-5 {
    margin-left: 3rem !important;
  }
  
  .ms-auto {
    margin-left: auto !important;
  }
  
  .p-0 {
    padding: 0 !important;
  }
  
  .p-1 {
    padding: 0.25rem !important;
  }
  
  .p-2 {
    padding: 0.5rem !important;
  }
  
  .p-3 {
    padding: 1rem !important;
  }
  
  .p-4 {
    padding: 1.5rem !important;
  }
  
  .p-5 {
    padding: 3rem !important;
  }
  
  .px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  
  .px-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  
  .px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  
  .px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  
  .px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  
  .px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  
  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  
  .py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  
  .py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  
  .py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  
  .py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  
  .py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  
  .pt-0 {
    padding-top: 0 !important;
  }
  
  .pt-1 {
    padding-top: 0.25rem !important;
  }
  
  .pt-2 {
    padding-top: 0.5rem !important;
  }
  
  .pt-3 {
    padding-top: 1rem !important;
  }
  
  .pt-4 {
    padding-top: 1.5rem !important;
  }
  
  .pt-5 {
    padding-top: 3rem !important;
  }
  
  .pe-0 {
    padding-right: 0 !important;
  }
  
  .pe-1 {
    padding-right: 0.25rem !important;
  }
  
  .pe-2 {
    padding-right: 0.5rem !important;
  }
  
  .pe-3 {
    padding-right: 1rem !important;
  }
  
  .pe-4 {
    padding-right: 1.5rem !important;
  }
  
  .pe-5 {
    padding-right: 3rem !important;
  }
  
  .pb-0 {
    padding-bottom: 0 !important;
  }
  
  .pb-1 {
    padding-bottom: 0.25rem !important;
  }
  
  .pb-2 {
    padding-bottom: 0.5rem !important;
  }
  
  .pb-3 {
    padding-bottom: 1rem !important;
  }
  
  .pb-4 {
    padding-bottom: 1.5rem !important;
  }
  
  .pb-5 {
    padding-bottom: 3rem !important;
  }
  
  .ps-0 {
    padding-left: 0 !important;
  }
  
  .ps-1 {
    padding-left: 0.25rem !important;
  }
  
  .ps-2 {
    padding-left: 0.5rem !important;
  }
  
  .ps-3 {
    padding-left: 1rem !important;
  }
  
  .ps-4 {
    padding-left: 1.5rem !important;
  }
  
  .ps-5 {
    padding-left: 3rem !important;
  }
  
  .font-monospace {
    font-family: var(--bs-font-monospace) !important;
  }
  
  .fs-1 {
    font-size: calc(1.375rem + 1.5vw) !important;
  }
  
  .fs-2 {
    font-size: calc(1.325rem + 0.9vw) !important;
  }
  
  .fs-3 {
    font-size: calc(1.3rem + 0.6vw) !important;
  }
  
  .fs-4 {
    font-size: calc(1.275rem + 0.3vw) !important;
  }
  
  .fs-5 {
    font-size: 1.25rem !important;
  }
  
  .fs-6 {
    font-size: 1rem !important;
  }
  
  .fst-italic {
    font-style: italic !important;
  }
  
  .fst-normal {
    font-style: normal !important;
  }
  
  .fw-light {
    font-weight: 300 !important;
  }
  
  .fw-lighter {
    font-weight: lighter !important;
  }
  
  .fw-normal {
    font-weight: 400 !important;
  }
  
  .fw-bold {
    font-weight: 700 !important;
  }
  
  .fw-bolder {
    font-weight: bolder !important;
  }
  
  .lh-1 {
    line-height: 1 !important;
  }
  
  .lh-sm {
    line-height: 1.25 !important;
  }
  
  .lh-base {
    line-height: 1.5 !important;
  }
  
  .lh-lg {
    line-height: 2 !important;
  }
  
  .text-start {
    text-align: left !important;
  }
  
  .text-end {
    text-align: right !important;
  }
  
  .text-center {
    text-align: center !important;
  }
  
  .text-decoration-none {
    text-decoration: none !important;
  }
  
  .text-decoration-underline {
    text-decoration: underline !important;
  }
  
  .text-decoration-line-through {
    text-decoration: line-through !important;
  }
  
  .text-lowercase {
    text-transform: lowercase !important;
  }
  
  .text-uppercase {
    text-transform: uppercase !important;
  }
  
  .text-capitalize {
    text-transform: capitalize !important;
  }
  
  .text-wrap {
    white-space: normal !important;
  }
  
  .text-nowrap {
    white-space: nowrap !important;
  }
  
  /* rtl:begin:remove */
  .text-break {
    word-wrap: break-word !important;
    word-break: break-word !important;
  }
  
  /* rtl:end:remove */
  .text-primary {
    color: #0d6efd !important;
  }
  
  .text-secondary {
    color: #6c757d !important;
  }
  
  .text-success {
    color: #198754 !important;
  }
  
  .text-info {
    color: #0dcaf0 !important;
  }
  
  .text-warning {
    color: #ffc107 !important;
  }
  
  .text-danger {
    color: #dc3545 !important;
  }
  
  .text-light {
    color: #f8f9fa !important;
  }
  
  .text-dark {
    color: #212529 !important;
  }
  
  .text-white {
    color: #fff !important;
  }
  
  .text-body {
    color: #212529 !important;
  }
  
  .text-muted {
    color: #6c757d !important;
  }
  
  .text-black-50 {
    color: rgba(0, 0, 0, 0.5) !important;
  }
  
  .text-white-50 {
    color: rgba(255, 255, 255, 0.5) !important;
  }
  
  .text-reset {
    color: inherit !important;
  }
  
  .bg-primary {
    background-color: #0d6efd !important;
  }
  
  .bg-secondary {
    background-color: #6c757d !important;
  }
  
  .bg-success {
    background-color: #198754 !important;
  }
  
  .bg-info {
    background-color: #0dcaf0 !important;
  }
  
  .bg-warning {
    background-color: #ffc107 !important;
  }
  
  .bg-danger {
    background-color: #dc3545 !important;
  }
  
  .bg-light {
    background-color: #f8f9fa !important;
  }
  
  .bg-dark {
    background-color: #212529 !important;
  }
  
  .bg-body {
    background-color: #fff !important;
  }
  
  .bg-white {
    background-color: #fff !important;
  }
  
  .bg-transparent {
    background-color: transparent !important;
  }
  
  .bg-gradient {
    background-image: var(--bs-gradient) !important;
  }
  
  .user-select-all {
    -webkit-user-select: all !important;
    -moz-user-select: all !important;
    user-select: all !important;
  }
  
  .user-select-auto {
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
    user-select: auto !important;
  }
  
  .user-select-none {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    user-select: none !important;
  }
  
  .pe-none {
    pointer-events: none !important;
  }
  
  .pe-auto {
    pointer-events: auto !important;
  }
  
  .rounded {
    border-radius: 0.25rem !important;
  }
  
  .rounded-0 {
    border-radius: 0 !important;
  }
  
  .rounded-1 {
    border-radius: 0.2rem !important;
  }
  
  .rounded-2 {
    border-radius: 0.25rem !important;
  }
  
  .rounded-3 {
    border-radius: 0.3rem !important;
  }
  
  .rounded-circle {
    border-radius: 50% !important;
  }
  
  .rounded-pill {
    border-radius: 50rem !important;
  }
  
  .rounded-top {
    border-top-left-radius: 0.25rem !important;
    border-top-right-radius: 0.25rem !important;
  }
  
  .rounded-end {
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
  }
  
  .rounded-bottom {
    border-bottom-right-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }
  
  .rounded-start {
    border-bottom-left-radius: 0.25rem !important;
    border-top-left-radius: 0.25rem !important;
  }
  
  .visible {
    visibility: visible !important;
  }
  
  .invisible {
    visibility: hidden !important;
  }
  
`