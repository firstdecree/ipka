"use strict";

// Dependencies
const compression = require("compression")
const { parse } = require("smol-toml")
const express = require("express")
const helmet = require("helmet")
const yaml = require("js-yaml")
const path = require("path")
const fs = require("fs")

// Variables
const config = parse(fs.readFileSync("./config.toml", "utf8"))
const web = express()
const port = config.web.port

// Functions
const getKnowledge = (dir) => {
    // Variables
    const list = fs.readdirSync(dir)
    var results = []

    // Core
    list.forEach((file) => {
        const fullPath = path.join(dir, file)
        const stat = fs.statSync(fullPath)

        if (stat && stat.isDirectory()) {
            results = results.concat(getKnowledge(fullPath))
        } else if (file.endsWith(".md")) {
            try {
                const raw = fs.readFileSync(fullPath, 'utf8')
                const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
                var doc = {}
                var content = raw

                if (match) {
                    doc = yaml.load(match[1]) || {}
                    content = match[2]
                }

                results.push({
                    path: path.relative(path.join(__dirname, "knowledge"), fullPath).replace(/\\/g, "/").replace(".md", ""),
                    ...doc,
                    content: content.trim()
                })
            } catch{
                console.error("Failed to parse Markdown:", fullPath)
            }
        }
    })

    return results
}

// Configurations
//* Express
web.use(compression({ level: 1 }))
web.use(helmet({ contentSecurityPolicy: false }))

// Main
web.use(express.static(path.join(__dirname, "public")))
web.get("/api/knowledge", (_, res) => {
    // Core
    try {
        const concepts = getKnowledge(path.join(__dirname, "knowledge"))
        res.json(concepts)
    } catch (e) {
        res.json({ error: e.message })
    }
});

web.use("/{*any}", (_, res) => res.redirect("/"))
web.listen(port, () => console.log(`IPKA is running on port ${port}`))