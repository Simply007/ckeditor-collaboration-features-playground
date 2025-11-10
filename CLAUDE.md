# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CKEditor 5 demonstration project showcasing premium collaboration features: track changes, revision history, comments, and real-time collaboration. Built with Vite, TypeScript, and runs multiple editor instances on a single page.

## Development Commands

```bash
npm install              # Install dependencies
npm run dev             # Start dev server (localhost:5173)
npm run build           # Build for production (tsc + vite build)
npm run preview         # Preview production build
```

## Architecture

### Multi-Instance Editor Setup

The application runs **four separate CKEditor instances** simultaneously on one page (`index.html`), each demonstrating different collaboration features:

1. **Track Changes** (`#editor`, `src/track-changes.ts`): TrackChanges + TrackChangesPreview with sidebar
2. **Revision History** (`#editor2`, `src/revision-history.ts`): RevisionHistory with outline/annotations sidebars and viewer containers
3. **Comments** (`#editor3`, `src/comments.ts`): Comments with archive functionality and sidebar
4. **Real-Time Collaboration** (`#editor4`, `src/real-time-collaborations.ts`): All RealTimeCollaborative* plugins, requires cloud services

Each TypeScript module is loaded via `<script type="module">` tags in index.html.

### Integration Plugin Pattern

All examples follow this pattern:

1. **UsersIntegration** plugin: Manages user data (currently hard-coded dummy user "John Doe")
2. **Empty integration plugins**: CommentsIntegration, TrackChangesIntegration, RevisionHistoryIntegration are placeholder classes for future backend synchronization
3. **ClassicEditor.create()**: Instantiates editor with specific DOM containers and plugin configuration

The empty integration classes are intentional extension points for connecting to a backend data source.

### Container Element Mapping

Each editor requires specific DOM elements defined in index.html:

- Basic editors need: editor div + sidebar div
- Revision history needs: container wrapper + editor + outline sidebar + annotations sidebar + separate viewer container with its own editor and sidebar
- Real-time collaboration uses the same complex structure as revision history

### Environment Variables

`.env` file (template: `.env.template`):
- `VITE_CKEDITOR_LICENSE_KEY`: Defaults to 'GPL' for development
- `VITE_CKEDITOR_CLOUD_SERVICES_TOKEN_URL`: Required only for real-time collaboration
- `VITE_CKEDITOR_CLOUD_SERVICES_WEBSOCKET_URL`: Required only for real-time collaboration

Real-time collaboration (editor 4) uses hardcoded `channelId: 'hardcoded-single-document-id'` for synchronization.
