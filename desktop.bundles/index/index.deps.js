exports.deps = [
    {
        "block": "page"
    },
    {
        "block": "grid"
    },
    {
        "block": "text"
    },
    {
        "block": "i-bem",
        "elem": "dom"
    },
    {
        "block": "i-bem",
        "elem": "dom",
        "mod": "init"
    },
    {
        "block": "i-bem",
        "elem": "dom",
        "mod": "init",
        "val": "auto"
    },
    {
        "block": "highlight"
    },
    {
        "block": "fonts"
    },
    {
        "block": "articles-list"
    },
    {
        "block": "page",
        "elem": "css"
    },
    {
        "block": "page",
        "elem": "meta"
    },
    {
        "block": "page",
        "elem": "js"
    },
    {
        "block": "header"
    },
    {
        "block": "logo"
    },
    {
        "block": "candies"
    },
    {
        "block": "layout"
    },
    {
        "block": "main"
    },
    {
        "block": "article"
    },
    {
        "block": "box"
    },
    {
        "block": "share"
    },
    {
        "block": "colors"
    },
    {
        "block": "recent-posts"
    },
    {
        "block": "date"
    },
    {
        "block": "comments"
    },
    {
        "block": "related"
    },
    {
        "block": "sidebar"
    },
    {
        "block": "menu-vert"
    },
    {
        "block": "menu-vert",
        "elem": "title"
    },
    {
        "block": "menu-vert",
        "elem": "item"
    },
    {
        "block": "box",
        "elem": "title"
    },
    {
        "block": "link"
    },
    {
        "block": "github",
        "elem": "jquery"
    },
    {
        "block": "github"
    },
    {
        "block": "prompting"
    },
    {
        "block": "languages"
    },
    {
        "block": "social-ico"
    },
    {
        "block": "footer"
    },
    {
        "block": "footer",
        "elem": "left"
    },
    {
        "block": "footer",
        "elem": "center"
    },
    {
        "block": "footer",
        "elem": "right"
    }
];
exports.depsFull = {
    "": {
        "shouldDeps": [
            "page",
            "page__css",
            "page__meta",
            "page__js",
            "header",
            "layout",
            "main",
            "article",
            "recent-posts",
            "comments",
            "related",
            "sidebar",
            "menu-vert",
            "menu-vert__title",
            "menu-vert__item",
            "box",
            "box__title",
            "link",
            "github",
            "prompting",
            "languages",
            "social-ico",
            "footer",
            "footer__left",
            "footer__center",
            "footer__right"
        ],
        "mustDeps": [],
        "item": {},
        "include": true,
        "key": ""
    },
    "page": {
        "shouldDeps": [
            "grid",
            "text",
            "i-bem__dom",
            "i-bem__dom_init",
            "i-bem__dom_init_auto",
            "highlight",
            "fonts",
            "articles-list"
        ],
        "mustDeps": [],
        "item": {
            "block": "page"
        },
        "include": true,
        "key": "page"
    },
    "page__css": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "page",
            "elem": "css"
        },
        "include": true,
        "key": "page__css"
    },
    "page__meta": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "page",
            "elem": "meta"
        },
        "include": true,
        "key": "page__meta"
    },
    "page__js": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "page",
            "elem": "js"
        },
        "include": true,
        "key": "page__js"
    },
    "header": {
        "shouldDeps": [
            "logo",
            "candies"
        ],
        "mustDeps": [],
        "item": {
            "block": "header"
        },
        "include": true,
        "key": "header"
    },
    "layout": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "layout"
        },
        "include": true,
        "key": "layout"
    },
    "main": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "main"
        },
        "include": true,
        "key": "main"
    },
    "article": {
        "shouldDeps": [
            "box",
            "share"
        ],
        "mustDeps": [],
        "item": {
            "block": "article"
        },
        "include": true,
        "key": "article"
    },
    "recent-posts": {
        "shouldDeps": [
            "date"
        ],
        "mustDeps": [
            "colors"
        ],
        "item": {
            "block": "recent-posts"
        },
        "include": true,
        "key": "recent-posts"
    },
    "comments": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "comments"
        },
        "include": true,
        "key": "comments"
    },
    "related": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "related"
        },
        "include": true,
        "key": "related"
    },
    "sidebar": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "sidebar"
        },
        "include": true,
        "key": "sidebar"
    },
    "menu-vert": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "menu-vert"
        },
        "include": true,
        "key": "menu-vert"
    },
    "menu-vert__title": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "menu-vert",
            "elem": "title"
        },
        "include": true,
        "key": "menu-vert__title"
    },
    "menu-vert__item": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "menu-vert",
            "elem": "item"
        },
        "include": true,
        "key": "menu-vert__item"
    },
    "box": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "box"
        },
        "include": true,
        "key": "box"
    },
    "box__title": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "box",
            "elem": "title"
        },
        "include": true,
        "key": "box__title"
    },
    "link": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "link"
        },
        "include": true,
        "key": "link"
    },
    "github": {
        "shouldDeps": [],
        "mustDeps": [
            "github__jquery"
        ],
        "item": {
            "block": "github"
        },
        "include": true,
        "key": "github"
    },
    "prompting": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "prompting"
        },
        "include": true,
        "key": "prompting"
    },
    "languages": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "languages"
        },
        "include": true,
        "key": "languages"
    },
    "social-ico": {
        "shouldDeps": [
            "link"
        ],
        "mustDeps": [],
        "item": {
            "block": "social-ico"
        },
        "include": true,
        "key": "social-ico"
    },
    "footer": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "footer"
        },
        "include": true,
        "key": "footer"
    },
    "footer__left": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "footer",
            "elem": "left"
        },
        "include": true,
        "key": "footer__left"
    },
    "footer__center": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "footer",
            "elem": "center"
        },
        "include": true,
        "key": "footer__center"
    },
    "footer__right": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "footer",
            "elem": "right"
        },
        "include": true,
        "key": "footer__right"
    },
    "grid": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "grid"
        },
        "include": true,
        "key": "grid"
    },
    "text": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "text"
        },
        "include": true,
        "key": "text"
    },
    "i-bem__dom": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "i-bem",
            "elem": "dom"
        },
        "include": true,
        "key": "i-bem__dom"
    },
    "i-bem__dom_init": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "i-bem",
            "elem": "dom",
            "mod": "init"
        },
        "include": true,
        "key": "i-bem__dom_init"
    },
    "i-bem__dom_init_auto": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "i-bem",
            "elem": "dom",
            "mod": "init",
            "val": "auto"
        },
        "include": true,
        "key": "i-bem__dom_init_auto"
    },
    "highlight": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "highlight"
        },
        "include": true,
        "key": "highlight"
    },
    "fonts": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "fonts"
        },
        "include": true,
        "key": "fonts"
    },
    "articles-list": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "articles-list"
        },
        "include": true,
        "key": "articles-list"
    },
    "logo": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "logo"
        },
        "include": true,
        "key": "logo"
    },
    "candies": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "candies"
        },
        "include": true,
        "key": "candies"
    },
    "share": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "share"
        },
        "include": true,
        "key": "share"
    },
    "colors": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "colors"
        },
        "include": true,
        "key": "colors"
    },
    "date": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "date"
        },
        "include": true,
        "key": "date"
    },
    "github__jquery": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "github",
            "elem": "jquery"
        },
        "include": true,
        "key": "github__jquery"
    }
};
