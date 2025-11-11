import { ClassicEditor, Essentials, Paragraph, Plugin } from 'ckeditor5';
import { Comments, RevisionHistory, TrackChanges } from 'ckeditor5-premium-features';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

// Based on https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/revision-history/revision-history-integration.html

class UsersIntegration extends Plugin {
  static get requires() {
    return ['Users'];
  }

  init() {
    const users = this.editor.plugins.get('Users');

    // minimal dummy user
    users.addUser({ id: 'user-1', name: 'John Doe' });
    users.defineMe('user-1');
  }
}

/**
 * The `RevisionHistoryIntegration` lets you synchronize named revisions in the document with your data source (e.g. a database).
 *
 * To read more about it, visit the CKEditor 5 documentation: https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/revision-history/revision-history-integration.html.
 */
class RevisionHistoryIntegration extends Plugin { }

ClassicEditor
  .create(document.querySelector('#editor2') as HTMLElement, {
    licenseKey: import.meta.env.VITE_CKEDITOR_LICENSE_KEY || 'GPL',
    plugins: [Essentials, Paragraph, UsersIntegration, RevisionHistory],
    toolbar: ['undo', 'redo', 'revisionHistory'],
    revisionHistory: {
      editorContainer: document.querySelector('#editor-container2') as HTMLElement,
      viewerContainer: document.querySelector('#editor-revision-history2') as HTMLElement,
      viewerEditorElement: document.querySelector('#editor-revision-history-editor2') as HTMLElement,
      viewerSidebarContainer: document.querySelector('#editor-revision-history-sidebar2') as HTMLElement,
      resumeUnsavedRevision: true
    },

  })
