export const bundledGallery = [
  ["astronaut-closeup", "宇航员特写", "透明头盔后凝视前方的宇航员面部特写"],
  ["deep-space-voyage", "深空航行", "飞船驶向深空中的巨大空间裂隙"],
  ["astronaut-planet", "星际远望", "宇航员站在空间站残骸中眺望巨大行星"],
  ["lemon-garden", "柠檬园少女", "戴草帽的少女手持柠檬站在阳光下的果园中"],
].map(([id, label, alt]) => ({
  id: `character-${id}`,
  category: "characters",
  label,
  alt,
  url: `${import.meta.env.BASE_URL}assets/characters/${id}.png`,
}));

export function mergeGallery(assets = [], removedGalleryIds = []) {
  return [...assets, ...bundledGallery.filter((asset) =>
    !removedGalleryIds.includes(asset.id) && !assets.some((saved) => saved.id === asset.id)
  )];
}
