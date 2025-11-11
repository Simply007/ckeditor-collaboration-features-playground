import { ClassicEditor, CloudServices, Essentials, Paragraph, } from 'ckeditor5';
import { Comments, RealTimeCollaborativeComments, RealTimeCollaborativeEditing, RealTimeCollaborativeRevisionHistory, RealTimeCollaborativeTrackChanges, TrackChanges, RevisionHistory, PresenceList } from 'ckeditor5-premium-features';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

// based on https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments-integration.html


ClassicEditor
    .create(document.querySelector('#editor4') as HTMLElement, {
        licenseKey: import.meta.env.VITE_CKEDITOR_LICENSE_KEY || 'GPL',
        plugins: [Essentials, Paragraph, Comments, CloudServices, TrackChanges, RevisionHistory, RealTimeCollaborativeComments, RealTimeCollaborativeEditing, RealTimeCollaborativeRevisionHistory, RealTimeCollaborativeTrackChanges, PresenceList],
        toolbar: ['undo', 'redo', 'trackChanges', 'revisionHistory', 'comment', 'commentsArchive'],
        cloudServices: {
            tokenUrl: import.meta.env.VITE_CKEDITOR_CLOUD_SERVICES_TOKEN_URL || '',
            webSocketUrl: import.meta.env.VITE_CKEDITOR_CLOUD_SERVICES_WEBSOCKET_URL || ''
        },
        collaboration: {
            channelId: 'hardcoded-single-document-id'
        },
        sidebar: { container: document.querySelector('#sidebar4') as HTMLElement },
        revisionHistory: {
            editorContainer: document.querySelector('#editor-container4') as HTMLElement,
            viewerContainer: document.querySelector('#editor-revision-history4') as HTMLElement,
            viewerEditorElement: document.querySelector('#editor-revision-history-editor4') as HTMLElement,
            viewerSidebarContainer: document.querySelector('#editor-revision-history-sidebar4') as HTMLElement,
            resumeUnsavedRevision: true
        },
        presenceList: { container: document.querySelector('#editor-presence4') as HTMLElement },
    })
