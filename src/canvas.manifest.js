export const manifest = {
  screens: {
    scr_8cj67n: { name: "Home", route: "/#hero", position: { "x": 160, "y": 220 } },
    scr_gp33fx: { name: "About", route: "/#about", position: { "x": 1560, "y": 220 } },
    scr_wjuliq: { name: "Projects", route: "/#projects", position: { "x": 2960, "y": 220 } },
    scr_9ie85q: { name: "Contact", route: "/#contact", position: { "x": 4360, "y": 220 } }
  },
  sections: {
    sec_wujzlb: { name: "Main Navigation", x: 0, y: 0, width: 5720, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_wujzlb", children: [
    { kind: "screen", id: "scr_8cj67n" },
    { kind: "screen", id: "scr_gp33fx" },
    { kind: "screen", id: "scr_wjuliq" },
    { kind: "screen", id: "scr_9ie85q" }]
  }]

};