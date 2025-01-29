import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png","_redirects"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b3ZGx8-h.js","app":"_app/immutable/entry/app.C2aqGMw6.js","imports":["_app/immutable/entry/start.b3ZGx8-h.js","_app/immutable/chunks/entry.il_AWG-j.js","_app/immutable/chunks/runtime.B01SikfP.js","_app/immutable/chunks/index.DUE-P9-n.js","_app/immutable/entry/app.C2aqGMw6.js","_app/immutable/chunks/runtime.B01SikfP.js","_app/immutable/chunks/render.DIpVwXc_.js","_app/immutable/chunks/disclose-version.GLv5MIiH.js","_app/immutable/chunks/if.K72gN4mt.js","_app/immutable/chunks/props.BHIU2SaW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/autores",
				pattern: /^\/autores\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/autores/[id]",
				pattern: /^\/autores\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/series/[id]",
				pattern: /^\/series\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
