import * as universal from '../entries/pages/series/_id_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/series/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/series/[id]/+page.js";
export const imports = ["_app/immutable/nodes/5.eyQkuuDm.js","_app/immutable/chunks/index.qb8CFH5v.js","_app/immutable/chunks/entry.BLgmMGJA.js","_app/immutable/chunks/runtime.B01SikfP.js","_app/immutable/chunks/index.DUE-P9-n.js","_app/immutable/chunks/series.DLv8pAis.js","_app/immutable/chunks/autores.DwU1tmTh.js","_app/immutable/chunks/disclose-version.GLv5MIiH.js","_app/immutable/chunks/legacy.CGRVBQAI.js","_app/immutable/chunks/stores.B9ky89Pb.js","_app/immutable/chunks/render.DIpVwXc_.js","_app/immutable/chunks/if.K72gN4mt.js","_app/immutable/chunks/each.C_DTy2kP.js","_app/immutable/chunks/attributes.Dw9I5SDb.js","_app/immutable/chunks/props.BHIU2SaW.js","_app/immutable/chunks/Icon.CmCRxGGO.js"];
export const stylesheets = [];
export const fonts = [];
