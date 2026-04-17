import type { PluginApi } from './plugin-types';
import MermaidViewer from './MermaidViewer';

export function init(api: PluginApi): void {
  api.register({
    id: 'mermaid-plugin',
    canHandle: (_tab, activeFile) => {
      const name = activeFile?.name ?? '';
      return name.endsWith('.mmd') || name.endsWith('.mermaid');
    },
    priority: 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: MermaidViewer as any,
    onSave: async (tab) => (typeof tab.content === 'string' ? tab.content : null),
  });
}
