exports.musicStructure = { 
    type: 'object',
    required: ["title", "writers", "singer", "language", "isrc"],
    properties: {
        title: {
            type: "string"
        },
        writers: {
            type: "string"
        },
        singer: {
            type: "string"
        },
        language: {
            type: "string"
        },
        isrc: {
            type: "string"
        }
    }
}

