# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
languageRegex = /^(.+?)_(en|ru)$/

docpadConfig = {

collections:
    # Declare `ru` and `en` collections
    ruDocuments: ->
        @getCollection("documents").findAllLive({
            basename: /_ru$/
        })
    enDocuments: ->
        @getCollection("documents").findAllLive({
            basename: /_en$/
        })

events:
    renderBefore: () ->
        # Rewrite `pages/` to the root.
        this.docpad.getCollection('documents').forEach (page) ->
            newOutPath = page.get('outPath').replace('/out/pages/', '/out/')
            newUrl = page.get('url').replace('pages/', '')
            page.set('isPage', true)
            page.set('lang', page.get('basename').replace(languageRegex, '$2'))
            page.set('outPath', newOutPath)
            page.setUrl(newUrl)

        # Rewrite `_ru` to the `/ru/`
        this.docpad.getCollection('ruDocuments').forEach (page) ->
            newOutPath = page.get('outPath')
                .replace('/out/', '/out/ru/')
                .replace('_ru.', '.')
            newUrl = '/ru' + page.get('url')
            page.set('outPath', newOutPath)
            page.setUrl(newUrl)

        # Rewrite `_en` to the `/en/`
        this.docpad.getCollection('enDocuments').forEach (page) ->
            newOutPath = page.get('outPath')
                .replace('/out/', '/out/en/')
                .replace('_en.', '.')
            page.set('outPath', newOutPath)
            newUrl = '/en' + page.get('url').replace('_en.', '.')
            page.setUrl(newUrl)
}

# Export the DocPad Configuration
module.exports = docpadConfig
