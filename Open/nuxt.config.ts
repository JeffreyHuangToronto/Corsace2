import { NuxtConfig } from "@nuxt/types";
import nuxtConfig from "../Assets/nuxt.base.config";

export default {
    ...nuxtConfig("open"),
    head: {
        title: "Corsace Open",
        link: [
            { rel: "icon", type: "image/x-icon", href: "/open/favicon.ico" },
            { rel: "icon", type: "image/x-icon", href: "/open/favicon.png" },
        ],
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=1024" },
            // { name: "viewport", content: "width=device-width, initial-scale=1" }, TODO: Fix mobile
            { hid: "description", name: "description", content: "Corsace Open is one of the largest 4v4 tournaments in osu! Hailing great competition and entertaining matches." },
            { hid: "og:title", property: "og:title", content: "Corsace Open" },
            { hid: "og:description", property: "og:description", content: "Corsace Open is one of the largest 4v4 tournaments in osu! Hailing great competition and entertaining matches." },
            { hid: "og:site_name", property: "og:site_name", content: "CO" },
            { hid: "theme-color", name: "theme-color", content: "#F24141" },

            {hid: "og:url", property: "og:url", content: "https://open.corsace.io"}, 
            {hid: "og:type", property: "og:type", content: "website"},                 
            {hid: "og:description", property: "og:description", content: "Corsace Open is one of the largest 4v4 tournaments in osu! Hailing great competition and entertaining matches."},
            {hid: "og:locale",property: "og:locale", content: "en_US"},
            {hid: "og:image",property: "og:image", content: "/_nuxt/_/Assets/img/site/open/banner.png"},
            {hid: "og:image:width",property: "og:image:width", content: "547"},
            {hid: "og:image:height",property: "og:image:height", content: "223"},
            {hid: "og:image:type",property: "og:image:type", content: "image/png"},
            {hid: "og:image:alt",property: "og:image:alt", content: "Corsace Open"},

            {hid: "twitter:description",property: "twitter:description", content: "Corsace Open is one of the largest 4v4 tournaments in osu! Hailing great competition and entertaining matches."},
            {hid: "twitter:site",property: "twitter:site", content: "@corsace_"},
            {hid: "twitter:domain",property: "twitter:domain", content: "https://open.corsace.io"},
            {hid: "twitter:card",property: "twitter:card", content: "summary_large_image"},
            {hid: "twitter:image:src",property: "twitter:image:src", content: "/_nuxt/_/Assets/img/site/open/banner.png"},

            {hid: "keywords", property: "keywords", content: "corsace, corsace open, osu!, tournament, qualifiers, teams"},
        ],
    },
} as NuxtConfig;
