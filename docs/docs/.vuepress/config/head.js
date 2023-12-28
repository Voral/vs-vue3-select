import isDeployPreview from './isDeployPreview';
import {meta} from "./meta";

const head = [
    [
        'link',
        {
            href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:400,600|Roboto Mono',
            rel: 'stylesheet',
            type: 'text/css',
        },
    ],
    [
        'link',
        {
            href: '//fonts.googleapis.com/css?family=Dosis:300&amp;text=Vue Select',
            rel: 'stylesheet',
            type: 'text/css',
        },
    ],
    ['link', {rel: 'icon', href: `/favicons/favicon.svg`}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: `/favicons/apple-touch-icon-180x180.png`, sizes: "180x180"}],
    ['link', {rel: "shortcut icon", href: "/favicon.ico"}],
    ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', {rel: "manifest", href: "/favicons/manifest.json"}],
    ['meta', {name: 'msapplication-square150x150logo', content: '/favicons/mstile-150x150.png'}],
    ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png',}],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
    ['link', {rel: 'icon', href: meta.icon, type: 'image/png'}],
    ['meta', {property: 'og:image', content: meta.icon}],
    ['meta', {property: 'og:site_name', content: meta.title}],
    ['meta', {property: 'og:type', content: 'website'}],
]

if (isDeployPreview) {
    head.push(
        ['meta', {name: 'robots', content: 'noindex'}],
        ['meta', {name: 'googlebot', content: 'noindex'}]
    )
}

export default head;
