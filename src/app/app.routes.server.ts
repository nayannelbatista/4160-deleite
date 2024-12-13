import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  { 
    path: 'about', 
    renderMode: RenderMode.Prerender
  },
  { 
    path: 'details/:id', 
    renderMode: RenderMode.Prerender
  },
  { 
    path: 'checkout', 
    renderMode: RenderMode.Server
  }, 
  { 
    path: '**', 
    renderMode: RenderMode.Server
  }
];