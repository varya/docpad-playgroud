# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {

    documentsPaths: [
        'ru/pages',
        'en/pages',
        'posts'
    ]

# =================================
    # Collections
    # These are special collections that our website makes available to us

    collections:
        pages_ru: (database) ->
            database.findAllLive({relativeOutDirPath: 'ru/pages'}, [date:-1])
        pages_en: (database) ->
            database.findAllLive({relativeOutDirPath: 'en/pages'}, [date:-1])
        posts: (database) ->
            database.findAllLive({relativeOutDirPath: 'posts'}, [date:-1])
}

# Export the DocPad Configuration
module.exports = docpadConfig
