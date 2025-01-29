export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DJ6EQh83.js","app":"_app/immutable/entry/app.CMWY8j58.js","imports":["_app/immutable/entry/start.DJ6EQh83.js","_app/immutable/chunks/entry.BLgmMGJA.js","_app/immutable/chunks/runtime.B01SikfP.js","_app/immutable/chunks/index.DUE-P9-n.js","_app/immutable/entry/app.CMWY8j58.js","_app/immutable/chunks/runtime.B01SikfP.js","_app/immutable/chunks/render.DIpVwXc_.js","_app/immutable/chunks/disclose-version.GLv5MIiH.js","_app/immutable/chunks/if.K72gN4mt.js","_app/immutable/chunks/props.BHIU2SaW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
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
})();
