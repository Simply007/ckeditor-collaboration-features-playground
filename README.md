# CKEditor 5  Collaboration features iteration showcase

A demonstration project showcasing CKEditor 5's premium collaboration features: track changes, revision history, comments, mentions, and real-time collaboration.

![CKEditor 5 Track Changes Showcase](./assets/creenshot.png)

## Prerequisites

- Node.js (LTS version recommended)
- npm

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create environment file:

   ```bash
   cp .env.template .env
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser to [http://localhost:5173](http://localhost:5173)

## What's Included

This demo includes four separate editor examples on a single page:

1. **Track Changes** - Suggestion tracking with accept/reject functionality
2. **Revision History** - Document version management with side-by-side comparison
3. **Comments** - Inline commenting and discussion threads
4. **Real-Time Collaboration** - Live collaborative editing with all features combined

Each example is self-contained in its own TypeScript file under `src/`.

## CKEditor License

This project uses CKEditor 5 premium features. A **14-day free trial** is available for evaluation:

👉 [Get your free trial license](https://orders.ckeditor.com/trial/premium-features)

For the real-time collaboration example, you'll also need to configure cloud services in your `.env` file.

## Additional Commands

```bash
npm run build    # Build for production
npm run preview  # Preview production build
```

## Resources

- [CKEditor 5 Documentation](https://ckeditor.com/docs/ckeditor5/latest/)
- [Track Changes Integration Guide](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/track-changes/track-changes-integration.html)
- [Revision History Integration Guide](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/revision-history/revision-history-integration.html)
- [Comments Integration Guide](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments-integration.html)
