# Exercise Search Directory

[Live]( https://sirionfaust.github.io/Wger-exercise-app/)

Overview

A lightweight, responsive web application built to browse, filter, and discover strength training exercises using the Wger REST API. Designed with a focus on clean user experience and performance, this tool allows users to query exercises dynamically by muscle groups and equipment types with automatic English localization.

Features

    REST API Integration: Asynchronous HTTP requests executed via the Fetch API using async/await syntax to fetch real-time exercise data.

    Multi-Parametric Filtering: Dynamic URL query construction enabling seamless combinations of muscle group IDs, equipment IDs, and language constraints.

    Defensive Data Handling: Array searching algorithms utilizing ES6 Array.prototype.find() to systematically extract English language entries (ID 2) with fallback checks for missing metadata.

    Responsive Grid System: Modern layout architecture built with CSS Grid, auto-fill tracking, and minmax() bounds to ensure proper card sizing across mobile and desktop viewports.

    Feedback & Error States: Conditional visual states that clear existing nodes and render centered messaging when query filters yield zero matching records.

Tech Stack

    HTML5: Semantic document structure, form elements, and drop-down selection controls.

    CSS3: CSS Grid, Flexbox alignment, custom card styling, and state-based layout properties.

    Vanilla JavaScript (ES6+): Asynchronous Fetch API, DOM manipulation, array methods (.find(), .forEach()), and event delegation.

    Wger REST API: Third-party RESTful web service providing exercise data, muscle maps, and equipment taxonomies.

Technical Architecture

The application operates on a data-fetching lifecycle managed in Vanilla JavaScript:

    Query Parameter Composition: User selections continuously assemble endpoint strings using conditional logic, appending target parameters (?muscles=, &equipment=, &language=2) based on active dropdown states prior to request execution.

    Localization Pipeline: Raw API responses are filtered via Array.prototype.find() to target language ID 2 (English). If unavailable, the pipeline gracefully defaults to the first existing translation index or a fallback placeholder.

    Declarative Node Generation: On data arrival, the container node clears existing elements before iterating through results to construct cards using document.createElement() and appendChild(), preventing layout duplication and DOM leakage.
