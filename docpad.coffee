# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
languageRegex = /^(.+?)_(en|ru)$/
langBase = {
    'ru' : 'en',
    'en' : 'ru'
    }

fs = require('fs')
glob = require("glob")

docpadConfig = {

plugins:
    grunt:
        writeAfter: false
        generateAfter: ["copy"]

templateData:

    translationUrl: ->

        replaceLang = (str, lang) ->
            str.replace('/' + lang + '/', '/' + langBase[lang] + '/')

        p = @document.relativePath
            .replace(/\d{4}-\d{2}-\d{2}-/, '*')
            .replace('_' + @document.lang, '_' + langBase[@document.lang])
        hasTranslation = glob.sync('src/documents/'+ p).length

        if @document.basename == "index_en"
            return "/ru/"
        if @document.basename == "index_ru"
            return "/"
        if hasTranslation
            return replaceLang(@document.url, @document.lang)

collections:
    translate: (database) ->
        @getCollection('documents').findAllLive({basename: languageRegex}).on 'add', (document) ->
            a = document.attributes
            parts = a.basename.match(languageRegex)
            outPath = document.get('outPath')

            basename = parts[1]
            language = parts[2]

            document.set('lang', language)

            if outPath.indexOf('/pages/') != -1
                document.set('isPage', true)
                newOutPath = outPath
                    .replace('_' + language + '.html', '.html')
                    .replace('/pages/', '/' + language + '/')

                newUrl = "#{language}/#{basename}.#{a.outExtension}"
                if basename == 'index' && language == 'en'
                    newUrl = "#{basename}.#{a.outExtension}"

            if outPath.indexOf('/posts/') != -1
                document.set('isPost', true)
                newOutPath = outPath
                    .replace('_' + language + '.html', '.html')
                    .replace('/posts/', '/' + language + '/posts/')

                ownDate = basename.match(/^(\d{4})-(\d{2})-(\d{2})-/)
                if (ownDate)
                    basename = basename.replace(ownDate[0], '')
                    document.setMeta('date', new Date(ownDate[1], ownDate[2], ownDate[3]))

                if document.get('old')
                    a.relativeOutDirPath = 'issues'

                newUrl = "#{language}/#{a.relativeOutDirPath}/#{basename}.#{a.outExtension}"

            urls = ["/#{newUrl}"]

            document
                .setMetaDefaults({
                    #outPath: newOutPath,
                    url: urls[0]
                })
                .addUrl(urls)

    generated: () ->
        link2Old = (targetPath, targetFile, src) ->
            if !fs.existsSync(targetPath)
                fs.mkdirSync(targetPath)
            target = targetPath + '/' + targetFile
            if fs.existsSync(target)
                fs.unlinkSync(target)
            fs.linkSync(src, target)

        link2Old('./out/en/issues', 'index.html', './out/en/posts/index.html')
        link2Old('./out/ru/issues', 'index.html', './out/ru/posts/index.html')
        link2Old('./out/ru/issues/bem-tools-1.0.0-alpha', 'index.html', './out/ru/issues/bem-tools-100-alpha/index.html')
}



# Export the DocPad Configuration
module.exports = docpadConfig
