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
            if page.get('outPath').indexOf('/pages/') != -1
                page.set('isPage', true)
            if page.get('outPath').indexOf('/posts/') != -1
                page.set('isPost', true)
                ownDate = page.get('basename').match(/^(\d{4})-(\d{2})-(\d{2})/)
                if (ownDate)
                    page.setMeta('date', new Date(ownDate[1], ownDate[2], ownDate[3]))

            newOutPath = page.get('outPath').replace('/out/pages/', '/out/')
            newUrl = page.get('url').replace('pages/', '')
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
            isIndex = page.get('basename').match(/^index_/)
            newOutPath = page.get('outPath')
                .replace('/out/', '/out/en/')
                .replace('_en.', '.')
            if isIndex
                newOutPath = newOutPath.replace('/en/', '/')
            page.set('outPath', newOutPath)
            urlPrefix = if isIndex then '' else '/en'
            newUrl = urlPrefix + page.get('url').replace('_en.', '.')
            page.setUrl(newUrl)
}

# Export the DocPad Configuration
module.exports = docpadConfig
