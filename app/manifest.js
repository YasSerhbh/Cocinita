export default function manifest() {
    return {
        name: "Cocinita",
        short_name: "Cocinita",
        theme_color: "#FF7F3F",
        background_color: "#FFF5E1",
        display: "standalone",
        start_url: "/",
        icons: [
            {
                src: "/favicon/maskable_icon_x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/favicon/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any"
            },
            {
                src: "/favicon/maskable_icon_x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/favicon/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any"
            }
        ],
        id: "cocinitaapp",
        dir: "rtl",
        lang: "ar",
        orientation: "any",
        display_override: [
            "standalone",
            "fullscreen",
            "browser",
            "window-controls-overlay"
        ],
    };
}